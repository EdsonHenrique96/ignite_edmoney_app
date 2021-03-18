import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyles } from './styles/global';

function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);
  
  function openNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function closeNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Header onOpenModal={openNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      />
    </div>
  );
}

export default App;
