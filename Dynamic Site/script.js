let bgContainerEle = document.createElement("div");
bgContainerEle.classList.add("bg-container");
document.body.appendChild(bgContainerEle);


let headingEle = document.createElement("h1");
headingEle.classList.add("heading");
headingEle.textContent = "Grocery List"
bgContainerEle.appendChild(headingEle);

let unlistEle = document.createElement("ul");
unlistEle.classList.add("list-container");
bgContainerEle.appendChild(unlistEle);

let itemsArray = ["Butter Milk", "Choco Chips", "Lays", "Ghee"];

for (i of itemsArray){
    let listEle = document.createElement("li");
    listEle.textContent = i;
    unlistEle.appendChild(listEle);
}

let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.id = "homeDelivery";
bgContainerEle.appendChild(inputEle);

let labelEle = document.createElement("label");
labelEle.textContent = "Need Home Delivery";
labelEle.setAttribute("for","homeDelivery");
labelEle.classList.add("label-style")
bgContainerEle.appendChild(labelEle);

let brEle = document.createElement("br");
bgContainerEle.appendChild(brEle);

let btnEle = document.createElement("button");
btnEle.classList.add("btn", "btn-primary");
btnEle.textContent = "Proceed To Pay";
bgContainerEle.appendChild(btnEle);
