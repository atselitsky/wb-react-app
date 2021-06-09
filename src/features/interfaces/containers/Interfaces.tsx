import * as React from 'react'
import axios from 'axios';
import { Link} from "react-router-dom";
import {Button,Typography} from 'antd'

import '../devices.css'

const { Title } = Typography;

type State ={

}


class Devices extends React.Component<{routes:any},State>{
    constructor(props:any){
        super(props)
        this.state = {}
    }
    showModal = async () => {
        const result = await axios.get('http://localhost:8080/config/rs485')
        };
    

    render(){
        return(
            <>         
            <Title level={4}>Интерфейсы</Title>           
                <Link to="/devices/rs-485">
                    <Button size="large" type="primary" block >
                        RS-485
                    </Button>
                </Link>
                <Button size="large" block>База данных SQLite</Button>
                <Button size="large" block>Modbus</Button>
                <Button size="large" block>ADC</Button>
            </>
        )
    }
}

export default Devices;