import { GRID, NUMBERS } from 'typings'
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare, shuffle } from 'utils'

const gridExample : GRID = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers : NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid (9 x 9) sudoku grid
 */
function fillGrid(grid: GRID){
	let row = 0;
	let col = 0;

	// loop through each cell (81 cells)
	for (let i = 0; i < 81; i++){
		// this helps calculate the row and col without having to use two for loops
		row = Math.floor(i / 9);
		col = i % 9
		if (grid[row][col] === 0){
			shuffle(numbers)
			for (let value of numbers){
				// run the following conditionals  make sure the value would follow value sudoku rules
				// is it not in the grid row?	
				if (!isInRow({grid, row, value})){
					// is it not in the grid col?
					if (!isInCol({grid, col, value})){
						const square = identifySquare({col, grid, row})
						// is it not in the grid square?
						if (!isInSquare({square, value})){
							grid[row][col] = value
							// check grid if its full, if yes, 
							if (checkGrid(grid)) return true
							// Perform recursive backtracking function
							else if (fillGrid(grid)) return true
						}

					}
				}
			}
			break;
		}
	}

	grid[row][col] = 0;
}
export default fillGrid

