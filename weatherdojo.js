function disappear () {
    document.getElementById("alert").remove();
}
function changeUnit (element) {
    console.log(element.value)

     



    if (element.value == "fahrenheit"){
        for (i = 1; i <= 8; i++){
            var tempid = "temp" + i;
            x = document.querySelector(".temp" + i).innerText;
            console.log(x)
            x = (x*9)/5 +32;
            console.log(x)
            document.querySelector(".temp"+i).innerText = x;
        }
    }
    else {
        for (i = 1; i <= 8; i++){
            var tempid = "temp" + i;
            x = document.querySelector(".temp" + i).innerText;
            console.log(x)
            x = (Math.round(10*((x-32)*5/9)))/10;
            console.log(x)
            document.querySelector(".temp"+i).innerText = x;
        }
    }
}