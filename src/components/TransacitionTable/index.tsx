import { useEffect } from "react";
import { TransactionTableContainer } from "./styles";

import { api } from '../../services/api';

export function TransactionTable() {
  useEffect(() => {
    api('/transactions')
      .then(response => console.log(response.data));
  }, []);

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
          <tr>
            <td>Salário</td>
            <td className="deposit">R$ 5.700,00</td>
            <td>Trabalho</td>
            <td>01/04/2021</td>
          </tr>

          <tr>
            <td>Iphone 11</td>
            <td className="withdraw">- R$ 4.080,00</td>
            <td>Eletronicos</td>
            <td>01/04/2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionTableContainer>
  )
}