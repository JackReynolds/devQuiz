const htmlQuestions = [
  {
    number: 1,
    question: "Are the HTML tags and elements the same thing?",
    answer:
      "No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but just <h1> is a starting tag and </h1> is a closing tag.",
  },
  {
    number: 2,
    question: "What are tags and attributes in HTML?",
    answer:
      "Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view.",
  },
  {
    number: 3,
    question: "What are void elements in HTML?",
    answer:
      "HTML elements which do not have closing tags or do not need to be closed are void elements. For Example <br />, <img />, <hr />, etc",
  },
  {
    number: 4,
    question: "What is the advantage of collapsing white space?",
    answer:
      "In HTML, a blank sequence of whitespace characters is treated as a single space character, Because the browser collapses multiple spaces into a single space character and this helps a developer to indent lines of text without worrying about multiple spaces and maintain readability and understandability of HTML codes.",
  },
  {
    number: 5,
    question: "What are HTML 'Entities'?",
    answer:
      "In HTML some characters are reserved like ‘<’, ‘>’, ‘/’, etc. To use these characters in our webpage we need to use the character entities called HTML Entities. Below are a few mapping between the reserved character and its respective entity character to be used.",
  },
  {
    number: 6,
    question: "What does HTML stand for?",
    answer: "HTML stands for Hypertext Markup Language",
  },
  {
    number: 7,
    question: "What are different types of lists in HTML?",
    answer: "Unordered list <ul></ul> and ordered list <ol></ol>.",
  },
  {
    number: 8,
    question: "What is the class attribute in HTML?",
    answer:
      "The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.",
  },
  {
    number: 9,
    question:
      "What is the difference between the 'id' attribute and the 'class' attribute of HTML elements?",
    answer:
      "Multiple elements in HTML can have the same class value, whereas a value of id attribute of one element cannot be associated with another HTML element.",
  },
  {
    number: 10,
    question: "Describe HTML layout structure?",
    answer:
      "Every webpage has different components to display the intended content and a specific UI. But still, there are a few things which are templated and globally accepted as a way to structure a web page, such as: <header> - <footer> - <nav> - <article> - <section> - <body> - <aside>",
  },
  {
    number: 11,
    question: "Are the HTML tags and elements the same thing?",
    answer:
      "No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but just <h1> is a starting tag and </h1> is a closing tag.",
  },
  {
    number: 12,
    question: "Define multipart form data",
    answer:
      "Multipart form data is one of the values of the enctype attribute. It is used to send the file data to the server-side for processing. The other valid values of the enctype attribute are text/plain and application/x-www-form-urlencoded.",
  },
  {
    number: 13,
    question: "List some methods on how to optimize web assets loading",
    answer:
      "CDN hosting - A CDN is used to geographically distrubute content to help reduce latency. File Compression - helps to reduce the size of an asset. File concatenation - reduce the number of HTTP calls. Minify scripts - reduce the overall file size of JS and CSS files. Parallel downloads - hosting assts in multiple subdomains can help to bypass th edownload limit of 6 assets per domain of all modern browsers. Lazy loading - instead of loading all assets at once, the non-critical assets can be loaded on a need to load basis.",
  },
  {
    number: 14,
    question: "What is HTML5?",
    answer:
      "HTML5 is the latest or updated version of the markup language that defines HTML.",
  },
  {
    number: 15,
    question:
      "How can you open a new URL into a new tab when clicking an anchor tag?",
    answer: "<a href='#' target='_blank'></a>",
  },
  {
    number: 16,
    question:
      "What are the various formatting tags in HTML? <b>, <i>, <em>, <big>, <small>, <sub>, <sup>, <del>, <strong>, <mark>, <ins>",
    answer:
      "<b> - makes text bold, <i> - makes text italicised, <em> - makes text italicised but with added semantics importance, <big> - incrases the font size of the text by one unit, <small> - decreases the font size of the text by one unit, <sub> - makes the text a subscript, <sup> - makes the text a superscript, <del> - displays as strike out text, <strong> - marks the text as important and bold, <mark> - highlights the text, <ins> - displays as added text",
  },
  {
    number: 17,
    question:
      "Explain how to indicate the character set being used by a document in HTML",
    answer: "<meta charset='utf-8'>",
  },
  {
    number: 18,
    question:
      "What is the main difference between <strong>, <b> and <em>, <i> tags?",
    answer:
      "The effect on a normal webpage of the tags <strong>, <b>  and <em>, <i> is the same. <b> and <i> tags stands for bold and italic. These two tags only apply font styling and bold tag <b>, just adds more ink to the text, these tags don't say anything about the text. Whereas, <strong> and <em> tags represent that the span of text is of strong importance or more importance and emphatic stress respectively than the rest of the text. These tags have semantic meaning.",
  },
  {
    number: 19,
    question: "What is the significance of <head> and <body> tag in HTML?",
    answer:
      "<head> tag provides the information about the document. It should always be enclosed in the <html> tag. This tag contains the metadata about the webpage and the tags which are enclosed by head tag like <link>, <meta>, <style>, <script>, etc. are not displayed on the web page. Also, there can be only 1 <head> tag in the entire Html document and will always be before the <body> tag. <body> tag defines the body of the HTML document. It should always be enclosed in the <html> tag. All the contents which needs to be displayed on the web page like images, text, audio, video, contents, using elements like <p>, <img>, <audio>, <heading>, <video>, <div>, etc. will always be enclosed by the <body> tag. Also, there can be only 1 body element in an HTML document and will always be after the <head> tag.",
  },
  {
    number: 20,
    question:
      "Can we display a web page inside a webpage or is nesting of webpages possible?",
    answer: "Yes, this is possible. <iframe src='url of the webpage to embed'.",
  },
  {
    number: 21,
    question: "How is cell padding different to cell spacing?",
    answer:
      "Cell Spacing is the space or gap between two consecutive cells. Whereas, Cell Padding is the space or gap between the text/ content of the cell and the edge/ border of the cell. Please refer to the above figure example to find the difference.",
  },
  {
    number: 22,
    question:
      "How many ways can we position a HTML element? Or, what are the permissible values of the position attribute?",
    answer:
      "There are mainly 7 valyes of position attribute that can be used to position a HTML elemnt. 1. Static: default value. Here the element is positioned according to the normal flow of the document. absolute: Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom. fixed: This is similar to absolute except here the elements are positioned relative to the <html> element. relative: Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position. initial: This resets the property to its default value.inherit: Here the element inherits or takes the property of its parent.",
  },
  {
    number: 23,
    question: "In how many ways can you display HTML elements?",
    answer:
      "inline: Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect. block: using this, we can display any inline element as a block-level element. inline-block: This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values. flex: It displays the container and element as a flexible structure. It follows flexbox property. inline-flex: It displays the flex container as an inline element while its content follows the flexbox properties. grid: It displays the HTML elements as a grid container.none: Using this property we can hide the HTML element.",
  },
  {
    number: 24,
    question:
      "What is the difference between 'display: none' and 'visibility: hidden', when used as attributes to the HTML element?",
    answer:
      "When we use the attribute “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.",
  },
  {
    number: 25,
    question: "Are the HTML tags and elements the same thing?",
    answer:
      "No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but just <h1> is a starting tag and </h1> is a closing tag.",
  },
  {
    number: 26,
    question:
      "How do you create a link in HTML and explain the target attribute?",
    answer:
      "HTML provides a hyperlink - <a> tag to specify the links in a webpage. The ‘href’ attribute is used to specify the link and the ‘target’ attribute is used to specify, where do we want to open the linked document. The ‘target’ attribute can have the following values: _self: This is a default value. It opens the document in the same window or tab as it was clicked. _blank: It opens the document in a new window or tab. _parent: It opens the document in a parent frame. _top: It opens the document in a full-body window.",
  },
  {
    number: 27,
    question:
      "How many ways can we specify the CSS styles for the HTML element?",
    answer:
      "Inline: here we use the 'style' attribute inside the HTML element. Internal: Here we use the <style> tag inside the <head> tag. External: Here we use the <link> tag inside the head to reference a separate CSS file. ",
  },
  {
    number: 28,
    question:
      "What is the difference between the link tag <link> and anchor tag <a>?",
    answer:
      "The anchor tag <a> is used to create a hyperlink to another webpage or to a certain part of the webpage and these links are clickable, whereas, link tag <link> defines a link between a document and an external resource and these are not clickable.",
  },
  {
    number: 29,
    question: "How can you include JavaScript code in HTML?",
    answer:
      "HTML proivdes a <script> tag which we can run the JS code, either by writing JS code directly within the <script> tag or linking to a file using <script src='path to file></script>'.",
  },
  {
    number: 30,
    question:
      "When to use scripts in the head and when to use scripts in the body?",
    answer:
      "If the scripts contain some event-triggered functions or jquery library then we should use them in the head section. If the script writes the content on the page or is not inside a function then it should be placed inside the body section at the bottom. In short, follow below three points: Place library scripts or event scripts in the head section. Place normal scripts that do not write anything on the page, in the head section until there is any performance issue. Place scripts that render something on the web page at the bottom of the body section.",
  },
  {
    number: 31,
    question: "What are HTML forms and how do we create them?",
    answer:
      "The HTML form is used to collect the user inputs. HTML provides a <form> tag to create forms. To take input from the user we use the <input> tag inside the form so that all collected user data can be sent to the server for processing. There are different input types like ‘button’, ‘checkbox’, ‘number’, ‘text’, ‘password’, ‘submit’ etc. Sample form: <form action='/submit_data php'> <label>Enter your name: </label> <input type='text' name='name'/> <label>Enter Mobile number </label> <input type='number' name='mobile_no'/> <input type='submit' value='Submit'></form>",
  },
  {
    number: 32,
    question: "How to handle events within the HTML doc?",
    answer:
      "HTML allows event trigger actions in browsers using JavaScript. Some examples are 'onclick', 'ondrag' and 'onchange'.",
  },
  {
    number: 33,
    question: "What are some advantages of HTML5 over its previous versions?",
    answer:
      "Some advantages of HTML5 are: it has multimedia support, it has the capabilities to store offline data using SQL databases and application cache. Javascript can be run in the background. HTML5 also allows users to draw various shapes like rectangles, circles, triangles, etc. Included new Semantic tags and form control tags. ",
  },
  {
    number: 34,
    question: "How can we include audio or video in a webpage?",
    answer:
      "HTML5 provides two tags: <audio> and <video> tags using whihc we can add the audio or video directly in the webpage.",
  },
  {
    number: 35,
    question:
      "What is the difference bettwen an inline and a block level element?",
    answer:
      "Inline elements take up the space that is necessary for the content and does not start a new line. Block level elements start on a new line and consume the full width of the page available.",
  },
  {
    number: 36,
    question: "Provide some examples of inline elements?",
    answer:
      "<span>, <a>, <strong>, <img>, <button>, <em>, <select>, <abbr>, <label>, <sub>, <cite>, <abbr>, <script>, <label>, <i>, <input>, <output>, <q>, etc.",
  },
  {
    number: 37,
    question: "Provide some examples of block level elements?",
    answer:
      "<div>, <p>, <header>, <footer>, <h1>...<h6>, <form>, <table>, <canvas>, <video>, <blockquote>, <pre>, <ul>, <ol>, <figcaption>, <figure>, <hr>, <article>, <section>, etc.",
  },
  {
    number: 38,
    question: "Is the <datalist> tag and <select> tag the same?",
    answer:
      "No. The <datalist> tag and <select> tag are different. In the case of <select> tag a user will have to choose from a list of options, whereas <datalist> when used along with the <input> tag provides a suggestion that the user selects one of the options given or can enter some entirely different value.",
  },
  {
    number: 39,
    question: "What is the difference between <figure> and <img> tags?",
    answer:
      "The <figure> tag specifies the self-contained content, like diagrams, images, code snippets, etc. <figure> tag is used to semantically organize the contents of an image like image, image caption, etc., whereas the <img> tag is used to embed the picture in the HTML5 document.",
  },
  {
    number: 40,
    question: "Define image map?",
    answer:
      "Image Map lets a developer map/link different parts of images with the different web pages. It can be achieved by the <map> tag in HTML5, using which we can link images with clickable areas. <img src='image_url' usemap='#workspace' /> <map  name=”workspace”> <area shape=”rect”  coords=”34, 44, 270, 350” ,  href=”xyz.html” /> <area shape=”rect”  coords=”10, 120, 250, 360” ,  href=”xyz.html /> </map>",
  },
  {
    number: 41,
    question: "What are Semantic Elements?",
    answer:
      "Semantic elements are those which describe the particular meaning to the browser and the developer. Elements like <form>, <table>, <article>, <figure>, etc., are semantic elements.",
  },
  {
    number: 42,
    question: "Difference between SVG and Canvas HTML5 elements?",
    answer:
      "SVG: vector based, composed of shapes, works better with a larger surface, can be modified using CSS and scripts and highly scalable. Canvas: is Raster based, composed of pixels, works better with smaller surface, can only be modified using scripts and is less scalable.",
  },
  {
    number: 43,
    question: "What type of audio files can be played using HTML5?",
    answer: "MP3, WAV and Ogg.",
  },
  {
    number: 44,
    question: "Explain the concept of web storage in HTML5?",
    answer:
      "This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. There is a size limit based on different browsers. This helps in decreasing the load time and a smooth user experience. There are two types of web storage that are used to store data locally in HTML5: Local Storage - This helps in storing data that will be retained even though the user reopens the browser. It is stored for each webapp on different browsers. Session Storage - This is used for one session only. After the user closes the browser this gets deleted.",
  },
  {
    number: 45,
    question: "What is Microdata in HTML5",
    answer:
      "Used to help extract data for site crawlers and search engines. It is basically a group of name-value pairs. The groups are called items, and each name-value pair is a property. Most of the search engines like Google, Microsoft, Yandex, etc follow schema.org vocabulary to extract this microdata.",
  },
  {
    number: 46,
    question:
      "Which tag is used for representing the result of a calculation? Explain its attributes?",
    answer:
      "The <output> tag is used for representing the result of a calculation. It has the following attributes: for - It defines the relationship between the elements used in calculation and result. form - This is used to define the form the output element belongs to. name - The name of the output element.",
  },
  {
    number: 47,
    question: "Explain some of the new input types provided by HTML5 for forms",
    answer:
      "Date - Only select date by using type = 'date' Week - Pick a week by using type = 'week' Month - Only select month by using type = 'month' Time - Only select time by using type = 'time'. Datetime - Combination of date and time by using type = 'datetime'. Datetime-local - Combination of  date and time by using type = 'datetime-local.' but ignoring the timezone. Color - Accepts multiple colors using type = 'color'. Email - Accepts one or more email addresses using type = 'email'. Number - Accepts a numerical value with additional checks like min and max using type = 'number'. Search - Allows searching queries by inputting text using type = 'search'. Tel - Allows different phone numbers by using type = 'tel'. Placeholder - To display a short hint in the input fields before entering a value using type = 'placeholder'. Range - Accepts a numerical value within a specific range using type = 'range'. Url - Accepts a web address using type = 'url'",
  },
  {
    number: 48,
    question: "What are the new tags in Media Elements in HTML5?",
    answer:
      "<audio> - Used for sounds, audio streams, or music, embed audio content without any additional plug-in. <video> - Used for video streams, embed video content etc. <source> - Used for multiple media resources in media elements, such as audio, video, etc. <embed> - Used for an external application or embedded content. <track> - Used for subtitles in the media elements such as video or audio.",
  },
  {
    number: 49,
    question: "Why do we need the MathML element in HTML5?",
    answer:
      "MathML stands for Mathematical Markup Language. It is used for displaying mathematical expressions on web pages. For this <math> tag is used.",
  },
  {
    number: 50,
    question: "What are web workers?",
    answer:
      "These are added to bring parallelism and async capability. It runs in the background to do the computationally expensive tasks without yielding to make the page responsive. It is achieved by starting a separate thread for such tasks. These are not meant to perform UI operations. There are three types of web workers: Dedicated Workers - These are workers that are utilized by a single script. Shared Workers -These are workers that are utilized by multiple scripts running in different windows, IFrames, etc. Service Workers - These act as proxy servers between web applications, the browser, and the network. Mostly used for push notifications and sync APIs.",
  },
  {
    number: 51,
    question: "What is a manifest file in HTML5?",
    answer:
      "The manifest file is used to list down resources that can be cached. Browsers use this information to make the web page load faster than the first time. There are 3 sections in the manifest file. CACHE Manifest - Files needs to be cached. Network - File never to be cached always need a network connection. Fallback - Fallback files in case a page is inaccessible.",
  },
  {
    number: 52,
    question: "What is the Geolocation API in HTML5?",
    answer:
      "Geolocation API is used to share the physical location of the client with websites. This helps in serving locale-based content and a unique experience to the user, based on their location. This works with a new property of the global navigator object and most of the modern browsers support this.",
  },
  {
    number: 53,
    question: "Why do we use the 'required' attribute in HTML?",
    answer:
      "The required attribute is used in HTML to make the field mandatory. It forces the user to fill that particular field to submit the form.",
  },
  {
    number: 54,
    question: "Explain Canvas in relation to HTML5",
    answer:
      "Canvas is a pixel-based graphics and it is one of the new features of HTML5. It provides a space in the document where we can draw graphics by using JavaScript and it is resolution dependent, hence the quality will be affected when it’s zoomed or resized.",
  },
];

export default htmlQuestions;
