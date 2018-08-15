//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



//slide in animation
$(function() {
    var $blocks = $('.animBlock.notViewed');
    var $window = $(window);
  
    $window.on('scroll', function(e){
      $blocks.each(function(i,elem){
        if($(this).hasClass('viewed')) 
          return;
          
        isScrolledIntoView($(this));
      });
    });
  });
  
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemOffset = 0;
    
    if(elem.data('offset') != undefined) {
      elemOffset = elem.data('offset');
    }
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    
    if(elemOffset != 0) { // custom offset is updated based on scrolling direction
      if(docViewTop - elemTop >= 0) {
        // scrolling up from bottom
        elemTop = $(elem).offset().top + elemOffset;
      } else {
        // scrolling down from top
        elemBottom = elemTop + $(elem).height() - elemOffset
      }
    }
    
    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
      // once an element is visible exchange the classes
      $(elem).removeClass('notViewed').addClass('viewed');
      
      var animElemsLeft = $('.animBlock.notViewed').length;
      if(animElemsLeft == 0){
        // with no animated elements left debind the scroll event
        $(window).off('scroll');
      }
    }
  }
  //slide in animation ends
