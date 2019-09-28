var clock=document.querySelector('#clock');

setInterval(() => {
    var date=new Date();
    clock.value=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}, 500);

function getValue(){
    var clock=document.querySelector('#clock');
    console.log(clock.value);
    return clock.value;
}

function getTime(){
    var str="";
    var date=new Date();
    str=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    return str;
}