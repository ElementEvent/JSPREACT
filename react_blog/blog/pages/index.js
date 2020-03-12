import Head from 'next/head'
import Header from "../components/Header"
import {Row, Col, List} from 'antd'
import {useState} from "react";
import Link from "next/link";
import {HomeOutlined} from '@ant-design/icons'
import '../public/static/css/pages/index.css'
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";
import {servicePath} from '../config/api/index'
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'

const Home = (list) => {
 /* console.log(list.data);*/
  const [articleList, setList] = useState(list.data);

  const renderer = new marked.Renderer();
  // marked 解析配置
  marked.setOptions({
    renderer: renderer,
    gfm: true, // 是否开启github样式渲染
    peantic: false,
    sanitize: false,
    tables: true, // 是否表格样式 类似github
    breaks: false, // 换行符
    smartLists: true, // 列表样式
    highlight: function(code){
      return hljs.highlightAuto(code).value
    }
  })
  //let html = marked(list.data.introduce);
  console.log(list.data);
  return (
    <div className="container">

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item=>(

              <List.Item>

                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: {id: item.id} }}>
                    <a>{ item.title }</a>
                  </Link>
                </div>

                <div className="list-icon">
                  <span>
                    <HomeOutlined />
                    { item.addTime }
                  </span>

                  <span>
                    <HomeOutlined />
                    { item.typeName }
                  </span>

                  <span>
                    <HomeOutlined />
                    { item.view_count }
                  </span>
                </div>

                <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}>
                </div>

              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
					<Advert/>
        </Col>
      </Row>

      <Footer/>

    </div>
  )

};

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve, reject)=>{
    axios(servicePath.getArticleList).then(res=>{
      //console.log('index.js', res.data);
      resolve(res.data);
    }).catch(err=>{
      reject(err);
    })
  });
  return await promise;
};

export default Home
