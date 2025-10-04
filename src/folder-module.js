class Folder {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.notes = [];
  }
}

export function createFolder(title, id, folders) {
  const newFolder = new Folder(title, id);
  folders.push(newFolder);
}

export function deleteFolder(id, folders) {
  folders.splice(id, 1);
}
