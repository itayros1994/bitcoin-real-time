import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './cmps/Header';
import { routes } from './routes';
import { TabsIcons } from './cmps/TabsIcons';
import { Footer } from './cmps/Footer';
import { DropDown } from './cmps/DropDown';
import { Tabs } from './cmps/Tabs';
import './assets/style/main.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        {/* <DropDown /> */}
        <Switch>
          <div className="main-container">
            {/* <TabsIcons /> */}
            <Tabs/>
            {/* <DropDown/> */}
            {routes.map(route => {
              return <Route key={route.path} exact component={route.component} path={route.path} />
            })}
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
