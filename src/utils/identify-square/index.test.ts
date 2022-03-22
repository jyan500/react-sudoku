import { GRID } from 'typings'
import { sampleGrid} from '../constants'
import identifySquare from './'

describe('identifySquare', () => {
	it('identifies the correct square with a given grid, row and col index', () => {
		const grid : GRID = [
			[8, 4, 2, 6, 5, 1, 3, 9, 7],
			[5, 3, 7, 2, 8, 0, 6, 4, 1],
			[6, 9, 1, 7, 3, 4, 5, 2, 8],
			[1, 6, 3, 8, 4, 5, 9, 7, 2],
			[7, 5, 8, 1, 9, 2, 4, 6, 3],
			[0, 2, 4, 3, 7, 6, 1, 8, 5],
			[4, 7, 6, 5, 1, 8, 2, 3, 0],
			[2, 8, 5, 9, 6, 3, 7, 1, 4],
			[3, 1, 9, 3, 1, 7, 8, 5, 6],
		]	
		// top left 3 x 3
		expect(identifySquare({col: 2, row: 2, grid})).toStrictEqual([
			[8, 4, 2],
			[5, 3, 7],
			[6, 9, 1],
		])
		// middle 3 x 3
		expect(identifySquare({col: 5, row: 5, grid})).toStrictEqual([
			[8, 4, 5],
			[1, 9, 2],
			[3, 7, 6],
		])
		// bottom right 3 x 3
		expect(identifySquare({col: 8, row: 8, grid})).toStrictEqual([
			[2, 3, 0],
			[7, 1, 4],
			[8, 5, 6],
		])
	})	
})