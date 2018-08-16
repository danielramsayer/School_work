import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
/*
Template.greeting.onCreated(function greetingOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.greeting.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.greeting.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
this.Documents = new Mongo.Collection("documents");

if (Meteor.isServer) {
  Meteor.startup(function () {
    //This code is run by the server on startup.
    if (!Documents.findOne()){ //if there isn't a document yet
      Documents.insert({title:"My new document."});
    }
  });
}
