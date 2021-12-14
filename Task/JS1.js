let allDetails = [];
let count = 0;
let rowcount =1;
function calAge(dobVal1){

    // convert user input value into date object
    let birthDate = new Date(dobVal1);
    // get difference from current date;
    let difference=Date.now() - birthDate.getTime();
    let  ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function validateData(){

}
function addToObject() {
    validateData();
    let nameVal = document.getElementById("name").value,
        phoneVal = document.getElementById("phone").value,
        emailVal = document.getElementById("email").value;
    dobVal = document.getElementById("dob").value;

    let dobValAge = calAge(dobVal);

    let checkboxesVal = document.getElementsByName('sub');
    //console.log(checkboxesVal);
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

    let button1 = document.createElement("button");
    button1.setAttribute("id",count);
    button1.setAttribute("onclick","editRow(this.id)");
    button1.setAttribute("class","btn-remove");

    let button2 = document.createElement("button");
    button2.setAttribute("id",count);
    button2.setAttribute("onclick","removeRow(this.id)");
    button2.setAttribute("class","btn-remove");

    let obj = {
        number: count,
        name: nameVal,
        phone: phoneVal,
        age: dobVal,
        email: emailVal,
        sub: checkVals,
        gender: radioVals,
    }
    //console.log(obj);
    allDetails.push(obj);

    let table = document.getElementById("table");
    table.style.display="table";
    let i = allDetails.length
    let row = table.insertRow(i);
    row.setAttribute("id","row_id"+count);
    count++;
    rowcount++;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);
    cell1.innerHTML = Number(table.rows.length)-1;
    cell2.innerHTML = nameVal;
    cell3.innerHTML = phoneVal;
    cell4.innerHTML = dobValAge + " yr";
    cell5.innerHTML = emailVal;
    cell6.innerHTML = checkVals.toString();
    cell7.innerHTML = radioVals.toString();
    button1.innerHTML="Edit";
    cell8.appendChild(button1);
    cell8.setAttribute("class","btn-cell");
    button2.innerHTML="Remove";
    cell9.appendChild(button2);
    cell9.setAttribute("class","btn-cell");
    document.getElementById("task").reset();
}

function editRow(clicked_id){
    document.getElementById("task").reset();
    console.log(allDetails);
    let x = Number(clicked_id);
    console.log("clicked id is ");
    console.log(clicked_id);
    //console.log("clicked id :"+clicked_id);
    // const objIndex = allDetails.findIndex(allDetails => allDetails.number === x);  //(obj => obj.number === Number(clicked_id))
    let objIndex = allDetails.findIndex((obj => obj.number == x));
    let newobj = allDetails.filter(x=>{x.number == clicked_id})
    console.log("obj index")
    console.log(objIndex);

    console.log(allDetails[objIndex].name);
    // document.getElementById("name").value = allDetails[objIndex].name;
    // document.getElementById("phone").value = allDetails[objIndex].phone;
    // document.getElementById("email").value = allDetails[objIndex].email;
    // document.getElementById("dob").value = allDetails[objIndex].age;
    document.getElementById("name").value = newobj.name;
    document.getElementById("phone").value = newobj.phone;
    document.getElementById("email").value = newobj.email;
    document.getElementById("dob").value = newobj.age;
    let checkVal = newobj.sub;
    let checked = document.getElementsByName("sub");
    checked.forEach(element => {
        checkVal.forEach( object=>{
            if(element.defaultValue === object){
                element.checked=true;
            }
        })
    })

    let RadioVal = document.getElementsByName("gender");
    let radioChecked = allDetails[objIndex].gender;
    RadioVal.forEach(element => {
        radioChecked.forEach( object => {
            if (element.defaultValue === object)
                element.checked = true;
        })
    })
    document.getElementById("apply-btn").style.display="none";
    let button3 = document.getElementsByClassName('btn-update')[0];
    button3.setAttribute("id",clicked_id);
    button3.style.display="block";
    button3.setAttribute("onclick","updateEditRow(this.id)");
    //document.getElementById(clicked_id).style.display="inline block";
}
function updateEditRow(clicked_id){
    console.log("before");
    console.log(allDetails);
    console.log(clicked_id);
    let x = document.getElementsByClassName("btn-update");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display="none";
    }
    document.getElementById("apply-btn").style.display="inline-block";
    let nameVal = document.getElementById("name").value,
        phoneVal = document.getElementById("phone").value,
        emailVal = document.getElementById("email").value;
    dobVal = document.getElementById("dob").value;

    let dobValAge = calAge(dobVal);

    let checkboxesVal = document.getElementsByName('sub');
    //console.log(checkboxesVal);
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
    let button1 = allDetails[clicked_id].edit;
    let button2 = allDetails[clicked_id].remove;

    let obj = {
        number: Number(clicked_id),
        name: nameVal,
        phone: phoneVal,
        age: dobVal,
        email: emailVal,
        sub: checkVals,
        gender: radioVals,
    }

    allDetails.splice(clicked_id,1,obj);
    //console.log("after");
    //console.log(allDetails);
    let table = document.getElementById("table");
    let rowno = Number(clicked_id)+1;
    table.rows[rowno].cells[1].innerHTML = nameVal;
    table.rows[rowno].cells[2].innerHTML = phoneVal;
    table.rows[rowno].cells[3].innerHTML = dobValAge;
    table.rows[rowno].cells[4].innerHTML = emailVal;
    table.rows[rowno].cells[5].innerHTML = checkVals;
    table.rows[rowno].cells[6].innerHTML = radioVals;
    document.getElementById("task").reset();
}

function removeRow(clicked_id){
    let x = Number(clicked_id)
    let y = Number(clicked_id);
    //console.log("clicked id :"+clicked_id);
    let objIndex = allDetails.findIndex((obj => obj.number == x));
    //console.log("object index "+objIndex); filter
    allDetails.splice(objIndex,1);
    //console.log(allDetails);
    document.getElementById("row_id"+y).remove();
    updateColNo();
    let a = document.getElementsByClassName("btn-update");
    for (let i = 0; i < a.length; i++) {
        a[i].style.display="none";
    }
    document.getElementById("apply-btn").style.display="block";

}

function updateColNo(){
    let table = document.getElementById("table");
    //console.log("in update");
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = parseInt(i);
    }
    if (table.rows.length < 2){
        table.style.display="none";
    }
    //console.log(table.rows.length);
}

let form = document.forms['task'];
form.elements.email.placeholder = 'abc@bitqit.com';



// let arr= [9,8,7,6,5,4];
// arr.forEach((x,asd)=>{
//     console.log(asd+'=>'+x);
// })