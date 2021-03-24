# Nav

## Description/Purpose

The Nav (Anchored Nav) component creates a sticky, tab-like navigation bar that follows the user's scroll progress throughout a page.

## Initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the [Getting Started](https://www.delldesignsystem.com/getting-started) page.

### HTML initialization

The HTML structure of an anchored nav requires a *nav* component with the *data-toggle*="**dds__nav**", with *class*="**dds__nav-anchored dds__tabs-container**".  The javascript will be able to identify this as a nav element based on the *data-toggle* and the classes will help style it as a horizontal, tab interface.

```HTML
<nav class="dds__nav-anchored dds__tabs-container" data-toggle="nav" aria-label="Example description of navigation">
    <ul class="dds__tabs">
        <li class="dds__flex-tab" role="none">
            <button class="dds__tab-link dds__active" data-target="#section1" aria-controls="section1" aria-selected="true">
                Section 1
            </button>
        </li>
        <li class="dds__flex-tab" role="none">
            <button class="dds__tab-link" tabindex="-1" data-target="#section2" aria-controls="section2" aria-selected="false">
                Section 2
            </button>
        </li>
        <li class="dds__flex-tab" role="none">
            <button class="dds__tab-link" tabindex="-1" data-target="#section3" aria-controls="section3" aria-selected="false">
                Section 3
            </button>
        </li>
    </ul>
</nav>
<div class="dds__nav-content">
    <div id="section1" class="dds__nav-section" role="tabpanel" aria-labelledby="section1">
        <h2>Section 1</h2>
        <p>The quick brown fox jumped over the lazy dog.</p>
        <p><img src="http://placehold.it/320x1600?text=TallPage" /></p>
    </div>
    <div id="section2" class="dds__nav-section" role="tabpanel" aria-labelledby="section2">
        <h2>Section 2</h2>
        <p>Several fabulous dixieland jazz groups played with quick tempo.</p>
        <p><img src="http://placehold.it/320x1600?text=TallPage" /></p>
    </div>
    <div id="section3" class="dds__nav-section" role="tabpanel" aria-labelledby="section3">
        <h2>Section 3</h2>
        <p>Back in my quaint garden, jaunty zinnias vie with flaunting phlox.</p>
        <p><img src="http://placehold.it/320x1600?text=TallPage" /></p>
    </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__nav**" found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"nav\"]"), function(element) {
        new  UIC.Nav(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

There are no events for this component.

## Methods

There are no public methods for this component.

## Examples

### Sample Page with Anchored Nav

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dnav&module=%2Fsrc%2Fcomponents%2Fnav.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
