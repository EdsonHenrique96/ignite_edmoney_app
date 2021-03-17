import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
