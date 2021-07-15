import Header from './Header';
import Form from './Form';
import styled from 'styled-components'

const Body = styled.div`
  text-align: center;
  width: 700px;
  margin: 0 auto;
  margin-top: 10px;
`

function App() {
  return (
    <Body>
      <Header />
      <Form />
    </Body>
  );
}

export default App;