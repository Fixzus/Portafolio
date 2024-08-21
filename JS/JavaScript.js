/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function contacto(){
    const name = document.getElementById("nombre").value;
    if (name!==""){
        alert("               "+name +"\n"+" Tu email ha sido enviado,"+"\n"+"En breve te responderemos");
    }else {
        alert("complete los campos");
    }

}