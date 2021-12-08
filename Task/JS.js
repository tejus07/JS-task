let allDetails = [];
let count = 0;
function addToObject() {
    console.log("in function");
    let nameVal = document.getElementById("name").value,
        phoneVal = document.getElementById("phone").value,
        dobVal = document.getElementById("dob").value,
        emailVal = document.getElementById("email").value;

    let checkboxesVal = document.getElementsByName('sub');
    let checkVals = [];
    for (let i = 0; i < checkboxesVal.length; i++) {
        if (checkboxesVal[i].checked) {
            checkVals.push(checkboxesVal[i].value);
        }
    }

    let radioboxVal = document.getElementsByName('gender');
    let radioVals = [];
    for (let i = 0; i < radioboxVal.length; i++) {
        if (radioboxVal[i].checked) {
            radioVals.push(radioboxVal[i].value);
        }
    }
    console.log("RadioValue -" + radioVals);
    count++;
    console.log(count);
    let obj = {
        number: count,
        name: nameVal,
        phone: phoneVal,
        age: dobVal,
        email: emailVal,
        sub: checkVals,
        gender: radioVals
    }
    allDetails.push(obj);
    console.log(allDetails);
    let table = document.getElementById("table");
    console.log(table);
    let i = allDetails.length
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.innerHTML = nameVal;
    cell2.innerHTML = phoneVal;
    cell3.innerHTML = dobVal;
    cell4.innerHTML = emailVal;
    cell5.innerHTML = checkVals.toString();
    cell6.innerHTML = radioVals.toString();
    let button1 = document.createElement("button");
    button1.innerHTML="Edit";
    cell7.appendChild(button1);
    let button2 = document.createElement("button");
    button2.innerHTML="Remove";
    cell8.appendChild(button2);
}

let form = document.forms['task'];
form.elements.email.placeholder = '@bitqit.com';



// let arr= [9,8,7,6,5,4];
// arr.forEach((x,asd)=>{
//     console.log(asd+'=>'+x);
// })