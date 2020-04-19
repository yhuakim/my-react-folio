import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    state = {  
        name: "",
        email: "",
        message: ""
    }

    handleEmailChange=(e)=> {
        this.setState({
            email: e.target.value
        });
    }

    handleNameChange=(e)=> {
        this.setState({
            name: e.target.value
        });
    }

    handleMessageChange=(e)=> {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.value="";
    }

    render() {
        return (
            <main className="contact_box">
                <div className="contact_title_box">
                    <h1 className="contact_title">
                        Contact Me
                    </h1>
                </div>

                <form 
                action="POST" 
                data-netlify
                onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="name">
                            <h3 className="Name-title">
                                Name:
                            </h3>
                            <input 
                            type="text"
                            placeholder="Enter your name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            />
                        </label>

                        <label htmlFor="email">
                            <h3 className="email-title">
                                Email:
                            </h3>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter your Email" 
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                             />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="message">
                            <h3 className="message-title">
                                Message:
                            </h3>
                            <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10"
                            placeholder="Enter your text here"
                            value={this.state.message}
                            onChange={this.handleMessageChange}/>
                        </label>
                    </div>

                    <div>
                        <button 
                        type="submit">
                            Send a message
                        </button>
                    </div>
                </form>

                <div className="social_link_box">
                     <a href="https://www.github.com/yhuakim" className="social_link">
                        <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                        <div className="github">Github</div>
                     </a>
                     <a href="https://www.twitter.com/yhuakim" className="social_link">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                        <div className="twitter">Twitter</div>
                     </a>
                     <a href="https://www.medium.com/JoachimArinze" target="_blank" className="social_link">
                        <FontAwesomeIcon icon={faMedium} size="2x" />
                        <div className="medium">Medium</div>
                     </a>
                 </div>
            </main>
        );
    }
}

export default Contact;