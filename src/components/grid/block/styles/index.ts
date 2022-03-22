import styled, {css} from 'styled-components'
interface IProps {
	isActive? : boolean
	isPuzzle?: boolean
}
export const Container = styled.div<IProps>`
	${({isActive, isPuzzle, theme}) => css`
		display: flex;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 0;
		align-items: center;
		justify-content: center;
		background-color: ${isActive ? theme.colors.blue : theme.colors.white};
		border: solid 1px ${theme.colors.black};
		cursor: pointer;
		font-weight: ${isPuzzle ? 'bold' : 'normal'};
		font-size: 20px;
		height: auto;
		transition: ${theme.transition};
		user-select: none;

		/* hack to make sure the blocks stay square*/
		&:before {
			padding-top: 100%;
			content: '';
			float: left;
		}

		&:hover {
			background-color: ${theme.colors.lightBlue};
		}
	`}
`