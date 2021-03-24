import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const NewTransactionForm = styled.form`
  h2 {
    color: var(--text-title);
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  input {
    width: 100%;
    background-color: #E7E9EE;
    height: 4rem;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    padding: 0 1.5rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    width:100%
  }

  button[type="submit"] {
    background-color: var(--green);

    border: 0;
    border-radius: 4px;
    font-weight: 600;
    color: #fff;
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
  }

  .react-modal-close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
  }
`;

export const TransactionTypesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`;

interface TransactionTypeButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.isActive 
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'
    };

    width: 100%;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    font-weight: 400;
    color: var(--text-title);
    height: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    transition: border-color 0.2s;

    img {
      height: 20px;
      width: 20px;
    }

    span {
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }

    &:hover {
      border-color: ${darken('0.1', '#d7d7d7')};
    }

`;