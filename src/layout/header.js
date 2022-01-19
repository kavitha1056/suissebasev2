import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Menu, Switch,Button,Layout,Dropdown } from 'antd';
import Translate from '../shared/translate';
import DefaultUser from '../assets/images/defaultuser.jpg';
import logoWhite from '../assets/images/logo-white.png';
import logoColor from '../assets/images/logo-color.png';

const { Title, Paragraph, Text } = Typography;
class AppHeader extends Component {
    state={
        Visibleprofilemenu:false
    }
    securityMenu = (
        <Menu>
            <Translate className="fs-24 text-white my-16 fw-500 mx-30" content="security" component={Title} />
            <ul className="pl-0 drpdwn-list">
                <li className="no-hover dropdown-flex text-white fs-14 pb-16">2FA<Switch size="small" checked={this.props.userConfig?.twofactorVerified} onChange={(status) => {
                    if (status === true) {
                        window.open(process.env.REACT_APP_AUTHORITY + "/account/login?returnUrl=/manage/EnableAuthenticator", "_self");
                    } else {
                        window.open(process.env.REACT_APP_AUTHORITY + "/account/login?returnUrl=/manage/Disable2faWarning", "_self");
                    }
                }} /> </li>
                <li className="">
                    <Link className="dropdown-flex" to="/changepassword" >Change Password <span className="icon md rarrow-white" /></Link>

                </li>
                <li className="no-hover">
                    <div className="">
                        <Translate className="text-white fs-14 pt-16 mb-0" content="current_security_level" component={Paragraph} />
                        <Translate className="text-green fw-900" content="medium" component={Paragraph} />
                    </div>
                    <Translate className="text-white fs-14" style={{ paddingRight: '78px' }} content="current_security_text" component={Paragraph} />
                </li>
                <li>
                    <div className="dropdown-flex-top">
                        <Translate content="protect_your_account" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
            </ul>
        </Menu>
    );
    settingMenu = (
        <Menu>
            <Translate className="fs-24 text-white my-16 fw-500 mx-30" content="settings" component={Title} />
            <ul className="pl-0 drpdwn-list">
                <li className>
                    <div className="dropdown-flex">
                        <Translate content="general" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="privacy_policy" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="terms_service" component={Link} onClick={() => window.open("https://www.iubenda.com/terms-and-conditions/42856099", '_blank')} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="about" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="wallet_version" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="preferences" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="language" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="local_currency" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="notifications" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>
                <li>
                    <div className="dropdown-flex">
                        <Translate content="themes" component={Link} />
                        <span className="icon md rarrow-white" />
                    </div>
                </li>

                <li className="d-flex justify-content align-center c-pointer" onClick={() => {
                    // userManager.signoutRedirect(); 
                }}>
                    <Translate content="logout" component={Link} />
                    <span className="icon md rarrow-white" />
                </li>
            </ul>
        </Menu>
    );
    render() {
        const depostWithdrawMenu = (
            <Menu>
                <ul className="pl-0 drpdwn-list">
                    <li onClick={this.showSendDrawer}>
                        <Link><Translate content="tab_crypto" conmponent={Text} /> <span className="icon md rarrow-white" /></Link>

                    </li>
                    <li onClick={this.showBuyFiatDrawer}>
                        <Link><Translate content="tab_fiat" conmponent={Text} />  <span className="icon md rarrow-white" /></Link>
                    </li>
                </ul>
            </Menu>
        )
        const userProfileMenu = (
            <Menu>
                <div className="profile-dropdown">
                    {this.props.userConfig?.imageURL != null && <img src={this.props.userConfig?.imageURL ? this.props.userConfig?.imageURL : DefaultUser} className="user-profile" alt={"image"} />}
                    {this.props.userConfig?.imageURL === null && <img src={this.props.userConfig?.imageURL ? this.props.userConfig?.imageURL : DefaultUser} className="user-profile" alt={"image"} />}
                    <p className="mb-15 ml-8 profile-value" style={{ flexGrow: 12 }}>{this.props.userConfig?.firstName} {this.props.userConfig?.lastName}</p>
                    <Translate content="manage_account" component={Button} size="medium" block className="profile-btn" onClick={() => this.userProfile()} />
                    <ul className="pl-0 drpdwn-list">
                        <li className="c-pointer" onClick={() => this.showAuditLogsDrawer()}>
                            <Translate content="AuditLogs" component={Link} className="c-pointer px-0" />
                        </li>
                        <li className="c-pointer" onClick={() => this.clearEvents()}>
                            <Translate content="logout" className="c-pointer px-0" component={Link} />
                        </li>
                    </ul>
                </div>
            </Menu>
        );
        return (
            <>
                <Layout className="layout">
                    <div className="tlv-header" id="area">
                        <div className="login-user">
                            <ul className="header-logo pl-0">
                                <li className="pr-30 p-relative">
                                    {/* {<img src={logoWhite} alt="logo" className="tlv-logo dark c-pointer" alt={"image"} onClick={this.routeToHome} />} */}
                                    {<img src={logoColor} alt="logo" className="tlv-logo light c-pointer" alt={"image"} onClick={this.routeToHome} />}
                                </li>
                                <li className="mb-d-none px-36">
                                    <Translate content="Dashboard" with={{ lable: this.props.userConfig?.isBusiness ? "Business" : "Personal" }} onClick={() => this.props.userConfig?.isKYC ? this.props.history.push('/cockpit') : this.props.history.push("/notkyc")} component={Text} className="text-white-30 fs-24 c-pointer cp-link" />
                                    <Text className="text-white-30 fs-24">|</Text>
                                    <Translate content="user_type" with={{ lable: this.props.userConfig?.isBusiness ? "Business" : "Personal" }} component={Text} className="text-white-30 fs-24 ml-16" />
                                </li>
                            </ul>
                            <Menu theme="light" mode="horizontal" className="header-right mobile-header-right">
                                <Menu.Item key="6"><span className="icon md bell" onClick={this.showNotificationsDrawer} /></Menu.Item>
                                <Dropdown overlay={userProfileMenu} trigger={['click']} placement="topRight" arrow overlayClassName="secureDropdown" getPopupContainer={() => document.getElementById('area')}>
                                    <Menu.Item key="7">{this.props.userConfig?.imageURL != null && <img src={this.props.userConfig?.imageURL ? this.props.userConfig?.imageURL : DefaultUser} className="user-profile" alt={"image"} />}
                                        {this.props.userConfig?.imageURL === null && <img src={this.props.userConfig?.imageURL ? this.props.userConfig?.imageURL : DefaultUser} className="user-profile" alt={"image"} />}</Menu.Item>
                                </Dropdown>
                            </Menu>
                        </div>
                        <Menu theme="light" mode="horizontal" className="header-right mobile-headerview" selectedKeys={[this.props.buySell?.headerTab]} onSelect={(key) => { 
                            //this.props.dispatch(setHeaderTab(key.key)) 
                        }}>
                            <Translate content="menu_wallets" component={Menu.Item} key="1" onClick={this.showWalletsDrawer} className="list-item" />
                            <Translate content="menu_buy_sell" component={Menu.Item} key="2" onClick={this.showBuyDrawer} className="list-item" />
                            <Translate content="menu_swap" component={Menu.Item} key="3" onClick={this.showSwapDrawer} className="list-item" />
                            <Dropdown onClick={() => this.setState({ ...this.state, Visibleprofilemenu: false })} overlay={depostWithdrawMenu} trigger={['click']} placement="bottomCenter" arrow overlayClassName="secureDropdown depwith-drpdown" getPopupContainer={() => document.getElementById('area')}>
                                <Translate content="menu_send_receive" component={Menu.Item} key="4" className="mr-16" />
                            </Dropdown>

                            <Translate content="menu_transactions_history" component={Menu.Item} key="5" onClick={this.showTransactionHistoryDrawer} className="list-item" />
                            <Menu.Item key="6" className="notification-conunt" onClick={this.showNotificationsDrawer}><span className="icon md bell ml-4 p-relative" onClick={() => this.readNotification()}>{(this.props.dashboard?.notificationCount != null && this.props.dashboard?.notificationCount != 0) && <span>{this.props.dashboard?.notificationCount}</span>}</span></Menu.Item>
                            <Dropdown onVisibleChange={() => this.setState({ ...this.state, Visibleprofilemenu: !this.state.Visibleprofilemenu })} visible={this.state.Visibleprofilemenu} onClick={() => this.setState({ ...this.state, Visibleprofilemenu: true })} overlay={userProfileMenu} placement="topRight" arrow overlayClassName="secureDropdown" getPopupContainer={() => document.getElementById('area')}>
                                <Menu.Item key="7" className="ml-16" >{this.props.userConfig?.imageURL != null && <img src={this.props.userConfig?.imageURL ? this.props.userConfig?.imageURL : DefaultUser} className="user-profile" alt={"image"} />}
                                    {this.props.userConfig?.imageURL === null && <img src={this.props.userConfig?.imageURL ? this.props.userConfig?.imageURL : DefaultUser} className="user-profile" alt={"image"} />}</Menu.Item>
                            </Dropdown>
                        </Menu>
                    </div>
                </Layout >
            </>

        );
    }
}

export default AppHeader;