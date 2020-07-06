# Collapse

## Description/Purpose

Our implementation of collapse is [similar to bootstrap](https://getbootstrap.com/docs/4.0/components/collapse/).

## Initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the “Getting Started” page.

### HTML initialization

To initialize a Collapse ("accordion") component, you can use multiple combinations of dataset attributes. The first one is *data-toggle*="**dds__collapse**", which is how the javascript initializes the component. Optional attributes include *data-parent* and *data-target* (see more details about these in the Options section); All additional parameter values can be supplied using corresponding HTML data attribute that is associated to it, but can also supplied using options during JS initialization. Using HTML data attributes is suggested, especially when initializing more than one collapsible element on your DOM. In the example below, you can see the two ways of setting up your HTML.

Both the *data-parent* and *data-target* attributes are used to set the corresponding container and placement values for the component.

```HTML
<button class="dds__accordion-btn dds__collapsed dds__d-flex" type="button" data-toggle="dds__collapse" data-parent="#standard-accordion" data-target="#YourCollapseIDGoesHere" aria-expanded="true" aria-controls="YourCollapseIDGoesHere">
    <i class="dds__icons dds__chevron-right" aria-hidden="true"></i>
    <span class="dds__mx-2">Headline title goes here</span>
</button>
<div id="YourCollapseIDGoesHere" class="dds__collapse dds__hide" aria-labelledby="heading-standard-one" aria-expanded="true" role="region">
    <div class="dds__accordion-card-body">
        The Content Area provides a space for displaying other patterns or content. The Content Area is not part of this pattern. This pattern rather controls the opening and closing of the content area.  
    </div>
</div>
```

Alternatively, you can initialize it simply with the *data-toggle* attribute, and pass in the remaining data as an option during JS initialization.

```HTML
<h5 class="dds__mb-0">
    <button class="dds__accordion-btn dds__collapsed dds__d-flex" type="button" data-toggle="dds__collapse" aria-expanded="false" aria-controls="collapseThree">
        <i class="dds__icons dds__chevron-right" aria-hidden="true"></i>
        <span class="dds__mx-2">Headline title goes here </span>
</button>
</h5>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__collapse**" found in the DOM.

If all of your dataset attributes are defined in the HTML, you can initialize your object with no options:

```javascript
<script>
[].forEach.call(document.querySelectorAll("[data-toggle=\"dds__collapse\"]"), function(element) {
    new UIC.Collapse(element);
});
</script>
```

Alternatively, you can pass in these parameter values as an option during JS initialization for a specific instance:

```javascript
new UIC.Collapse(document.getElementbyId(“standard-accordion-btn”), {
        target: '#collapseOne',
        parent: "#standard-accordion"
    }
);
```

## Options

All options for this component can be omitted in place of a data-set attribute. Below, either a *data-target* attribute needs to be present in the HTML, or a *target* option needs to be passed in during initialization. This type of option is denoted with ‘**’, meaning it is required. If a required attribute is not passed in, an error will be thrown which will result in a component initialization failure. The table below shows the currently available parameters with their default values and a brief description:

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
target** | n/a | Available | `string` The ID of the element that is being shown/hidden. Required either as an option or as a data-target attribute. | *data-target*
parent | n/a | Available | `string` The ID of the parent element. This will allow for only one show/hide within a parent element to be open at a time. If you want independent show/hides omit this option. | *data-parent*

## Events

All components use one or more Events to communicate to external scripts that something has happened. All events will be dispatched from the element used in initialization. Use that element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicShowHideShowEvent | Available | Event dispatched upon triggering a show | `element`
uicShowHideShown | Available | Event dispatched upon completing a show | `element`
uicShowHideHideEvent | Available | Event dispatched upon triggering a hide | `element`
uicShowHideHidden | Available | Event dispatched upon completing a hide | `element`

## Methods

Use this section to show and describe the available public methods of the component.

- **toggle()**

    Type: Function

    Toggles either show or hide, depending on current state of accordion.

    Usage:

    ```javascript
    /**
     * @param {object} the event being passed in
     * @return {void}
     */
    Collapse.toggle(e);
    ```

- **show()**

    Type: Function

    Shows the element.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    Collapse.show();
    ```

- **hide()**

    Type: Function

    Hides the element.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    Collapse.hide();
    ```

## Examples

### Simple Collapse

<iframe height="265" style="width: 100%;" scrolling="no" title="UICore Accordion" src="https://codepen.io/DDS-DLS/embed/preview/NWxyQNw?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/DDS-DLS/pen/NWxyQNw'>UICore Accordion</a> by Example Code
  (<a href='https://codepen.io/DDS-DLS'>@DDS-DLS</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
