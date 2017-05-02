//
//  APP JS
//––––––––––––––––––––––––––––––––––––––––––––––––––

chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {

      clearInterval(readyStateCheckInterval);

      var basicStatsColumns = [
        {
          className: 'player-name',
          title: 'Player Name',
          titleShort: 'player',
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
          className: 'marks',
          title: 'Marks',
          titleShort: 'M',
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
          className: 'fantasy-points',
          title: 'AFL Fantasy Points',
          titleShort: 'AF',
          count: true,
          value: null
        },
      ];

      var advancedStatsColumns = [
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
          count: true,
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
          // addColumnClasses();
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

      $('#basic-stats').on('mouseenter', 'table td, table th', function(e) {
        var nthChild = $(this).index();
        var columnHoverClass = 'column-hovered';

        // If this isn't the name column.
        if ( ! $(this).hasClass('name') && ! $(this).hasClass('player') ) {
          $('#basic-stats table td:nth-child(' + (nthChild + 1) + ')').addClass(columnHoverClass);
          $('#basic-stats table th:nth-child(' + (nthChild + 1) + ')').addClass(columnHoverClass);
        }
      }); 

      $('#basic-stats').on('mouseleave', 'table td, table th', function(e) {
        var nthChild = $(this).index();
        var columnHoverClass = 'column-hovered';

        // If this isn't the name column.
        if ( ! $(this).hasClass('name') && ! $(this).hasClass('player') ) {
          $('#basic-stats table td:nth-child(' + (nthChild + 1) + ')').removeClass(columnHoverClass);
          $('#basic-stats table th:nth-child(' + (nthChild + 1) + ')').removeClass(columnHoverClass);
        }
      });



      //
      //  MONITOR BOX SCORE
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function monitorBoxScore() {

        var boxScoreTable = '.match-centre#live-game #basic-stats .module table';

        var target = document.querySelector( boxScoreTable );

        var observer = new MutationObserver(function( mutations ) {
          // console.log('–––––––––––––––––––––––');
          // console.log('New mutation observed.');

          var oldNodeClass = null;
          var oldText = null;
          var oldData = [];

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

                // console.log( '$removedNodes.length: ' + $removedNodes.length );

                oldData = null;
                oldData = [];

                // Loop through removed nodes.
                $removedNodes.each(function(i, e) {

                  // If the removed node is a tr.
                  if ( $(this).is('tr') ) {

                    // Grab the removed TDs.
                    var $removedTDs = $(this).find('td');

                    // If this TR has TD children (i.e. it's not a header).
                    if ( $removedTDs.length > 0 ) {

                      // Loop through the removed TDs.
                      $removedTDs.each(function(removedIndex, removedElem) {

                        // Grab the individual TD.
                        var $removedTD = $(this);

                        // If the text is not just white space.
                        if ( $removedTD.text().trim() !== '' ) {

                          // If this is the name column.
                          if ( $(this).hasClass('name') ) {
                            oldText = getName( $(this) );
                          } else {
                            // Grab the data straight from the td.
                            oldText = $(this).text();
                          }


                          // Add this stat to the oldData object.
                          oldData.push(oldText);
                          // oldData[oldText] = oldText;
                          // console.log( 'old class: ', $(this).attr('class') );
                          // console.log( 'old text: ', $(this).text() );
                        } // if ( $removedTDs.text().trim() !== '' )
                      }); // $removedTDs.each(function()
                    } // if ( $removedTDs.length > 0 )

                  } // if ( $(this).is('tr') )
                }); // $removedNodes.each(function(i, e)
                console.log( 'oldData: ', oldData );
              } // if ( mutation.removedNodes.length > 0 )


              // Loop through all new nodes.
              $nodes.each(function( i, e ) {

                // jQuery set.
                var $node = $( this );

                // console.log( '–––––––––––––––––––––––' );
                // console.log( 'new node: ', $node );

                // If the changed element is a TD.
                if ( $node.is('tr') ) {

                  // This class describes the stat type (i.e. pts, rebs, etc).
                  // It is pulled from each the <td> in the table.
                  var nodeClass = $node.attr('class');

                  var $nodeTDs = $node.find('td');

                  calculateBasicStatTotals('home');
                  calculateBasicStatTotals('away');

                  // console.log( 'Name: ', $nodeTDs.find('.full-name').text() );
                  
                  $nodeTDs.each(function(tdIndex, tdElem) {
                    
                    // Instantiate individual TD.
                    var $nodeTD = $(this);

                    var newText = $nodeTD.text();

                    // If this isn't a player's name or a custom stat.
                    // We don't want to worry about names changing.
                    if ( !$nodeTD.hasClass('name') ) {

                      // If the new value is different to the previous value.
                      if ( newText !== oldData[tdIndex] ) {
                        // console.log( '–––––––––––––––––––––––' );
                        // console.log( 'SOMETHING CHANGED!!' );
                        // console.log( '–––––––––––––––––––––––' );
                        // console.log( 'Player Name: ', oldData[0] );
                        // console.log( 'Stat: ', basicStatsColumns[tdIndex].title );
                        // console.log( 'oldText: ', oldData[tdIndex] );
                        // console.log( 'newText: ', newText );
                        // console.log( '–––––––––––––––––––––––' );

                        // Add a class to indicate that the data has changed.
                        // $nodeTD.addClass('data-changed');

                        // After X seconds.
                        // setTimeout(function() {

                          // Remove the class.
                          // $nodeTD.removeClass('data-changed');
                        // }, 10000);
                      }
                    } // if ( nodeClass !== 'name' )
                  });

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

      // Add classes to each TD and TH within the stat table (i.e. marks-inside-50).

      function addColumnClasses() {

        // Loop through all table body rows.
        $('#advanced-stats tbody tr').each(function(rowIndex, rowElem) {

          // Loop through all TDs.
          $(this).find('td').each(function(colIndex, colElem) {
            $(colElem).addClass( advancedStatsColumns[colIndex].className );
          });
        });

        // Loop through all table header rows.
        $('#advanced-stats thead tr').each(function(rowIndex, rowElem) {

          // Loop through all THs.
          $(this).find('th').each(function(colIndex, colElem) {
            $(colElem).addClass( advancedStatsColumns[colIndex].className );
            $(colElem).attr('title', advancedStatsColumns[colIndex].title);
          });
        });
      }

      // addColumnClasses();



      //
      //  ADD BASIC STAT TOTALS ROW
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      // Appends a table footer to the bottom of the advanced stats table.

      function addBasicStatTotalsRow() {

        // Declare an empty variable with table footer HTML.
        var tableFooterHTML;
        tableFooterHTML = '<tfoot><tr class="totals">';

        var colClassName;
        var colTitle;

        // Loop through the box score columns object
        for ( var i = 0; i < basicStatsColumns.length; i++ ) {

          // If this is the first column (name).
          if ( i === 0 ) {
            colClassName = 'total';
            colTitle = 'Totals';

          // If this is the second column (number).
          } else if ( i === 1 ) {
            colClassName = basicStatsColumns[i].className;
            colTitle = '';

          // If this is any other columns.
          } else {
            colClassName = basicStatsColumns[i].className;
            colTitle = basicStatsColumns[i].title;
          }
          // console.log( basicStatsColumns[i].colClassName );
          tableFooterHTML += '<td class="' + colClassName + '" title="' + colTitle + '">';

          if ( i === 0 ) {
            tableFooterHTML += 'Team totals';
          }

          tableFooterHTML += '</td>';
        }

        tableFooterHTML += '</tr></tfoot>';
        

        $( tableFooterHTML ).insertAfter( $('#homeTeam-basic tbody, #awayTeam-basic tbody') );
      }

      addBasicStatTotalsRow();



      //
      //  ADD ADVANCED STAT TOTALS ROW
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      // Appends a table footer to the bottom of the advanced stats table.

      function addAdvancedStatTotalsRow() {

        // Declare an empty variable with table footer HTML.
        var tableFooterHTML;
        tableFooterHTML = '<tfoot><tr class="totals">';

        var colClassName;
        var colTitle;

        // Loop through the box score columns object.
        for ( var i = 0; i < advancedStatsColumns.length; i++ ) {

          // If this is the first column (name).
          if ( i === 0 ) {
            colClassName = 'total';
            colTitle = 'Totals';

          // If this is the second column (number).
          } else if ( i === 1 ) {
            colClassName = advancedStatsColumns[i].className;
            colTitle = '';

          // If this is any other columns.
          } else {
            colClassName = advancedStatsColumns[i].className;
            colTitle = advancedStatsColumns[i].title;
          }
          // console.log( advancedStatsColumns[i].colClassName );
          tableFooterHTML += '<td class="' + colClassName + '" title="' + colTitle + '">';

          if ( i === 0 ) {
            tableFooterHTML += 'Team totals';
          }

          tableFooterHTML += '</td>';
        }

        tableFooterHTML += '</tr></tfoot>';
        

        $( tableFooterHTML ).insertAfter( $('#homeTeam-advanced tbody, #awayTeam-advanced tbody') );
      }

      addAdvancedStatTotalsRow();





      //
      //  CALCULATE BASIC STAT TOTALS
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function calculateBasicStatTotals( homeOrAway ) {

        console.log('calculateBasicStatTotals();');

        var boxScoreTable = '#basic-stats #' + homeOrAway + 'Team-basic';
        var boxScoreTableRow = boxScoreTable + ' tbody tr';

        var thisStat;
        var countThisStat;
        var statTotal;
        var playerName;

        var basicStatsColumnsCount = Object.keys( basicStatsColumns ).length;

        // console.log( basicStatsColumnsCount );

        // Loop through each column.
        for ( var i = 0; i < basicStatsColumnsCount; i++ ) {

          statTotal = 0;
          countThisStat = basicStatsColumns[i].count;

          // If this isn't the first or second column.
          if ( countThisStat ) {
            // Loop through each row of the table.
            $( boxScoreTableRow ).each(function(rowIndex, rowElement) {
              playerName = getName( $(this).find('name') );
              // console.log( playerName );

              thisStat = Number( $(this).find('td:nth-child(' + (i + 1) + ')' ).text() );

              statTotal = statTotal + thisStat;
              // console.log( basicStatsColumns[i].title + ' :' + statTotal );
            });

            $(boxScoreTable + ' tfoot td.' + basicStatsColumns[i].className ).text(statTotal);
          }
        }
      }

      calculateBasicStatTotals( 'home' );
      calculateBasicStatTotals( 'away' );



      //
      //  CALCULATE ADVANCED STAT TOTALS
      //––––––––––––––––––––––––––––––––––––––––––––––––––

      function calculateAdvancedStatTotals( homeOrAway ) {

        var boxScoreTable = '#advanced-stats #' + homeOrAway + 'Team-advanced';
        var boxScoreTableRow = boxScoreTable + ' tbody tr';

        var thisStat;
        var countThisStat;
        var statTotal;
        var playerName;

        var advancedStatsColumnsCount = Object.keys( advancedStatsColumns ).length;

        // console.log( advancedStatsColumnsCount );

        // Loop through each column.
        for ( var i = 0; i < advancedStatsColumnsCount; i++ ) {

          statTotal = 0;
          countThisStat = advancedStatsColumns[i].count;

          // If this isn't the first or second column.
          if ( countThisStat ) {
            // Loop through each row of the table.
            $( boxScoreTableRow ).each(function(rowIndex, rowElement) {
              playerName = getName( $(this).find('name') );
              // console.log( playerName );

              thisStat = Number( $(this).find('td:nth-child(' + (i + 1) + ')' ).text() );

              statTotal = statTotal + thisStat;
              // console.log( advancedStatsColumns[i].title + ' :' + statTotal );
            });

            // Disposal efficiency.
            if ( advancedStatsColumns[i].className == 'disposal-efficiency' ) {
              statTotal = (statTotal / 22).toFixed(1);
            }

            $(boxScoreTable + ' tfoot td.' + advancedStatsColumns[i].className ).text(statTotal);

          // Everything else.
          } else {
            $(boxScoreTable + ' tfoot td.' + advancedStatsColumns[i].className ).text( '-'' );
          }
        }
      }

      calculateAdvancedStatTotals( 'home' );
      calculateAdvancedStatTotals( 'away' );



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
