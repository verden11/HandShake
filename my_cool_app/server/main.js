import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    console.log("Server Start up");


    var bearerRoman = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoiNTc2NTUwM2YwZGM5Yjg4NTEyMDUxNjYwIiwicm9sZSI6InVzZXIiLCJwcmltYXJ5U3Vic2NyaWJlcktleSI6ImRlZmI5Mjk2MDYyZjRkYjViNTVlMDFlNmQ0ZTJlMjA3IiwiaWF0IjoxNDY2MzMzMzMxfQ.k5-DqqbhokrNYl7KVTX3eLn4yiAmn9IrUN30Krr1Jm0";
    var bearerJustin = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoiNTc2NTUwMGQwZGM5Yjg4NTEyMDUxNjVjIiwicm9sZSI6InVzZXIiLCJwcmltYXJ5U3Vic2NyaWJlcktleSI6ImU0NGNiODgyNjcxYzRiYWZhYWE1NzY4NzA3MGQ4ZDlmIiwiaWF0IjoxNDY2MjYxMDU2fQ.PpZw76QSWlnBsZ3ttimJeongip2V7jxmRiQjOf79keo";

    var keyRoman = "defb9296062f4db5b55e01e6d4e2e207";
    var keyJustin = "e44cb882671c4bafaaa57687070d8d9f";

    var key = keyJustin;
    var bearer = bearerJustin;
    

    var id = Meteor.http.call("GET", "https://bluebank.azure-api.net/api/v0.6.3/customers", {
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "bearer": bearer
        }
    }).data[0].id;
    console.dir(id);


    Meteor.methods({
        getAccounts: function () {
            var customer = Meteor.http.call("GET", "https://bluebank.azure-api.net/api/v0.6.3/customers/" + id + "/accounts", {
                headers: {
                    "Ocp-Apim-Subscription-Key": key,
                    "bearer": bearer
                }
            }).data;
            return customer;
        },
        getInfo: function () {
            var customer = Meteor.http.call("GET", "https://bluebank.azure-api.net/api/v0.6.3/customers/" + id, {
                headers: {
                    "Ocp-Apim-Subscription-Key": key,
                    "bearer": bearer
                }
            }).data;
            return customer;
        },
        test: function () {
            return 'test';
        }
    });
});
