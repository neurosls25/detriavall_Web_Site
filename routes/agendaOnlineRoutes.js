const express = require("express");
const { dameAgendas } = require('../controllers/agendaOnlineCtrl.js');
const router = express.Router();

router.get('/dame_agendas', dameAgendas);

module.exports = router;
