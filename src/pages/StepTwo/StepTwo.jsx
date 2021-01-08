import "./StepTwo.sass"

const StepTwo = ({ increaseStep }) => {

  const handlerSubmit = (e) => {
    e.preventDefault()

    increaseStep()
  }
  return (
    <div className="steptwo">
      <h2 className="steptwo__title">Verifica tu correo electrónico</h2>
      <p className="steptwo__text">Ingresa el codigo enviado a correo@mail.com</p>
      <div className="steptwo__container">
        <form className="steptwo__form" onClick={handlerSubmit} >
          <input className="steptwo__form_input" type="tel" name="phone" id="phone" placeholder="Número de teléfono" />
          <input className="steptwo__form_btn inactive" type="submit" value="Siguiente" />
        </form>
        <p className="steptwo__resend-text">¿No has recibido to código de confirmación?</p>
        <button className="steptwo__resend-btn">Volver a enviar código</button>
      </div>
    </div>
  )
}

export default StepTwo