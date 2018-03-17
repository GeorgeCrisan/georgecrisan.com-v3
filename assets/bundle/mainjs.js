$(function(){
console.log(_);
console.log($);

console.log('merge');

$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

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


    window.sr = ScrollReveal();
    sr.reveal('#portofolio',{ duration: 800,
        delay: 1000,
        viewFactor: 0.3, });
  
    sr.reveal('#portofolio-links',{ duration: 500,
                                    delay: 1000,
                                    viewFactor: 0.1, });

                                    $("#menu-toggle").click(function(e) {
                                        e.preventDefault();
                                        $("#wrapper").toggleClass("toggled");
                                    });
    

});



