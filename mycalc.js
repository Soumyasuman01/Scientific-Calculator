function addChar(input, character) {
    if (input.value == null || input.value == "0") {
        input.value = character;
    } else {
        input.value += character;
    }
}

function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1);
}

function cos(form) {
    form.display.value = Math.cos(eval(form.display.value));
}

function sin(form) {
    form.display.value = Math.sin(eval(form.display.value));
}

function tan(form) {
    form.display.value = Math.tan(eval(form.display.value));
}

function sqrt(form) {
    form.display.value = Math.sqrt(eval(form.display.value));
}

function ln(form) {
    form.display.value = Math.log(eval(form.display.value));
}

function exp(form) {
    form.display.value = Math.exp(eval(form.display.value));
}

function compute(form) {
    var expression = form.display.value.replace(/π/g, 3.141592653589793);
    form.display.value = eval(expression)
}

function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value);
}

function cube(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)*eval(form.display.value);
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "." &&
                ch != "(" && ch != ")" && ch != "%") {
                alert("Invalid entry!");
                return false;
            }
        }
    }
    return true;
}

function changeSign(input) {
    if (input.value.substring(0, 1) == "-") {
        input.value = input.value.substring(1, input.value.length);
    } else {
        input.value = "-" + input.value;
    }
}