$(document ).ready(function() {
  $("form#personInfo").submit(function(event) {
    const gems = $("select#gems").val();
    const grade = $("select#grade").val();
    const go = $("select#go").val();
    const snake = $("selct#snake").val();
    const color = $("select#color").val();

    if (gems === 'diamond') {
      if (grade === 'a') {
        if (go === 'goS') {
          if (snake === 'cobra') {
            $("#results").text("javaScript");
          } else if (snake === 'python'); {
            $("#results").text("python"); {
          } else if (snake === 'viper'); {
            $("results").text("swift")
          }
        } else if (go === {
        
    $("#result").show();

    event.preventDefault();
});