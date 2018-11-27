const mongoose = require('mongoose');
mongoose.connect(require('../config.js').MONGO_URL, { useNewUrlParser: true }); // connect to mlab for deployment

const repoSchema = mongoose.Schema({
  repoid: { type: Number, unique: true },
  user:  String,
  description: String,
  html_url: String,
  image: String,
  date: Date
});

const termSchema = mongoose.Schema({
  term: { type: String, unique: true },
});

const userSchema = mongoose.Schema({
  // email: { type: String, unique: true },
  token: String,
  github_id: String,
  email: { type: String, unique: true },
  name: String,
  username: String,
  access_token: String,
});

const User = mongoose.model('User', userSchema);
const Term = mongoose.model('Term', termSchema);
const Repo = mongoose.model('Repo', repoSchema);

const saveUser = (user, token, cb) => {
  let newUser = new User({ token, github_id: user.id, email: user.email, name: user.name, username: user.login  });
  newUser.save((err) => {
    if (err) {
      cb(err);
    }
  });
};

const getUser = (email, cb) => {
  // console.log('Email in getUser:', email)
  User.find({ email }, (err, results) => {
    if (err) {
      console.error('err in getUser:', err);
      cb(err, null);
    } else {
      // console.log('results in getUser:', results);
      cb(null, results);
    }
  });
}
const saved = (term, repos) => {
  repos.body = JSON.parse(repos.body);
  repos.body = [repos.body];
  const searchedTerm = new Term({ term });
  searchedTerm.save(err => {
    if (err) console.error('err in saved for Term:', err);
  })
  repos.body[0].items.map(repo => {
    Repo.insertMany([{
      repoid: repo.id,
      user: repo.user.login, 
      name: repo.title, 
      description: repo.body,
      html_url: repo. html_url,
      image: repo.user.avatar_url,
      date: new Date(repo.created_at)
    }], (err) => {
      if (err) {
        console.error(`error in saved: ${err}`);
      }
    });
  }) 
}

const getInfo = (cb) => {
  Repo.find()
    .limit(100)
    .sort({date: -1})
    .exec(((err, docs) => {
      if (err) {
        console.error(`err in findById: ${err}`)
        cb(err, null);
      } else {
        cb(null, docs)
      }
  }));
}

module.exports = { saved, getInfo, saveUser, getUser };