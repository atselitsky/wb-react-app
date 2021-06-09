import * as React from "react"
import { BrowserRouter as Router,Switch } from "react-router-dom";
import { Layout } from 'antd';


import Navbar from '../features/navbar/components/Navbar'
import Sidebar from '../features/sidebar/components/Sidebar'
import TopicsList from '../features/topics/containers/TopicsList'
import Devices from '../features/interfaces/containers/Interfaces'
import RS485InterfaceConfig from '../features/interfaces/containers/RS485InterfaceConfig'

import RouteWithSubRoutes from '../common/RouteWithSubRoutes'

import './css/App.css'

const { Header, Sider, Content } = Layout;

// import { Row, Col } from 'antd';

const routes = [
  {
    path: "/topics",
    component: TopicsList
  },
  {
    path: "/devices",
    exact:true,
    component: Devices,
  },
  {
    path: "/devices/rs-485",
    
    component: RS485InterfaceConfig,
  },
];



const App: React.FC = () => {

  return (
    <Router>
    <Layout>
        <Sider><Sidebar/></Sider>
  
      <Layout>
        <Header className="sider"><Navbar/></Header>
        <Content className="content">
          <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Content>
        </Layout>
      </Layout>
      </Router>
    // <Router>
    // <Row className="App">
    //   <Col flex={0.5}>
    //     <Sidebar />
    //   </Col>
    //   <Col flex={4.5}>
    //   <Navbar />
    //   <Route path="/topics" component={TopicsList}/>
    //   <Route path="/devices" component={Devices}/>
    //   </Col>
    // </Row>
    // </Router>
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
