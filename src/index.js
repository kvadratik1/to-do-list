import { Folder } from "./folder-module";

const folders = [];

function createFolder(folderTitle, folderId) {
  const newFolder = new Folder(folderTitle, folderId);
  folders.push(newFolder);
}
createFolder("do something", 5467);
console.log(folders);
