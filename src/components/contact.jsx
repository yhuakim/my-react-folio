import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() {
        return (
            <main className="contact_box">
                <div className="contact_title_box">
                    <h1 className="contact_title">
                        Contact Me
                    </h1>
                </div>

                <div className="social_link_box">
                     <a href="github.com/yhuakim" className="social_link">
                     <i className="fab fa-github"></i> github
                     </a>
                     <a href="twitter.com/yhuakim" className="social_link">
                     <i className="fab fa-twitter"></i> twitter
                     </a>
                     <a href="medium.com/JoachimArinze" className="social_link">
                     <i className="fab fa-medium"></i> medium
                     </a>
                 </div>
            </main>
        );
    }
}

export default Contact;