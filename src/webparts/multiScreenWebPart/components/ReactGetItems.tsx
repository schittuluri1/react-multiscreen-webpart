import * as React from 'react';
import styles from './ReactGetItems.module.scss';
import { IReactGetItemsProps } from './IReactGetItemsProps';
import { UrlQueryParameterCollection } from '@microsoft/sp-core-library';
import "@pnp/sp/sites";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { sp } from "@pnp/sp/presets/all";


var url=window.location.href;
var queryParms = new UrlQueryParameterCollection(window.location.href);
var ID = queryParms.getValue("itemId");
console.log(ID);

export interface IReactGetItemsState{ 
  items: {};
} 
 
export default class ReactGetItems extends React.Component<IReactGetItemsProps, IReactGetItemsState> {
 
  public constructor(props: IReactGetItemsProps, state: IReactGetItemsState){ 
    super(props); 
    this.state = {items:""}; 
  }

   public async componentWillMount(){
   
   }
  public async componentDidMount(){ 
    var reactHandler = this;
    const item: any = await sp.web.lists.getByTitle("mylist").items.getById(parseInt(ID)).get();
    reactHandler.setState({items:item});
  } 
   
  private _getPeoplePickerItems(items: any[]) {
    console.log('Items:', items);
  }

  public render(): React.ReactElement<IReactGetItemsProps> {
     return ( 
      <div className={styles.panelStyle} > 
      <div className={styles.headerCaptionStyle}> ECER DISPLAY FORM</div>
       <Tabs>
          <TabList>
            <Tab>General Information</Tab>
            <Tab>Event Information</Tab>
            <Tab>Date of Engagement</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.divStyle}>
                  
            </div>
          </TabPanel>
          <TabPanel>
              <div className={styles.divStyle}>
                
              </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.divStyle}>
                
            </div>
          </TabPanel>
        </Tabs>
        <div> <h1>Assignment Section</h1>
        <PeoplePicker
          context={this.props.context}
          titleText="People Picker"
          personSelectionLimit={3}
          //groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
          showtooltip={true}
          isRequired={true}
          disabled={false}
          selectedItems={this._getPeoplePickerItems}
          showHiddenInUI={false}
          principalTypes={[PrincipalType.User]}
          resolveDelay={1000} />
        </div>
      <PrimaryButton className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary"> Make Changes</PrimaryButton>
       <PrimaryButton className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary"> Approve</PrimaryButton>
       <PrimaryButton className="ms-bgColor-orangeLight--hover ms-Button ms-Button--primary"> Make Changes</PrimaryButton>
       </div>
    ); 
  }   
}