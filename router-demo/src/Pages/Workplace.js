import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import Money from "./workplace/Money";
import Getup from "./workplace/Getup";

class Workplace extends Component {
	render() {
		return (
			<div>

				<div className="topNav">
					<ul>
						<li>
							<Link to="/workplace/money/">赚钱攻略</Link>
						</li>
						<li>
							<Link to="/workplace/getup/">早起秘籍</Link>
						</li>
					</ul>
				</div>

				<div className="videoContent">
					<h3>攻略</h3>
					<Route path="/workplace/money/" component={Money}/>
					<Route path="/workplace/getup/" component={Getup}/>
				</div>

			</div>
		);
	}
}

export default Workplace;
