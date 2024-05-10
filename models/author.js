const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define schema
const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
    let fullName = "";
    if (this.first_name && this.last_name) {
        fullName = `${this.first_name}, ${this.last_name}`;
    }
    return fullName;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function() {
    return `/catalog/author/${this._id}`
});

AuthorSchema.virtual("birthYear").get(function () {
  return this.date_of_birth ? this.date_of_birth.getFullYear() : null;
});

AuthorSchema.virtual("deathYear").get(function () {
  return this.date_of_death ? this.date_of_death.getFullYear() : null;
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;