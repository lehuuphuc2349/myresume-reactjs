import React from 'react'
import '../../App.css';
import Intro from '../Intro';
import About from './About';
import Resume from './Resume';
function Home() {
    return (
        <>
            <Intro/>            
            <About/>
            <Resume/>
        </>
    )
}

export default Home
