import styled from 'styled-components';

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  transform: translateY(-50%);

  div {
    background-color: var(--shape);
    border-radius: 4px;
    padding: 1rem 2rem;
    color: var(--text-title);

    transition: translate 0.3s;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.high-light {
      color: var(--shape);
      background-color: var(--green);
    }

    &:hover {
      transform: translateY(-5%);
    }
  }
`;