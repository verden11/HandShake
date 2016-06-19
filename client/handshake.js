import { Template } from 'meteor/templating';

import './main.html';


var user = {
    "name": "Justin",
    "surname": "Alisauskas",
    "recipients": ["Nikita", "Reigis", "JP", "Roman"]
};

Template.input.helpers({
    recipients: function(){
        return user.recipients;
    }
});

Template.input.rendered=function() {
    $('#my-datepicker').datepicker();
};

Template.input.events({
    'click .new-handshake'(e) {
        // Prevent default browser form submit
        e.preventDefault();
        var handshake_info = {
            recipient: null,
            amount: $('#amount').val(),
            date: $('#date').val(),
            message: $('#message').val()
        };

        console.log(handshake_info);

    }
});