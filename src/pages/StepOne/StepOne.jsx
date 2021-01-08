import { useState } from 'react'


import Email from "../../components/Email/Email"
import Phone from "../../components/Phone/Phone"

import "./StepOne.sass"

const StepOne = ({ increaseStep }) => {

  const [tap, setTap] = useState(false)

  const changeTap = () => {
    setTap(!tap)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    increaseStep()
  }

  return (
    <div className="stepone">
      <select className="stepone__select text" name="select">
        <option value="value1" selected>Español</option>
        <option value="value2">Ingles</option>
        <option value="value3">Portugues</option>
      </select>
      <div className="stepone__container">
        <button className={tap ? "stepone__choice active" : "stepone__choice"} onClick={changeTap}>Teléfono</button>
        <button className={!tap ? "stepone__choice active" : "stepone__choice"} onClick={changeTap}>Correo</button>

        <form className="stepone__form" onClick={handlerSubmit} >
          {
            !tap ? <Email /> : <Phone />
          }
          <input className="stepone__form_btn inactive" type="submit" value="Siguiente" />
        </form>
      </div>
    </div>
  )
}

export default StepOne