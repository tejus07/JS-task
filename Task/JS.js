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
function validateName(){
    let x = document.forms["task"]["name"].value;
    let regex = /^[a-zA-Z ]{3,30}$/;
    let result = regex.test(x);
    // let pattern = /[a-zA-Z]{3,}/;
    // let result = pattern.test(x);
    let NameSpace = / /.test(x);
     let EmptyName = document.getElementById("name").value.length;
    // console.log(EmptyName);
    if (result == false & NameSpace == false ) {
        // alert("Name must be filled out");
        if (EmptyName === 0 & x[0]!==" ") {
            document.getElementById("validName").innerHTML = "*Enter Name";
            document.getElementById("name").style.border = "1px solid red";
        }

        else {
            document.getElementById("validName").innerHTML = "*Invalid";
            document.getElementById("name").style.border = "1px solid red";
        }
    }
    else if(result == false && NameSpace == true ) {
        if (EmptyName === 0 && x[0]!==" ") {
            document.getElementById("validName").innerHTML = "*Enter Name";
            document.getElementById("name").style.border = "1px solid red";
        }
        else {
            document.getElementById("validName").innerHTML = "*Invalid Name";
            document.getElementById("name").style.border = "1px solid red";
        }
    }
    else if(result == true) {
        if (EmptyName === 0 && x[0]!==" ") {
            document.getElementById("validName").innerHTML = "*Enter Name";
            document.getElementById("name").style.border = "1px solid red";
        }
        else if (x[0] ===" ") {
            document.getElementById("validName").innerHTML = "*Whitespace is not allowed";
            document.getElementById("name").style.border="1px solid red";
        }
        else
            return true;
    }
    else
        return true;

}
function validPhone(){
    let phoneno = document.forms["task"]["phone"].value;
    if (phoneno ==""){
        document.getElementById("validPhone").innerHTML = "*Enter Number";
        document.getElementById("phone").style.border="1px solid red";

    }
    else{
        let regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
        let result = regex.test(phoneno);
        if (result === false){
            document.getElementById("validPhone").innerHTML = "*Invalid Number";
            document.getElementById("name").style.border="1px solid red";
        }
        else
            return true;
    }
}

function validEmail(){
    let email = document.forms["task"]["email"].value;
    console.log(email);
    if (email == ""){
        document.getElementById("validEmail").innerHTML = "*Enter Email";
        document.getElementById("email").style.border="1px solid red";
    }
    else{
        let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let result = regex.test(email);
        if (result === false){
            document.getElementById("validEmail").innerHTML = "*Invalid Email";
            document.getElementById("email").style.border="1px solid red";
        }
        else
            return true;

    }

}

function validDOB(){
    let currDate = new Date();
    let dob = document.forms["task"]["dob"].value;
    console.log(dob);
    if (dob == ""){
        document.getElementById("validAge").innerHTML = "*Enter Date";
        document.getElementById("dob").style.border="1px solid red";
    }
    let d = new Date(dob);
    let dNum = d.getTime();
    if(!dNum && dNum !== 0) return false;
    let result = d.toISOString().slice(0,10) === dob;
    let checkCurrDate
    if(currDate.getTime() > d.getTime()) checkCurrDate = true;
    if(checkCurrDate===true && result === true) {
        console.log("work");
        return true;
    }
    else {
        document.getElementById("validAge").innerHTML = "*Invalid Date";
        document.getElementById("dob").style.border="1px solid red";
        return false;
    }

}

function validSub(){
    let checkboxesVal = document.getElementsByName('sub');
    //console.log(checkboxesVal);
    let checkVals = [];
    for (let i = 0; i < checkboxesVal.length; i++) {
        if (checkboxesVal[i].checked) {
            checkVals.push(checkboxesVal[i].value);
        }
    }
    if(checkVals.length === 0){
        document.getElementById("validSub").innerHTML = "*Select Subject";
        return false;
    }
    else
        return true;

}

