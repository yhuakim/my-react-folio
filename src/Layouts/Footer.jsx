 import React, { Component } from 'react';

 class Footer extends Component {
     state = {  }
     render() {
         return (
             <footer className="footer_box">
                 
                 <div className="copyright_box">
                    <div className="copyright">
                        &copy;<span>2020.All Rights reserved <hr/> </span>
                    </div>
                    <div className="designer">
                        <span>designed 
                            <span className="and">&</span> <br/> 
                            developed by
                            <i className="name"> Jilis</i>
                        </span>
                    </div>
                 </div>
             </footer>
         );
     }
 }
 
 export default Footer;