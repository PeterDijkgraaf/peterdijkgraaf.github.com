$.jribbble.setToken('f180107c1ee6e7ad171f48e7776eb601f07a1de51926a41ad7418f30bdc9acb5');

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
