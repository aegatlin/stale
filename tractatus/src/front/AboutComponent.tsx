import React = require("react");

export const AboutComponent: React.FC<{}> = () => {
  return (
    <div>
      <h2>About This Project</h2>
      <p>
        The goal of this project is to make the Tractatus easier to read.
      </p>
      <p>
        Wittgenstein numbered the propositions and comments to aid the reader in understanding the relative importance of any particular proposition/comment. This format lends itself to hierarchy. It is this hierarchical structure I have attempted to capture with this website.
      </p>
      <p>
        The source of the <a href="https://www.gutenberg.org/ebooks/5740" target="_blank" aria-label="Tractatus Logic-Philosophicus download location on Project Gutenberg">Tractatus text</a> is <a href="https://www.gutenberg.org/wiki/Main_Page" target="_blank" aria-label="Project Gutenberg homepage">Project Gutenberg</a>.
      </p>
      <h2>About Me</h2>
      <p>
        Hello! My name is <a href="https://austin.gatlin.io" target="_blank" aria-label="Austin Gatlin homepage">Austin Gatlin</a> and I built this website. I did it out of a love for philosophy and the Tractatus. I would love feedback and suggestions for future features! You can contact me at austin@gatlin.io. The project is open source. The source code is hosted on <a href="https://gitlab.com/aegatlin/tractatus" target="_blank" aria-label="Tractatus source code repository on Gitlab">Gitlab</a>.
      </p>
      <p>
        There are costs associated with running and maintaining this website. If you'd like to donate or contribute to the project, contact me. But, please, do not feel obligated to do so.
      </p>
    </div>
  )
}