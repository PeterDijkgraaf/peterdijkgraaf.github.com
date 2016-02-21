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
