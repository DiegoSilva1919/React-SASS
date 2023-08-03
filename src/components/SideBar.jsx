import '../styles/components/sidebar.sass'
import Avatar from '../img/eu.jfif'
import InformantionContainer from './InformantionContainer'
import SocialNetworks from './SocialNetworks'

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="minha-img" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformantionContainer />
      <a href="" className="btn">
        Curriculo
      </a>
    </aside>
  )
}

export default SideBar
