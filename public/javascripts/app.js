function getFood() {
  $.get("/foods").
  done(function (data) {
    console.log("RECIEVE");
    console.log("DATA", data);
    $(data).each(function (index, food) {
      var $food = $('<div class="fooditem">' + food.name + "<button id='delete'>Delete</button>"+ "</div>");
      $(".foodsCon").append($food);
    });
  })
};

function post(e) {
  // e.preventDefault()
  var $this = $(this);
  var formData = $this.serialize();
  console.log(formData);
  $.post("/foods", formData).done(function(response) {
    var $food = $('<div class="fooditem">' + response.name + "</div>");
    $(".foodsCon").append($food);
  });
};

function deleteFood(e) {
 var deleteButton = $(this)
  $.post("/foods/:id", food).done(function(data) {
    deleteButton.parent().remove;
  });
}


$( document ).ready(function() {
  //gets/appends all items to the page after every 
  getFood()
  // listen for the form to submit
  $("#newFood").on("submit", post);

  $(".foodsCon").on('click', "#delete", deleteFood);

});