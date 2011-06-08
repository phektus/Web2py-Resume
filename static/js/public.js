$list = $('#super-list');

$('#filter a').click(function(){
  var filterName = $(this).attr('data-filter');
  $list.isotope({ filter : filterName });
  return false;
});

$('#sort a').click(function(){
  var sortName = $(this).attr('data-sort');
  $list.isotope({ sortBy : sortName });
  return false;
});
    
// toggle description
$list.find('.entry').live('click', function(){      
  $(this).find('.description').toggle();
  $list.isotope('reLayout');
});
      
var currentLayout = 'fitRows';

$('#layouts a').click(function(){
  var layoutName = $(this).attr('href').slice(1);
  $list.removeClass( currentLayout ).addClass( layoutName );
  currentLayout = layoutName;
  $list.isotope({ layoutMode : layoutName });
  return false;
});


// switches selected class on buttons
$('#options').find('.option-set a').click(function(){
  var $this = $(this);
  // don't proceed if already selected
  if ( !$this.hasClass('selected') ) {
    $this.parents('.option-set').find('.selected').removeClass('selected');
    $this.addClass('selected');
  }
});

$(function(){      
  $list.isotope({
    layoutMode : 'straightDown',  
    sortBy : 'recent',      
    getSortData : {
      duration : function( $elem ) {
        return $elem.attr('data-duration');
      },
      recent : function( $elem ) {
        return $elem.attr('data-recent');
      }
    },
    sortAscending : false
  });
  
});
