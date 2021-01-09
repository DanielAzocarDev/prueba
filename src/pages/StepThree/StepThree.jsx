import { useState } from 'react'


import "./StepThree.sass"

const StepThree = ({ userData }) => {

  const [data, setData] = useState({
    username: "",
    pwd: "",
    pwd1: "",
  })

  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const errors = {}

    !data.username && (errors.username = "Este campo es obligatorio")
    !data.pwd && (errors.pwd = "Este campo es obligatorio")
    !data.pwd1 && (errors.pwd1 = "Este campo es obligatorio")

    data.pwd !== data.pwd1 && (errors.pwd1 = "Las contraseñas no coinciden")
    return errors
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

    userData(data)

    console.log("submit", data)

    setData({
      ...data,
      username: "",
      pwd: "",
      pwd1: "",
    })
  }
  return (
    <div className="stepthree">
      <h2 className="stepthree__title">Escoge un nombre de usuario y una contraseña</h2>
      <p className="stepthree__text">Puedes cambiarlo más tarde.</p>
      <div className="stepthree__container">
        <form className="stepthree__form" >
          <div className="stepthree__form-control">
            <input className={!errors.username ? "stepthree__form_input" : "stepthree__form_input error"} type="text" name="username" id="username" placeholder="Nombre de usuario" onChange={handlerChange} value={data.username} />
            {errors.username && <span className="stepthree__form-error">{errors.username}</span>}
          </div>
          <div className="stepthree__form-control">
            <input className={!errors.pwd ? "stepthree__form_input" : "stepthree__form_input error"} type="password" name="pwd" id="pwd" placeholder="Contraseña" onChange={handlerChange} value={data.pwd} />
            {errors.pwd && <span className="stepthree__form-error">{errors.pwd}</span>}
          </div>
          <div className="stepthree__form-control">
            <input className={!errors.pwd1 ? "stepthree__form_input" : "stepthree__form_input error"} type="password" name="pwd1" id="pwd1" placeholder="Confirma tu contraseña" onChange={handlerChange} value={data.pwd1} />
            {errors.pwd1 && <span className="stepthree__form-error">{errors.pwd1}</span>}
          </div>
          <input className={data.username === "" ? "stepthree__form_btn inactive" : "stepthree__form_btn"} type="submit" value="Finalizar" onClick={handlerSubmit} />
        </form>
      </div>
    </div>
  )
}

export default StepThree;