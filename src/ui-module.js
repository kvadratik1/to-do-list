const folderContainer = document.querySelector("#folder-container");

export function showFolders(folders) {
  folderContainer.replaceChildren();
  for (let i = 0; i < folders.length; i++) {
    const folder = document.createElement("div");
    folder.textContent = folders[i].title;
    folder.setAttribute("id", folders[i].id);
    folder.className = "folder";
    folderContainer.appendChild(folder);

    folder.addEventListener("click", () => {
      localStorage.setItem("chosenFolder", folders[i].id);
    });
  }
}
