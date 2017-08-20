
$('.dialog').hide();
function openUcDialog(){
	$( "#toggle").prop('checked', false);
	$( "#ucDialog").show();
}

$(function(){
 var shrinkHeader = $( ".main").height();
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header.header').addClass('header_fixed');
        }
        else {
            $('header.header').removeClass('header_fixed');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});