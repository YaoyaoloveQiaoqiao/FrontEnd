window.onload=function(){

  imgLocation();

  window.onscroll=function(){
    if(checkFlag()){
    //  console.log("scroll");
    var imgData={"data":[{"src":"1.jpg"},{"src":"3.jpg"},{"src":"6.jpg"},{"src":"7.jpg"}]};

      var contain=document.getElementById("container");
      for(var i=0;i<imgData.data.length;i++){

        var box=document.createElement("div");
        box.className="box";
        contain.appendChild(box);
        var boximg=document.createElement("div");
        boximg.className="box_img";
        box.appendChild(boximg)
        var img=document.createElement("img");
        img.src="img/"+imgData.data[i].src;
        boximg.appendChild(img);
      }
      imgLocation();
    }
  }

}

function imgLocation(){
  var img=document.getElementsByClassName("box");
  //console.log(img);
  var imgWidth=img[0].offsetWidth;
  var count=Math.floor(document.documentElement.clientWidth/imgWidth);
  var contain=document.getElementById("container");
  contain.style.cssText="width:"+imgWidth*count+"px; margin: 0 auto";
  var boxHightArr=[];
  for (var i = 0; i < img.length; i++) {
    if(i<count){
      boxHightArr[i]=img[i].offsetHeight;
    }else {
      var minHight=Math.min.apply(null,boxHightArr);
      var minIndex=getMinHeightLocation(boxHightArr,minHight);
      img[i].style.position="absolute";
      img[i].style.top=minHight+"px";
      img[i].style.left=img[minIndex].offsetLeft+"px";

      boxHightArr[minIndex]=boxHightArr[minIndex]+img[i].offsetHeight;
    }

  }
}

function checkFlag(){
  var boxs=document.getElementsByClassName("box");
  var lastContentHeight=boxs[boxs.length-1].offsetTop;
  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;

  if (lastContentHeight<scrollTop+pageHeight) {
    return true;
  }
}

function getMinHeightLocation(boxHeightArr,minHight){
  for(var i in boxHeightArr){
    if(boxHeightArr[i]==minHight){
      return i;
    }
  }
}
