const input = document.createElement("input");

input.type = "text";
input.addEventListener("keydown", function (event) {
    alert("a tecla "+ event.key+ " foi precionada");
})
input.addEventListener("keyup", function (event) {
    alert("a tecla "+ event.key+ " foi solta");
})

document.body.append(input);

