import 'styled-components'
import { theme } from '../styles'

type Theme = typeof theme

// when using ThemeProvider, there is a DefaultTheme 
// we need to extend the DefaulTheme using our custom themes
// and our custom theme using our global styles
declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}	
}