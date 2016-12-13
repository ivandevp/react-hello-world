'use strict';

/*
 * Module dependencies
 */

 import React from 'react';
 import ReactDOM from 'react-dom';

 class FirstComponent extends React.Component {
 	constructor(props) {
 		super(props);
 		this.state = { name: '...' };
 	}
 	changeName(e) {
 		let name = e.target.value;
 		this.setState({ name: name });
 	}
 	render() {
 		return <div>
 			<label>Enter your name:</label>
 			<input type="text" className="username" onChange={this.changeName.bind(this)}/>
 			<h1>Hello {this.state.name}!</h1>
 		</div>
 	}
 }

 ReactDOM.render(<FirstComponent />, document.getElementById('container'));