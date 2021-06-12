import * as React from "react"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Layout } from 'antd';


import Navbar from '../features/navbar/components/Navbar'
import Sidebar from '../features/sidebar/components/Sidebar'
import TopicsList from '../features/topics/containers/TopicsList'
import Settings from '../features/settings/components/Settings'
import RS485InterfaceConfig from '../features/interfaces/containers/RS485InterfaceConfig'
import Rules from '../features/rules/container/Rules'
import Statistic from '../features/statistic/container/Statistic'
import RouteWithSubRoutes from '../common/RouteWithSubRoutes'

import './css/App.css'

const { Sider, Content } = Layout;


const routes = [
  {
    name:"Данные",
    path: "/topics",
    component: TopicsList
  },
  {
    name:"Настройки",
    path: "/settings",
    exact:true,
    component: Settings,
  },
  {
    name:"RS-485",
    path: "/settings/devices/rs-485",
    component: RS485InterfaceConfig,
  },
  {
    name:"Правила",
    path: "/rules",
    component: Rules,
  },
  {
    name:"Статистика",
    path: "/stat",
    component: Statistic,
  },
];



const App: React.FC = () => {
  return (
    <Router>
    <Layout>
        <Sider collapsed={true}>{<Sidebar/>}</Sider>
      <Layout>
          <Switch>
          {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                >
                    <Navbar
                      key={i}
                      PageTitle={route.name}
                    /> 
                </Route>
              ))} 
          </Switch>
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
  )
}

export default App;