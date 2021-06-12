import * as React from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MenuOutlined,HomeOutlined, TableOutlined, AreaChartOutlined, SettingOutlined, QuestionOutlined,CodepenOutlined } from '@ant-design/icons'
import '../css/Sidebar.css'


const Sidebar:React.FC = ()=> {
    return (
      <div className="sidebar">
        <Menu  className="sidebar-menu" theme="dark" >
          <Menu.Item  className="sidebar-item menu-button" icon={<MenuOutlined />}>
            </Menu.Item>
        </Menu>
        <Menu className="sidebar-menu" theme="dark" >
          <Menu.Item  className="sidebar-item" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item  className="sidebar-item" icon={<TableOutlined />}>
            <Link  to="/topics">Topics</Link>
          </Menu.Item>
          <Menu.Item  className="sidebar-item" icon={<AreaChartOutlined />}>
            <Link  to="/stat">Statistic</Link>
          </Menu.Item>
          <Menu.Item  className="sidebar-item" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link> 
            </Menu.Item>
          <Menu.Item  className="sidebar-item" icon={<CodepenOutlined/>}>
            <Link to="/rules">Rules</Link> 
          </Menu.Item>
          <Menu.Item  className="sidebar-item" icon={<QuestionOutlined />}>
            Support
          </Menu.Item>
        </Menu>
      </div>
    )
}

export default Sidebar;
