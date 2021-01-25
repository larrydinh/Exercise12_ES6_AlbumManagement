import { BaseService } from "./BaseService.js";
export class TaskService extends BaseService {
  constructor() {
    super(); //gọi lại phương thức constructor của class cha
  }
  //Định nghĩa phương thưc getAllTask
  getAllAlbum = () => {
    return this.get("https://600e8b303bb1d100179df783.mockapi.io/album");
  };
  getOneAlbum = () => {
    return this.get(
      `https://600e8b303bb1d100179df783.mockapi.io/album/${albumName}`
    );
  };
  postAllAlbum = (albumName) => {
    return this.post(
      `https://600e8b303bb1d100179df783.mockapi.io/album/${albumName}`,
      albumName
    );
  };
  postOneAlbum = (albumName) => {
    return this.put(
      `https://600e8b303bb1d100179df783.mockapi.io/album/${albumName}`
    );
  };
  deleteAlbum = (albumName) => {
    return this.delete(
      `https://600e8b303bb1d100179df783.mockapi.io/album/${albumName}`
    );
  };
}
