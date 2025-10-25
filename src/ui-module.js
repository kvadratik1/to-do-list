const folderContainer = document.querySelector("#folder-container");

export function showFolders(folders) {
  folderContainer.replaceChildren();
  for (let i = 0; i < folders.length; i++) {
    const folder = document.createElement("div");
    folder.textContent = folders[i].title;
    folder.setAttribute("id", folders[i].id);
    folder.className = "folder";

    folder.addEventListener("click", () => {
      localStorage.setItem("chosenFolder", folders[i].id);
    });

    folderContainer.appendChild(folder);
  }
}

const notesContainer = document.querySelector("#notes-container");

export function showNotes(notes) {
  notesContainer.replaceChildren();
  for (let i = 0; i < notes.length; i++) {
    const note = document.createElement("div");
    note.textContent = notes[i].description;
    note.setAttribute("id", notes[i].id);
    note.className = "note";

    notesContainer.appendChild(note);
  }
}
