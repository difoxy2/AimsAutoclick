  chrome.runtime.onInstalled.addListener(function() {
      
    chrome.storage.local.set({color: '#9aa757'}, function() {
      console.log('The color is green.');
    });
    
    chrome.storage.local.set({popup_idHightlighted: 0}, function() {});  
    
    chrome.storage.local.set({AloadStage: -1}, function() {});  
      
    chrome.storage.local.set({ApplicantIDSelected: 00000000}, function() {}); 
      
    chrome.storage.local.set({FullApplList: []}, function() {});  
      
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'banweb.cityu.edu.hk', schemes: ['https']},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
      
  });
