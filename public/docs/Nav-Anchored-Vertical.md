# Nav

## Description/Purpose

The Nav (Vertical Anchored Nav) component creates a sticky, tab-like navigation bar that follows the user's scroll progress throughout a page.

## Initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the [Getting Started](https://www.delldesignsystem.com/getting-started) page.

### HTML initialization

The HTML structure of an anchored nav requires a `div` with a *class*="**dds__nav-anchored-vertical-container**" and a child `nav` component with the *data-toggle*="**dds__nav-anchored-vertical**", with *class*="**dds__nav-anchored-vertical**", also content area with a *class*="**dds__nav-anchored-vertical-content**".  The javascript will be able to identify this as a nav element based on the *data-toggle* and the classes will help style it as a vertical, tab interface.

```HTML
<div class="dds__nav-anchored-vertical-container">
    <nav class="dds__nav-anchored-vertical dds__tabs-container"
        data-toggle="dds__nav-anchored-vertical"
        data-target="#exampleResponsiveNav"
        aria-label="Example description of navigation">

        <ul class="dds__nav-anchored-vertical-list">
            <li class="dds__nav-anchored-vertical-item" role="none">
                <button class="dds__nav-anchored-vertical-link dds__active" data-target="#verticalSection1"  aria-controls="section1" aria-selected="true" role="tab">
                    Section 1
                </button>
            </li>
            <li class="dds__nav-anchored-vertical-item" role="none">
                <button class="dds__nav-anchored-vertical-link" tabindex="-1" data-target="#verticalSection2" aria-controls="section2" aria-selected="false" role="tab">
                    Section 2
                </button>
            </li>
            <li class="dds__flex-tab" role="none">
                <button class="dds__nav-anchored-vertical-link" tabindex="-1" data-target="#verticalSection3" aria-controls="section3" aria-selected="false" role="tab">
                    Section 3
                </button>
            </li>
        </ul>

    </nav>
    <div class="dds__nav-anchored-vertical-content">
        <div id="verticalSection1" class="dds__nav-section" role="tabpanel" aria-labelledby="section1">
            <h2>Section 1</h2>
            <p>The quick brown fox jumped over the lazy dog.</p>
            <p><img src="http://placehold.it/320x1600?text=TallPage" /></p>
        </div>
        <div id="verticalSection2" class="dds__nav-section" role="tabpanel" aria-labelledby="section2">
            <h2>Section 2</h2>
            <p>Several fabulous dixieland jazz groups played with quick tempo.</p>
            <p><img src="http://placehold.it/320x1600?text=TallPage" /></p>
        </div>
        <div id="verticalSection3" class="dds__nav-section" role="tabpanel" aria-labelledby="section3">
            <h2>Section 3</h2>
            <p>Back in my quaint garden, jaunty zinnias vie with flaunting phlox.</p>
            <p><img src="http://placehold.it/320x1600?text=TallPage" /></p>
        </div>
    </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__nav**" found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__nav-anchored-vertical\"]"), function(element) {
        new UIC.NavAnchoredVertical(element);
    });
</script>
```

## Options

Name | Default | Release/ Status | Description | Data-set Attribute
--- | --- | --- | --- | ---
showModal | false | 1.4.0 | `boolean` Used to instruct the component to use offcanvas modal instead show content. | n/a

## Events

There are no events for this component.

## Methods

There are no public methods for this component.

## Examples

### Sample Page with Vertical Anchored Nav

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dnav-anchored-vertical&module=%2Fsrc%2Fcomponents%2Fnav-anchored-vertical.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
