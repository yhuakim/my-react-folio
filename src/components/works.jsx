import React, { Component } from 'react';
import bg1 from '../assets/bg1.jpg';

class Works extends Component {
    state = {  }
    render() {
        return (
            <main className="works_box">
                <div className="works_box_title">
                    <h1 className="work_title">
                        My Works {/* <hr/> */}
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
                                Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro repellendus quisquam <br/> deserunt totam, sed nam expedita error <br/> quidem fugiat distinctio, cumque omnis a, <br/> sequi ut voluptas et quibusdam unde esse.
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
                                Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro repellendus quisquam <br/> deserunt totam, sed nam expedita error <br/> quidem fugiat distinctio, cumque omnis a, <br/> sequi ut voluptas et quibusdam unde esse.
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
                                Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Porro repellendus quisquam <br/> deserunt totam, sed nam expedita error <br/> quidem fugiat distinctio, cumque omnis a, <br/> sequi ut voluptas et quibusdam unde esse.
                            </p>
                        </div>
                        <div className="more_box">
                            <button>
                                view
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Works;