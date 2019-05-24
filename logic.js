let x = 'X', o = 'O';

let activeChar = x;
let activePlayer = 1;
let winStat = 0;
let logCtr = 0;
let p1 = 0, p2 = 0;

/*let d = new Date();
d.setTime(d.getTime() + (10*24*60*60*1000));
let expires = "expires="+ d.toUTCString();*/

let playerOneChar = x, playerTwoChar = o;

initialise();

$('p').click(function () {
  if ($(this).text() === '' && winStat === 0) {
  	$(this).text(activeChar);
  	logCtr++;
  }
  checkWinner();
  if (winStat === 0) {
	  activePlayer = (activePlayer === 1)? 2 : 1;
	  manageActive();
      activeChar = switchChar(activeChar); 	
  }
});

function clean() {
	$('p').text('');
	$('#results').hide(1000);
	$('.mainDiv').show(1000);
	initialise();
}

function initialise() {
	winStat = 0;
	logCtr = 0;
	$('#playerOne').text(playerOneChar);
	$('#playerTwo').text(playerTwoChar);
	addScore();
	manageActive();
}

function switchChar(argument) {
	return (argument === x)? o : x;
}

function manageActive() {
	if (activePlayer === 1) {
		$('#p1').addClass('playerDivFull');
		$('#p2').removeClass('playerDivFull');
	} else {
		$('#p2').addClass('playerDivFull');
		$('#p1').removeClass('playerDivFull');
	}
}

function addScore() {
	$('#playerOne').append('<span class = "pr"> - ' + p1 +' </span>');
	$('#playerTwo').append('<span class = "pr"> - ' + p2 +' </span>');
}

function checkWinner() {
	if (($('#11').text() === playerOneChar && $('#12').text() === playerOneChar && $('#13').text() === playerOneChar) ||
		($('#21').text() === playerOneChar && $('#22').text() === playerOneChar && $('#23').text() === playerOneChar) ||
		($('#31').text() === playerOneChar && $('#32').text() === playerOneChar && $('#33').text() === playerOneChar) ||
		($('#11').text() === playerOneChar && $('#21').text() === playerOneChar && $('#31').text() === playerOneChar) ||
		($('#12').text() === playerOneChar && $('#22').text() === playerOneChar && $('#32').text() === playerOneChar) ||
		($('#13').text() === playerOneChar && $('#23').text() === playerOneChar && $('#33').text() === playerOneChar) ||
		($('#11').text() === playerOneChar && $('#22').text() === playerOneChar && $('#33').text() === playerOneChar) ||
		($('#13').text() === playerOneChar && $('#22').text() === playerOneChar && $('#31').text() === playerOneChar)) {
		winStat++;
		p1++;
		setTimeout(function () {
			$('.mainDiv').hide(700);
			$('#results').show(700);
			$('#results').html('<p class="pr mainDiv playerInfo">' + playerOneChar + ' wins!</p>');
		}, 700);
	}
	else if (($('#11').text() === playerTwoChar && $('#12').text() === playerTwoChar && $('#13').text() === playerTwoChar) ||
		($('#21').text() === playerTwoChar && $('#22').text() === playerTwoChar && $('#23').text() === playerTwoChar) ||
		($('#31').text() === playerTwoChar && $('#32').text() === playerTwoChar && $('#33').text() === playerTwoChar) ||
		($('#11').text() === playerTwoChar && $('#21').text() === playerTwoChar && $('#31').text() === playerTwoChar) ||
		($('#12').text() === playerTwoChar && $('#22').text() === playerTwoChar && $('#32').text() === playerTwoChar) ||
		($('#13').text() === playerTwoChar && $('#23').text() === playerTwoChar && $('#33').text() === playerTwoChar) ||
		($('#11').text() === playerTwoChar && $('#22').text() === playerTwoChar && $('#33').text() === playerTwoChar) ||
		($('#13').text() === playerTwoChar && $('#22').text() === playerTwoChar && $('#31').text() === playerTwoChar)) {
		winStat++;
		p2++;
		setTimeout(function () {
			$('.mainDiv').hide(700);
			$('#results').show(700);
			$('#results').html('<p class="pr mainDiv playerInfo">' + playerTwoChar + ' wins!</p>');
		}, 700);		
	}
	else if (logCtr === 9 && winStat === 0) {
		setTimeout(function () {
			$('.mainDiv').hide(700);
			$('#results').show(700);
			$('#results').html('<p class="pr mainDiv playerInfo">Draw!</p>');
		}, 700);
	}
}