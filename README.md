# zendesk-typescript
This is a lite Zendesk Typescript API

# Usages

```js
import {Zendesk} from  "zendesk-typescript"

const zendesk = new Zendesk("email", "token", "https://firma.zendesk.com/api/v2")
zendesk.testAuth(function(authStatus){
    if (!authStatus){
        console.log("[!] There is a auth problem. Please check your acces data.");
        return;
    }
    zendesk.people.getAll(function(data){
        data.users.forEach(user => {
               console.log(user.email);
        });
    });
});

```
# Disclaimer
This is only a very lite lib. It support at the moment only the CRM system from Zendesk.
