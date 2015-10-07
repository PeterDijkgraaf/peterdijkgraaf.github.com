/*
 * LOAD DRIBBBLE SHOTS
 */
 
// What user are we using?
var dribbbleUsername = 'PeterDijkgraaf';
 
// Variable to hold the HTML we'll generate
var html = '';

// Load the shots via Dribbble's API
$.getJSON("http://api.dribbble.com/players/"+ dribbbleUsername +"/shots?callback=?", function(data) {
    // Do something with the result here
    // how many shots we're displaying on the page
		var numberOfShots = 4;
		 
		// Loop over the results, generating the HTML for each <li> item
		for (i=0; i<numberOfShots; i++) {
		    html += '<li>';
		    html += '<a target="_blank" href="'+ data.shots[i].url +'">';
		    html += '<img src="' + data.shots[i].image_url + '" alt="'+ data.shots[i].title +'" />';
		    html += '</a>';
		    html += '</li>';
		}
		 
		// Insert the generated HTML to the DOM
		$('.shots').html(html);
});