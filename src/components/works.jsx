import React, { Component } from 'react';
//import bg1 from '../assets/bg1.jpg';
import CardItem from '../sub-components/card';
import {CardDeck, Container} from 'reactstrap'

class Works extends Component {
    state = {  }
    render() {
        return (
            <Container>
                <div className="container pl-5 pr-5 pb-5">
                    <div className="works_box_title text-center">
                        <h1 className="work_title">
                            My Works
                        </h1>
                    </div>
                    <CardDeck>
                        <CardItem />
                        <CardItem/>
                        <CardItem/>
                    </CardDeck>
                </div>
            </Container>
           /*  <main className="works_box">
                <div className="works_box_title">
                    <h1 className="work_title">
                        My Works
                    </h1>
                </div>

                <div className="works">
                    <div className="work_01">
                        <div className="image_box">
                            <img src={bg1} alt="first Work"/>
                        </div>
                        <div className="work_details">
                            <h4 className="work_name">
                                Lorem, ipsum dolor.
                            </h4>
                            <p className="details">
                                Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro repellendus quisquam <br/> 
                            </p>
                        </div>
                        <div className="more_box">
                            <button>
                                view
                            </button>
                        </div>
                    </div>
                    <div className="work_02">
                        <div className="image_box">
                            <img src={bg1} alt="first Work"/>
                        </div>
                        <div className="work_details">
                            <h4 className="work_name">
                                Lorem, ipsum dolor.
                            </h4>
                            <p className="details">
                                Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro repellendus quisquam 
                            </p>
                        </div>
                        <div className="more_box">
                            <button>
                                view
                            </button>
                        </div>
                    </div>
                    <div className="work_03">
                        <div className="image_box">
                            <img src={bg1} alt="first Work"/>
                        </div>
                        <div className="work_details">
                            <h4 className="work_name">
                                Lorem, ipsum dolor.
                            </h4>
                            <p className="details">
                                Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro repellendus quisquam 
                            </p>
                        </div>
                        <div className="more_box">
                            <button>
                                view
                            </button>
                        </div>
                    </div>
                </div>
            </main> */
        );
    }
}

export default Works;