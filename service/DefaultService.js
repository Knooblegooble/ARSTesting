'use strict';


/**
 * Retrieve all uploaded audio files
 *
 * returns List
 **/
exports.getAllAudioFiles = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fileName" : "fileName",
  "fileUrl" : "fileUrl"
}, {
  "fileName" : "fileName",
  "fileUrl" : "fileUrl"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a specific .mp3 audio file
 *
 * fileName String 
 * returns byte[]
 **/
exports.getAudioFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload an .mp3 audio file
 *
 * body Object 
 * returns inline_response_201
 **/
exports.uploadAudio = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "File uploaded successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

