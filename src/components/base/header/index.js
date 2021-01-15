import React, {Component} from 'react';
import {Layout, Menu, Drawer, Button, Avatar, Image} from "antd";
import {Link} from "react-router-dom";
import * as routes from '../../constants/RoutesData';
import {NotificationOutlined, MessageOutlined, MenuOutlined, BarsOutlined} from '@ant-design/icons';
import windowSize from 'react-window-size';

const {Header} = Layout;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuOpen: false,
            isMobileMenu: false,
            authUser: {},
            tab: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setState({
                isMobileMenu: this.props.windowWidth <= 768
            })

        }
    }

    toggleMobileMenuOpen = () => {
        let {mobileMenuOpen, isMobileMenu} = this.state
        if (!mobileMenuOpen) {
            if (isMobileMenu) {
                this.setState({
                    mobileMenuOpen: true
                })
            }
        } else {
            this.setState({
                mobileMenuOpen: false
            })
        }
    }
    renderNavLinks = () => {
        let {HOME, ACCOUNT, SIGN_IN, PROJECTS} = routes;
        return [
            <Menu.Item key={0}>
                <Link
                    onClick={() => this.toggleMobileMenuOpen()}
                    to={HOME.route}
                >
                    {HOME.link}
                </Link>
            </Menu.Item>,
            <Menu.Item key={1}>
                <Link
                    onClick={() => this.toggleMobileMenuOpen()}
                    to={`${ACCOUNT.route}`}
                >
                    {ACCOUNT.link}
                </Link>
            </Menu.Item>,
            <Menu.Item key={2}>
                <Link
                    onClick={() => this.toggleMobileMenuOpen()}
                    to={`${PROJECTS.route}/tvF7OMS1g9omqcdHNvpo`}
                >
                    {PROJECTS.link}
                </Link>
            </Menu.Item>,
            <Menu.Item key={3}>
                <Link to={SIGN_IN.route}>
                    {/*<Button ghost>*/}
                    {SIGN_IN.link}
                    {/*</Button>*/}
                </Link>
            </Menu.Item>
        ]

    }

    renderUserLinks = () => {
        let {isMobileMenu} = this.state
        return (
            <Menu.Item
                className={"menu-outline"}
                style={{
                    float: 'right', display: 'flex',
                    justifyContent: "flex-end",
                    alignItems: 'center'
                }}
            >
                {isMobileMenu &&
                <Button type="link" onClick={() =>
                    this.toggleMobileMenuOpen()}
                        size="small" style={{float: 'right', paddingTop: 15}}
                        icon={<MenuOutlined style={{fontSize: 30, color: 'white'}}/>}

                />
                }
            </Menu.Item>
        )
    }

    renderDesktopNavbar = () => {
        return this.renderNavLinks();
    }
    renderMobileNavbar = () => {
        let {authUser} = this.state
        return authUser ?
            <></> : this.renderNavLinks();
    }

    render() {
        let {isMobileMenu, authUser, tab, mobileMenuOpen} = this.state
        return (
            <div>
                <Drawer title='PustkKosh'
                        placement='left'
                        closable={false}
                        onClose={this.toggleMobileMenuOpen}
                        headerStyle={{height:64}}
                        style={{position: 'absolute'}}
                        bodyStyle={{paddingTop: 10, padding: 0}}
                        visible={!isMobileMenu ? false : mobileMenuOpen}
                        footer={<Link to={'logout'}>Logout</Link>}
                >
                    <Menu>{this.renderNavLinks()}</Menu>
                </Drawer>
                <Header className="bg-white" style={{
                    position: 'fixed', zIndex: 1, width: '100%',
                    padding: isMobileMenu ? '0' : '0 10%'
                }}>

                    <Menu
                        mode="horizontal"
                        style={{lineHeight: '55px', float: "right", border:'none'}}
                        selectedKeys={[tab.toString()]}
                    >
                        {this.props.windowWidth >= 768 ?
                            this.renderDesktopNavbar() :
                            this.renderMobileNavbar()}
                        {authUser && this.renderUserLinks()}
                    </Menu>
                </Header>
            </div>
        );
    }
}

export default windowSize(AppHeader);
