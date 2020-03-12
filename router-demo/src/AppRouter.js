import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from "./Pages/Index";
import Video from "./Pages/Video";
import Workplace from "./Pages/Workplace";
import './index.css';

class AppRouter extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className="mainDiv">

						<div className="leftNav">
							<ul>
								<li><Link to="/">首页</Link></li>
								<li><Link to="/video/">视频教程</Link></li>
								<li><Link to="/workplace/">职场技能</Link></li>
							</ul>
						</div>

						<div className="rightMain">
							<Route path="/" exact component={Index}/>
							<Route path="/video/" component={Video}/>
							<Route path="/workplace/" component={Workplace}/>
						</div>

					</div>
				</Router>
			</div>
		);
	}
}

export default AppRouter;
