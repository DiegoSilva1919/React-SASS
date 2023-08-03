import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjectContainer from './ProjectContainer'
import SkillsContainer from './SkillsContainer'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <SkillsContainer />
      <ProjectContainer />
    </main>
  )
}

export default MainContent
