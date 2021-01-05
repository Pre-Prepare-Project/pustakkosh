import {Menu, Icon, Layout, Avatar, Dropdown, Button, Drawer} from 'antd';
import * as routes from '../routes/index';
import windowSize from 'react-window-size';
import {Link} from "react-router-dom";
import React, {Component} from 'react';
import {NotificationOutlined, MessageOutlined, BarsOutlined} from '@ant-design/icons';
import {inject, observer} from "mobx-react";
@inject('sessionStore')
@observer
class Navigation extends Component {
    renderNavLinks = () => {
        let {HOME, ACCOUNT, SIGN_IN, PROJECTS} = routes;
        let {authUser, toggleMobileMenuOpen, isMobileMenu} = this.props.sessionStore;
        let signedInUserId = authUser && authUser.uid;
        if (signedInUserId) {
            return [
                <Menu.Item key={0}>
                    <Link
                        onClick={() => toggleMobileMenuOpen()}
                        to={HOME.route}
                    >
                        {HOME.link}
                    </Link>
                </Menu.Item>,
                <Menu.Item key={1}>
                    <Link
                        onClick={() => toggleMobileMenuOpen()}
                        to={`${ACCOUNT.route}/${signedInUserId}`}
                    >
                        {ACCOUNT.link}
                    </Link>
                </Menu.Item>,
                <Menu.Item key={2}>
                    <Link
                        onClick={() => toggleMobileMenuOpen()}
                        to={`${PROJECTS.route}/tvF7OMS1g9omqcdHNvpo`}
                    >
                        {PROJECTS.link}
                    </Link>
                </Menu.Item>,


            ]
        } else {
            return (
                <Menu.Item key={3}>
                    <Link to={SIGN_IN.route}>
                        <Button ghost>
                            {SIGN_IN.link}
                        </Button>
                    </Link>
                </Menu.Item>
            )
        }
    }

    renderUserLinks = () => {
        return (
            <Menu.Item
                style={{
                    float: 'right', display: 'flex',
                    justifyContent: "space-around",
                    alignItems: 'center', width: "180px"
                }}
            >
                <a>
                    <NotificationOutlined style={{fontSize: 20, color: 'white'}}/>
                </a>
                <a>
                    <MessageOutlined
                        style={{fontSize: 20, color: 'white'}}
                    />
                </a>
                {this.props.sessionStore.isMobileMenu ?
                    <Button onClick={() =>
                        this.props.sessionStore.toggleMobileMenuOpen()}
                            icon={<BarsOutlined/>}
                            ghost
                    /> :
                    <Avatar
                        src={this.props.sessionStore.authUser.photoURL}
                    />
                }
            </Menu.Item>
        )
    }

    renderDesktopNavbar = () => {
        this.props.sessionStore.setIsMobileMenu(this.props.windowWidth);
        return this.renderNavLinks();
    }
    renderMobileNavbar = () => {
        this.props.sessionStore.setIsMobileMenu(this.props.windowWidth);
        return this.props.sessionStore.authUser ?
            '' : this.renderNavLinks();
    }

    render() {
        let {toggleMobileMenuOpen, mobileMenuOpen, authUser,isMobileMenu, tab} = this.props.sessionStore;
        return (
            <div>
                <Drawer
                    title='StudentCon'
                    placement='left'
                    closable={false}
                    onClose={() => toggleMobileMenuOpen()}
                    visible={mobileMenuOpen}
                >
                    <Menu>{this.renderNavLinks()}</Menu>
                </Drawer>
                <Layout.Header
                    style={{
                        position: 'fixed', zIndex: 1, width: '100%',
                        padding: isMobileMenu ? '0' : '0 10%'
                    }}
                >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                        selectedKeys={[tab.toString()]}
                    >
                        {this.props.windowWidth >= 768 ?
                            this.renderDesktopNavbar() :
                            this.renderMobileNavbar()}
                        {authUser && this.renderUserLinks()}
                    </Menu>
                </Layout.Header>
            </div>
        )

    }
}

export default windowSize(Navigation);
