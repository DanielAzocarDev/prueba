import { useState } from 'react'

import "./StepOne.sass"

const StepOne = ({ increaseStep, userData }) => {

  const [tap, setTap] = useState(false)

  const [data, setData] = useState({
    phone: "",
    email: ""
  })

  const [errors, setErrors] = useState({})

  const validate = (data) => {

    const errors = {}
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    !data.email && (errors.email = "Este campo es obligatorio")

    !data.email.match(re) && data.email ? (errors.email = "Correo no valido") : (errors.email = "Este campo es obligatorio")

    !Number(data.phone) && data.phone !== "" ? (errors.phone = "Tiene que ser number no letras") : (errors.phone = "Este campo es obligatorio")

    return errors
  }

  const changeTap = () => {
    setTap(!tap)
  }

  const handlerChange = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    const result = validate(data)

    Object.keys(result) && setErrors({ ...result })

    // if (Object.keys(result)) {
    //   setErrors({ ...result })
    // }
    // userData(data)
    console.log(data)


    // increaseStep()


  }

  return (
    <div className="stepone">
      <select className="stepone__select text" name="select">
        <option value="value1" defaultValue>Español</option>
        <option value="value2">Ingles</option>
        <option value="value3">Portugues</option>
      </select>
      <div className="stepone__container">
        <button className={tap ? "stepone__choice active" : "stepone__choice"} onClick={changeTap}>Teléfono</button>
        <button className={!tap ? "stepone__choice active" : "stepone__choice"} onClick={changeTap}>Correo</button>

        <form className="stepone__form" >
          {
            // !tap ? <Email /> : <Phone />
            !tap ? (
              <div className="stepone__form-control">

                <input className={!errors.email ? "stepone__form_input" : "stepone__form_input error"} type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handlerChange} value={data.email} />

                {errors.email && <span className="stepone__form-error">{errors.email}</span>}
                {/* <span className="stepone__form-error">Error field</span> */}

                <p className="stepone__text">Recibirás un codigo de verificación a esta dirección de correo electrónico</p>

                <input className="stepone__form_btn inactive" type="submit" value="Siguiente" onClick={handlerSubmit} />

              </div>
            ) : (
                <div className="stepone__form-control">

                  <input className={!errors.phone ? "stepone__form_input" : "stepone__form_input error"} type="tel" name="phone" id="phone" placeholder="Número de teléfono" onChange={handlerChange} value={data.phone} />

                  {errors.phone && <span className="stepone__form-error">{errors.phone}</span>}

                  <p className="stepone__text">Recibirás un codigo via SMS para confirmar tu número en cualquier momento</p>

                  <input className="stepone__form_btn inactive" type="submit" value="Siguiente" onClick={handlerSubmit} />

                </div>
              )

          }
          {/* <input className="stepone__form_btn inactive" type="submit" value="Siguiente" onClick={handlerSubmit} /> */}
        </form>
      </div>
    </div>
  )
}

export default StepOne