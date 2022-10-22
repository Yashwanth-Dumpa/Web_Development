let todoItemsEle = document.getElementById("todoItemsContainer");

let todoEle = document.createElement("li");
todoEle.classList.add("d-flex", "flex-row", "todo-item-container");
todoItemsEle.appendChild(todoEle);

let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.classList.add("checkbox-input");
inputEle.id = "checkboxInput";
todoEle.appendChild(inputEle);

let labelContainerEle = document.createElement("div");
labelContainerEle.classList.add("d-flex", "flex-row", "label-container");
todoEle.appendChild(labelContainerEle);


let labelEle = document.createElement("label");
labelEle.textContent = "Learn HTML";
labelEle.setAttribute("for","checkboxInput");
labelEle.classList.add("checkbox-label");
labelContainerEle.appendChild(labelEle);

let delContEle = document.createElement("div");
delContEle.classList.add("delete-icon-container");
labelContainerEle.appendChild(delContEle);

let iconEle = document.createElement("i");
iconEle.classList.add("far","fa-trash-alt","delete-icon");
delContEle.appendChild(iconEle);

console.log(todoItemsEle);