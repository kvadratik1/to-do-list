import { createFolder, folders } from "./folder-module";
import { createNote } from "./note-module";

createFolder("sdrg", 4356);
createNote("wer", "sdf", "", "", 0, 0, folders);
console.log(folders);
