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

export interface CssTopic {
  slug: string;
  title: string;
  intro: string;
  sections: TopicSection[];
  challenge: TopicChallenge;
  quiz: QuizQuestion[];
  /** Matching category name in cssInterviewQuestions.ts, for cross-linking to relevant interview questions. */
  interviewCategory: string;
}

export const cssTopics: CssTopic[] = [
  {
    slug: 'introduction',
    title: 'CSS Introduction & Syntax',
    intro:
      'CSS (Cascading Style Sheets) is the language that controls how HTML content looks - colors, spacing, fonts, layout. HTML says what something is; CSS says how it should appear.',
    sections: [
      {
        heading: 'Why CSS Is Separate From HTML',
        body: [
          'Keeping structure (HTML) and presentation (CSS) apart means you can restyle an entire site by editing one file, instead of hunting through every page\'s markup. It also lets browsers, screen readers, and search engines read the content on its own terms, unaffected by how it looks.',
        ],
      },
      {
        heading: 'Three Ways to Add CSS',
        body: [
          'Inline styles use the style attribute directly on an element - fast for a one-off tweak, but it doesn\'t scale and can\'t be reused. An internal <style> block inside <head> keeps CSS in the same file as the HTML - fine for a single small page or a quick demo.',
          'An external stylesheet, linked with <link rel="stylesheet" href="styles.css">, is preferred for any real project: the browser caches it once and reuses it across every page, and your HTML and CSS stay cleanly separated.',
        ],
        example: {
          caption: 'All three methods, same visual result',
          starterCode:
            '<style>\n  .internal { color: white; background: #1dbf73; padding: 8px; border-radius: 8px; }\n</style>\n\n<p style="color: white; background: #6366f1; padding: 8px; border-radius: 8px;">Inline style</p>\n<p class="internal">Internal stylesheet</p>\n<!-- An external file would instead be linked as:\n  <link rel="stylesheet" href="styles.css" />\n-->',
        },
      },
      {
        heading: 'Basic Rule Syntax',
        body: [
          'A CSS rule pairs a selector (what to style) with a declaration block wrapped in curly braces: selector { property: value; }. Each declaration ends with a semicolon, and multiple selectors can share one rule by separating them with commas.',
        ],
        example: {
          starterCode:
            '<style>\n  h2, p {\n    color: #1dbf73;\n    font-family: sans-serif;\n  }\n</style>\n\n<h2>Styled heading</h2>\n<p>Styled paragraph, sharing the same rule.</p>',
        },
      },
      {
        heading: 'CSS Comments',
        body: [
          'Comments use /* ... */ and can span multiple lines. Unlike HTML comments, there is no shorthand // or # form - always use the slash-star syntax. Comments are stripped before the browser renders anything, so they\'re purely for the people reading the code.',
        ],
        example: {
          starterCode:
            '<style>\n  /* This heading is the page\'s main title */\n  h1 {\n    color: #1dbf73; /* brand green */\n  }\n</style>\n\n<h1>Commented Styles</h1>',
        },
      },
    ],
    challenge: {
      prompt: 'Add an internal <style> block that makes every <p> element have blue text and a comment explaining why.',
      starterCode: '<style>\n  <!-- add your rule here -->\n</style>\n\n<p>Style me!</p>\n',
      solutionCode:
        '<style>\n  /* Make all paragraphs blue for emphasis */\n  p {\n    color: blue;\n  }\n</style>\n\n<p>Style me!</p>',
    },
    quiz: [
      {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Computer Style System', 'Colorful Style Syntax', 'Creative Styling Sheets'],
        correctIndex: 0,
      },
      {
        question: 'Which method of adding CSS is generally preferred for real projects?',
        options: ['Inline style attributes', 'Internal <style> blocks', 'External stylesheets via <link>', 'JavaScript-injected styles'],
        correctIndex: 2,
        explanation: 'External stylesheets are cached by the browser and can be reused across every page on a site.',
      },
      {
        question: 'What is the correct syntax for a CSS rule?',
        options: ['selector: { property = value }', 'selector { property: value; }', 'selector [property: value]', '{ selector: property, value }'],
        correctIndex: 1,
      },
      {
        question: 'How do you write a CSS comment?',
        options: ['// comment', '# comment', '<!-- comment -->', '/* comment */'],
        correctIndex: 3,
      },
    ],
    interviewCategory: 'CSS Basics',
  },
  {
    slug: 'selectors',
    title: 'Selectors & Specificity',
    intro:
      'Selectors decide which elements a rule applies to, and specificity decides which rule wins when two rules target the same element.',
    sections: [
      {
        heading: 'Basic Selector Types',
        body: [
          'A type selector matches every element of that tag (p). A class selector (.card) matches any element with that class, and an id selector (#header) matches the single element with that id. The universal selector (*) matches everything, and attribute selectors ([type="text"]) match based on an attribute\'s presence or value.',
        ],
        example: {
          starterCode:
            '<style>\n  p { color: gray; }\n  .highlight { color: #1dbf73; font-weight: bold; }\n  #main-title { text-decoration: underline; }\n  [data-active] { border: 2px solid orange; }\n</style>\n\n<h1 id="main-title">Title</h1>\n<p class="highlight">Highlighted paragraph</p>\n<p data-active>Active paragraph</p>\n<p>Plain paragraph</p>',
        },
      },
      {
        heading: 'Combinators',
        body: [
          'A descendant combinator (a space) matches any element nested anywhere inside another, like .card p. A child combinator (>) matches only direct children, like .card > p. An adjacent sibling combinator (+) matches an element immediately following another, and a general sibling combinator (~) matches any following sibling, not just the immediate one.',
        ],
        example: {
          starterCode:
            '<style>\n  .card p { color: #1dbf73; } /* any p inside .card, at any depth */\n  .card > h3 { color: tomato; } /* only direct child h3 */\n  h3 + p { font-style: italic; } /* p immediately after an h3 */\n</style>\n\n<div class="card">\n  <h3>Card title</h3>\n  <p>Right after the heading (italic).</p>\n  <div><p>Nested deeper (still green, still matched by descendant rule).</p></div>\n</div>',
        },
      },
      {
        heading: 'How Specificity Is Calculated',
        body: [
          'When two rules conflict, the browser picks the one with higher specificity. Inline styles beat everything. Next comes id selectors, then classes/attribute selectors/pseudo-classes, then type selectors and pseudo-elements. More specific selectors of the same kind (like two chained classes) beat a single one of that kind.',
          'A rule marked !important overrides normal specificity entirely, which makes it tempting - but it also makes future overrides much harder, since only another !important (or inline style) can beat it. Treat it as a last resort, not a quick fix.',
        ],
        example: {
          caption: 'A class beats a type selector, regardless of source order',
          starterCode:
            '<style>\n  p { color: tomato; }\n  .green { color: #1dbf73; }\n</style>\n\n<p class="green">I am green, because a class is more specific than a type selector.</p>',
        },
      },
    ],
    challenge: {
      prompt: 'Style a .card so only its direct child <h3> is bold, while every <p> inside it (at any depth) is gray.',
      starterCode:
        '<style>\n  /* add your selectors here */\n</style>\n\n<div class="card">\n  <h3>Title</h3>\n  <p>Direct paragraph</p>\n  <div><p>Nested paragraph</p></div>\n</div>\n',
      solutionCode:
        '<style>\n  .card > h3 {\n    font-weight: bold;\n  }\n  .card p {\n    color: gray;\n  }\n</style>\n\n<div class="card">\n  <h3>Title</h3>\n  <p>Direct paragraph</p>\n  <div><p>Nested paragraph</p></div>\n</div>',
    },
    quiz: [
      {
        question: 'Which selector matches only direct children of an element?',
        options: ['Space (descendant)', '> (child)', '+ (adjacent sibling)', '~ (general sibling)'],
        correctIndex: 1,
      },
      {
        question: 'Which has the highest specificity?',
        options: ['A type selector', 'A class selector', 'An id selector', 'An inline style attribute'],
        correctIndex: 3,
      },
      {
        question: 'What does h2 + p select?',
        options: [
          'Every <p> anywhere after an <h2>',
          'A <p> that is immediately preceded by an <h2>',
          'An <h2> that contains a <p>',
          'Every <p> inside an <h2>',
        ],
        correctIndex: 1,
      },
      {
        question: 'Why is !important considered a last resort?',
        options: [
          'It is deprecated and browsers ignore it',
          'It only works on id selectors',
          'It overrides normal specificity, making future overrides much harder to manage',
          'It slows down page rendering significantly',
        ],
        correctIndex: 2,
      },
    ],
    interviewCategory: 'Selectors & Specificity',
  },
  {
    slug: 'colors-units',
    title: 'Colors, Units & Values',
    intro:
      'CSS gives you several ways to express color and several kinds of units for size - picking the right one for the situation makes styles easier to reason about and to make responsive.',
    sections: [
      {
        heading: 'Color Formats',
        body: [
          'Named colors (tomato, dodgerblue) are readable but limited to a fixed palette. Hex codes (#1dbf73) are compact and precise. rgb()/rgba() and hsl()/hsla() let you express color as red/green/blue or hue/saturation/lightness, with an optional alpha channel for transparency - hsl() is often easier to reason about when you want to tweak lightness or saturation without changing the hue.',
        ],
        example: {
          starterCode:
            '<style>\n  .named { background: tomato; }\n  .hex { background: #1dbf73; }\n  .rgb { background: rgb(99, 102, 241); }\n  .rgba { background: rgba(99, 102, 241, 0.5); }\n  .hsl { background: hsl(160, 70%, 45%); }\n  div { color: white; padding: 10px; margin-bottom: 4px; }\n</style>\n\n<div class="named">named</div>\n<div class="hex">hex</div>\n<div class="rgb">rgb()</div>\n<div class="rgba">rgba() - semi-transparent</div>\n<div class="hsl">hsl()</div>',
        },
      },
      {
        heading: 'Absolute vs Relative Units',
        body: [
          'px is an absolute unit - a fixed size regardless of context. em is relative to the font-size of the current element (or its parent, when used for font-size itself), which means it can compound unexpectedly when nested. rem is relative to the root element\'s font-size only, making it more predictable for consistent scaling across a whole page.',
          '% is relative to the parent\'s corresponding dimension. vw and vh are relative to the viewport\'s width and height, which makes them useful for elements that should scale with the browser window itself, like a full-screen hero section.',
        ],
        example: {
          caption: 'Same visual size, different units',
          starterCode:
            '<style>\n  html { font-size: 16px; }\n  .px { font-size: 24px; }\n  .rem { font-size: 1.5rem; }\n  .vw { width: 50vw; background: #1dbf73; color: white; }\n</style>\n\n<p class="px">Sized with px</p>\n<p class="rem">Sized with rem (1.5 * 16px root)</p>\n<div class="vw">50% of the viewport width</div>',
        },
      },
      {
        heading: 'currentColor',
        body: [
          'currentColor refers to an element\'s own computed color value, so you can reuse it for a border, background, or SVG fill without repeating the color or creating a separate variable - and it automatically updates if the color changes.',
        ],
        example: {
          starterCode:
            '<style>\n  .box {\n    color: #1dbf73;\n    border: 3px solid currentColor;\n    padding: 10px;\n  }\n</style>\n\n<div class="box">Border matches text color automatically.</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Create a div with an hsla() background at 50% opacity and a border that uses currentColor.',
      starterCode: '<style>\n  .box {\n    /* add background and border here */\n  }\n</style>\n\n<div class="box">Styled box</div>\n',
      solutionCode:
        '<style>\n  .box {\n    color: #1dbf73;\n    background: hsla(160, 70%, 45%, 0.5);\n    border: 2px solid currentColor;\n    padding: 12px;\n  }\n</style>\n\n<div class="box">Styled box</div>',
    },
    quiz: [
      {
        question: 'Which unit is relative to the root element\'s font-size?',
        options: ['px', 'em', 'rem', 'vh'],
        correctIndex: 2,
      },
      {
        question: 'Which color function includes an alpha (transparency) channel alongside hue, saturation, and lightness?',
        options: ['rgb()', 'hsl()', 'hsla()', 'hex'],
        correctIndex: 2,
      },
      {
        question: 'What does 50vw mean?',
        options: ['50 pixels', '50% of the parent element\'s width', '50% of the viewport width', '50% of the root font-size'],
        correctIndex: 2,
      },
      {
        question: 'What does the currentColor keyword do?',
        options: [
          'Picks a random color',
          'References the element\'s own computed color value',
          'Always resolves to black',
          'Only works inside SVG',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Typography & Colors',
  },
  {
    slug: 'box-model',
    title: 'The Box Model',
    intro:
      'Every element in CSS is a rectangular box made of content, padding, border, and margin - understanding how these stack is the foundation of all CSS layout.',
    sections: [
      {
        heading: 'Content, Padding, Border & Margin',
        body: [
          'Content is the actual text or child elements. Padding is space inside the border, between the border and the content. Border wraps around the padding. Margin is space outside the border, separating the element from its neighbors.',
        ],
        example: {
          starterCode:
            '<style>\n  .box {\n    width: 200px;\n    padding: 20px;\n    border: 5px solid #1dbf73;\n    margin: 20px;\n    background: #eef;\n  }\n</style>\n\n<div class="box">Content area, surrounded by padding, then border, then margin.</div>',
        },
      },
      {
        heading: 'content-box vs border-box',
        body: [
          'By default (box-sizing: content-box), width/height set only the content area\'s size - padding and border are added on top, so a 200px-wide box with 20px padding and a 5px border actually takes up 250px. box-sizing: border-box instead makes width/height include padding and border, so the box stays exactly 200px no matter how much padding you add.',
          'Because border-box math is far more predictable, nearly every project sets a global reset like *, *::before, *::after { box-sizing: border-box; } at the very top of the stylesheet.',
        ],
        example: {
          caption: 'Both boxes set width: 200px, but render differently',
          starterCode:
            '<style>\n  .content-box { box-sizing: content-box; width: 200px; padding: 20px; border: 5px solid tomato; }\n  .border-box { box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid #1dbf73; margin-top: 10px; }\n</style>\n\n<div class="content-box">content-box: renders wider than 200px</div>\n<div class="border-box">border-box: stays exactly 200px</div>',
        },
      },
      {
        heading: 'Margin Collapsing',
        body: [
          'When two block-level elements stack vertically, their top and bottom margins can "collapse" into a single margin equal to the larger of the two, instead of adding together. This only happens for vertical margins between normal-flow siblings (or a parent and its first/last child in some cases) - it never happens horizontally, and it doesn\'t happen if padding, border, or a clearfix separates them.',
        ],
        example: {
          starterCode:
            '<style>\n  * { box-sizing: border-box; }\n  .a { margin-bottom: 40px; background: #eef; padding: 10px; }\n  .b { margin-top: 20px; background: #efe; padding: 10px; }\n</style>\n\n<div class="a">Box A (margin-bottom: 40px)</div>\n<div class="b">Box B (margin-top: 20px) - gap is 40px, not 60px, because the margins collapsed</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Set box-sizing: border-box globally, then build a 300px-wide box with 24px padding and a 4px border that still renders at exactly 300px.',
      starterCode: '<style>\n  /* add a global box-sizing reset and the .box rule */\n</style>\n\n<div class="box">Exactly 300px wide</div>\n',
      solutionCode:
        '<style>\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  .box {\n    width: 300px;\n    padding: 24px;\n    border: 4px solid #1dbf73;\n  }\n</style>\n\n<div class="box">Exactly 300px wide</div>',
    },
    quiz: [
      {
        question: 'In the default content-box model, what does the width property size?',
        options: ['The full box including padding and border', 'Only the content area', 'Only the margin', 'The viewport'],
        correctIndex: 1,
      },
      {
        question: 'Why do most projects set box-sizing: border-box globally?',
        options: [
          'It makes text bold by default',
          'It makes width/height include padding and border, so sizes stay predictable',
          'It is required for flexbox to work',
          'It disables margin collapsing',
        ],
        correctIndex: 1,
      },
      {
        question: 'What is margin collapsing?',
        options: [
          'Margins are removed entirely on mobile',
          'Horizontal margins merge into one value',
          'Adjacent vertical margins between block siblings can combine into the larger of the two instead of adding',
          'Margins are converted to padding automatically',
        ],
        correctIndex: 2,
      },
      {
        question: 'Which order do the box model layers appear, from the inside out?',
        options: ['Margin, border, padding, content', 'Content, padding, border, margin', 'Padding, content, margin, border', 'Border, content, padding, margin'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Box Model & Layout',
  },
  {
    slug: 'typography',
    title: 'Typography & Text',
    intro:
      'Typography is often the single biggest lever for how polished a page feels - font choice, sizing, and spacing all work together to make text readable and pleasant.',
    sections: [
      {
        heading: 'Font Stacks & Fallbacks',
        body: [
          'font-family accepts a comma-separated list of fonts, tried in order until one is available. Always end the stack with a generic family (sans-serif, serif, monospace) as a final fallback, in case none of the named fonts load.',
        ],
        example: {
          starterCode:
            '<style>\n  body {\n    font-family: "Helvetica Neue", Arial, sans-serif;\n  }\n</style>\n\n<p>This text uses the font stack, falling back to sans-serif if nothing else loads.</p>',
        },
      },
      {
        heading: 'Sizing & Weight',
        body: [
          'font-size sets how large text renders, commonly in rem for consistent, scalable sizing. font-weight controls boldness, from 100 (thin) to 900 (black), with 400 as normal and 700 as bold.',
        ],
        example: {
          starterCode:
            '<style>\n  .small { font-size: 0.875rem; font-weight: 400; }\n  .large { font-size: 2rem; font-weight: 700; }\n</style>\n\n<p class="small">Small, normal weight</p>\n<p class="large">Large, bold</p>',
        },
      },
      {
        heading: 'Line Height, Alignment & Spacing',
        body: [
          'line-height sets the vertical space a line of text occupies. A unitless value like 1.5 scales with the element\'s own font-size (recommended, since it stays consistent if font-size changes); a fixed px value doesn\'t scale and can cause cramped or excessive spacing after resizing.',
          'text-align positions text within its container (left/center/right/justify), text-transform changes casing (uppercase/lowercase/capitalize) without altering the underlying text, and letter-spacing adds or removes space between characters - handy for small uppercase labels.',
        ],
        example: {
          starterCode:
            '<style>\n  p { line-height: 1.6; max-width: 300px; }\n  .label { text-transform: uppercase; letter-spacing: 0.08em; text-align: center; font-size: 0.75rem; }\n</style>\n\n<p>A paragraph with generous line-height reads more comfortably across longer lines of text.</p>\n<p class="label">small label</p>',
        },
      },
      {
        heading: 'Custom Web Fonts',
        body: [
          '@font-face lets you load your own font file and give it a name to use in font-family. Alternatively, a service like Google Fonts provides a ready-made <link> tag (or @import) that loads a hosted font without you needing to manage the font files yourself.',
        ],
        example: {
          caption: 'Loading a self-hosted font with @font-face',
          starterCode:
            '<style>\n  @font-face {\n    font-family: "MyFont";\n    src: url("myfont.woff2") format("woff2");\n  }\n  body {\n    font-family: "MyFont", sans-serif;\n  }\n</style>\n\n<p>Falls back to sans-serif until MyFont finishes loading (or if it fails).</p>',
        },
      },
    ],
    challenge: {
      prompt: 'Style a paragraph with a font stack ending in sans-serif, a line-height of 1.6, and centered, uppercase text.',
      starterCode: '<style>\n  p {\n    /* add typography rules here */\n  }\n</style>\n\n<p>Style this text</p>\n',
      solutionCode:
        '<style>\n  p {\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.6;\n    text-align: center;\n    text-transform: uppercase;\n  }\n</style>\n\n<p>Style this text</p>',
    },
    quiz: [
      {
        question: 'Why should a font-family stack always end with a generic family like sans-serif?',
        options: [
          'It is required syntax and CSS breaks without it',
          'It provides a fallback if none of the named fonts are available',
          'It makes the text bold',
          'It only affects print stylesheets',
        ],
        correctIndex: 1,
      },
      {
        question: 'What is the advantage of a unitless line-height value like 1.5?',
        options: [
          'It disables line spacing entirely',
          'It scales proportionally with the element\'s own font-size',
          'It is faster for the browser to render',
          'It only works with rem units',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which property changes text casing without altering the underlying characters?',
        options: ['font-variant', 'text-transform', 'letter-spacing', 'text-decoration'],
        correctIndex: 1,
      },
      {
        question: 'What does @font-face let you do?',
        options: [
          'Change text color based on theme',
          'Load a custom font file and register it for use in font-family',
          'Automatically bold all headings',
          'Set a fallback color for missing fonts',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Typography & Colors',
  },
  {
    slug: 'backgrounds-borders',
    title: 'Backgrounds & Borders',
    intro:
      'Backgrounds and borders shape an element\'s visual edges and surface - from a flat color card to a gradient hero banner with a soft shadow.',
    sections: [
      {
        heading: 'Background Properties',
        body: [
          'background-color sets a flat fill, background-image loads an image (or gradient), background-position places it, background-size controls how it scales (cover fills the box while cropping, contain fits it entirely), and background-repeat controls tiling.',
        ],
        example: {
          starterCode:
            '<style>\n  .box {\n    height: 150px;\n    background-color: #1dbf73;\n    background-image: url("https://picsum.photos/300/150");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n</style>\n\n<div class="box"></div>',
        },
      },
      {
        heading: 'Border Radius & Box Shadow',
        body: [
          'border-radius rounds corners - a small value softens a card, and 50% on a square element turns it into a circle. box-shadow adds depth with an offset-x, offset-y, blur, optional spread, and color, and can be layered with commas for more complex effects.',
        ],
        example: {
          starterCode:
            '<style>\n  .card {\n    width: 200px;\n    padding: 20px;\n    border-radius: 12px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    background: white;\n  }\n  .circle {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: #1dbf73;\n    margin-top: 16px;\n  }\n</style>\n\n<div class="card">A card with soft rounded corners and a shadow.</div>\n<div class="circle"></div>',
        },
      },
      {
        heading: 'Gradients',
        body: [
          'linear-gradient() blends colors along a straight line, with an optional angle or direction (to right, 45deg). radial-gradient() blends colors outward from a center point. Gradients are valid values for background-image, so they can even be layered on top of a background image.',
        ],
        example: {
          starterCode:
            '<style>\n  .linear {\n    height: 80px;\n    background: linear-gradient(to right, #1dbf73, #6366f1);\n  }\n  .radial {\n    height: 80px;\n    margin-top: 10px;\n    background: radial-gradient(circle, #1dbf73, #0a1f14);\n  }\n</style>\n\n<div class="linear"></div>\n<div class="radial"></div>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a rounded card with a linear-gradient background and a box-shadow.',
      starterCode: '<style>\n  .card {\n    /* add background, border-radius, and box-shadow */\n  }\n</style>\n\n<div class="card">Gradient card</div>\n',
      solutionCode:
        '<style>\n  .card {\n    width: 220px;\n    padding: 24px;\n    color: white;\n    border-radius: 16px;\n    background: linear-gradient(135deg, #1dbf73, #0a1f14);\n    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);\n  }\n</style>\n\n<div class="card">Gradient card</div>',
    },
    quiz: [
      {
        question: 'Which background-size value fills the entire box, cropping the image if needed?',
        options: ['contain', 'cover', 'auto', 'stretch'],
        correctIndex: 1,
      },
      {
        question: 'What value of border-radius turns a square box into a circle?',
        options: ['10px', '100%', '50%', '1em'],
        correctIndex: 2,
      },
      {
        question: 'Which property adds a soft drop-shadow effect around an element?',
        options: ['border-shadow', 'text-shadow', 'box-shadow', 'drop-shadow'],
        correctIndex: 2,
      },
      {
        question: 'What does linear-gradient(to right, red, blue) do?',
        options: [
          'Splits the box into two solid halves',
          'Blends from red to blue across the box, left to right',
          'Only works on borders',
          'Creates a circular blend',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Box Model & Layout',
  },
  {
    slug: 'display-positioning',
    title: 'Display & Positioning',
    intro:
      'The display and position properties control how an element takes up space and where exactly it sits - two of the most important (and most confusable) properties in CSS layout.',
    sections: [
      {
        heading: 'The display Property',
        body: [
          'block elements take the full available width and start on a new line (div, p). inline elements flow within text and ignore width/height (span, a). inline-block behaves like inline for flow but respects width, height, and vertical margins. display: none removes an element entirely - it takes up no space and isn\'t rendered, unlike visibility: hidden which hides it but keeps its space reserved. flex and grid turn an element into a layout container for its children, covered in their own chapters.',
        ],
        example: {
          starterCode:
            '<style>\n  .block { display: block; background: #eef; }\n  .inline { display: inline; background: #efe; }\n  .inline-block { display: inline-block; width: 100px; background: #fee; }\n  .none { display: none; }\n</style>\n\n<div class="block">block</div>\n<span class="inline">inline</span><span class="inline">inline</span>\n<div class="inline-block">inline-block (100px)</div>\n<div class="none">You will never see this</div>',
        },
      },
      {
        heading: 'The position Property',
        body: [
          'static is the default - normal document flow, top/left/etc. have no effect. relative positions an element offset from where it would normally sit, while still reserving its original space in the flow. absolute removes the element from flow entirely and positions it relative to its nearest ancestor that has a position other than static (its "containing block") - or the page itself if none exists.',
          'fixed positions relative to the browser viewport and stays put even when the page scrolls, useful for a sticky header. sticky behaves like relative until the element crosses a scroll threshold (like top: 0), then it "sticks" like fixed within its parent\'s bounds.',
        ],
        example: {
          caption: 'A relatively-positioned parent containing an absolutely-positioned badge',
          starterCode:
            '<style>\n  .card {\n    position: relative;\n    width: 220px;\n    height: 100px;\n    background: #eef;\n    padding: 12px;\n  }\n  .badge {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    background: #1dbf73;\n    color: white;\n    padding: 2px 8px;\n    border-radius: 999px;\n    font-size: 0.75rem;\n  }\n</style>\n\n<div class="card">\n  Card content\n  <span class="badge">New</span>\n</div>',
        },
      },
      {
        heading: 'z-index & Stacking Contexts',
        body: [
          'When elements overlap, z-index decides which renders on top - higher values win. z-index only has an effect on elements with a position other than static, and it only compares elements within the same stacking context. A new stacking context is created by things like position combined with a z-index, or properties like opacity < 1 and transform - inside that context, z-index values are only compared against siblings within it, not the whole page.',
        ],
        example: {
          starterCode:
            '<style>\n  .box { position: absolute; width: 100px; height: 100px; color: white; text-align: center; padding-top: 40px; }\n  .back { top: 0; left: 0; background: tomato; z-index: 1; }\n  .front { top: 20px; left: 20px; background: #1dbf73; z-index: 2; }\n</style>\n\n<div style="position: relative; height: 140px;">\n  <div class="box back">z-index: 1</div>\n  <div class="box front">z-index: 2</div>\n</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a relatively-positioned .card containing an absolutely-positioned .close-btn pinned to its top-right corner.',
      starterCode:
        '<style>\n  .card {\n    /* make this the positioning context */\n  }\n  .close-btn {\n    /* position this in the top-right corner */\n  }\n</style>\n\n<div class="card">\n  Card content\n  <span class="close-btn">x</span>\n</div>\n',
      solutionCode:
        '<style>\n  .card {\n    position: relative;\n    width: 200px;\n    height: 100px;\n    background: #eef;\n    padding: 12px;\n  }\n  .close-btn {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n  }\n</style>\n\n<div class="card">\n  Card content\n  <span class="close-btn">x</span>\n</div>',
    },
    quiz: [
      {
        question: 'Which display value removes an element from the page entirely, with no reserved space?',
        options: ['visibility: hidden', 'display: none', 'opacity: 0', 'display: inline'],
        correctIndex: 1,
      },
      {
        question: 'An absolutely-positioned element is positioned relative to what?',
        options: [
          'Always the browser viewport',
          'Its nearest ancestor with a position other than static',
          'Its immediate parent, always',
          'The <body> element only',
        ],
        correctIndex: 1,
      },
      {
        question: 'What makes position: sticky different from position: fixed?',
        options: [
          'Sticky never scrolls with the page',
          'Sticky behaves like relative until a scroll threshold, then sticks within its parent\'s bounds',
          'Sticky only works on text elements',
          'There is no difference',
        ],
        correctIndex: 1,
      },
      {
        question: 'When does z-index have an effect on an element?',
        options: [
          'Always, regardless of other properties',
          'Only on elements with a position value other than static',
          'Only inside a <table>',
          'Only when display: flex is set',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Positioning & Stacking',
  },
  {
    slug: 'flexbox',
    title: 'Flexbox',
    intro:
      'Flexbox is a one-dimensional layout system built for arranging items in a row or column, distributing space and alignment between them without manual float or positioning hacks.',
    sections: [
      {
        heading: 'Flex Container Properties',
        body: [
          'display: flex turns an element into a flex container, laying its direct children out along a single axis. flex-direction chooses that axis (row, the default, or column). justify-content aligns items along the main axis (flex-start, center, space-between, space-around), while align-items aligns them along the cross axis (stretch, center, flex-start, flex-end).',
          'flex-wrap: wrap lets items move to a new line instead of shrinking indefinitely, and gap adds consistent spacing between items without needing margin hacks on individual children.',
        ],
        example: {
          caption: 'A simple navbar using flexbox',
          starterCode:
            '<style>\n  .navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #0a1f14;\n    padding: 12px 20px;\n    gap: 16px;\n  }\n  .navbar a { color: white; text-decoration: none; }\n</style>\n\n<nav class="navbar">\n  <a href="#">Logo</a>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</nav>',
        },
      },
      {
        heading: 'Flex Item Properties',
        body: [
          'flex-grow lets an item expand to fill leftover space (a value of 1 grows, 0 does not). flex-shrink lets an item shrink when space is tight. flex-basis sets an item\'s starting size before growing/shrinking is applied. The flex shorthand (flex: 1) is the common way to write "grow and shrink evenly, ignoring content size."',
          'align-self overrides align-items for a single item, letting one child align differently from its siblings on the cross axis.',
        ],
        example: {
          caption: 'A row of equal-width cards',
          starterCode:
            '<style>\n  .row { display: flex; gap: 12px; }\n  .card { flex: 1; background: #eef; padding: 16px; text-align: center; border-radius: 8px; }\n  .card.tall { align-self: stretch; }\n</style>\n\n<div class="row">\n  <div class="card">One</div>\n  <div class="card">Two</div>\n  <div class="card">Three</div>\n</div>',
        },
      },
      {
        heading: 'Wrapping & Gaps in Practice',
        body: [
          'Combining flex-wrap: wrap with gap is a common pattern for a card row that reflows into multiple lines on smaller screens, without needing a media query just to fix spacing.',
        ],
        example: {
          starterCode:
            '<style>\n  .cards {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .card {\n    flex: 1 1 150px;\n    background: #1dbf73;\n    color: white;\n    padding: 16px;\n    border-radius: 8px;\n    text-align: center;\n  }\n</style>\n\n<div class="cards">\n  <div class="card">A</div>\n  <div class="card">B</div>\n  <div class="card">C</div>\n  <div class="card">D</div>\n</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a flex row of three equal-width cards with a gap between them, centered vertically.',
      starterCode:
        '<style>\n  .row {\n    /* make this a flex container */\n  }\n  .card {\n    /* make each card grow equally */\n  }\n</style>\n\n<div class="row">\n  <div class="card">One</div>\n  <div class="card">Two</div>\n  <div class="card">Three</div>\n</div>\n',
      solutionCode:
        '<style>\n  .row {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n  }\n  .card {\n    flex: 1;\n    background: #eef;\n    padding: 16px;\n    text-align: center;\n    border-radius: 8px;\n  }\n</style>\n\n<div class="row">\n  <div class="card">One</div>\n  <div class="card">Two</div>\n  <div class="card">Three</div>\n</div>',
    },
    quiz: [
      {
        question: 'Which property turns an element into a flex container?',
        options: ['flex: true', 'display: flex', 'position: flex', 'layout: flex'],
        correctIndex: 1,
      },
      {
        question: 'Which property aligns flex items along the main axis?',
        options: ['align-items', 'justify-content', 'flex-direction', 'align-self'],
        correctIndex: 1,
      },
      {
        question: 'What does flex: 1 on a flex item typically mean?',
        options: [
          'The item is fixed at 1px wide',
          'The item grows and shrinks evenly to fill available space',
          'The item is removed from the flex layout',
          'The item always stays at its content size',
        ],
        correctIndex: 1,
      },
      {
        question: 'Which property lets a single flex item override the container\'s cross-axis alignment?',
        options: ['justify-self', 'align-self', 'flex-basis', 'order'],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Flexbox & Grid',
  },
  {
    slug: 'grid',
    title: 'CSS Grid',
    intro:
      'CSS Grid is a two-dimensional layout system - unlike flexbox\'s single row or column, grid lets you define rows and columns together and place items precisely within them.',
    sections: [
      {
        heading: 'Defining Columns, Rows & the fr Unit',
        body: [
          'display: grid turns an element into a grid container. grid-template-columns and grid-template-rows define the track sizes. The fr unit represents a fraction of the remaining free space, so grid-template-columns: 1fr 2fr splits space into one-third/two-thirds without any manual percentage math. gap adds space between both rows and columns at once.',
        ],
        example: {
          starterCode:
            '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 10px;\n  }\n  .grid div { background: #eef; padding: 16px; }\n</style>\n\n<div class="grid">\n  <div>1fr (narrow)</div>\n  <div>2fr (twice as wide)</div>\n</div>',
        },
      },
      {
        heading: 'Placing Items',
        body: [
          'By default items fill the grid in order, but grid-column and grid-row let you place an item explicitly, using line numbers (grid-column: 1 / 3 spans from line 1 to line 3, covering two columns) or the span keyword (grid-column: span 2).',
        ],
        example: {
          starterCode:
            '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n  }\n  .wide { grid-column: span 2; background: #1dbf73; color: white; }\n  .grid div { padding: 16px; background: #eef; }\n</style>\n\n<div class="grid">\n  <div class="wide">Spans 2 columns</div>\n  <div>Normal</div>\n  <div>Normal</div>\n  <div>Normal</div>\n</div>',
        },
      },
      {
        heading: 'repeat() and minmax()',
        body: [
          'repeat(3, 1fr) is shorthand for "1fr 1fr 1fr" - handy for many equal tracks. minmax(150px, 1fr) lets a track grow but never shrink below 150px, which is the building block for responsive grids that don\'t rely on a fixed item count.',
        ],
        example: {
          starterCode:
            '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n    gap: 10px;\n  }\n  .grid div { background: #efe; padding: 16px; text-align: center; }\n</style>\n\n<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n</div>',
        },
      },
      {
        heading: 'auto-fit vs auto-fill for Responsive Grids',
        body: [
          'grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) creates as many 150px+ columns as fit the container, then stretches them to fill any leftover space - no media query required. auto-fill does the same fitting, but leaves empty tracks in place (not stretched) if there are fewer items than would fill a row, which matters when you want consistent track widths even with few items.',
        ],
        example: {
          caption: 'A responsive card grid with zero media queries',
          starterCode:
            '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 10px;\n  }\n  .grid div { background: #1dbf73; color: white; padding: 20px; text-align: center; border-radius: 8px; }\n</style>\n\n<div class="grid">\n  <div>1</div><div>2</div><div>3</div><div>4</div>\n</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a responsive grid of cards using auto-fit and minmax, with a gap, and no media queries.',
      starterCode:
        '<style>\n  .grid {\n    /* make this a responsive grid */\n  }\n</style>\n\n<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>\n',
      solutionCode:
        '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 12px;\n  }\n  .grid div { background: #1dbf73; color: white; padding: 20px; text-align: center; border-radius: 8px; }\n</style>\n\n<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>',
    },
    quiz: [
      {
        question: 'What does the fr unit represent?',
        options: ['A fixed pixel value', 'A fraction of the remaining free space in the grid container', 'A percentage of the viewport', 'A font-relative unit like em'],
        correctIndex: 1,
      },
      {
        question: 'What does grid-column: span 2 do?',
        options: ['Moves the item to column 2', 'Makes the item span two columns', 'Hides the item', 'Deletes column 2'],
        correctIndex: 1,
      },
      {
        question: 'What is the main difference between auto-fit and auto-fill?',
        options: [
          'auto-fit is for rows only, auto-fill for columns only',
          'auto-fit stretches existing tracks to fill leftover space; auto-fill leaves empty tracks in place',
          'They are exactly the same',
          'auto-fill requires JavaScript',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does minmax(150px, 1fr) do to a track?',
        options: [
          'Fixes it at exactly 150px',
          'Lets it grow to fill space but never shrink below 150px',
          'Hides it below 150px viewport width',
          'Splits it into two 75px tracks',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Flexbox & Grid',
  },
  {
    slug: 'responsive-design',
    title: 'Responsive Design & Media Queries',
    intro:
      'Responsive design means a page adapts to whatever screen it\'s viewed on - from a phone to an ultrawide monitor - rather than being built for one fixed width.',
    sections: [
      {
        heading: 'Mobile-First CSS',
        body: [
          'Mobile-first means writing your base styles for small screens first, then layering on media queries that enhance the layout for larger screens. This tends to produce simpler CSS than the reverse (desktop-first with overrides), since small-screen layouts are usually the simplest case to start from.',
        ],
      },
      {
        heading: '@media Syntax',
        body: [
          'A media query wraps a block of CSS in a condition, most commonly a viewport width: @media (min-width: 768px) { ... }. min-width applies the enclosed styles at that width and wider, which is why it pairs naturally with a mobile-first approach - you\'re adding rules as the screen grows, not removing them.',
        ],
        example: {
          caption: 'Base mobile layout, enhanced on wider screens',
          starterCode:
            '<style>\n  .cards { display: flex; flex-direction: column; gap: 10px; }\n  .card { background: #eef; padding: 16px; }\n\n  @media (min-width: 500px) {\n    .cards { flex-direction: row; }\n  }\n</style>\n\n<div class="cards">\n  <div class="card">A</div>\n  <div class="card">B</div>\n</div>\n<p>Resize the output pane (or view on different devices) to see the row/column switch.</p>',
        },
      },
      {
        heading: 'Responsive Units',
        body: [
          '%, vw/vh, and rem all help layouts adapt naturally without a media query for every tiny change. clamp(min, preferred, max) is especially useful for responsive font sizes - it lets a value scale fluidly between a floor and a ceiling based on the viewport, all in a single line.',
        ],
        example: {
          starterCode:
            '<style>\n  h1 {\n    font-size: clamp(1.5rem, 5vw, 3rem);\n  }\n</style>\n\n<h1>Resize the pane - this heading scales fluidly between 1.5rem and 3rem.</h1>',
        },
      },
      {
        heading: 'Container Queries: the Modern Alternative',
        body: [
          'A media query only knows about the viewport, so a component styled with one behaves differently depending on where it\'s placed on the page (a sidebar vs a full-width section). Container queries (@container) instead respond to the size of a component\'s own containing element, letting the same component adapt correctly no matter where it\'s dropped in a layout.',
        ],
      },
    ],
    challenge: {
      prompt: 'Write mobile-first CSS: cards stack in a column by default, and switch to a row at min-width: 600px.',
      starterCode:
        '<style>\n  .cards {\n    /* base mobile styles */\n  }\n\n  /* add a media query for larger screens */\n</style>\n\n<div class="cards">\n  <div>A</div>\n  <div>B</div>\n</div>\n',
      solutionCode:
        '<style>\n  .cards {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  @media (min-width: 600px) {\n    .cards {\n      flex-direction: row;\n    }\n  }\n</style>\n\n<div class="cards">\n  <div>A</div>\n  <div>B</div>\n</div>',
    },
    quiz: [
      {
        question: 'What does "mobile-first" mean in CSS?',
        options: [
          'Writing styles only for mobile devices',
          'Writing base styles for small screens, then enhancing for larger ones with media queries',
          'Using JavaScript to detect device type',
          'Writing desktop styles first, then overriding for mobile',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does @media (min-width: 768px) do?',
        options: [
          'Applies styles only below 768px',
          'Applies styles at 768px and wider',
          'Applies styles only at exactly 768px',
          'Disables styles above 768px',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does clamp(1rem, 4vw, 2rem) do?',
        options: [
          'Always renders at exactly 1rem',
          'Scales fluidly with viewport width, never going below 1rem or above 2rem',
          'Picks a random value between 1rem and 2rem',
          'Only works inside a media query',
        ],
        correctIndex: 1,
      },
      {
        question: 'How do container queries differ from media queries?',
        options: [
          'They respond to a component\'s containing element size, not the viewport',
          'They only work in print stylesheets',
          'They are identical to media queries',
          'They require JavaScript to function',
        ],
        correctIndex: 0,
      },
    ],
    interviewCategory: 'Responsive Design',
  },
  {
    slug: 'transitions-animations',
    title: 'Transitions & Animations',
    intro:
      'Transitions and animations bring interfaces to life - smoothing a hover effect, drawing attention to a change, or looping a subtle bit of motion - all without JavaScript.',
    sections: [
      {
        heading: 'The transition Shorthand',
        body: [
          'transition animates a property smoothly between its old and new value whenever that value changes (like on :hover). The shorthand packs together property, duration, timing-function (the easing curve, like ease or linear), and delay: transition: background-color 0.3s ease 0s.',
        ],
        example: {
          starterCode:
            '<style>\n  .btn {\n    background: #1dbf73;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 6px;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n  }\n  .btn:hover {\n    background: #159c5e;\n    transform: scale(1.05);\n  }\n</style>\n\n<button class="btn">Hover me</button>',
        },
      },
      {
        heading: '@keyframes & the animation Shorthand',
        body: [
          '@keyframes defines a named sequence of styles at different points (0%, 50%, 100%, or from/to) in an animation\'s timeline. The animation shorthand then applies it to an element: animation: name duration timing-function iteration-count. infinite makes it loop forever - useful for a loading spinner.',
        ],
        example: {
          caption: 'A looping spinner built with @keyframes',
          starterCode:
            '<style>\n  @keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n  .spinner {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #eee;\n    border-top-color: #1dbf73;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n  }\n</style>\n\n<div class="spinner"></div>',
        },
      },
      {
        heading: 'transform: the Performant Way to Animate Position & Size',
        body: [
          'translate(), scale(), and rotate() change an element\'s position, size, and rotation respectively, and can be combined in one declaration (transform: translateX(10px) scale(1.1)). Animating transform (and opacity) is far cheaper for the browser than animating properties like top/left/width/height, because those layout-affecting properties force the browser to recalculate the position of surrounding elements on every frame, while transform can be handled by the compositor alone.',
        ],
        example: {
          starterCode:
            '<style>\n  .box {\n    width: 60px;\n    height: 60px;\n    background: #1dbf73;\n    transition: transform 0.3s ease;\n  }\n  .box:hover {\n    transform: translateX(40px) rotate(20deg);\n  }\n</style>\n\n<div class="box"></div>',
        },
      },
    ],
    challenge: {
      prompt: 'Build a button that smoothly scales up and changes background color on hover, using the transition shorthand.',
      starterCode:
        '<style>\n  .btn {\n    background: #1dbf73;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 6px;\n    /* add a transition here */\n  }\n  .btn:hover {\n    /* add hover styles here */\n  }\n</style>\n\n<button class="btn">Hover me</button>\n',
      solutionCode:
        '<style>\n  .btn {\n    background: #1dbf73;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 6px;\n    transition: transform 0.25s ease, background-color 0.25s ease;\n  }\n  .btn:hover {\n    background: #159c5e;\n    transform: scale(1.08);\n  }\n</style>\n\n<button class="btn">Hover me</button>',
    },
    quiz: [
      {
        question: 'What does the transition shorthand animate?',
        options: [
          'Only color properties',
          'A property smoothly between its old and new value when it changes',
          'Only properties inside @keyframes',
          'The entire page on load',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does @keyframes define?',
        options: [
          'A single CSS selector',
          'A named sequence of styles at different points in an animation timeline',
          'A media query breakpoint',
          'A font-loading strategy',
        ],
        correctIndex: 1,
      },
      {
        question: 'Why is animating transform generally more performant than animating top/left?',
        options: [
          'transform is not actually a real CSS property',
          'transform can be handled by the compositor without triggering layout recalculation',
          'top/left animations are always instant',
          'There is no performance difference',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does animation: spin 1s linear infinite mean?',
        options: [
          'Run the spin keyframes once over 1 second, linear easing',
          'Run the spin keyframes forever, 1 second per cycle, at a constant speed',
          'Pause the spin animation after 1 second',
          'Run spin only on hover',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Animations & Transitions',
  },
  {
    slug: 'pseudo-classes-elements',
    title: 'Pseudo-classes & Pseudo-elements',
    intro:
      'Pseudo-classes target elements based on state or position, while pseudo-elements let you style or insert content around a part of an element that isn\'t a real DOM node.',
    sections: [
      {
        heading: 'Common Pseudo-classes',
        body: [
          ':hover applies while the mouse is over an element, and :focus applies while an element (like an input) has keyboard focus - both essential for interactive feedback. :first-child and :last-child match an element based on its position among its siblings, and :nth-child(n) matches based on a formula or fixed position, like :nth-child(2n) for every even item.',
        ],
        example: {
          starterCode:
            '<style>\n  li:nth-child(odd) { background: #eef; }\n  li:first-child { font-weight: bold; }\n  input:focus { border-color: #1dbf73; outline: none; }\n</style>\n\n<ul>\n  <li>First (bold, odd)</li>\n  <li>Second</li>\n  <li>Third (odd)</li>\n</ul>\n<input type="text" placeholder="Click me" style="border: 2px solid #ccc; padding: 6px;" />',
        },
      },
      {
        heading: 'Pseudo-elements & content',
        body: [
          '::before and ::after insert generated content immediately before or after an element\'s actual content, without adding an extra HTML tag. They require a content property to render at all (even content: "" is valid), making them handy for decorative icons, tooltips, or a small label attached to an existing element.',
        ],
        example: {
          starterCode:
            '<style>\n  .required::after {\n    content: " *";\n    color: red;\n  }\n  .quote::before {\n    content: open-quote;\n  }\n  .quote::after {\n    content: close-quote;\n  }\n</style>\n\n<label class="required">Email</label>\n<p class="quote">This text gets automatic quotation marks.</p>',
        },
      },
      {
        heading: 'Modern Selector Functions',
        body: [
          ':not(selector) excludes elements matching the inner selector, like li:not(:last-child) to style every list item except the last. :is() and :where() both match a list of selectors, letting you write one rule instead of repeating a selector chain - the only difference is :where() always contributes zero specificity, while :is() takes the specificity of its most specific argument.',
          ':has() is a relatively recent addition that lets a selector match based on its descendants, effectively a "parent selector" - like .card:has(img) to style only cards that contain an image.',
        ],
        example: {
          starterCode:
            '<style>\n  li:not(:last-child) {\n    border-bottom: 1px solid #ddd;\n  }\n  .card:has(img) {\n    border: 2px solid #1dbf73;\n  }\n</style>\n\n<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three (no bottom border)</li>\n</ul>\n<div class="card"><img src="https://picsum.photos/60" alt="thumb" /> Has an image</div>\n<div class="card">No image here</div>',
        },
      },
    ],
    challenge: {
      prompt: 'Style every list item except the last with a bottom border, and add a required-field asterisk using ::after.',
      starterCode:
        '<style>\n  /* add :not(:last-child) rule and a ::after rule */\n</style>\n\n<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>\n<label class="required">Name</label>\n',
      solutionCode:
        '<style>\n  li:not(:last-child) {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 4px;\n  }\n  .required::after {\n    content: " *";\n    color: red;\n  }\n</style>\n\n<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>\n<label class="required">Name</label>',
    },
    quiz: [
      {
        question: 'Which pseudo-class applies styles while an element has keyboard focus?',
        options: [':hover', ':focus', ':active', ':checked'],
        correctIndex: 1,
      },
      {
        question: 'What is required for ::before or ::after to render at all?',
        options: ['A width and height', 'A content property', 'A position value', 'An id attribute'],
        correctIndex: 1,
      },
      {
        question: 'What is the key difference between :is() and :where()?',
        options: [
          'They are functionally identical in every way except :where() always contributes zero specificity',
          ':where() only works on classes',
          ':is() cannot take multiple selectors',
          ':where() is not valid CSS',
        ],
        correctIndex: 0,
      },
      {
        question: 'What does .card:has(img) select?',
        options: [
          'Every <img> inside a .card',
          'Only .card elements that contain an <img> descendant',
          'Only .card elements without an image',
          'The first .card on the page',
        ],
        correctIndex: 1,
      },
    ],
    interviewCategory: 'Modern CSS & Gotchas',
  },
  {
    slug: 'variables-best-practices',
    title: 'CSS Variables & Best Practices',
    intro:
      'CSS custom properties (informally called CSS variables) let you define reusable values right in your stylesheet - and a few closing best practices help keep any CSS codebase maintainable as it grows.',
    sections: [
      {
        heading: 'Custom Properties',
        body: [
          'A custom property is declared with a double-dash prefix, like --brand-color: #1dbf73;, usually on :root so it\'s available everywhere. var(--brand-color) reads that value anywhere a normal value would go, and var(--brand-color, blue) supplies a fallback if the variable isn\'t defined.',
        ],
        example: {
          starterCode:
            '<style>\n  :root {\n    --brand-color: #1dbf73;\n    --spacing: 16px;\n  }\n  .box {\n    background: var(--brand-color);\n    padding: var(--spacing);\n    color: white;\n  }\n  .fallback {\n    color: var(--undefined-color, tomato);\n  }\n</style>\n\n<div class="box">Uses custom properties</div>\n<p class="fallback">Uses a fallback value</p>',
        },
      },
      {
        heading: 'Why Variables Beat Preprocessor Variables for Theming',
        body: [
          'A preprocessor variable (like in Sass) is compiled away into fixed values at build time - to change a theme, you\'d need to recompile the whole stylesheet. A native CSS custom property is resolved live in the browser, so redefining it (for example, inside a [data-theme="dark"] selector, or via JavaScript) instantly re-themes every rule that references it, with no rebuild step.',
        ],
        example: {
          caption: 'Runtime theming with a data attribute',
          starterCode:
            '<style>\n  :root { --bg: white; --fg: black; }\n  [data-theme="dark"] { --bg: #111; --fg: white; }\n  body { background: var(--bg); color: var(--fg); }\n</style>\n\n<div data-theme="dark" style="padding: 16px;">\n  Dark themed section, driven purely by CSS variables.\n</div>',
        },
      },
      {
        heading: 'A Naming Convention: BEM',
        body: [
          'BEM (Block__Element--Modifier) is a class-naming convention that keeps large stylesheets predictable: .card is a block, .card__title is an element inside it, and .card--featured is a modifier variant of the whole block. It avoids deep nested selectors and makes it obvious from the class name alone what an element relates to.',
        ],
        example: {
          starterCode:
            '<style>\n  .card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; }\n  .card__title { font-weight: bold; margin: 0 0 8px; }\n  .card--featured { border-color: #1dbf73; box-shadow: 0 0 0 2px #1dbf73; }\n</style>\n\n<div class="card card--featured">\n  <p class="card__title">Featured Card</p>\n  <p>BEM naming keeps relationships obvious from the class name.</p>\n</div>',
        },
      },
      {
        heading: 'General Best Practices',
        body: [
          'Avoid !important - it breaks the natural cascade and makes future overrides painful; solve specificity problems with better selectors instead. Avoid overly specific or deeply nested selectors (like .page .content .sidebar .widget h3) - they\'re fragile and hard to override later; prefer flatter, class-based selectors. Finally, most real projects start with a CSS reset (or a minimal one, like a *, box-sizing: border-box rule plus removing default margins) to flatten out inconsistent browser defaults before any real styling begins.',
        ],
      },
    ],
    challenge: {
      prompt: 'Define --brand-color and --spacing as custom properties on :root, then use them (with var()) to style a box.',
      starterCode:
        '<style>\n  :root {\n    /* define --brand-color and --spacing here */\n  }\n  .box {\n    /* use var() to apply them */\n  }\n</style>\n\n<div class="box">Themed box</div>\n',
      solutionCode:
        '<style>\n  :root {\n    --brand-color: #1dbf73;\n    --spacing: 20px;\n  }\n  .box {\n    background: var(--brand-color);\n    padding: var(--spacing);\n    color: white;\n    border-radius: 8px;\n  }\n</style>\n\n<div class="box">Themed box</div>',
    },
    quiz: [
      {
        question: 'How do you declare a CSS custom property?',
        options: ['$name: value;', '@name: value;', '--name: value;', '#name: value;'],
        correctIndex: 2,
      },
      {
        question: 'Why do native CSS variables suit runtime theming (like dark mode) better than preprocessor variables?',
        options: [
          'They are resolved live in the browser and can be redefined without recompiling',
          'They are faster to type',
          'Preprocessor variables cannot hold color values',
          'There is no real difference',
        ],
        correctIndex: 0,
      },
      {
        question: 'In BEM, what does .card__title represent?',
        options: ['A modifier of the card block', 'An element belonging to the .card block', 'A completely unrelated block', 'A pseudo-class'],
        correctIndex: 1,
      },
      {
        question: 'Which is considered a CSS best practice?',
        options: [
          'Reaching for !important whenever a style doesn\'t apply',
          'Writing deeply nested, highly specific selectors for every rule',
          'Avoiding !important and overly specific selectors, and starting with a CSS reset',
          'Avoiding custom properties in favor of hardcoded values',
        ],
        correctIndex: 2,
      },
    ],
    interviewCategory: 'Performance & Best Practices',
  },
];
