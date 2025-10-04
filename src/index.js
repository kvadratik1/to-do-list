import { createFolder, deleteFolder } from "./folder-module";
import { createNote, deleteNote } from "./note-module";
import { showFolders } from "./ui-module";
import "./style.css";
import { id } from "date-fns/locale";

const addFolderButton = document.querySelector("#addFolderBtn");

const folders = [];

showFolders(folders);

addFolderButton.addEventListener("click", triggerCreateFolderWindow);

function triggerCreateFolderWindow() {
  const folderName = prompt("Choose your folder name");
  if (folderName === null) return;
  createFolder(folderName, folders.length + 1, folders);
  showFolders(folders);
}
