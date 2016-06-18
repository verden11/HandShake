import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    }
});

Template.main.helpers({
    name() {
        return 'Nikita';
    },
    ammount(){
        // get customer on page load up
        var ammount = 0;
        Meteor.call('getAccounts', function (err, response) {
            ammount = response[0].accountBalance;
            // Session.set('serverSimpleResponse', response);
            return ammount;
        });
        return ammount;
    }
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    }
});

Router.route('/', function () {
    this.render('main');
});

Router.route('/owedpage', function () {
    this.render('owedpage');
});

Router.route('/lentpage', function () {
    this.render('lentpage');
});

Router.route('/handshakepage', function () {
    this.render('handshakepage');
});

Router.route('/profilepage', function () {
    this.render('profilepage');
});


// Template.simple.events = {
//
//     'click input': function () {
//         Meteor.call('test', function (err, response) {
//             var x = response;
//             console.log(x);
//             Session.set('serverSimpleResponse', response);
//         });
//     }
// };
Meteor.call('getAccounts', function (err, response) {
            ammount = response[0].accountBalance;
            // Session.set('serverSimpleResponse', response);
            return ammount;
        });

Template.main.onRendered(function() {

        Meteor.call('getAccounts', function(err, result) {
            console.log(result);
            Session.set('ammount', result[0].accountBalance + " " + result[0].accountCurrency);
        });

});
Template.main.helpers({
    ammount: function() {
        return Session.get('ammount');
    }
});