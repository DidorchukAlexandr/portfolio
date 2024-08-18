import axios from "axios";
import { projectsData } from "./buckupData";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getProjects = () =>
  axios
    .get()
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.message);
      return projectsData;
    });

const skillsList = [
  { type: "front", name: "HTML", level: "Intermediate" },
  { type: "front", name: "CSS", level: "Intermediate" },
  { type: "front", name: "JavaScript", level: "Intermediate" },
  { type: "front", name: "React", level: "Intermediate" },
  { type: "front", name: "TypeScript", level: "Beginner" },
  { type: "front", name: "ReactNative", level: "Beginner" },

  { type: "back", name: "Node Js", level: "Basic" },
  { type: "back", name: "Firebase", level: "Basic" },
  { type: "back", name: "MongoDB", level: "Intermediate" },
  { type: "back", name: "Postman", level: "Basic" },
];

export const getSkills = (type) => {
  return skillsList.filter((i) => i.type === type);
};
