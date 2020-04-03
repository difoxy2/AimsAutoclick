// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
window.onload = function() {
    
  chrome.storage.local.get(['popup_idHightlighted','FullApplList'], function(data) {
      
      //appending Full Applicant List
      for (i in data.FullApplList){
          var a = document.createElement("option");
          a.text = data.FullApplList[i];
          document.getElementById("applID").add(a);
      }
      
      
      //highlighting Last clicked item#
      document.getElementById("applID").options[data.popup_idHightlighted].setAttribute("style", "background-color: #bbbbff;");
  });

}

'use strict';



changeColor.onclick = function(element) {
    var temp = document.getElementById("Cinput").value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {Cbtn: temp});
                });
    
  };


applID.onchange = function applSelected() {
    chrome.storage.local.get(['popup_idHightlighted'], function(data) {
      document.getElementById("applID").options[data.popup_idHightlighted].removeAttribute("style");
  });

    //get the id being selected and store to storage
    chrome.storage.local.set({popup_idHightlighted: this.selectedIndex}, function() {
        
        chrome.storage.local.get(['popup_idHightlighted'], function(data) {
                //sending Message 'option.value' to contents page
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {IDselected: document.getElementById("applID").options[data.popup_idHightlighted].value});
                });
        });
                                            
        
    });
    
    
    
    
}