import styled from "styled-components";

const Tasks = () => {
  return (
    <Task>
      <p>Text</p>
      <button className="del">Delete</button>
    </Task>
  );
};

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 2rem 0;
  background: white;
  color: #1b1b1b;
  padding-left: 1rem;
  border-radius: 6px;

  p {
    padding-right: 1rem;
  }
  .del {
    height: 100%;
    border-radius: 6px;
    outline: none;
    transition: all 0.3s ease-in-out;
    font-weight: bold;
    &:hover {
      background: red;
      color: white;
    }
  }
`;

export default Tasks;
