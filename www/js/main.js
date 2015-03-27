
    // JavaScript Document\\

document.addEventListener("DOMContentLoaded", function(){
    
   // alert("DOMCont");
   

  document.addEventListener("deviceready", onDeviceReady, false);
    
});    

function onDeviceReady(){
  // Now safe to use the PhoneGap API

      //alert("deviceread");
if( navigator.contacts ){      
      
    
            //alert("after if statement");
   function successFunc( matches ){
    
        var output = document.getElementById('homeContent');
        output.innerHTML += ' <ul id="contactList"></ul>';
       var contacts = [];
       var strContacts = JSON.stringify( contacts );
       localStorage.setItem("allContacts", strContacts);
       
  for( var i=0; i<matches.length; i++){
       if (i == 12) {
         break;
      }else{
     var listItems = document.getElementById('contactList');
        listItems.innerHTML += "</br><li id='listElement"+i+"'>" + matches[i].displayName + "</li>";  
          
           var contactArray= JSON.parse( localStorage.getItem("allContacts") );
          var myContact = {};
          myContact.id = i;
          myContact.name = matches[i].displayName;
          myContact.lat = "";
          myContact.lng = "";
          myContact.numbers = [];
          if (matches[i].phoneNumbers) {
              for (var j=0; j<2; j++) {
                  var myNumber = {};
                  myNumber[matches[i].phoneNumbers[j].type] = matches[i].phoneNumbers[j].value;
                  myContact.numbers.push(myNumber);
              }
          }
          
          contactArray.push(myContact);
          
          var strContacts = JSON.stringify( contactArray );
          //console.log(strContacts);
          localStorage.setItem("allContacts", strContacts );
        
          
      }
     
  }
    
 
 
     var touchListener = document.getElementById('contactList');
     var mc = new Hammer(contactList);
     mc.on(" tap doubletap", function(ev) {
          
      if( ev.type == "tap"){
          
       setTimeout(function(){
        // var localS =  localStorage.getItem( "allContacts" );
          // console.log(localS);
         modal = document.getElementById("single");
         modal.style.display = "block";
          
      if (ev.target.id == "listElement0"){
          var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[0].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[0].phoneNumbers[0].type + ' ' + matches[0].phoneNumbers[0].value +  '</p><p>' + matches[0].phoneNumbers[1].type + ' ' + matches[0].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement1"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[1].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[1].phoneNumbers[0].type + ' ' + matches[1].phoneNumbers[0].value +  '</p><p>' + matches[1].phoneNumbers[1].type + ' ' + matches[1].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement2"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[2].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[2].phoneNumbers[0].type + ' ' + matches[2].phoneNumbers[0].value +  '</p><p>' + matches[2].phoneNumbers[1].type + ' ' + matches[2].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement3"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[3].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[3].phoneNumbers[0].type + ' ' + matches[3].phoneNumbers[0].value +  '</p><p>' + matches[3].phoneNumbers[1].type + ' ' + matches[3].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement4"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[4].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[4].phoneNumbers[0].type + ' ' + matches[4].phoneNumbers[0].value +  '</p><p>' + matches[4].phoneNumbers[1].type + ' ' + matches[4].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement5"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[5].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[5].phoneNumbers[0].type + ' ' + matches[5].phoneNumbers[0].value +  '</p><p>' + matches[5].phoneNumbers[1].type + ' ' + matches[5].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement6"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[6].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[6].phoneNumbers[0].type + ' ' + matches[6].phoneNumbers[0].value +  '</p><p>' + matches[6].phoneNumbers[1].type + ' ' + matches[6].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement7"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[7].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[7].phoneNumbers[0].type + ' ' + matches[7].phoneNumbers[0].value +  '</p><p>' + matches[7].phoneNumbers[1].type + ' ' + matches[7].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement8"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[8].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[8].phoneNumbers[0].type + ' ' + matches[8].phoneNumbers[0].value +  '</p><p>' + matches[8].phoneNumbers[1].type + ' ' + matches[8].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement9"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[9].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[9].phoneNumbers[0].type + ' ' + matches[9].phoneNumbers[0].value +  '</p><p>' + matches[9].phoneNumbers[1].type + ' ' + matches[9].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement10"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[10].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[10].phoneNumbers[0].type + ' ' + matches[10].phoneNumbers[0].value +  '</p><p>' + matches[10].phoneNumbers[1].type + ' ' + matches[10].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else if(ev.target.id == "listElement11"){ var output1 = document.getElementById('single');
        output1.innerHTML = '</br><p>Contact Name:</p><p>' + matches[11].displayName + '</p>';
          var output2 = document.getElementById('single');
        output2.innerHTML += '</p></br><p>Phone Numbers:</p></br<p>' + matches[11].phoneNumbers[0].type + ' ' + matches[11].phoneNumbers[0].value +  '</p><p>' + matches[11].phoneNumbers[1].type + ' ' + matches[11].phoneNumbers[1].value +  '</p></br><small>Double Tap to Close</small>';
      }
           else {modul = document.getElementById("single");
         modul.style.display = "none";}
         
      }, 350);     
          
          
      }else{
          
        homePage = document.getElementById("homeContent");
        homePage.style.display = "none";
        modul = document.getElementById("single");
        modul.style.display = "none";
          
          var output = document.getElementById('map');
        //output.innerHTML = '<div id="theMap"/>';
          
        mapPage = document.getElementById("mapContent");
        mapPage.style.display = "block";  
      
    if( navigator.geolocation ){ 
        
    var params = {enableHighAccuracy: true, timeout:10000, maximumAge:0};
navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
     //console.log("navagator.geolocation.GetCurrentPosition works");
        
    }
         
    else{
     
     var element = document.createElement("p");
     var text = document.createTextNode("Sorry Geolocation NOT Supported...");
        element.appendChild(text);

    var paragraph = document.getElementById('homeContent');
        paragraph.appendChild(element);
        
    }
        
    function reportPosition(position){ 
      
       //console.log('reportPostion called');
        
        
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
       
        //console.log(lat);
       // console.log(long);
        
      var mapOptions ={
          center:new google.maps.LatLng(lat, long),
          zoom:14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
       
    var localPoint = new google.maps.LatLng(lat, long);

    var userMarker = new google.maps.Marker({
    position: localPoint,
    title:"You are here!"
    });
        
    userMarker.setMap(map); //set to map
    //marker.setMap(null); remove from map
        
//    map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//    google.maps.event.addListener(map, 'click', function(event) {
//    placeMarker(event.latLng);
//    });
//
//     var touchListener = document.getElementById('map');
//     var mc = new Hammer(map);
//        mc.on("doubletap", function(event) {
//        
//        });
//
//
//    function placeMarker(location) {
//    var marker = new google.maps.Marker({
//    position: location,
//    animation: google.maps.Animation.BOUNCE,
//    map: map
//    });
//    }
        
        
    }

    function gpsError( error ){   
      var errors = {
          1: 'Permission denied',
          2: 'Position unavailable',
          3: 'Request timeout'
    };
      alert("Error: " + errors[error.code]);
    }    
          
      }
          
      });
  
     var touchListener = document.getElementById('single');
     var mc = new Hammer(single);
     mc.on("doubletap", function(ev) {
     
         modal = document.getElementById("single");
         modal.style.display = "none";
     
     });
       
     var touchListener = document.getElementById('backBtn');
     var mc = new Hammer(backBtn);
     mc.on("tap", function(ev) {
     
         homePage = document.getElementById("homeContent");
         homePage.style.display = "block";
         mapPage = document.getElementById("mapContent");
         mapPage.style.display = "none";
         modul = document.getElementById("single");
         modul.style.display = "none";
         
     
     });   
      
}
          
       function errFunc (){
           alert("errFunc");
       }
        
    var options = new ContactFindOptions( );
        //alert("varoptions");
      options.filter = "";  
      options.multiple = true;
      var filter = ["displayName"];
      navigator.contacts.find(filter, successFunc, errFunc, options);
        
    }
    
    else{
        
        //alert("not supported");
     
     var element = document.createElement("p");
     var text = document.createTextNode("Sorry Contacts NOT Supported...");
        element.appendChild(text);

    var paragraph = document.getElementById('conContent');
        paragraph.appendChild(element);
          
      }
   
    //ev.target.className = "active";
      
  

};  
                          
                      