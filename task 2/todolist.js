const inputbox = document.getElementById("show");
const list = document.getElementById("taskList");
let editMode = false;
let currentLi = null;

function addTask() {
  if (inputbox.value === "") {
    alert("You must write something in the list");
  } else {
    if (editMode && currentLi) {
      currentLi.childNodes[0].textContent = inputbox.value;
      editMode = false;
      currentLi = null;
    } else {
      const li = document.createElement("li");
      li.innerHTML = inputbox.value;

      const ma = document.createElement("div");
      ma.classList.add("myclass");

      const updateSpan = document.createElement("span");
      updateSpan.innerHTML = "\u270E";
      li.appendChild(updateSpan);

      const deleteSpan = document.createElement("span");
      deleteSpan.innerHTML = "\u00d7";
      li.appendChild(deleteSpan);

      list.insertBefore(li, list.firstChild);
      ma.appendChild(updateSpan);
      ma.appendChild(deleteSpan);
      li.appendChild(ma);

      inputbox.value = "";

      updateSpan.addEventListener("click", function () {
        inputbox.value = li.childNodes[0].textContent;
        inputbox.focus();
        editMode = true;
        currentLi = li;
      });

      deleteSpan.addEventListener("click", function () {
        li.remove();
      });
    }
    inputbox.value = "";
  }
}
