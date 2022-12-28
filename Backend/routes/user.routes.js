const express = require('express');
const user_routes = express.Router();

const {user_get,user_post} = require('../controller/user/user.controller');

user_routes.get('/api/user-get',user_get)
user_routes.post('/api/user-post',user_post)

module.exports = {user_routes}