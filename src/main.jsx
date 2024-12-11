import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// render
// re-render state or props

// Component - (JSX, JS, CSS)

const Header = () => {
 console.log();
 const text  = <h2>text</h2>
 return <header className='header'> Header content {text} {HomePage} </header>
}

const HomePage = () => {
  return <div className='HomePage'> Home content  </div>
}

const Footer = () => {
  return <footer>
    <h1 className='red-text'>
      footer content
    </h1>
    <button className='btn-black'>Okey</button>
    </footer>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <HomePage/>
    <Footer/>
     {/* <App /> */}
  </StrictMode>,
)

