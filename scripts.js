setInterval(changeImg, 3000)
function changeImg(){
    var imagesArr = ["images/250X110668568400.jpg","images/250X110571325734.jpg","images/banner_atar.jpg"];
    var src = document.getElementById("interval").src;
    console.log(src);
    if(src.includes(imagesArr[0])){
        document.getElementById("interval").setAttribute("src",imagesArr[1]) ;
    }
    else if(src.includes( imagesArr[1])){
        document.getElementById("interval").setAttribute("src", imagesArr[2]);
    }
    else document.getElementById("interval").setAttribute("src", imagesArr[0]);
}