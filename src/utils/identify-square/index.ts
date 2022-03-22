import { GRID, SQUARE } from 'typings'

interface IInput {
	grid: GRID
	row: number
	col: number
}
/**
 * A function that identifies and returns the current 3x3 square of a given sudoku grid
 * at a row and column index.
 * @param object with 9x9 sudoku grid, row index and column index
 *
 */
function identifyWorkingSquare({ col, row, grid }: IInput): SQUARE {
	let square = []
	let start = 0
	let end = 0
	// define which rows we should loop through first
	// if the row is less than 3, we want to only loop through
	// a 3 x 3 section below row index 3
	if (row < 3){
		start = 0 
		end = 3
	}
	// for 6, it'd be a 3 x 3 section
	// spanning from 3 to 6
	else if (row < 6){
		start = 3
		end = 6
	}
	// for 9, it'd be a 3 x 3 section
	// spanning from 6 to 9 
	else {
		start = 6 
		end = 9
	}
	// once we've figured out the rows we want to loop through,
	// get the proper columns to create the 3 x 3 square
	for (let x = start; x < end; ++x){
		// if less than 3, grab col index 0, 1, 2
		if (col < 3){
			square.push([grid[x][0], grid[x][1], grid[x][2]])
		}
		// if less than 6, grab col index 3, 4,5 
		else if (col < 6){
			square.push([grid[x][3], grid[x][4], grid[x][5]])
		}
		// if less than 9, grab col index 6, 7, 8 
		else {
			square.push([grid[x][6], grid[x][7], grid[x][8]])
		}
	}
	return square as SQUARE
}

export default identifyWorkingSquare