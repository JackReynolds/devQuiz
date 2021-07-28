const cssQuestions = [
  {
    number: 1,
    question:
      "What is the Box model in CSS? Which CSS properties are a part of it?",
    answer:
      "A rectangle box is wrapped around every HTML element. The box model is used to determine the height and width of the rectangular box. The CSS Box consists of Width and height (or in the absence of that, default values and the content inside), padding, borders, margin. <br> <ul><li><strong>Content</strong>: Actual content of the box where the text or image is placed</li><li><strong>Padding</strong>:Area surrounding the content (Space between the border and content)</li><li><strong>Border</strong>: Area surrounding the padding</li><li><strong>Margin</strong>: Area surrounding the border.</li></ul>",
  },
  {
    number: 2,
    question: "What are the advantages of using CSS",
    answer:
      "The main advantages of CSS are given below: <ul><li><strong>Separation of content from presentation - </strong>CSS provides a way to present the same content in multiple presentation formats in mobile or desktop or laptop.</li><li><strong>Easy to maintain - </strong>CSS, built effectively can be used to change the look and feel complete by making small changes. To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.</li><li><strong>Bandwidth - </strong>Used effectively, the style sheets will be stored in the browser cache and they can be used on multiple pages, without having to download again.</li></ul>",
  },
  {
    number: 3,
    question: "How to include CSS in the webpage?",
    answer:
      "<ol><li>External Stylesheet: An external file linked to your HTML document. Using the tag, we can link the style sheet to the HTML page<br> <div class='code'> &lt;link rel='stylesheet' type='text/css' href='mystyles.css' /&gt; </div></li><li>Embled CSS with a style tag. A set of CSS styles included within your HTML page. <br> <div class='code'> &lt;style type='text/css'&gt; <br> /* Add style rules here */ <br> &lt;/style &gt; </div> </li><li>Add inline styles to HTML elements(CSS rules applied directly within an HTML tag.): Style can be added directly to the HTML element using a style tag. </li><li>Import a stylesheet file (An external file imported into another CSS file): Another way to add CSS is by using the @import rule. This is to add a new CSS file within CSS itself. <div class='code'>@import 'path/to/style.css'; </div></li></ol>",
  },
  {
    number: 4,
    question: "What are the different types of selectors in CSS?",
    answer:
      "<ul><li><strong>Universal Selector: </strong>The universal selector works like a wildcard character, selecting all elements on a page. In the given example, the provided styles will get applied to all the elements on the page. <br> <div class='code'> * { <br> color: red; <br> } </div></li><br><li><strong>Element Type Selector: </strong>This selector matches one or more HTML elements of the same name. In the given example, the provided styles will get applied to all the ul elements on the page. <br> <div class='code'> ul { <br> line-style: none; <br> } </div></li><br><li><strong>ID Selector: </strong>This selector matches any HTML element that has an ID attribute with the same value as that of the selector. In the given example, the provided styles will get applied to all the elements having ID as a container on the page. <br> <div class='code'> #container { <br> width: 960px; <br> } </div></li><br><li><strong>Class Selector: </strong> The class selector also matches all elements on the page that have their class attribute set to the same value as the class.  In the given example, the provided styles will get applied to all the elements having ID as the box on the page. <br> <div class='code'> .box { <br> padding: 10px; <br> } </div></li><br><li><strong>Descendant Combinator: </strong>The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method. <br> <div class='code'> #container .box { <br> float: left; <br> } </div>This declaration block will apply to all elements that have a class of box that is inside an element with an ID of the container. It’s worth noting that the .box element doesn’t have to be an immediate child: there could be another element wrapping .box, and the styles would still apply. </li><br><li><strong>Child Combinator: </strong>A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.<br> <div class='code'> #container> .box { <br> padding-bottom: 1rem; <br> }</div> The selector will match all elements that have a class of box and that are immediate children of the #container element. That means, unlike the descendant combinator, there can’t be another element wrapping .box it has to be a direct child element.</li><br><li><strong>General Sibling Combinator: </strong>A selector that uses a general sibling combinator to match elements based on sibling relationships. The selected elements are beside each other in the HTML. <br> <div class='code'> h2 ~ p { <br> margin-bottom: 20px; <br> } </div> In this example, all paragraph elements (<p>) will be styled with the specified rules, but only if they are siblings of <h2> elements. There could be other elements in between the <h2> and <p>, and the styles would still apply.</li> <br> <li><strong>Adjacent Sibling Combinator: </strong>A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling. <br> <div class='code'> p + p { <br> margin-bottom: 0; <br> } </div> The above example will apply the specified styles only to paragraph elements that immediately follow other paragraph elements. This means the first paragraph element on a page would not receive these styles. Also, if another element appeared between two paragraphs, the second paragraph of the two wouldn’t have the styles applied. </li> <br> <li><strong>Attribute Selector: </strong>The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets. <br> <div class='code'> input [type='text'] { <br> background-color: red; <br> } </div></li></ul>",
  },
  {
    number: 5,
    question:
      "What is a CSS preprocessor? What are SASS, LESS and Stylus? Why do people use them?",
    answer:
      "A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS through its own scripting language. It helps us to use complex logical syntax like – variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS. <br> SASS: Sass is the acronym for “Syntactically Awesome Style Sheets”. SASS can be written in two different syntaxes using SASS or SCSS",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
  {
    number: 2,
    question: "",
    answer: "",
  },
];

export default cssQuestions;
