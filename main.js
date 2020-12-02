function randomimg() {
    var num = Math.floor((Math.random()*6)+1);
    document.getElementById("Geom").innerHTML=
        '<img src="img/gif/4dCube${num}.gif">';
}