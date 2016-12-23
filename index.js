const defaults = require('datland-swarm-defaults')
const swarm = require('discovery-swarm')(defaults())

swarm.on('connection', (peer) => {
  process.stdin.pipe(peer).pipe(process.stdout)
})

swarm.join('wowcool')
