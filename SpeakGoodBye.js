(function () {
  var speakWord = "Good Bye";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  var byeSpeaker = {
    speak: speak
  };

  window.byeSpeaker = byeSpeaker;
})();

