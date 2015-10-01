/*
Reveal.initialize({
  controls: true,
  progress: true,
  history: true
});
*/

Reveal.initialize({
  history: true,
  transition: 'convex',
  slideNumber: false,
  dependencies: [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    { src: '../bower_components/reveal.js/lib/js/classList.js', condition: function () { return !document.body.classList; } },

    // Interpret Markdown in <section> elements
    { src: '../bower_components/reveal.js/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
    { src: '../bower_components/reveal.js/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },

    // Syntax highlight for <code> elements
    { src: 'storm-intro/bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },

    // Zoom in and out with Alt+click
    //{ src: '../bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true },

    // Speaker notes
    //{ src: '../bower_components/reveal.js/plugin/notes/notes.js', async: true },

    // Remote control your reveal.js presentation using a touch device
    //{ src: '../bower_components/reveal.js/plugin/remotes/remotes.js', async: true },

    // MathJax
    //{ src: '../bower_components/reveal.js/plugin/math/math.js', async: true }
  ]
});