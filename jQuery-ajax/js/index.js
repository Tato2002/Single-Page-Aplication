

let activePage = "home"

$.ajax({
	type: "GET",
	url: "homepage.html",
	success: function(response) {
		console.log(response)
		$(".pageContent").html(response)
	}
});

$(".nav-link").click(function(){
	$(".pageContent").html("")
	activePage = $(this).attr("data-link")
	
	$.ajax({
		type: "GET",
		url: activePage,
		success: function(response) {
			console.log(response)
			$(".pageContent").html(response)
		}
	});
})

