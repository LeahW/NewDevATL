(function(){
  $(document).ready(function() {
    var eventsArr = $('.event-title').map(function(i,title) {
      return $(title).text();
    });


    $('#event-search input').on('keyup', function(){
      var query = $(this).val();
      var filter = new RegExp('.*' + query + '.*','i');
      console.log(filter);

      $('.event').each(function(i,value) {
        if ($(this).children().text().match(filter)) {
          $(this).show();
        }else {
          $(this).hide();
        }
      });
    });
  });
})();
