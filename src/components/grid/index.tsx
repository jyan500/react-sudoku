import React, { FC, useEffect, useCallback } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { createGrid, fillBlock, IReducer, selectBlock } from 'reducers'
import { BLOCK_COORDS, INDEX, GRID, N, NUMBERS } from 'typings'
import { Container, Row } from './styles'
import Block from './block'
import { createFullGrid } from 'utils'
// React.Children.toArray fixes an issue where if we don't have unique ids to give as 
// keys for an element, it will remove the "needs unique" key
interface IState {
	selectedBlock? : BLOCK_COORDS
	selectedValue: N
	solvedGrid?: GRID
}
const Grid: FC = () => {
	const state = useSelector<IReducer, IState>(({selectedBlock, solvedGrid, workingGrid}) => ({
		selectedBlock,
		selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0,
		solvedGrid,
	}))
	// after useCallback(), this will will dispatch the createGrid() which creates the full grid
	const dispatch = useDispatch<Dispatch<AnyAction>>()
	// useCallback is a cache function
	// this useCallback function will fire
	const create = useCallback(() => dispatch(createGrid()), [dispatch])
	// create will only run once at the start
	useEffect(() => {
		if (!state.solvedGrid){
			create()
		}
	}, [create, state.solvedGrid])

	const fill = useCallback(
		(n: NUMBERS) => {
			if (state.selectedBlock && state.selectedValue === 0){
				dispatch(fillBlock(n, state.selectedBlock))
			}
		},
		[dispatch, state.selectedBlock, state.selectedValue]
	)

	function moveDown(){
		if (state.selectedBlock && state.selectedBlock[0] < 8){
			console.log(state.selectedBlock)
			dispatch(
				selectBlock([
					(state.selectedBlock[0] + 1) as INDEX,
					state.selectedBlock[1]
				])
			)
			console.log('down')	
		}
	}

	function moveLeft(){
		if (state.selectedBlock && state.selectedBlock[1] > 0){
			dispatch(
				selectBlock([
					state.selectedBlock[0], (state.selectedBlock[1]-1) as INDEX
				])
			)
			console.log('left')	
		}
	}

	function moveRight(){
		if (state.selectedBlock && state.selectedBlock[1] < 8){
			dispatch(selectBlock([state.selectedBlock[0], (state.selectedBlock[1]+1) as INDEX]))
			console.log('right')	
		}
	}

	function moveUp(){
		if (state.selectedBlock && state.selectedBlock[0] > 0){
			dispatch(selectBlock([(state.selectedBlock[0]-1) as INDEX, state.selectedBlock[1]]))
			console.log('up')	
		}
	}

	useMousetrap('1', () => fill(1))
	useMousetrap('2', () => fill(2))
	useMousetrap('3', () => fill(3))
	useMousetrap('4', () => fill(4))
	useMousetrap('5', () => fill(5))
	useMousetrap('6', () => fill(6))
	useMousetrap('7', () => fill(7))
	useMousetrap('8', () => fill(8))
	useMousetrap('9', () => fill(9))

	useMousetrap('down', moveDown)
	useMousetrap('left', moveLeft)
	useMousetrap('right', moveRight)
	useMousetrap('up', moveUp)

	return (
		<Container data-cy = "grid-container">
			{React.Children.toArray([...Array(9)].map((_, rowIndex) => (
				<Row data-cy = "grid-row-container" key = {rowIndex}>
					{React.Children.toArray([...Array(9)].map((_, colIndex) => ( 
						<Block rowIndex = {rowIndex as INDEX} colIndex = {colIndex as INDEX} key = {colIndex} data-cy = "block"></Block>				
					)))}
				</Row>
			)))}
		</Container>
	)	
}

export default Grid