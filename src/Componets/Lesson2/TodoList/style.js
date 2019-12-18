import styled from 'styled-components';

const Root = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    border: 1px lightgray solid;
    border-radius: 10px;
    overflow:hidden;
    > * {
      border-bottom: 1px lightgray solid;
    }
    
    > *:last-child {
      border: none;
    }
  ` 
export default Root ;
