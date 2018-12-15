$(document).ready(function() {


function updateScreen() {
  if ($(".container").width() < $(".container").height()) {
    $(".container").css({
      "grid-template-columns": "1fr 6fr 1fr",
      "grid-template-rows": "1fr 7fr 1fr"
    });
  } else if ($(".container").width() > $(".container").height()) {
    $(".container").css({
      "grid-template-columns": "7fr 5fr 7fr",
      "grid-template-rows": "1fr 7fr 1fr"
    });
  }
  }
  updateScreen();
  window.onresize = function(event) {
      updateScreen();
  };



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBB7_2DBPYjtaaC2u_6v8BjT4VMuObCo4",
    authDomain: "sound-3701a.firebaseapp.com",
    databaseURL: "https://sound-3701a.firebaseio.com",
    projectId: "sound-3701a",
    storageBucket: "sound-3701a.appspot.com",
    messagingSenderId: "138652210895"
  };
  firebase.initializeApp(config);

  var bigData = firebase.database().ref();



  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  ////////////////START USER INPUT//////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////


  $('.c1').click(function() {
    var frequency = "C1";
    bigData.push({
      note: frequency,
    });
  });

  $('.d1').click(function() {
    var frequency = "D1";
    bigData.push({
      note: frequency,
    });
  });

  $('.e1').click(function() {
    var frequency = "E1";
    bigData.push({
      note: frequency,
    });
  });

  $('.f1').click(function() {
    var frequency = "F1";
    bigData.push({
      note: frequency,
    });
  });

  $('.g1').click(function() {
    var frequency = "G1";
    bigData.push({
      note: frequency,
    });
  });

  $('.a1').click(function() {
    var frequency = "A1";
    bigData.push({
      note: frequency,
    });
  });

  $('.b1').click(function() {
    var frequency = "B1";
    bigData.push({
      note: frequency,
    });
  });

  $('.c2').click(function() {
    var frequency = "C2";
    bigData.push({
      note: frequency,
    });
  });

  $('.d2').click(function() {
    var frequency = "D2";
    bigData.push({
      note: frequency,
    });
  });

  $('.e2').click(function() {
    var frequency = "E2";
    bigData.push({
      note: frequency,
    });
  });

  $('.f2').click(function() {
    var frequency = "F2";
    bigData.push({
      note: frequency,
    });
  });

  $('.g2').click(function() {
    var frequency = "G2";
    bigData.push({
      note: frequency,
    });
  });

  $('.a2').click(function() {
    var frequency = "A2";
    bigData.push({
      note: frequency,
    });
  });

  $('.b2').click(function() {
    var frequency = "B2";
    bigData.push({
      note: frequency,
    });
  });

  $('.c3').click(function() {
    var frequency = "C3";
    bigData.push({
      note: frequency,
    });
  });

  $('.d3').click(function() {
    var frequency = "D3";
    bigData.push({
      note: frequency,
    });
  });

  $('.e3').click(function() {
    var frequency = "E3";
    bigData.push({
      note: frequency,
    });
  });

  $('.f3').click(function() {
    var frequency = "F3";
    bigData.push({
      note: frequency,
    });
  });

  $('.g3').click(function() {
    var frequency = "G3";
    bigData.push({
      note: frequency,
    });
  });

  $('.a3').click(function() {
    var frequency = "A3";
    bigData.push({
      note: frequency,
    });
  });

  $('.b3').click(function() {
    var frequency = "B3";
    bigData.push({
      note: frequency,
    });
  });
  $('.c4').click(function() {
    var frequency = "C4";
    bigData.push({
      note: frequency,
    });
  });

  $('.d4').click(function() {
    var frequency = "D4";
    bigData.push({
      note: frequency,
    });
  });

  $('.e4').click(function() {
    var frequency = "E4";
    bigData.push({
      note: frequency,
    });
  });

  $('.f4').click(function() {
    var frequency = "F4";
    bigData.push({
      note: frequency,
    });
  });

  $('.g4').click(function() {
    var frequency = "G4";
    bigData.push({
      note: frequency,
    });
  });

  $('.a4').click(function() {
    var frequency = "A4";
    bigData.push({
      note: frequency,
    });
  });

  $('.b4').click(function() {
    var frequency = "B4";
    bigData.push({
      note: frequency,
    });
  });
  $('.c5').click(function() {
    var frequency = "C5";
    bigData.push({
      note: frequency,
    });
  });

  $('.d5').click(function() {
    var frequency = "D5";
    bigData.push({
      note: frequency,
    });
  });

  $('.e5').click(function() {
    var frequency = "E5";
    bigData.push({
      note: frequency,
    });
  });

  $('.f5').click(function() {
    var frequency = "F5";
    bigData.push({
      note: frequency,
    });
  });

  $('.g5').click(function() {
    var frequency = "G5";
    bigData.push({
      note: frequency,
    });
  });

  $('.a5').click(function() {
    var frequency = "A5";
    bigData.push({
      note: frequency,
    });
  });

  $('.b5').click(function() {
    var frequency = "B5";
    bigData.push({
      note: frequency,
    });
  });

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////END USER INPUT////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



  // Function to add a data listener
  var startListening = function() {

    // When a new item is added to the FB database then do this...
    bigData.orderByKey().limitToLast(1).on('child_added', function(ourDatabaseKid) {

      // Establish a name for each item/child
      var notePressed = ourDatabaseKid.val();
      var playNote = notePressed.note;

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////START MIXER SECTION///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

      var highpass = new Pizzicato.Effects.HighPassFilter({
        frequency: 3000
      });

      var highpass2 = new Pizzicato.Effects.HighPassFilter({
        frequency: 1000
      });

      var highpass3 = new Pizzicato.Effects.HighPassFilter({
        frequency: 2500
      });

      var highpass4 = new Pizzicato.Effects.HighPassFilter({
        frequency: 300
      });

      var lowpass = new Pizzicato.Effects.LowPassFilter({
        frequency: 380
      });

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////END MIXER SECTION///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////START OSCILLATOR SECTION//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


      var soundC1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 65.41,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundD1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 73.42,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundE1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 82.41,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundF1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 87.31,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundG1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 98.00,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundA1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 110.00,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundB1 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 123.47,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundC2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 130.81,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundD2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 146.83,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundE2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 164.81,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundF2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 174.61,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundG2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 196.00,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundA2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 220.00,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundB2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 246.94,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundC3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 261.63,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundD3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 293.66,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundE3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 329.63,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundF3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 349.23,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundG3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 392.00,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundA3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 440.00,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundB3 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 493.88,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundC4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 523.25,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundD4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 587.33,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundE4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 659.25,
          release: 1.5
        }
      });

      var soundF4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 698.46,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundG4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 783.99,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundA4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 880.00,
          release: 1.5,
          volume: 0.4
        }
      });

      var soundB4 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 987.77,
          release: 1.5
        }
      });

      var soundC5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1046.50,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundD5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1174.66,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundE5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1318.51,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundF5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1396.91,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundG5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1567.98,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundA5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1760.00,
          release: 1.5,
          volume: 0.3
        }
      });

      var soundB5 = new Pizzicato.Sound({
        source: 'wave',
        options: {
          frequency: 1975.53,
          release: 1.5,
          volume: 0.3
        }
      });


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////END OSCILLATOR SECTION//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////START DISPLAY OUTPUT SECTION//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


      //(function makeDiv(){
      // vary size for fun
      var divsize = 0;
      var color = "";
      if (playNote == 'C1' || playNote == 'C2' || playNote == 'C3' || playNote == 'C4' || playNote == 'C5') {
        color = "#ff9d00";
      } else if (playNote == 'D1' || playNote == 'D2' || playNote == 'D3' || playNote == 'D4' || playNote == 'D5') {
        color = "#fcab2a";
      } else if (playNote == 'E1' || playNote == 'E2' || playNote == 'E3' || playNote == 'E4' || playNote == 'E5') {
        color = "#f9b548";
      } else if (playNote == 'F1' || playNote == 'F2' || playNote == 'F3' || playNote == 'F4' || playNote == 'F5') {
        color = "#fcc46a";
      } else if (playNote == 'G1' || playNote == 'G2' || playNote == 'G3' || playNote == 'G4' || playNote == 'G5') {
        color = "#ffcf82";
      } else if (playNote == 'A1' || playNote == 'A2' || playNote == 'A3' || playNote == 'A4' || playNote == 'A5') {
        color = "#ffd491";
      } else if (playNote == 'B1' || playNote == 'B2' || playNote == 'B3' || playNote == 'B4' || playNote == 'B5') {
        color = "#ffdeaa";
      }

      if (playNote == 'C1' || playNote == 'D1' || playNote == 'E1' || playNote == 'F1' || playNote == 'G1' || playNote == 'A1' || playNote == 'B1') {
        divsize = 50;
      } else if (playNote == 'C2' || playNote == 'D2' || playNote == 'E2' || playNote == 'F2' || playNote == 'G2' || playNote == 'A2' || playNote == 'B2') {
        divsize = 90;
      } else if (playNote == 'C3' || playNote == 'D3' || playNote == 'E3' || playNote == 'F3' || playNote == 'G3' || playNote == 'A3' || playNote == 'B3') {
        divsize = 130;
      } else if (playNote == 'C4' || playNote == 'D4' || playNote == 'E4' || playNote == 'F4' || playNote == 'G4' || playNote == 'A4' || playNote == 'B4') {
        divsize = 170;
      } else if (playNote == 'C5' || playNote == 'D5' || playNote == 'E5' || playNote == 'F5' || playNote == 'G5' || playNote == 'A5' || playNote == 'B5') {
        divsize = 210;
      }

      $newdiv = $('<div/>').css({
        'width': divsize + 'px',
        'height': divsize + 'px',
        'border-radius': '50%',
        'background-color': color
      });

      // make position sensitive to size and document's width
      var posx = (Math.random() * ($('.picturewindow').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('.picturewindow').height() - divsize)).toFixed();

      $newdiv.css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px',
        'display': 'none'
      }).appendTo('.picturewindow').fadeIn(100).delay(1000).fadeOut(500, function() {
        $(this).remove();

      });

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////END DISPLAY OUTPUT SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////START SOUND OUTPUT SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


      if (playNote == 'C1') {
        soundC1.play();
        soundC1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundC1.stop();
        }, 500);
      } else if (playNote == 'D1') {
        soundD1.play();
        soundD1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundD1.stop();
        }, 500);
      } else if (playNote == 'E1') {
        soundE1.play();
        soundE1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundE1.stop();
        }, 500);
      } else if (playNote == 'F1') {
        soundF1.play();
        soundF1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundF1.stop();
        }, 500);
      } else if (playNote == 'G1') {
        soundG1.play();
        soundG1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundG1.stop();
        }, 500);
      } else if (playNote == 'A1') {
        soundA1.play();
        soundA1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundA1.stop();
        }, 500);
      } else if (playNote == 'B1') {
        soundB1.play();
        soundB1.addEffect(highpass4).addEffect(lowpass);
        setTimeout(function() {
          soundB1.stop();
        }, 500);
      } else if (playNote == 'C2') {
        soundC2.play();
        soundC2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundC2.stop();
        }, 500);
      } else if (playNote == 'D2') {
        soundD2.play();
        soundD2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundD2.stop();
        }, 500);
      } else if (playNote == 'E2') {
        soundE2.play();
        soundE2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundE2.stop();
        }, 500);
      } else if (playNote == 'F2') {
        soundF2.play();
        soundF2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundF2.stop();
        }, 500);
      } else if (playNote == 'G2') {
        soundG2.play();
        soundG2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundG2.stop();
        }, 500);
      } else if (playNote == 'A2') {
        soundA2.play();
        soundA2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundA2.stop();
        }, 500);
      } else if (playNote == 'B2') {
        soundB2.play();
        soundB2.addEffect(highpass2).addEffect(lowpass);
        setTimeout(function() {
          soundB2.stop();
        }, 500);
      } else if (playNote == 'C3') {
        soundC3.play();
        soundC3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundC3.stop();
        }, 500);
      } else if (playNote == 'D3') {
        soundD3.play();
        soundD3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundD3.stop();
        }, 500);
      } else if (playNote == 'E3') {
        soundE3.play();
        soundE3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundE3.stop();
        }, 500);
      } else if (playNote == 'F3') {
        soundF3.play();
        soundF3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundF3.stop();
        }, 500);
      } else if (playNote == 'G3') {
        soundG3.play();
        soundG3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundG3.stop();
        }, 500);
      } else if (playNote == 'A3') {
        soundA3.play();
        soundA3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundA3.stop();
        }, 500);
      } else if (playNote == 'B3') {
        soundB3.play();
        soundB3.addEffect(highpass3).addEffect(lowpass);
        setTimeout(function() {
          soundB3.stop();
        }, 500);
      } else if (playNote == 'C4') {
        soundC4.play();
        soundC4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundC4.stop();
        }, 500);
      } else if (playNote == 'D4') {
        soundD4.play();
        soundD4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundD4.stop();
        }, 500);
      } else if (playNote == 'E4') {
        soundE4.play();
        soundE4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundE4.stop();
        }, 500);
      } else if (playNote == 'F4') {
        soundF4.play();
        soundF4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundF4.stop();
        }, 500);
      } else if (playNote == 'G4') {
        soundG4.play();
        soundG4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundG4.stop();
        }, 500);
      } else if (playNote == 'A4') {
        soundA4.play();
        soundA4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundA4.stop();
        }, 500);
      } else if (playNote == 'B4') {
        soundB4.play();
        soundB4.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundB4.stop();
        }, 500);
      } else if (playNote == 'C5') {
        soundC5.play();
        soundC5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundC5.stop();
        }, 500);
      } else if (playNote == 'D5') {
        soundD5.play();
        soundD5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundD5.stop();
        }, 500);
      } else if (playNote == 'E5') {
        soundE5.play();
        soundE5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundE5.stop();
        }, 500);
      } else if (playNote == 'F5') {
        soundF5.play();
        soundF5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundF5.stop();
        }, 500);
      } else if (playNote == 'G5') {
        soundG5.play();
        soundG5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundG5.stop();
        }, 500);
      } else if (playNote == 'A5') {
        soundA5.play();
        soundA5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundA5.stop();
        }, 500);
      } else if (playNote == 'B5') {
        soundB5.play();
        soundB5.addEffect(highpass).addEffect(lowpass);
        setTimeout(function() {
          soundB5.stop();
        }, 500);
      }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////END SOUND OUTPUT SECTION//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

    });


  };

  startListening();






});
