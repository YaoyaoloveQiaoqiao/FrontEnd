$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
    var imgData={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};
        window.onscroll=function(){
            if(scrollSide()){
                $.each(imgData.data,function(index,value){
                    var box=$("<div>").addClass("box").appendTo($("#container"));
                    var box_img=$("<div>").addClass("box_img").appendTo(box);
                   // console.log("img/"+$(value).attr("src"));
                    $("<img>").attr("src","img/"+$(value).attr("src")).appendTo(box_img);

                });
                imgLocation();
            }
        };
    });
});

function scrollSide(){
    var box=$(".box");
    var lastHeight=box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    var documentHeight=$(document).height();
    var scrollHeight=$(window).scrollTop();
    return lastHeight<documentHeight+scrollHeight?true:false;

}

function imgLocation(){
    var box=$(".box");
    var boxWidth=box.eq(0).outerWidth();
    var num=Math.floor($(window).width()/(boxWidth));
    $("#container").css({
        "width":boxWidth*num,
        "margin":"0 auto"
    });
    var boxArr=[];
    box.each(function(index,value){
        var boxHight=box.eq(index).height();
        console.log(num+"```"+index);
        if(index<num){
            boxArr[index]=boxHight;
        }else{
            var minboxHight=Math.min.apply(null,boxArr);
            var minboxIndex=$.inArray(minboxHight,boxArr);
            $(value).css({
                "position":"absolute",
                "top":minboxHight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });


}