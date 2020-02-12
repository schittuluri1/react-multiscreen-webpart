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
  items: { "Title": "", "EventDate": "", "EventState":"", "EventPurpose":"","EventType1" : "","AddressorPOBox": "","AnyElectedOfficials": "","AnyHonoree": "","ApecialGuestNameandAffliation": "","AretheMediaInvited": "","AudienceDemographic": "","Cityc": "","Email": "","ContactFirstName": "","ContactLastName": "","ContactPersonforDayofEngagement": "","ContactPhoneforDayofEngagement": "","EventAddress": "","EventCity": "","EventTime": "","EventFormat": "","EventIndoorOrOutdoor": "","EventTheme": "","EventBackgroundorSummary": "","EventZip": "","ExpectdNumberofAttendees": "","HavePanelistsbeenconfirmed": "","MediaInformation": "","Honoree1SpouseorParentName": "","Honoree2Name": "","Honoree2SpouseorParentName": "","IsSpecialGuestConfirmed": "","NameofAttendingElectedOfficial2": "","NameofOrganization": "","NameofPersonIntroducingEC": "","OtherInformationaboutOrganizatio": "","OtherSpecialGuests": "","Panelists": "","ParkingandArrivalInstructions": "","Phone": "","Phone_x0020_Extension": "","RecordType": "","RequestID": "","SpecialGuestsType": "", "State": "","TitleofAttendingElectedOfficial2": "","TitleofAttendingElectedOfficial1": "","TitleofPersonIntroducingEC": "", "WhowillGreetEConArrival": "", "WilltherebeaMicrophone": "","WilltherebeaPodium": "","zip": ""}; 
} 
 
export default class ReactGetItems extends React.Component<IReactGetItemsProps, IReactGetItemsState> {
 
  public constructor(props: IReactGetItemsProps, state: IReactGetItemsState){ 
    super(props); 
    this.state = {items:{ "Title": "", "EventDate": "", "EventState":"", "EventPurpose":"","EventType1" : "","AddressorPOBox": "","AnyElectedOfficials": "","AnyHonoree": "","ApecialGuestNameandAffliation": "","AretheMediaInvited": "","AudienceDemographic": "","Cityc": "","Email": "","ContactFirstName": "","ContactLastName": "","ContactPersonforDayofEngagement": "","ContactPhoneforDayofEngagement": "","EventAddress": "","EventCity": "","EventTime": "","EventFormat": "","EventIndoorOrOutdoor": "","EventTheme": "","EventBackgroundorSummary": "","EventZip": "","ExpectdNumberofAttendees": "","HavePanelistsbeenconfirmed": "","MediaInformation": "","Honoree1SpouseorParentName": "","Honoree2Name": "","Honoree2SpouseorParentName": "","IsSpecialGuestConfirmed": "","NameofAttendingElectedOfficial2": "","NameofOrganization": "","NameofPersonIntroducingEC": "","OtherInformationaboutOrganizatio": "","OtherSpecialGuests": "","Panelists": "","ParkingandArrivalInstructions": "","Phone": "","Phone_x0020_Extension": "","RecordType": "","RequestID": "","SpecialGuestsType": "", "State": "","TitleofAttendingElectedOfficial2": "","TitleofAttendingElectedOfficial1": "","TitleofPersonIntroducingEC": "", "WhowillGreetEConArrival": "", "WilltherebeaMicrophone": "","WilltherebeaPodium": "","zip": ""} 
   }; 
  }

