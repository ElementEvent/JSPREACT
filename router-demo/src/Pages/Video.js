import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from "./video/ReactPage";
import Flutter from "./video/Flutter";
import Vue from "./video/Vue";

class Video extends Component {
	render() {
		return (
			<div>

				<div className="topNav">
					<ul>
						<li>
							<Link to="/video/reactPage/">React教程</Link>
							<Link to="/video/flutter/">Flutter教程</Link>
							<Link to="/video/vue/">Vue教程</Link>
						</li>
					</ul>
				</div>

				<div className="videoContent">
					<div>
						<h3>视频教程</h3>
						<Route path="/video/reactPage/" component={ReactPage} />
						<Route path="/video/flutter/" component={Flutter} />
						<Route path="/video/vue/" component={Vue} />
					</div>
				</div>

			</div>
		);
	}
}

export default Video;
