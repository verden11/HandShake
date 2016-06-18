import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

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

Template.body.helpers({
    name() {
      return 'Nikita';
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});

Router.route('/', function(){
  this.render('main');
});

Router.route('/owedpage', function(){
  this.render('owedpage');
});

Router.route('/lentpage', function(){
  this.render('lentpage');
});

Router.route('/handshakepage', function(){
  this.render('handshakepage');
});

Router.route('/profilepage', function(){
  this.render('profilepage');
});
