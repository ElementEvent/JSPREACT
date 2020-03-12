import {Avatar, Divider} from 'antd'
import '../public/static/css/component/author.css'

const Author = () => {
	return(
		<div className="author-div comm-box">
			<div>
				<Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"/>
				<div className="author-introduction">
					这里存放的是个人介绍这里存放的是个人介绍
					<Divider>社交账号</Divider>
					<Avatar size={28} src="http://blogimages.jspang.com/blogtouxiang1.jpg" className="account"/>
					<Avatar size={28} src="http://blogimages.jspang.com/blogtouxiang1.jpg" className="account"/>
					<Avatar size={28} src="http://blogimages.jspang.com/blogtouxiang1.jpg" className="account"/>
				</div>
			</div>
		</div>
	)
};

export default Author;
