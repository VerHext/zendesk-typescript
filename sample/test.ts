import {Zendesk} from  "../src/zendesk"

const zendesk = new Zendesk("-", "-", "https://-.zendesk.com/api/v2")
zendesk.testAuth(function(authStatus){
    if (!authStatus){
        console.log("[!] There is a auth problem. Please check your acces data.");
        return;
    }



});