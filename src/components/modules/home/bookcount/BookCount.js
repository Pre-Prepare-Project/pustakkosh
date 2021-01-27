import React, {Component} from 'react';
import {Card, Row, Col, List, Avatar} from "antd";

const style = {background: '#0092ff', padding: '8px 0', alignContent: "center"};

class BookCount extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#757474"}}>
                <div className={'main-container'}
                     style={{paddingTop: 10, paddingBottom: 10}}>
                    <Row gutter={[32, 24]} justify={'center'}>
                        <Col xl={8} md={8} sm={12} xs={24} lg={8} xxl={8}>
                            <Card hoverable={true} bodyStyle={{align: 'center'}} style={{borderRadius:9}}>
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{"Value"}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            </Card>
                        </Col>
                        <Col xl={8} md={8} sm={12} xs={24} lg={8} xxl={8}>
                            <Card>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                        <Col xl={8} md={8} sm={12} xs={24} lg={8} xxl={8}>
                            <Card>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BookCount;