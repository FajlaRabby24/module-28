function parseIntNumber (value){
    return parseInt(value);
}


function selectByGetElementById (value){
    return document.getElementById(value);
}



function sumNumber (id, value){
    selectByGetElementById(id).innerText = value;
}