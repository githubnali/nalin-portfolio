export interface InterviewQA {
  id: number;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  question: string;
  answer: string;
  /** Short CSS rule block that makes the answer concrete. Optional. */
  example?: string;
}

export const cssInterviewQuestions: InterviewQA[] = [
  // ---------- CSS Basics ----------
  {
    id: 1,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'What is CSS, and what problem does it solve that HTML alone can’t?',
    answer:
      'CSS (Cascading Style Sheets) describes how HTML content should look - colors, spacing, layout, typography - separating presentation from structure. Without it, browsers would render every page with the same plain default stylesheet, and any visual customization would have to live inline on every element, which quickly becomes unmaintainable at scale.',
    example: `p {
  color: #333;
  font-size: 16px;
}`,
  },
  {
    id: 2,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'What are the three ways to include CSS in a page, and when would you choose each?',
    answer:
      'Inline styles (the style attribute) apply to a single element and are useful for quick one-offs or dynamically generated styles, but they’re hard to maintain and have the highest specificity. Internal styles (a <style> block in the head) suit a single page with no shared styling needs. External stylesheets (linked via <link>) are preferred for real projects because they’re cacheable, reusable across pages, and keep markup clean.',
    example: `<!-- external is preferred -->
<link rel="stylesheet" href="styles.css">`,
  },
  {
    id: 3,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'What does “cascading” actually mean in Cascading Style Sheets?',
    answer:
      'It refers to the algorithm the browser uses to resolve conflicting rules that target the same element: it weighs origin (browser vs author vs user styles), specificity, and source order, applying later rules over earlier ones when specificity ties. Understanding the cascade is the difference between guessing why a style “isn’t working” and knowing exactly which rule won and why.',
    example: `p { color: blue; }
p { color: red; } /* wins: same specificity, comes later */`,
  },
  {
    id: 4,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'What is CSS inheritance, and which properties typically inherit?',
    answer:
      'Inheritance means some properties automatically pass their computed value from a parent element down to its children unless overridden - mostly text-related properties like color, font-family, and line-height. Box-model properties like margin, padding, border, and width do not inherit, because it would rarely make sense for every nested box to automatically copy its parent’s spacing.',
    example: `body {
  font-family: sans-serif; /* inherited by all text */
  color: #222;
}`,
  },
  {
    id: 5,
    category: 'CSS Basics',
    difficulty: 'Intermediate',
    question: 'Can you give a quick overview of the CSS box model?',
    answer:
      'Every element is rendered as a rectangular box made of content, padding, border, and margin, from the inside out. Padding adds space inside the border, margin adds space outside it, and the total rendered size is the sum of all four layers unless box-sizing changes how width and height are calculated. This model underlies virtually every layout calculation in CSS.',
    example: `.box {
  width: 200px;
  padding: 10px;
  border: 2px solid #000;
  margin: 20px;
}`,
  },
  {
    id: 6,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'What units are available in CSS, and how do absolute and relative units differ?',
    answer:
      'Absolute units like px are fixed regardless of context, giving predictable but rigid sizing. Relative units like %, em, rem, vw, and vh scale based on something else - a parent’s size, the root font size, or the viewport - which is what makes responsive, accessible layouts possible, since they respond to user zoom and different screen sizes automatically.',
    example: `.title {
  font-size: 2rem;   /* relative to root */
  width: 50%;        /* relative to parent */
  height: 100vh;     /* relative to viewport */
}`,
  },
  {
    id: 7,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'How do you write comments in CSS?',
    answer:
      'CSS comments are wrapped in /* ... */ and can span multiple lines; there’s no single-line // syntax like in JavaScript. They’re stripped out before rendering and are useful for documenting why a particular hack or override exists, since CSS rules alone rarely explain their own intent.',
    example: `/* TODO: remove once the new nav ships */
.legacy-nav { display: none; }`,
  },
  {
    id: 8,
    category: 'CSS Basics',
    difficulty: 'Intermediate',
    question: 'What does !important do, and why is it generally discouraged?',
    answer:
      '!important overrides normal cascade and specificity rules, forcing that declaration to win regardless of what else targets the element - short of another !important with higher specificity or a later one at the same specificity. It’s discouraged because it breaks the predictable order of the cascade, making future overrides require yet more !important flags, a pattern that snowballs into unmaintainable stylesheets.',
    example: `.badge {
  color: red !important; /* wins over almost everything else */
}`,
  },
  {
    id: 9,
    category: 'CSS Basics',
    difficulty: 'Intermediate',
    question: 'What is a CSS reset or normalize.css, and why might a project use one?',
    answer:
      'Browsers ship their own default stylesheets (user-agent styles) that differ slightly between browsers - default margins on headings, list bullet styles, form control fonts, and so on. A reset aggressively zeroes out these defaults so you build up from a blank slate, while normalize.css instead makes defaults consistent across browsers without removing sensible ones, which is usually the gentler and more common choice today.',
    example: `/* minimal reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
  },
  {
    id: 10,
    category: 'CSS Basics',
    difficulty: 'Beginner',
    question: 'What are browser default (user-agent) styles, and why do they matter?',
    answer:
      'User-agent styles are the baseline CSS every browser applies automatically before any author stylesheet loads - things like default margins on <p> and <h1>, bullet points on <ul>, and blue underlined links. They matter because unstyled elements are never truly “unstyled”; they inherit these built-in defaults, which is why a page can look reasonably formatted even before any custom CSS is written.',
    example: `/* browser default, roughly */
h1 { margin: 0.67em 0; font-size: 2em; }
a { color: blue; text-decoration: underline; }`,
  },

  // ---------- Selectors & Specificity ----------
  {
    id: 11,
    category: 'Selectors & Specificity',
    difficulty: 'Beginner',
    question: 'What are the main types of CSS selectors?',
    answer:
      'The core types are type selectors (p, div), class selectors (.card), id selectors (#header), attribute selectors ([type="text"]), and pseudo-class/pseudo-element selectors (:hover, ::before). Each has a different specificity weight, and picking the right one is as much about maintainability - avoiding overly tight coupling to markup - as it is about matching the right elements.',
    example: `p { color: gray; }
.card { border: 1px solid #ddd; }
#logo { width: 120px; }
[type="text"] { padding: 4px; }`,
  },
  {
    id: 12,
    category: 'Selectors & Specificity',
    difficulty: 'Intermediate',
    question: 'What do the descendant, child, adjacent sibling, and general sibling combinators do?',
    answer:
      'A descendant combinator (space) matches any nested element at any depth, while a child combinator (>) matches only direct children. An adjacent sibling combinator (+) matches the very next sibling, and a general sibling combinator (~) matches all siblings that follow, regardless of distance. Choosing the tightest combinator that expresses your intent avoids accidentally styling unrelated nested elements.',
    example: `.card p { }      /* any descendant paragraph */
.card > p { }    /* direct child paragraph only */
h2 + p { }       /* paragraph immediately after an h2 */
h2 ~ p { }       /* all paragraphs after an h2, same parent */`,
  },
  {
    id: 13,
    category: 'Selectors & Specificity',
    difficulty: 'Intermediate',
    question: 'How is CSS specificity calculated, and how are ties broken?',
    answer:
      'Specificity is commonly expressed as a tuple of (inline styles, ids, classes/attributes/pseudo-classes, type selectors/pseudo-elements), and a rule with a higher value in an earlier category always outweighs any number of matches in a later one - one id beats a thousand classes. When two selectors have identical specificity, the cascade falls back to source order, so whichever rule appears later in the stylesheet wins.',
    example: `#nav .item { }      /* specificity: 1 id, 1 class */
.nav .item.active { } /* specificity: 0 id, 3 classes - loses to above */`,
  },
  {
    id: 14,
    category: 'Selectors & Specificity',
    difficulty: 'Beginner',
    question: 'What do attribute selectors let you match, beyond exact equality?',
    answer:
      'Attribute selectors can match presence ([disabled]), exact value ([type="text"]), substring at the start ([href^="https"]), substring at the end ([src$=".png"]), or substring anywhere ([class*="col-"]). This is powerful for targeting elements based on data or state without adding extra classes, though heavy reliance on them can make styles harder to trace back to markup intent.',
    example: `a[href^="https"] { color: green; }
img[src$=".png"] { border: none; }`,
  },
  {
    id: 15,
    category: 'Selectors & Specificity',
    difficulty: 'Advanced',
    question: 'What do :not(), :is(), and :where() do, and how does :where() differ in specificity?',
    answer:
      ':not() excludes elements matching its argument, while :is() and :where() let you group multiple selectors into one to avoid repetition. :is() takes on the specificity of its most specific argument, but :where() always contributes zero specificity regardless of what’s inside it, which makes it ideal for writing low-priority base styles or resets that are trivially easy to override later.',
    example: `:is(h1, h2, h3) { font-weight: 700; }
:where(h1, h2, h3) { margin: 0; } /* contributes 0 specificity */`,
  },
  {
    id: 16,
    category: 'Selectors & Specificity',
    difficulty: 'Intermediate',
    question: 'Why is the universal selector (*) considered expensive, and when is it still reasonable to use?',
    answer:
      'The universal selector matches every single element, so the browser has to evaluate the rest of the rule against the entire tree, which can add up on very large or deeply nested pages. It’s still perfectly reasonable for global, low-cost resets like box-sizing: border-box, where you genuinely want the rule to apply everywhere and the property being set is cheap to compute.',
    example: `* {
  box-sizing: border-box;
}`,
  },
  {
    id: 17,
    category: 'Selectors & Specificity',
    difficulty: 'Beginner',
    question: 'What’s the difference between chaining selectors together and combining them with a comma?',
    answer:
      'Chaining selectors with no separator, like .card.featured, requires an element to match all of them simultaneously - it must have both classes. A comma-separated list, like .card, .featured, applies the same declaration block to each selector independently, matching elements that satisfy either one. Confusing the two is a common source of styles applying to more or fewer elements than intended.',
    example: `.card.featured { border-color: gold; } /* both classes required */
.card, .featured { padding: 1rem; }     /* either class */`,
  },
  {
    id: 18,
    category: 'Selectors & Specificity',
    difficulty: 'Intermediate',
    question: 'What are pseudo-classes and pseudo-elements, and how do you tell them apart syntactically?',
    answer:
      'Pseudo-classes, written with a single colon like :hover or :first-child, select elements based on state or position that isn’t expressible with a plain selector. Pseudo-elements, written with a double colon like ::before or ::first-line, target a sub-part of an element that doesn’t exist as its own node in the DOM. Browsers still accept single-colon syntax for older pseudo-elements for backward compatibility, but double-colon is the modern, unambiguous convention.',
    example: `a:hover { color: orange; }
p::first-line { font-weight: bold; }`,
  },
  {
    id: 19,
    category: 'Selectors & Specificity',
    difficulty: 'Beginner',
    question: 'How do :first-child, :last-child, and :nth-child() differ from :first-of-type and :nth-of-type()?',
    answer:
      ':nth-child() and its siblings count position among all sibling elements regardless of tag name, so :first-child fails if the first sibling is a different element type than the one being targeted. :nth-of-type() and its siblings instead count position only among siblings of the same tag, which is more forgiving when markup mixes different element types at the same level.',
    example: `/* fails if a <div> comes first, even before a <p> */
p:first-child { }
/* matches the first <p>, regardless of what precedes it */
p:first-of-type { }`,
  },
  {
    id: 20,
    category: 'Selectors & Specificity',
    difficulty: 'Advanced',
    question: 'How would you debug a style that “isn’t applying” when you believe your selector is correct?',
    answer:
      'The usual culprits are a more specific rule elsewhere winning the cascade, a later rule at equal specificity overriding it, a typo in the selector or property name, or the property simply not being inherited or applicable to that display type. Browser devtools show the full list of matching rules with strikethrough on overridden ones, which is the fastest way to see exactly which declaration is winning and why.',
    example: `/* devtools shows both rules; the more specific one wins */
.card p { color: black; }
#page .card p { color: red; } /* wins: higher specificity */`,
  },

  // ---------- Box Model & Layout ----------
  {
    id: 21,
    category: 'Box Model & Layout',
    difficulty: 'Intermediate',
    question: 'What’s the difference between content-box and border-box for box-sizing?',
    answer:
      'With the default content-box, width and height apply only to the content area, so padding and border are added on top, making the final rendered size larger than what you declared. With border-box, width and height include padding and border, so the box stays exactly the size you set regardless of how much padding you add - which is why most projects globally set box-sizing: border-box for predictable sizing.',
    example: `.content-box { box-sizing: content-box; width: 200px; padding: 20px; } /* renders 240px wide */
.border-box   { box-sizing: border-box;  width: 200px; padding: 20px; } /* renders 200px wide */`,
  },
  {
    id: 22,
    category: 'Box Model & Layout',
    difficulty: 'Advanced',
    question: 'What is margin collapsing, and when does it happen?',
    answer:
      'Margin collapsing merges the vertical margins between adjacent block-level elements (or between a parent and its first/last child with no border, padding, or content separating them) into a single margin equal to the larger of the two, rather than their sum. It only affects vertical margins in normal flow - never horizontal margins, and never elements that establish a new block formatting context, like ones with overflow: hidden or display: flex.',
    example: `.a { margin-bottom: 20px; }
.b { margin-top: 30px; }
/* gap between them is 30px (the larger), not 50px */`,
  },
  {
    id: 23,
    category: 'Box Model & Layout',
    difficulty: 'Beginner',
    question: 'When should you reach for padding versus margin?',
    answer:
      'Padding adds space inside an element’s border, so it’s part of the element’s own clickable/background area - useful for giving a button or card breathing room around its content. Margin adds space outside the border, separating the element from its neighbors, and is the right tool when you want gaps between siblings without affecting the element’s own background or hit area.',
    example: `.button {
  padding: 12px 20px; /* space inside, part of the clickable area */
  margin-bottom: 16px; /* space between this button and the next element */
}`,
  },
  {
    id: 24,
    category: 'Box Model & Layout',
    difficulty: 'Intermediate',
    question: 'What are the common values of the overflow property, and what does each do?',
    answer:
      'visible (the default) lets content spill outside the box without clipping. hidden clips overflowing content and hides it entirely. scroll always shows scrollbars, even if content fits. auto shows scrollbars only when content actually overflows, which is usually the most user-friendly choice since it avoids permanent scrollbars on containers that don’t need them.',
    example: `.panel {
  max-height: 200px;
  overflow-y: auto; /* scrollbar appears only if content overflows */
}`,
  },
  {
    id: 25,
    category: 'Box Model & Layout',
    difficulty: 'Beginner',
    question: 'What are the most common display values, and how do they differ in flow behavior?',
    answer:
      'block elements take the full available width and start on a new line; inline elements flow within text and ignore width/height/vertical margin; inline-block behaves like inline for flow but respects width, height, and margin like a block. display: none removes the element from layout entirely, as if it never existed in the DOM for rendering purposes.',
    example: `.block { display: block; }
.inline-block { display: inline-block; width: 100px; }
.hidden { display: none; }`,
  },
  {
    id: 26,
    category: 'Box Model & Layout',
    difficulty: 'Intermediate',
    question: 'Why is float considered a legacy layout technique, and what problem does clearfix solve?',
    answer:
      'float was originally meant for wrapping text around images, but was repurposed for entire page layouts before flexbox and grid existed - a hack that worked but came with side effects, chief among them that a floated element is removed from its parent’s normal height calculation, causing the parent to collapse to zero height. The clearfix technique inserts a pseudo-element with clear: both after the floated children specifically to force the parent to recognize their height again.',
    example: `.clearfix::after {
  content: '';
  display: table;
  clear: both;
}`,
  },
  {
    id: 27,
    category: 'Box Model & Layout',
    difficulty: 'Intermediate',
    question: 'What’s the difference between visibility: hidden, display: none, and opacity: 0?',
    answer:
      'display: none removes the element from layout entirely, so it takes up no space and isn’t reachable by keyboard or screen readers. visibility: hidden keeps the element’s space reserved in layout but makes it invisible and non-interactive, and can be selectively overridden by a child with visibility: visible. opacity: 0 keeps the element fully in layout, fully interactive (clickable, focusable), and visually transparent - a distinction that matters a lot for accessibility and hit-testing.',
    example: `.gone     { display: none; }      /* no space, not in a11y tree */
.invisible{ visibility: hidden; }  /* space reserved, not interactive */
.faded    { opacity: 0; }          /* space reserved, still clickable! */`,
  },
  {
    id: 28,
    category: 'Box Model & Layout',
    difficulty: 'Beginner',
    question: 'What does the display property’s inline-block value give you that plain inline doesn’t?',
    answer:
      'Plain inline elements ignore explicit width, height, and top/bottom margin - they size purely to their content. inline-block keeps the element flowing inline with surrounding text or elements, but lets you set an explicit width, height, and full margin/padding, which is useful for things like a row of equally sized nav links or icon buttons that need consistent dimensions.',
    example: `.icon-button {
  display: inline-block;
  width: 40px;
  height: 40px;
}`,
  },
  {
    id: 29,
    category: 'Box Model & Layout',
    difficulty: 'Beginner',
    question: 'What is a block formatting context, in plain terms?',
    answer:
      'A block formatting context (BFC) is a mini independent layout region where floats and margins inside it don’t interact with content outside it - it’s what prevents a floated child’s overflow from leaking into the parent, and what stops margin collapsing between a container and elements outside it. Properties like overflow: hidden, display: flow-root, and display: inline-block all establish a new BFC as a side effect.',
    example: `.container {
  overflow: hidden; /* establishes a BFC, contains floated children */
}
.container img { float: left; }`,
  },
  {
    id: 30,
    category: 'Box Model & Layout',
    difficulty: 'Intermediate',
    question: 'How do min-width/max-width and min-height/max-height interact with a fixed width?',
    answer:
      'When both are present, min/max constraints always take priority over a conflicting fixed width or height - the browser first tries the specified width, then clamps it if it falls outside the min/max range. This makes them useful for building flexible components that have a preferred size but shouldn’t shrink below usability or grow beyond a comfortable reading width.',
    example: `.card {
  width: 50%;
  min-width: 240px;
  max-width: 480px;
}`,
  },

  // ---------- Typography & Colors ----------
  {
    id: 31,
    category: 'Typography & Colors',
    difficulty: 'Beginner',
    question: 'Why do font-family declarations usually list several fonts as a stack?',
    answer:
      'A font stack lists preferred fonts in order, falling back to the next one if an earlier choice isn’t installed or hasn’t loaded yet, ending with a generic family like sans-serif or serif as a guaranteed last resort. This ensures text always renders in something reasonable even before a web font finishes downloading, or on a system that lacks your first-choice typeface.',
    example: `body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}`,
  },
  {
    id: 32,
    category: 'Typography & Colors',
    difficulty: 'Intermediate',
    question: 'What’s the practical difference between rem, em, px, and %?',
    answer:
      'px is an absolute unit that never changes based on context. em is relative to the font size of the current element, which means it compounds when nested elements each set their own em-based font size. rem is relative only to the root (html) element’s font size, avoiding that compounding problem, which is why rem is generally preferred for consistent, predictable sizing across a whole page. % is relative to the parent’s corresponding property, most commonly used for widths.',
    example: `html { font-size: 16px; }
.card { font-size: 1.5rem; }       /* always 24px, regardless of nesting */
.card .nested { font-size: 1.5em; } /* 1.5x whatever its own parent's size is */`,
  },
  {
    id: 33,
    category: 'Typography & Colors',
    difficulty: 'Intermediate',
    question: 'Why is a unitless line-height generally recommended over a pixel value?',
    answer:
      'A unitless value like line-height: 1.5 is inherited as a ratio, so each descendant recalculates it against its own font-size, keeping line spacing proportional even if a nested element changes font size. A fixed pixel value is inherited literally, which can produce cramped or overly loose line spacing on nested text whose font size differs from where the line-height was declared.',
    example: `body {
  line-height: 1.5; /* scales correctly for any nested font-size */
}`,
  },
  {
    id: 34,
    category: 'Typography & Colors',
    difficulty: 'Beginner',
    question: 'What are the main ways to represent color in CSS, and how does alpha transparency fit in?',
    answer:
      'Colors can be written as keywords (red), hex codes (#ff0000), rgb()/rgba(), or hsl()/hsla() - and modern CSS also allows a slash-based alpha syntax on all of them, like rgb(255 0 0 / 50%). hsl (hue, saturation, lightness) is often the most intuitive for designers to tweak by hand, since adjusting lightness or saturation is more predictable than guessing new rgb values.',
    example: `.a { color: #ff0000; }
.b { color: rgba(255, 0, 0, 0.5); }
.c { color: hsl(0 100% 50% / 50%); }`,
  },
  {
    id: 35,
    category: 'Typography & Colors',
    difficulty: 'Intermediate',
    question: 'What does the currentColor keyword do, and where is it useful?',
    answer:
      'currentColor resolves to the computed value of the color property on that same element, and can be used anywhere a color value is expected - borders, shadows, SVG fill, background gradients. It’s especially useful for icons or borders that should always match whatever text color is set, without duplicating the color value or needing a separate variable.',
    example: `.icon {
  color: #2563eb;
  border: 2px solid currentColor; /* matches the icon color automatically */
}`,
  },
  {
    id: 36,
    category: 'Typography & Colors',
    difficulty: 'Advanced',
    question: 'What does @font-face do, and what should you consider when using custom web fonts?',
    answer:
      '@font-face registers a custom font by pointing to font files (usually woff2 with a woff fallback) so the browser can download and use them even if not installed locally. Because custom fonts add network requests and can cause a flash of invisible or unstyled text while loading, it’s worth setting font-display (like swap) to control that behavior and limiting the number of weights/styles loaded.',
    example: `@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
}`,
  },
  {
    id: 37,
    category: 'Typography & Colors',
    difficulty: 'Intermediate',
    question: 'How do you truncate overflowing text with an ellipsis, and what properties does it require?',
    answer:
      'The classic single-line ellipsis needs three properties together: overflow: hidden to clip the text, text-overflow: ellipsis to show the “...” marker, and white-space: nowrap to prevent the text from wrapping to a new line in the first place. Omitting any one of the three means the ellipsis either never appears or the text wraps instead of truncating.',
    example: `.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
  },
  {
    id: 38,
    category: 'Typography & Colors',
    difficulty: 'Advanced',
    question: 'What’s the difference between word-break and overflow-wrap when handling long words?',
    answer:
      'overflow-wrap: break-word only breaks a word if it would otherwise overflow its container, keeping normal wrapping behavior for everything else, which makes it the safer default. word-break: break-all breaks between any two characters regardless of whether the word would actually overflow, which can awkwardly fragment short words too - it’s more aggressive and better suited to things like long unbroken URLs or hashes.',
    example: `.safe-break { overflow-wrap: break-word; }
.aggressive-break { word-break: break-all; }`,
  },
  {
    id: 39,
    category: 'Typography & Colors',
    difficulty: 'Beginner',
    question: 'What’s the difference between font-weight: bold and the <strong> element, from a styling perspective?',
    answer:
      '<strong> conveys semantic importance to assistive technology regardless of how it’s styled, while font-weight: bold is a purely visual instruction with no semantic meaning attached. In practice you often want both to line up - important text should look bold and be marked as strong - but they’re independent concerns: you can visually bold non-important text, or mark something as strong and then override its weight in CSS.',
    example: `strong { font-weight: 700; } /* semantic + visual, by default browsers align these */
.visual-only { font-weight: 700; } /* looks bold, carries no semantic weight */`,
  },
  {
    id: 40,
    category: 'Typography & Colors',
    difficulty: 'Intermediate',
    question: 'How would you handle color contrast to keep text accessible?',
    answer:
      'WCAG defines minimum contrast ratios between text and its background - generally 4.5:1 for normal text and 3:1 for large text - and tools like browser devtools or online contrast checkers can verify a given color pair meets that threshold. Relying on color alone to convey meaning (like only a red border for an error) is also a contrast-adjacent accessibility issue, since it fails for colorblind users regardless of the ratio.',
    example: `.error-text {
  color: #b91c1c; /* verified to meet 4.5:1 against white background */
  background: #ffffff;
}`,
  },

  // ---------- Positioning & Stacking ----------
  {
    id: 41,
    category: 'Positioning & Stacking',
    difficulty: 'Intermediate',
    question: 'What are the differences between static, relative, absolute, fixed, and sticky positioning?',
    answer:
      'static is the default, normal-flow behavior with no offset properties applied. relative shifts an element from its normal position without removing it from flow, and establishes a positioning context for descendants. absolute removes the element from flow entirely and positions it relative to its nearest positioned ancestor. fixed positions relative to the viewport and ignores scrolling. sticky toggles between relative and fixed depending on scroll position, sticking once it reaches a threshold within its containing block.',
    example: `.relative { position: relative; top: 10px; }
.absolute { position: absolute; top: 0; right: 0; }
.fixed    { position: fixed; bottom: 20px; right: 20px; }
.sticky   { position: sticky; top: 0; }`,
  },
  {
    id: 42,
    category: 'Positioning & Stacking',
    difficulty: 'Advanced',
    question: 'What determines the “containing block” for an absolutely positioned element?',
    answer:
      'An absolutely positioned element is placed relative to the nearest ancestor whose position is anything other than static - relative, absolute, fixed, or sticky. If no ancestor is positioned, it falls back to the initial containing block, which is effectively the viewport, positioning the element relative to the whole page rather than any nearby container, which is a very common source of layout bugs.',
    example: `.parent { position: relative; }
.child { position: absolute; top: 0; left: 0; } /* relative to .parent */`,
  },
  {
    id: 43,
    category: 'Positioning & Stacking',
    difficulty: 'Advanced',
    question: 'How does z-index work, and what creates a new stacking context?',
    answer:
      'z-index only has an effect on positioned elements (or flex/grid items), and it only compares meaningfully against siblings within the same stacking context - an element with a huge z-index can still render behind another element if they belong to different stacking contexts. Properties like opacity less than 1, transform, filter, position: fixed/sticky, and will-change all create new stacking contexts, which is why “just raising the z-index” sometimes doesn’t fix a layering bug.',
    example: `.modal {
  position: fixed;
  z-index: 1000; /* only matters relative to siblings in the same stacking context */
}`,
  },
  {
    id: 44,
    category: 'Positioning & Stacking',
    difficulty: 'Advanced',
    question: 'Why does position: sticky sometimes fail to stick, even with top: 0 set?',
    answer:
      'sticky is scoped to its nearest scrolling ancestor and containing block - if any ancestor has overflow set to anything other than visible (including auto or hidden), the sticky element can only stick within that ancestor’s bounds, not the whole page. It also silently fails if the parent’s height exactly matches the sticky child’s height, since there’s no room left to scroll within before it would need to “unstick.”',
    example: `.scroll-container {
  overflow-y: auto; /* sticky child sticks within THIS box, not the page */
  height: 400px;
}
.scroll-container .sticky-header { position: sticky; top: 0; }`,
  },
  {
    id: 45,
    category: 'Positioning & Stacking',
    difficulty: 'Beginner',
    question: 'What are the common ways to horizontally and vertically center an element?',
    answer:
      'For a block element with a known width, margin: 0 auto centers it horizontally within its parent. For centering both axes regardless of size, flexbox (display: flex with justify-content and align-items set to center) or grid (place-items: center) are the most reliable modern approaches. absolute positioning combined with a transform offset is another common technique for centering an element of unknown size within a positioned parent.',
    example: `.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
  },
  {
    id: 46,
    category: 'Positioning & Stacking',
    difficulty: 'Advanced',
    question: 'How does the transform property affect stacking context and containing block behavior?',
    answer:
      'Any transform value other than none establishes a new stacking context, meaning its z-indexed descendants are contained within it and can’t escape to layer above unrelated page elements. It also makes the transformed element a containing block for any absolutely or fixed positioned descendants, which is a common technique for scoping a “fixed” element to a specific animated container instead of the whole viewport.',
    example: `.animated-panel {
  transform: translateZ(0); /* becomes a containing block for absolute children */
}
.animated-panel .badge { position: absolute; top: 0; right: 0; }`,
  },
  {
    id: 47,
    category: 'Positioning & Stacking',
    difficulty: 'Intermediate',
    question: 'What’s the difference between relative and absolute positioning offsets, in terms of what they’re measured from?',
    answer:
      'relative offsets (top, left, etc.) shift the element from where it would have normally sat in flow, and that original space is still reserved as if it hadn’t moved - other elements don’t reflow around the new position. absolute offsets are measured from the edges of the containing block, and the element is fully removed from flow, so surrounding content collapses into the space it would have occupied.',
    example: `.relative-shift { position: relative; top: 10px; } /* original space still reserved */
.absolute-shift { position: absolute; top: 10px; }  /* removed from flow entirely */`,
  },
  {
    id: 48,
    category: 'Positioning & Stacking',
    difficulty: 'Beginner',
    question: 'What happens if you set a negative z-index on an element?',
    answer:
      'A negative z-index sends the element behind its nearest positioned ancestor’s background but still within the same stacking context, and behind other unpositioned sibling content in normal flow. It’s occasionally used for decorative background shapes that should sit behind text content within the same container, without needing a completely separate layering scheme.',
    example: `.decorative-shape {
  position: absolute;
  z-index: -1; /* sits behind the parent's content, still above the parent's own background */
}`,
  },
  {
    id: 49,
    category: 'Positioning & Stacking',
    difficulty: 'Intermediate',
    question: 'How would you build a full-page overlay or modal backdrop with CSS positioning?',
    answer:
      'A common pattern is position: fixed with all four inset offsets (top, right, bottom, left) set to 0, which stretches the element to cover the entire viewport regardless of scroll position, combined with a high z-index and a semi-transparent background to dim the content behind it. Because it’s fixed rather than absolute, it stays in place even if the page underneath is scrollable.',
    example: `.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}`,
  },
  {
    id: 50,
    category: 'Positioning & Stacking',
    difficulty: 'Advanced',
    question: 'Why can a child with z-index: 9999 still render behind another element with a much lower z-index?',
    answer:
      'z-index values are only compared within the same stacking context - if the high-z-index child’s ancestor creates its own stacking context (say, via opacity or a transform) that itself has a lower stacking order than a sibling context, the entire ancestor subtree, no matter how high its internal z-index values go, stays behind that sibling. This is one of the more counterintuitive parts of CSS and usually requires tracing stacking contexts up the tree, not just tweaking the immediate z-index value.',
    example: `.context-a { position: relative; z-index: 1; opacity: 0.99; }
.context-a .child { z-index: 9999; } /* still capped by .context-a's own stacking order */
.context-b { position: relative; z-index: 2; }`,
  },

  // ---------- Flexbox & Grid ----------
  {
    id: 51,
    category: 'Flexbox & Grid',
    difficulty: 'Advanced',
    question: 'How do flex-grow, flex-shrink, and flex-basis work together to size flex items?',
    answer:
      'flex-basis sets an item’s starting size before growing or shrinking is applied, defaulting to its content size if auto. flex-grow is a ratio describing how much of the remaining free space an item should absorb relative to its siblings. flex-shrink is a ratio describing how much an item should shrink relative to siblings when there isn’t enough space, factoring in each item’s base size so larger items shrink more in absolute terms. The flex shorthand (grow shrink basis) is the idiomatic way to set all three at once.',
    example: `.item-a { flex: 1 1 200px; } /* grows and shrinks from a 200px base */
.item-b { flex: 2 1 200px; } /* grows twice as fast as item-a */`,
  },
  {
    id: 52,
    category: 'Flexbox & Grid',
    difficulty: 'Intermediate',
    question: 'What’s the difference between justify-content, align-items, and align-content in flexbox?',
    answer:
      'justify-content aligns items along the main axis (horizontal in a row container), controlling spacing between and around items. align-items aligns items along the cross axis within a single line. align-content only has an effect when there are multiple flex lines (via flex-wrap), controlling how those lines are spaced along the cross axis as a group - it does nothing on a single-line flex container.',
    example: `.row {
  display: flex;
  justify-content: space-between; /* main axis */
  align-items: center;            /* cross axis, single line */
}`,
  },
  {
    id: 53,
    category: 'Flexbox & Grid',
    difficulty: 'Beginner',
    question: 'What does flex-wrap do, and what’s the difference between nowrap, wrap, and wrap-reverse?',
    answer:
      'By default (nowrap), flex items are forced onto a single line and will shrink to fit, potentially overflowing if they can’t shrink enough. wrap allows items to flow onto multiple lines once they run out of room on the main axis, and wrap-reverse does the same but stacks the additional lines in the opposite direction. Wrapping is essential for building flexible card grids or nav items that need to reflow on narrow screens.',
    example: `.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}`,
  },
  {
    id: 54,
    category: 'Flexbox & Grid',
    difficulty: 'Intermediate',
    question: 'How do you define named grid areas with CSS Grid, and why are they useful?',
    answer:
      'grid-template-areas lets you lay out a visual ASCII-like map of named regions on the parent, and each child is assigned to one of those named areas via grid-area. This makes complex page layouts - header, sidebar, main content, footer - self-documenting in the CSS itself, and lets you completely rearrange the layout for different breakpoints just by redefining the area map, without touching the HTML.',
    example: `.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.sidebar { grid-area: sidebar; }`,
  },
  {
    id: 55,
    category: 'Flexbox & Grid',
    difficulty: 'Intermediate',
    question: 'What is the fr unit in CSS Grid, and how does it differ from a percentage?',
    answer:
      'fr represents a fraction of the remaining free space in the grid container after fixed-size tracks and gaps are accounted for, so 1fr 2fr splits leftover space in a 1:2 ratio. Unlike percentages, fr automatically accounts for gap spacing and fixed-size sibling tracks without needing manual subtraction, which makes mixed fixed/flexible layouts (like a fixed sidebar plus a flexible main area) much simpler to express.',
    example: `.layout {
  display: grid;
  grid-template-columns: 240px 1fr; /* fixed sidebar, flexible remainder */
}`,
  },
  {
    id: 56,
    category: 'Flexbox & Grid',
    difficulty: 'Advanced',
    question: 'What’s the difference between minmax(), auto-fit, and auto-fill in a grid template?',
    answer:
      'minmax(min, max) constrains a track’s size to a range, commonly paired with repeat() to build responsive columns without media queries, like repeat(auto-fit, minmax(200px, 1fr)). auto-fill creates as many tracks as will fit, leaving empty ones as blank placeholder space if content runs out, which can leave visible gaps. auto-fit instead collapses those empty tracks to zero width, letting existing items stretch to fill the freed-up space - the more common choice when you want a fully flexible, gapless grid.',
    example: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}`,
  },
  {
    id: 57,
    category: 'Flexbox & Grid',
    difficulty: 'Intermediate',
    question: 'When would you reach for flexbox over CSS Grid, and vice versa?',
    answer:
      'Flexbox is a one-dimensional layout model, best suited for laying out items in a single row or column where content size should drive layout - navbars, button groups, form rows. Grid is two-dimensional, better for full page layouts or components that need explicit alignment across both rows and columns simultaneously, like a dashboard or card gallery where you want precise control over both axes at once.',
    example: `.nav { display: flex; gap: 16px; }         /* one dimension */
.dashboard { display: grid; grid-template-columns: repeat(3, 1fr); } /* two dimensions */`,
  },
  {
    id: 58,
    category: 'Flexbox & Grid',
    difficulty: 'Beginner',
    question: 'What does the gap property do, and does it work in both flexbox and grid?',
    answer:
      'gap adds consistent spacing between flex or grid items without affecting the outer edges of the container the way margin would, and without needing “last child” overrides to remove a trailing margin. It’s supported in both flexbox and grid contexts today across all modern browsers, though it originated in grid first and took slightly longer to land in flexbox implementations.',
    example: `.cards {
  display: flex;
  gap: 20px; /* space between items only, no outer margin */
}`,
  },
  {
    id: 59,
    category: 'Flexbox & Grid',
    difficulty: 'Beginner',
    question: 'What does align-self do differently from align-items?',
    answer:
      'align-items is set on the flex or grid container and applies a default cross-axis alignment to all its children. align-self is set on an individual child and overrides that default just for itself, which is useful when one item in a row needs to sit at the top while the rest are centered, without having to restructure the whole layout.',
    example: `.row { display: flex; align-items: center; }
.row .highlight { align-self: flex-start; } /* overrides just this one item */`,
  },
  {
    id: 60,
    category: 'Flexbox & Grid',
    difficulty: 'Intermediate',
    question: 'How do you make a flex item shrink-to-fit its content instead of stretching to fill the row?',
    answer:
      'By default, flex items along the cross axis stretch to match the tallest sibling (align-items: stretch), and along the main axis they share space per flex-grow. Setting flex: none (or flex-grow: 0 and flex-shrink: 0) prevents an item from growing or shrinking, letting it size purely to its content, which is common for icons or fixed-width labels sitting next to a flexible text block.',
    example: `.row { display: flex; }
.icon { flex: none; width: 24px; } /* stays fixed, doesn't stretch or shrink */
.label { flex: 1; }                /* takes remaining space */`,
  },

  // ---------- Responsive Design ----------
  {
    id: 61,
    category: 'Responsive Design',
    difficulty: 'Intermediate',
    question: 'What’s the difference between mobile-first and desktop-first responsive design?',
    answer:
      'Mobile-first starts with base styles for the smallest screen and layers on complexity with min-width media queries as the viewport grows, which tends to produce leaner CSS since small-screen styles are usually simpler. Desktop-first does the reverse, starting from a full desktop layout and using max-width queries to strip things down for smaller screens, which can lead to more overrides since you’re constantly undoing desktop-specific styling.',
    example: `/* mobile-first */
.card { flex-direction: column; }
@media (min-width: 768px) {
  .card { flex-direction: row; }
}`,
  },
  {
    id: 62,
    category: 'Responsive Design',
    difficulty: 'Intermediate',
    question: 'How would you decide where to place media query breakpoints?',
    answer:
      'Rather than targeting specific devices, the more durable approach is to let the content itself dictate breakpoints - resize the browser and add a breakpoint at whatever width the layout starts to look cramped or awkward, regardless of what device that width corresponds to. Common round-number breakpoints (like 640px, 768px, 1024px) are still useful as a starting convention shared across a team or design system.',
    example: `@media (min-width: 640px) { /* small tablets and up */ }
@media (min-width: 1024px) { /* desktop and up */ }`,
  },
  {
    id: 63,
    category: 'Responsive Design',
    difficulty: 'Beginner',
    question: 'What does the viewport meta tag do, and why does responsive CSS depend on it?',
    answer:
      '<meta name="viewport" content="width=device-width, initial-scale=1"> tells mobile browsers to set the layout viewport to match the device’s actual screen width instead of defaulting to a wide desktop-sized virtual viewport and zooming out. Without it, media queries would trigger based on that fake desktop-width viewport rather than the real device size, making mobile-specific styles never actually apply as intended.',
    example: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  },
  {
    id: 64,
    category: 'Responsive Design',
    difficulty: 'Advanced',
    question: 'How does clamp() help with responsive typography, and how do its three arguments work?',
    answer:
      'clamp(min, preferred, max) lets a value scale fluidly with the viewport (usually via the preferred argument using vw units) while never shrinking below the min or growing past the max, which avoids the abrupt jumps you’d get from switching font-size at fixed media query breakpoints. It replaces a whole set of breakpoint-specific font-size overrides with a single fluid declaration.',
    example: `h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
}`,
  },
  {
    id: 65,
    category: 'Responsive Design',
    difficulty: 'Advanced',
    question: 'What are container queries, and how do they differ from media queries?',
    answer:
      'Media queries respond only to the viewport’s size, so a component styled with them always looks the same regardless of how much space its actual parent container gives it. Container queries let an element respond to the size of its nearest containing element instead, which is essential for genuinely reusable components - like a card that should switch to a compact layout when placed in a narrow sidebar, even on a wide viewport.',
    example: `.card-container {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card { flex-direction: row; }
}`,
  },
  {
    id: 66,
    category: 'Responsive Design',
    difficulty: 'Intermediate',
    question: 'What does the aspect-ratio property do, and what problem did people solve without it before?',
    answer:
      'aspect-ratio lets you declare a width-to-height ratio directly, like 16 / 9, and the browser computes the missing dimension automatically as the element resizes - commonly used for responsive video embeds or image placeholders. Before it existed, developers used the “padding-top hack,” setting a percentage-based padding-top on a wrapper (since percentage padding is calculated from width) to fake a fixed ratio, which was effective but far less readable.',
    example: `.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}`,
  },
  {
    id: 67,
    category: 'Responsive Design',
    difficulty: 'Intermediate',
    question: 'How would you make images responsive by default in a fluid layout?',
    answer:
      'Setting max-width: 100% and height: auto on images ensures they never overflow their container while scaling down proportionally as the viewport shrinks, without distorting their aspect ratio. This single rule is often applied globally as part of a base reset, since unconstrained images are one of the most common causes of horizontal overflow on mobile layouts.',
    example: `img {
  max-width: 100%;
  height: auto;
}`,
  },
  {
    id: 68,
    category: 'Responsive Design',
    difficulty: 'Beginner',
    question: 'What’s the difference between a min-width and a max-width media query?',
    answer:
      'A min-width query applies its styles once the viewport is at least that wide, making it the natural fit for mobile-first progressive enhancement. A max-width query applies its styles only up to that width, which is more common in desktop-first approaches where you’re stripping styling down for smaller screens. Mixing both freely without a consistent strategy can cause overlapping or conflicting rules that are hard to reason about.',
    example: `@media (min-width: 768px) { .sidebar { display: block; } }
