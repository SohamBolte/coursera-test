(function () {
  var speakWord = "Hello";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  var helloSpeaker = {
    speak: speak
  };

  window.helloSpeaker = helloSpeaker;
})();

