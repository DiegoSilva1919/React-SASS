import MainContent from './components/MainContent'
import SideBar from './components/SideBar'
import '../src/styles/components/app.sass'

function App() {
  return (
    <div id="portfolio">
      <h1>Diego Fagundes</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
