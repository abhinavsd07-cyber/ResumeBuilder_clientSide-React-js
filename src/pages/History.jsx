import React, { useEffect, useState } from "react";
import { deleteResume, getResumeData, updateResume } from "../services/allAPI";
import Swal from "sweetalert2";
import Preview from "../component/Preview";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const History = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({
    id: "",
    fullName: "",
    jobTitle: "",
    location: "",
    email: "",
    phoneNumber: "",
    githubLink: "",
    linkedinLink: "",
    portfolioLink: "",
    courseName: "",
    collegeName: "",
    university: "",
    YOP: "",
    internship: "",
    companyName: "",
    companyLocation: "",
    duration: "",
    skills: [],
    summary: "",
  });

  console.log(editData);

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "85%",
    maxWidth: 900,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid rgba(0,0,0,0.12)",
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto",
  };

  useEffect(() => {
    displayResumeData();
  }, []);

  const displayResumeData = async () => {
    try {
      let apiResponse = await getResumeData();
      if (apiResponse.status === 200) {
        setData(apiResponse.data);
      } else {
        Swal.fire({
          title: "ERROR",
          text: "Error occured while fetching resumes!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "ERROR",
        text: "Network or server error.",
        icon: "error",
      });
    }
  };

  const onDeleteClick = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete resume?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    });
    if (!confirm.isConfirmed) return;

    try {
      let apiResponse = await deleteResume(id);
      if (apiResponse.status === 200) {
        Swal.fire({
          title: "SUCCESS",
          text: "Resume deleted!",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
        displayResumeData();
      } else {
        Swal.fire({
          title: "ERROR",
          text: "Error occured while deleting!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "ERROR",
        text: "Network or server error.",
        icon: "error",
      });
    }
  };

  const handleEditOpen = (resume) => {
    const safeResume = { ...resume, skills: resume.skills || [] };
    setEditData(safeResume);
    setInputValue("");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const addSkill = (skill) => {
    const trimmed = (skill || "").trim();
    if (!trimmed) {
      setInputValue("");
      return;
    }
    if (editData.skills.includes(trimmed)) {
      Swal.fire({
        title: "Skill already added",
        text: "You already added this skill",
        icon: "info",
      });
      setInputValue("");
      return;
    }
    setEditData({ ...editData, skills: [...editData.skills, trimmed] });
    setInputValue("");
  };

  const removeSkill = (skillToRemove) => {
    setEditData({
      ...editData,
      skills: editData.skills.filter((s) => s !== skillToRemove),
    });
  };

  const saveEdit = async () => {
    try {
      let apiResponse = await updateResume(editData.id, editData);
      if (apiResponse.status === 200) {
        Swal.fire({
          title: "SUCCESS",
          text: "Resume updated!",
          icon: "success",
        });
        handleClose();
        displayResumeData();
      } else {
        Swal.fire({
          title: "ERROR",
          text: "Error occured while updating!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "ERROR",
        text: "Network or server error on update.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container">
      {data.length > 0 ? (
        <div className="row">
          {data.map((eachResume) => (
            <div className="col-6" key={eachResume.id || eachResume._id}>
              <div className="text-center mt-5">
                <button
                  className="btn btn-outline-warning mx-2"
                  onClick={() => handleEditOpen(eachResume)}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteClick(eachResume.id || eachResume._id)}
                  className="btn btn-outline-danger mx-2"
                >
                  Delete
                </button>
              </div>
              <Preview resumeData={eachResume} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-danger">No Resume Added</h1>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-resume-modal"
        aria-describedby="edit-resume-form"
      >
        <Box sx={style}>
          <div className="row">
            <div className="col-6">
              <TextField
                onChange={(e) =>
                  setEditData({ ...editData, fullName: e.target.value })
                }
                label="Full name"
                variant="standard"
                value={editData.fullName}
                fullWidth
                margin="dense"
              />
              <TextField
                label="Job title"
                variant="standard"
                value={editData.jobTitle}
                onChange={(e) =>
                  setEditData({ ...editData, jobTitle: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Location"
                variant="standard"
                value={editData.location}
                onChange={(e) =>
                  setEditData({ ...editData, location: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Email"
                variant="standard"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Phone number"
                variant="standard"
                value={editData.phoneNumber}
                onChange={(e) =>
                  setEditData({ ...editData, phoneNumber: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="GitHub"
                variant="standard"
                value={editData.githubLink}
                onChange={(e) =>
                  setEditData({ ...editData, githubLink: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="LinkedIn"
                variant="standard"
                value={editData.linkedinLink}
                onChange={(e) =>
                  setEditData({ ...editData, linkedinLink: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Portfolio"
                variant="standard"
                value={editData.portfolioLink}
                onChange={(e) =>
                  setEditData({ ...editData, portfolioLink: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Course name"
                variant="standard"
                value={editData.courseName}
                onChange={(e) =>
                  setEditData({ ...editData, courseName: e.target.value })
                }
                fullWidth
                margin="dense"
              />
            </div>

            <div className="col-6">
              <TextField
                label="College Name"
                variant="standard"
                value={editData.collegeName}
                onChange={(e) =>
                  setEditData({ ...editData, collegeName: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="University"
                variant="standard"
                value={editData.university}
                onChange={(e) =>
                  setEditData({ ...editData, university: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Year of passout"
                variant="standard"
                value={editData.YOP}
                onChange={(e) =>
                  setEditData({ ...editData, YOP: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Job or Internship"
                variant="standard"
                value={editData.internship}
                onChange={(e) =>
                  setEditData({ ...editData, internship: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Company Name"
                variant="standard"
                value={editData.companyName}
                onChange={(e) =>
                  setEditData({ ...editData, companyName: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Company Location"
                variant="standard"
                value={editData.companyLocation}
                onChange={(e) =>
                  setEditData({ ...editData, companyLocation: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Duration"
                variant="standard"
                value={editData.duration}
                onChange={(e) =>
                  setEditData({ ...editData, duration: e.target.value })
                }
                fullWidth
                margin="dense"
              />
              <TextField
                label="Summary"
                variant="standard"
                value={editData.summary}
                onChange={(e) =>
                  setEditData({ ...editData, summary: e.target.value })
                }
                fullWidth
                margin="dense"
              />

              <Typography variant="h6" className="mt-3">
                Skills
              </Typography>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <TextField
                  onChange={(e) => setInputValue(e.target.value)}
                  id="skill"
                  label="Skill"
                  variant="standard"
                  value={inputValue}
                  margin="dense"
                />
                <button
                  onClick={() => addSkill(inputValue)}
                  className="mt-3 btn btn-outline-primary"
                >
                  Add
                </button>
              </div>

              <div className="mt-2">
                {editData?.skills?.length > 0 ? (
                  editData.skills.map((eachSkill) => (
                    <button
                      key={eachSkill}
                      className="btn btn-outline-primary m-1"
                      type="button"
                      onClick={() => removeSkill(eachSkill)}
                      title="Click to remove"
                    >
                      {eachSkill} &nbsp; ✕
                    </button>
                  ))
                ) : (
                  <Typography variant="body2">No skills added</Typography>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-end">
            <Button
              variant="contained"
              className="me-2"
              color="warning"
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={saveEdit}>
              Save Changes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default History;
