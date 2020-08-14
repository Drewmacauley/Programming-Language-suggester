$(document).ready(function() {
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
            $("#code").text("javaScript");
          } else if (snake === 'python'); {
            $("#code").text("python"); {
          } else if (snake === 'viper'); {
            $("#code").text("swift")
          }
      } else if (go === 'stop') {
        if (snake == 'cobra') {
            $('#code').text("javaScript");
        } else if (snake === 'python') {
          $("code").text("python");
        } else if (snake === 'viper') {
          $("results").text("swift");
        }
      } else if (go === 'yeild') {
        if (snake === 'cobra') {
          $("#code").text("swift");
        } else if (snake === 'python') {
          $("#code").text("python");
        } else if (snake === 'viper') {
          $("#code").text("javaScript");
        }
      }
    } else if (grade === 'B') {
      if (go === 'goS') {
        if (snake === 'cobra') {
          $("#code").text("goS");
        } else if (snake === 'python') {
          $("#code").text("rust");
        } else if (snake === 'viper') {
          $("#code").text("c#");
        }
        
      } else if (go === 'goS') {
        if (snake === 'cobra') {
          $("#code").text("ruby");
        } else if (snake === 'python') {
          $("#code").text("go");
        } else if (snake === 'viper') {
          $("#code").text("rust");
        }
      } else if (go === 'yield') {
        if (snake === 'cobra') {
          $("#code").text("ruby");
        } else if (snake === 'python') {
          $("#code").text("javaScript");
        } else if (snake === 'viper') {
          $("#code").text("swift");
        }
      }
    } else if (grade === 'c') {
      $("#code").text("C#")
    }

    } else if (color === 'rust') {
      $("#code").text("rust")
    }

    $("#result").show();

    event.preventDefault();
});