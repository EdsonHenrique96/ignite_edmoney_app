import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--blue);
  padding: 2rem 0 12rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background-color: var(--blue-light);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
