var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'Audio Announcement',
    description: 'Audio RSUD AA server.',
    script: require('path').join(__dirname,'app.js'),
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=2040'
    ]
    //, workingDirectory: '...'
    //, allowServiceLogon: true
});
console.log(require('path').join(__dirname,'app.js'),);
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
});

svc.install();