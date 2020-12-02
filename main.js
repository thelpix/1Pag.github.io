//var myPic = ("/4dCube1.gif","/4dCube2.gif","/4dCube3.gif","/4dCube4.gif","/4dCube5.gif","/4dCube6.gif");
var num = Math.floor((Math.random() * 5)+1 );
function getRandomImage() 
{
    var imgStr = `<img src="img/gif/4dCube${num}.gif" alt = "4d Object"></img>`;
    document.write(imgStr); document.close();
}

function buttonimg() 
{
    if(num > 6)  
    {
        num = 1;
    }
    document.getElementById('Geom').innerHTML = 
    `<img src="img/gif/4dCube${num++}.gif" alt = "4d Object"></img>`;
}
