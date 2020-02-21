// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
window.onload = function(){
    chrome.storage.local.get(['FullApplList'], function(data) {

        for (var i in data.FullApplList){
            document.getElementById("fullApplIDs").value += data.FullApplList[i] + "\n";
        }
            
    });
}


save.onclick = function (){
    chrome.storage.local.set({FullApplList: document.getElementById("fullApplIDs").value.trim().split(/\s+|\n+/g)}, function() {
        
        chrome.storage.local.set({popup_idHightlighted: 0}, function() {
            document.getElementById("save").innerHTML = "Well Saved!!";
        });
        
    });
}