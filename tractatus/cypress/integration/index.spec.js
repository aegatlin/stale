describe(`index page`, () => {
  beforeEach(() => {
    cy.visit(`/`)
  })

  it(`contains title and meta content`, () => {
    cy.title().should(`eq`, `Tractatus`)
    cy.get('head meta[name="description"]').should(`have.attr`, `content`, "Ludwig Wittgenstein's Tractatus Logico-Philosophicus online. The Tractaus is hard to read. Tracatus.online is here to help.")
  })

  it('supports text content compression', () => {
    cy.request('api/book').its('headers').its('content-encoding').should('equal', 'gzip')
  })

  it('displays the header', () => {
    cy.get('.header').contains('Tractatus')
    cy.get('.header').contains('Intro')
    cy.get('.header').contains('Preface')
    cy.get('.header').contains('Claims')
    cy.get('.header').contains('About')

    cy.get('.header-options > *').eq(0).should('have.css', 'cursor', 'pointer')
    cy.get('.header-options > *').eq(1).should('have.css', 'cursor', 'pointer')
    cy.get('.header-options > *').eq(2).should('have.css', 'cursor', 'pointer')
    cy.get('.header-options > *').eq(3).should('have.css', 'cursor', 'pointer')
  })

  it('renders the homepage on click of brand', () => {
    cy.get('.brand').get('a').should('have.attr', 'href', 'https://www.tractatus.online')
  })

  describe('introduction: ', () => {
    it('displays the introduction when intro in header is clicked', () => {
      const title = 'Introduction'
      const text = 'The logical structure of propositions and the nature of logical inference are first dealt with.'
      cy.get('.main').should('not.contain', title)
      cy.get('.main').should('not.contain', text)
      cy.get('.intro').click()
      cy.get('.main').should('contain', title)
      cy.get('.main').should('contain', text)
      cy.get('span.MathJax_Preview')
    })
  })

  describe('preface: ', () => {
    it('displays the preface when the preface header is clicked', () => {
      const title = 'Preface'
      const text = 'This book will perhaps only be understood by those who have themselves already thought the thoughts which are expressed in it—or similar thoughts.'
      cy.get('.main').should('not.contain', title)
      cy.get('.main').should('not.contain', text)
      cy.get('.preface').click()
      cy.get('.main').should('contain', title)
      cy.get('.main').should('contain', text)
    })
  })

  describe('claims: ', () => {
    it('displays the claims by default', () => {
      const intro = 'The logical structure of propositions and the nature of logical inference are first dealt with.'
      const preface = 'This book will perhaps only be understood by those who have themselves already thought the thoughts which are expressed in it—or similar thoughts.'
      const text = 'The world is everything that is the case.'
      cy.get('.app').should('not.contain', intro)
      cy.get('.app').should('not.contain', preface)
      cy.get('.app').should('contain', text)
    })

    it('displays the claims when the claims header is clicked', () => {
      const title = 'Tractatus Logico-Philosophicus'
      const text = 'The world is everything that is the case.'
      cy.get('.about').click()
      cy.get('.main').should('not.contain', title)
      cy.get('.main').should('not.contain', text)
      cy.get('.claims:visible').click()
      cy.get('.main').should('contain', title)
      cy.get('.main').should('contain', text)
    })

    it(`displays propositions 1-4`, () => {
      cy.contains(`The world is everything that is the case.`)
      cy.contains('What is the case, the fact, is the existence of atomic facts.')
      cy.contains('The logical picture of the facts is the thought.')
      cy.contains('The thought is the significant proposition.')
    })

    it(`displays 1's footnote on click`, () => {
      const footnote = `The decimal figures as numbers of the separate propositions indicate the logical importance of the propositions, the emphasis laid upon them in my exposition. The propositions n.1, n.2, n.3, etc., are comments on proposition No. n; the propositions n.m1, n.m2, etc., are comments on the proposition No. n.m; and so on.`

      cy.get('#_1').should('not.contain', footnote)
      cy.get('#_2').should('contain', 'What is the case')
      cy.get('#_2').should('not.contain', '*')
      cy.get('#_1').should('contain', '*')
      cy.get('#_1 span').click()
      cy.get('#_1').contains(footnote)
      cy.get('#_1').contains(`The world is everything that is the case. (${footnote})`)
      cy.get('#_1 span').click()
      cy.get('#_1').should('not.contain', footnote)
      cy.get('#_1').should('contain', '*')
    })

    it('displays 2.02, which is a zero-based claim', () => {
      cy.get('#_2.claim .location').click()
      cy.contains('The object is simple.')
    })

    it('displays 4.001, which is a double-zero-based claim', () => {
      cy.get('#_4.claim .location').click()
      cy.contains('The totality of propositions is the language.')
    })

    it('displays 4.011, which is a regular claim of a zero-based claim', () => {
      cy.get('#_4.claim .location').click()
      cy.get('#_4\\.01.claim .location').click()

      cy.contains('At the first glance the proposition')
    })

    it('displays 5, which is a multi-paragraph claim', () => {
      cy.get('#_5.claim .paragraph').should('have.length', 2)
      cy.get('#_5.claim .paragraph').eq(0).should('contain', 'Propositions are truth-functions of elementary propositions.')
      cy.get('#_5.claim .paragraph').eq(1).should('contain', '(An elementary proposition is a truth-function of itself.)')
    })

    it('displays 5.5423, which has a basic image', () => {
      cy.get('#_5.claim .location').click()
      cy.get('#_5\\.5.claim .location').click()
      cy.get('#_5\\.54.claim .location').click()
      cy.get('#_5\\.542.claim .location').click()
      cy.get('#_5\\.5423').should('not.contain', 'IMG_REPLACE_cube')
      cy.get('#_5\\.5423 img').should('have.attr', 'src', '/images/cube.png')
    })

    it('displays 6, which contains mathematical notation', () => {
      cy.get('#_6.claim .paragraph').should('have.length', 2)
      cy.get('#_6.claim .paragraph').eq(0).should('contain', 'The general form of truth-function is:')
      cy.get('#_6.claim .paragraph').eq(0).get('span.MathJax_Preview')
      cy.get('#_6.claim .paragraph').eq(1).should('contain', 'This is the general form of proposition.')
      cy.get('#_6.claim .location').eq(0).should('have.css', 'cursor', 'pointer')
    })

    it('displays 6.1203, which has multiple images', () => {
      cy.get('#_6.claim .location').click()
      cy.get('#_6\\.1.claim .location').click()
      cy.get('#_6\\.12.claim .location').click()
      cy.get('#_6\\.1203').should('not.contain', 'IMG_REPLACE_brackets01-en')
      cy.get('#_6\\.1203 img').should('have.length', 5)
      cy.get('#_6\\.1203 img').eq(0).should('have.attr', 'src', '/images/brackets01-en.png')
      cy.get('#_6\\.1203 img').eq(1).should('have.attr', 'src', '/images/brackets02-en.png')
      cy.get('#_6\\.1203 img').eq(2).should('have.attr', 'src', '/images/brackets03-en.png')
      cy.get('#_6\\.1203 img').eq(3).should('have.attr', 'src', '/images/brackets04-en.png')
      cy.get('#_6\\.1203 img').eq(4).should('have.attr', 'src', '/images/brackets05-en.png')
    })

    it(`displays proposition 7`, () => {
      cy.contains('Whereof one cannot speak, thereof one must be silent.')
      cy.get('#_7.claim .location').eq(0).should('not.have.css', 'cursor', 'pointer')
      cy.get('#_7.claim .paragraphs').eq(1).should('not.have.css', 'cursor', 'pointer')
    })
  })

  describe('about: ', () => {
    it('displays the about page on click', () => {
      const project = 'About This Project'
      const me = 'About Me'
      cy.get('.main').should('not.contain', project)
      cy.get('.main').should('not.contain', me)
      cy.get('.about').click()
      cy.get('.main').should('contain', project)
      cy.get('.main').should('contain', me)
    })
  })

  describe('mobile', () => {
    it('can navigate to the about page', () => {
      cy.get('.about').should('be.visible')
      cy.get('.hamburger').should('be.hidden')
      cy.viewport('iphone-6+')
      cy.get('.about').should('be.hidden')
      cy.get('.hamburger').should('be.visible')
      cy.get('body').should('not.have.class', 'no-scroll')
      cy.get('.hamburger').click()
      cy.get('body').should('have.class', 'no-scroll')
      cy.get('.about').should('be.visible')
      cy.get('.about').click()
      cy.get('body').should('not.have.class', 'no-scroll')
      cy.contains('The goal of this project is to make the Tractatus easier to read.')
      cy.get('.about').should('be.hidden')
      cy.get('.hamburger').should('be.visible')
    })

    it('displays the brand logo, but not the name', () => {
      cy.get('.brand-logo').should('be.visible')
      cy.get('.brand-name').should('be.visible')
      cy.viewport('iphone-6+')
      cy.get('.brand-logo').should('be.visible')
      cy.get('.brand-name').should('be.hidden')
      cy.get('.brand-name').should('be.hidden')
    })
  })
})
