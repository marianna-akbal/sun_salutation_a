function scrollSpy() {
      var sections = ['asana-one-section', 'asana-two-section', 'asana-three-section', 'asana-four-section', 'asana-five-section', 'asana-six-section'];
      var current;
      for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }
      $("a[href='#"+current+"']").addClass('active');
      $("a").not("a[href='#"+current+"']").removeClass('active');
    }
    // smooth scrolling navigation
    $("a").click( function() {
      console.log('scroll');
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top
      }, 1000);
      return false;
    });
    //scrollSpy call
    $(document).ready( function() {
      scrollSpy();
    });
    $(window).scroll( function() {
      scrollSpy();
    });
