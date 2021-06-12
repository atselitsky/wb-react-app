import * as React from 'react';
import { Row, Col,Cascader } from 'antd';
import AceEditor from "react-ace";

import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

//!USE BREAKPOINTS
class Rules extends React.Component{
    onChangeJS = (json:any)=>{
        console.log(json)
    }
    render(){
        return(
            <>
                <Row justify="center">
                    <Col span={4}>
                        <Cascader/>
                    </Col>
                    <Col span={32}>
                        <AceEditor
                            height="80vh"
                            width="65vw"
                            mode="javascript"
                            theme="tomorrow"
                            fontSize={14}
                            onChange={this.onChangeJS}
                            showGutter={true}
                            minLines={50}
                        />
                    </Col>
                </Row>
            </>
        )
    }
}

export default Rules;