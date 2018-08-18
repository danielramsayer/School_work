import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

const Documents = new Mongo.Collection("documents");
console.log(Documents);

if (!Meteor.isServer) {
  console.log("Meteor is not the server");
}

if (Meteor.isServer) {
  console.log("Server is running");
  Meteor.startup(function () {
    console.log("startup is running");
    if (!Documents.findOne()){
      console.log("findone exists");
      Documents.insert({title:"My new document"});
    }
  });
}

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
