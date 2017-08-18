var wins=0;
var guesses_left=9;
var guesses_so_far=[];
var computerChoices=["bread","milk","fruits","vegetables","meats","sweets"];
var my_dashes=[];
var computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];
dashes(computerGuess.length,my_dashes);

document.onkeyup=function(event)
{
	var userGuess=event.key;
	var html;
	var store='';
	for(var v=0;v<computerGuess.length;v++)
	{
		if(userGuess===computerGuess[v])
		{
			//increment the number of wins
			//put the userGuess value on the dash in my_dashes
			wins++;
			store=computerGuess[v];
			break;
		}
	}
	if(store=='')
	{
		guesses_left--;
		myguesses(guesses_so_far,userGuess);
	}	

	if((guesses_left===0)||(wins===computerGuess.length))
	{
		guesses_left=9;
		guesses_so_far=[];
		my_dashes=[];
		wins=0;
		computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];
		dashes(computerGuess.length,my_dashes);
	}
	html="<p> <b>Wins:</b> "+wins+"</p><br>"+"<p><b>Current word:</b>"+my_dashes.join(' ')+"</p><br>"+
	"<p><b>Guesses Left:</b> "+guesses_left+"</p><br>"+"<p><b>Your guesses so far:</b> "+
	guesses_so_far.join(',')+"</p><br>";
	document.querySelector("#game").innerHTML=html;	
}

function myguesses(guesses_thus_far,userguess)
{
	guesses_thus_far.push(userguess);
	return guesses_thus_far;
}

function dashes(compGuessLength,the_dashes)
{
	for(var v=0;v<compGuessLength;v++)
	{
		the_dashes.push('_');
	}
	return the_dashes;
}