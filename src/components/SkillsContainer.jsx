import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
  DiGit
} from 'react-icons/di'

import '../styles/components/skillscontainer.sass'

const skills = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'node', name: 'NODE', icon: <DiNodejsSmall /> },
  { id: 'react', name: 'REACT', icon: <DiReact /> },
  { id: 'bootstrap', name: 'BootsTrap', icon: <DiBootstrap /> },
  { id: 'git', name: 'Git', icon: <DiGit /> }
]

const SkillsContainer = () => {
  return (
    <section className="skills">
      <h2>Tecnologias</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skills-card" id={skill.id} key={skill.id}>
            {skill.icon}
            <div className="skills-info">
              <h3>{skill.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsContainer
