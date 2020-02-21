   

window.onload = function() {
  //get loadStage from Storage
  chrome.storage.local.get(['AloadStage','ApplicantIDSelected'], function(data) {

      console.log(data.AloadStage);

      
      if (data.AloadStage==0){
        chrome.storage.local.set({AloadStage: 1}, function() {}); //loadStage++  
        window.location.replace("https://banweb.cityu.edu.hk/pls/PROD/twbkwbis.P_GenMenu?name=amenu_cityu.P_CityuAdmMnu");
      }
      
      if(data.AloadStage==1){
        chrome.storage.local.set({AloadStage: 2}, function() {}); //loadStage++  
        document.getElementsByClassName("submenulinktext2")[8].click();
      }
      
      if(data.AloadStage==2){
        chrome.storage.local.set({AloadStage: 3}, function() {}); //loadStage++ 
        document.getElementsByName("hkid_appl_no")[4].value = data.ApplicantIDSelected;
        document.getElementsByName("Search")[0].click();       
      }
      
      if(data.AloadStage==3){
        chrome.storage.local.set({AloadStage: 4}, function() {}); //loadStage++ 
        document.getElementsByName("Select")[0].click();  
      }
      
      if(data.AloadStage==4){
        chrome.storage.local.set({AloadStage: 5}, function() {}); //loadStage++ 
        //document.querySelectorAll("a[href='/pls/PROD/hwsalist_cityu.P_DispFull_ADMO']")[0].click(); 
      }
      
      if(data.AloadStage==5){
        chrome.storage.local.set({AloadStage: 6}, function() {}); //loadStage++ 
        document.querySelectorAll("a[href='/pls/PROD/hwsalist_cityu.P_DispFull_ADMO']")[0].click(); 
      }
      
      
      
  });
}

//Receiving appl id from popup
chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
          
            chrome.storage.local.set({AloadStage: 0, ApplicantIDSelected: request.IDselected}, function() {   //loadStage = 0 
                
                console.log(request.IDselected);
                location.reload();
            }); 
            

      });
