/* === Hamburger menu ===
$(".axh--hamburger").on("click", function() {
	targetClass = "."+$(this).data("target");
  if (!$(targetClass).hasClass("open")) {
  	$(targetClass).show(0);
    $(targetClass).addClass("open");
  } else {
  	$(targetClass).removeClass("open").delay(100).hide(0);
  }
}); */
/* Hamburger */
$(".axh--hamburger").click(function() {
  if (!$(this).hasClass("opened")) {
    $(this).addClass("opened");
    $(".axh--navmenu").addClass("open");
  } else if ($(this).hasClass("opened")) {
    $(this).removeClass("opened");
    $(".axh--navmenu").addClass("closing").delay(200).queue(function(){
    	$(this).removeClass("open closing").dequeue();
    });
  }  
  //$(".axh--navmenu").toggleClass("open");
  $(this).find(".axh--icon").text($(this).text() == '' ? '' : '');
});
/* Print */
$(".btn-print").click(function() {
	window.print();
});

/* Read more */
$(".axh--btn.read-more").click(function(e) {
	e.preventDefault();
  oriText = "Read more"
  toggledText = "Read less"
  $(this).text($(this).text() == oriText ? toggledText : oriText);
  x = $(this).data("toggle");
  $(x).slideToggle(300);
});