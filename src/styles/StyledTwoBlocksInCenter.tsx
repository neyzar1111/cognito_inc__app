import styled from 'styled-components/macro';
interface IProps {
    answer: boolean|undefined;
}
const StyledTwoBlocksInCenter = styled.ul<IProps>`
  list-style: none;
  display: grid;
  grid-gap: var(--spacing-sm);
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  padding: 30px;
  border-radius: var(--border-radius-subtle);
  color: white;
  background: linear-gradient(to bottom, white  50%, ${props => {if(props.answer === true){ return  'green' } else if(props.answer === undefined){return "black"} else if(props.answer === false){return 'red'} }}50%);
  background-size: auto 2px;
 outline: 10px dashed ${props => {if(props.answer === true){ return  'green' } else if(props.answer === undefined){return "black"} else if(props.answer === false){return 'red'} }} ;
 animation: 1s ${props => {if(props.answer === true){ return  'animateBorderTrue' } else if(props.answer === undefined){return "black"} else if(props.answer === false){return 'animateBorderFalse'} }}  all ;
    box-shadow: 0 0 0 10px #1B676B;
  .timer{
    text-align: left;
    color: var(--near-black);
    font-size: var( --fz-xl);
  }
  @media (max-width: 768px) {
    grid-gap: var(--spacing-lg);
  }

  .grid__item {
    background-color: var(--dark-grey);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
    height: 100px;
    font-size: var(--fz-xxl);
  }
  button {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: var(--border-radius-pill);
    color: var(--white);
    font-size: var(--fz-sm);
    font-weight: 700;
    padding: var(--spacing-xs) var(--spacing-sm);

    &:hover,
    &:focus {
        background-color: var(--light-red);


    }
  }
  button.false-btn {
    background-color: red;
    &:hover,
    &:focus {
        background-color: var(--light-red);
    }
  }
  
  button.true-btn {
    background-color: green;
    &:hover,
    &:focus {
        background-color: var(--light-green);
    }
  }
    
    @keyframes animateBorderTrue {
      to {
        outline-color: green;
        box-shadow: 0 0 0 10px #BEF202;
      }
    }
    @keyframes animateBorderFalse {
      to {
        outline-color: red;
        box-shadow: 0 0 0 10px #BEF202;
      }
    }


`;

export default StyledTwoBlocksInCenter;