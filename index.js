// toggle mode project


let colorChange =true


function colorDisplay(){
    if (colorChange===true){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('btn-change').style.backgroundColor="white";
        document.getElementById('btn-change').style.color="black";
       document.getElementById('nav').style.backgroundColor="white";
       document.getElementById('nav').style.color="black";
}else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById('btn-change').style.backgroundColor="black";
    document.getElementById('btn-change').style.color="white";
    document.getElementById('nav').style.backgroundColor="black";
    document.getElementById('nav').style.color="white";    
}

    colorChange = !colorChange;
}