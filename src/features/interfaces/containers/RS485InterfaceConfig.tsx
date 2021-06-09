import * as React from 'react'
import axios from 'axios'
import { Button,Input,Checkbox,Collapse,Tabs,Skeleton} from 'antd'

const { Panel } = Collapse;
const { TabPane } = Tabs;

export interface FieldData {
    name:string | number | (string | number)[],
    debug?: boolean,
    ports?: portsField,
}

interface portsField{
    path:string,
    devices:[
        {
        slave_id: number,
        device_type: string
        }
    ],
    port_type: string,
    baud_rate: number,
    parity: string,
    data_bits: number,
    stop_bits: number,
    poll_interval: number,
    enabled: boolean,
    type: boolean
}

interface CustomizedFormProps {
    // onChange: (fields: FieldData[]) => void;
    // fields: FieldData[];
    config: any,
}
interface State {
    config:any,
    loading:boolean,
    selected:boolean,
    selectedInterface:any,
}

class RS485InterfaceConfig extends React.Component<CustomizedFormProps,State>{
    constructor(props:any){
        super(props)
        this.state = {
            config:{},
            loading:true,
            selected:false,
            selectedInterface:[]
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
            const result = await axios.get('http://localhost:8080/config/rs485');
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

    postConfig(){
        console.log(JSON.stringify(this.state.config))
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


    render(){
        const {loading,config} = this.state
        if(loading){
            return <Skeleton active />
        }
        return(
            <>
                <Tabs defaultActiveKey="1">
                {config.ports.map((el:any,i:number)=>{
                    return(
                        <TabPane tab={"Порт "+el.path} key={i}>
                        <Button htmlType="button" onClick={()=>this.postConfig()}>Save</Button>
                        <Input.Group size="large" >
                        <Checkbox
                        checked={el.enabled}
                        onChange={(input)=>this.changeConfig("enabled",input.target.checked,i)}
                        >Enabled</Checkbox>
            
                        <Input
                            id={"baud_rate_"+ i}
                            name="baud_rate"
                            addonBefore="baud_rate"
                            defaultValue={el.baud_rate}
                            onChange={(input)=>this.changeConfig("baud_rate",input.target.value,i)}
                        />
            
                        <Input
                            id={"parity_"+ i}
                            name="parity"
                            addonBefore="parity"
                            defaultValue={el.parity}
                            onChange={(input)=>this.changeConfig("parity",input.target.value,i)}
                        />
            
                        <Input
                            id={"data_bits_"+ i}
                            name="data_bits"
                            addonBefore="data_bits"
                            defaultValue={el.data_bits}
                            onChange={(input)=>this.changeConfig("data_bits",input.target.value,i)}
                        />
            
                        <Input
                            id={"stop_bits_"+ i}
                            name="stop_bits"
                            addonBefore="stop_bits"
                            defaultValue={el.stop_bits}
                            onChange={(input)=>this.changeConfig("stop_bits",input.target.value,i)}
                        />
            
                        <Input
                            id={"poll_interval_"+ i}
                            name="poll_interval"
                            addonBefore="poll_interval"
                            defaultValue={el.poll_interval}
                            onChange={(input)=>this.changeConfig("poll_interval",input.target.value,i)}
                        />
                        <Collapse>
                        {el.devices.map((device:any,index:number)=>{
                            return(
                                <Panel key={i} header={"Устройство "+(i+1)}> 
                                        <Input
                                            addonBefore="slave_id"
                                            defaultValue={device.slave_id}
                                            onChange={(input)=>{this.changeConfig("slave_id",input.target.value,i,index)}}
                                        />
                                        <Input
                                            addonBefore="device_type"
                                            defaultValue={device.device_type}
                                            onChange={(input)=>{}}
                                        />
                                </Panel>    
                            )
                        })}
                        </Collapse>
                        </Input.Group>
                        </TabPane>
                    )
                })}
                </Tabs>
            </>
        )
    }
}
export default RS485InterfaceConfig;