import axios from "axios";

const API = "https://nodejs-swagger-api.vercel.app/posts";

export const fetchProject = async () => {
  try {
    const response = await axios.get(API);
    console.log("api", response.data);
    const projects = response.data;
    return projects;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
