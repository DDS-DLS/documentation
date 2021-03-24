# Contributor Model

## Description

To increase adoption of the DLS (Design Language System) from UI Developers we are creating the new Contributor Model. The Contributor Model will use technical concepts to solve the problem of, how can UI Developers contribute Components/Patterns back to the DLS. The technical solution will be comprised of several steps and guidelines. Using git, Gitlab repositories and CI/CD pipeline we will discuss how other teams will be able to consume, build and merge code back to the DLS. This solution requires teams that want to fully participate in the Contributor Model to be on Gitlab.

## Creating a Fork

Forking the desired project to your own namespace is required as teams outside of DLS do not have write access to the main project, but teams will still be able to contribute code via merge requests. Forking a project is in most cases is just a two-step process.

1. Click on the fork button located in between the star and clone buttons on the project&#39;s home page.

 ![Forking](/images/Forking_Gitlab.png "Forking in Gitlab")

1. Once clicked, you&#39;ll be presented with a screen where you can choose the namespace to fork to. Only namespaces (groups and your own namespace) where you have &#39;write&#39; access to, will be shown. Click on the namespace to create your fork there.

 ![Project](/images/New_Fork_Project_Gitlab.png "New Forked Project")

After the forking is done, you can start working on the newly created repository. There, you will have full [Owner](https://docs.gitlab.com/ee/user/permissions.html) access, so you can set it up as you please.

**Note:**  [Repository mirroring](https://docs.gitlab.com/ee/user/project/repository/repository_mirroring.html) will help to keep your fork synced with the original repository. Before approving a merge request, you&#39;ll likely to be asked to sync before getting approval, hence automating it is recommended.

## Creating a Submodule

Git Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you add another repository into your project and keep your commits separate. Use the newly created fork and add it into your current project. Once you have created your fork you can add the newly created repository to your project.

git submodule add `https://path-to-the/newly/created/fork`

You can also change the name of the folder within your project just by adding in a new name to the end of the command

git submodule add `https://path-to-the/newly/created/fork` folderName

Once the fork has been add to your you will see the new .gitmodules file in the parent project.

 ![Create Submodule](/images/Submodule.png "Creating a Submodule")

## Using Git submodules in your CI jobs

There are a few steps you need to take in order to make submodules work correctly with your CI jobs:

First, make sure you have used [relative URLs](https://docs.gitlab.com/ee/ci/git_submodules.html#configuring-the-gitmodules-file) for the submodules located in the same GitLab server.

Next, if you are using gitlab-runner v1.10+, you can set the GIT\_SUBMODULE\_STRATEGY variable to either normal or recursive to tell the runner to fetch your submodules before the job:

variables:

  GIT\_SUBMODULE\_STRATEGY: recursive

See the [.gitlab-ci.yml](https://docs.gitlab.com/ee/ci/yaml/README.html#git-submodule-strategy) [reference](https://docs.gitlab.com/ee/ci/yaml/README.html#git-submodule-strategy) for more details about GIT\_SUBMODULE\_STRATEGY.

If you are using an older version of gitlab-runner, then use git submodule sync/update in before\_script:

before_script:

- git submodule sync --recursive

- git submodule update --init --recursive

--recursive should be used in either both or none (sync/update) depending on whether you have recursive submodules.

 ![CICD Build](/images/CICDBuild.png "CI/CD Build")

## Merging upstream

Once you are ready to present your code back to the main project, you will need to create a merge request. Choose your forked project&#39;s main branch as the source and the original project&#39;s main branch as the destination and create the [merge request](https://docs.gitlab.com/ee/user/project/merge_requests/index.html).

![Merge Request](/images/Merging_Gitlab.png "Merge Request")

You can then assign the merge request to someone to have them review your changes. Upon pressing the &#39;Submit Merge Request&#39; button, your changes will be added to the repository and branch you&#39;re merging into.

 ![Merging](/images/Merge_Request_Gitlab.png "Code Merge")

 ![Merge Upstream](/images/MergeRequest.png "Merge Upstream")

## Creating new Components/Patterns

### Naming strategy

To differentiate the DLS component names from other third-party systems, everything is prefixed with &#39;dds__&#39; (d d s underscore underscore). The prefix together with BEM (Block Element Modifier) methodology is used by the DLS. BEM helps to create reusable components when code sharing in front-end development. BEM is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, as well as a lot more strict.

### Block

Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well. In HTML, blocks are represented by the class attribute.

Naming:

Block names may consist of Latin letters, digits, and dashes. The use of dashes in a block name should be rare and will be approved on a case by case bases.

Features:

- The block name describes a purpose "What is it?" i.e. nav, button.
- The block name is not its state "What does it look like?" i.e. red, big.

Example:

```html

    <!-- Correct Usage. The `error` block is semantically meaningful -->
    <div class="dds__alert"></div>

    <!-- Incorrect Usage. It describes the appearance -->
    <div class="dds__red-alert"></div>
```

- The block shouldn&#39;t influence its environment, meaning you shouldn&#39;t use things like external geometry or positioning in the block.
- You also shouldn&#39;t use CSS tag or ID selectors when using BEM.
- Blocks should be represented as singular (alert) and not plural (alerts).

This ensures the necessary independence for reusing blocks or moving them from place to place.

#### Guidelines: block usage

Nesting:

- Blocks can be nested in each other.
- You can have any number of nesting levels.

Example:

```html
    <!-- `container` block -->
    <div class="dds__container">

        <!-- Nested `modal` block -->
        <div class="dds__modal"></div>

        <!-- Nested `form` block -->
        <form class="dds__form"></form>

    </div>
```

Known Blocks:

Below is a list of Blocks used with in the DLS:

| Block | Description |
| ----- | ----------- |
| alert | Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. |
| badge |   |
| banner |   |
| breadcrumb | Indicate the current page&#39;s location within a navigational hierarchy that automatically adds separators via CSS. |
| button | Use button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. |
| card | Cards provide a flexible and extensible content container with multiple variants and options. |
| carousel | A slideshow component for cycling through elements—images or slides of text—like a carousel. |
| container |   |
| divider |   |
| drawer |   |
| dropdown | Toggle contextual overlays for displaying lists of links and more. |
| filter |   |
| footer |   |
| form | Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms. |
| input? | Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs. |
| icon |   |
| image/figure |   |
| jumbotron | Lightweight, flexible component for showcasing hero unit style content. |
| list | List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within. |
| masthead |   |
| media | Documentation and examples for media object to construct highly repetitive components like blog comments, tweets, and the like. |
| modal | Use JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. |
| nav | Documentation and examples for how to use included navigation components. |
| navbar | Documentation and examples for powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin. |
| pagination | Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages. |
| popover | Documentation and examples for adding popovers, like those found in iOS, to any element on your site. |
| progress | Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels. |
| select |   |
| slider |   |
| table |   |
| tab |   |
| tooltip | Documentation and examples for adding custom tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage. |
| transition |   |

### Element

A composite part of a block that can&#39;t be used separately from it. Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

Naming:

Element names may consist of Latin letters, digits, dashes and underscores. The element name is separated from the block name with a single hyphen (-).

Features:

- Its purpose ("What is this?" — item, text, etc.),
- The element name is not its state ("What type, or what does it look like?" — red, big, etc.).

Example:

```html
    <!-- `form` block -->
    <form class="dds__form">

        <!-- `input` element of type checkbox in the `form` block -->
        <input type="checkbox" class="dds__form-check">

        <!-- `select` element in the `form` block -->
        <select class="dds__form-select">…</select>

    </form>
```

### Guidelines: element usage

Nesting:

- Elements can be nested inside each other.
- You can have any number of nesting levels.
- An element is always part of a block, not another element. This means that element names can&#39;t define a hierarchy such as block-elem1-elem2.

Example:

```html
    <!-- Correct. The structure of the full element name follows the pattern: `block-element` -->
    <form class="dds__form">

        <div class="dds__form-content">

            <input type="file" class="dds__form-file">

            <button class="dds__form-btn">Search</button>

        </div>

    </form>

    <form class="dds__form">

        <div class="dds__form-content">

            <!-- Recommended: `dds __form-input` not `dds__ form-content-input` -->
            <input class="dds__form-input">

            <!-- Recommended: `dds __form-btn` not `dds__ form-content-btn` -->
            <button class="dds__form-btn">Search</button>

        </div>

    </form>
```

The block name defines the namespace, which guarantees that the elements are dependent on the block (block-element).

A block can have a nested structure of elements in the DOM tree:

Example:

```html
    <div class="block">

        <div class="block-elem1">

            <div class="block-elem2">

                <div class="block-elem3"></div>

            </div>

        </div>

    </div>
```

However, this block structure is always represented as a flat list of elements in the BEM methodology:

Example:

```css
    .dds__block {}

    .dds__block-elem1 {}

    .dds__block-elem2 {}

    .dds__block-elem3 {}
```

This allows you to change a block&#39;s DOM structure without making changes in the code for each separate element:

Example:

```html
    <div class="block">

        <div class="block-elem1">

            <div class="block-elem2"></div>

        </div>

        <div class="block-elem3"></div>

    </div>
```

### Membership

An element is always part of a block, and you shouldn&#39;t use it separately from the block.

Example:

```html
    <!-- Correct. Elements are located inside the `dds__form` block -->

    <!-- `dds__form` block -->
    <form class="dds__form">

        <!-- `input` element in the `dds__form` block -->
        <input class="dds__form-input">

        <!-- `button` element in the `search-form` block -->
        <button class="dds__form-btn">Search</button>

    </form>

    <!-- Incorrect. Elements are located outside of the context of the `dds__form` block -->

    <!-- `dds__form` block -->
    <form class="dds__form">

        <!-- `input` element in the `dds__form` block -->
        <input class="dds__form-input">

        <!-- `button` element in the `dds__form` block-->
        <button class="dds__form-btn">Search</button>

    </form>
```

### Optionality

An element is an optional block component. Not all blocks have elements.

Example:

```html
    <!-- `dds__form` block -->
    <div class="dds__form">

        <!-- `input` block -->
        <input class="dds__input">

        <!-- `button` block -->
        <button class="dds__btn">Search</button>

    </div>
```

Should I create a block or an element?

#### Create a block

If a section of code might be reused and it doesn&#39;t depend on other page components being implemented.

#### Create an element

If a section of code can&#39;t be used separately without the parent entity (the block).

The exception is elements that must be divided into smaller parts – subelements – in order to simplify development. In the BEM methodology, you can&#39;t create elements of elements. In a case like this, instead of creating an element, you need to create a service block.

### Modifier

An entity that defines the appearance, state, or behavior of a block or element. Flags on blocks or elements. Use them to change appearance, behavior or state.

Naming:

Modifier names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block&#39;s or element&#39;s name plus one underscore: .dds__block\_-mod or .dds__block-elem\_-mod and .dds__block\_color-black with .dds__block\_color-red. Spaces in complicated modifiers are replaced by dash.

Features:

- Its appearance ("What size?" or "Which theme?" and so on — size\_s or theme\_islands).
- Its state ("How is it different from the others?" — disabled, focused, etc.).
- Its behavior ("How does it behave?" or "How does it respond to the user?" — such as directions\_left-top).

### Types of modifiers

Boolean

Used when only the presence or absence of the modifier is important, and its value is irrelevant. For example, disabled. If a Boolean modifier is present, its value is assumed to be true.

Example:

```html
    <!-- The `search-form` block has the `focused` Boolean modifier -->
    <form class="dds__form dds__form_focused">

        <input class="dds__form-input">

        <!-- The `button` element has the `disabled` Boolean modifier -->
        <button class="dds__form-btn dds__form-btn_disabled">Search</button>

    </form>
```

File Structure

The DLS team will be responsible for deploying all assets used to build Digital Experiences. Because of this the DLS will be responsible for the release management of assets. Other teams will follow the afore mentioned guidelines and will utilize the structure in this section to create new assets. When following these guidelines and structure other teams will be able to contribute back to the DLS. The component approach adopted in the BEM methodology also applies to the file structure. The implementations of blocks, elements, and modifiers are divided into independent technology files, which means we can connect them individually.

The structure is first broken down into asset categories. This structure will aid in develop by allowing teams to build against assets with in a category. Under each category teams will find either files based on the component block or directory housing helper files. It is important that teams follow this structure when creating new components/patterns to facilitate a quicker merge process. Below is a representation of structure that you will find with in your newly created fork.

```file
src/
    bin/ @see Testing for more details
    html/
        <block>/
            <block-element>.html
            <block-element_modifier>.html
            …
        js/
            helpers/
            <block>.js
            utilities.js
            …
        scss/
            mixins/
            utilities/
            <block>.scss
            …
```

1. html – the html folder follows a block element and or modifier file strategy. There can be many files within a block based on a element and or modifier variation of the component. All html files will only consist of the needed html elements to implement the component, meaning that for example teams should not include any type of container or layout elements that are not directly related to the component.
2. js – the js folder follows a block, helper or utilities file strategy. All components of block type will use the same javascript for initialization and or construction. An example of this is all &#39;alert(s)&#39; will use the &#39;alert.js&#39; file to initialize the component.
3. scss – the scss folder follows a block and or element file strategy with the advent of helpers found in the mixins and utilities folder. All components of the same type will use the same sass file. An example of this is all &#39;alert(s)&#39; will use the same sass file &#39;\_dds__alert.scss&#39; to house its selectors.

## Testing

The DLS offers extensive testing functionality that can be used when developing and running builds against pages that include DLS components. Under each submodule in every project can be found a set of functional, pixel, accessibility and unit tests that can be incorporated into project test step. The section will describe how to configure and include tests in a project&#39;s CI/CD pipeline. The testing environment is setup to run under node in the CI/CD pipeline so the use of a Node build pack is required when testing, more information on this can be found in the Configuration section. Functional and accessibility tests are run using Selenium and be configured against either Saucelabs or Selenium Grid and can be run headless to reduce execution run times.

## Structure

Before we get into the details on how to configure and use DLS tests in you builds we will first go over exactly what can be found in the submodule. Working off the previous Structure section above will go over what is in the &#39;bin&#39; folder. The files in the &#39;bin&#39; are used to run and configure tests against the project. Before some tests can be run an instance of the application must be available and in the case of the use of Saucelabs the application must be publicly available or a have access to a Saucelabs configured VPN tunnel. Below can be found the list of files used for testing.

```file
src/
    bin/
        accessibility.tests.js
        components.js
        config.tests.js
        functional.tests.js
        pixel.tests.js
        unit.tests.js
        accessibility/
        …
    functional/
        …
    pixel/
        …
    unit/
        …
    …
```

### Testing Files

The &#39;accessibility.tests.js&#39;, &#39;functional.tests.js&#39;, &#39;pixel.tests.js&#39; and &#39;unit.tests.js&#39; are ES5 javascript files that are used in conjunction with &#39;components.js&#39; and &#39;config.tests.js&#39; files to run tests against DLS components in the project. Each file is responsible for its configuration, finding components and executing the tests found under their corresponding folder. As an example, the &#39;functional.tests.js&#39; file is responsible for the Saucelabs or Selenium grid configuration, locating components on a configured page based on the &#39;components.js&#39; and &#39;config.tests.js&#39; files, and running the tests found in the &#39;functional&#39; folder against found components. Information on each top level files configuration can be found in the sections below.

The &#39;components.js&#39; file is an ES5 javascript file that is imported into every top level &#39;\*.tests.js&#39; file. The file contains a components object with and entry for each testable component, a query string used to locate component(s) on a configured page and the file name that represents the tests for that top level file. Each top level file will iterate over the entries in the components object, use the query string to locate the corresponding components on the configured page and once the components have be found then executes a call for the tests for the component.

The &#39;config.test.js&#39; file is an ES5 javascript file that is imported into every top level &#39;\*.tests.js&#39; file. The file contains a url object that represents the pages to execute tests against. These url entries will represent unique urls for the projects deployed application. The urls are used to locate and execute components tests for each top level file.

## Configuration

The configuration for testing comes in two parts and each part works together to complete a full set of testing. The first part we will discuss is the files configuration. Each top level file has its own distinct configuration used to complete testing. Below are the corresponding configuration sections for each top level file that will include a description and example configuration.

### Accessibility Testing

### Functional Testing

### Pixel Testing

### Unit Testing
