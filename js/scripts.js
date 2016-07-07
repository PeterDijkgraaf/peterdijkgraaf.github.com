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


// 500px intergration
  
  $(function() {
      _500px.init({
          sdk_key: 'e5fa258c39349698c234ecb9815d5e12e8c20d86'   //replace with your 500px js sdk key
      });

      // Get my user id
      _500px.api('/users', function(response) {
          var me = "PeterDijkgraaf";
          var siteurl = "http://500px.com/photo/"

          // Get my favorites
          _500px.api('/photos', {
              feature: 'user',
              username: me,
              image_size: 6,
              total_items: 5000
          }, function(response) {
              if (response.data.photos.length == 0) {
                  alert('Nothing found! Please refresh...');
              } else {
                  $.each(response.data.photos, function() {
                      $('#grid').append('<article><a href="http://www.instagram.com/peterdijkgraaf" target="_blank"><img src="' + this.image_url + '"></a><p>' + this.name + '</p></article>');
                  });
              }
          });
      });
  });

};