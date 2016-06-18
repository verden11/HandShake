import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    console.log("Server Start up");

    Meteor.methods({
        getAccounts: function () {
            var customer = Meteor.http.call("GET", "https://bluebank.azure-api.net/api/v0.6.3/customers/5765500d0dc9b8851205165c/accounts", {
                headers: {
                    "Ocp-Apim-Subscription-Key": "e44cb882671c4bafaaa57687070d8d9f",
                    "bearer": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcklkIjoiNTc2NTUwMGQwZGM5Yjg4NTEyMDUxNjVjIiwicm9sZSI6InVzZXIiLCJwcmltYXJ5U3Vic2NyaWJlcktleSI6ImU0NGNiODgyNjcxYzRiYWZhYWE1NzY4NzA3MGQ4ZDlmIiwiaWF0IjoxNDY2MjYxMDU2fQ.PpZw76QSWlnBsZ3ttimJeongip2V7jxmRiQjOf79keo"
                }
            }).data;
            return customer;
        },
        test: function () {
            return 'test';
        }
    });
});
