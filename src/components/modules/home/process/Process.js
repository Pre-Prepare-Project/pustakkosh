import React, {Component} from 'react';
import {Steps, Popover} from "antd";

const {Step} = Steps;

class Process extends Component {
    customDot = (dot, {status}) => (
        <Popover
            content={
                <span>
                    {status}
      </span>
            }
        >
            {dot}
        </Popover>
    );

    render() {
        return (
            <div style={{backgroundColor: "#757474"}}>
                <div className={'main-container'} style={{paddingTop: 10, paddingBottom:10}}>
                    <Steps current={1} progressDot={this.customDot} percent={100} responsive={"true"}>
                        <Step status="Fill" title="Step 1" description="Fill up the Form"/>
                        <Step status="Wait" title="Step 2" description="Our team will schedule the pick up"/>
                        <Step status="Donate" title="Step 3" description="We will pick up."/>
                    </Steps>
                </div>
            </div>
        );
    }
}

export default Process;