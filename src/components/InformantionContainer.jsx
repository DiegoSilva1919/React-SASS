import '../styles/components/informantioncontainer.sass'

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

const InformantionContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(81)99194-3001</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>fagundesdiego2015bolcombr@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Escada - PE</p>
        </div>
      </div>
    </section>
  )
}

export default InformantionContainer
