$(function() {
	alert('DOM załadowany - można się działać');
});
var carouselList = $('#carousel ul');
var i = setInterval(function() {
    carouselList.animate({marginLeft:-400}, 1500, function(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        $(this).find(lastItem).after($(this).find(firstItem));
        carouselList.css({'marginLeft':0});
    })
},3000);
