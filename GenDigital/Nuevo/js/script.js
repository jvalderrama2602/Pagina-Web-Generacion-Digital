$(window).load(function() {
	// Animate loader off screen
	$("#content").css("display", "block");
	setTimeout(function(){ 
		$(".se-pre-con").fadeOut("slow");
	}, 1000);
	
});
var current_slide;
$(document).ready(function(){
	$("#content").css("display", "block");

	console.log("Hola, gracias por ver el cÃ³digo, si estÃ¡s interesado en unirte al equipo envia tu cv a work@brounie.com comentando que viste esto =)");

	$(".button-collapse").sideNav();
	$('.modal-trigger.contact-modal-button').leanModal({
		opacity: .9,
	});

	if(window.innerWidth <= 600){
		$(".first-column, .second-column").removeClass("valign-wrapper");
	}

	$(".submit-button").click(function(){

		if($('input.with-gap:checked').length == 0){
			alert("Necesitas seleccionar un presupuesto");
		}

	});

	$("#contact-form, #second-form").submit(function(e){

		 var c_url = "contact.php"; // the script where you handle the form input.
		 var captcha_val;

		 if(!$("#g-recaptcha-response").val()){

		 	captcha_val = $("#g-recaptcha-response-1").val();

		 } else{

		 	captcha_val = $("#g-recaptcha-response").val();

		 }
		 var data = 'captcha_token=' +  captcha_val;
		 var data_contact_form = $(this).serialize();
		 console.log(data);
		 console.log(data_contact_form);

		 $.ajax({
           	type: "POST",
           	url: 'captcha_request.php',
           	data: data,
           	success: function(data)
           	{
           		var json = JSON.parse(data)

           		//recaptcha success
           		if(json.success == true){
           			
           			 $.ajax({
			           	type: "POST",
			           	url: c_url,
			           	data: data_contact_form, // serializes the form's elements.
			           	success: function(data)
			           	{
			           		console.log(data);
			           		$(".success-alert").fadeIn(1000);
			           		$('.modal').closeModal();
			           		setTimeout(function(){ 
								$(".success-alert").fadeOut(1000);
							}, 4000);
			           	}
			        });
			      

           		} else {
           			console.log("captcha not true");
           			$(".error-alert").fadeIn(1000);
	           		$('.modal').closeModal();
	           		setTimeout(function(){ 
						$(".error-alert").fadeOut(1000);
					}, 4000);
           		}

           	},
           	error: function(data)
           	{
           		console.log("error sending captcha");
           		$(".error-alert").fadeIn(1000);
           		$('.modal').closeModal();
           		setTimeout(function(){ 
					$(".error-alert").fadeOut(1000);
				}, 4000);
           	}
        });	   

	    e.preventDefault();
	});


	var counter_init = false;

	$('#fullpage').fullpage({

		//scrollOverflow: true,
		navigation: true,
		slidesNavigation: true,
		onLeave: function(index, nextIndex, direction){


			current_slide = nextIndex;
			if(index == 1 && direction == "down"){

				$(".logo-intro").transition({ opacity: 0 });
				$(".menu-intro.center-align").transition({ opacity: 0 });
				$(".fixed-s").transition({ opacity: 1 });

				$(".intro-home .valign").transition({ opacity: 0 });

				if(counter_init == false){

				    //counter effect 
					$('.count').each(function () {
					    $(this).prop('Counter',0).animate({
					        Counter: $(this).text()
					    }, {
					        duration: 4000,
					        easing: 'swing',
					        step: function (now) {
					            $(this).text(Math.ceil(now));
					        }
					    });
					});
			    	counter_init = true;

			    	setTimeout(function(){ 
						$(".col.ps-wrapper-section").transition({ x: "0px" });
					}, 200);
					
			    }

			    $("footer").transition({opacity: 1, zIndex: "3"});

			}


			if(index == 2 && direction == "up"){

				$(".logo-intro").transition({ opacity: 1 });
				$(".menu-intro.center-align").transition({ opacity: 1 });
				$(".fixed-s").transition({ opacity: 0 });

				$(".intro-home .valign").transition({ opacity: 1 });
				$("footer").transition({opacity: 0, zIndex: "-1"});
			}


			if(index == 3 && direction == "down"){
				$(".fixed-s a").transition({ color: "black" });
			}

			if(index == 4 && direction == "up"){
				$(".fixed-s a").transition({ color: "white" });
			}

		},

		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

			// index 2 = mobile apps slider
			if(index == 2 && slideIndex == 0 && nextSlideIndex == 1){
				$(".last-column-p-apps").fadeOut();
				$(".fp-prev").css("opacity", "1");
				$(".fp-next").css("opacity", "0");
			} else if (index == 2 && slideIndex == 1 && nextSlideIndex == 0){
				$(".last-column-p-apps").fadeIn();
				$(".fp-prev").css("opacity", "0");
				$(".fp-next").css("opacity", "1");
			}

			//web
			if(index == 3 && slideIndex == 1 && nextSlideIndex == 0){
				$(".last-column-web").css("opacity", "0");
				$(".fp-next").css("opacity", "1");
				$(".fp-prev").css("opacity", "0");
			} else if (index == 3 && slideIndex == 0 && nextSlideIndex == 1){
				$(".last-column-web").css("opacity", "1");
				$(".fp-next").css("opacity", "0");
				$(".fp-prev").css("opacity", "1");
			}
		}
	});
		

	$(".custom-proccess .tabs .tab a").click(function(){
		var tab_id = $(this).attr("href");

		if(tab_id == "#step_1"){
			$(".tabs .indicator").css("background-color", "#f44336");
		} else if(tab_id == "#step_2"){
			$(".tabs .indicator").css("background-color", "#2196f3");
		} else if(tab_id == "#step_3"){
			$(".tabs .indicator").css("background-color", "#ff9800");
		}else if(tab_id == "#step_4"){
			$(".tabs .indicator").css("background-color", "#4caf50");
		}

	});

	
	$(".count-wrapper").hover(
	  	function() {
	    	$(this).transition({ y: '-40px' });
	    	$(this).next().transition({ 
	    		opacity: '1',  
	    		y: '-60px'
	    	});
	  	}, function() {
	    	$(this).transition({ y: '0px' });
	    	$(this).next().transition({  
	    		opacity: '0',
	    		y: '60px'
	    	});
	  	}
	);

	$(".tabs .tab a").click(function(){
		$(".indicator").css("width", "auto");
	});

	var nickname_container;

	$(".member-container").hover(	

	  	function() {
	  		nickname_container = $(this).next(".nickname");
	    	$(nickname_container).transition({ opacity: '0' });
	    	
	  	}, function() {
	    	$(nickname_container).transition({ opacity: '1' });
	  	}
	);

});