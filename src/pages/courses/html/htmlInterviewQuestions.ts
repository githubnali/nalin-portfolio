export interface InterviewQA {
  id: number;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  question: string;
  answer: string;
  /** Short, runnable HTML snippet that makes the answer concrete. Optional. */
  example?: string;
}

export const htmlInterviewQuestions: InterviewQA[] = [
  // ---------- HTML Basics ----------
  {
    id: 1,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'What is HTML, and what role does it play alongside CSS and JavaScript?',
    answer:
      'HTML (HyperText Markup Language) defines the structure and meaning of content on a web page - headings, paragraphs, lists, links, and so on. It doesn’t control appearance or behavior; CSS handles presentation and JavaScript handles interactivity. Together they form the three layers browsers combine to render a working page.',
    example: `<!-- HTML: structure -->
<button id="btn">Click me</button>

<!-- CSS: presentation -->
<style>#btn { color: blue; }</style>

<!-- JS: behavior -->
<script>btn.onclick = () => alert('Hi!');</script>`,
  },
  {
    id: 2,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'What does the doctype declaration do, and why is it required?',
    answer:
      '<!DOCTYPE html> tells the browser to render the page in standards mode rather than quirks mode, which mimics old, inconsistent browser behavior from the 1990s. Without it, browsers may apply different box-model and layout rules, causing subtle rendering bugs. It isn’t an HTML tag itself - it’s an instruction to the parser.',
    example: `<!DOCTYPE html>
<html>
  <head><title>Standards Mode</title></head>
  <body>Hello</body>
</html>`,
  },
  {
    id: 3,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'What’s the difference between an element and a tag?',
    answer:
      'A tag is the markup syntax itself, like <p> or </p>, while an element is the full unit - opening tag, content, and closing tag - that the tag represents. People often use the words interchangeably in casual conversation, but technically the tag is just the label and the element is the whole structure the browser builds from it.',
    example: `<p>Hello</p>
<!-- <p> and </p> are tags; the whole <p>Hello</p> is the element -->`,
  },
  {
    id: 4,
    category: 'HTML Basics',
    difficulty: 'Intermediate',
    question: 'What is the DOM, and how does it relate to the HTML source?',
    answer:
      'The DOM (Document Object Model) is the tree-like, in-memory representation the browser builds after parsing HTML. It’s what CSS selectors match against and what JavaScript reads and mutates at runtime - so the DOM can diverge from the original HTML source once scripts start modifying it. Viewing “page source” shows the original HTML; inspecting elements in devtools shows the live DOM.',
    example: `<ul id="list">
  <li>Item</li>
</ul>
<!-- Browser builds: Document > ul#list > li -->`,
  },
  {
    id: 5,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'What are void (self-closing) elements, and can you name a few?',
    answer:
      'Void elements never wrap content and have no closing tag because there’s nothing to close - examples include <br>, <img>, <hr>, <input>, <meta>, and <link>. In HTML5 the trailing slash (<br />) is optional and purely stylistic, unlike in strict XHTML where it was required.',
    example: `<img src="cat.jpg" alt="A cat">
<br>
<hr>
<input type="text">`,
  },
  {
    id: 6,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'Is HTML case-sensitive?',
    answer:
      'No - tag names and attribute names in HTML5 are case-insensitive, so <DIV> and <div> behave identically. That said, lowercase is the universal convention because it’s more readable and matches how XHTML and most style guides expect markup to look. Attribute values, however, can be case-sensitive depending on what they represent, like a file path.',
    example: `<DIV>Same as</DIV>
<div>this div</div>`,
  },
  {
    id: 7,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'How do you write comments in HTML, and are they visible to users?',
    answer:
      'HTML comments are written as <!-- comment text -->, and the browser ignores everything between those markers when rendering. They’re not visible in the rendered page, but anyone can still see them by viewing the page source, so they should never contain sensitive information like internal notes or credentials.',
    example: `<!-- This won't be visible on the page -->
<p>Visible text</p>`,
  },
  {
    id: 8,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'What is the basic structure every HTML document needs?',
    answer:
      'A valid document starts with <!DOCTYPE html>, then an <html> root element containing a <head> for metadata (title, charset, links to stylesheets) and a <body> for the visible content. Browsers are forgiving and will often render pages missing pieces of this structure, but omitting them risks inconsistent rendering and accessibility issues.',
    example: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  </head>
  <body>
    <p>Content goes here</p>
  </body>
</html>`,
  },
  {
    id: 9,
    category: 'HTML Basics',
    difficulty: 'Intermediate',
    question: 'What happens if a browser encounters an HTML tag it doesn’t recognize?',
    answer:
      'Browsers ignore unknown tags entirely for rendering purposes but still add them to the DOM as generic inline elements, and they’ll still render any text content inside. This forgiving behavior is why custom elements and web components work - the browser doesn’t reject unfamiliar markup, it just treats it plainly until JavaScript upgrades it.',
    example: `<foo-bar>Still rendered as text</foo-bar>
<!-- Browser adds an unknown HTMLElement to the DOM -->`,
  },
  {
    id: 10,
    category: 'HTML Basics',
    difficulty: 'Beginner',
    question: 'What’s the difference between HTML and HTML5?',
    answer:
      'HTML5 is the current major version of the HTML specification, introducing semantic elements (header, nav, article, section), native form validation, multimedia tags like <video> and <audio>, canvas, and APIs like local storage and geolocation. Earlier versions relied heavily on generic <div> soup and plugins like Flash for anything HTML couldn’t natively do.',
    example: `<!-- HTML5 semantic elements -->
<header>Site Header</header>
<nav>Navigation</nav>
<article>Post content</article>`,
  },

  // ---------- Elements & Attributes ----------
  {
    id: 11,
    category: 'Elements & Attributes',
    difficulty: 'Beginner',
    question: 'What are global attributes in HTML?',
    answer:
      'Global attributes are attributes that can be applied to virtually any HTML element, such as id, class, style, title, lang, tabindex, and data-* attributes. They exist because certain behaviors - identification, styling hooks, accessibility, custom data - are useful regardless of what element you’re working with.',
    example: `<p id="intro" class="lead" title="Tooltip" data-user-id="42">Hello</p>`,
  },
  {
    id: 12,
    category: 'Elements & Attributes',
    difficulty: 'Beginner',
    question: 'What are data-* attributes used for?',
    answer:
      'data-* attributes let you embed custom data directly on an element without inventing non-standard attributes that would fail validation, such as data-user-id="42". JavaScript can read them conveniently through the element’s dataset property, and they’re commonly used to pass server-rendered values to client-side scripts or CSS selectors.',
    example: `<li data-user-id="42">Jane</li>
<script>
  console.log(document.querySelector('li').dataset.userId); // "42"
</script>`,
  },
  {
    id: 13,
    category: 'Elements & Attributes',
    difficulty: 'Intermediate',
    question: 'What does the contenteditable attribute do?',
    answer:
      'Setting contenteditable="true" on an element makes its content directly editable by the user in the browser, similar to a rich text editor. It’s the foundation many WYSIWYG editors are built on, though it comes with quirks around pasting, cursor handling, and inconsistent behavior across browsers that usually require extra JavaScript to smooth over.',
    example: `<div contenteditable="true">Click and start typing here...</div>`,
  },
  {
    id: 14,
    category: 'Elements & Attributes',
    difficulty: 'Beginner',
    question: 'What’s the difference between block-level and inline elements?',
    answer:
      'Block-level elements, like <div>, <p>, and <section>, start on a new line and take up the full available width by default. Inline elements, like <span>, <a>, and <strong>, flow within the surrounding text and only take up as much width as their content needs. This default behavior can be overridden with CSS display, but the distinction still shapes how browsers treat nesting rules.',
    example: `<div>Block: full width, new line</div>
<span>Inline: flows with text</span>`,
  },
  {
    id: 15,
    category: 'Elements & Attributes',
    difficulty: 'Beginner',
    question: 'What’s the difference between the id and class attributes?',
    answer:
      'An id must be unique within the page and is meant to identify a single specific element - useful for anchor links, form label association, and JavaScript targeting. A class can be applied to many elements and is meant for grouping elements that share styling or behavior. Using duplicate ids is invalid HTML and can cause unpredictable behavior with APIs like getElementById.',
    example: `<div id="header" class="box highlighted">...</div>
<div class="box">...</div>`,
  },
  {
    id: 16,
    category: 'Elements & Attributes',
    difficulty: 'Beginner',
    question: 'Do attribute values always need to be quoted?',
    answer:
      'Technically no - HTML5 allows unquoted attribute values as long as they don’t contain spaces or special characters. In practice, quoting every value (with either single or double quotes) is strongly recommended because it avoids ambiguity, works consistently for all value types, and is what every style guide and linter expects.',
    example: `<input type="text" value="hello">
<!-- unquoted works too: <input type=text value=hello> but is discouraged -->`,
  },
  {
    id: 17,
    category: 'Elements & Attributes',
    difficulty: 'Intermediate',
    question: 'What are boolean attributes, and how do they differ from regular attributes?',
    answer:
      'Boolean attributes like disabled, checked, and readonly represent an on/off state through their mere presence rather than their value - writing disabled or disabled="disabled" or even disabled="false" all enable the attribute. To turn the behavior off, the attribute must be removed entirely from the element, not set to a falsy-looking string.',
    example: `<button disabled>Can't click me</button>
<button>Can click me</button>
<!-- disabled="false" would still disable it! -->`,
  },
  {
    id: 18,
    category: 'Elements & Attributes',
    difficulty: 'Intermediate',
    question: 'Can you create custom, non-standard HTML attributes?',
    answer:
      'Yes, but you should prefix them with data- so they’re valid according to the HTML spec and won’t collide with future standard attributes. Custom elements and frameworks sometimes use other non-standard attributes for their own tooling, but data-* is the safe, sanctioned way to attach arbitrary metadata to markup.',
    example: `<div data-tooltip="Save your work">Save</div>`,
  },
  {
    id: 19,
    category: 'Elements & Attributes',
    difficulty: 'Intermediate',
    question: 'What is the title attribute used for, and how does it differ from the <title> tag?',
    answer:
      'The title attribute, usable on most elements, shows a tooltip when the user hovers over that element - useful for supplementary hints. The <title> tag, by contrast, is a single required element inside <head> that sets the text shown in the browser tab and search engine results. They share a name but serve completely different purposes.',
    example: `<head><title>Page Title (browser tab)</title></head>
<body><abbr title="HyperText Markup Language">HTML</abbr></body>`,
  },
  {
    id: 20,
    category: 'Elements & Attributes',
    difficulty: 'Beginner',
    question: 'Why might you use a <span> instead of a <div>, or vice versa?',
    answer:
      'Use <span> when you need to wrap a piece of text or inline content without breaking the surrounding flow, such as highlighting a word within a sentence. Use <div> when you need a block-level container for grouping larger chunks of layout. Neither carries semantic meaning on its own, so they’re best reserved for cases where no more specific semantic element fits.',
    example: `<p>Please <span style="color:red">read carefully</span> before continuing.</p>
<div>A full block of unrelated content</div>`,
  },

  // ---------- Semantic HTML & Accessibility ----------
  {
    id: 21,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Beginner',
    question: 'What is semantic HTML, and why does it matter?',
    answer:
      'Semantic HTML means choosing elements that describe the meaning of their content, like <nav>, <article>, or <button>, instead of generic <div>s and <span>s for everything. It matters because screen readers, search engines, and browser features all rely on that meaning to navigate and interpret the page correctly, and it makes the markup easier for other developers to understand at a glance.',
    example: `<nav>...</nav>
<article>...</article>
<button>Submit</button>
<!-- vs. meaningless: <div class="nav">...</div> -->`,
  },
  {
    id: 22,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Intermediate',
    question: 'What’s the difference between <section>, <article>, and <div>?',
    answer:
      '<article> represents self-contained content that could stand alone, like a blog post or news item. <section> groups related content under a thematic heading but doesn’t necessarily make sense in isolation. <div> carries no semantic meaning at all and should only be used when nothing more descriptive applies, purely for styling or scripting hooks.',
    example: `<article>
  <section><h2>Introduction</h2><p>...</p></section>
  <section><h2>Conclusion</h2><p>...</p></section>
</article>`,
  },
  {
    id: 23,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Intermediate',
    question: 'What are ARIA attributes, and when should you use them?',
    answer:
      'ARIA (Accessible Rich Internet Applications) attributes like role, aria-label, and aria-hidden supplement HTML’s built-in semantics for assistive technologies, especially for custom widgets that native HTML can’t express. The first rule of ARIA is to avoid it when a native element already provides the needed semantics - a real <button> beats a <div role="button"> because the browser gives you keyboard support and focus handling for free.',
    example: `<div role="button" tabindex="0" aria-label="Close dialog">×</div>
<!-- Prefer: -->
<button aria-label="Close dialog">×</button>`,
  },
  {
    id: 24,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Beginner',
    question: 'Why is the alt attribute on images important?',
    answer:
      'The alt attribute provides a text alternative for images, which screen readers announce to visually impaired users and browsers display if the image fails to load. It’s also used by search engines to understand image content. Decorative images that add no informational value should use alt="" so screen readers skip them rather than reading a meaningless description.',
    example: `<img src="chart.png" alt="Sales grew 20% in Q3">
<img src="divider.png" alt="">`,
  },
  {
    id: 25,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Advanced',
    question: 'What are landmark roles, and how do semantic tags relate to them?',
    answer:
      'Landmark roles mark out the major regions of a page - banner, navigation, main, complementary, contentinfo - so assistive technology users can jump directly between sections instead of tabbing through everything. Semantic elements like <header>, <nav>, <main>, <aside>, and <footer> automatically carry these implicit ARIA roles, which is one of the strongest practical reasons to prefer them over generic divs.',
    example: `<header>...</header>   <!-- role="banner" -->
<nav>...</nav>         <!-- role="navigation" -->
<main>...</main>       <!-- role="main" -->`,
  },
  {
    id: 26,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Intermediate',
    question: 'What makes a form accessible?',
    answer:
      'Every input needs an associated <label> (via the for attribute matching the input’s id, or by wrapping the input), so screen readers announce what the field is for. Grouped fields like radio buttons benefit from <fieldset> and <legend>, and error messages should be programmatically associated with their inputs using aria-describedby rather than relying on color or position alone.',
    example: `<label for="email">Email</label>
<input id="email" type="email" aria-describedby="emailHelp">
<span id="emailHelp">We'll never share your email.</span>`,
  },
  {
    id: 27,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Intermediate',
    question: 'What is the tabindex attribute, and what do its different values mean?',
    answer:
      'tabindex controls whether and where an element appears in keyboard tab order. A value of 0 makes an otherwise non-focusable element (like a div) reachable in its natural document order, a negative value makes it focusable via script but skipped in tab order, and a positive value forces it ahead in a custom order - which is generally discouraged because it creates a confusing, hard-to-maintain tab sequence.',
    example: `<div tabindex="0">Focusable div (in natural tab order)</div>
<div tabindex="-1">Focusable only via script</div>`,
  },
  {
    id: 28,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Intermediate',
    question: 'What is a “skip link,” and why is it important?',
    answer:
      'A skip link is typically the first focusable element on a page, a hidden-until-focused anchor like “Skip to main content” that jumps keyboard users straight past repeated navigation to the main content. Without it, someone navigating by keyboard or screen reader has to tab through the entire nav menu on every single page load, which is a significant accessibility burden.',
    example: `<a class="skip-link" href="#main">Skip to main content</a>
<nav>...long navigation...</nav>
<main id="main">...</main>`,
  },
  {
    id: 29,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Intermediate',
    question: 'Why does heading hierarchy (h1–h6) matter beyond visual size?',
    answer:
      'Screen reader users often navigate a page by jumping between headings, so a logical, unbroken hierarchy (one h1, followed by properly nested h2s and h3s) acts like a table of contents for them. Skipping levels purely to get a certain font size, or using headings out of order, breaks that navigation even though the page might look fine visually - heading choice should be based on document structure, not appearance.',
    example: `<h1>Article Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>`,
  },
  {
    id: 30,
    category: 'Semantic HTML & Accessibility',
    difficulty: 'Advanced',
    question: 'What’s the difference between aria-hidden and the hidden attribute?',
    answer:
      'The hidden attribute removes an element from both the visual rendering and the accessibility tree entirely, as if it weren’t there. aria-hidden="true" only hides an element from assistive technology while it can remain visually present - useful for decorative icons sitting next to text that already conveys the same meaning, so screen readers aren’t forced to announce redundant content.',
    example: `<div hidden>Completely removed from view and a11y tree</div>
<span aria-hidden="true">🔥</span> <span>Fire (icon hidden, text remains)</span>`,
  },

  // ---------- Forms & Inputs ----------
  {
    id: 31,
    category: 'Forms & Inputs',
    difficulty: 'Beginner',
    question: 'What’s the difference between GET and POST form submission?',
    answer:
      'GET appends form data as query parameters visible in the URL, is bookmarkable, and is meant for idempotent requests like search queries. POST sends data in the request body, doesn’t expose it in the URL, and is meant for actions that change server state, like creating an account or submitting a payment. GET requests are also cacheable by browsers, while POST requests generally aren’t.',
    example: `<form action="/search" method="GET">...</form>
<!-- submits as /search?q=term -->
<form action="/login" method="POST">...</form>`,
  },
  {
    id: 32,
    category: 'Forms & Inputs',
    difficulty: 'Beginner',
    question: 'How does the label element improve forms, and how do you associate it with an input?',
    answer:
      'A <label> makes the input’s purpose clear to sighted and non-sighted users alike, and clicking or tapping the label text focuses (or toggles) its associated input, which is a big usability win for small checkboxes and radio buttons. Association happens either by setting the label’s for attribute to match the input’s id, or by physically nesting the input inside the label element.',
    example: `<label for="name">Name</label>
<input id="name" type="text">`,
  },
  {
    id: 33,
    category: 'Forms & Inputs',
    difficulty: 'Beginner',
    question: 'What are some of the more useful HTML5 input types beyond text?',
    answer:
      'Types like email, url, tel, number, date, and range give the browser semantic hints that trigger built-in validation, specialized mobile keyboards, and native pickers (like a date widget) without any JavaScript. They also degrade gracefully - a browser that doesn’t support a given type simply falls back to a plain text input, so there’s little downside to using them.',
    example: `<input type="email">
<input type="date">
<input type="range" min="0" max="100">`,
  },
  {
    id: 34,
    category: 'Forms & Inputs',
    difficulty: 'Intermediate',
    question: 'How does native HTML5 form validation work?',
    answer:
      'Attributes like required, pattern, min, max, minlength, and maxlength let the browser validate input before submission without custom JavaScript, and it will block submission and show a built-in error message if a field is invalid. This is convenient but shouldn’t be relied on exclusively - server-side validation is still necessary since client-side checks can be bypassed entirely.',
    example: `<input type="text" required minlength="3" maxlength="10">`,
  },
  {
    id: 35,
    category: 'Forms & Inputs',
    difficulty: 'Intermediate',
    question: 'What do <fieldset> and <legend> do?',
    answer:
      '<fieldset> groups a set of related form controls together, often rendered with a surrounding border, and <legend> provides a caption for that group as its first child. This is especially useful for radio button groups or multi-part sections of a form, since screen readers announce the legend text as context whenever a user focuses on any control inside the fieldset.',
    example: `<fieldset>
  <legend>Choose a plan</legend>
  <label><input type="radio" name="plan"> Basic</label>
  <label><input type="radio" name="plan"> Pro</label>
</fieldset>`,
  },
  {
    id: 36,
    category: 'Forms & Inputs',
    difficulty: 'Intermediate',
    question: 'What does the autocomplete attribute do?',
    answer:
      'autocomplete tells the browser whether and how it should offer to save and later auto-fill a field’s value, using standardized tokens like "email", "current-password", or "shipping address-line1" to hint at the field’s purpose. Setting it to off on sensitive one-time fields (like a security code) can prevent browsers from suggesting stale saved values, though modern browsers don’t always honor that on password fields for security reasons.',
    example: `<input type="email" autocomplete="email">
<input type="text" name="otp" autocomplete="off">`,
  },
  {
    id: 37,
    category: 'Forms & Inputs',
    difficulty: 'Intermediate',
    question: 'What happens by default when a form is submitted?',
    answer:
      'By default, submitting a form triggers a full page navigation to the URL in the form’s action attribute, using the method specified (GET or POST), which reloads the page. In modern applications this default is usually intercepted with JavaScript by calling preventDefault() on the submit event so the data can be sent asynchronously instead, typically via fetch.',
    example: `<form id="form" action="/submit" method="POST">
  <button type="submit">Send</button>
</form>
<script>
  form.addEventListener('submit', e => e.preventDefault());
</script>`,
  },
  {
    id: 38,
    category: 'Forms & Inputs',
    difficulty: 'Intermediate',
    question: 'What is FormData, and why is it useful?',
    answer:
      'FormData is a JavaScript API that lets you construct a set of key/value pairs directly from a form element, including file inputs, without manually walking through every field. It’s commonly passed straight to fetch as the request body, and it automatically respects each input’s name attribute, handles multipart encoding for file uploads, and skips disabled fields.',
    example: `<form id="myForm">
  <input name="email" value="a@b.com">
</form>
<script>
  const data = new FormData(document.getElementById('myForm'));
  fetch('/submit', { method: 'POST', body: data });
</script>`,
  },
  {
    id: 39,
    category: 'Forms & Inputs',
    difficulty: 'Beginner',
    question: 'Why does every form control need a name attribute?',
    answer:
      'The name attribute is what gets sent to the server as the key in the submitted data - without it, the browser omits that field from the request entirely, even if it has a value. id is a separate concern used for labels, styling, and scripting, and the two shouldn’t be assumed to serve the same purpose even though they’re often set to the same string.',
    example: `<input type="text" id="email" name="email" value="a@b.com">
<!-- submitted as email=a@b.com; without name, nothing is sent -->`,
  },
  {
    id: 40,
    category: 'Forms & Inputs',
    difficulty: 'Intermediate',
    question: 'What’s the difference between disabled and readonly on an input?',
    answer:
      'A disabled input can’t be focused, edited, or submitted with the form - its value is excluded from the submitted data entirely. A readonly input can be focused and its value is still submitted, but the user can’t edit it. Choosing between them depends on whether you want the field’s current value to be part of the form submission.',
    example: `<input value="Can't edit or submit" disabled>
<input value="Can't edit, but still submitted" readonly>`,
  },

  // ---------- Tables & Lists ----------
  {
    id: 41,
    category: 'Tables & Lists',
    difficulty: 'Beginner',
    question: 'What are the core building blocks of an HTML table?',
    answer:
      'A <table> contains rows (<tr>), and each row contains cells that are either header cells (<th>) or data cells (<td>). Optionally, <thead>, <tbody>, and <tfoot> group rows into logical sections, which helps both styling and accessibility by clarifying which rows are headers versus data.',
    example: `<table>
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Alice</td><td>30</td></tr>
</table>`,
  },
  {
    id: 42,
    category: 'Tables & Lists',
    difficulty: 'Intermediate',
    question: 'Why use <thead>, <tbody>, and <tfoot> instead of just a flat list of <tr> elements?',
    answer:
      'These sectioning elements give the table semantic structure that assistive technology and browsers can use - for example, a long table can have its <thead> repeated on every printed page, and <tbody> can be scrolled independently while the header stays fixed. They also make CSS targeting and JavaScript logic (like sorting only body rows) much simpler.',
    example: `<table>
  <thead><tr><th>Item</th><th>Price</th></tr></thead>
  <tbody><tr><td>Book</td><td>$10</td></tr></tbody>
  <tfoot><tr><td>Total</td><td>$10</td></tr></tfoot>
</table>`,
  },
  {
    id: 43,
    category: 'Tables & Lists',
    difficulty: 'Beginner',
    question: 'What do colspan and rowspan do?',
    answer:
      'colspan makes a table cell span multiple columns horizontally, and rowspan makes it span multiple rows vertically - both take a number indicating how many columns or rows to merge into. They’re commonly used for grouped headers or summary rows, but overusing them can make tables harder to parse for screen readers, which rely on straightforward cell-to-header relationships.',
    example: `<table>
  <tr><th colspan="2">Name</th></tr>
  <tr><td>First</td><td>Last</td></tr>
</table>`,
  },
  {
    id: 44,
    category: 'Tables & Lists',
    difficulty: 'Beginner',
    question: 'When is it appropriate to use a table, and when is it not?',
    answer:
      'Tables should be used for genuinely tabular data - anything with rows and columns of related values, like a pricing comparison or a spreadsheet export. They shouldn’t be used purely for page layout, a practice common in the early 2000s, because it produces markup that’s meaningless to screen readers and breaks down badly on smaller screens; CSS Grid and Flexbox are the correct tools for layout today.',
    example: `<!-- Good: tabular data -->
<table><tr><td>Q1</td><td>$100</td></tr></table>
<!-- Bad: using a table purely for page layout (avoid) -->`,
  },
  {
    id: 45,
    category: 'Tables & Lists',
    difficulty: 'Beginner',
    question: 'What’s the difference between <ul>, <ol>, and <dl>?',
    answer:
      '<ul> is an unordered list for items where sequence doesn’t matter, rendered with bullets by default. <ol> is an ordered list for sequential items, rendered with numbers. <dl> is a description list pairing terms (<dt>) with their descriptions (<dd>), commonly used for glossaries, FAQs, or key-value data like metadata.',
    example: `<ul><li>Milk</li><li>Eggs</li></ul>
<ol><li>Preheat oven</li><li>Bake 20 min</li></ol>
<dl><dt>HTML</dt><dd>Markup language</dd></dl>`,
  },
  {
    id: 46,
    category: 'Tables & Lists',
    difficulty: 'Beginner',
    question: 'Can you nest lists inside each other, and how is that structured?',
    answer:
      'Yes - a nested list is placed as a child of an <li> element within the parent list, not as a sibling of it. This produces a properly indented sub-list that screen readers announce with the correct nesting level, which matters for representing hierarchical content like a multi-level table of contents or a file tree.',
    example: `<ul>
  <li>Fruit
    <ul><li>Apple</li><li>Banana</li></ul>
  </li>
  <li>Vegetables</li>
</ul>`,
  },
  {
    id: 47,
    category: 'Tables & Lists',
    difficulty: 'Advanced',
    question: 'What is the scope attribute used for on table headers?',
    answer:
      'scope, set to values like "col" or "row" on a <th> element, tells assistive technology whether that header applies to the rest of its column or the rest of its row. Without it, screen readers can struggle to announce which header corresponds to a given data cell, especially in tables with headers on both axes.',
    example: `<table>
  <tr><th scope="col">Name</th><th scope="col">Age</th></tr>
  <tr><th scope="row">Alice</th><td>30</td></tr>
</table>`,
  },
  {
    id: 48,
    category: 'Tables & Lists',
    difficulty: 'Intermediate',
    question: 'How would you add a caption to a table, and why use it instead of a preceding paragraph?',
    answer:
      'The <caption> element, placed as the first child of <table>, provides a title or summary for the table and is programmatically tied to it. Screen readers announce the caption when a user enters the table, giving immediate context, which a plain paragraph placed near the table wouldn’t reliably provide since it has no structural connection to the table itself.',
    example: `<table>
  <caption>Monthly Sales Figures</caption>
  <tr><td>...</td></tr>
</table>`,
  },
  {
    id: 49,
    category: 'Tables & Lists',
    difficulty: 'Intermediate',
    question: 'How do you make a large HTML table responsive on small screens?',
    answer:
      'A common approach is wrapping the table in a container with overflow-x: auto so it scrolls horizontally instead of breaking the page layout. More advanced approaches use CSS to reflow the table into a card-like stacked format on narrow viewports, though that requires careful handling to preserve the header-to-cell relationships for accessibility.',
    example: `<div style="overflow-x: auto;">
  <table>...</table>
</div>`,
  },
  {
    id: 50,
    category: 'Tables & Lists',
    difficulty: 'Intermediate',
    question: 'Are <ul> and <ol> block-level or inline elements, and how does that affect their <li> children?',
    answer:
      'Both are block-level elements, and their <li> children are also block-level, which is why list items stack vertically by default. This default can be changed with CSS (for example, display: inline-block for a horizontal nav menu built from a <ul>), but the underlying semantics of “this is a list” remain intact regardless of how it’s visually styled.',
    example: `<ul style="display:flex; gap:1rem; list-style:none;">
  <li>Home</li><li>About</li><li>Contact</li>
</ul>`,
  },

  // ---------- Links, Images & Media ----------
  {
    id: 51,
    category: 'Links, Images & Media',
    difficulty: 'Beginner',
    question: 'What’s the difference between a relative and an absolute URL?',
    answer:
      'An absolute URL includes the full address, like https://example.com/about, and works regardless of where it’s referenced from. A relative URL, like /about or ../images/logo.png, is resolved against the current page’s location, which makes the site portable across domains (like moving from staging to production) without rewriting every link.',
    example: `<a href="https://example.com/about">Absolute</a>
<a href="/about">Relative</a>`,
  },
  {
    id: 52,
    category: 'Links, Images & Media',
    difficulty: 'Intermediate',
    question: 'What does the target="_blank" attribute do, and why should it usually be paired with rel="noopener"?',
    answer:
      'target="_blank" opens the link in a new browser tab or window. Without rel="noopener", the newly opened page gets a reference to the originating window via window.opener, which it could exploit to redirect the original tab to a malicious page - a technique called tabnabbing. Adding noopener (and often noreferrer, to also hide the referrer) closes that security gap.',
    example: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">External link</a>`,
  },
  {
    id: 53,
    category: 'Links, Images & Media',
    difficulty: 'Intermediate',
    question: 'What is the srcset attribute on <img>, and what problem does it solve?',
    answer:
      'srcset lets you offer multiple versions of an image at different resolutions or widths, letting the browser pick the most appropriate one based on the device’s screen density and viewport size. This avoids forcing high-density phone users to download a huge desktop-sized image, or low-density users to receive a blurry undersized one, all without any JavaScript.',
    example: `<img src="photo-800w.jpg"
     srcset="photo-400w.jpg 400w, photo-800w.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Landscape">`,
  },
  {
    id: 54,
    category: 'Links, Images & Media',
    difficulty: 'Intermediate',
    question: 'What does loading="lazy" do on an image, and when should you avoid it?',
    answer:
      'loading="lazy" tells the browser to defer loading an image until it’s about to scroll into the viewport, which speeds up initial page load for image-heavy pages. It should be avoided on images visible immediately above the fold, since deferring those actually delays what the user sees first and can hurt perceived performance and Core Web Vitals like Largest Contentful Paint.',
    example: `<img src="hero.jpg" alt="Hero banner"> <!-- above the fold: no lazy -->
<img src="footer-chart.jpg" alt="Chart" loading="lazy">`,
  },
  {
    id: 55,
    category: 'Links, Images & Media',
    difficulty: 'Advanced',
    question: 'What is the <picture> element used for, and how does it differ from srcset alone?',
    answer:
      '<picture> lets you provide entirely different image sources for different conditions - such as swapping to a differently cropped image on small screens, or serving a modern format like WebP with a fallback - using multiple <source> children plus a fallback <img>. srcset alone only lets the browser choose between resolutions of essentially the same image, not different art direction or formats.',
    example: `<picture>
  <source srcset="photo.webp" type="image/webp">
  <source media="(max-width: 600px)" srcset="photo-small.jpg">
  <img src="photo.jpg" alt="Fallback">
</picture>`,
  },
  {
    id: 56,
    category: 'Links, Images & Media',
    difficulty: 'Beginner',
    question: 'What are the key attributes to know for the <video> and <audio> elements?',
    answer:
      'controls shows the native playback UI, autoplay starts playback automatically (usually only permitted if also muted, due to browser policies), loop repeats playback, and multiple <source> children let you offer fallback formats for browsers that don’t support a given codec. Without controls and without JavaScript, a video element renders with no visible way for the user to interact with it.',
    example: `<video controls loop muted autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
</video>`,
  },
  {
    id: 57,
    category: 'Links, Images & Media',
    difficulty: 'Advanced',
    question: 'What security considerations apply to <iframe>, and what does the sandbox attribute do?',
    answer:
      'Embedding third-party content via <iframe> exposes your page to risk if that content is malicious or compromised, since it can attempt things like pop-ups, form hijacking, or top-level navigation. The sandbox attribute restricts what the embedded page is allowed to do - by default it disables scripts, forms, and popups entirely, and you selectively re-enable only what’s needed via values like allow-scripts or allow-same-origin.',
    example: `<iframe src="https://third-party.com/widget" sandbox="allow-scripts allow-same-origin"></iframe>`,
  },
  {
    id: 58,
    category: 'Links, Images & Media',
    difficulty: 'Intermediate',
    question: 'What does the rel attribute on a link tag or anchor communicate?',
    answer:
      'rel describes the relationship between the current document and the linked resource. On <a> tags it’s used for things like noopener, noreferrer, or nofollow (hinting search engines not to pass ranking credit). On <link> tags in the head it’s used for stylesheet, icon, canonical, and preload, telling the browser how to treat that resource.',
    example: `<a href="https://example.com" rel="nofollow noopener">External</a>
<link rel="stylesheet" href="styles.css">`,
  },
  {
    id: 59,
    category: 'Links, Images & Media',
    difficulty: 'Advanced',
    question: 'Besides the src and alt attributes, what other image attributes matter for performance?',
    answer:
      'width and height should always be set (even if CSS later overrides the display size) so the browser can reserve the correct space before the image loads, preventing layout shift. decoding="async" can hint the browser to decode the image off the main thread, and fetchpriority can signal that a particular image (like a hero banner) should be fetched before others.',
    example: `<img src="hero.jpg" alt="Hero" width="1200" height="600" decoding="async" fetchpriority="high">`,
  },
  {
    id: 60,
    category: 'Links, Images & Media',
    difficulty: 'Beginner',
    question: 'How does an anchor link to a specific section within the same page?',
    answer:
      'By setting the href to a hash followed by the target element’s id, like href="#pricing", which the browser matches against an element with id="pricing" anywhere on the page and scrolls to it. This same mechanism powers “back to top” links and in-page tables of contents, and it also updates the URL so the specific section is directly linkable and bookmarkable.',
    example: `<a href="#pricing">Jump to Pricing</a>
...
<section id="pricing">...</section>`,
  },

  // ---------- Head, Meta & SEO ----------
  {
    id: 61,
    category: 'Head, Meta & SEO',
    difficulty: 'Beginner',
    question: 'What kinds of content typically live inside <head>?',
    answer:
      'The <head> holds metadata that isn’t directly rendered as page content: the <title>, character encoding, viewport settings, linked stylesheets, favicons, Open Graph tags, and often preload hints or analytics scripts. None of it appears in the visible page body, but it shapes how the browser, search engines, and social platforms process the page.',
    example: `<head>
  <meta charset="UTF-8">
  <title>My Site</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>`,
  },
  {
    id: 62,
    category: 'Head, Meta & SEO',
    difficulty: 'Intermediate',
    question: 'Why is <meta charset="UTF-8"> important, and where should it be placed?',
    answer:
      'It declares the character encoding used to interpret the byte stream of the HTML file, and UTF-8 is the standard choice because it supports virtually every character and symbol in use today. It should appear as early as possible within <head> - ideally as the very first element - because the browser needs to know the encoding before it can correctly parse any text that follows, including the title.',
    example: `<head>
  <meta charset="UTF-8">
  <title>Café Menu</title>
</head>`,
  },
  {
    id: 63,
    category: 'Head, Meta & SEO',
    difficulty: 'Beginner',
    question: 'What does the viewport meta tag do, and why is it essential for mobile?',
    answer:
      '<meta name="viewport" content="width=device-width, initial-scale=1"> tells mobile browsers to render the page at the device’s actual width instead of a default desktop-sized virtual viewport that gets zoomed out. Without it, mobile browsers assume a page is built for a wide desktop screen and shrink everything down, making responsive CSS media queries effectively useless.',
    example: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  },
  {
    id: 64,
    category: 'Head, Meta & SEO',
    difficulty: 'Beginner',
    question: 'How does the meta description tag affect SEO?',
    answer:
      'The meta description doesn’t directly influence search ranking, but it’s frequently used by search engines as the snippet text shown under a search result, which strongly affects click-through rate. A well-written, unique description per page (roughly under 160 characters) gives you control over how the page is pitched to searchers instead of leaving it to an auto-generated excerpt.',
    example: `<meta name="description" content="Learn HTML5 fundamentals with practical, runnable examples.">`,
  },
  {
    id: 65,
    category: 'Head, Meta & SEO',
    difficulty: 'Intermediate',
    question: 'What are Open Graph tags, and what are they used for?',
    answer:
      'Open Graph meta tags, like og:title, og:description, and og:image, control how a page appears when shared on social platforms like Facebook or LinkedIn - the preview card’s title, blurb, and thumbnail. Without them, platforms fall back to guessing from the page’s regular title and content, which often produces a poor or irrelevant preview.',
    example: `<meta property="og:title" content="My Article">
<meta property="og:description" content="A short summary">
<meta property="og:image" content="https://example.com/thumb.jpg">`,
  },
  {
    id: 66,
    category: 'Head, Meta & SEO',
    difficulty: 'Beginner',
    question: 'Why does the <title> tag matter so much for SEO and usability?',
    answer:
      'The title tag is the single most prominent piece of text search engines use to understand and display a page, appearing as the clickable headline in search results and as the browser tab label. It should be unique per page and concisely describe the content, since a generic or duplicated title across many pages actively hurts both search visibility and user orientation.',
    example: `<title>Best Coffee Shops in Seattle | CoffeeGuide</title>`,
  },
  {
    id: 67,
    category: 'Head, Meta & SEO',
    difficulty: 'Beginner',
    question: 'How do you add a favicon to a page, and does it require more than one file?',
    answer:
      'A favicon is linked via <link rel="icon" href="..."> in the head, pointing to an image file, commonly .ico or .png. Modern sites often provide multiple sizes and formats (including an apple-touch-icon for iOS home screen bookmarks) using multiple <link> tags, since different browsers, operating systems, and contexts request different favicon dimensions.',
    example: `<link rel="icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
  },
  {
    id: 68,
    category: 'Head, Meta & SEO',
    difficulty: 'Advanced',
    question: 'What does a canonical link tag do, and why is it useful?',
    answer:
      '<link rel="canonical" href="..."> tells search engines which URL is the authoritative version of a page when the same or very similar content is reachable at multiple URLs, such as with and without query parameters. This prevents duplicate content from splitting ranking signals or being flagged as duplicate spam, consolidating SEO value onto one preferred URL.',
    example: `<link rel="canonical" href="https://example.com/product/123">`,
  },
  {
    id: 69,
    category: 'Head, Meta & SEO',
    difficulty: 'Intermediate',
    question: 'What does the robots meta tag control?',
    answer:
      '<meta name="robots" content="noindex, nofollow"> instructs search engine crawlers on how to treat a specific page - noindex keeps it out of search results, and nofollow tells the crawler not to pass ranking credit through its links. It’s commonly used on staging pages, admin areas, or thank-you pages that shouldn’t show up in search but still need to remain publicly reachable.',
    example: `<meta name="robots" content="noindex, nofollow">`,
  },
  {
    id: 70,
    category: 'Head, Meta & SEO',
    difficulty: 'Advanced',
    question: 'Can a page have multiple <meta> tags with the same name, and does order matter?',
    answer:
      'Technically the HTML parser will accept multiple meta tags with the same name attribute, but for most single-value metadata (like description or viewport) only one is meaningful and browsers or crawlers will typically just use the first or last one encountered, leading to unpredictable behavior. It’s best practice to keep exactly one of each unless the tag is explicitly designed to be repeated, like multiple og:image entries for a gallery.',
    example: `<meta property="og:image" content="img1.jpg">
<meta property="og:image" content="img2.jpg">
<!-- repeatable by design; but two <meta name="description"> tags is ambiguous -->`,
  },

  // ---------- HTML5 Features & APIs ----------
  {
    id: 71,
    category: 'HTML5 Features & APIs',
    difficulty: 'Beginner',
    question: 'What were the major additions introduced in HTML5?',
    answer:
      'HTML5 added semantic structural elements (header, nav, main, article, section, footer), native media support (video, audio) without plugins, the canvas element for programmatic drawing, form input types with built-in validation, and a suite of JavaScript APIs including web storage, geolocation, and drag and drop. The overall goal was to reduce reliance on third-party plugins like Flash and give the platform native capabilities for building richer applications.',
    example: `<video controls src="clip.mp4"></video>
<canvas id="chart" width="200" height="100"></canvas>
<input type="date">`,
  },
  {
    id: 72,
    category: 'HTML5 Features & APIs',
    difficulty: 'Advanced',
    question: 'What’s the difference between <canvas> and SVG?',
    answer:
      'Canvas is a bitmap-based drawing surface controlled entirely through JavaScript - once you draw a shape, the canvas has no memory of it as a discrete object, only pixels, so hit-testing and updates require redrawing. SVG is a vector-based, XML markup format where every shape is an actual DOM element you can select, style with CSS, and attach event listeners to individually, but that comes with more overhead for scenes with huge numbers of objects.',
    example: `<canvas id="c" width="100" height="100"></canvas>
<script>document.getElementById('c').getContext('2d').fillRect(10,10,50,50);</script>
<!-- vs SVG, where the shape is a real DOM element: -->
<svg><rect x="10" y="10" width="50" height="50" /></svg>`,
  },
  {
    id: 73,
    category: 'HTML5 Features & APIs',
    difficulty: 'Intermediate',
    question: 'What’s the difference between localStorage and sessionStorage?',
    answer:
      'Both are part of the Web Storage API and store key-value string data in the browser, but localStorage persists indefinitely across browser sessions and tabs until explicitly cleared, while sessionStorage is scoped to a single tab and is wiped when that tab closes. Neither is sent automatically with every HTTP request the way cookies are, which makes them lighter-weight for purely client-side state.',
    example: `localStorage.setItem('theme', 'dark');   // persists across tabs & restarts
sessionStorage.setItem('draft', 'hi');   // cleared when the tab closes`,
  },
  {
    id: 74,
    category: 'HTML5 Features & APIs',
    difficulty: 'Intermediate',
    question: 'How does the Geolocation API work at a basic level?',
    answer:
      'navigator.geolocation.getCurrentPosition() asks the browser to determine the user’s location, which triggers a permission prompt the user must explicitly approve. If granted, it returns coordinates (latitude and longitude) asynchronously via a callback; if denied or unavailable, an error callback fires instead, so the API is inherently asynchronous and permission-gated rather than something you can just read synchronously.',
    example: `navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords.latitude, pos.coords.longitude),
  err => console.error('Denied or unavailable', err)
);`,
  },
  {
    id: 75,
    category: 'HTML5 Features & APIs',
    difficulty: 'Intermediate',
    question: 'How does native drag and drop work in HTML5?',
    answer:
      'Adding the draggable="true" attribute to an element makes it draggable, and a series of events - dragstart, dragover, drop, dragend - fire on the source and target elements as the user drags. The dragover event on the target must call preventDefault(), since by default the browser disallows dropping, and data is passed between elements through the DataTransfer object.',
    example: `<div draggable="true" id="drag">Drag me</div>
<div id="drop">Drop here</div>
<script>
  drop.addEventListener('dragover', e => e.preventDefault());
  drop.addEventListener('drop', () => drop.append(drag));
</script>`,
  },
  {
    id: 76,
    category: 'HTML5 Features & APIs',
    difficulty: 'Advanced',
    question: 'What are web workers, conceptually, and why do they matter?',
    answer:
      'Web workers let JavaScript run on a background thread separate from the main UI thread, so expensive computations (like parsing a huge dataset) don’t block user interactions or freeze rendering. They communicate with the main thread through message passing rather than shared memory, and they don’t have access to the DOM directly, which keeps the concurrency model simple but requires structuring code around asynchronous messages.',
    example: `// main.js
const worker = new Worker('worker.js');
worker.postMessage('start');
worker.onmessage = e => console.log(e.data);`,
  },
  {
    id: 77,
    category: 'HTML5 Features & APIs',
    difficulty: 'Intermediate',
    question: 'What does the History API allow you to do?',
    answer:
      'The History API, through methods like pushState() and replaceState(), lets JavaScript change the URL shown in the address bar and add entries to the browser’s back/forward history without triggering a full page reload. This is the foundation of client-side routing in single-page applications, letting the app maintain a normal-feeling URL structure while managing rendering itself.',
    example: `history.pushState({ page: 2 }, '', '/page-2');
window.addEventListener('popstate', e => console.log(e.state));`,
  },
  {
    id: 78,
    category: 'HTML5 Features & APIs',
    difficulty: 'Advanced',
    question: 'What is the <template> element used for?',
    answer:
      'Content inside <template> is parsed by the browser but not rendered and not executed (scripts inside don’t run, images inside don’t load) until it’s explicitly cloned and inserted into the document via JavaScript. It’s a clean way to define reusable markup fragments, like a row layout for a table you’ll populate dynamically, without resorting to string concatenation of HTML.',
    example: `<template id="row">
  <tr><td class="name"></td></tr>
</template>
<script>
  const clone = document.getElementById('row').content.cloneNode(true);
</script>`,
  },
  {
    id: 79,
    category: 'HTML5 Features & APIs',
    difficulty: 'Advanced',
    question: 'What are Web Storage’s main limitations compared to something like IndexedDB?',
    answer:
      'localStorage and sessionStorage only store strings (so objects must be serialized with JSON), operate synchronously (which can block the main thread on large reads/writes), and typically cap out around 5–10MB depending on the browser. IndexedDB, by contrast, is asynchronous, can store structured data and large binary blobs, and supports much larger storage limits, making it the better choice for substantial offline datasets.',
    example: `localStorage.setItem('user', JSON.stringify({ name: 'Alice' }));
// vs IndexedDB: async, structured clone, much larger capacity
const request = indexedDB.open('myDB', 1);`,
  },
  {
    id: 80,
    category: 'HTML5 Features & APIs',
    difficulty: 'Advanced',
    question: 'What is the difference between a normal element and a custom element from the Web Components spec?',
    answer:
      'A custom element is a developer-defined tag (like <my-widget>) registered via customElements.define() and backed by a JavaScript class that controls its behavior, lifecycle, and rendering. Unlike built-in elements, the browser has no native understanding of what it does - all of its behavior comes from the class you attach, which is part of the broader Web Components toolkit alongside Shadow DOM and templates.',
    example: `<my-widget></my-widget>
<script>
  class MyWidget extends HTMLElement {
    connectedCallback() { this.textContent = 'Hello!'; }
  }
  customElements.define('my-widget', MyWidget);
</script>`,
  },

  // ---------- Performance & Best Practices ----------
  {
    id: 81,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'What does it mean for a script to be render-blocking, and how do async and defer help?',
    answer:
      'By default, a <script> tag pauses HTML parsing while the browser downloads and executes it, delaying everything below it from rendering. async downloads the script in parallel with parsing and executes it as soon as it’s ready (possibly out of order relative to other scripts), while defer downloads in parallel but waits to execute until parsing finishes, preserving document order - defer is usually the safer default for scripts that touch the DOM.',
    example: `<script src="analytics.js" async></script>
<script src="app.js" defer></script>`,
  },
  {
    id: 82,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'Why are inline styles generally discouraged?',
    answer:
      'Inline styles (via the style attribute) can’t be reused across elements, are harder to override due to high CSS specificity, bloat the HTML payload when repeated, and mix concerns that are cleaner to keep separate for maintainability. They also can’t take advantage of browser caching the way an external stylesheet can, and they conflict with stricter Content Security Policies that disallow inline styles for security reasons.',
    example: `<!-- Discouraged -->
<p style="color: red; font-size: 14px;">Text</p>
<!-- Preferred -->
<p class="warning">Text</p>`,
  },
  {
    id: 83,
    category: 'Performance & Best Practices',
    difficulty: 'Beginner',
    question: 'What does HTML validation mean, and why bother validating markup?',
    answer:
      'Validating HTML means checking it against the W3C specification for structural correctness - properly nested tags, required attributes present, no duplicate ids, and so on. Invalid markup can still render because browsers are forgiving parsers, but it increases the chance of unpredictable rendering differences between browsers and can break assistive technology that relies on well-formed structure.',
    example: `<!-- Invalid: unclosed tag and a duplicate id -->
<div id="box"><p>Text
<div id="box">More</div>`,
  },
  {
    id: 84,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'What image optimization practices most directly affect page performance?',
    answer:
      'Serving appropriately sized images (not a 4000px-wide photo displayed at 400px), using modern compressed formats like WebP or AVIF with fallbacks, applying loading="lazy" to below-the-fold images, and always specifying width and height to prevent layout shift are the highest-impact, lowest-effort wins. Images are typically the largest contributor to page weight, so these changes tend to move performance metrics the most.',
    example: `<img src="photo.webp" alt="Product" width="400" height="300" loading="lazy">`,
  },
  {
    id: 85,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'Why should the doctype and correct nesting matter for performance, not just correctness?',
    answer:
      'A missing doctype triggers quirks mode, which can force the browser into a different, less predictable rendering and layout algorithm, sometimes causing extra reflow work. Malformed nesting can also force the browser’s error-correction parser to do additional work reconstructing a valid tree, and it risks CSS selectors and JavaScript queries silently failing to match the structure a developer assumed existed.',
    example: `<!-- Missing doctype triggers quirks mode -->
<html><body><p>Content</p></body></html>
<!-- Always start with: -->
<!DOCTYPE html>`,
  },
  {
    id: 86,
    category: 'Performance & Best Practices',
    difficulty: 'Beginner',
    question: 'What are some HTML tags considered deprecated or obsolete, and why avoid them?',
    answer:
      'Tags like <font>, <center>, <marquee>, and <blink> were used to control presentation directly in HTML before CSS matured, and they’ve since been deprecated or removed from the spec in favor of CSS handling all styling. Using them today mixes structure and presentation in a way that’s hard to maintain, inconsistent across browsers, and often flagged by linters and validators.',
    example: `<!-- Deprecated -->
<center><font color="red">Old style</font></center>
<!-- Modern -->
<p style="text-align:center; color:red;">New style</p>`,
  },
  {
    id: 87,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'How does the order of resources in <head> affect perceived page load speed?',
    answer:
      'Critical CSS should load as early as possible since the browser won’t paint content until it has enough style information, while non-critical scripts should be deferred or moved so they don’t block that first render. Using <link rel="preload"> for critical resources like fonts, and placing non-essential third-party scripts (analytics, chat widgets) lower in priority, both help the page appear usable sooner.',
    example: `<head>
  <link rel="preload" href="font.woff2" as="font" crossorigin>
  <link rel="stylesheet" href="critical.css">
  <script src="analytics.js" defer></script>
</head>`,
  },
  {
    id: 88,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'What is Cumulative Layout Shift, and what HTML practices help prevent it?',
    answer:
      'Cumulative Layout Shift measures how much visible content unexpectedly shifts position as a page loads, which is jarring and can cause users to misclick. Reserving space for images and embeds with explicit width and height attributes, avoiding inserting content above existing content without reserving space, and loading web fonts in a way that minimizes reflow are all direct HTML-level mitigations.',
    example: `<img src="banner.jpg" alt="Banner" width="800" height="400">
<!-- reserves 2:1 space before the image loads, preventing shift -->`,
  },
  {
    id: 89,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'Why is minimizing the number of DOM nodes considered a best practice?',
    answer:
      'An excessively large or deeply nested DOM increases the memory the browser needs, slows down CSS selector matching and layout recalculation, and makes JavaScript traversal and updates more expensive. Flattening unnecessary wrapper divs and avoiding deeply nested structures where a simpler one would do keeps both rendering performance and code maintainability healthier as a page grows.',
    example: `<!-- Bloated -->
<div><div><div><span>Text</span></div></div></div>
<!-- Flattened -->
<span>Text</span>`,
  },
  {
    id: 90,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'What role does semantic HTML play in performance, beyond accessibility?',
    answer:
      'Semantic elements often carry implicit browser behavior that would otherwise need to be reimplemented with JavaScript and ARIA - like a <button> automatically getting keyboard focus, Enter/Space activation, and correct accessibility tree entries. Relying on native behavior instead of recreating it in script generally means less JavaScript shipped and executed, which directly benefits load and interaction performance.',
    example: `<button onclick="doThing()">Go</button>
<!-- gets keyboard focus & Enter/Space activation for free -->
<!-- vs recreating it: -->
<div onclick="doThing()" tabindex="0" role="button">Go</div>`,
  },

  // ---------- Common Gotchas & Advanced Topics ----------
  {
    id: 91,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Beginner',
    question: 'What’s the actual difference between <b> and <strong>, or <i> and <em>?',
    answer:
      '<b> and <i> are purely presentational, indicating bold or italic styling with no implied importance or emphasis, while <strong> and <em> carry semantic meaning - strong importance and stressed emphasis, respectively - which screen readers can convey through tone of voice. Visually they often render identically by default, but assistive technology and search engines treat them very differently.',
    example: `<p><b>Bold text</b> (no meaning) vs <strong>Important text</strong> (semantic)</p>
<p><i>Italic text</i> (no meaning) vs <em>Emphasized text</em> (semantic)</p>`,
  },
  {
    id: 92,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Beginner',
    question: 'When should you use <div> versus <span>, and what’s the risk of overusing them?',
    answer:
      '<div> is a block-level generic container and <span> is an inline generic container, and both should be a last resort after considering whether a semantic element fits better. Overusing them (“div soup”) produces markup with no inherent meaning, forcing accessibility, styling, and maintainability to depend entirely on class names and ARIA attributes rather than the structure itself.',
    example: `<!-- Div soup -->
<div class="header"><div class="nav"><div class="item">Home</div></div></div>
<!-- Better -->
<header><nav><a href="/">Home</a></nav></header>`,
  },
  {
    id: 93,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Beginner',
    question: 'Do void elements need to be self-closed in HTML5?',
    answer:
      'No - in HTML5, void elements like <img> and <br> are valid with or without the trailing slash, since the parser already knows those tags can’t contain children. The trailing slash is a holdover from XHTML’s stricter XML-based syntax, and many style guides still recommend it purely for consistency and easier visual scanning of markup.',
    example: `<img src="cat.jpg" alt="Cat">
<img src="cat.jpg" alt="Cat" />
<!-- both are valid HTML5 -->`,
  },
  {
    id: 94,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Advanced',
    question: 'What issues can arise from incorrect character encoding in HTML?',
    answer:
      'If the declared encoding doesn’t match the file’s actual byte encoding, special characters, accented letters, quotes, or emoji can render as garbled symbols known as mojibake. This typically happens when a file saved as one encoding (like Windows-1252) is served or declared as another (like UTF-8), which is why declaring UTF-8 both in the meta tag and in the actual file encoding, consistently, avoids the mismatch.',
    example: `<meta charset="UTF-8">
<p>Café &amp; Résumé</p>
<!-- Wrong encoding declared -> renders as "CafÃ©" (mojibake) -->`,
  },
  {
    id: 95,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Advanced',
    question: 'What was XHTML, and how does it differ from HTML5?',
    answer:
      'XHTML reformulated HTML as strict, well-formed XML, requiring lowercase tags, quoted attributes, properly closed and nested elements, and a single root element, with browsers meant to stop rendering entirely on any parsing error. HTML5 deliberately moved away from that strictness, defining precise error-recovery rules so browsers keep rendering forgivingly even when markup is malformed, which is why HTML5 became the dominant path forward instead of XHTML.',
    example: `<!-- XHTML requires strict closing -->
<p>Text<br /></p>
<!-- HTML5 tolerates unclosed/malformed tags and still renders -->
<p>Text<br></p>`,
  },
  {
    id: 96,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Advanced',
    question: 'What are custom elements, and what’s required to define one?',
    answer:
      'Custom elements are user-defined HTML tags, required to contain a hyphen in their name (like <user-card>) so the browser can distinguish them from any future standard tag. They’re registered with customElements.define(name, class), where the class extends HTMLElement and implements lifecycle callbacks like connectedCallback to control what happens when the element is inserted into the DOM.',
    example: `<user-card name="Alice"></user-card>
<script>
  customElements.define('user-card', class extends HTMLElement {
    connectedCallback() { this.textContent = this.getAttribute('name'); }
  });
</script>`,
  },
  {
    id: 97,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Advanced',
    question: 'What is the Shadow DOM, conceptually, and why is it useful for components?',
    answer:
      'Shadow DOM lets an element attach an isolated, encapsulated subtree of markup and styles that’s rendered as part of the page but shielded from the outer document’s CSS and JavaScript queries by default. This means a component’s internal styles won’t leak out and clash with the host page’s styles, and vice versa, which is central to building genuinely reusable, self-contained web components.',
    example: `<div id="host"></div>
<script>
  const shadow = document.getElementById('host').attachShadow({ mode: 'open' });
  shadow.innerHTML = '<style>p{color:red}</style><p>Encapsulated</p>';
</script>`,
  },
  {
    id: 98,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Advanced',
    question: 'Why can the rendered DOM differ from the original HTML source at runtime?',
    answer:
      'The browser’s error-correction parsing can silently fix malformed markup (closing unclosed tags, reordering misplaced elements), and JavaScript can freely add, remove, or modify nodes after the initial parse. Because of this, “view source” always reflects the original server response, while browser devtools inspect the current, live DOM - the two can diverge significantly on a dynamic page.',
    example: `<!-- Source: -->
<p>Unclosed paragraph
<p>Second paragraph
<!-- Parsed DOM: two separate, properly closed <p> elements -->`,
  },
  {
    id: 99,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Intermediate',
    question: 'Why can’t you nest a <p> tag inside another <p> tag, and what actually happens if you try?',
    answer:
      'The HTML spec defines <p> as only permitted to contain phrasing content (text and inline elements), not other block-level elements including another <p>. If you try, the parser’s error-recovery logic automatically closes the first paragraph as soon as it encounters the nested opening tag, producing two sibling paragraphs in the resulting DOM rather than the nested structure the source appeared to describe.',
    example: `<p>First<p>Second</p>
<!-- Browser auto-closes the first <p>, producing: -->
<!-- <p>First</p><p>Second</p> -->`,
  },
  {
    id: 100,
    category: 'Common Gotchas & Advanced Topics',
    difficulty: 'Intermediate',
    question: 'What’s the practical difference between styling something with HTML attributes versus relying entirely on CSS?',
    answer:
      'A handful of presentational HTML attributes still exist for legacy reasons (like width on a table cell, or the deprecated bgcolor), but they’re inflexible, can’t respond to media queries, and are overridden by CSS anyway due to the cascade. Relying on CSS classes and stylesheets instead keeps presentation centralized, cacheable, and responsive, which is why virtually all modern styling decisions should live in CSS rather than scattered HTML attributes.',
    example: `<!-- Legacy presentational attributes -->
<td width="100" bgcolor="yellow">Cell</td>
<!-- Modern -->
<td class="cell">Cell</td>
<style>.cell { width: 100px; background: yellow; }</style>`,
  },
];
