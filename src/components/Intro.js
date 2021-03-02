import React from 'react'
import './Intro.css'
function Intro() {
    return (
        <div className='intro'>
            <div className="intro-container">
                <img src="src\components\images\banner-cv.jpg" alt=""/>
                <div className="infomation">
                    <h1>I'm LE HUU PHUC</h1>
                    <p>Hello, I am Student Programming and this is a my self-introduction website</p>
                </div>
                <div className="social-media">
                        <ul className="menu-social-media">
                            <li className="menu-social-items">
                                <a target='_blank' className='menu-social-links' href="https://www.facebook.com/huuphuc23499/"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="menu-social-items">
                                <a target='_blank' className='menu-social-links'href="https://github.com/lehuuphuc2349"><i class="fab fa-github"></i></a>
                            </li>
                            <li className="menu-social-items">
                                <a target='_blank' className='menu-social-links' href="https://twitter.com/StarkLe02469055"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li className="menu-social-items">
                               <a target='_blank' className='menu-social-links' href=""><i class="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Intro
