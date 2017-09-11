'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
// var mongoose = require('mongoose');
// var dataSchema = new mongoose.Schema({
//   name: String,
//   sex: String,
//   height: Number,
//   behave: String,
//   meta: {
//     createAt: {
//       type: Date,
//       default: Date.now()
//     },
//     updateAt: {
//       type: Date,
//       default: Date.now()
//     }
//   }
// });

// dataSchema.pre('save', function (next) {
//   if (this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now();
//   } else {
//     this.meta.updateAt = Date.now();
//   }
//   next();
// });
// dataSchema.statics = {
//   fetch: function (cb) {
//     return this
//     .find({})
//     .sort('meta.updateAt');
//     exec(cb);
//   },
//   findById: function (id, cb) {
//     return this
//     .findOne({_id: id});
//     exec(cb);
//   }
// };
// module.exports = mongoose.model('data', dataSchema);
