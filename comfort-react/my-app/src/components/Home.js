import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>  
            <div className="video-container img-responsive">
                <video className="img-responsive" controls="" autoPlay loop>
                    <source src="video/herovid.mp4" />
                </video>
            </div>
            <div className="hero-intro">
                <h1>Find ComFort That Fits Your Life</h1>
                <Link to="/Products" className="hero-button">Get Started</Link>
            </div>
        </>
    )
}

export default Home