var $theList = $('.list');
var $form = $('form');
var $input = $('#to-do');
var $button = $(".add")

$form.on('submit', function (eventObject) {
	eventObject.preventDefault();


	var $addValue = $theList.val();
	var $li =$("<li>");
	var $addItem = $("<h3>").html($input.val());
	var $button = $("<button>");

	$button.html("&#x2717");
	$button.addClass("done");

	$button.on("click", function () {
		$li.remove();
	})

	$li.append($addItem);
	$theList.append($li);
	$addItem.append($button);

});

