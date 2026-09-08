import type { QuizQuestion } from '../../../components/practice/Quiz';

export interface TopicSection {
  heading: string;
  body: string[];
  example?: {
    caption?: string;
    starterCode: string;
  };
}

export interface TopicChallenge {
  prompt: string;
  starterCode: string;
  solutionCode: string;
}

export interface HtmlTopic {
  slug: string;
  title: string;
  intro: string;
  sections: TopicSection[];
  challenge: TopicChallenge;
  quiz: QuizQuestion[];
  /** Matching category name in htmlInterviewQuestions.ts, for cross-linking to relevant interview questions. */
  interviewCategory: string;
}

export const htmlTopics: HtmlTopic[] = [
  {
    slug: 'introduction',
    title: 'HTML Introduction',
    intro:
      'HTML (HyperText Markup Language) is the standard language used to structure content on the web. Every website you’ve ever visited is built with HTML at its core, describing the headings, paragraphs, links, images, and other pieces that make up a page.',
    sections: [
      {
        heading: 'What HTML Actually Does',
        body: [
          'HTML doesn’t make a page look a certain way - that’s CSS’s job. HTML describes what each piece of content is: a heading, a paragraph, a list, a link. Browsers read this structure and render it visually.',
          'HTML files use the .html extension and are made up of elements - pieces of content wrapped in tags like <p> or <h1>.',
        ],
      },
      {
        heading: 'Your First HTML Page',
        body: [
          'Every HTML document starts with a doctype declaration, followed by an <html> root element containing a <head> (metadata) and a <body> (visible content).',
        ],
        example: {
          caption: 'Try it yourself',
          starterCode:
            '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>This is my first HTML page.</p>\n  </body>\n</html>',
        },
      },
      {
        heading: 'How Browsers Read HTML',
        body: [
          'Browsers parse HTML top to bottom, building a tree of elements called the DOM (Document Object Model). This tree is what CSS styles and JavaScript manipulates.',
        ],
      },
    ],
    challenge: {
      prompt: 'Build a minimal HTML5 page with the title "Practice" and a heading that says "I\'m learning HTML".',
      starterCode: '<!-- write your HTML page here -->\n',
      solutionCode:
        '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Practice</title>\n  </head>\n  <body>\n    <h1>I\'m learning HTML</h1>\n  </body>\n</html>',
    },
    quiz: [
      {
        question: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'HyperTransfer Markup Language',
          'Home Tool Markup Language',
        ],
        correctIndex: 0,
      },
      {
        question: 'Which part of an HTML document holds visible page content?',
        options: ['<head>', '<body>', '<meta>', '<title>'],
        correctIndex: 1,
      },
      {
        question: 'What is the DOM?',
        options: [
          'A styling language',
          'A tree representation of the page built by the browser',
          'A type of image format',
          'A JavaScript framework',
        ],
        correctIndex: 1,
        explanation: 'The DOM is what CSS styles and what JavaScript reads and modifies at runtime.',
      },
      {
        question: 'Which tag declares the document type at the very top of an HTML file?',
        options: ['<html>', '<!DOCTYPE html>', '<head>', '<doctype>'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'HTML Basics',
  },
  {
    slug: 'elements-attributes',
    title: 'Elements & Attributes',
    intro:
      'HTML pages are built from elements - and most elements can carry attributes that give the browser extra information about how to render or behave.',
    sections: [
      {
        heading: 'Elements & Tags',
        body: [
          'Most elements have an opening tag, content, and a closing tag - like <p>text</p>. Elements can nest inside each other to build more complex structures.',
          'Some elements are "empty" and never wrap content, like <br>, <img>, <hr>, and <input>. They don’t need a closing tag.',
        ],
        example: {
          starterCode: '<p>This is a <strong>nested</strong> element inside a paragraph.</p>\n<hr />\n<br />\n<p>New line above, thanks to &lt;br&gt;.</p>',
        },
      },
      {
        heading: 'Attributes',
        body: [
          'Attributes are name="value" pairs written inside the opening tag - never the closing one. Common ones include id, class, style, title, and lang.',
        ],
        example: {
          starterCode:
            '<a href="https://example.com" title="Visit Example">Example link</a>\n<p id="intro" class="highlight" lang="en">Attributes describe an element.</p>',
        },
      },
      {
        heading: 'Case Sensitivity & Best Practice',
        body: [
          'HTML5 isn’t strictly case-sensitive, but lowercase tags and attributes are the universal convention. Always quote attribute values, even when it isn’t strictly required.',
        ],
      },
    ],
    challenge: {
      prompt: 'Create a paragraph containing a nested link. Give the paragraph an id, and the link a title attribute.',
      starterCode: '<p>\n  <!-- add a nested <a> link here -->\n</p>\n',
      solutionCode:
        '<p id="intro">\n  Check out <a href="https://example.com" title="Visit Example">this link</a> for more.\n</p>',
    },
    quiz: [
      {
        question: 'Where do you place an attribute?',
        options: ['In the closing tag', 'In the opening tag', 'Between opening and closing tags', 'In the <head>'],
        correctIndex: 1,
      },
      {
        question: 'Which of these is an empty (self-closing) element?',
        options: ['<p>', '<div>', '<br>', '<span>'],
        correctIndex: 2,
      },
      {
        question: 'What does the class attribute do?',
        options: [
          'Uniquely identifies one element',
          'Assigns a reusable name used for styling or scripting multiple elements',
          'Sets the element’s text color',
          'Loads an external script',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which is the correct way to write an attribute value?',
        options: ['href=example.com', 'href:"example.com"', 'href="example.com"', 'href-"example.com"'],
        correctIndex: 2,
      },
    ],
    interviewCategory: 'Elements & Attributes',
  },
  {
    slug: 'headings-text',
    title: 'Headings, Paragraphs & Text Formatting',
    intro:
      'Headings and paragraphs give a page its outline, while inline formatting elements add emphasis and meaning to specific words or phrases.',
    sections: [
      {
        heading: 'Headings (<h1> to <h6>)',
        body: [
          'HTML gives you six levels of headings. <h1> is the most important - usually one per page - down to <h3>206>. Search engines and screen readers use headings to build a page outline, so don’t skip levels or pick one just because of its default font size.',
        ],
        example: {
          starterCode: '<h1>Main Page Title</h1>\n<h2>Section Heading</h2>\n<h3>Sub-section Heading</h3>',
        },
      },
      {
        heading: 'Paragraphs & Line Breaks',
        body: [
          '<p> automatically adds spacing around a block of text. <br> forces a single line break within a block without starting a new paragraph. Browsers also collapse extra whitespace in your source code by default.',
        ],
        example: {
          starterCode: '<p>This is a paragraph.<br />This line starts right after a line break.</p>',
        },
      },
      {
        heading: 'Text Formatting',
        body: [
          '<strong> and <em> carry semantic meaning (importance, emphasis) while <b> and <i> are purely visual. <mark> highlights text, <small> de-emphasizes it, and <sub>/<sup> handle subscript and superscript.',
        ],
        example: {
          starterCode:
            '<p><strong>Important:</strong> Save your work. This is <em>very</em> useful. <mark>Note</mark> the formula: H<sub>2</sub>O and 2<sup>10</sup>.</p>',
        },
      },
      {
        heading: 'Quotations & Comments',
        body: [
          '<blockquote> is for a longer quoted passage, <q> for a short inline quote, and <abbr title=""> for abbreviations with a tooltip. HTML comments (<!-- like this -->) are never shown on the page - handy for notes to yourself.',
        ],
        example: {
          starterCode:
            '<blockquote cite="https://example.com">A long quoted passage goes here.</blockquote>\n<p>She said <q>HTML is easy!</q></p>\n<!-- This comment won\'t render -->',
        },
      },
    ],
    challenge: {
      prompt: 'Write an <h2>, a paragraph with one bold word and one italic word, and a <blockquote>.',
      starterCode: '<!-- heading, paragraph with formatting, and a blockquote -->\n',
      solutionCode:
        '<h2>Why I Love HTML</h2>\n<p>It\'s <strong>simple</strong> yet <em>powerful</em>.</p>\n<blockquote>The web\'s foundation is markup.</blockquote>',
    },
    quiz: [
      {
        question: 'How many heading levels does HTML provide?',
        options: ['3', '4', '6', '8'],
        correctIndex: 2,
      },
      {
        question: 'What’s the difference between <strong> and <b>?',
        options: [
          'No difference at all',
          '<strong> conveys semantic importance, <b> is purely visual',
          '<b> is for links only',
          '<strong> is deprecated',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which tag forces a single line break without starting a new paragraph?',
        options: ['<hr>', '<br>', '<lb>', '<p>'],
        correctIndex: 1,
      },
      {
        question: 'How do you write an HTML comment?',
        options: ['// comment', '# comment', '<!-- comment -->', '/* comment */'],
        correctIndex: 2,
      },
    ],
    interviewCategory: 'Common Gotchas & Advanced Topics',
  },
  {
    slug: 'styles-colors',
    title: 'Styles & Colors',
    intro:
      'While CSS is the proper way to style a page, HTML provides a style attribute and a color system every developer needs to know.',
    sections: [
      {
        heading: 'The style Attribute',
        body: [
          'The style attribute applies inline CSS directly to an element. It’s handy for quick demos, but external or internal CSS is preferred for real projects - it keeps structure (HTML) and presentation (CSS) separate.',
        ],
        example: {
          starterCode:
            '<p style="color: white; background-color: #1dbf73; padding: 8px; border-radius: 8px;">\n  Styled with an inline style attribute.\n</p>',
        },
      },
      {
        heading: 'Specifying Colors',
        body: ['Colors can be written as named colors, hex codes (#rrggbb), rgb()/rgba(), or hsl().'],
        example: {
          starterCode:
            '<p style="color: tomato;">Named color</p>\n<p style="color: #1dbf73;">Hex color</p>\n<p style="color: rgb(29, 191, 115);">RGB color</p>',
        },
      },
      {
        heading: 'Linking Real CSS',
        body: [
          'For anything beyond a quick tweak, link an external stylesheet with <link rel="stylesheet" href="styles.css"> inside <head>, or use an internal <style> block. Deep CSS is its own course - this is just enough to get you unblocked in HTML.',
        ],
      },
    ],
    challenge: {
      prompt: 'Style a paragraph with a background color, white text, and rounded corners using the style attribute.',
      starterCode: '<p>\n  Style me!\n</p>\n',
      solutionCode:
        '<p style="background-color: #1dbf73; color: white; padding: 10px; border-radius: 8px;">\n  Style me!\n</p>',
    },
    quiz: [
      {
        question: 'Which attribute applies inline CSS directly to an element?',
        options: ['css', 'format', 'style', 'design'],
        correctIndex: 2,
      },
      {
        question: 'Which of these is a valid hex color?',
        options: ['#GG12ZZ', '#1dbf73', 'color(29,191,115)', 'rgb:1dbf73'],
        correctIndex: 1,
      },
      {
        question: 'Where do you usually link an external stylesheet?',
        options: ['Inside <body>', 'Inside <head>', 'Inside <footer>', "It can't be linked, only inline"],
        correctIndex: 1,
      },
      {
        question: 'Which is generally best practice for styling a real project?',
        options: ['Inline styles everywhere', 'External CSS files', 'No styling at all', 'Only bgcolor attributes'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Performance & Best Practices',
  },
  {
    slug: 'links',
    title: 'Links',
    intro:
      'Links are what make the web a web - the <a> (anchor) element connects pages, sections, files, and resources together.',
    sections: [
      {
        heading: 'The Anchor Tag',
        body: [
          'The href attribute holds the destination. Add target="_blank" to open a link in a new tab, and pair it with rel="noopener noreferrer" so the new page can’t access the window that opened it - a small but real security consideration.',
        ],
        example: {
          starterCode:
            '<a href="https://example.com" target="_blank" rel="noopener noreferrer">\n  Visit Example (opens in new tab)\n</a>',
        },
      },
      {
        heading: 'Absolute vs Relative URLs',
        body: [
          'An absolute URL includes the full domain. A relative URL points to a file within the same site - either relative to the current page (about.html) or root-relative (/about.html).',
        ],
        example: {
          starterCode:
            '<a href="https://example.com/about">Absolute link</a>\n<a href="/about">Root-relative link</a>\n<a href="about.html">Relative link</a>',
        },
      },
      {
        heading: 'Linking Within a Page & Other Uses',
        body: [
          'Give any element an id, then link to it with href="#id" to jump straight to that spot on the page. The <a> tag also handles mailto: and tel: links, and a download attribute for downloadable files.',
        ],
        example: {
          starterCode:
            '<a href="#section2">Jump to Section 2</a>\n\n<h2 id="section2">Section 2</h2>\n<a href="mailto:hello@example.com">Email us</a>',
        },
      },
    ],
    challenge: {
      prompt:
        'Create two links: one that opens "https://example.com" safely in a new tab, and one that jumps to a #contact section on the same page.',
      starterCode: '<!-- external link + in-page jump link -->\n',
      solutionCode:
        '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>\n<a href="#contact">Jump to Contact</a>\n\n<h2 id="contact">Contact</h2>',
    },
    quiz: [
      {
        question: 'Which attribute holds the destination of a link?',
        options: ['src', 'href', 'link', 'to'],
        correctIndex: 1,
      },
      {
        question: 'What does target="_blank" do?',
        options: [
          'Opens the link in the same tab',
          'Opens the link in a new tab/window',
          'Disables the link',
          'Downloads the file',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which of these links to a section on the same page?',
        options: ['<a href="section2.html">', '<a href="#section2">', '<a href="//section2">', '<a href="section2">'],
        correctIndex: 1,
      },
      {
        question: 'Why pair target="_blank" with rel="noopener noreferrer"?',
        options: [
          "It's required HTML5 syntax",
          'It improves security by preventing the new page from accessing the opener window',
          'It makes the link bold',
          'It improves SEO ranking',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Links, Images & Media',
  },
  {
    slug: 'images',
    title: 'Images & Favicon',
    intro:
      'Images bring pages to life - the <img> element embeds them, and a handful of related tags round out how browsers and search engines understand visual content.',
    sections: [
      {
        heading: 'The <img> Tag',
        body: [
          'src points to the image file, alt describes it, and width/height (or their CSS equivalents) help the browser reserve space before the image loads - preventing layout shift.',
        ],
        example: {
          starterCode:
            '<img src="https://picsum.photos/300/180" alt="Random placeholder photo" width="300" height="180" />',
        },
      },
      {
        heading: 'Why alt Text Matters',
        body: [
          'Screen readers announce alt text to visually impaired users, and it shows up if the image fails to load. Use alt="" (empty, but present) for purely decorative images so screen readers skip them.',
        ],
      },
      {
        heading: 'Responsive Images: srcset, sizes & <picture>',
        body: [
          'srcset lists multiple versions of an image at different widths, and sizes tells the browser how much space the image will occupy at different viewport widths - together they let the browser pick the best-fitting file instead of always downloading the largest one.',
          '<picture> goes further: it lets you swap to entirely different image sources (a different crop, or a modern format like WebP/AVIF with a JPEG fallback) using multiple <source> elements, falling back to a plain <img> for browsers that don\'t support any listed source.',
        ],
        example: {
          caption: 'Responsive images',
          starterCode:
            '<img\n  src="photo-800w.jpg"\n  srcset="photo-400w.jpg 400w, photo-800w.jpg 800w"\n  sizes="(max-width: 600px) 400px, 800px"\n  alt="Responsive product photo"\n/>',
        },
      },
      {
        heading: 'Lazy Loading & Fetch Priority',
        body: [
          'loading="lazy" tells the browser to defer loading an off-screen image until the user scrolls near it, saving bandwidth on long pages - never use it on above-the-fold images, since delaying your most important content actually hurts perceived load speed.',
          'fetchpriority="high" does the opposite: it tells the browser to fetch a critical image (like a large hero banner) sooner, ahead of other resources competing for bandwidth.',
        ],
        example: {
          caption: 'Prioritizing above-the-fold vs deferring the rest',
          starterCode:
            '<img src="hero.jpg" alt="Hero banner" fetchpriority="high" />\n<img src="footer-chart.jpg" alt="Chart" loading="lazy" />',
        },
      },
      {
        heading: 'Figures & Captions',
        body: ['<figure> and <figcaption> tie an image to a caption semantically, not just visually.'],
        example: {
          starterCode:
            '<figure>\n  <img src="https://picsum.photos/300/180" alt="Random placeholder photo" />\n  <figcaption>A randomly generated placeholder image.</figcaption>\n</figure>',
        },
      },
      {
        heading: 'Favicons',
        body: [
          'The small icon shown in a browser tab is set with <link rel="icon" href="favicon.ico"> inside <head>. Modern sites usually add a few variants for different contexts: an SVG or PNG icon for crisp rendering at any size, and an apple-touch-icon for when the site is added to an iOS home screen.',
        ],
        example: {
          caption: 'A more complete favicon setup',
          starterCode:
            '<link rel="icon" href="/favicon.ico" sizes="any" />\n<link rel="icon" type="image/svg+xml" href="/icon.svg" />\n<link rel="apple-touch-icon" href="/apple-touch-icon.png" />',
        },
      },
    ],
    challenge: {
      prompt: 'Add an image with meaningful alt text, wrapped in a <figure> with a <figcaption>.',
      starterCode: '<!-- figure + img + figcaption -->\n',
      solutionCode:
        '<figure>\n  <img src="https://picsum.photos/300/180" alt="Random placeholder photo" />\n  <figcaption>A randomly generated placeholder image.</figcaption>\n</figure>',
    },
    quiz: [
      {
        question: 'Which attribute is essential for accessibility on an <img>?',
        options: ['title', 'alt', 'src', 'longdesc'],
        correctIndex: 1,
      },
      {
        question: 'What does <figcaption> do?',
        options: [
          'Adds a border to an image',
          'Provides a caption for its parent <figure>',
          'Resizes the image',
          'Adds alt text automatically',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which attributes help prevent layout shift while an image loads?',
        options: ['alt & title', 'width & height', 'src & href', 'class & id'],
        correctIndex: 1,
      },
      {
        question: 'Where do you typically link a favicon?',
        options: [
          'Inside <body>',
          'Inside <head> with <link rel="icon">',
          'Inside <footer>',
          "It's automatic, no tag needed",
        ],
        correctIndex: 1,
      },
      {
        question: 'What does loading="lazy" do on an <img>?',
        options: [
          'Compresses the image automatically',
          'Defers loading the image until it nears the viewport',
          'Converts the image to WebP',
          'Blocks the image from loading entirely',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Links, Images & Media',
  },
  {
    slug: 'lists',
    title: 'Lists',
    intro:
      'Lists group related items - ordered when sequence matters, unordered when it doesn’t, and description lists for term/definition pairs.',
    sections: [
      {
        heading: 'Unordered & Ordered Lists',
        body: ['<ul> for bullet points, <ol> for numbered steps - both wrap each item in <li>.'],
        example: {
          starterCode:
            '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\n<ol>\n  <li>Plan</li>\n  <li>Build</li>\n  <li>Ship</li>\n</ol>',
        },
      },
      {
        heading: 'Nested Lists',
        body: ['A list can nest inside an <li> to represent sub-items.'],
        example: {
          starterCode:
            '<ul>\n  <li>Frontend\n    <ul>\n      <li>React</li>\n      <li>Vue</li>\n    </ul>\n  </li>\n  <li>Backend</li>\n</ul>',
        },
      },
      {
        heading: 'Description Lists',
        body: ['<dl>, <dt>, and <dd> pair a term with its definition - great for glossaries or key/value info.'],
        example: {
          starterCode:
            '<dl>\n  <dt>HTML</dt>\n  <dd>The markup language used to structure web pages.</dd>\n</dl>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a nested unordered list: "Frontend" as a parent item, with "HTML" and "CSS" as sub-items.',
      starterCode: '<ul>\n  <!-- Frontend, with nested HTML + CSS -->\n</ul>\n',
      solutionCode:
        '<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>',
    },
    quiz: [
      {
        question: 'Which tag creates a bulleted list?',
        options: ['<ol>', '<ul>', '<li>', '<dl>'],
        correctIndex: 1,
      },
      {
        question: 'Which tag wraps each item inside a <ul> or <ol>?',
        options: ['<item>', '<li>', '<td>', '<dd>'],
        correctIndex: 1,
      },
      {
        question: 'Which list type is best for a glossary of term/definition pairs?',
        options: ['<ul>', '<ol>', '<dl>', '<table>'],
        correctIndex: 2,
      },
      {
        question: 'Can you nest a <ul> inside an <li>?',
        options: ['No, never', 'Yes, to create sub-items', 'Only inside <ol>', 'Only with JavaScript'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Tables & Lists',
  },
  {
    slug: 'tables',
    title: 'Tables',
    intro: 'Tables display tabular data - rows and columns of related values, like a spreadsheet baked into your page.',
    sections: [
      {
        heading: 'Basic Table Structure',
        body: ['<table> holds <tr> (rows), which hold <td> (data cells) or <th> (header cells).'],
        example: {
          starterCode:
            '<table>\n  <tr>\n    <th>Name</th>\n    <th>Role</th>\n  </tr>\n  <tr>\n    <td>Nagaraju</td>\n    <td>Software Engineer</td>\n  </tr>\n</table>',
        },
      },
      {
        heading: 'thead, tbody & Semantics',
        body: ['Group header and body rows with <thead>/<tbody> for clarity and styling hooks, and add a <caption> as the table’s title.'],
        example: {
          starterCode:
            '<table>\n  <caption>Team Roster</caption>\n  <thead>\n    <tr><th>Name</th><th>Role</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Priya</td><td>Engineering Lead</td></tr>\n  </tbody>\n</table>',
        },
      },
      {
        heading: 'Merging Cells',
        body: ['colspan and rowspan let a single cell span across multiple columns or rows.'],
        example: {
          starterCode:
            '<table>\n  <tr>\n    <th colspan="2">Contact</th>\n  </tr>\n  <tr>\n    <td>Email</td>\n    <td>hello@example.com</td>\n  </tr>\n</table>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a 2-column, 2-row table with a header row and a <caption>.',
      starterCode: '<table>\n  <!-- caption + header row + one data row -->\n</table>\n',
      solutionCode:
        '<table>\n  <caption>Team</caption>\n  <thead>\n    <tr><th>Name</th><th>Role</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Nagaraju</td><td>Software Engineer</td></tr>\n  </tbody>\n</table>',
    },
    quiz: [
      {
        question: 'Which tag defines a header cell in a table?',
        options: ['<td>', '<th>', '<head>', '<tr>'],
        correctIndex: 1,
      },
      {
        question: 'What does colspan do?',
        options: ['Spans a cell across multiple rows', 'Spans a cell across multiple columns', 'Adds a caption', 'Colors the cell'],
        correctIndex: 1,
      },
      {
        question: "Which element groups a table's header row(s)?",
        options: ['<thead>', '<header>', '<tfoot>', '<caption>'],
        correctIndex: 0,
      },
      {
        question: 'Are tables meant for page layout (positioning a navbar and sidebar)?',
        options: [
          'Yes, that’s their main purpose',
          'No - use CSS layout (Flexbox/Grid) for layout; tables are for tabular data',
          'Only in HTML5',
          'Only with a layout="true" attribute',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Tables & Lists',
  },
  {
    slug: 'block-div-classes',
    title: 'Block, Inline, Div & Classes',
    intro:
      'Every HTML element has a display behavior - block or inline - and <div>, class, and id are the building blocks you’ll use to group and target content.',
    sections: [
      {
        heading: 'Block vs Inline Elements',
        body: [
          'Block elements start on a new line and take the full available width (<div>, <p>, <h1>, <ul>). Inline elements flow within surrounding text (<span>, <a>, <strong>).',
        ],
        example: {
          starterCode:
            "<div>I'm a block-level container.</div>\n<span>I'm inline, </span><span>so I sit side by side.</span>",
        },
      },
      {
        heading: 'The <div> and <span> Elements',
        body: [
          '<div> and <span> are generic containers with no inherent meaning - used purely to group content for styling or scripting. <div> for block-level grouping, <span> for inline grouping.',
        ],
      },
      {
        heading: 'class vs id',
        body: [
          'class is reusable - apply the same class to many elements to style or target them together. id must be unique per page, used for a single specific element (styling one thing, a jump-link target, or a form label’s for).',
        ],
        example: {
          starterCode:
            '<div class="card">\n  <h3 id="card-title">Card Title</h3>\n  <p class="card-text">Some card content.</p>\n</div>\n<div class="card">\n  <h3>Another Card</h3>\n</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Create two <div class="card"> elements, each with a heading - give just one of the headings a unique id.',
      starterCode: '<!-- two .card divs -->\n',
      solutionCode:
        '<div class="card">\n  <h3 id="card-title">Card Title</h3>\n</div>\n<div class="card">\n  <h3>Another Card</h3>\n</div>',
    },
    quiz: [
      {
        question: 'Which of these is a block-level element?',
        options: ['<span>', '<a>', '<div>', '<strong>'],
        correctIndex: 2,
      },
      {
        question: 'Can the same id be used on more than one element in a page?',
        options: ['Yes, freely', 'No - an id must be unique on the page', 'Only inside a <div>', 'Only in HTML5'],
        correctIndex: 1,
      },
      {
        question: 'What’s the main use of the class attribute?',
        options: [
          'Uniquely identify a single element',
          'Group multiple elements for shared styling or scripting',
          'Load external scripts',
          'Define page metadata',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which element is inline by default?',
        options: ['<div>', '<p>', '<span>', '<section>'],
        correctIndex: 2,
      },
    ],
    interviewCategory: 'Elements & Attributes',
  },
  {
    slug: 'semantic-layout',
    title: 'Semantic HTML & Page Layout',
    intro:
      'Semantic elements describe the role of a section of content, not just its box on the page - making pages easier for browsers, search engines, and assistive tech to understand.',
    sections: [
      {
        heading: 'Why Semantics Matter',
        body: [
          'Screen readers use semantic landmarks to navigate a page quickly. Search engines use them to understand your content’s structure. And your own code becomes more self-documenting than a sea of <div>s.',
        ],
      },
      {
        heading: 'The Core Semantic Elements',
        body: ['<header>, <nav>, <main>, <section>, <article>, <aside>, and <footer> cover most page layouts.'],
        example: {
          starterCode:
            '<header>\n  <h1>My Site</h1>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">About</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Blog Post Title</h2>\n    <p>Post content...</p>\n  </article>\n  <aside>Related links</aside>\n</main>\n\n<footer>\n  <p>&copy; 2026</p>\n</footer>',
        },
      },
      {
        heading: 'Responsive Meta Viewport',
        body: [
          'The viewport meta tag tells mobile browsers how to scale your page - without it, mobile devices render pages as if on a desktop and then zoom out. Actual responsive layout is handled with CSS.',
        ],
        example: {
          starterCode: '<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n</head>',
        },
      },
      {
        heading: 'Native Interactivity: details, summary & dialog',
        body: [
          '<details> with a nested <summary> gives you a collapsible disclosure widget - like an FAQ answer or "show more" section - entirely without JavaScript; the browser handles the open/closed state.',
          '<dialog> is a native modal element. Calling its showModal() method from JavaScript opens it centered with a backdrop and traps focus inside it automatically, which used to take a fair amount of custom code and ARIA attributes to get right.',
        ],
        example: {
          caption: 'A native disclosure widget',
          starterCode:
            '<details>\n  <summary>What is semantic HTML?</summary>\n  <p>HTML that describes the meaning of content, not just its appearance.</p>\n</details>',
        },
      },
    ],
    challenge: {
      prompt: 'Lay out a page using <header>, <main>, and <footer>.',
      starterCode: '<!-- header, main, footer -->\n',
      solutionCode:
        '<header>\n  <h1>My Site</h1>\n</header>\n\n<main>\n  <p>Page content.</p>\n</main>\n\n<footer>\n  <p>&copy; 2026</p>\n</footer>',
    },
    quiz: [
      {
        question: 'Which element represents the main, unique content of a page (used once per page)?',
        options: ['<section>', '<main>', '<div>', '<content>'],
        correctIndex: 1,
      },
      {
        question: 'Which element is best for a self-contained piece of content like a blog post?',
        options: ['<article>', '<aside>', '<nav>', '<header>'],
        correctIndex: 0,
      },
      {
        question: 'What does the viewport meta tag control?',
        options: ['Page title', 'How the page scales on different screen widths', 'Link colors', 'Table borders'],
        correctIndex: 1,
      },
      {
        question: 'Why prefer semantic tags over generic <div>s?',
        options: [
          'They render faster in every browser',
          'They add built-in meaning for accessibility, SEO, and readability',
          'They are required for CSS to work',
          'They replace the need for JavaScript',
        ],
        correctIndex: 1,
      },
      {
        question: 'What do <details> and <summary> give you without any JavaScript?',
        options: ['A tooltip', 'A collapsible disclosure widget', 'A modal dialog', 'A form validator'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Semantic HTML & Accessibility',
  },
  {
    slug: 'forms',
    title: 'Forms & Input Types',
    intro: 'Forms are how users send data back to a website - from a simple search box to a full multi-field signup flow.',
    sections: [
      {
        heading: 'The <form> Element',
        body: ['action sets where the data is sent, and method chooses GET (visible in the URL) or POST (in the request body).'],
        example: {
          starterCode: '<form action="/submit" method="POST">\n  <!-- inputs go here -->\n</form>',
        },
      },
      {
        heading: 'Common Input Types',
        body: [
          'text, email, password, number, checkbox, radio, and date each give the browser built-in UI and validation - like a date picker, or requiring an @ for type="email".',
        ],
        example: {
          starterCode:
            '<form>\n  <label for="email">Email</label>\n  <input type="email" id="email" name="email" required />\n\n  <label for="free">Free plan</label>\n  <input type="radio" id="free" name="plan" value="free" />\n\n  <button type="submit">Sign up</button>\n</form>',
        },
      },
      {
        heading: 'Labels, Placeholders & Validation',
        body: [
          '<label for=""> tied to an input’s id improves accessibility and tap targets. A placeholder is a hint, not a replacement for a real label.',
        ],
      },
      {
        heading: 'Validating Without JavaScript',
        body: [
          'required, min/max (for numbers and dates), minlength/maxlength, and pattern (a regular expression) let the browser block submission and show a built-in error message - no JavaScript needed. autofocus puts the cursor in a field as soon as the page loads, handy for a single-field search or login form.',
        ],
        example: {
          caption: 'Built-in validation attributes',
          starterCode:
            '<label for="username">Username</label>\n<input\n  type="text"\n  id="username"\n  name="username"\n  pattern="[a-z0-9_]{3,16}"\n  minlength="3"\n  maxlength="16"\n  autofocus\n  required\n/>',
        },
      },
      {
        heading: 'Grouping Fields with fieldset & legend',
        body: [
          '<fieldset> visually and semantically groups related inputs - like a set of radio buttons or an address block - and <legend> gives that group a caption that screen readers announce before reading the fields inside it.',
        ],
        example: {
          caption: 'Grouping related inputs',
          starterCode:
            '<fieldset>\n  <legend>Choose a plan</legend>\n  <label><input type="radio" name="plan" value="free" /> Free</label>\n  <label><input type="radio" name="plan" value="pro" /> Pro</label>\n</fieldset>',
        },
      },
      {
        heading: 'Select & Textarea',
        body: ['<select><option> builds a dropdown; <textarea> is for multi-line input.'],
        example: {
          starterCode:
            '<label for="role">Role</label>\n<select id="role" name="role">\n  <option value="dev">Developer</option>\n  <option value="design">Designer</option>\n</select>\n\n<label for="bio">Bio</label>\n<textarea id="bio" name="bio" rows="3"></textarea>',
        },
      },
      {
        heading: 'datalist, progress, meter & output',
        body: [
          '<datalist> attaches a list of suggestions to a text input via the list attribute - like autocomplete, but built into HTML. <progress> shows how far a task has gotten (like a file upload); <meter> shows a value within a known range (like disk usage). <output> displays the result of a calculation, often updated by JavaScript.',
        ],
        example: {
          caption: 'Suggestions, progress & a gauge',
          starterCode:
            '<input list="browsers" name="browser" />\n<datalist id="browsers">\n  <option value="Chrome" />\n  <option value="Firefox" />\n  <option value="Safari" />\n</datalist>\n\n<progress value="70" max="100"></progress>\n<meter value="0.6" min="0" max="1"></meter>',
        },
      },
      {
        heading: 'File Uploads',
        body: [
          '<input type="file"> opens a native file picker. To actually send the chosen file(s) to a server, the form needs enctype="multipart/form-data" - the default encoding can\'t carry binary file data.',
        ],
        example: {
          caption: 'A file-upload form',
          starterCode:
            '<form action="/upload" method="POST" enctype="multipart/form-data">\n  <label for="resume">Resume</label>\n  <input type="file" id="resume" name="resume" accept=".pdf" />\n  <button type="submit">Upload</button>\n</form>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a form with a labeled email input (required) and a submit button.',
      starterCode: '<form>\n  <!-- labeled email input + submit button -->\n</form>\n',
      solutionCode:
        '<form>\n  <label for="email">Email</label>\n  <input type="email" id="email" name="email" required />\n  <button type="submit">Submit</button>\n</form>',
    },
    quiz: [
      {
        question: 'Which attribute on <form> specifies where the data is sent?',
        options: ['method', 'action', 'target', 'href'],
        correctIndex: 1,
      },
      {
        question: 'Which input type gives built-in email format validation?',
        options: ['type="text"', 'type="email"', 'type="string"', 'type="mail"'],
        correctIndex: 1,
      },
      {
        question: 'What connects a <label> to its input for accessibility?',
        options: ['Matching for and id attributes', 'Nesting order only', 'The name attribute', 'Nothing - it’s automatic'],
        correctIndex: 0,
      },
      {
        question: 'Which element lets a user pick from a dropdown list?',
        options: ['<input type="list">', '<select>', '<datalist> alone', '<option> on its own'],
        correctIndex: 1,
      },
      {
        question: 'What does <fieldset>/<legend> provide?',
        options: [
          'A dropdown menu',
          'A grouping of related fields with an announced caption',
          'Client-side validation',
          'A file upload button',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which form attribute is required to upload files to a server?',
        options: ['method="upload"', 'enctype="multipart/form-data"', 'type="file"', 'accept="*"'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Forms & Inputs',
  },
  {
    slug: 'multimedia-graphics',
    title: 'Multimedia, Graphics & Modern APIs',
    intro:
      'Beyond text and images, HTML can embed other pages, play video/audio natively, and even draw graphics - the toolkit for richer, more advanced experiences.',
    sections: [
      {
        heading: 'iFrames',
        body: ['<iframe> embeds another page inside yours - maps, videos, widgets. Always give it a title for accessibility.'],
        example: {
          starterCode:
            '<iframe\n  src="https://example.com"\n  title="Embedded example page"\n  width="100%"\n  height="200"\n></iframe>',
        },
      },
      {
        heading: 'Video & Audio',
        body: [
          '<video> and <audio> play natively with the controls attribute. Multiple <source> elements provide format fallbacks. poster sets a preview image shown before playback starts, and <track> attaches captions or subtitles - important for accessibility and for viewers watching with the sound off.',
        ],
        example: {
          starterCode:
            '<video controls width="320" poster="preview.jpg">\n  <source src="movie.mp4" type="video/mp4" />\n  <source src="movie.ogg" type="video/ogg" />\n  <track kind="captions" src="captions-en.vtt" srclang="en" label="English" />\n  Your browser does not support the video tag.\n</video>',
        },
      },
      {
        heading: 'Canvas & SVG (Intro)',
        body: [
          '<canvas> is a JavaScript-drawn bitmap surface, great for charts and games - you get an empty rectangle in the markup, then draw onto it imperatively via its 2D (or WebGL) context. <svg> is a vector format written directly in markup that scales without losing quality, and its shapes are real DOM nodes you can select and style with CSS.',
        ],
        example: {
          caption: 'Drawing on a canvas',
          starterCode:
            '<canvas id="c" width="120" height="120"></canvas>\n<script>\n  const ctx = document.getElementById("c").getContext("2d");\n  ctx.fillStyle = "#1dbf73";\n  ctx.fillRect(10, 10, 100, 100);\n</script>',
        },
      },
      {
        heading: 'A Peek at Browser APIs',
        body: [
          'As your HTML pages grow into apps, you’ll reach for browser APIs like localStorage (client-side key/value storage) and the Geolocation API - both accessed from JavaScript, not markup, but good to know exist.',
        ],
      },
    ],
    challenge: {
      prompt: 'Embed an SVG circle with a fill color of your choice.',
      starterCode: '<svg width="120" height="120">\n  <!-- add a circle -->\n</svg>\n',
      solutionCode: '<svg width="120" height="120">\n  <circle cx="60" cy="60" r="50" fill="#1dbf73" />\n</svg>',
    },
    quiz: [
      {
        question: 'What is an <iframe> used for?',
        options: ['Playing audio only', 'Embedding another web page inside the current one', 'Drawing shapes', 'Styling text'],
        correctIndex: 1,
      },
      {
        question: 'Why include multiple <source> elements inside a <video> tag?',
        options: [
          'To play them all at once',
          'To provide format fallbacks for different browsers',
          'It’s required syntax with no real effect',
          'To create a playlist',
        ],
        correctIndex: 1,
      },
      {
        question: 'What’s a key difference between <canvas> and <svg>?',
        options: [
          '<canvas> is vector-based, <svg> is not',
          '<svg> is markup-based and scales without quality loss; <canvas> is a JS-drawn bitmap',
          'They are exactly the same',
          '<canvas> can only show text',
        ],
        correctIndex: 1,
      },
      {
        question: 'Where would you use localStorage from?',
        options: [
          'Directly as an HTML tag',
          'From JavaScript, to store data in the browser',
          'Inside <head> as a meta tag',
          "It's a CSS property",
        ],
        correctIndex: 1,
      },
      {
        question: 'What does the <track> element add to a <video>?',
        options: ['A second video source', 'Captions or subtitles', 'A poster image', 'Playback controls'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'HTML5 Features & APIs',
  },
  {
    slug: 'entities-best-practices',
    title: 'Entities & Best Practices',
    intro:
      'A handful of finishing touches - character entities, charset declarations, and a few style conventions - separate solid, professional HTML from markup that merely works.',
    sections: [
      {
        heading: 'Character Entities',
        body: [
          'Reserved characters like <, >, and & need entity codes, since the raw characters would be parsed as markup. Special symbols like © or a non-breaking space have entities too.',
        ],
        example: {
          starterCode: '<p>5 &lt; 10 &amp; 10 &gt; 5</p>\n<p>Copyright &copy; 2026&nbsp;Nagaraju Nali</p>',
        },
      },
      {
        heading: 'Character Sets & Emoji',
        body: [
          '<meta charset="UTF-8"> should be the very first tag inside <head> - it ensures special characters and emoji render correctly across every browser.',
        ],
        example: {
          starterCode: '<head>\n  <meta charset="UTF-8" />\n</head>\n<body>\n  <p>Emoji work fine with UTF-8: 🚀 ✅ 💡</p>\n</body>',
        },
      },
      {
        heading: 'Writing Clean HTML',
        body: [
          'A short style guide: lowercase tag and attribute names, always quote attribute values, always include meaningful alt text, close every element even when HTML5 makes it optional, indent nested elements consistently, and reach for a semantic tag before a generic <div>.',
        ],
      },
    ],
    challenge: {
      prompt: 'Write a paragraph using entity codes for <, >, and ©.',
      starterCode: '<p>\n  <!-- use &lt; &gt; and &copy; entities -->\n</p>\n',
      solutionCode: '<p>5 &lt; 10 and 10 &gt; 5. Copyright &copy; 2026.</p>',
    },
    quiz: [
      {
        question: 'Which entity represents the < character?',
        options: ['&lt;', '&gt;', '&amp;', '&copy;'],
        correctIndex: 0,
      },
      {
        question: 'Where should the charset meta tag appear?',
        options: ['Anywhere in <body>', 'As the first tag inside <head>', 'At the very end of the file', 'It’s optional and rarely used'],
        correctIndex: 1,
      },
      {
        question: 'Why can’t you type < or > directly as text content in HTML?',
        options: [
          'You can, there’s no issue',
          'The browser would try to parse them as the start of a tag',
          'They’re reserved for JavaScript only',
          'HTML doesn’t support those characters at all',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which is considered HTML best practice?',
        options: [
          'Uppercase tag names for readability',
          'Skipping alt text to keep markup short',
          'Lowercase tags, quoted attributes, and meaningful alt text',
          'Avoiding semantic tags in favor of <div> everywhere',
        ],
        correctIndex: 2,
      },
    ],
    interviewCategory: 'Performance & Best Practices',
  },
];
