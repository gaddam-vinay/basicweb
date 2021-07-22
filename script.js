var a=0;
var x=0;
var s;
var color=rgb(223, 115, 124);
function change(){
    a=a+1;
    x=a%5;
    switch(x){
        case 0:
            s="1.jpeg";
            break;
        case 1:
            s="2.jpeg";
            break;
        case 2:
            s="3.jpeg";
            break;
        case 3:
            s="4.jpeg";
            break;
        case 4:
            s="5.jpeg";
            break;
            default:
                s="1.jpeg";
    };
    document.getElementById("yoo").src=s;
};
function active1(){
    document.getElementById("00001").style.backgroundColor="rgb(223, 115, 124)";
}
function unactive1(){
    document.getElementById("00001").style.backgroundColor="transparent";
}
function active2(){
    document.getElementById("00002").style.backgroundColor="rgb(223, 115, 124)";
}
function unactive2(){
    document.getElementById("00002").style.backgroundColor="transparent";
}
function active3(){
    document.getElementById("00003").style.backgroundColor="rgb(223, 115, 124)";
}
function unactive3(){
    document.getElementById("00003").style.backgroundColor="transparent";
}
function active4(){
    document.getElementById("00004").style.backgroundColor="rgb(223, 115, 124)";
}
function unactive4(){
    document.getElementById("00004").style.backgroundColor="transparent";
}

$('#00011').click(function(){
    document.getElementById("00011").style.backgroundColor="rgb(223, 115, 124)";
})