function validateData(){
    let vName = validateName();
    let vPhone = validPhone();
    let vEmail = validEmail();
    let vDOB = validDOB();
    let vSub = validSub();
    clearCheckValidation(vName,vPhone,vSub,vEmail,vDOB);
    console.log("vName: "+vName);
    console.log("vPhone: "+vPhone);
    console.log("vEmail: "+vEmail);
    console.log("vDOB: "+vDOB);
    console.log("vSub: "+vSub);
    if ((vName === true) && (vPhone === true) && (vEmail === true) && (vDOB === true) && (vSub === true)){
        console.log("iffff");
        addToObject();
        console.log("in if");
    }
    else {
        return false;
    }

}
function validateEditData(id){
    let vName = validateName();
    let vPhone = validPhone();
    let vEmail = validEmail();
    let vDOB = validDOB();
    let vSub = validSub();
    clearCheckValidation(vName,vPhone,vSub,vEmail,vDOB);
    if ((vName === true) && (vPhone === true) && (vEmail === true) && (vDOB === true) && (vSub === true)){
        updateEditRow(id);
    }
    else {
        return false;
    }

}
function clearCheckValidation(vName,vPhone,vSub,vEmail,vDOB){
    if (vName === true) {
        document.getElementById("validName").innerText = null;
        document.getElementById("name").style.border = "none";
    }
    if (vPhone === true) {
        document.getElementById("validPhone").innerText = null;
        document.getElementById("phone").style.border="none";
    }
    if (vSub === true)
        document.getElementById("validSub").innerText = null;
    if (vEmail === true) {
        document.getElementById("validEmail").innerText = null;
        document.getElementById("email").style.border="none";
    }
    if (vDOB === true) {
        document.getElementById("validAge").innerText = null;
        document.getElementById("dob").style.border = "none";
    }

    return true;
}
function clearValidation(){
    document.getElementById("validName").innerText = null;
    document.getElementById("validPhone").innerText = null;
    document.getElementById("validEmail").innerText = null;
    document.getElementById("validSub").innerText = null;
    document.getElementById("validAge").innerText = null;
    document.getElementById("name").style.border = "none";
    document.getElementById("phone").style.border = "none";
    document.getElementById("dob").style.border = "none";
    document.getElementById("email").style.border = "none";

    return true;
}
function addToObject() {
    clearValidation();
    let nameVal = document.getElementById("name").value,
        phoneVal = document.getElementById("phone").value,
        emailVal = document.getElementById("email").value,
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
    button1.setAttribute("class","btn-edit w3-border");

    let button2 = document.createElement("button");
    button2.setAttribute("id",count);
    button2.setAttribute("onclick","removeRow(this.id)");
    button2.setAttribute("class","btn-remove w3-border");

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
    let i = allDetails.length;

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
    clearValidation();
    document.getElementById("task").reset();
    console.log("before editing in edit row");
    console.log(allDetails);
    let x = Number(clicked_id);

    //console.log("clicked id :"+clicked_id);
   // const objIndex = allDetails.findIndex(allDetails => allDetails.number === x);  //(obj => obj.number === Number(clicked_id))
    let objIndex = allDetails.findIndex((obj => obj.number == x));

    //console.log("obj index");
    //console.log(objIndex);
    //console.log(allDetails[objIndex].name);
    document.getElementById("name").value = allDetails[objIndex].name;
    document.getElementById("phone").value = allDetails[objIndex].phone;
    document.getElementById("email").value = allDetails[objIndex].email;
    document.getElementById("dob").value = allDetails[objIndex].age;
    let checkVal = allDetails[objIndex].sub;
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
    button3.setAttribute("id",Number(clicked_id));
    button3.style.display="block";
    //button3.setAttribute("onclick","updateEditRow(this.id)");
    button3.setAttribute("onclick","validateEditData(this.id)");
    //document.getElementById(clicked_id).style.display="inline block";
}
function updateEditRow(clicked_id){
    clearValidation();
    console.log("in update button and array is");
    console.log(allDetails);
    //console.log(clicked_id);
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
    // let button1 = allDetails[clicked_id].edit;
    // let button2 = allDetails[clicked_id].remove;

    let obj = {
        number: Number(clicked_id),
        name: nameVal,
        phone: phoneVal,
        age: dobVal,
        email: emailVal,
        sub: checkVals,
        gender: radioVals,
    }

    console.log("ID: "+clicked_id);
    let objIndex = allDetails.findIndex((obj => obj.number == Number(clicked_id)));
    console.log("onjIndex"+objIndex);
    allDetails.splice(objIndex,1,obj);
    //console.log("after");
    //console.log(allDetails);

    let table = document.getElementById("table"),
        rowid = Number(clicked_id);
        rowno = document.getElementById("row_id"+rowid).id;
        console.log("row num "+rowno);
    table.rows[rowno].cells[1].innerHTML = nameVal;
    table.rows[rowno].cells[2].innerHTML = phoneVal;
    table.rows[rowno].cells[3].innerHTML = dobValAge+" yr";
    table.rows[rowno].cells[4].innerHTML = emailVal;
    table.rows[rowno].cells[5].innerHTML = checkVals;
    table.rows[rowno].cells[6].innerHTML = radioVals;
    document.getElementById("task").reset();
    console.log("leaving update button and array is");
    console.log(allDetails);
}

function removeRow(clicked_id){
    clearValidation();
    console.log("before del");
    console.log(allDetails);
    let x = Number(clicked_id);
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
    console.log("after removeing");
    console.log(allDetails);

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
form.elements.email.placeholder = 'Email';
form.elements.name.placeholder = 'Name';
form.elements.phone.placeholder = 'Phone Number';




// let arr= [9,8,7,6,5,4];
// arr.forEach((x,asd)=>{
//     console.log(asd+'=>'+x);
// })