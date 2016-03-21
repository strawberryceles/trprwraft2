$(document).ready(function(){
	//funcion de mouse enter en overlay.
	$(".overlay").mouseenter(function(){
		$(this).fadeTo("fast",0.5);
	});
	$(".overlay").mouseleave(function(){
		$(this).fadeTo("slow",0);
	});

	//carousel
	var $slides = $(".slides")
	$(".rslides").responsiveSlides();

	//formulario de contacto
	var $form = $("#contact-form");
	$form.submit(function (e) {
	// remove the error class
	$(".form-group").removeClass("has-error");
	$(".help-block").remove();
	// get the form data
	var formData = {
		'name' : $('input[name="form-name"]').val(),
		'email' : $('input[name="form-email"]').val(),
		'subject' : $('input[name="form-subject"]').val(),
		'message' : $('textarea[name="form-message"]').val()
	};
	// process the form
	$.ajax({
		type : 'POST',
		url  : 'process.php',
		data : formData,
		dataType : 'json',
		encode : true
	}).done(function (data) {
	// handle errors
	if (!data.success) {
		if (data.errors.name) {
			$("#name-field").addClass("has-error");
			$("#name-field").find(".col-lg-10").append('<span class="help-block">' + data.errors.name + '</span>');
		}
		if (data.errors.email) {
			$("#email-field").addClass("has-error");
			$("#email-field").find('.col-lg-10').append('<span class="help-block">' + data.errors.email + '</span>');
		}
		if (data.errors.subject) {
			$("#subject-field").addClass("has-error");
			$("#subject-field").find(".col-lg-10").append('<span class="help-block">' + data.errors.subject + '</span>');
		}
		if (data.errors.message) {
			$("#message-field").addClass("has-error");
			$("#message-field").find(".col-lg-10").append('<span class="help-block">' + data.errors.message + '</span>');
			}
		} else {
		// display success message
		$form.html('<div class="alert alert-success">' + data.message + '</div>');
		}
		}).fail(function (data) {
		// for debug
			// console.log(data)
		});
		e.preventDefault();
	});

	// //waypoints
	// var waypoint = new Waypoint({
	// element: document.getElementById("waypoint"),
	// handler: function(direction) {
	// 	}
	// })

	// $(function() {
	// 		$("#img_01").waypoint(function() {
	// 		$("#img_01").addClass("animated bounceInLeft");
	// 	}, {
	// 		offset: '85%'
	// 	});
	// 		$("#img_02").waypoint(function() {
	// 		$("#img_02").addClass("animated bounceInRight");
	// 	}, {
	// 		offset: '85%'
	// 	});
	// 		$("#img_03").waypoint(function() {
	// 		$("#img_03").addClass("animated bounceInLeft");
	// 	}, {
	// 		offset: '85%'
	// 	});
	// 		$("#img_04").waypoint(function() {
	// 		$("#img_04").addClass("animated fadeInUp");
	// 	}, {
	// 		offset: '85%'
	// 	});

	// 		$("#img_05").waypoint(function() {
	// 		$("#img_05").addClass("animated fadeInUp");
	// 	}, {
	// 		offset: "85%"
	// 	});
	// });


});