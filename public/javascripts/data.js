oboe('https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json')
  .node('!.features[*]', function(feature) {

    var count = document.querySelector('.count');
    count.textContent = Number(count.textContent) + 1;

    var dropNodes = /\?drop=true/.test(window.location.href);
    if (dropNodes) return oboe.drop;

  })
  .done(function(){

    var element = document.querySelector('#status-message');
    element.textContent = 'All data Loaded!';

  });
