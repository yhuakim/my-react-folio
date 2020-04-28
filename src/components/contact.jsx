import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import {Input, 
        Form, 
        Label, 
        Button, 
        NavLink, 
        Nav,
        Row,
        Col
    } from 'reactstrap';

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

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
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success!, Thanks for reaching out..."))
            .catch(error => alert(error));
    
          e.preventDefault();
           
          this.setState({
                name: "",
                email: "",
                message: ""
            });
    }

    render() {
        return (
            <main className="contact_box container text-center">
                <div className="contact_title_box">
                    <h1 className="contact_title">
                        Contact Me
                    </h1>
                </div>
                <Row>
                    <Col sm="12" xl={{ size: 8, offset: 2 }} md={{size: 8, offset: 2}}>
                        <Form
                        action="POST" 
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                        className="border border-info p-4 jumbotron shadow-sm mb-5">
                            <input type="hidden" name="contact" value="contact" />
                            <div>
                                <Label md={10} 
                                    xl={9}
                                    htmlFor="name">
                                    <h3 className="Name-title float-left text-muted">
                                        Name
                                    </h3>
                                    <Input 
                                    type="text"
                                    placeholder="Enter your name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange}
                                    />
                                </Label>

                                <Label 
                                xl={9}
                                md={10} htmlFor="email">
                                    <h3 className="email-title float-left text-muted">
                                        Email
                                    </h3>
                                    <Input 
                                    type="email" 
                                    name="email" 
                                    
                                    id="email" 
                                    placeholder="Enter your Email" 
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    />
                                </Label>
                            </div>

                            <div>
                                <Label md={10} 
                                xl={9}
                                htmlFor="message">
                                    <h3 className="message-title float-left text-muted">
                                        Message
                                    </h3>
                                    <Input
                                    name="message" 
                                    id="message"
                                    tag="textarea" 
                                    /* cols="30" 
                                    rows="10" */
                                    placeholder="Enter your text here"
                                    value={this.state.message}
                                    onChange={this.handleMessageChange}/>
                                </Label>
                            </div>

                            <div>
                                <Button 
                                type="submit"
                                className="btn btn-sm btn-success text-white">
                                    Send a message
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

                <Nav className="social_link_box d-flex mt-3">
                     <NavLink href="https://www.github.com/yhuakim" className="social_link">
                        <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                     </NavLink>
                     <NavLink href="https://www.twitter.com/yhuakim" className="social_link">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                     </NavLink>
                     <NavLink href="https://www.medium.com/JoachimArinze" className="social_link ">
                        <FontAwesomeIcon icon={faMedium} size="2x" />
                     </NavLink>
                 </Nav>
            </main>
        );
    }
}

export default Contact;