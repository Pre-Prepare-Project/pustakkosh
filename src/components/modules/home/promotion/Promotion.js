import React, {Component} from 'react';
import {Layout, Typography, Button, Space, Row, Col} from "antd";
import {ReadOutlined} from "@ant-design/icons"
import {List, Card} from 'antd';
import {Link} from "react-router-dom";

const data = [
    {
        title: 'Engineering Books',
        icon: <ReadOutlined style={{color: 'white', fontSize: 40}}/>
    },
    {
        title: 'Medical Books',
        icon: <ReadOutlined style={{color: 'white', fontSize: 40}}/>
    },
    {
        title: 'School Books',
        icon: <ReadOutlined style={{color: 'white', fontSize: 40}}/>
    },
    {
        title: 'UPSC Materials',
        icon: <ReadOutlined style={{color: 'white', fontSize: 40}}/>
    },
]
const {Title, Paragraph} = Typography

class Promotion extends Component {
    render() {
        return (
            <div className={'promo-content'}>
                <div className="main-container">
                    <Row justify={'center'} style={{paddingTop: 20, paddingBottom: 20}}>
                        <Col span={24}>
                            <Title>DONATE BOOK</Title>
                            <Title level={3}>Share the gift of knowledge.</Title>
                            <Title level={5}>There are more than 7 crore students in India and 30% of
                                them does not have access to quality education. It's time to take the action and donate
                                your
                                used books to help these unprivileged kids. Books you throw in garbage or sell to
                                raddiwala
                                can
                                be easily donated to these kids which will help in shaping their future.</Title>

                        </Col>
                    </Row>
                    <Row justify={'center'} style={{paddingTop: 20, paddingBottom: 20}}>
                        <Col>
                            <Title level={2}> What we accept.</Title>
                            <Button type="primary" shape="round" size={'large'}>Donate Near You</Button>
                            <Button type="primary" shape="round" size={'large'}>Donate Books</Button>
                            <Button type="primary" shape="round" size={'large'}>Register as Donation Centre</Button>

                        </Col>
                    </Row>
                    <Row justify={'center'} style={{paddingTop: 20, paddingBottom: 20}}>
                        <Col span={24}>
                            <List
                                size={'large'}
                                grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 4,
                                    xxl: 3,
                                }}
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Link to={'link'} target="_blank" rel="noreferrer">
                                            {item.icon}
                                            <List.Item.Meta title={<Title level={2}>{item.title}</Title>}/>
                                        </Link>
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Promotion;
