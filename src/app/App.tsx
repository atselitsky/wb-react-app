import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../features/navbar/components/Navbar'
import Sidebar from '../features/sidebar/components/Sidebar'
import DevicesList from '../features/mqttDevicesList/containers/DevicesList'
import { Row, Col } from 'antd';
import './css/App.css'


const App: React.FC = () => {

  return (
    <Router>
    <Row className="App">
      <Col flex={0.5}>
        <Sidebar />
      </Col>
      <Col flex={4.5}>
      <Navbar />
      <Route path="/devices" component={DevicesList}/>
      </Col>
    </Row>
    </Router>
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
