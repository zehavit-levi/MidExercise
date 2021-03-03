setInterval(changeImg, 5000)
function changeImg(){
    var imagesArr = ["images/250X110668568400.jpg","images/250X110571325734.jpg","images/banner_atar.jpg"];
    var src = document.getElementById("interval").getAttribute(src);
    if(src == imagesArr[0]){
        document.getElementById("interval").src = imagesArr[1];
    }
    else if(src == imagesArr[1]){
        document.getElementById("interval").src = imagesArr[2];
    }
    else document.getElementById("interval").src = imagesArr[0];
}