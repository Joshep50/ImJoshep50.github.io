// Smooth Scrolling for internal links
$('a[href^="#"]').on("click",function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $("html, body").stop().animate({
	        "scrollTop": $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

// Change background of nav bar on scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll > window.innerHeight - 55) {
      $(".navbar").removeClass("transparent");
    } else {
      $(".navbar").addClass("transparent");
    }
});

// Activate scrollspy to highlight nav item when scrolled over
$("body").scrollspy({target: ".navbar"}) 

// Bind events to open and close portfolio popups
$(".thumbnail-overlay").on("click", openProject.bind( this ))
$(".close-window").on("click", closeWindow.bind(this))

function openProject( event ) {
  if ( $(event.target).next(".thumbnail-overlay") ) {
    var id =  "#" + $(event.target).parent().attr("page");
    $(id).fadeIn()
  } else {
    var id =  "#" + $(event.target).attr("page");
    $(id).fadeIn()
  }
}

function closeWindow( event ) {
  $(event.target).parents(".full-screen").fadeOut();
}




//--------------------------------------------




$(document).ready(function() {
  $('.carousel-inner .item').each(function() {
    var $this = $(this);
    var imgSrc = $this.find('img').attr('src');
    var overlay = $('<div class="thumbnail-overlay"><img src="https://via.placeholder.com/50" alt="Icon"></div>');
    $this.append(overlay);
  });

  $('.thumbnail-overlay').click(function() {
    var src = $(this).siblings('img').attr('src');
    $('.full-screen img').attr('src', src);
    $('.full-screen').fadeIn();
  });

  $('.close-window').click(function() {
    $('.full-screen').fadeOut();
  });
});


$(document).ready(function() {
  // When an image in the carousel is clicked
  $('.carousel-inner img').on('click', function() {
    var src = $(this).attr('src');
    $('#fullscreenImage').attr('src', src);
    $('#fullscreenImageModal').modal('show');
  });

  // Add zoom-in icon on hover
  $('.carousel-inner img').hover(
    function() {
      $(this).css('cursor', 'zoom-in');
    },
    function() {
      $(this).css('cursor', 'default');
    }
  );
});