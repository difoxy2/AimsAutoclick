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
      document.getElementById("applID").options[data.popup_idHightlighted].setAttribute("style", "background-color: aliceblue;");
  });

}

'use strict';
/*
let changeColor = document.getElementById('changeColor');
chrome.storage.local.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});


changeColor.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = tabs[0];
     var activeTabId = activeTab.id; // or do whatever you need
        console.log(activeTab.url);
        chrome.tabs.update(activeTabId, {url: "https://banweb.cityu.edu.hk/pls/PROD/twbkwbis.P_GenMenu?name=amenu_cityu.P_CityuAdmMnu"});
        

                
                chrome.tabs.query({status: "complete"}, function(tabs) {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
                                                                                      });
                                                                        })
                                                               
        
        
});
 

  };
*/

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