// configure system.js
System.config({
  packages: {
    app: {
      defaultExtension: 'js'
    }
  }
});

// load esri modules needed by this application
// into a SystemJS module called esri-mods
esriSystem.register(
  // array of Esri module names to load and then register with SystemJS
  [
    'esri/map'
  ],

  // optional callback function
  function() {
    // then bootstrap application
    System.import('main')
      .then(null, console.error.bind(console));
  },



  // optional paramaters
  {
    // name of SystemJS module that you will import from, defaults to 'esri'
    // outModuleName: 'esri-mods',
      maintainModuleNames: true,
      
    // by default each module will use everything after the last '/' in their name
    // however you can override that for specific modules here
    // moduleNameOverrides: {
    //   'esri/request': 'esriRequest'
    // }
    
  });
  
 