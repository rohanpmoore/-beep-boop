var getString = function(number, name) {
  var returnString = "";
  if(number >= 100) {
    returnString += "Such a drag to do this so many times.  But as you insist.  Here are your results: "
  }
  for(var i = 0; i <= number; i++) {
    if(i % 3 === 0 && i != 0) {
      returnString += "\"I'm sorry " + name + ".  I'm afraid I can't do that.\"";
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
    var userName = $("#nameInput").val();
    if((!myNumber && myNumber != 0) || myNumber < 0  || !userName) {
      $("#output").text("");
      $("#illegalValue").show();
      $("#outputWell").hide();
    } else {
      var myString = "The computer says: " + getString(myNumber, userName);
      $("#output").text(myString);
      $("#illegalValue").hide();
      $("#outputWell").show();
    }
  });
});
