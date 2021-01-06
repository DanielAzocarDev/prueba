const Email = () => {
  return (
    <>
      <input className="stepone__form_input" type="email" name="email" id="email" placeholder="Correo electrónico" />
      <p className="text">Recibirás un codigo de verificación a esta dirección de correo electrónico</p>
      <input className="stepone__form_btn inactive" type="submit" value="Siguiente" />
    </>
  )
}

export default Email