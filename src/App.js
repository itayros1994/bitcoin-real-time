import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './cmps/Header';
import { routes } from './routes';
import { Footer } from './cmps/Footer';
import { Tabs } from './cmps/Tabs';
import './assets/style/main.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="main-container">
            <Tabs/>
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
