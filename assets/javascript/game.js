var targetNumber;
var currentNumber;
var wins = 0;
var losses = 0;
var numberList;
var crystalPics = ['crystal_1.jpe', 'crystal_2.jpe', 'crystal_3.jpe', 'crystal_4.jpe'];

//start/restart game
function start(){
	//reset var's
	numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	currentNumber = 0;

	//number to guess should be between 19-120
	targetNumber = Math.floor(Math.random() * 102) + 19;
	$('#numberTarget').text(targetNumber);
	$('#currentNum').text(currentNumber);

	//this is specifically for restart.
	//on win/loss it would append a new set of crystals after old set.
	$('#crystals').empty();

	for (var i = 0; i < crystalPics.length; i++) {
		//get a number from numberList to assign as data-value for image
		var getNum = numberList.splice(Math.random() * numberList.length, 1)[0];

		//create image, assign a class and data value
		var crystalImg = $('<img src=' + 'assets/images/' + crystalPics[i] + '>').addClass(
						'crystalImg').attr('data-crystalval', getNum);

		//put crystals in div
		$('#crystals').append(crystalImg);
	}

	$('#wins').text(wins);
	$('#losses').text(losses);
}

start();

$(document).on('click', '.crystalImg', function() {
	//set a var for value in data-value from crystal img
	var crystalVal = $(this).data('crystalval');
	console.log(crystalVal);
	//add data value to currentNumber
	currentNumber = currentNumber + crystalVal;
	//replace currentNumber on screen
	$('#currentNum').text(currentNumber);

	//win/loss condition
	if (currentNumber == targetNumber) {
		alert('Win');
		wins++;
		$('#wins').text(wins);
		start();
	}
	else if (currentNumber > targetNumber){
		alert('Loss');
		losses++;
		$('#losses').text(losses);
		start();
	}
});