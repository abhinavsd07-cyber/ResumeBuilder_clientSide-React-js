import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { duration } from "@mui/material";
import Swal from "sweetalert2";
import { addResume } from "../services/allAPI";

const steps = [
  "Basic Information",
  "Contact Details",
  "Education Details",
  "Work Experience",
  "Skills & Certifications",
  "Review and Submit",
];

const StepperComponent = ({ setResumeData, resumeData }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const addSkiil = (skill) => {
    if (resumeData.skills.includes(skill)) {
      Swal.fire({
        title: "Skiils already added",
        text: "You already added this skills",
        icon: "info",
      });
      setInputValue("");
    } else {
      setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] });
      setInputValue("");
    }
  };

  const createResume = async () => {
    if (
      resumeData.fullName == "" ||
      resumeData.jobTitle == "" ||
      resumeData.location == "" ||
      resumeData.email == "" ||
      resumeData.phoneNumber == "" ||
      resumeData.githubLink == "" ||
      resumeData.linkedinLink == "" ||
      resumeData.portfolioLink == "" ||
      resumeData.courseName == "" ||
      resumeData.collegeName == "" ||
      resumeData.university == "" ||
      resumeData.YOP == "" ||
      resumeData.internship == "" ||
      resumeData.companyName == "" ||
      resumeData.companyLocation == "" ||
      resumeData.duration == "" ||
      resumeData.skills == [] ||
      resumeData.summary == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Please fill the form!",
      });
      console.log(resumeData);
    } else {
      try {
        let apiResponse = await addResume(resumeData);
        if (apiResponse.status == 201) {
          Swal.fire({
            icon: "success",
            title: "SAVED",
            text: "Successfully saved",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Error occured while calling API",
          });
        }
      } catch {
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Error occured while calling API",
        });
      }
    }
  };

  const displayForm = (currentStep) => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Typography variant="h5" className="mt-5">
              Personal Details
            </Typography>
            <TextField
              id="full-name"
              label="Full Name"
              variant="standard"
              className="w-100"
              // onChange={(e) => setResumeData(e.target.value)}
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
              value={resumeData.fullName}
            />
            <TextField
              id="job-title"
              label="Job Title"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, jobTitle: e.target.value })
              }
              value={resumeData.jobTitle}
            />
            <TextField
              id="location"
              label="Location"
              variant="standard"
              className="w-100 mb-4"
              onChange={(e) =>
                setResumeData({ ...resumeData, location: e.target.value })
              }
              value={resumeData.location}
            />
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h5" className="mt-5">
              Contact Details
            </Typography>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
              value={resumeData.email}
            />
            <TextField
              id="phone"
              label="Phone"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, phoneNumber: e.target.value })
              }
              value={resumeData.phoneNumber}
            />
            <TextField
              id="github-link"
              label="GitHub Profile Link"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, githubLink: e.target.value })
              }
              value={resumeData.githubLink}
            />
            <TextField
              id="linkedIn-link"
              label="LinkedIn Profile Link"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedinLink: e.target.value })
              }
              value={resumeData.linkedinLink}
            />
            <TextField
              id="portfolio-link"
              label="Portfolio Link"
              variant="standard"
              className="w-100 mb-4"
              onChange={(e) =>
                setResumeData({ ...resumeData, portfolioLink: e.target.value })
              }
              value={resumeData.portfolioLink}
            />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" className="mt-5">
              Education Details
            </Typography>
            <TextField
              id="course-name"
              label="Course Name"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, courseName: e.target.value })
              }
              value={resumeData.courseName}
            />
            <TextField
              id="college-name"
              label="College Name"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, collegeName: e.target.value })
              }
              value={resumeData.collegeName}
            />
            <TextField
              id="University"
              label="University"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
              value={resumeData.university}
            />
            <TextField
              id="year-passout"
              label="Year of Passout"
              variant="standard"
              className="w-100 mb-4"
              onChange={(e) =>
                setResumeData({ ...resumeData, YOP: e.target.value })
              }
              value={resumeData.YOP}
            />
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h5" className="mt-5">
              Professional Details
            </Typography>
            <TextField
              id="job-intership"
              label="Job or Intership"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, internship: e.target.value })
              }
              value={resumeData.internship}
            />
            <TextField
              id="company-name"
              label="Company Name"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({ ...resumeData, companyName: e.target.value })
              }
              value={resumeData.companyName}
            />
            <TextField
              id="location"
              label="Location"
              variant="standard"
              className="w-100"
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  companyLocation: e.target.value,
                })
              }
              value={resumeData.companyLocation}
            />
            <TextField
              id="duration"
              label="Duration"
              variant="standard"
              className="w-100 mb-4"
              onChange={(e) =>
                setResumeData({ ...resumeData, duration: e.target.value })
              }
              value={resumeData.duration}
            />
          </>
        );
      case 4:
        return (
          <>
            <Typography variant="h5" className="mt-5">
              Skills
            </Typography>
            <TextField
              id="add-skill"
              label="Add Skill"
              variant="standard"
              className="w-100"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              className="mt-2"
              variant="text"
              onClick={() => addSkiil(inputValue)}
            >
              Add
            </Button>
            <Typography variant="h6" className="mt-2">
              Suggestions:
            </Typography>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("React")}
            >
              React
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("Angular")}
            >
              Angular
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("Node JS")}
            >
              NodeJS
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("Express")}
            >
              Express
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("Mongo DB")}
            >
              MongoDB
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("GIT")}
            >
              GIT
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("HTML")}
            >
              HTML
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("CSS")}
            >
              CSS
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("BOOTSTRAP")}
            >
              BOOTSTRAP
            </Button>
            <Button
              variant="outlined"
              className="m-1"
              onClick={() => addSkiil("Tailwind")}
            >
              TAILWIND
            </Button>
            <Typography variant="h6" className="my-3">
              Add Skills:
            </Typography>
          </>
        );
      case 5:
        return (
          <>
            <Typography variant="h5" className="mt-5">
              Professional Summary
            </Typography>
            <TextField
              id="summary"
              label="Write a short summary of yourself"
              multiline
              rows={4}
              variant="standard"
              className="w-100 my-3"
              onChange={(e) =>
                setResumeData({ ...resumeData, summary: e.target.value })
              }
              value={resumeData.summary}
            />
          </>
        );
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {displayForm(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={createResume}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default StepperComponent;
