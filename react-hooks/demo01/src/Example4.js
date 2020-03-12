import React, {Component} from 'react';

class Example extends Component {

	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
		this.addCount = this.addCount.bind(this)
	}

	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.addCount}>click</button>
			</div>
		);
	}

	addCount(){
		let count = this.state.count + 1;
		this.setState({count: count})
	}

}

export default Example;
