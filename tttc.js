//Cell Contents

var cellcontets = {

	EMPTY : 0,
	CROSS : 1,
	NOUGHT : 2
}

//Game State
var game_states = {
	PLAYING : 0,
	DRAW    : 1,
	CROSS_WON : 2,
	NOUGHT_WON : 3
}

//Game board and Game status

var game_board_rows = 3;
var game_board_cols = 3;

//Variable for current game State
var currentState;
var currentPlayer;
var currentRow;
var currentColumn;




var game_row_array = [];



function initializeGame()
{

	for(var row=0;row<game_board_rows;++row)
	{
		var colarray = [];
		for(var col=0;col<game_board_cols;++col)
		{
			//game_row_array[i][j] = cellcontets.EMPTY;
			colarray.push(cellcontets.EMPTY);
		}
		game_row_array.push(colarray);
	}
	currentState = game_states.PLAYING;
	currentPlayer = cellcontets.CROSS;
}

function playerMove(seed)
{

	var validInput = false;
	do
	{
		if(seed = cellcontets.CROSS)
		{
			//console.log("Player 'X', enter your move (row[1-3] column[1-3]): ");
			process.stdout.write("Player 'X', enter your move (row[1-3] column[1-3]): ");
		}
		else
		{
			//console.log("Player 'O', enter your move (row[1-3] column[1-3]): ");
			process.stdout.write("Player 'O', enter your move (row[1-3] column[1-3]): ");
		}
		var row = process.argv.slice(0);
		var col = process.argv.slice(1);

		if (row >= 0 && row < game_board_rows && col >= 0 && col < game_board_cols && game_row_array[row][col] == cellcontets.EMPTY) {
            currntRow = row;
            currentCol = col;
            game_row_array[currntRow][currentCol] = seed;  // update game-board content
            validInput = true;  // input okay, exit loop
         } else {
           
            //console.log("This move at (" + (row + 1) + "," + (col + 1) + ") is not valid. Try again...");
            process.stdout.write("This move at (" + (row + 1) + "," + (col + 1) + ") is not valid. Try again...");
         }

	}
	while(!validInput);
}

function updateGameStatus(seed,currRow,currCol)
{

	if(hasWon(seed,currRow,currCol))
	{
		currentState = (seed == cellcontets.CROSS) ? game_states.CROSS_WON : game_states.NOUGHT_WON;
	}
	else if(isDraw())
	{
		currentState = game_states.DRAW;
	}
	//Else continue playing.
}

function isDraw()
{
	for(var row=0;row<game_row_array.length;++row)
	{
		for(var col=0;col<game_board_cols;++col)
		{
			if(game_row_array[i][j] = cellcontets.EMPTY)
			{
				return false;
			}
		}
	}
	return true;
}

function hasWon(theSeed,currRow,currCol)
{
	// 3 in a row
	if(game_row_array[currRow][0] == theSeed 
		&& game_row_array[currRow][1] == theSeed 
		&& game_row_array[currRow][2] == theSeed) return true;

	// 3 in a column
	if(game_row_array[0][currCol] == theSeed 
			&& game_row_array[1][currCol] == theSeed 
			&& game_row_array[2][currCol] == theSeed) return true;

	// 3 in diagonal
	if(currRow == currCol 
		&& game_row_array[0][0] == theSeed
		&& game_row_array[1][1] == theSeed
		&& game_row_array[2][2] ==theSeed) return true;


	// 3 in the opposite diagonal
	if(currRow + currCol == 2 
		&& game_row_array[0][0] == theSeed
		&& game_row_array[1][1] == theSeed
		&& game_row_array[2][2] ==theSeed) return true;

	//If none of the above
	return false;

}

function printBoard()
{
	for(var row=0;row < game_board_rows;++row)
	{
		for(var col=0;col<game_board_cols;++col)
		{
			printCell(game_row_array[row][col]);
			if(col != game_board_cols - 1)
			{
				process.stdout.write(" | ");
			}
		}
		console.log("");
		if(row != game_board_rows - 1)
		{
			process.stdout.write("------------");
		}
	}
	console.log("");
}

function printCell(cell)
{
	if(cell == cellcontets.EMPTY)
	{
		process.stdout.write("   ");
		return;
	}
	if(cell == cellcontets.NOUGHT)
	{
		process.stdout.write(" O ");
		return;
	}
	if(cell == cellcontets.CROSS)
	{
		process.stdout.write(" X ");
		return;
	}
}

function startGame()
{
	initializeGame();

	do
	{
		playerMove(currentPlayer);
		updateGame(currentPlayer,currentRow,currentColumn);

		printBoard();

		//Print message if game is over
		if(currentState == game_states.CROSS_WON)
		{
			console.log("'X' Won: Game Over !");
		}
		else if(currentState == game_states.NOUGHT_WON)
		{
			console.log("'O' Won: Game Over !");
		}
		else if(currentState == game_states.DRAW)
		{
			console.log("It is a draw: Play Again !");
		}

		//Change the player
		currentPlayer = (currentPlayer == cellcontets.CROSS) ? cellcontets.NOUGHT : cellcontets.CROSS;

	}
	while(currentState == game_states.PLAYING);
}


console.log(cellcontets.EMPTY);
console.log(game_states.NOUGHT_WON);
startGame();