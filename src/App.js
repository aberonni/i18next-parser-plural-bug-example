import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './logo.svg';
import './App.css';

function App() {
  const { t } = useTranslation();

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCounter(counter + 1)}>{t('button')}</button>
        <p>{t('description', { count: counter })}</p>
      </header>
    </div>
  );
}

export default App;
