jQuery(document).ready(function($){
	
	var latitude = 40.67245, 
      longitude = -73.96829,
		map_zoom = 12;

	//google map custom marker icon
		var marker_url = 'https://www.dropbox.com/s/0vchtajg3veih1e/marker.png?raw=1';
		
	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: true,
      	mapTypeControl: false,
      	streetViewControl: true,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: 
        [
            {"featureType":"all","elementType":"all","stylers":[{"hue":"#e7ecf0"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#636c81"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#636c81"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#f1f4f6"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"color":"#496271"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-70}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#c6d3dc"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#898e9b"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3eaf8"}]}
        ]
    }

    //inizialize the map
	var map = new google.maps.Map(document.getElementById('maps'), map_options);
	//add a custom marker to the map				
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
         icon: marker_url, 
         animation:google.maps.Animation.BOUNCE
	});

});