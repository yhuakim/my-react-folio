import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return(
            <main className="home_box text-center" id="home">
                <div className="introduction_box">
                     <h1 className="specialization">
                    Graphics Designer / <br/>
                    Front-End Developer
                    </h1>
                    <p className="brief-intro">
                        Hello, I'm <span className="name">Joachim.</span> <br/>
                        I'm ethusiastic about <br/> 
                        the web's <br/> 
                        Front-End development <br/>
                        and creative designs...
                    </p>
                </div>

                <div className="social_link_box">
                    <a href="facebook.com/JoachimArinze" className="facebook-link">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="github.com/yhuakim" className="github-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="twitter.com/@yhuakim" className="twitter-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </main>
        );
    }
}