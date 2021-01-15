import React from "react";
import {Button, Col, Result, Row, Image} from "antd";
import {Link} from "react-router-dom";
import AppBase from "../../base/AppBase";

class Error404 extends React.Component {
    render() {
        return (
            <AppBase noBreadcrumb={true}>
                <Row style={{marginTop: '20px', textAlign: 'center'}}>
                    <Col span={24}>
                        <Result
                            icon={<Image preview={false}
                                         src={"https://thekipa.in/public/themes/storefront/public/images/404.svg"}/>}
                            title={<span><h2>Page Not Found</h2></span>}
                            subTitle="The page you are looking for has been temporarily moved or did not exist."
                            extra={<Link to="/"><Button type="primary">Go to Home</Button></Link>}
                        />
                    </Col>
                </Row>
            </AppBase>
        )
    }
}

export default Error404;