@media (max-width: 767px) { .sidebar { display: none; } }`,
  },
  {
    id: 69,
    category: 'Responsive Design',
    difficulty: 'Intermediate',
    question: 'How can CSS Grid’s repeat(auto-fit, minmax()) reduce the number of media queries needed for a responsive grid?',
    answer:
      'Instead of hardcoding a fixed number of columns per breakpoint, minmax() combined with auto-fit lets the browser calculate how many columns fit given each item’s minimum width, recalculating fluidly on every resize rather than jumping at fixed breakpoints. This can eliminate the need for several explicit media queries entirely for simple card or gallery layouts.',
    example: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}`,
  },
  {
    id: 70,
    category: 'Responsive Design',
    difficulty: 'Advanced',
    question: 'What accessibility consideration is often overlooked when hiding content at certain breakpoints?',
    answer:
      'Using display: none to hide content on mobile removes it from the accessibility tree entirely, which is usually fine for purely decorative or redundant content, but if that content is hidden purely for visual space reasons while remaining functionally important, screen reader users on mobile lose access to it entirely. In those cases, an off-canvas or collapsible pattern that keeps content reachable (even if visually tucked away) is more appropriate than an outright display: none toggle.',
    example: `/* hidden but still in the a11y tree until toggled open */
.mobile-menu[hidden] { display: none; }`,
  },

  // ---------- Animations & Transitions ----------
  {
    id: 71,
    category: 'Animations & Transitions',
    difficulty: 'Beginner',
    question: 'When would you use a transition instead of an animation?',
    answer:
      'transition is designed for simple state changes triggered by something else, like a hover, focus, or class toggle - it animates smoothly between a starting and ending value with no keyframes needed. animation is built for more complex, self-running sequences with multiple intermediate steps, looping behavior, or effects that should play automatically without needing an external trigger.',
    example: `.button {
  transition: background-color 0.2s ease;
}
.button:hover {
  background-color: #2563eb;
}`,
  },
  {
    id: 72,
    category: 'Animations & Transitions',
    difficulty: 'Intermediate',
    question: 'How does @keyframes syntax work, and what do the percentage values represent?',
    answer:
      '@keyframes defines named waypoints through an animation’s timeline as percentages from 0% (or from) to 100% (or to), each specifying the property values the element should have at that point in the sequence. The browser interpolates smoothly between each defined keyframe, and you then reference the named animation and its duration via the animation property on the target element.',
    example: `@keyframes fadeIn {
  from { opacity: 0; }
  50% { opacity: 0.5; }
  to { opacity: 1; }
}
.el { animation: fadeIn 1s ease-in; }`,
  },
  {
    id: 73,
    category: 'Animations & Transitions',
    difficulty: 'Advanced',
    question: 'What does animation-fill-mode control, and what problem does forwards solve?',
    answer:
      'By default, once an animation finishes, the element snaps back to its original pre-animation styles rather than staying at the final keyframe’s values. Setting animation-fill-mode: forwards keeps the element at the styles defined in the last keyframe after the animation completes, which is essential for animations meant to leave an element in a new permanent state, like a fade-in that should stay visible.',
    example: `.fade-in {
  animation: fadeIn 0.5s ease forwards;
}
/* without forwards, opacity would revert to its pre-animation value after 0.5s */`,
  },
  {
    id: 74,
    category: 'Animations & Transitions',
    difficulty: 'Intermediate',
    question: 'What do easing/timing functions like ease, linear, and cubic-bezier() actually control?',
    answer:
      'A timing function controls the rate of change over the course of a transition or animation, not its duration - linear moves at a constant speed throughout, while ease-based curves accelerate and decelerate to feel more natural, mimicking real-world motion. cubic-bezier() lets you define a fully custom curve with four control points, which is how design systems create their own signature motion feel beyond the handful of built-in keywords.',
    example: `.smooth {
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}`,
  },
  {
    id: 75,
    category: 'Animations & Transitions',
    difficulty: 'Advanced',
    question: 'What does the will-change property do, and why should it be used sparingly?',
    answer:
      'will-change hints to the browser that a property is about to change, letting it proactively promote the element to its own compositor layer ahead of time rather than reacting mid-animation, which can reduce jank on the first frame. Overusing it on many elements backfires, though, since each promoted layer consumes GPU memory, and browsers may ignore the hint or even perform worse if it’s left on indefinitely rather than toggled just before the change happens.',
    example: `.card:hover {
  will-change: transform;
}
.card { transition: transform 0.3s; }
.card:hover { transform: scale(1.05); }`,
  },
  {
    id: 76,
    category: 'Animations & Transitions',
    difficulty: 'Advanced',
    question: 'Why is animating transform and opacity preferred over animating top/left or width/height for performance?',
    answer:
      'Animating layout properties like top, left, width, or height forces the browser to recalculate layout and repaint on every frame, which is expensive and can drop frames on complex pages. transform and opacity can be handled entirely by the compositor thread on the GPU without touching layout or paint at all, letting the browser skip straight to compositing - the reason virtually every performant CSS animation library defaults to transform-based movement.',
    example: `/* expensive: triggers layout every frame */
.slow { transition: left 0.3s; }
/* cheap: compositor-only */
.fast { transition: transform 0.3s; }`,
  },
  {
    id: 77,
    category: 'Animations & Transitions',
    difficulty: 'Intermediate',
    question: 'What is the prefers-reduced-motion media feature, and why does it matter?',
    answer:
      'prefers-reduced-motion detects a system-level accessibility setting some users enable because motion can trigger vestibular disorders, migraines, or general discomfort. Wrapping non-essential animations in a media query that checks for reduce lets you disable or drastically simplify them for those users, which is considered a baseline accessibility practice for any site with significant motion design.',
    example: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`,
  },
  {
    id: 78,
    category: 'Animations & Transitions',
    difficulty: 'Beginner',
    question: 'Can you transition a property change that happens via a class toggle in JavaScript?',
    answer:
      'Yes - as long as the transition property is defined on the element (or the state it’s transitioning to/from) ahead of time, any change to a transitionable property value, whether triggered by :hover, a media query, or a JavaScript class toggle, will animate smoothly. The transition itself doesn’t care what caused the value to change; it only cares that the computed value changed while a transition rule was in effect.',
    example: `.box { transition: transform 0.3s; }
.box.open { transform: translateX(0); }
/* JS: box.classList.add('open') triggers the transition */`,
  },
  {
    id: 79,
    category: 'Animations & Transitions',
    difficulty: 'Intermediate',
    question: 'What happens if you set animation-iteration-count: infinite alongside animation-direction: alternate?',
    answer:
      'infinite makes the animation loop forever rather than stopping after one pass, and alternate makes each successive iteration play in reverse instead of always restarting from the beginning - together they produce a smooth back-and-forth ping-pong effect, like a pulsing badge or a bouncing loader, without needing to hand-author the reverse keyframes yourself.',
    example: `.pulse {
  animation: pulse 1s ease-in-out infinite alternate;
}
@keyframes pulse {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}`,
  },
  {
    id: 80,
    category: 'Animations & Transitions',
    difficulty: 'Intermediate',
    question: 'How would you delay a transition or animation from starting immediately?',
    answer:
      'transition-delay and animation-delay both accept a time value that postpones the start of the effect after the triggering event, which is useful for staggering multiple elements - like a list of cards each fading in slightly after the previous one - by giving each a progressively larger delay, often set via an inline custom property or nth-child selector.',
    example: `.card:nth-child(1) { transition-delay: 0s; }
.card:nth-child(2) { transition-delay: 0.1s; }
.card:nth-child(3) { transition-delay: 0.2s; }`,
  },

  // ---------- Modern CSS & Gotchas ----------
  {
    id: 81,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Intermediate',
    question: 'How do CSS custom properties (variables) differ from Sass/Less variables?',
    answer:
      'Preprocessor variables are resolved at compile time - once the Sass or Less compiles to plain CSS, the variable is gone, replaced by a static value baked into the output. CSS custom properties are resolved live in the browser at runtime, which means they can be read and changed with JavaScript, they cascade and inherit like any other property, and they can even be reassigned per media query or per component instance without recompiling anything.',
    example: `:root { --brand-color: #2563eb; }
.button { background: var(--brand-color); }
@media (prefers-color-scheme: dark) {
  :root { --brand-color: #60a5fa; }
}`,
  },
  {
    id: 82,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Advanced',
    question: 'What does the :has() selector let you do that wasn’t previously possible in pure CSS?',
    answer:
      ':has() lets a selector match a parent (or preceding sibling) based on the presence of a specific descendant or following sibling, something CSS historically had no way to express since selectors could only look downward or forward, never “upward” at an ancestor based on its children. It effectively enables a “parent selector,” letting you, for example, style a form group differently only when it contains an invalid input, with no JavaScript needed.',
    example: `.form-group:has(input:invalid) {
  border-color: red;
}`,
  },
  {
    id: 83,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Advanced',
    question: 'How does native CSS nesting work, and what should you watch out for with specificity?',
    answer:
      'Native CSS nesting lets you write child selectors inside a parent rule using & to reference the parent, similar to Sass, and it’s now supported directly by browsers without a build step. One gotcha is that nested rules still calculate specificity normally based on the full resolved selector, so deeply nested rules can accidentally become more specific than intended and harder to override later, just as with any other selector.',
    example: `.card {
  padding: 1rem;
  & .title {
    font-weight: 700;
  }
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}`,
  },
  {
    id: 84,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Advanced',
    question: 'What problem do cascade layers (@layer) solve?',
    answer:
      'Cascade layers let you group rules into explicitly ordered layers - say, reset, base, components, utilities - so that layer order decides precedence before specificity or source order even comes into play, regardless of how specific a selector inside an earlier layer is. This solves the classic problem of a third-party library’s low-specificity utility class losing to your own app’s more specific selector, since layers let you guarantee utilities always win without resorting to !important.',
    example: `@layer reset, base, components, utilities;

@layer base {
  .button { padding: 8px; }
}
@layer utilities {
  .p-0 { padding: 0; } /* wins over .button regardless of specificity, later layer */
}`,
  },
  {
    id: 85,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Intermediate',
    question: 'What’s a common gotcha around margin collapsing that trips up beginners?',
    answer:
      'A frequent surprise is a child element’s top margin “escaping” its parent and pushing the whole parent down, rather than creating space inside it, because the parent has no border, padding, or content separating it from that child - the margins collapse together as if the child’s margin belonged to the parent. Adding even 1px of padding or border to the parent, or giving it overflow: hidden to form a new block formatting context, stops the collapse.',
    example: `.parent { background: lightblue; }
.child { margin-top: 40px; } /* collapses: pushes .parent down instead of adding inner space */
/* fix: .parent { padding-top: 1px; } or overflow: hidden; */`,
  },
  {
    id: 86,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Intermediate',
    question: 'Why does setting z-index sometimes have no visible effect at all?',
    answer:
      'z-index only applies to elements with a position value other than static - setting it on a statically positioned element is simply ignored by the browser, which is one of the most common reasons a stacking change appears to do nothing. The fix is ensuring the element has position: relative, absolute, fixed, or sticky before z-index can take effect at all.',
    example: `.card {
  /* position: static (default) - z-index below does NOTHING */
  z-index: 10;
}
.card-fixed {
  position: relative; /* now z-index actually applies */
  z-index: 10;
}`,
  },
  {
    id: 87,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Intermediate',
    question: 'What’s a practical strategy for avoiding “specificity wars” in a growing codebase?',
    answer:
      'Keeping selectors flat and consistently low-specificity - favoring single classes over id selectors, nested combinators, or overly qualified selectors like div.card.featured - means later overrides rarely need to escalate specificity just to win. Methodologies like BEM enforce this by design, since every selector is a single class with no nesting, keeping the entire specificity graph flat and predictable regardless of how large the stylesheet grows.',
    example: `/* specificity war waiting to happen */
#page .sidebar .widget.featured { }
/* flat, low, predictable specificity (BEM-style) */
.widget--featured { }`,
  },
  {
    id: 88,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Advanced',
    question: 'What are logical properties, and why use margin-inline-start over margin-left?',
    answer:
      'Logical properties like margin-inline-start, padding-block, and inset-inline-end describe spacing relative to the document’s writing mode and text direction rather than fixed physical directions, so they automatically flip correctly for right-to-left languages like Arabic or Hebrew without needing separate RTL-specific overrides. Physical properties like margin-left stay literally on the left regardless of writing direction, which silently breaks layouts once a site needs to support RTL locales.',
    example: `.card {
  margin-inline-start: 1rem; /* left in LTR, right in RTL, automatically */
  padding-block: 0.5rem;
}`,
  },
  {
    id: 89,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Beginner',
    question: 'What’s the difference between a CSS custom property’s fallback value and its inherited value?',
    answer:
      'var(--color, blue) supplies a fallback that’s used only if --color is entirely undefined (never declared, or an invalid reference), not if it resolves to an empty or unexpected value in some other way. Inheritance, separately, means a custom property set on a parent is automatically available to descendants through normal cascade rules, the same as any inherited property, unless a descendant redefines it locally.',
    example: `.card {
  color: var(--brand-color, navy); /* falls back to navy if --brand-color is never set */
}`,
  },
  {
    id: 90,
    category: 'Modern CSS & Gotchas',
    difficulty: 'Advanced',
    question: 'How do cascade layers interact with normal specificity and !important?',
    answer:
      'Within a single layer, normal specificity and source-order rules still apply exactly as before - layers only change how competing declarations across different layers are resolved, with unlayered styles taking the highest priority of all by default. Oddly, !important flips this order for layers specifically: an !important declaration in an earlier layer wins over one in a later layer, the reverse of how normal (non-important) layered declarations behave, which is a subtlety worth knowing before mixing @layer with !important.',
    example: `@layer base, override;
@layer base { .btn { color: red !important; } }
@layer override { .btn { color: blue !important; } }
/* red wins: earlier layer's !important beats later layer's !important */`,
  },

  // ---------- Performance & Best Practices ----------
  {
    id: 91,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'What is the critical rendering path, and how does CSS factor into it?',
    answer:
      'The critical rendering path is the sequence of steps a browser takes to turn HTML, CSS, and JavaScript into pixels on screen - parsing HTML into a DOM, parsing CSS into a CSSOM, combining them into a render tree, then layout and paint. CSS is render-blocking by default, meaning the browser won’t paint anything until all linked stylesheets have downloaded and been parsed, which is why minimizing and prioritizing critical CSS (often inlining above-the-fold styles) directly speeds up perceived load time.',
    example: `<!-- inline critical CSS for above-the-fold content -->
<style>
  header { display: flex; }
</style>
<link rel="stylesheet" href="rest.css">`,
  },
  {
    id: 92,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'Why are certain selectors considered “expensive,” and how does the browser actually match them?',
    answer:
      'Browsers evaluate CSS selectors right-to-left, matching the rightmost (key) selector against candidate elements first, then walking left through ancestors only if the key selector matches. A selector like .sidebar * or one with a deep universal descendant combinator forces the browser to check far more candidate elements and walk many more ancestors than a single flat class, which is why overly broad or deeply nested selectors can measurably slow down style recalculation on very large pages.',
    example: `/* expensive: matches every element, then walks up checking .sidebar */
.sidebar * { }
/* cheap: single flat class, matched directly */
.sidebar-item { }`,
  },
  {
    id: 93,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'What’s the practical difference between a BEM-based architecture and a utility-first (like Tailwind-style) approach?',
    answer:
      'BEM organizes styles into semantically named, component-scoped classes (block__element--modifier) with one class per concept, keeping specificity flat but requiring you to write new CSS for every visual variation. Utility-first composes many small, single-purpose classes directly in markup (like flex, gap-4, text-lg), trading some HTML verbosity for near-zero custom CSS and virtually no specificity conflicts, since utilities are all single classes applied directly where needed.',
    example: `<!-- BEM -->
<div class="card card--featured"></div>
<!-- utility-first -->
<div class="flex items-center gap-4 rounded-lg shadow"></div>`,
  },
  {
    id: 94,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'What’s the difference between a browser reflow (layout) and a repaint, and why does it matter for performance?',
    answer:
      'A reflow recalculates the geometry and position of elements - triggered by changes to things like width, height, or adding/removing DOM nodes - and is expensive because it can cascade to affect the entire page’s layout. A repaint only redraws pixels without recalculating geometry, triggered by changes like color or background, and is comparatively cheap. Minimizing layout-triggering changes, especially inside loops or animations, is one of the biggest levers for smooth CSS-driven interactivity.',
    example: `/* triggers reflow (layout) on every frame - avoid in animations */
el.style.width = newWidth + 'px';
/* triggers repaint only - cheaper */
el.style.backgroundColor = 'red';`,
  },
  {
    id: 95,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'Why should !important be minimized as a general architectural practice, beyond just being “bad style”?',
    answer:
      'Every !important you add effectively opts that declaration out of the normal cascade, which means the only way to ever override it later is with another, equally forceful !important - a pattern that compounds over a codebase’s lifetime into stylesheets where nobody can safely predict which rule will actually apply. Keeping it rare (or reserved for narrow, deliberate cases like a genuine utility override) keeps the rest of the cascade meaningful and debuggable.',
    example: `/* avoid: forces every future override to also use !important */
.text-red { color: red !important; }
/* prefer: let normal specificity/layering handle precedence */
.text-red { color: red; }`,
  },
  {
    id: 96,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'What does the CSS contain property do, and how does it help performance?',
    answer:
      'contain tells the browser that a subtree’s layout, style, paint, or size is isolated from the rest of the page, so changes inside it don’t need to trigger recalculation for anything outside its boundary. contain: layout is especially useful for independently updating widgets (like a live chat panel or an infinite-scroll list item) since the browser can skip recalculating the rest of the page whenever that isolated subtree changes.',
    example: `.widget {
  contain: layout paint;
}`,
  },
  {
    id: 97,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'How would you go about identifying and removing unused CSS from a large project?',
    answer:
      'Browser devtools have a coverage panel that highlights exactly which loaded CSS rules were actually applied during a session, and build tools like PurgeCSS can automatically strip out selectors that never appear in the actual markup or templates. This matters because unused CSS still has to be downloaded, parsed, and held in the CSSOM, adding real weight to a page even though it contributes nothing to what users see.',
    example: `/* purge config scans these files for class usage */
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
};`,
  },
  {
    id: 98,
    category: 'Performance & Best Practices',
    difficulty: 'Intermediate',
    question: 'What are the general performance tradeoffs of CSS-in-JS versus plain CSS or CSS modules?',
    answer:
      'CSS-in-JS (styled-components, emotion) offers colocated styles and dynamic prop-based theming, but runtime variants can add a JavaScript parsing/execution cost and sometimes a flash of unstyled content before styles are injected, unless a build-time extraction step is used. Plain CSS or CSS modules ship as static stylesheets the browser can parse and cache independently of JavaScript execution, generally giving more predictable, front-loaded performance at the cost of losing some dynamic theming convenience.',
    example: `/* CSS module: compiles to a static stylesheet, no runtime cost */
.button { padding: 8px 16px; }
/* imported as: import styles from './Button.module.css' */`,
  },
  {
    id: 99,
    category: 'Performance & Best Practices',
    difficulty: 'Beginner',
    question: 'Why is it generally better to load CSS in the <head> and JavaScript near the end of <body> (or with defer)?',
    answer:
      'CSS in the head lets the browser start building the CSSOM and painting a styled page as soon as possible, avoiding a flash of unstyled content. JavaScript placed at the end of the body, or loaded with the defer attribute, avoids blocking HTML parsing while the script downloads and executes, since scripts can otherwise halt rendering entirely until they finish - the opposite ordering of what each resource type needs to arrive early or late.',
    example: `<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ...
  <script src="app.js" defer></script>
</body>`,
  },
  {
    id: 100,
    category: 'Performance & Best Practices',
    difficulty: 'Advanced',
    question: 'What’s a sensible high-level strategy for keeping a large team’s CSS maintainable over time?',
    answer:
      'Combining a naming convention (BEM or similar) with a small, consistent set of design tokens (colors, spacing, type scale) expressed as custom properties keeps stylesheets predictable regardless of who wrote them, while cascade layers or a strict specificity ceiling prevent the “just add one more override” drift that accumulates in long-lived codebases. Treating CSS with the same review rigor as application code - linting, code review, and deleting dead styles - is ultimately what keeps a stylesheet healthy as a project scales.',
    example: `:root {
  --space-2: 8px;
  --space-4: 16px;
  --color-primary: #2563eb;
}
.card { padding: var(--space-4); color: var(--color-primary); }`,
  },
];
