import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() {
        return (
            <main className="about_box">
                <div className="title_box">
                    <h1 className="about_title">
                        About Me
                    </h1>
                </div>

                <div className="about_text_box">
                    <p className="about_text">
                        I am a Front-end Developer <br/>
                        who loves the appearance <br/>
                        and simplicity of web pages <br/>
                        and works towards achieving <br/>
                        this awesomeness using my <br/>
                        acquired skillset. I also posses <br/>
                        an unquenchable zeal to learn <br/>
                        new skills
                    </p>
                </div>
            </main>
        );
    }
}

export default About;