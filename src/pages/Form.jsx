import React, { useState } from "react";
import StepperComponent from "../component/StepperComponent";
import Preview from "../component/Preview";

const Form = () => {
  const [resumeData, setResumeData] = useState({
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
  return (
    <>
      <div className="row mt-5 mx-2">
        <div className="col-md-6 ">
          <StepperComponent
            setResumeData={setResumeData}
            resumeData={resumeData}
          />
        </div>
        <div className="col-md-6 ">
          <Preview resumeData={resumeData} />
        </div>
      </div>
    </>
  );
};

export default Form;
