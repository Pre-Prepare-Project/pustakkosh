import React, {Component} from 'react';
import {Layout, Row, Col, Divider,List} from "antd";
import FacebookOutlined from "@ant-design/icons/FacebookOutlined";
import InstagramOutlined from "@ant-design/icons/InstagramOutlined";
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined";
import TwitterOutlined from "@ant-design/icons/TwitterOutlined";
import MediumOutlined from "@ant-design/icons/MediumOutlined";
import WhatsAppOutlined from "@ant-design/icons/WhatsAppOutlined";
import {Link} from "react-router-dom";
const {Footer} = Layout

class AppFooter extends Component {
    render() {
        const Categories = [
            {name: "Fantasy", slug: "Fantasy"},
            {name: "Adventure", slug: "Adventure"},
            {name: "Romance", slug: "Romance"},
            {name: "Contemporary", slug: "Contemporary"},
            {name: "Dystopian", slug: "Dystopian"},
            {name: "Mystery", slug: "Mystery"},
            {name: "Horror", slug: "Horror"},
            {name: "Dystopian", slug: "Dystopian"},
            {name: "Thriller", slug: "Thriller"},
        ]

        const socialList = [{
            title: "Facebook",
            icon: <FacebookOutlined style={{fontSize: 32}}/>,
            link:"link"
        }, {
            title: "Instagram",
            icon: <InstagramOutlined style={{fontSize: 32}}/>,
            link: "link"
        }, {
            title: "Twitter",
            icon: <TwitterOutlined style={{fontSize: 32}}/>,
            link: "link"
        }, {
            title: "WhatsApp",
            icon: <WhatsAppOutlined style={{fontSize: 32}}/>,
            link: "link"
        }]
        return (
            <div className={'footer'}>
                <div className="main-container">
                    <Row gutter={[16, 32]}>
                        <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <h3 style={{fontSize: '1.5em'}}>Categories</h3>
                                    <ul className={'no-style-list no-padding footer-list'}>
                                        {Categories.map(item => <>
                                                <li style={{display: "inline"}}>
                                                    <a
                                                        href={`${item.slug}`}>{item.name}</a></li>
                                                <Divider type={'vertical'}/>
                                            </>
                                        )}
                                    </ul>
                                </Col>
                                <Col span={24}>
                                    <h3 style={{fontSize: '1.5em'}}>Language</h3>
                                    <ul className={'no-style-list no-padding footer-list'}>
                                        {Categories.map(item => <>
                                                <li style={{display: "inline"}}>
                                                    <a
                                                        href={`${item.slug}`}>{item.name}</a></li>
                                                <Divider type={'vertical'}/>
                                            </>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                            <img src="https://www.pikpng.com/pngl/m/11-115595_library-png-online-bookstore-clipart.png" alt="Nitish Sharma"
                                 style={{paddingBottom: '8px'}}
                                 className="img-responsive mb-3"/>


                            <p className="text-small text-light mb-5">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <h3 className="text-bold">Connect with Us</h3>
                            <List dataSource={socialList} grid={{ column: socialList.length}}
                                  renderItem={item => (
                                      <List.Item>
                                          <Link to={item.link} target="_blank" rel="noreferrer"
                                                >
                                              {item.icon}
                                          </Link>
                                      </List.Item>
                                  )}/>
                        </Col>
                    </Row>
                    <Row align={'middle'}>
                        <Col span={24}>
                            <Footer style={{textAlign: 'center', background:'none'}}>PustKosh ©2021 Created by Plutonic Team</Footer>
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default AppFooter;
