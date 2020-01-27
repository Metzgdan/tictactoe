let gameTable = function () {
    table.innerText = "Select";
    let content = document.getElementById("content");
    content.appendChild(table);
    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    row1.innerText = "select";
    let row2 = document.createElement("TR");
    row2.innerText = "select";
    let row3 = document.createElement("TR");
    row3.innerText = "select";
    let row4 = document.createElement("TR");
    row4.innerText = "select";
    let box1 = document.createElement("TD");
    box1.innerText = "Select";
    let box2 = document.createElement("TD");
    box2.innerText = "Select";
    let box3 = document.createElement("TD");
    box3.innerText = "Select";
    let box4 = document.createElement("TD");
    box4.innerText = "Select";
    let box5 = document.createElement("TD");
    box5.innerText = "Select";
    let box6 = document.createElement("TD");
    box6.innerText = "Select";
    let box7 = document.createElement("TD");
    box7.innerText = "Select";
    let box8 = document.createElement("TD");
    box8.innerText = "Select";
    let box9 = document.createElement("TD");
    box9.innerText = "Select";




    row2.appendChild(box1);
    row2.appendChild(box2);
    row2.appendChild(box3);

    row3.appendChild(box4);
    row3.appendChild(box5);
    row3.appendChild(box6);

    row4.appendChild(box7);
    row4.appendChild(box8);
    row4.appendChild(box9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);

};
