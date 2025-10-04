const container = document.querySelector("#container");

export function showFolders(folders) {
  for (let i = 0; i < folders.length; i++) {
    const folder = document.createElement("div");
    folder.textContent = folders[i].title;
    container.appendChild(folder);
  }
}
