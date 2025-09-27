import { createFolder, deleteFolder } from "./folder-module";
import { createNote, deleteNote } from "./note-module";
import { showFolders } from "./ui-module";

const folders = [];

createFolder("sdrg", 4356, folders);
createNote("note", "sdf", "", "", 0, 0, folders);
createNote("note to delete", "sghj", "", "", 1, 0, folders);
console.log(folders);
showFolders(folders);
