function validInput(){
    var elements = document.getElementById("main-form").elements;

    for (var i = 0, element; element = elements[i++];) {
        if (element.type === "text" && element.value === "")
                  console.log("it's an empty textfield")
    }
}