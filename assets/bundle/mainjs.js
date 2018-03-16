$(function(){
console.log(_);
console.log($);

console.log('merge');

$('.navbar-dark .navbar-toggler').on('click',()=>{
    if($('.tipic-menu').html() === 'Close'){
         $('.tipic-menu').html('Menu');
         $('.tipic-menu').toggleClass('change-color');
    }
    else {
        $('.tipic-menu').toggleClass('change-color');
        $('.tipic-menu').html('Close');
    }
      
});

function generateSwitch(swtich){
    $(swtich).mouseover(()=>{
        console.log(1);
        $(swtich).css({'opacity':'1'});
         
           
    });
    
    $(swtich).mouseout(()=>{
        $(swtich).css({'opacity':'0'})
    });

}

for(let i = 0 ; i < 10; i++){
     let roller = '.switch' + i;

     generateSwitch(roller);

}


$('.navbar-nav>a').on('click', function(){

    $('.navbar-collapse').collapse('hide');
    $('.tipic-menu').html('Menu');
    $('.tipic-menu').toggleClass('change-color');

});



function runPortofolio(){
      
    _.forEach($('.box1 a img'),function(element,key){
          $(element).attr('src','assets/images/project' + key + '.jpg');     
          
    });

} 



    runPortofolio();

});



