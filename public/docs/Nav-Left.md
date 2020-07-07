# Nav-Left

## Description/Purpose

The Nav (Left Nav) component creates a semantic, sticky navigation column that follows the user's scroll progress throughout a page.  At smaller breakpoints, the navigation appears as an offcanvas menu which is activated via a hamburger menu button in the masthead.  Note that the nav-left component requires the use of a masthead component in the HTML's header element, as well.

## Initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the [Getting Started](https://www.delldesignsystem.com/getting-started) page.

### HTML initialization

The HTML structure of an left nav requires a div element with the *data-toggle*="**dds__navLeft-wrapper**", and *data-target*="**dds__navLeft**", which is also one of its child elements.  There are two required data attributes you also need to specify and assign them to their respective targets' ID tags; these are *data-main* and *data-menu*.  The first, *data-main*, is used to tell the left nav where your page's main content is, and the second, *data-menu*, should be the element that contains your list of navigation items (in an unordered list).  

> **NOTE**: The element to which you point *data-menu* should be either a div containing an unordered list, or should be the undordered list, itself.
> **NOTE**: It is recommended that you apply a *class* of **dds__body-ml-20** to the element that you assign to *data-main*.  This will help with initial appearance, avoiding any flickering that might be caused by initialization.
> **NOTE**: Specifically be aware that recommended configuration is to use the *data-menu* AND the *data-altmenu* properties, in which case the menus being shown are handled within the left-nav component, while the hamburger menu remains within the masthead component.

```HTML
<div class="dds__navLeft-wrapper" data-toggle="dds__nav-left" data-main="mainContent" data-menu="myLeftNavContent" data-altmenu="myOffCanvasContent"  data-arrows="right">
    <nav class="dds__navLeft">
        <ul id="navLeft-list" class="dds__navLeft-list">
            <!-- place li elements here if you wish to populate the masthead offcanvas menu separately -->
        </ul>
        <div class="dds__navLeft-border"></div>
        <button class="dds__btn dds__btn-primary dds__navLeft-btn-toggle">
            <svg focusable="false" class="dds__svg-icons">
                <use xlink:href="#dds__chevron-left" class="dds__svg-icons-item dds__show"></use>
            </svg>
        </button>
    </nav>
    <aside class="dds__msthd-offcanvas-menu dds__navLeft" hidden>
        <ul role="menu" class="dds__navLeft-list">
        </ul>
    </aside>
</div>


<!--
<ul id="myLeftNavContent" hidden>
	populate your desktop menu here if you wish to clone them automatically into the masthead offcanvas menu
</ul>
-->


<!--
<ul id="myOffCanvasContent" hidden>
	populate your offcanvas menu here if you wish to override the masthead usage but not use the desktop cloning feature
</ul>
-->
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__nav-left**" found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__nav-left\"]"), function(element) {
        new  UIC.NavLeft(element);
    });
</script>
```

## Options

Some options are required, as denoted by **.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
altmenu | N/A | Available | `string` If set to the ID of the element you use to contain the offcanvas navigational links of your menu, the component will preferentially use that content for its offcanvas menu. | *data-altmenu*
arrows | "right" | Available | `string` Used to change the positioning of the menu's accordion's arrows.  Can be `left | right | center` | *data-arrows*
main** | N/A | Available | `string` Another required option, set this to the ID of whichever element contains the main body of your site. | *data-main*
menu | N/A | Available | `string` This option can be set to the ID of the element you use to contain the navigational links of your menu. | *data-menu*
suffix | N/A | Available | `string` If you wish to add a static content area to the lower half of your left nav menu, set this option to the ID of that element. | *data-suffix*

## Events

All components use one or more Events to communicate to external scripts that something has happened. All events will be dispatched from the element used in initialization. Use that element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

> **NOTE**: Most events related to the interaction of this component will be handled by any child accordion components you choose to add or by the masthead component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicLeftNavCloseEvent | Available | Event dispatched upon triggering the close of the offcanvas version of the left nav menu | `element`, `{"button": activeButton, "container": activeContainer}`

## Methods

There are no public methods for this component.

## Examples

### Sample Page with Left Nav

To Be Developed
