import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

export const Articles = new Mongo.Collection('articles');

if (Meteor.isServer) {
  /* eslint-disable-next-line func-names, prefer-arrow-callback */
  Meteor.publish('articles', function () {
    return Articles.find({});
  });
}

export const insert = new ValidatedMethod({
  name: 'articles.insert',

  validate: new SimpleSchema({
    title: { type: String },
    content: { type: String },
  }).validator(),

  run({ title, content }) {
    if (!title.length || !content.length) {
      throw new Meteor.Error(
        422,
        'Must have title and content to insert!',
        `title: ${title}, content: ${content}`,
      );
    }

    Articles.insert({
      title,
      content,
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
});
