// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

exports.defineManualTests = function(rootEl, addButton) {
  addButton('Query state', function() {
    var detectionIntervalInSeconds = 10;
    var queryStateCallback = function(state) {
      console.log('State: ' + state);
    };
    chrome.idle.queryState(detectionIntervalInSeconds, queryStateCallback);
  });

  // TODO(maxw): Allow the detection interval to be set in a textbox.
  addButton('Change detection interval to 10 seconds', function() {
    chrome.idle.setDetectionInterval(10);
    console.log('Detection interval set to 10 seconds.');
  });

  addButton('Change detection interval to 60 seconds', function() {
    chrome.idle.setDetectionInterval(60);
    console.log('Detection interval set to 60 seconds.');
  });

  // Add a status-change listener.
  var stateListener = function(state) {
    console.log('State changed: ' + state);
  };
  chrome.idle.onStateChanged.addListener(stateListener);
};
