function calculate(){
    var result = Number(document.getElementById("multi").value) *
    Number(document.getElementById("multi").value);
    document.getElementById("area").innerHTML = results[0].label;


    var peri = Number(document.getElementById("multi").value) +
    Number(document.getElementById("multi").value);
    document.getElementById("length").innerHTML = peri[0].label;
}