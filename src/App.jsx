import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ResumeGenerator from './pages/ResumeGenerator'
import Form from './pages/Form'
import History from './pages/History'
import PNF from './pages/PNF'
import Header from './component/Header'
import Footer from './component/Footer'
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='resumeGenerator' element={<ResumeGenerator />} />
        <Route path='form' element={<Form />} />
        <Route path='history' element={<History />} />
        <Route path='/*' element={<PNF />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
