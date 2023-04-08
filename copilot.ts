// Hi copilot
// I'm writing this file to help you understand my code and to help you write better code for me
// I'm going to write a bunch of comments that describe my code and how I want it to be written and formatted

// Code preferences:
// - PascalCase for classes
// - camalCase for functions and variables
// - hyphen-case for files and folders
// - PascalCase for components
// - camelCase for props
// - Prefer const over let
// - Avoid var
// - Avoid function keyword
// - Avoid hoisting
// - Prefer array methods over for loops
// - Prefer for loops over while loops
// - Prefer `if (!x) continue` over `if (x) { code }`
// - Add semicolons at the end of lines
// - Use explicit types always
// - Prefer arrow functions over function keyword
// - Prefer single quotes over double quotes
// - Prefer template strings over string concatenation
// - Prefer stylesheets over inline styles
// - Can't parse html
// - Project uses Astro and typescript
// - Prefer statically compiled code over dynamic code
// - Can't use SSR
// - Can't use dynamic imports
// - Can use dynamic routes
// - Prefer modules over inline scripts
// - Use scss over css
// - Use variables over hard coded values
// - Use Astro components where possible
// - Avoid custom elements
// - Avoid custom attributes
// - Prefer style over script
// - Prefer / over ./ for imports
// - Prefer absolute imports over relative imports,
//      e.g. `import { x } from '/src/x'` over `import { x } from '../x'`
// - Minimize redundant code
// - Minimize dynamic code
// - Prefer interfaces over implied types
// - Prefer `name?: T` over `name: T|undefined`
// - Prefer spaces between operators for math and logic, but not for types
// - Prefer newlines before array functions like map, filter, reduce, etc.
// - Prefer if statements over ternary operators when the condition is complex
// - Prefer ternary operators over if statements when the condition is simple
// - Prefer `condition ? if_success : ''` over `condition && if_success`, due to the latter returning `undefined` instead of an empty string
// - Prefer terse syntax for arrays and objects,
//      e.g. `const x = [1, 2, 3]` over `const x = new Array(1, 2, 3)`
// - Avoid `new` keyword when possible, I come from C++ so it makes me think of memory allocation
// - Prefer using .repeat() over duplicate text,
//      e.g. `<Fragment set:html={'<p>hello</p>'.repeat(3)}/>` over `<p>hello</p><p>hello</p><p>hello</p>`
// - Prefer shorthands over lists of properties,
//      e.g. `inset: 0;` over `top: 0; right: 0; bottom: 0; left: 0;`
// - Prefer `` over '' for strings containing html, because sometimes I want to use single quotes in the html
// - Prefer double quotes for html attributes
// - Prefer optional over empty
// - Prefer ?? over || for default values, because I'm used to C# and || feels like it's doing something else
// - Prefer operators over functions for math and logic
// - Prefer standard functions over custom functions
// - Prefer short code
// - Prefer readable names
// - When a variable is used in multiple places, prefer a variable over a function
// - Avoid recalculating the same value multiple times when it can be calculated once and stored in a variable
// - Prefer SCSS variables over CSS variables, but not when the variable is subject to change
// - When making content, prefer to wrap text at periods instead of at spaces. Commas can be used to break up long sentences.

// Design preferences:
// - Avoid vh and vw units when possible
// - NEVER use vh or vw units for font sizes
// - Prefer flex over grid
// - Site primary color is darkorange
// - I like when corners are rounded
// - Try to avoid using shadows
// - Gradients are pretty, but don't overuse them
// - Anchors should never use the default styling
// - Pills look nicer than buttons
// - Pills look nicer than links
// - There should be tooltips to explain key information,
//      e.g. When a document or page is referenced, there should be a standardized tooltip that explains what it is and provides a link to it
// - Tooltips should use an Astro component instead of the title attribute
// - The site documents should have a similar look and feel to a google doc with comments and a table of contents
// - The site has amoled mode instead of dark mode
// - The site takes inspiration from https://scp-wiki.wikidot.com/
// - The site should be able to contain interactive elements like forms on specific pages without being required on every page
// - Some documents have specialized styling
// - The site a wiki, so it should be easy to add new pages
// - The site has a search bar
// - The site is somewhat of an ARG, so it should be easy to add new pages that are hidden from the search bar
// - The site pretends to be a government website, so it should have a lot of red tape and bureaucracy to make it seem more realistic
// - There should also be a lot of humor to make it seem more realistic
// - Many pages are already written, but they are not yet added to the site
// - The site should look good when printed
// - The site should take up roughly the same width on a computer screen as a printed page, but should take up the full width of the screen on mobile
// - Prefer using the same font for all text, that font should be monospace
// - There are certain tables that follow a standard procedure, so they should be easy to enter information without repeating the table structure
// - There should be an easy way to add redactions to text
// - There should be an easy way to add references to other pages/documents
// - The error page should look identical to any other document, but has extremely different styling that makes it appear as though the site is breaking down and malfunctioning
// - The site should have a lot of easter eggs
// - Some pages are different versions of the same page, so they should be easy to switch between
// - Only the most recent version of a page should be shown by default
// - The most recent version of a page should have a filename that is the same as the page name,
//   but older versions should have a filename that is the same as the page name with a version number appended to it
// - The site sometimes uses cookies to change the appearance of the site or to change some of the content
// - The name is OCP Federation, not SCP Foundation. The site is not affiliated with the SCP Foundation, but it is inspired by it.

// The site should:
// - be responsive
// - be accessible
// - be static, with as much code as possible being compiled at build time instead of run time
// - have low memory usage
// - Use as little javascript as possible
// - Use CSS variables for colors
// - Use CSS/SCSS as much as possible

// Deprications:
// - objects/old/* are to be replaced and removed once the new versions are finished
// - Most information in /data is being changed from json to yaml to make it easier to read and write
// - The pages in content/tooltips is experimental and might not be used