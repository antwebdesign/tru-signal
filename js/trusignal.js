
// "this is just text" – String (single or double quotes)

console.log('JS with Steer');

//alert ('Hey!');
//prompt('What is your name?');

// jQuery 
// 1. select something on our page
// 2. Perform and action or update/change a value

//use dollar sign to do anything in jQuery
//$('body') //select body
//$('.gallery') // select something with the class="gallery"
//$('nav a') // select the a tag within the nav tag
//$('h1,h2') // select both the h1 and the h2

// change the CSS, TEXT, ATTRIBUTES, HTML

//Select the nav bar and change the background colour

//Clicking
$('header').click(	function(){
	//This is a set of instructions that runs when we click on the header tag

	// select the nav bar 
	$('nav').css('background-color','#FF7163');
	$('h2').text('thanks for viewing');
})

// Show and Hide the navigation using the icon

$('.nav-trigger').click( function(){
	// instructions here
	console.log('clicking on the nav trigger?');

	//Hide
	//$('nav').hide();

	// fade out
	//$('nav').fadeOut();

	//fade in
	//£('nav').fadeIn();

	//Slide Down
	//$('nav').SlideDown();

	//Toggle
	$('nav').slideToggle();
});