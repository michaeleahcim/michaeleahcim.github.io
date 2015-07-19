
var work = $( ".work" );
var personal = $( ".personal" );
var sleep = $( ".sleep" );
var graycolor = "#2D2D2D";

var workhours = $( "#workhours" );
var personalhours = $( "#personalhours" );
var sleephours = $( "#sleephours" );

var bgGreen = "#366056";
var bgRed = "#6B3D3F";
var bgPurple = "#79688F";

workhours.mouseenter(function() {
	personal.css( "background", graycolor );
	sleep.css( "background", graycolor );
});

workhours.mouseleave(function() {
	personal.css( "background", bgGreen);
	sleep.css( "background", bgPurple );
});


personalhours.mouseenter(function() {
  	work.css( "background", graycolor );
	sleep.css( "background", graycolor );
});

personalhours.mouseleave(function() {
	work.css( "background", bgRed );
	sleep.css( "background", bgPurple );
});


sleephours.mouseenter(function() {
  	work.css( "background", graycolor );
	personal.css( "background", graycolor );
});

sleephours.mouseleave(function() {
 	work.css( "background", bgRed );
	personal.css( "background", bgGreen );
});

var defaultmessage = 'On weekends I take care of cleaning, laundry then do whatever I want.';

$( "#boxes #box:nth-child(1)" ).mouseenter(function() {
	$( ".text" ).text('Wake up go straight to shower and get ready for work. Make Coffee.');
});

$( "#boxes #box:nth-child(1)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(2)" ).mouseenter(function() {
	$( ".text" ).text('Listen to music and work on design for a little while then head to work.');
});

$( "#boxes #box:nth-child(2)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(8)" ).mouseenter(function() {
	$( ".text" ).text('Meditate and practice some Javascript.');
});

$( "#boxes #box:nth-child(8)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(12)" ).mouseenter(function() {
	$( ".text" ).text('Shower. Eat. Relax.');
});

$( "#boxes #box:nth-child(12)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(13)" ).mouseenter(function() {
	$( ".text" ).text('Work on Coding.');
});

$( "#boxes #box:nth-child(13)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(14)" ).mouseenter(function() {
	$( ".text" ).text('Work on Coding.');
});

$( "#boxes #box:nth-child(14)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(15)" ).mouseenter(function() {
	$( ".text" ).text('Work on Coding.');
});

$( "#boxes #box:nth-child(15)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});


$( "#boxes #box:nth-child(16)" ).mouseenter(function() {
	$( ".text" ).text('Reflect on the day then get ready for bed. Meditate before falling asleep.');
});

$( "#boxes #box:nth-child(16)" ).mouseleave(function() {
	$( ".text" ).text(defaultmessage);
});

/*
.work	background: #6B3D3F;

.sleep	background: #79688F;

.personal	background: #366056
*/