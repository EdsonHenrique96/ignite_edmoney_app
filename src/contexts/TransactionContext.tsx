import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

type TransactionInputData = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInputData) => void
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInputData) {
        api.post('/transactions', transaction);
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}