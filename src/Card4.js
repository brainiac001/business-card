import React from "react"
import logo from './images/profile image.jpeg';

export default function Card4() {
    return (
        <div>
            <div className="row container">
                <div className="cardBase">
                    <div className="cardContainer">
                        <img src={logo} className="profile-pic" alt="profile pic"></img>
                        <div className="txt-white">
                            <h2>Damilare Joshua</h2>
                            <p className="txt-orange">Software Engineer</p>
                            <p><small>damilareinfo.web.app</small></p>
                            <div className="btn-row">
                                <button className="btn-white">
                                <a className="fa fa-btn fa-twitter"></a>
                                    Email
                                </button>

                                <button className="btn-blue">
                                <a className="fa fa-btn fa-twitter"></a>
                                    LinkedIn
                                </button>
                            </div>
                            <div className="des container">
                                <h4>
                                    About
                                </h4>
                                <p>
                                    <small>  A passionate and skilled Software Engineer, problem solver, educator, critical thinker with great leadership skills. Am a talented and passionate Android Engineer with over 3 years of professional experience.
                                    </small>
                                </p>
                                <h4>
                                    Interests
                                </h4>
                                <p>
                                    <small> Research, Robotics, Mathematics, Physics, Movie, Travel, Swimming, board games, Competitive Programming etc.
                                    </small>
                                </p>
                            </div>

                        </div>

                        <div className="profile-bottom">
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-github"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}