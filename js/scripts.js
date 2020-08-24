$(document).ready(function () {
  $('form#personInfo').submit(function (event) {
    const grade = $('select#grade').val()
    const go = $('select#go').val()
    const snake = $('select#snake').val()

    if (grade === 'a') {
      if (go === 'goS') {
        if (snake === 'cobra') {
          $('#code').text('javascript');
        } else if (snake === 'python') {
          $('#code').text('python');
        } else if (snake === 'viper') {
          $('#code').text('swift');
        }
      } else if (go === 'stop') {
        if (snake === 'cobra') {
          $('#code').text('javascript');
        } else if (snake === 'python') {
          $('#code').text('python');
        } else if (snake === 'viper') {
          $('#code').text('swift');
        }
      } else if (go === 'yeild') {
        if (snake === 'cobra') {
          $('#code').text('swift');
        } else if (snake === 'python') {
          $('#code').text('python');
        } else if (snake === 'viper') {
          $('#code').text('javascript');
        }
      }
    } else if (grade === 'c') {
      if (go === 'yeild') {
        if (snake === 'cobra') {
          $('#code').text('ruby');
        } else if (snake === 'viper') {
          $('#code').text('ruby');
        } else if (snake === 'viper') {
          $('#code').text('swift');
        }
      }
    } else if (go === 'goS') {
      if (grade === 'c') {
        if (snake === 'cobra') {
          $('#code').text('ruby');
        } else if (snake === 'viper') {
          $('#code').text('ruby');
        } else if (snake === 'viper') {
          $('#code').text('swift');
        }
      } else if (go === 'stop') {
        if (snake === 'cobra') {
          $('#code').text('ruby');
        } else if (snake === 'python') {
          $('#code').text('javascript');
        } else if (snake === 'viper') {
          $('#code').text('ruby');
        }
      } else if (go === 'yeild') {
        if (snake === 'viper') {
          $('#code').text('swift');
        } else if (snake === 'cobra') {
          $('#code').text('ruby');
        } else if (snake === 'python') {
          $('#code').text('javascript');
        }
      }
    } else if (grade === 'b') {
      if (snake === 'viper') {
        $('#code').text('swift');
      } else if (snake === 'cobra') {
        $('#code').text('ruby');
      } else if (snake === 'python') {
        $('#code').text('javascript');
      }
    } 

    $('#result').show();

    event.preventDefault();
  })
})