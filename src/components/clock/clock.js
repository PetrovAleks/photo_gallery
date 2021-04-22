// import React, { Component } from 'react';

// export default class Clock extends Component {
// 	state = {
// 		hours: new Date().getHours(),
// 		minute: new Date().getMinutes(),
// 	};
// 	intervalID = null;
// 	componentDidMount() {
// 		this.intervalID = setInterval(() => this.tick(), 60000);
// 	}
// 	componentWillUnmount() {
// 		clearInterval(this.intervalID);
// 	}
// 	tick = () => {
// 		this.setState({
// 			hours: new Date().getHours(),
// 			minute: new Date().getMinutes(),
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className="header-clock">{`${this.state.hours < 10 ? '0' : ''}${
// 				this.state.hours
// 			}:${this.state.minute < 10 ? '0' : ''}${this.state.minute}`}</div>
// 		);
// 	}
// }
