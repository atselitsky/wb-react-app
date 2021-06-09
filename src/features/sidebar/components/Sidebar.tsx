import * as React from 'react'
import { Link } from "react-router-dom";
import { Menu, Typography } from 'antd';
import { HomeOutlined, TableOutlined, LineChartOutlined, SettingOutlined, QuestionOutlined, LogoutOutlined } from '@ant-design/icons'
import '../css/Sidebar.css'
const { Text } = Typography;


class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Text className="logo">WIREN BOARD</Text>
        <Menu className="sidebar-menu" theme="dark" >
          <Menu.Item key="1" className="sidebar-item" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" className="sidebar-item" icon={<TableOutlined />}>
            <Link  to="/topics">Topics</Link>
          </Menu.Item>
          <Menu.Item key="3" className="sidebar-item" icon={<LineChartOutlined />}>Charts</Menu.Item>
          <Menu.Item key="4" className="sidebar-item" icon={<SettingOutlined />}>
            <Link to="/devices">Settings</Link> 
            </Menu.Item>
          <Menu.Item key="5" className="sidebar-item" icon={<QuestionOutlined />}>Support</Menu.Item>
          <Menu.Item key="6" className="sidebar-item" icon={<LogoutOutlined />}>Permissions</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Sidebar
