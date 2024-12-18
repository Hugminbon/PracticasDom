function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
                while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
            return "";
        }
function deleteCookie(cname) {
    document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
    }

var button = document.getElementById("save");
var nombre = document.getElementById("name");
var existe = getCookie("name");

if(existe){

    nombre.innerHTML= "hola "+ existe;
    
}
    

button.addEventListener("click", () => {
    var nombreValor = document.getElementById("nameInput").value;
    setCookie("name", nombreValor, 7);
    nombre.innerHTML= "";
    nombre.innerHTML= "hola "+ nombreValor;
    location.reload();

    
});

