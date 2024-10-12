
function sendWhatsapp(){
    let phonenumber = "+51934676305"

    let name= document.getElementById("userName").value;
    let email= document.getElementById("userEmail").value;
    let number= document.getElementById("phone").value;
    let asunto= document.getElementById("emailSubject").value;
    let mensaje= document.getElementById("textarea").value;

    // Validar que los campos no estén vacíos
    if (name === "" || email === "" || number === "" || asunto === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return; // Detener la ejecución si algún campo está vacío
    }

    // Validar el formato del email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un email válido.");
        return; // Detener la ejecución si el email no es válido
    }

    // Validar el formato del número de teléfono (Ejemplo: solo números)
    let phonePattern = /^\d+$/;
    if (!phonePattern.test(number)) {
        alert("Por favor, ingrese un número de teléfono válido.");
        return; // Detener la ejecución si el número de teléfono no es válido
    }

    let url="https://wa.me/" + phonenumber + "?text="
    +"*Nombre :* " +name+"%0a"
    +"*Email :* " +email+"%0a"
    +"*Celular :* " +number+"%0a"
    +"*Asunto :* " +asunto+"%0a"
    +"*Mensaje :* " +mensaje+"%0a%0a"

    window.open(url, '_blank').focus;

    // Limpiar los campos del formulario
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("textarea").value = "";

}