import './Header.sass';

const Header = ({ step, decreaseStep }) => {
  return (
    <div className="header" >
      <p className="header__text" onClick={decreaseStep}>{"<Atras"}</p>
      <h3 className="header__title">Registro</h3>
      <p className="header__text header__text--steps">{`${step + 1}/3`}</p>
    </div>
  )
}

export default Header