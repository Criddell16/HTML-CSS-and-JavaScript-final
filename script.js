
function weightConverter(valNum){
    document.getElementById("outputKilograms").innerHTML=valNum/2.2046;
    document.getElementById("outputounces").innerHTML=valNum*16;
    document.getElementById("outputgrams").innerHTML=valNum/2.2046/1000;
    document.getElementById("outputstones").innerHTML=valNum/14;
    document.getElementById("outputtons").innerHTML=valNum/2000;
    document.getElementById("outputtonnes").innerHTML=valNum/2205;
}




