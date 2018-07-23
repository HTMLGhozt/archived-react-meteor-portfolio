import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Articles = new Mongo.Collection('articles');

if (Meteor.isServer) {
  /* eslint-disable-next-line func-names, prefer-arrow-callback */
  Meteor.publish('articles', function () {
    return Articles.find({});
  });
}

export const insert = {
  name: 'articles.insert',

  validate(args) {
    new SimpleSchema({
      title: { type: String },
      content: { type: String },
    }).validate(args);
  },

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
  call(args, callback) {
    const options = {
      returnStubValue: true,
      throwStubExceptions: true,
    };

    Meteor.apply(this.name, [args], options, callback);
  },
};

// export const update = {
//   name: 'articles.update',

//   validate(args) {
//     new SimpleSchema({
//       title: {
//         type: String,
//         optional: true,
//       },
//       content: {
//         type: String,
//         optional: true,
//       }
//     }).validate(args);
//   }
// }

Meteor.methods({
  [insert.name](args) {
    insert.validate.call(this, args);
    insert.run.call(this, args);
  },
});
