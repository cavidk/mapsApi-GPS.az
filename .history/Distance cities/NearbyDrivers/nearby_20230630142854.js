function initMap(){
   const map = new google.maps.Map(document.getElementById("map"),{
      center: { lat: 40.37767, lng: 49.89201 },
      zoom : 8,
   });

   //Create a Places for service object
   const service = new google.maps.places.PlacesService(map);

   //Define the request parameters

   const request = {
      location: map.getCenter(),
      radius:1000, //Search radius in meters
      type: ["taxi_stand", "car rental"],
   };

   //send the nearby search request 

   service.nearbySearch(request, (results, status) => {
      if(status === google.maps.places.PlacesServiceStatus.OK) {
         for(let i = 0; i < SpeechRecognitionResultList.length;i++){
            const place = results[i];
            console.log(place);
            console.log("Name: " + place.name);
            console.log("Location: " + place.geometry.location.lat() + " , " + place.geometry.location.lng());

         }
      }
   });
}