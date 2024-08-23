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
    const apell = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const motivo = document.getElementById("motivo").value;
    const inform = document.getElementById("informacion").value;

    if (name === "" || apell === "" || email === "" || motivo === "0" || inform === ""){
        alert("complete todos los campos");
        scrip.stop();
    }if(motivo=== "1") {
        alert("               "+name +"\n"+" Tu email ha sido enviado,"+"\n"+"En breve te responderemos");
    }if (motivo=== "2") {
        alert("               "+name +"\n"+"gracias por tus comentarios,"+"\n"+"          los analizaremos");
    }if (motivo=== "3") {
        alert("               "+name +"\n"+"  Lamentamos lo ocurrido,"+"\n"+"En breve lo solucionaremos");
    }else {
        stop();
    }

}
