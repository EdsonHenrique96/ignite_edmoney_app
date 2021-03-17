import styled from 'styled-components';

export const TransactionTableContainer = styled.div`

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: var(--text-body);

    th {
      font-weight: 400;
      padding: 0 1rem;
      text-align: left;
      line-height: 2rem;
    }

    td {
      background-color: var(--shape);
      font-weight: 400;
      padding: 1rem;

      &:first-child {
        color: var(--text-title);
        width: 40%;
        border-radius: 4px 0 0 4px;
      }

      &:last-child {
        border-radius: 0 4px 4px 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;