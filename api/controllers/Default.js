'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getAllAudioFiles = function getAllAudioFiles (req, res, next) {
  Default.getAllAudioFiles()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAudioFile = function getAudioFile (req, res, next, fileName) {
  Default.getAudioFile(fileName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadAudio = function uploadAudio (req, res, next, body) {
  Default.uploadAudio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
