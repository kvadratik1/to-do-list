import { createFolder, folders, deleteFolder } from "./folder-module";
import { createNote, deleteNote } from "./note-module";

createFolder("sdrg", 4356);
createNote("note", "sdf", "", "", 0, 0, folders);
createNote("note to delete", "sghj", "", "", 1, 0, folders);
console.log(folders);
deleteNote(1, 0, folders);
console.log(folders);
deleteFolder(0);
console.log(folders);
