import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
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
  createTransaction: (transaction: TransactionInputData) => Promise<void>
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInputData) {
    const response = await api.post('/transactions', transaction);
    const { data } = response;

    setTransactions([
      ...transactions,
      data.transaction
    ]);
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}