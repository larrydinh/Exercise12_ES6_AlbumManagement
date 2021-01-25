export class Album {
  picLink = "";
  picDescription = "";
  picType = "";
  albumName = "";
  constructor() {}
  dispAlbum() {
    return "";
  }
}


// export class AlbumList {
//   albumList = [];
//   constructor() {}
//   addAlbum(picture) {
//     this.albumList.push(picture);
//   }
//   deleteAlbum(albumName) {
//     let index = this.albumList.findIndex(
//       (item) => item.albumName === albumName
//     );
//     if (index !== -1) {
//       this.albumList.splice(index, 1);
//     }
//   }
//   saveAlbum() {
//     //save menu to local storage
//     let sAlbum = JSON.stringify(this.albumList);
//     localStorage.setItem("album", sAlbum);
//   }
//   getAlbum() {
//     //get album from the local storage, then add propeties to albumList
//     if (localStorage.getItem("album")) {
//       let album = JSON.parse(localStorage.getItem("album"));
//       this.albumList = album;
//     } else {
//       this.albumList = [];
//     }
//   }
// }
