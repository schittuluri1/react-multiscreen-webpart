import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'office-ui-fabric-react/lib/Button';
import styles from './MultiScreen.module.scss';

export class Header extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      
      <div>
        <Link to="/Home" ><Button>Home</Button></Link> -->
        <Link to="/screen1" ><Button className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary"> Go to screen 1</Button></Link> -->
        <Link to="/screen2" ><Button> Go to screen 2</Button></Link> -->
        <Link to="/ReactGetItems" ><Button> Display List</Button></Link>
      </div>
    );
  }
}
