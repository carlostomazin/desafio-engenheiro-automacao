const express = require('express')
const router = express.Router()
var SSH = require('simple-ssh');
//const node_ssh = require('node-ssh');
// const {NodeSSH} = require('node-ssh')
// const ssh = new NodeSSH()
//const ssh = new node_ssh();

var ssh = new SSH({
    host: 'linux',
    user: 'root',
    pass: 'root'
});

router.get('/teste', (req, res) => {
    console.log("aqui")

    ssh.exec('date', {
        out: function(stdout) {
            res.send(stdout);
        }
    }).start();

    console.log("de novo")
})

module.exports = router