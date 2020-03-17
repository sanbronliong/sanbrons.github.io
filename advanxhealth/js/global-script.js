/* === Hamburger menu ===
$(".ad--hamburger").on("click", function() {
	targetClass = "."+$(this).data("target");
  if (!$(targetClass).hasClass("open")) {
  	$(targetClass).show(0);
    $(targetClass).addClass("open");
  } else {
  	$(targetClass).removeClass("open").delay(100).hide(0);
  }
}); */
/* Hamburger */
$(".ad--hamburger").click(function() {
  if (!$(this).hasClass("opened")) {
    $(this).addClass("opened");
    $(".ad--navmenu").addClass("open");
  } else if ($(this).hasClass("opened")) {
    $(this).removeClass("opened");
    $(".ad--navmenu").addClass("closing").delay(200).queue(function(){
    	$(this).removeClass("open closing").dequeue();
    });
  }  
  //$(".ad--navmenu").toggleClass("open");
  $(this).find(".ad--icon").text($(this).text() == '' ? '' : '');
});
/* Print */
$(".btn-print").click(function() {
	window.print();
});

/* Read more */
$(".ad--btn.read-more").click(function(e) {
	e.preventDefault();
  oriText = "Read more"
  toggledText = "Read less"
  $(this).text($(this).text() == oriText ? toggledText : oriText);
  x = $(this).data("toggle");
  $(x).slideToggle(300);
});