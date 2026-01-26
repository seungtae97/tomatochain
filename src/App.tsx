import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import TTCoinPage from './pages/TTCoinPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ttcoin" element={<TTCoinPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

