import { AnyAction } from 'redux'
import { IReducer } from './interface'
import * as types from './types'
import { GRID } from 'typings'
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'

const initialState : IReducer = {}

function reducer(state = initialState, action: AnyAction){
	switch(action.type){
		case types.CREATE_GRID:
			// the solved grid will be referenced to figure out if the user has filled in the right number
			// within a cell
			const solvedGrid = createFullGrid()
			const gridCopy = copyGrid(solvedGrid)
			// the challenge grid is what is originally presented before the user has filled in any numbers
			const challengeGrid = removeNumbers(gridCopy)
			// the working grid will be mutated by users when they fill in numbers
			const workingGrid = copyGrid(challengeGrid)
			return {
				...state, 
				challengeGrid,
				solvedGrid,
				workingGrid
			}
		case types.FILL_BLOCK: {
			if (state.workingGrid && state.solvedGrid){
				if (state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value){
					alert('Incorrect option!')	
					return state
				}
				state.workingGrid[action.coords[0]][action.coords[1]] = action.value
				if (compareArrays(state.workingGrid, state.solvedGrid)){
					alert('Sudoku completed!')	
				}
				return {...state, workingGrid : [...state.workingGrid] as GRID}
			}
			return state
		}
		case types.SELECT_BLOCK:
			return {...state, selectedBlock: action.coords}
		default:
			return state
	}
}

export default reducer