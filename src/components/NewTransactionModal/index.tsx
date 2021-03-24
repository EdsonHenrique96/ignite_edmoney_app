import Modal from 'react-modal';
import { NewTransactionForm, TransactionTypesContainer, TransactionTypeButton } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';


Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = "deposit" | "withdraw";

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [ type, setType ] = useState<TransactionType>("deposit");

  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Nova Transação"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <NewTransactionForm>
          <h2>Cadastrar transação</h2>
          <button 
            type="button" 
            className="react-modal-close-button"
            onClick={onRequestClose}
          >
            <img src={closeImg} alt="fechar modal"/>
          </button>

          <input type="text" name="" id="" placeholder="Título" />
          <input type="text" name="" id="" placeholder="Preço" />
          <TransactionTypesContainer>
            <TransactionTypeButton
              type="button"
              onClick={() => setType('deposit')}
              isActive={ type === 'deposit' }
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton
              type="button"
              onClick={() => setType('withdraw')}
              isActive={ type === 'withdraw' }
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída"/>
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionTypesContainer>
          <input type="text" name="" id="" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </NewTransactionForm>

    </Modal>
  )
}