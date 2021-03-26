import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { TransactionTableContainer } from "./styles";

export function TransactionTable() {
  const transactions = useContext(TransactionContext);

  return (
    <TransactionTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{
                `${
                  transaction.type === 'withdraw' 
                    ? '-' 
                    : ''
                  } ${new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)
                }`
              }</td>
              <td>{transaction.category}</td>
              <td>{
                new Intl.DateTimeFormat('pt-BR')
                  .format(new Date(transaction.createdAt))
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionTableContainer>
  )
}