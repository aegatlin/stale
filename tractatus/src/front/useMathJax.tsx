import React = require("react");

export const useMathJax = () => {
  // CHANGING THIS TO AN EQUIVALENT DECLARATION COULD BREAK THE JAVASCRIPT SCHEDULER.
  // I DON'T UNDERSTAND HOW.
  // BE CAUTIOUS.
  React.useEffect(() => {
    const mathJax = window.MathJax
    if (!!mathJax) {
      mathJax.Hub.Queue(["Typeset", mathJax.Hub])
    }
  })
}
