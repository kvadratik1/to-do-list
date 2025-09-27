class Note {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id;
  }
}

export function createNote(
  title,
  description,
  dueDate,
  priority,
  id,
  folderId,
  folders
) {
  const newNote = new Note(title, description, dueDate, priority, id);
  folders[folderId].notes.push(newNote);
}

export function deleteNote(noteId, folderId, folders) {
  folders[folderId].notes.splice(noteId, 1);
}
