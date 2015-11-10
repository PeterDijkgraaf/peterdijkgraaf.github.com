var dribbbleUsername = 'PeterDijkgraaf';
 
// Variable to hold the HTML we'll generate
var html = '';

// Load the shots via Dribbble's API
$.getJSON("http://api.dribbble.com/v1/users/"+ dribbbleUsername +"/shots?callback=?", function(data) {
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




// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4');

$.jribbble.shots('debuts', {
  'per_page': 36,
  'timeframe': 'month',
  'sort': 'views'
}).then(function(res) {
  var html = [];
  res.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});


