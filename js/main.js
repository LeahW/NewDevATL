(function(){
  $(document).ready(function() {
    var eventsArr = $('.event-title').map(function(i,title) {
      return $(title).text();
    });


    $('#event-search').on('keyup', function(){
      var query = $(this).val();
      var filter = new RegExp('.*' + query + '.*','i');

      $('.event').each(function(i,value) {
        if ($(this).children().text().match(filter)) {
          $(this).parent().show();
        }else {
          $(this).parent().hide();
        }
      });
    });
  });
})();
