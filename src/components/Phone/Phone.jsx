const Phone = () => {
  return (
    <>
      <input className="stepone__form_input" type="tel" name="phone" id="phone" placeholder="Número de teléfono" />
      <p className="text">Recibirás un codigo via SMS para confirmar tu número en cualquier momento</p>
      <input className="stepone__form_btn inactive" type="submit" value="Siguiente" />
    </>
  )
}

export default Phone