import Modal from 'react-modal';
import { NewTransactionForm, TransactionTypesContainer, TransactionTypeButton } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = "deposit" | "withdraw";

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [ type, setType ] = useState<TransactionType>("deposit");

  const [ title, setTitle ] = useState("");
  const [ amount, setAmount ] = useState(0);
  const [ category, setCategory ] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      type,
      category
    }

    api.post('/transactions', data);
  }

  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Nova Transação"
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <NewTransactionForm onSubmit={handleSubmit}> 
          <h2>Cadastrar transação</h2>
          <button 
            type="button" 
            className="react-modal-close-button"
            onClick={onRequestClose}
          >
            <img src={closeImg} alt="fechar modal"/>
          </button>

          <input
            type="text"
            name="title"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            name="amount"
            placeholder="Preço"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

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

          <input
            type="text"
            name="categoria"
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />

          <button type="submit">
            Cadastrar
          </button>
        </NewTransactionForm>

    </Modal>
  )
}