import Tasks from "./tasks";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <h1>To-Do App</h1>
      <Tasks />
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 3rem;
    text-decoration: underline;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
  }
  input {
    height: 2rem;
    outline: none;
    border: none;
  }
  button {
    height: 2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: green;
      color: white;
    }
  }
`;

export default App;
