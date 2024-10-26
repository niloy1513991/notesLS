const notesContainer = document.getElementById("notesContainer");
const createBtn = document.getElementById("btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
    addEventListenersToNotes();
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function addEventListenersToNotes() {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.addEventListener("keyup", updateStorage);
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.innerHTML = "&#8203;";
    inputBox.className = "input-box";
    img.className = "img";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("data-placeholder", "Start typing here...");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    addEventListenersToNotes();
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() === "img") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

showNotes();