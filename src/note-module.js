class Note {
  constructor(title, description, priority, id) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.id = id;
  }
}

export function createNote(title, description, priority, id, folder) {
  const newNote = new Note(title, description, priority, id);
  folder.notes = folder.notes || [];
  folder.notes.push(newNote);
}

export function deleteNote(noteToDelete, folderId, folders) {
  folders[folderId].notes.splice(noteToDelete, 1);
}
