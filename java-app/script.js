// function add(){
//     let a,b;
//     a = Number(document.getElementById("first").value);
//     b = Number(document.getElementById("second").value);
//     return document.getElementById("answer").value=a+b;
// }
/*
function change(){
    let a = document.getElementById("fav-color").value;
   // document.body.style.backgroundColor=a;
    document.getElementById("change1").style.color=a;

}*/
/*
function display(){
    let a = document.getElementById("getName").value;
    document.getElementById("empty").innerHTML=a;
}*/
/*
function addTextNode(text){
    let newtext = document.createTextNode(text),
        p1 = document.getElementById("p1");
    p1.appendChild(newtext);

}*/

function addElement(){
    let li = document.createElement("li"),
        myInput = document.getElementById("myInput").value,
        newText = document.createTextNode(myInput);
    console.log(newText);
    li.appendChild(newText);
    if (myInput === ''){
        alert("Kuch toh likho bhai")
    }

    else
        document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = null;
}
function removeAll(){
    document.getElementById("myUL").innerHTML="Khtam Sab khtam";
    document.getElementById("myUL").style.textAlign="center";
    document.getElementById("myUL").style.fontSize="200px";
}