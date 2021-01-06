import Email from "../../components/Email/Email"
import Phone from "../../components/Phone/Phone"
import "./StepOne.sass"

const StepOne = ({ change, setChange }) => {

  const changeTap = () => {
    setChange(!change)
  }
  return (
    <div className="stepone">
      <select className="stepone__select text" name="select">
        <option value="value1" selected>Español</option>
        <option value="value2">Ingles</option>
        <option value="value3">Portugues</option>
      </select>
      <div className="stepone__container">
        <button className={change ? "stepone__choice active" : "stepone__choice"} onClick={changeTap}>Teléfono</button>
        <button className={!change ? "stepone__choice active" : "stepone__choice"} onClick={changeTap}>Correo</button>

        <form className="stepone__form">
          {
            !change ? <Email /> : <Phone />
          }
        </form>
      </div>
    </div>
  )
}

export default StepOne