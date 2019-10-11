"use strict";
exports.__esModule = true;
var zendesk_1 = require("../src/zendesk");
var zendesk = new zendesk_1.Zendesk("dmin@klexhub.com", "4176TinrXgfP2iAhErOF2SrdvNWm9ywIgQ6FaSlN", "https://klexhubug.zendesk.com/api/v2");
zendesk.testAuth(function (authStatus) {
    if (authStatus)
        console.log("is Auth");
});
