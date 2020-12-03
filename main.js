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

function newimage()
{
    document.getElementById("gift").src = "img/gift_open.png";
}

function oldimage()
{
    document.getElementById("gift").src = "img/gift_closed.png";
}