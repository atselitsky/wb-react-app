import * as React from 'react'
import { Row, Col,Card } from 'antd';
import Interfaces from '../../interfaces/components/Interfaces';
import AppSettings from '../containers/AppSettings';

import '../css/settings.css'

//? TABS FOR INTERFACES?
const Settings:React.FC = () => {
    return(
        <Row
        className="settings"
        
        gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },24]}>
            <Col className="gutter-row" lg={{span:8}} md={{span:9}} sm={{span:24}} xs={{span:24}}>
                <Card className="settings-card" title="Интерфейсы">
                    <Interfaces/>
                </Card>
            </Col>
            <Col className="gutter-row" lg={{span:8}} md={{span:9}} sm={{span:24}} xs={{span:24}}>
                <Card className="settings-card" title="Веб-приложение">
                    <AppSettings/>
                </Card>
            </Col>
        </Row>
    );
}

export default Settings;