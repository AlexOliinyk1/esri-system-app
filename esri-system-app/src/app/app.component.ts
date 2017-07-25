import { Component } from '@angular/core';
// 
// import esriRequest from 'esri/request';
// import {LegendOptions} from "esri";
// import * as Map from 'esri/map'; 
import Map from 'esri/map';
// import Map = require('esri/map');
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 map: Map = null;
  constructor() { }
   
  ngOnInit() {
       this.map = new Map('esriMap');
    // debugger;
    // this.map = new Map('esriMap', {
    //   basemap: 'dark-gray-vector',
    //   zoom: 4,
    //   center: [19.1451, 51.9194]
    // });
    
    // this.map.on('load', (evt) => {
    //   var clusterLayer = new clusterfeaturelayer({
    // 		url: '//services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Cities/FeatureServer/0',
    // 		distance: 60,
    // 		id: 'clusterLayer',
    // 		labelColor: '#fff',
    // 		resolution: (this.map.extent.getWidth() / this.map.width),
    // 		useDefaultSymbol: false,
    // 		zoomOnClick: true,
    // 		showSingles: true,
    // 		objectIdField: 'FID',
    // 		mode: FeatureLayer.MODE_SNAPSHOT
    // 	});

	  //   this.map.addLayer(clusterLayer);
    // });
     
  }
}
