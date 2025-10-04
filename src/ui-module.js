const container = document.querySelector("#container");

export function showFolders(folders) {
  container.replaceChildren();
  for (let i = 0; i < folders.length; i++) {
    const folder = document.createElement("div");
    folder.textContent = folders[i].title;
    folder.setAttribute("id", folders[i].id);
    container.appendChild(folder);
  }
}
