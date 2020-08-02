var elements = 6;

(function() {
  $('.carousel-logo .item').each(function() {
    var itemToClone = $(this);

    for (var i = 1; i < elements; i++) {
      itemToClone = itemToClone.next();

      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-" + (i))
        .appendTo($(this));
    }
  });
}());