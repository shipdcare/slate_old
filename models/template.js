var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var templateSchema = new Schema({
    title: { type: [String], index: true } ,
    type: { type: [String], index: true } ,
    objects: []

}, { timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
}});

var Template = mongoose.model('Template', templateSchema);

module.exports.Template = Template;