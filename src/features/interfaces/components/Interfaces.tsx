import * as React from 'react'
import { Link} from "react-router-dom";
import {Button,Space} from 'antd'

import '../css/devices.css'

//? TABS FOR INTERFACES?
const Interfaces:React.FC = () =>{
        return(        
                <Space direction="vertical" size="large">          
                    <Link to="/settings/devices/rs-485">
                        <Button size="middle" shape="round" block >
                            RS-485
                        </Button>
                    </Link>
                    <Button size="middle" shape="round" block>База данных SQLite</Button>
                    <Button size="middle" shape="round" block>Modbus</Button>
                    <Button size="middle" shape="round" block>ADC</Button>
                </Space>
        )
}

export default Interfaces;