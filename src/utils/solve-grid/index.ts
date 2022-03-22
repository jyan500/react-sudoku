import global from 'global'
import { GRID, NUMBERS } from 'typings'
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all possible combinations of numbers
 * @param grid A 9x9 array consisting of values from 0-9
 */
function solveGrid(grid: GRID){
	let row = 0 
	let col = 0
	for (let i = 0; i < 81; i++){
		// mapping the numbers 0 to 81 to their indices on each square of the 9x9 grid
		row = Math.floor(i/9)
		col = i % 9
		if (grid[row][col] === 0){
			for (let value of numbers){
				if (!isInRow({grid, row, value})){
					if (!isInCol({grid, col, value})){
						const square = identifySquare({ col, row, grid })	
						// if the value is in 3x3 square (determined from the current neighbors)
						if (!isInSquare({square, value})){
							grid[row][col] = value
							// if the grid is now full
							if (checkGrid(grid)){
								++global.counter
								break
							}
						}
					}
				}
			}
		}
	}
	grid[row][col] = 0
}

export default solveGrid