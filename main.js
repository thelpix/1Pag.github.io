window.onload = randomimg;

var pic = new Array ("img/gif/4dCube1.gif","img/gif/4dCube2.gif", "img/gif/4dCube3.gif", "img/gif/4dCube4.gif", "img/gif/4dCube5.gif", "img/gif/4dCube6.gif");

function randomimg() {
    var num = Math.floor(Math.random()* pic.length);
    document.getEelementById("Geom").src = pic[num];
}