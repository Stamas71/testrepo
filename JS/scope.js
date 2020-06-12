// Global scope
var globalName = "Joe" ;

function something() {
    var globalName = "Jack";
    console.log(globalName);
}

something();

console.log(globalName);

// DOM és HTML attributumok

let myNodeList = document.querySelectorAll("input");
for (let i = 0; i < myNodeList.length; i++) {
    myNodeList[i].style.backgroundColor = "red";
}

for (let element in myNodeList) {
    if (element.style) {
    element.style.color = "green";
    }
}

// Több elem módosítása külön függvénnyel

function massModify(selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i][attribute] = value;
        
    }
}