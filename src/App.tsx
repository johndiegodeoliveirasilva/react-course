import { ThemeProvider } from 'styled-components';
import { Input } from './components/Input'
import theme from './theme/theme'
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Input></Input>
    </ThemeProvider>
    )
  }

export default App;