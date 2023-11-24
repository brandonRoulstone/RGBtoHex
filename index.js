let display = document.getElementById("screen");

let btn = document.getElementById("calculateValue");

function rgbToHex() {

    let input1 = parseInt(document.getElementById("red").value);

    let input2 = parseInt(document.getElementById("green").value);

    let input3 = parseInt(document.getElementById("blue").value);

    function isHexRes(color) {

        let hexRes = color.toString(16);

        return hexRes.length == 1 ? "0" + hexRes : hexRes;
        
    }

    let red = isHexRes(input1);

    let green = isHexRes(input2);

    let blue = isHexRes(input3);

    display.value = "#" + red + green + blue;
}

btn.addEventListener('click', rgbToHex);