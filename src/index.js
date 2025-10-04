import { createFolder, deleteFolder } from "./folder-module";
import { createNote, deleteNote } from "./note-module";
import { showFolders } from "./ui-module";
import "./style.css";
import { id } from "date-fns/locale";

const addFolderButton = document.querySelector("#addFolderBtn");

const folders = [];

createFolder("sdrg", 4356, folders);
createNote("note", "sdf", "", "", 0, 0, folders);
createNote("note to delete", "sghj", "", "", 1, 0, folders);
console.log(folders);
showFolders(folders);

addFolderButton.addEventListener("click", triggerCreateFolderWindow);

function triggerCreateFolderWindow() {
  const folderName = prompt("Choose your folder name");
  if (folderName === null) return;
  createFolder(folderName, folders.length + 1, folders);
  showFolders(folders);
}
