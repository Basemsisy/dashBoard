import $ from 'jquery'
function effects() {
    //Toggle search input
    $('.search-button').on('click', function () {
       $('input[type="search"]').fadeToggle(100);
    });
    
    //Toggle sidebar
    let aside = $('aside'),
    main = $('main');
    //if document width >= 1200px
    if($(document).width() >= 1200){ 
      $('.menu-button').on('click', function () {
        if($('aside').width()) {
          aside.children().slideUp(50, function () {
            aside.css('width', 0);
        });
          main.animate({'width' : '100%'},10);
        } 
        else {
          main.css('width', '83%');
          aside.css('width', '17%');
          aside.children().slideDown(50);
        }
      })
    } 
    //if document width < 1200px
    else {
      $('.menu-button').on('click', function (e) {
        aside.fadeIn(100);
        e.stopPropagation();
      });
      $('body').on('click', function () {
        aside.slideUp(100);
      })
    }
  }effects();

  export default effects