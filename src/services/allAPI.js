import axiosConfig from "./axiosConfig";
import { baseURL } from "./baseURL";

export const addResume = async (reqBody) => {
  return await axiosConfig("post", `${baseURL}/resumeData`, reqBody);
};

export const getResumeData = async () => {
  return await axiosConfig("get", `${baseURL}/resumeData`, "");
};

export const deleteResume = async (id) => {
  return await axiosConfig("delete", `${baseURL}/resumeData/${id}`, {});
};

export const updateResume = async (id, reqBody) => {
  return await axiosConfig("put", `${baseURL}/resumeData/${id}`, reqBody);
};
