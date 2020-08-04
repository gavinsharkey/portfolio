import React, { useState } from 'react';
import Reveal from 'react-reveal/Reveal'
import withReveal from 'react-reveal/withReveal'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const pages = [Home, About, Projects, Contact]
const pagesWithReveal = pages.map(Page => withReveal(Page, <Reveal effect='animate__fadeIn' effectOut="animate__fadeOut" />))

function App() {
  const [ page, setPage ] = useState(0)
  const [ lastX, setLastX ] = useState(0)

  const handlePageUp = () => {
    if (page < pages.length - 1) {
      setPage(page + 1)
    }
  }

  const handlePageDown = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const handleStartTouch = e => {
    setLastX(e.touches[0].clientX)
  }

  const handleSwipe = e => {
    const validSwipeLength = 50
    const currentX = e.changedTouches[0].clientX
    if ( (currentX < lastX) && (lastX - currentX > validSwipeLength) ) {
      handlePageUp()
    } else if ( (currentX > lastX) && (currentX - lastX > validSwipeLength) ) {
      handlePageDown()
    }
  }

  const CurrentPage = pagesWithReveal[page]
  return (
    <div className="main mx-3 mx-lg-5 mb-3">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div onClick={handlePageDown} className="bar">
          {'<'}
        </div>
        <div onTouchStart={handleStartTouch} onTouchEnd={handleSwipe} className="d-flex flex-column justify-content-center align-items-stretch">
          <CurrentPage /> 
        </div>
        <div onClick={handlePageUp} className="bar">
          {'>'}
        </div>
      </div>
    </div>
  );
}

export default App;
