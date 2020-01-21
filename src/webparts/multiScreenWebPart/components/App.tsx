import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { Header } from './Header';
import { Product } from './Product';
import {Home} from './Home';
import ReactGetItems from './ReactGetItems';
import styles from './MultiScreen.module.scss';


export class App extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <Router>
        <div>
          <h2>App</h2>

          <Header />

          {/* The different screens will be re-rendered here */}
          <Route path="/Home" component={Home} />
          <Route path="/screen1" component={Screen1} />
          <Route path="/screen2" component={Screen2} />
          <Route path="/products/:id" component={Product} />
          <Route path="/ReactGetItems" component={ReactGetItems} />

          <div className="footer"><p>Company © W3docs. All rights reserved.</p></div>
        </div>
      </Router>
    );
  }
}
