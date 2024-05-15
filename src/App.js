import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/themes';
import { BrowserRouter as Router } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import ToolCard from './cards/card';
import { ToolList } from './cards/card';

const Body = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
background-color: ${({ theme }) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

export const Container = styled.div`
  padding 100px;
  text-align: center;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 100px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const Welcome = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 48px;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0.5;
  @media (max-width: 640px) {
    line-height: 28px;
    font-size: 9px;
  }
`;

export const Subtitle = styled.div`
  font-size: 16px;
  margin-bottom: 42px;
  line-height: 90px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 640px) {
    font-size: 9px;
    line-height: 32px;
  }
`;

export const ToolsContainer = styled.div`
    padding 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Body>
        <Container>
            <Welcome>Welcome to</Welcome>
            <Title><Typewriter options={{strings: 'Click & Create', autoStart: true, loop: true}}></Typewriter></Title>
            <Subtitle>Tools you shall forever need</Subtitle>

            <ToolsContainer>
            {ToolList.map((item) => <ToolCard tool={item} />)}
            </ToolsContainer>
        </Container>
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
