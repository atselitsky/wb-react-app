import * as React from 'react'
import axios from 'axios'
import { Button,Input,Checkbox,Tabs,Skeleton,Space,Typography,Form} from 'antd'

const { TabPane } = Tabs;
const { Paragraph } = Typography;


interface FieldData {
    debug: boolean,
    ports: portsField[],
}
export interface DevicesData{
    slave_id: number,
    device_type: string
}

interface portsField{
    path:string,
    devices:DevicesData[],
    port_type: string,
    baud_rate: number,
    parity: string,
    data_bits: number,
    stop_bits: number,
    poll_interval: number,
    enabled: boolean,
    type: boolean
}

interface State {
    config:FieldData|null,
    loading:boolean,
}

class RS485InterfaceConfig extends React.Component<{},State>{
    constructor(props:any){
        super(props)
        this.state = {
            config:null,
            loading:true,
        }
    }
    setLoading = (value:boolean)=>{
        this.setState({
            ...this.state,
            loading:value
        })
    }
    getConfig = async ()=>{
        this.setLoading(true)
        try {
            const result = await axios.get('http://192.168.1.101:8080/config/rs485');
            this.setState({
                config:result.data
            })
        } catch (error) {
            
        }
        finally{
            this.setLoading(false)
        }
    }
    componentDidMount(){
        this.setLoading(true)
        this.getConfig()
    }
    changeConfig(prop:string,value:any,index:number,deviceNumber?:number){
        if(this.state.config){
            this.setState({
                ...this.state,
                config:{
                    debug:false,
                    ports:this.state.config.ports.map((el:any,i:number)=>{
                            if(i === index){
                                if(deviceNumber!=null){
                                    el.devices[deviceNumber][prop] = value
                                    return el
                                }
                                el[prop] = value
                                return el
                            }
                            return el
                        })
                    
                }
            })
        }
    }

    postConfig(){
        console.log(this.state.config)
        axios.post('http://localhost:8080/config/rs485',
            JSON.stringify(this.state.config),
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
        .then(function (response) {
            console.log(response);
        })
    }

//!USE SELECT FOR DEVICES + GRID +SPACE
    render(){
        const {loading,config} = this.state
        if(loading){
            return <Skeleton active />
        }
        if(!loading&&config!==null){
        return(
            <>
                <Tabs type="card" defaultActiveKey="0" size="small" > 
                {config.ports.map((el:portsField,i:number)=>{
                    return(
                        <TabPane tab={"Порт "+el.path} key={i} >
                            <Button htmlType="button" onClick={()=>this.postConfig()}>Сохранить конфигурацию</Button>
                            <Input.Group size="default" >
                                <Space direction="vertical">
                                        <Checkbox
                                            checked={el.enabled}
                                            onChange={(input)=>this.changeConfig("enabled",input.target.checked,i)}
                                        >
                                            Включить порт?
                                        </Checkbox>

                                        <Form.Item
                                            label="Baud rate"
                                            labelCol={{span: 6}}
                                        >
                                            <Input
                                                id={"baud_rate_"+ i}
                                                name="baud_rate"
                                                defaultValue={el.baud_rate}
                                                onChange={(input)=>this.changeConfig("baud_rate",parseInt(input.target.value),i)}
                                            />
                                        </Form.Item>
                                        
                                        <Form.Item
                                            label="Parity"
                                            labelCol={{span: 6 }}
                                        >                                       
                                            <Input
                                                id={"parity_"+ i}
                                                name="parity"
                                                defaultValue={el.parity}
                                                onChange={(input)=>this.changeConfig("parity",input.target.value,i)}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label="Data bits"
                                            labelCol={{span: 6 }}
                                        >                    
                                            <Input
                                                id={"data_bits_"+ i}
                                                name="data_bits"
                                                defaultValue={el.data_bits}
                                                onChange={(input)=>this.changeConfig("data_bits",parseInt(input.target.value),i)}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label="Stop bits"
                                            labelCol={{span: 6 }}
                                        >
                                            <Input
                                                id={"stop_bits_"+ i}
                                                name="stop_bits"
                                                defaultValue={el.stop_bits}
                                                onChange={(input)=>this.changeConfig("stop_bits",parseInt(input.target.value),i)}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Poll interval"
                                            labelCol={{span: 6 }}
                                        >
                                            <Input
                                                id={"poll_interval_"+ i}
                                                name="poll_interval"
                                                defaultValue={el.poll_interval}
                                                onChange={(input)=>this.changeConfig("poll_interval",parseInt(input.target.value),i)}
                                            />
                                        </Form.Item>    
                                        <Tabs tabPosition="left" size="small" style={{ height: "25vh" }}> 
                                                {el.devices.map((device:any,index:number) => {
                                                    return(
                                                        <TabPane tab={"Устройство "+ (index+1)} key={index}>
                                                            <Space direction="vertical"> 
                                                                <Form.Item
                                                                    label="Slave ID"
                                                                    labelCol={{span: 6 }}

                                                                >
                                                                    <Input
                                                                        defaultValue={device.slave_id}
                                                                        onChange={(input)=>{this.changeConfig("slave_id",parseInt(input.target.value),i,index)}}
                                                                    />
                                                                </Form.Item>
                                                                <Form.Item
                                                                    label="Device type"
                                                                    labelCol={{span: 6 }}
                                                                >
                                                                    <Input
                                                                        defaultValue={device.device_type}
                                                                        onChange={(input)=>{this.changeConfig("device_type",parseInt(input.target.value),i,index)}}
                                                                    />
                                                                </Form.Item>
                                                            </Space>
                                                        </TabPane>
                                                    )
                                                    })
                                                };
                                        </Tabs>
                                    </Space>
                            </Input.Group>
                        </TabPane>
                    )
                })}
                </Tabs>
            </>
        )
        }
    }
}
export default RS485InterfaceConfig;