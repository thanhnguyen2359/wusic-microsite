exports.config =
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor\/js)/
        'javascripts/html5shiv.js': /^(vendor\/ie)/
      order:
        before: [
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app/
        'stylesheets/vendor.css': /^(bower_components|vendor)/
      order:
        before: [
          "_variables.styl",
          "_utilities.styl"
        ]
    templates:
      joinTo: "javascripts/template.js" : /^app/

  plugins:
    jshint:
      pattern: /^app\/.*\.js$/
    jade:
      pretty: yes
    static_jade:
      extension: ".static.jade"
    stylus:
      includeCss: true
  server:
    port: 3000
