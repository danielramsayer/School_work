import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

this.Documents = new Mongo.Collection("documents");
console.log(Documents);

if (Meteor.isClient) {
  console.log("1");
  Template.editor.helpers({
    console.log("2");
    docid:function(){
      return Documents._collection.findOne()._id;
    }
  });
}

Meteor.startup(function() {
  if (!Documents.findOne()){
    Documents._collection.insert({title:"My new document!"});
  }
});

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
