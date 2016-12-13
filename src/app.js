'use strict';

/*
 * Module dependencies
 */

 import React from 'react';
 import ReactDOM from 'react-dom';

 class FirstComponent extends React.Component {
 	render() {
 		return <h1>Hello {this.props.name}!</h1>
 	}
 }

 ReactDOM.render(<FirstComponent name="Iván"/>, document.getElementById('container'));