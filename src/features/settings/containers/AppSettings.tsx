import * as React from 'react';
import {Switch,Typography,Slider,Space,Row,Col} from 'antd';

const { Title } = Typography;

class AppSettings  extends React.Component {
    render(){
        return(
            <>
            <Space direction="vertical" size="middle">
                <Row>
                    <Col className="gutter-row" span={24}>
                        <Title level={5}>
                            Тема 
                        </Title>
                        <Switch checkedChildren="Тёмная" unCheckedChildren="Светлая"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="gutter-row" span={24}>
                        <Title level={5}>
                            Размер шрифта 
                        </Title>
                        <Slider dots={true}/>
                    </Col>
                </Row>
            </Space>
            </>
        )
    }
}
export default AppSettings;