"use strict";$(function(){function generateSwitch(swtich){$(swtich).mouseover(function(){console.log(1),$(swtich).css({opacity:"1"})}),$(swtich).mouseout(function(){$(swtich).css({opacity:"0"})})}console.log(_),console.log($),console.log("merge"),$(".navbar-dark .navbar-toggler").on("click",function(){"Close"===$(".tipic-menu").html()?($(".tipic-menu").html("Menu"),$(".tipic-menu").toggleClass("change-color")):($(".tipic-menu").toggleClass("change-color"),$(".tipic-menu").html("Close"))});for(var i=0;i<10;i++){generateSwitch(".switch"+i)}$(".navbar-nav>a").on("click",function(){$(".navbar-collapse").collapse("hide"),$(".tipic-menu").html("Menu"),$(".tipic-menu").toggleClass("change-color")}),_.forEach($(".box1 a img"),function(element,key){$(element).attr("src","assets/images/project"+key+".jpg")})});