var respawn = require('respawn')

var monitor = respawn(['node', 'server.js'], {
  name: 'Arrivals',          // set monitor name
  maxRestarts: 10,        // how many restarts are allowed within 60s
                         // or -1 for infinite restarts
  sleep: 1000,            // time to sleep between restarts,
  kill: 20000,            // wait 30s before force killing after stopping  
})

monitor.start() // spawn and watch