   public async componentWillMount(){
   
   }
  public async componentDidMount(){ 
    var reactHandler = this;
    const item: any = await sp.web.lists.getByTitle("ECERFormdata").items.getById(parseInt(ID)).get();
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
                  <tr><td>NameofOrganization:</td><td>{this.state.items.NameofOrganization}</td></tr>
                  <tr> <td>ContactFirstName:</td><td>{this.state.items.ContactFirstName}</td></tr>
                  <tr> <td>ContactLastName:</td><td>{this.state.items.ContactLastName}</td></tr>
                  <tr> <td>MailingAddress:</td><td>{this.state.items.AddressorPOBox}</td></tr>
                  <tr> <td>City:</td><td>{this.state.items.Cityc}</td></tr>
                  <tr> <td>State:</td><td>{this.state.items.State}</td></tr>
                  <tr> <td>ZipCode:</td><td>{this.state.items.zip}</td></tr>
                  <tr> <td>Contact Email:</td><td>{this.state.items.Email}</td></tr>
                  <tr> <td>Phone:</td><td>{this.state.items.Phone}</td></tr>
                  <tr> <td>Phone Extension:</td><td>{this.state.items.Phone_x0020_Extension}</td></tr>
            </div>
          </TabPanel>
          <TabPanel>
              <div className={styles.divStyle}>
                <tr><td >Title:</td><td>{this.state.items.Title}</td></tr>
                <tr> <td>Type:</td><td>{this.state.items.EventType1}</td></tr>
                <tr> <td>Date:</td><td>    {this.state.items.EventDate}</td></tr>
                <tr> <td>Time:</td><td>    {this.state.items.EventTime}</td></tr>
                <tr><td> Address: </td><td>   {this.state.items.EventAddress}</td></tr>
                <tr><td> City:   </td><td>{this.state.items.EventCity}</td></tr>
                <tr><td> State:   </td><td>  {this.state.items.EventState}</td></tr>
                <tr><td> Zip: </td><td>  {this.state.items.EventZip}</td></tr>
                <tr><td> Purpose:    </td><td>      {this.state.items.EventPurpose}</td></tr>
                <tr><td> AudienceDemographic:    </td><td>      {this.state.items.AudienceDemographic}</td></tr>
                <tr><td> Venue:    </td><td>      {this.state.items.EventIndoorOrOutdoor}</td></tr>
                <tr><td> Podium?:    </td><td>      {this.state.items.WilltherebeaPodium}</td></tr>
                <tr><td> MediaInvited?:   </td><td>      {this.state.items.AretheMediaInvited}</td></tr>
                <tr><td> MediaInformation:  </td><td>      {this.state.items.MediaInformation}</td></tr>
                <tr><td> Person Introducing Executive Comissioner Phillips?:    </td><td>      {this.state.items.NameofPersonIntroducingEC}</td></tr>
                <tr><td> Title of Person Introducing:    </td><td>      {this.state.items.TitleofPersonIntroducingEC}</td></tr>
                <tr><td> Format:  </td><td>      {this.state.items.EventFormat}</td></tr>
                <tr><td> HavePanelistsbeenconfirmed:    </td><td>      {this.state.items.HavePanelistsbeenconfirmed}</td></tr>
                <tr><td> OtherSpecialGuests:    </td><td>      {this.state.items.Panelists}</td></tr>
                <tr><td> SpecialGuestsType:    </td><td>      {this.state.items.Panelists}</td></tr>
                <tr><td> IsSpecialGuestConfirmed:    </td><td>      {this.state.items.Panelists}</td></tr>
                <tr><td> AnyHonoree:    </td><td>      {this.state.items.Panelists}</td></tr>
                <tr><td> Honoree2Name:    </td><td>      {this.state.items.Panelists}</td></tr>
                <tr><td> Honoree1SpouseorParentName:    </td><td>      {this.state.items.Panelists}</td></tr>
                <tr><td> Honoree1SpouseorParentName:    </td><td>      {this.state.items.Panelists}</td></tr>
              </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.divStyle}>
                <tr><td>ContactPersonforDayofEngagement:</td><td>{this.state.items.ContactPersonforDayofEngagement}</td></tr>
                <tr> <td>ContactPhoneforDayofEngagement:</td><td>{this.state.items.ContactPhoneforDayofEngagement}</td></tr>
                <tr> <td>WhowillGreetEConArrival:</td><td>{this.state.items.WhowillGreetEConArrival}</td></tr>
                <tr> <td>ParkingandArrivalInstructions:</td><td>{this.state.items.ParkingandArrivalInstructions}</td></tr>
                <tr> <td >OtherInformationaboutOrganization:</td><td>{this.state.items.OtherInformationaboutOrganizatio}</td></tr>
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