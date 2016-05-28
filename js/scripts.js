// Scroll indicator on the blog
window.onload = function() {
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });

// Time travel function in the footer
 $(".timeline").on('click', function(){ 
      $( ".white_timeline" ).fadeIn( "slow", function() { });
    });
    $(".close_timeline").on('click', function(){ 
      $( ".white_timeline" ).fadeOut( "slow", function() { });
    });
    

    //Dribbbleshot loader
  $.jribbble.setToken('0651f8a18ae64d457869aa486952cee1afc683da3d0c57ff4eeea8fb3657c7b7');

  $.jribbble.users('PeterDijkgraaf').shots({per_page: 4}).then(function(shots) {
    var html = [];
    
    shots.forEach(function(shot) {
      html.push('<li class="shots--shot">');
      html.push('<a href="' + shot.html_url + '" target="_blank">');
      html.push('<img src="' + shot.images.normal + '">');
      html.push('</a></li>');
    });
    
    $('.shots').html(html.join(''));
  });


// Instagram intergration

// var feed = new Instafeed({
//     get: 'user',
//     userId: 94764,
//     accessToken: '40f0d8f4a0724c389b1a5fa8f4ba3060',
//     target: 'instagram',
//     resolution: 'standard_resolution',
//     after: function() {
//       var el = document.getElementById('instagram');
//       if (el.classList)
//         el.classList.add('show');
//       else
//         el.className += ' ' + 'show';
//     }
// });

 var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: '1d3bdd4b6f5c4ca7b97bf4d4f92e5af6'
    });

window.onload = function() {

  feed.run();
};
};