var regString,
  excludeString,
  fileList = window.require.list();

var requireOrder = {
  scripts: [
    'app'// Always include application helper first
    // 'util',
    // 'authentication',
    // 'login',
    // 'forgotpassword'
  ],
  controllers: [
  ],
  services:[],
  directives:[]
}

var folderOrder = ['scripts', 'controllers','services','directives'];

folderOrder.forEach(function(folder){

  //Require before
  requireOrder[folder].forEach(function(module){
    require( folder + '/' + module);
  });

  //Require after
  excludeString = requireOrder[folder].join('$|');
  regString = '^'+folder+'/(?!' + excludeString + '$)';
  fileList.filter(function(module){
    return new RegExp(regString).test(module);
  }).forEach(function(module){
    require(module);
  });

})