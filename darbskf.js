window.onload=function(){
    var sviests=document.getElementById("vieta");
    var zim=sviests.getContext("2d");
    zim.beginPath();
    zim.arc(75, 75, 50, 0, Math.PI * 2, true);
    zim.moveTo(110, 75);
    zim.arc(75, 75, 35, 0, Math.PI, false);
    zim.moveTo(65, 65);
    zim.arc(60, 65, 5, 0, Math.PI * 2, true);
    zim.moveTo(95, 65);
    zim.arc(90, 65, 5, 0, Math.PI * 2, true);
    zim.stroke();
}