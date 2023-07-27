import React from 'react'

function About() {
  return (
    <div className="container">
    <div className="card">
        <img src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" height={500} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">React Learning</h5>
            <p className="card-text">Hi Man this just learning phase of React .</p>
            <a href="/About" className="btn btn-primary">.....</a>
        </div>
    </div>
    </div>
  )
}

export default About
