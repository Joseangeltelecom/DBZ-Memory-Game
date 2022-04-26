import React from "react"

function Navbar({ currentScore, highScore, children }) {
  return (
    <header className="container-fluid fixed-top">
      <div className="row">
        <h1 className="col-sm-8">Dragon Ball Z - Memory Game</h1>
        <nav className="col-sm-4">
          <p>
            Score: <span>{currentScore}</span>
          </p>
          <p>
            Top Score: <span>{highScore}</span>
          </p>
          {children}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
