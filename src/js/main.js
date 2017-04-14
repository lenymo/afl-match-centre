//
//  APP JS
//––––––––––––––––––––––––––––––––––––––––––––––––––

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {

      clearInterval(readyStateCheckInterval);

      // $('.mc-tabs li').each(function(i, e) {
      //   console.log('text: ' + $(this).find('a').text());
      //   if ( $(this).find('a').text() == 'Full-time stats' ) {
      //     $('.mc-tabs li').removeClass('ui-tabs-selected');
      //     $('.mc-tabs li').removeClass('ui-state-active');
      //     $(this).addClass('ui-tabs-selected');
      //     $(this).addClass('ui-state-active');
      //   }
      // });

      // }); // $(document).ready(function()
    } // if (document.readyState === 'complete')


    




    //
    //  PAGE PARTIALLY LOADED FUNCTIONS
    //––––––––––––––––––––––––––––––––––––––––––––––––––

    // If page is partly loaded.
    if (document.readyState === 'interactive') {

      // Something something...

    } // if (document.readyState === 'interactive')
  }, 10); // readyStateCheckInterval = setInterval(function()
});




//
//  COOKIE FUNCTIONS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Modified from: http://4rapiddev.com/javascript/jquery-show-popup-once-a-day/

function createCookie( name, value, days ) {
  // Checks for the optional days parameter.
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = '; expires='+date.toGMTString();
  }
  else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie( name ) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie( name ) {
  createCookie(name,'',-1);
}
