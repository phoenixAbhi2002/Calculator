let input = document.getElementById("inputBox");


function display(num){
    inputBox.value += num;
}

function Calculate(){
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        alert("INVALID");
    }
}

function AC(){
    inputBox.value = "";
}

function DEL(){
    inputBox.value = inputBox.value.slice(0, -1);
}