document.getElementById("app").innerHTML =
    '<a id="thisLink" style="display:none; float:right;" href="">Link to this page</a>' +
    '<select id="fileSelection">' +
    ' <option value="">Select One</option>' +
    '</select>' +
    '<div id="fileDisplayArea"><div>';

const dir = "../docs";
const thisLink = document.getElementById("thisLink");
const fileDisplayArea = document.getElementById("fileDisplayArea");
const fileSelection = document.getElementById("fileSelection");
const doc = getParameterByName('doc');

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

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
    return inp.replace(dir + "/", "").replace(".md", "")
}

var _getAllFilesFromFolder = function (dir) {
    // var filesystem = require("fs");
    // var results = [];
    // filesystem.readdirSync(dir).forEach(function(file) {
    //     file = dir+'/'+file;
    //     var stat = filesystem.statSync(file);

    //     if (stat && stat.isDirectory()) {
    //         results = results.concat(_getAllFilesFromFolder(file))
    //     } else results.push(file);
    // });
    var comps = [
        "Alert",
        "Button",
        "ButtonFilter",
        "Carousel",
        "Collapse",
        "Complex-Table",
        "Contact-Drawer",
        "Contributor-Model",
        "DatePicker",
        "Dropdown",
        "Filmstrip-Carousel",
        "FilterCollection",
        "Footer",
        "Form",
        "HelperClasses",
        "Icons",
        "Linkpicker",
        "Masthead",
        "Modal",
        "Nav",
        "Nav-Left",
        "Pagination",
        "Popover",
        "Product-Stack",
        "Progress-Bar",
        "Select-Bar",
        "Skipnav",
        "Slider",
        "Spinbox",
        "Tab",
        "Tooltip"
    ];
    var results = [];
    comps.forEach(function (comp) {
        results.push(dir + "/" + comp + ".md")
    });
    return results;
};

_getAllFilesFromFolder(dir).forEach(function (file) {
    if (file.indexOf(".md") > -1) {
        var optionName = docName(file);
        fileSelection.options[fileSelection.options.length] = new Option(optionName, file);
    }
});

function setLink(page) {
    thisLink.href = "./?doc=" + page;
}

function setMarkdown(text) {
    fileDisplayArea.innerHTML = show(text);
}

function doGET(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // The request is done; did it work?
            if (xhr.status == 200) {
                // ***Yes, use `xhr.responseText` here***
                callback(xhr.responseText);
            } else {
                // ***No, tell the callback the call failed***
                callback(null);
            }
        }
    };
    xhr.open("GET", path);
    xhr.send();
}

function handleFileData(fileData) {
    if (!fileData) {
        // Show error
        console.log("Unable to retrieve file");
        return;
    }
    // Use the file data
    setMarkdown(fileData);
}

if (doc) {
    fileSelection.style.display = "none";
    setLink(doc);
    doGET(dir + "/" + doc + ".md", handleFileData);
} else {
    fileSelection.addEventListener("change", function (e) {
        setLink(docName(fileSelection.value));
        thisLink.style.display = "block";
        doGET(fileSelection.value, handleFileData);
    });
}