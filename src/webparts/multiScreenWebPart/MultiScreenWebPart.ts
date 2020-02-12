import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { App } from './components/App';
import { IReactGetItemsProps } from './components/IReactGetItemsProps';
import ReactGetItems from './components/ReactGetItems';
import { sp } from "@pnp/sp/presets/all";


export interface IReactGetItemsWebPartProps {
  description: string;
}

export default class MultiScreenWebPart extends BaseClientSideWebPart<IReactGetItemsWebPartProps> {
  
  public onInit(): Promise < void> {
    console.log("init is running");
    return super.onInit().then(_ => {
      sp.setup( this.context);
    });
  }
  public render(): void {
    console.log("render is running");
    const element: React.ReactElement<IReactGetItemsProps> = React.createElement(
      ReactGetItems,
      {
        description: this.properties.description,
        context: this.context
      }
    );
    //ReactDom.render(element, this.domElement);
    ReactDom.render(React.createElement(App), this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  
}
