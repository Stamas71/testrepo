let users = [
    {surname:"Berger1", firstname:"Whitney1", age: 22},
    {surname:"Berger2", firstname:"Whitney2", age: 23},
    {surname:"Berger3", firstname:"Whitney3", age: 24},
    {surname:"Berger4", firstname:"Whitney4", age: 25},
    {surname:"Berger5", firstname:"Whitney5", age: 26},
    {surname:"Berger6", firstname:"Whitney6", age: 27},
    {surname:"Berger7", firstname:"Whitney7", age: 28}
];
let tableBody = document.querySelector("#userTable tbody");

let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
        
    }


