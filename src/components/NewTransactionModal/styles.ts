import styled from 'styled-components';

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

  button:not(.react-modal-close-button) {
    background-color: var(--background);

    width: 49%;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    font-weight: 400;
    color: var(--text-title);
    height: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
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