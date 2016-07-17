$(function() {
  submitListener();
  likeListener();
});

var submitListener = function() {
  $( "#post_form" ).on("submit", function(event) {
    event.preventDefault();
    var postInfo = $(this).serializeArray();
    $(this).trigger('reset')
    $.ajax({
      url: '/posts',
      method: 'POST',
      data: postInfo
    }).done(function(e) {
      $( "#posts" ).prepend(e);
    })
  })
}

var likeListener = function() {
  $( "#posts" ).on("submit", ".post_like", function(event) {
    event.preventDefault();
    var $formURL = $(this).attr('action');
    var $likeCount = $(this).parent().find( ".like_count");
    $.ajax({
      url: $formURL,
      method: 'PUT'
    }).done(function(e) {
      $likeCount.html(e);
    })
  })
}
