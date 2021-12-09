let allDetails = [];
let count = 0;
let rowcount =1;
function addToObject() {

    let nameVal = document.getElementById("name").value,
        phoneVal = document.getElementById("phone").value,
        emailVal = document.getElementById("email").value;
    let dobVal1 = document.getElementById("dob").value;
    console.log(dobVal1);

    function calAge(dobVal1){

        // convert user input value into date object

        console.log(dobVal1);
        let birthDate = new Date(dobVal1);
        //console.log(" birthDate"+ birthDate);
        // get difference from current date;
        let difference=Date.now() - birthDate.getTime();
        let  ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    let dobVal = calAge(dobVal1);

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
        edit : button1,
        remove : button2
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
    cell4.innerHTML = dobVal + " yr";
    cell5.innerHTML = emailVal;
    cell6.innerHTML = checkVals.toString();
    cell7.innerHTML = radioVals.toString();
    button1.innerHTML="Edit";
    cell8.appendChild(button1);
    cell8.setAttribute("class","btn-cell");
    button2.innerHTML="Remove";
    cell9.appendChild(button2);
    cell9.setAttribute("class","btn-cell");
}

function editRow(clicked_id){
    let x = Number(clicked_id)
    let y = Number(clicked_id);
    //console.log("clicked id :"+clicked_id);
    let objIndex = allDetails.findIndex((obj => obj.number === x));
    console.log(allDetails[objIndex].name);
    document.getElementById("name").value = allDetails[objIndex].name;

}

function removeRow(clicked_id){
    let x = Number(clicked_id)
    let y = Number(clicked_id);
    //console.log("clicked id :"+clicked_id);
    let objIndex = allDetails.findIndex((obj => obj.number === x));
    //console.log("object index "+objIndex); filter
    allDetails.splice(objIndex,1);
    //console.log(allDetails);
    document.getElementById("row_id"+y).remove();
    updateColNo();
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