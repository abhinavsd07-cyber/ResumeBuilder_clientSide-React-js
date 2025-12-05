import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { LuFileDown } from "react-icons/lu";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Preview = ({ resumeData }) => {
  const onClickDownload = async () => {
    let paperElement = document.getElementById("paper");
    let paperCanvas = await html2canvas(paperElement,{scale:2});
    let imgURL = paperCanvas.toDataURL("image/png");
    let pdf = new jsPDF("p", "mm", "a4");
    let pdfWidth = pdf.internal.pageSize.getWidth();
    let pdfHight = (pdfWidth * paperCanvas.height) / paperCanvas.width;
    pdf.addImage(imgURL, "png", 0, 0, pdfWidth, pdfHight);
    pdf.save("resume.pdf");
  };

  return (
    <div>
      <div className="text-end p-3 text-primary">
        <button className="btn  fs-3" onClick={onClickDownload}>
          <LuFileDown />
        </button>
      </div>
      <Paper id="paper" elevation={6} className="p-5 mb-4 ">
        <Typography variant="h4" className="text-center">
          {resumeData?.fullName}
        </Typography>
        <Typography variant="h6" className="text-center" color="#0277bd">
          {resumeData?.jobTitle}
        </Typography>
        <div className="text-center my-1">
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.phoneNumber}
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.email}
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.location}
          </Typography>
          |
        </div>
        <div className="text-center my-1">
          <Typography variant="p" className="text-center mx-1" color="blue">
            {" "}
            <Link>{resumeData?.githubLink}</Link>
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1" color="blue">
            <Link>{resumeData?.linkedinLink}</Link>
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1" color="blue">
            <Link>{resumeData?.portfolioLink}</Link>
          </Typography>
        </div>

        <Divider className="mt-5">Summary</Divider>
        <Typography variant="p">{resumeData?.summary}</Typography>

        <Divider className="mt-5">Education</Divider>
        <div className="text-center my-1">
          <Typography variant="h6" className="text-center mx-1">
            {resumeData?.courseName}
          </Typography>
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.collegeName}
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.university}
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.YOP}
          </Typography>
        </div>
        <Divider className="mt-5">Professional Experience</Divider>
        <div className="text-center my-1">
          <Typography variant="h6" className="text-center mx-1">
            {resumeData?.internship}
          </Typography>
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.companyName}
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.companyLocation}
          </Typography>
          |
          <Typography variant="p" className="text-center mx-1">
            {resumeData?.duration}
          </Typography>
        </div>
        <Divider className="mt-5">Skills</Divider>
        {resumeData.skills.length < 0 ? (
          <Typography variant="p" className="text-center mx-1">
            Add skills
          </Typography>
        ) : (
          resumeData.skills.map((eachSkill) => (
            <>
              <span class="badge text-bg-light  m-2">{eachSkill}</span>
            </>
          ))
        )}
      </Paper>
    </div>
  );
};

export default Preview;
