import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>  
            <div class="hero-intro">
                <h1>Find ComFort That Fits Your Life</h1>
                <Link to="/Products" class="hero-button">Get Started</Link>
            </div>
            <div className="video-container">
                <iframe 
                className="fullscreen-video-wrap" 
                src="https://www.youtube.com/embed/WgzR0cjU2CQ?autoplay=1&loop=1&playlist=WgzR0cjU2CQ&rel=0&showinfo=0&controls=0" 
                frameBorder="0" 
                showinfo="0" 
                controls="0" 
                autohide="1" 
                allow="autoplay" 
                allowFullScreen>
                </iframe>
            </div>
        </>
    )
}

export default Home