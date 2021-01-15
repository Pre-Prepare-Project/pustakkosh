import React, {Component} from 'react';
import {Layout, Typography, Button} from "antd";
import {ReadOutlined} from "@ant-design/icons"
import { List, Card } from 'antd';

const data = [
    {
        title: 'Engineering Books',
    },
    {
        title: 'Medical Books',
    },
    {
        title: 'School Books',
    },
    {
        title: 'UPSC Materials',
    },
]
const {Content} = Layout
const {Title} = Typography

class Promotion extends Component {
    render() {
        return (
            <div>
                <Content className={'promo-content'}>
                    <Title className={'promotion-l1'}>DONATE BOOK</Title>
                    <Title level={3} className={'promotion-l2'}>Share the gift of knowledge.</Title>
                    <Title level={5} className={'promotion-l3'}>There are more than 7 crore students in India and 30% of
                        them does not have access to quality education. It's time to take the action and donate your
                        used books to help these unprivileged kids. Books you throw in garbage or sell to raddiwala can
                        be easily donated to these kids which will help in shaping their future.</Title>
                    <Title className={'promotion-l4'} level={2}> What we accept.</Title>
                    <Content className={'button-content'}>
                    <Button type="primary" shape="round" color={"red"}>Donate Near You</Button>
                    <Button type="primary" shape="round">Donate Books</Button>
                    <Button type="primary" shape="round">Register as Donation Centre</Button>
                    </Content>
                    <List
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <ReadOutlined />
                                <br/>
                                {item.title}
                            </List.Item>
                        )}
                    />
                </Content>
            </div>
        );
    }
}

export default Promotion;