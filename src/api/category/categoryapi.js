import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/category`;

export const getCategory = async setCateList => {
  try {
    const res = await axios.get(path);
    console.log(res.data);
    setCateList(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const postCategory = async (obj, categoryPostResultAction) => {
  try {
    const res = await axios.post(path, obj);
    categoryPostResultAction(res.data.result);
  } catch (error) {
    categoryPostResultAction(-500);
  }
};
export const putCategory = async () => {
  try {
    const res = await axios.put(path);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchCategory = async () => {
  try {
    const res = await axios.fetch(path);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteCategory = async () => {
  try {
    const res = await axios.delete(path);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
