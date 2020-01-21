import * as React from 'react';
import styles from './ReactGetItems.module.scss';
import { IReactGetItemsProps } from './IReactGetItemsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jquery from 'jquery';
 
export interface IReactGetItemsState{ 
  items:[ 
        { 
          "Title": "", 
          "EventDate": "", 
          "EventState":"", 
          "EventPurpose":""
        }] 
} 
 
export default class ReactGetItems extends React.Component<IReactGetItemsProps, IReactGetItemsState> {
 
  public constructor(props: IReactGetItemsProps, state: IReactGetItemsState){ 
    super(props); 
    this.state = { 
      items: [ 
        { 
          "Title": "", 
          "EventDate": "", 
          "EventState":"", 
          "EventPurpose":""
        } 
      ] 
    }; 
  } 
   
  public componentDidMount(){ 
    var reactHandler = this;
    var siteurl="https://txhhs.sharepoint.com/sites/developer"; 
    jquery.ajax({ 
        url: `${siteurl}/_api/web/lists/getbytitle('ECERFormdata')/items`, 
        type: "GET", 
        headers:{'Accept': 'application/json; odata=verbose;'}, 
        success: function(resultData) {          
          reactHandler.setState({ 
            items: resultData.d.results 
          }); 
        }, 
        error : function(jqXHR, textStatus, errorThrown) { 
        } 
    }); 
  } 
   
 
  public render(): React.ReactElement<IReactGetItemsProps> {
     return ( 
 
        <div className={styles.panelStyle} >
          <br></br>
    
          <br></br>
          <div className={styles.tableCaptionStyle} > ECER form Data  </div>
          <br></br>
           <div className={styles.headerCaptionStyle} > Event Details</div>
          <div className={styles.tableStyle} >  
             
            <div className={styles.headerStyle} > 
              <div className={styles.CellStyle}>Title</div> 
              <div className={styles.CellStyle}>Event Date </div> 
              <div className={styles.CellStyle}>Event State</div> 
              <div className={styles.CellStyle}>Event Purpose</div> 
                      
            </div> 
             
              {this.state.items.map(function(item,key){ 
                 
                return (<div className={styles.rowStyle} key={key}> 
                    <div className={styles.CellStyle}>{item.Title}</div> 
                    <div className={styles.CellStyle}>{item.EventDate}</div> 
                     <div className={styles.CellStyle}>{item.EventState}</div>
                      <div className={styles.CellStyle}>{item.EventPurpose}</div>
           
                  </div>); 
              })} 
                     
          </div> 
        </div> 
    ); 
  }   
}