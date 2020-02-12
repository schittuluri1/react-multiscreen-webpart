import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Assignment } from './Assignment';
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
          <h2 className={styles["label-custom"]}></h2>

          <Header />

          {/* The different screens will be re-rendered here */}
          <Route path="/Home" component={Home}/>
          <Route path="/Assignment" component={Assignment} />
          <Route path="/screen2" component={Screen2} />
          <Route path="/products/:id" component={Product} />
          <Route  exact path="/ReactGetItems" component={ReactGetItems} />
        </div>
      </Router>
    );
  }
}
