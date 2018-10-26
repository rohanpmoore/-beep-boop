var getString = function(number) {
  var returnString = "";
  for(var i = 0; i <= number; i++) {
    if(i % 3 === 0 && i != 0) {
      returnString += "\"I'm sorry Dave.  I'm afraid I can't do that.\"";
    } else if(i.toString().includes("1")) {
      returnString += "\"Boop!\"";
    } else if(i.toString().includes("0")) {
      returnString += "\"Beep!\"";
    } else {
      returnString += i.toString();
    }
    if(i < number) {
      returnString += ", ";
    }
  }
  return returnString;
}

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var myNumber = parseInt($("#inputValue").val());
    if((!myNumber && myNumber != 0) || myNumber < 0) {
      $("#output").text("");
      $("#illegalValue").show();
      $("#outputWell").hide();
    } else {
      var myString = "The computer says: " + getString(myNumber);
      $("#output").text(myString);
      $("#illegalValue").hide();
      $("#outputWell").show();
    }
  });
});
