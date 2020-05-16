# DLS Documentation

## Introduction

This project contains the consumer documentation for the UICore (DLS) Components. The documentation is written in [Markdown format](https://daringfireball.net/projects/markdown/syntax) and stored within the **/public/docs/** directory.  The site that is served is written in HTML and javascript, using the third-party library [Showdown.js](http://showdownjs.com/) which is a javascript implementation of the Markdown interpreter.

## Local Setup

Clone the repository and process the package by running either `yarn` or `npm install` from the command prompt, which will install the necessary node_modules. Once complete, launch the app by running `yarn start` or `npm start` also from the command prompt.  This will launch the server <http://localhost:3000.>  As of this writing, it does not have browser sync.

## How it Works

The index page of the site reads the directory **/public/docs/** and populates the list of files found there into a select field for site navigation.  This is not meant to be the main navigation, only a developer shortcut. On each page selected there is a shortcut to the same page; this will populate the querystring with the name of the chosen component, and when that is populated, the site navigation disappears.  This is intentional so that each page can be included within Webflow or any iframe.

#### Codesandbox Iframes

Within the Markdown pages in this documentation project, each page contains a number of code sandboxes as iframes in their "example" section.  These are running on a [single codesandbox.io instance](https://codesandbox.io/s/github/DDS-DLS/sandboxes).  The sandbox there operates much like this project, except instead of reading Markdown files, it's reading .txt files, dumping the contents of each component.txt file to the site as HTML/javascript.  To publish changes to these iframes, just push new changes to the **sandboxes** project on Github.com. See the section on Login below for further detail.

## Production

As of this writing, we're taking a shortcut to publish these pages by hosting them on Vercel as a free site, located at <https://documentation-gokpg9x1w.now.sh/.>  In order to publish to Vercel, just copy the changes from our repository at gitlab.dell.com to the account on **GitHub**.  This automatically publishes, updating all documentation.

#### Login

There are two projects within the DDS-DLS account on Github, one which is a copy of this site, and the other that contains the contents of the iframes within this site. If you do not have access to the [documentation repository](https://github.com/DDS-DLS/documentation) or the [sandboxes repository](https://github.com/DDS-DLS/sandboxes), someone on the team can add you to the project.
