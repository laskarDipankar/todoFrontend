import { atom } from "recoil";

export const apiState = atom({
  key: "uAPI",
  default: `https://taskmanagementtodo.herokuapp.com/api/users`,
});

export const apitask = atom({
  key: "tAPI",
  default: `https://taskmanagementtodo.herokuapp.com/api/tasks`,
});
