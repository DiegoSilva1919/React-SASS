import { FaLinkedin, FaGithub } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedin /> },
  { name: 'github', icon: <FaGithub /> }
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((networks) => (
        <a
          href="#"
          className="social-btn"
          id={networks.name}
          key={networks.name}
        >
          {networks.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks
