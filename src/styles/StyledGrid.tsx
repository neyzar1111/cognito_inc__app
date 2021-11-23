import styled from 'styled-components/macro';

const StyledGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(70px, 15em));
  grid-gap: var(--spacing-sm);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(70px, 15em));
    grid-gap: var(--spacing-lg);
  }

  .grid__item {
    background-color: var(--dark-grey);
    border-radius: var(--border-radius-subtle);
    color: var(--white);
    transition: background-color 0.3s ease;
    cursor: default;
  }

  .grid__item__inner {
    padding: var(--spacing-sm);
    @media (min-width: 768px) {
      padding: var(--spacing-md);
    }
  }
.word__container{
   padding: 10px 50px;
   border: 1px solid var(--light-grey);
   min-height: 44px
}

`;

export default StyledGrid;