   
document.getElementById("app").innerHTML = `
  <a id="thisLink" style="display:none; float:right;" href="">Link to this page</a>
  <select id="fileSelection">
    <option value="">Select One</option>
  </select>
  <div id="fileDisplayArea"><div>
`;

const dir = "../docs";
const thisLink = document.getElementById("thisLink");
const fileDisplayArea = document.getElementById("fileDisplayArea");
const fileSelection = document.getElementById("fileSelection");
const urlParams = new URLSearchParams(window.location.search);
const doc = urlParams.get('doc');

function show(source) {
  var converter = new showdown.Converter();
  converter.setOption('tables', true);
  converter.setOption('literalMidWordUnderscores', true);
  converter.setOption('strikethrough', true);
  var html = converter.makeHtml(source);

  if (html) {
    return html;
  } else {
    console.log("unable to convert");
  }
}

function docName(inp) {
  return inp.replace(dir+"/", "").replace(".md", "")
}

var _getAllFilesFromFolder = function(dir) {
  // var filesystem = require("fs");
  // var results = [];
  // filesystem.readdirSync(dir).forEach(function(file) {
  //     file = dir+'/'+file;
  //     var stat = filesystem.statSync(file);

  //     if (stat && stat.isDirectory()) {
  //         results = results.concat(_getAllFilesFromFolder(file))
  //     } else results.push(file);
  // });
  var comps = ["Alert", "Button", "ButtonFilter", "Carousel", "Collapse", "Complex-Table", "Contact-Drawer", "Contributor-Model", "DatePicker", "Dropdown", "Filmstrip-Carousel", "Footer", "Form", "Linkpicker", "Masthead", "Modal", "Nav", "Nav-Left", "Pagination", "Popover", "Progress-Bar", "Select-Bar", "Skipnav", "Slider", "Spinbox", "Tab", "Tooltip"];
  var results = [];
  comps.forEach((comp) => {
    results.push(dir + "/" + comp + ".md")
  })
  return results;
};

_getAllFilesFromFolder(dir).forEach((file) => {
    if(file.indexOf(".md") > -1) {
      var optionName = docName(file);
        fileSelection.options[fileSelection.options.length] = new Option(optionName, file);
    }
});

async function _getFile(filename) {
  return fetch(filename)
    .then(response => response.text())
    .then(text => {
      return text;
    }).catch((err) => {
      return (err);
    });
}

function setLink(page) {
  thisLink.href = "./?doc=" + page;
}

function setMarkdown(text) {
  fileDisplayArea.innerHTML = show(text);
}

if (doc) {
  fileSelection.style.display = "none";
  setLink(doc);
  _getFile(dir + "/" + doc + ".md")
    .then(text => {
      setMarkdown(text);
    }).catch((err) => {
      console.log("Unable to retrieve file from querystring.\n" + err);
    });
} else {
  fileSelection.addEventListener("change", (e) => {
    setLink(docName(fileSelection.value));
    thisLink.style.display = "block";
    _getFile(fileSelection.value)
      .then(text => {
        setMarkdown(text);
      }).catch((err) => {
        console.log("Unable to retrieve selected file.\n" + err);
      });
   });
}
