import styled from 'styled-components/macro';

const StyledTwoBlocksInCenter = styled.ul`
  list-style: none;
  margin: 0 ;
  padding: 0;
  display: grid;
  grid-template-columns: minmax(70px, 15em)  minmax(70px, 15em);
  grid-gap: var(--spacing-sm);

  @media (min-width: 768px) {
    grid-template-columns: minmax(70px, 15em) minmax(70px, 15em);
    grid-gap: var(--spacing-lg);
  }

  .grid__item {
    background-color: var(--dark-grey);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
  }




`;

export default StyledTwoBlocksInCenter;