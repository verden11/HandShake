import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';

import './main.html';
import './index.html';
import './handshake.html';
import './owed.html';
import './lent.html';
import './profile.html'

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    }
});

// Template.index.helpers({
//     name() {
//         return 'Nikita';
//     }
// });

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    }
});

Router.route('/', function () {
    this.render('index');
});

Router.route('/owed', function () {
    // $("body").removeClass().addClass("blue");
    this.render('owed');
});

Router.route('/lent', function () {
    this.render('lent');
});

Router.route('/handshake', function () {
    this.render('input');
});

Router.route('/profile', function () {
    this.render('profile');
});

//// for the reference
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

Template.index.onRendered(function () {

    Meteor.call('getAccounts', function (err, result) {
        console.dir(result);
        Session.set('ammount', result[0].accountBalance + " " + result[0].accountCurrency);
    });

    Meteor.call('getInfo', function (err, result) {
        console.dir(result);
        Session.set('name', result.givenName);
    });

});
Template.index.helpers({
    ammount: function () {
        return Session.get('ammount');
    },
    name: function () {
        return Session.get('name');
    }
});
