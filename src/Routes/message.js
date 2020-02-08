//Load express
const express = require('express');
// Set the router for our api routing
const router = express.Router();
// Set message controller that will create, update, delete, get message
const messageController = require('../Controllers/MessageController');
//Set api routing
router.get('/', messageController.all);
router.get('/:id', messageController.get);
router.post('/', messageController.post);
router.put('/:id', messageController.put);
router.delete('/:id', messageController.remove);
//export the router
module.exports = router;
