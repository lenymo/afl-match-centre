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

      var boxScoreColumns = [
        {
          className: 'player-name',
          title: 'Player Name',
          titleShort: 'player',
          count: false,
          value: null
        },
        {
          className: 'player-number',
          title: 'Player Number',
          titleShort: 'No.',
          count: false,
          value: null
        },
        {
          className: 'kicks',
          title: 'Kicks',
          titleShort: 'K',
          count: true,
          value: null
        },
        {
          className: 'handballs',
          title: 'Handballs',
          titleShort: 'H',
          count: true,
          value: null
        },
        {
          className: 'disposals',
          title: 'Disposals',
          titleShort: 'D',
          count: true,
          value: null
        },
        {
          className: 'contested-possessions',
          title: 'Contested Possessions',
          titleShort: 'CP',
          count: true,
          value: null
        },
        {
          className: 'uncontested-possessions',
          title: 'Uncontested Possessions',
          titleShort: 'UP',
          count: true,
          value: null
        },
        {
          className: 'disposal-efficiency',
          title: 'Disposal Efficency %',
          titleShort: 'DE%',
          count: false,
          value: null
        },
        {
          className: 'clangers',
          title: 'Clangers',
          titleShort: 'CLG',
          count: true,
          value: null
        },
        {
          className: 'marks',
          title: 'Marks',
          titleShort: 'M',
          count: true,
          value: null
        },
        {
          className: 'contested-marks',
          title: 'Contested Marks',
          titleShort: 'CM',
          count: true,
          value: null
        },
        {
          className: 'marks-inside-50',
          title: 'Marks Inside 50',
          titleShort: 'M50',
          count: true,
          value: null
        },
        {
          className: 'hitouts',
          title: 'Hitouts',
          titleShort: 'HO',
          count: true,
          value: null
        },
        {
          className: 'clearances',
          title: 'Total Clearances',
          titleShort: 'CLR',
          count: true,
          value: null
        },
        {
          className: 'centre-clearances',
          title: 'Centre Clearances',
          titleShort: 'CC',
          count: true,
          value: null
        },
        {
          className: 'stoppage-clearances',
          title: 'Stoppage Clearances',
          titleShort: 'ST',
          count: true,
          value: null
        },
        {
          className: 'rebound-50s',
          title: 'Rebounds 50s',
          titleShort: 'R50',
          count: true,
          value: null
        },
        {
          className: 'frees-for',
          title: 'Frees For',
          titleShort: 'FF',
          count: true,
          value: null
        },
        {
          className: 'frees-against',
          title: 'Frees Against',
          titleShort: 'FA',
          count: true,
          value: null
        },
        {
          className: 'tackles',
          title: 'Tackles',
          titleShort: 'T',
          count: true,
          value: null
        },
        {
          className: 'one-percenters',
          title: 'One Percenters',
          titleShort: '1%',
          count: true,
          value: null
        },
        {
          className: 'bounces',
          title: 'Bounces',
          titleShort: 'Bo',
          count: true,
          value: null
        },
        {
          className: 'inside50s',
          title: 'Inside 50s',
          titleShort: 'I50',
          count: true,
          value: null
        },
        {
          className: 'goals',
          title: 'Goals',
          titleShort: 'G',
          count: true,
          value: null
        },
        {
          className: 'behinds',
          title: 'Behinds',
          titleShort: 'B',
          count: true,
          value: null
        },
        {
          className: 'goal-assits',
          title: 'Goal Assists',
          titleShort: 'GA',
          count: true,
          value: null
        },
        {
          className: 'goal-accuracy',
          title: 'Goal Accuracy %',
          titleShort: 'G%',
          count: false,
          value: null
        },
        {
          className: 'time-on-ground',
          title: 'Time On Ground %',
          titleShort: 'TG%',
          count: false,
          value: null
        },
        {
          className: 'fantasy-points',
          title: 'AFL Fantasy Points',
          titleShort: 'AF',
          count: true,
          value: null
        },
      ];



      //
      //  WHEN SORTABLE TH IS CLICKED
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      $('#advanced-stats').on('mouseup', 'thead th', function(e) {
        console.log('.sortable was clicked');
        setTimeout(function() {
          addColumnClasses();
        }, 200);
      });



      //
      //  COLUMN HOVER
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      $('#advanced-stats').on('mouseenter', 'table td, table th', function(e) {
        var nthChild = $(this).index();
        var columnHoverClass = 'column-hovered';

        // If this isn't the name column.
        if ( ! $(this).hasClass('name') && ! $(this).hasClass('player') ) {
          $('#advanced-stats table td:nth-child(' + (nthChild + 1) + ')').addClass(columnHoverClass);
          $('#advanced-stats table th:nth-child(' + (nthChild + 1) + ')').addClass(columnHoverClass);
        }
      }); 

      $('#advanced-stats').on('mouseleave', 'table td, table th', function(e) {
        var nthChild = $(this).index();
        var columnHoverClass = 'column-hovered';

        // If this isn't the name column.
        if ( ! $(this).hasClass('name') && ! $(this).hasClass('player') ) {
          $('#advanced-stats table td:nth-child(' + (nthChild + 1) + ')').removeClass(columnHoverClass);
          $('#advanced-stats table th:nth-child(' + (nthChild + 1) + ')').removeClass(columnHoverClass);
        }
      });



      //
      //  MONITOR BOX SCORE
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function monitorBoxScore() {

        var boxScoreTable = '.match-centre#live-game #advanced-stats .module table';

        var target = document.querySelector( boxScoreTable );

        var observer = new MutationObserver(function( mutations ) {
          console.log('–––––––––––––––––––––––');
          console.log('New mutation observed.');

          var oldNodeClass = null;
          var oldText = null;
          var oldData = {};

          // Loop through the mutations.
          mutations.forEach(function( mutation ) {

            console.log('–––––––––––––––––––––––');
            console.log('mutation type: ' + mutation.type);
            console.log('mutation.removedNodes', mutation.removedNodes);

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

                console.log( '–––––––––––––––––––––––' );
                console.log('new node: ', $node);

                // If the changed element is a TD.
                if ( $node.is('td') ) {

                  // This class describes the stat type (i.e. pts, rebs, etc).
                  // It is pulled from each the <td> in the table.
                  var nodeClass = $node.attr('class');


                  // Get the new data.
                  var newText = $node.text();
                  // console.log( 'nodeClass' );

                  // If this isn't a player's name or a custom stat.
                  // We don't want to worry about names changing.
                  if ( !$node.hasClass('name') ) {

                    // If the new value is different to the previous value.
                    if ( newText !== oldData[nodeClass] ) {
                      console.log( '–––––––––––––––––––––––' );
                      console.log( 'SOMETHING CHANGED!!' );
                      console.log( '–––––––––––––––––––––––' );
                      console.log( 'Name: ', oldData.name );
                      console.log( 'nodeClass: ', nodeClass );
                      console.log( 'newText: ', newText );
                      console.log(  'oldData[nodeClass]: ', oldData[nodeClass] );
                      console.log( '–––––––––––––––––––––––' );

                      // Add a class to indicate that the data has changed.
                      $node.addClass('data-changed');

                      // After X seconds.
                      setTimeout(function() {

                        // Remove the class.
                        $node.removeClass('data-changed');
                      }, 10000);
                    }
                  } // if ( nodeClass !== 'name' )

                } // if ( $node.is('td') )
              }); // $nodes.each(function( i, e )
            } // if ( newNodes !== null )
          }); // mutations.forEach(function( mutation )
        }); // End of mutation 

        // Configuration of the observer:
        var config = { 
          childList: true,
          subtree: true,
          characterData: true,
          characterDataOldValue: true
        };
         
        // Pass in the target node, as well as the observer options
        observer.observe(target, config);
      } // monitorBoxScore()

      // If a match is live.
      if ( $('.match-centre#live-game').length > 0 ) {
        monitorBoxScore();
      }



      //
      //  ADD COLUMN CLASSES
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function addColumnClasses() {

        // Loop through all table body rows.
        $('#advanced-stats tbody tr').each(function(rowIndex, rowElem) {

          // Loop through all TDs.
          $(this).find('td').each(function(colIndex, colElem) {
            $(colElem).addClass( boxScoreColumns[colIndex].className );
          });
        });

        // Loop through all table header rows.
        $('#advanced-stats thead tr').each(function(rowIndex, rowElem) {

          // Loop through all THs.
          $(this).find('th').each(function(colIndex, colElem) {
            $(colElem).addClass( boxScoreColumns[colIndex].className );
            $(colElem).attr('title', boxScoreColumns[colIndex].title);
          });
        });
      }

      addColumnClasses();



      //
      //  ADD TOTALS ROW (AND COLUMNS)
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function addTotalsRow() {

        // Declare an empty variable with table footer HTML.
        var tableFooterHTML;
        tableFooterHTML = '<tfoot><tr class="totals">';

        var colClassName;
        var colTitle;

        // Loop through the box score columns object
        for ( var i = 0; i < boxScoreColumns.length; i++ ) {

          // If this is the first column (name).
          if ( i === 0 ) {
            colClassName = 'total';
            colTitle = 'Totals';

          // If this is the second column (number).
          } else if ( i === 1 ) {
            colClassName = boxScoreColumns[i].className;
            colTitle = '';

          // If this is any other columns.
          } else {
            colClassName = boxScoreColumns[i].className;
            colTitle = boxScoreColumns[i].title;
          }
          // console.log( boxScoreColumns[i].colClassName );
          tableFooterHTML += '<td class="' + colClassName + '" title="' + colTitle + '">';

          if ( i === 0 ) {
            tableFooterHTML += 'Team totals';
          }

          tableFooterHTML += '</td>';
        }

        tableFooterHTML += '</tr></tfoot>';
        

        $( tableFooterHTML ).insertAfter( $('#homeTeam-advanced tbody, #awayTeam-advanced tbody') );
      }

      addTotalsRow();




      //
      //  CALCULATE PLAYER STAT TOTALS
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function calculatePlayerStatTotals( homeOrAway ) {

        var boxScoreTable = '#advanced-stats #' + homeOrAway + 'Team-advanced';
        var boxScoreTableRow = boxScoreTable + ' tbody tr';

        var thisStat;
        var countThisStat;
        var statTotal;
        var playerName;

        var boxScoreColumnsCount = Object.keys( boxScoreColumns ).length;

        // console.log( boxScoreColumnsCount );

        // Loop through each column.
        for ( var i = 0; i < boxScoreColumnsCount; i++ ) {

          statTotal = 0;
          countThisStat = boxScoreColumns[i].count;

          // If this isn't the first or second column.
          if ( countThisStat ) {
            // Loop through each row of the table.
            $( boxScoreTableRow ).each(function(rowIndex, rowElement) {
              playerName = getName( $(this).find('name') );
              // console.log( playerName );

              thisStat = Number( $(this).find('td:nth-child(' + (i + 1) + ')' ).text() );

              statTotal = statTotal + thisStat;
              // console.log( boxScoreColumns[i].title + ' :' + statTotal );
            });

            $(boxScoreTable + ' tfoot td.' + boxScoreColumns[i].className ).text(statTotal);
          }
        }
      }

      calculatePlayerStatTotals( 'home' );
      calculatePlayerStatTotals( 'away' );



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
//  GET NAME
//––––––––––––––––––––––––––––––––––––––––––––––––––

function getName( elem ) {
  var name = elem.find('.full-name').text();
  return name;
}



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
