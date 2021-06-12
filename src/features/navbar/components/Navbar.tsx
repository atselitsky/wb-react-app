import * as React from "react" 
import {Typography} from 'antd' 

import '../css/Navbar.css'

const { Title } = Typography;

interface NavbarProps{
  PageTitle:string;
}

const Navbar:React.FC<NavbarProps> = ({PageTitle}) => {
    return (
      <div className="navbar">
        <Title level={1}>{PageTitle}</Title>
      </div>
    )
}


export default Navbar;
