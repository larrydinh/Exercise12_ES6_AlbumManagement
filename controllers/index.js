import { Album } from "../models/Album.js";
import { TaskService } from "../models/TaskService.js";

let album =  new Album();
const taskSV = new TaskService();

//Get data from mockAPI
const getAllAlbum = async () => {
  try {
    const result = await taskSV.getAllAlbum();
    console.log("result", result.data);
  } catch (err) {
    console.log(err);
  }
};
getAllAlbum();

document.getElementById("btnThemAlbum").onclick =() => {
    

}