import React, { FC, useCallback } from 'react'
import { Button as StyledButtonComponent } from 'components'
import { createGrid } from 'reducers'
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux' 

const NewButton : FC = () => {
	const dispatch = useDispatch<Dispatch<Action>>()
	const createNewGrid = useCallback(() => {
		if (window.confirm("Are you sure you want to start a new game?")){
			dispatch(createGrid())
		}
	}, [dispatch])
	return <StyledButtonComponent onClick = {createNewGrid}>New Game</StyledButtonComponent>
}

export default NewButton