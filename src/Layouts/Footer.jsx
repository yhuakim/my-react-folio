 import React, { Component } from 'react';
 import {Badge} from 'reactstrap'

 class Footer extends Component {
     state = {  }
     render() {
         return (
             <footer className="footer_box ">
                 <div className="copyright_box">
                    <div className="copyright mb-3">
                        &copy;<span>Copyright 2020. All Rights reserved</span>
                    </div>
                    <div className="designer p-1">
                        <Badge color="">created by</Badge>
                        <Badge color="primary">Jilis</Badge>
                    </div>
                 </div>
             </footer>
         );
     }
 }
 
 export default Footer;