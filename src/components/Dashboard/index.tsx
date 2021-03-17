import { Summary } from '../Summary';
import { TransactionTable } from '../TransacitionTable';
import { DashboardContainer } from './style';

export function Dashboard() {
  return (
    <DashboardContainer>
      <Summary/>
      <TransactionTable />
    </DashboardContainer>
  )
}