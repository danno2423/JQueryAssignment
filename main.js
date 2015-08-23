
/*

Create a “cheat sheet” JavaScript file that contains examples of all of the things we learned today, delineated with comments

Create a web page with 4 different jQuery events. Have at least one of them be initiated by a click event.

*/


//Selecting elements

$('p');

$('#cookies');

//Document.ready / alerts


$(document).ready(function(){
	alert('Dis iz a poorly ritten JavaScript alurt');


//Hiding/Sliding

	$('#cookies').slideUp(3000);



//Using a button, input, and variables to manipulate data


	function timesFiftySteven(num) {
	return(num * 57);
};

$('#number_button').click(function(){
	var num = $('input').val();
	var result = timesFiftySteven(num);
	alert(result);
});


//Animating an element

$('#animate').click(function(){
	$('#phones').animate({
		left: '100px',
		height: '300px',
		wiidth:'200px',
		opacity: '.3'
	});
});


});



