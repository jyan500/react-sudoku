import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { IReducer, selectBlock } from 'reducers'
import { Container } from './styles'
import { N, INDEX } from 'typings'

interface IProps {
	colIndex: INDEX 
	rowIndex: INDEX
}

interface IState {
	isActive: boolean
	isPuzzle: boolean
	value: N	
}

const Block : FC<IProps> = ({colIndex, rowIndex}) => {
	// this is basically like mapStateToProps
	const state = useSelector<IReducer, IState>(({challengeGrid, workingGrid, selectedBlock}) => (
		{
			isActive: selectedBlock ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex : false,
			isPuzzle: challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
			value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
		}
	))
	const dispatch = useDispatch<Dispatch<AnyAction>>()
	function handleClick(){
		if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))	
	}
	return (
		<Container 
			isActive={state.isActive} 
			onClick= {handleClick} 
			isPuzzle={state.isPuzzle}
			data-cy = {`block-${rowIndex}-${colIndex}`}>{ state.value === 0 ? '' : state.value }
		</Container>
	)	
}

export default Block