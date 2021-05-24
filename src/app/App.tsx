import * as React from "react"
import Navbar from '../features/navbar/components/Navbar'
import Sidebar from '../features/sidebar/components/Sidebar'
import DevicesList from '../features/mqttDevicesList/containers/DevicesList'
import { Row, Col } from 'antd';
import './css/App.css'


const App: React.FC = () => {

  return (
    <Row className="App">
      <Col flex={0.5}>
        <Sidebar />
      </Col>
      <Col flex={4.5}>
      <Navbar />
      <DevicesList/>
      </Col>
    </Row>
  )
}

export default App;




// function App() {
//   return (
//     <Row className="App">
//       <Col flex={0.5}>
//         <Sidebar />
//       </Col>
//       <Col flex={4.5}>
//         <Navbar />
//         {/* <DevicesList /> */}
//       </Col>
//     </Row>
//   );
// }

// export default App;
