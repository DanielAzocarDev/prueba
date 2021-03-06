import { useState } from 'react'

// Components
import Header from './components/Header/Header';

// Pages
import StepOne from './pages/StepOne/StepOne';
import StepTwo from './pages/StepTwo/StepTwo';
import StepThree from './pages/StepThree/StepThree';

// Styles
import './App.sass';

function App() {

  const [step, setStep] = useState(0)
  const [user, setUser] = useState({})

  const increaseStep = () => {
    setStep(step + 1)
  }

  const decreaseStep = () => {
    step === 0 ? (setStep(0)) : (setStep(step - 1))
  }

  const userData = (data) => {
    setUser({
      username: data.username,
      phone: data.phone,
      pwd: data.pwd,
      email: data.email
    })

    console.log(user)
  }

  return (
    <div className="App">
      <div className="container">
        <Header step={step} decreaseStep={decreaseStep} />

        {
          step === 0 && <StepOne increaseStep={increaseStep} userData={userData} />
        }
        {
          step === 1 && <StepTwo increaseStep={increaseStep} />
        }
        {
          step === 2 && <StepThree userData={userData} />
        }

      </div>
    </div>
  );
}

export default App;
