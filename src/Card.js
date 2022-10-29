import React from "react"
export default function Card() {
    return (
        <div>
            <div className="cardBase">
                <div className="cardContainer">
                    <div class="profile-image-div">
                    </div>
                    <div className="white">
                        <h3>Damilare Joshua</h3>
                        <p className="orange">Software Engineer</p>
                        <p id="web"><a href="https://damilareinfo.web.app">damilareinfo.web.app</a></p>
                        <div className="btn-row row">
                            <a href="mailto:oluwadamilareidowujoshua@gmail.com" className="col">
                                <button className="bg-white">
                                    <a className="fa fa-btn fa-envelope"></a>
                                    Email
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/oluwadamilare-joshua-b90068149/" className="col">
                                <button className="bg-blue">
                                    <a className="fab fa-btn fa-linkedin white"></a>
                                    LinkedIn
                                </button>
                            </a>
                        </div>
                        <div className="des container">
                            <h5>About</h5>
                            <p>  A passionate and skilled Software Engineer, problem solver, educator, critical thinker with great leadership skills. There is no limit to what I can do but simply say am a cross platform front end developer with some basic knowledge of backend.</p>
                            <h5>Interests</h5>
                            <p> Research, Robotics, Mathematics, Physics, Movie, Travel, Swimming, Board Games, Competitive Programming etc. </p>
                        </div>
                    </div>
                    <div className="profile-bottom">
                        <a href="https://twitter.com/Idowu1413" class="fab fa-twitter-square"></a>
                        <a href="https://web.facebook.com/OluwadamilareIdowuJoshua/photos_by" class="fab fa-facebook-square"></a>
                        <a href="https://www.instagram.com/soft_doch/" class="fab fa-instagram-square"></a>
                        <a href="https://github.com/brainiac001" class="fab fa-github-square"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}