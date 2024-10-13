// let { dbs } = require(__dirname+"/_apostegrl.js")
let options = {
  temp: {
    type: Object,
    default: {}
  },
  rent: {
    type: Object,
    default: {}
  }
};
const mongoose = require("mongoose");
const Alive = new mongoose.Schema({
  'id': {
    'type': String,
    'unique': true,
    'required': true,
    'default': 'Suhail_Md'
  },
  'alive_text': {
    'type': String,
    'default': "*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : 𝔇𝔢𝔪𝔬𝔫 tєᴄʜ info_\n_If any query : wa.me/2347041039367_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*"
  },
  'alive_get': {
    'type': String,
    'default': "you did'nt set alive message yet\nType [.alive info] to get alive message information"
  },
  'alive_url': {
    'type': String,
    'default': ''
  },
  'alive_image': {
    'type': Boolean,
    'default': false
  },
  'alive_video': {
    'type': Boolean,
    'default': false
  },
  'antiviewonce': {
    'type': String,
    'default': "false"
  },
  'antidelete': {
    'type': String,
    'default': "false"
  },
  'autobio': {
    'type': String,
    'default': "false"
  },
  'levelup': {
    'type': String,
    'default': "true"
  },
  'anticall': {
    'type': String,
    'default': 'false'
  },
  'autoreaction': {
    'type': String,
    'default': "true"
  },
  'permit': {
    'type': Boolean,
    'default': false
  },
  'permit_values': {
    'type': String,
    'default': 'all'
  },
  'chatbot': {
    'type': String,
    'default': "false"
  },
  'bgm': {
    'type': Boolean,
    'default': false
  },
  'bgmarray': {
    'type': Object,
    'default': {}
  },
  'plugins': {
    'type': Object,
    'default': {}
  },
  'notes': {
    'type': Object,
    'default': {}
  },
  'mention': {
    'type': Object,
    'default': {}
  },
  'filter': {
    'type': Object,
    'default': {
      'suhail_': "yes bruh?"
    }
  },
  'afk': {
    'type': Object,
    'default': {}
  },
  ...options
});
const alive = mongoose.model("alive", Alive);
module.exports = {
  'alive': alive
};
