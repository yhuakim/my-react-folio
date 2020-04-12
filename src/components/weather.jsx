import React, { Component } from 'react';
import "../styles/main.css"

const api = {
    key: "01e3363af537e5df428709d7c4efcc27",
    base: "https://api.openweathermap.org/data/2.5/"
}

class Weather extends Component {

    state ={
        weather: [],
        temp: [],
        name:[],
        abbr: [],
        region: 'Nigeria, NG',
    }

    componentDidMount(){

        fetch(`${api.base}weather?q=${this.state.region}&appid=${api.key}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    weather: res.weather[0],
                    temp: res.main.temp-273,
                    name: res.name,
                    abbr: res.sys.country
                });

            });
            this.setState({
                region:''
            })
    }

    handleKey=(e) => {

        if (e.key === 'Enter') {
            fetch(`${api.base}weather?q=${this.state.region}&appid=${api.key}`)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        weather: res.weather[0],
                        temp: res.main.temp-273,
                        name: res.name,
                        abbr: res.sys.country
                    });
                   
                });
            this.setState({
                region:''
            });
    }
}

    handleChange=(e)=> {
        console.log(e.target.value);
        this.setState({
            region: e.target.value
        });
    }


    render() {
        
        const dateBuilder = (d) => {
            let months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            let days = [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`
        }
        return (
            <main className="main">
                <div className="main-box">
                    <input type="text"
                    className="search-bar"
                    placeholder="search..."
                    value={this.state.region}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKey}
                    />
                </div>
                <div className="location-box">
                    <div className="location">{this.state.name},{this.state.abbr}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(this.state.temp)}°c
                    </div>
                    <div className="weather">{this.state.weather.main} <br/>{this.state.weather.description}</div>
                </div>
            </main>
        );
    }
}

export default Weather;