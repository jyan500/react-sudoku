import { createGlobalStyle, css } from 'styled-components'
export default createGlobalStyle`
	${({theme}) => css`
		html {
			height: 100%;
			body {
				display: flex;
				flex-direction: column;
				height: 100%;
				margin: 0;
				background: ${theme.colors.background};

				#root {
					/* adding cc gives an opacity attribute to the color */
					/* background: ${theme.colors.background}; */
					color: ${theme.colors.black};
					font-family: sans-serif;
					padding: 15px;
					/* height: 100%; */
					display: flex;
					justify-content: center;
				}
			}
		}
	`}
`