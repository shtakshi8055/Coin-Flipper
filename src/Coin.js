import React, { Component } from 'react'
import './App.css';

class Coin extends Component { 
	render() { 
		return ( 
			<div class='Coin'> 
				<img 
					style={{ width: '250px', height: '250px' }} 
					src={this.props.info.imgSrc} alt='coin'
				/> 
			</div> 
		) 
	} 
} 
export default Coin
