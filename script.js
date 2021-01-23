var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};



// const elem = $('.header');
// const doc = $(document);
// function scrolled() {
//    const threshold = doc.scrollTop() > 1+'%';
//    elem.toggleClass('scrolled', threshold);
//    }
// $(window).on({ scroll: scrolled });

// $(window).on('scroll', (e) => {
// 	e.preventDefault();
// 	if (scrollY > 200) {
// 		$('.header').toggleClass('current')
// 	} else $('.header').removeClass('current');
// })

$(window).on("scroll", () => {
	if($(window).scrollTop() > 50) {
			$(".header").addClass("current");
	} else {
		$(".header").removeClass("current");
	}
});
// $('.header__burger').on('click', (e) => {
// 	e.preventDefault();
// 	$('header__burger').toggleClass('show-menu')
// })

// $('.header__burger').on('click', () => {
// 	$('.header__burger').toggleClass('show-menu')
// 	$('.header__nav').toggleClass('show')
// });



// $(window).on("scroll", function() {
//   $('.header').toggleClass("chang", $(this).scrollTop() > $(window).height());
// });
// window.onscroll = () => {
//   const nav = document.querySelector('.header');
// 	if (this.scrollY > 10 + 'px') {
// 		nav.addClass = 'scrolled';
// 	}	else nav.removeClass = 'scrolled';
// };

// const scrolling = document.querySelectorAll('.header');

// window.addEventListener('scroll', scrolled);
// function scrolled() {
// 	if (scrollY > 200) {
// 		document.getElementsByClassName('header').toggleClass('chang')
// 	}
// }


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка принята!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$('.dropdownBtn').on('click', (e) => {
	e.preventDefault();
	$('.btn').toggleClass('show-btn')
})