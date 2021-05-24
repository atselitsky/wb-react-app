import * as React from "react"
import { Menu } from 'antd'
import { AlignLeftOutlined, WifiOutlined, UserOutlined } from '@ant-design/icons'
import '../css/Navbar.css'
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Menu className="navbar" theme="dark" mode="horizontal">
          <Menu.Item key="1" className="menu-button" icon={<AlignLeftOutlined />}></Menu.Item>
          <Menu.Item key="2" className="" icon={<WifiOutlined />}></Menu.Item>
          <Menu.Item key="3" className="" icon={<UserOutlined />}></Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar;
