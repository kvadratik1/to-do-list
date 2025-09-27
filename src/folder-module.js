export const folders = [];

class Folder {
  constructor(folderTitle, folderId) {
    this.folderTitle = folderTitle;
    this.folderId = folderId;
    this.notes = [];
  }
}

export function createFolder(folderTitle, folderId) {
  const newFolder = new Folder(folderTitle, folderId);
  folders.push(newFolder);
}
