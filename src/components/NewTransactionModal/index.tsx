import Modal from 'react-modal';
import { NewTransactionForm, TransactionTypesContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


Modal.setAppElement('#root');
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
            <button type="button">
              <img src={incomeImg} alt="tipo entrada"/>
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={outcomeImg} alt="tipo saída"/>
              <span>Saída</span>
            </button>
          </TransactionTypesContainer>
          <input type="text" name="" id="" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </NewTransactionForm>

    </Modal>
  )
}