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


      var boxScoreTable = '#advanced-stats .module table';

      var target = document.querySelector( boxScoreTable );

      var observer = new MutationObserver(function( mutations ) {
        // console.log('–––––––––––––––––––––––');
        // console.log('New mutation observed.');

        var oldNodeClass = null;
        var oldText = null;
        var oldData = {};

        // Loop through the mutations.
        mutations.forEach(function( mutation ) {

          // console.log('–––––––––––––––––––––––');
          // console.log('mutation type: ' + mutation.type);
          // console.log('mutation.removedNodes', mutation.removedNodes);

          // DOM NodeList.
          var newNodes = mutation.addedNodes;

          // If there are new nodes added.
          if ( newNodes !== null ) {

            // jQuery set.
            var $nodes = $( newNodes );

            // If there are old nodes.
            if ( mutation.removedNodes.length > 0 ) {
              // console.log( 'mutation.removedNodes', mutation.removedNodes );
              var $removedNodes = $(mutation.removedNodes);

              oldData = null;
              oldData = {};

              // Loop through removed nodes.
              $removedNodes.each(function(i, e) {

                // If the removed node is a td.
                if ( $(this).is('td') ) {
                  // If the text is not just white space.
                  if ( $(this).text().trim() !== '' ) {

                    // Find out what type of element this is.
                    oldNodeClass = $(this).attr('class');

                    // If this is the name td.
                    if ( oldNodeClass == 'name' ) {

                      // Find the name (because it's not raw text in the td).
                      oldData[oldNodeClass] = getName( $(this) );

                    // If this is NOT the name td.
                    } else {

                      // Grab the data straight from the td.
                      oldText = $(this).text();

                      // Add this stat to the oldData object.
                      oldData[oldNodeClass] = oldText;
                    }
                    // oldData[oldText] = oldText;
                    // console.log( 'old class: ', $(this).attr('class') );
                    // console.log( 'old text: ', $(this).text() );
                  } // if ( $(this).text().trim() !== '' )
                }
              }); // $removedNodes.each(function(i, e)
              // console.log( 'oldData: ', oldData );
            } // if ( mutation.removedNodes.length > 0 )


            // Loop through all new nodes.
            $nodes.each(function( i, e ) {

              // jQuery set.
              var $node = $( this );

              // If the changed element is a TD.
              if ( $node.is('td') ) {

                // This class describes the stat type (i.e. pts, rebs, etc).
                // It is pulled from each the <td> in the table.
                var nodeClass = $node.attr('class');

                // If there's a class on the node.
                if ( nodeClass ) {

                  // Get the new data.
                  var newText = $node.text();
                  // console.log( 'nodeClass' );

                  // If this isn't a player's name or a custom stat.
                  // We don't want to worry about names changing.
                  if ( !$node.hasClass('name') && !$node.hasClass('custom-stat') ) {

                    // If the new value is different to the previous value..
                    if ( newText !== oldData[nodeClass] ) {
                      // console.log( '–––––––––––––––––––––––' );
                      // console.log( 'SOMETHING CHANGED!!' );
                      // console.log( '–––––––––––––––––––––––' );
                      // console.log( 'Name: ', oldData.name );
                      // console.log( 'nodeClass: ', nodeClass );
                      // console.log( 'newText: ', newText );
                      // console.log(  'oldData[nodeClass]: ', oldData[nodeClass] );
                      // console.log( '–––––––––––––––––––––––' );

                      // Add a class to indicate that the data has changed.
                      $node.addClass('data-changed');

                      // After X seconds.
                      setTimeout(function() {

                        // Remove the class.
                        $node.removeClass('data-changed');
                      }, 10000);
                    }
                  } // if ( nodeClass !== 'name' )
                } // if ( nodeClass )

              } // if ( $node.is('td') )
            }); // $nodes.each(function( i, e )
          } // if ( newNodes !== null )
        }); // mutations.forEach(function( mutation )
      }); // End of mutation 

      // Configuration of the observer:
      var config = { 
        childList: true,
        subtree: true,
        // attributes: true,
        // attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true
      };
       
      // Pass in the target node, as well as the observer options
      observer.observe(target, config);

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
