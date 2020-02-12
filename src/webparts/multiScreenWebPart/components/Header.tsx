import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './MultiScreen.module.scss';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';


export class Header extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <Link to="/ReactGetItems" ><PrimaryButton className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary"> Display List</PrimaryButton></Link><i className="ms-Icon ms-Icon--CaretRight8" aria-hidden="true"></i>
        <Link to="/Home" ><PrimaryButton className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary">Dashboard</PrimaryButton></Link> <i className="ms-Icon ms-Icon--CaretRight8" aria-hidden="true"></i>
        <Link to="/screen2" ><PrimaryButton className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary">Approval Status/Responses</PrimaryButton></Link>
      </div>
    );
  }
}
