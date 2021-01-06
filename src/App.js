import { useState } from 'react'

// Components
import Header from './components/Header/Header';

// Pages
import StepOne from './pages/StepOne/StepOne';

// Styles
import './App.sass';

function App() {

  const [change, setChange] = useState(true)

  return (
    <div className="App">
      <div className="container">
        <Header />
        <StepOne change={change} setChange={setChange} />
      </div>
    </div>
  );
}

export default App;
