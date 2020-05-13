# Popover

## Description/Purpose

Popovers can be positioned to the right, left, top, or bottom of their triggering element. They have a title, which is an h3, a close button, and a body consisting of paragraphs, links, and/or images. A popover must include a title, as well as content for the body of the popover. Our implementation is [similar to Bootstrap’s](https://getbootstrap.com/docs/4.0/components/popovers/).

## Initialization

### HTML initialization

To initialize a popover, you can use multiple combinations of dataset attributes. The first one is *data-toggle*="**dds__popover**", which is how the javascript initializes the component. Two attributes are required either as dataset attributes or options during JS initialization: *data-toggle* and *data-placement*.  Optional attributes include *data-delay*, *data-animation*, and *data-container* (see more details about these in the Options section). Using HTML data attributes is suggested, especially when initializing more than one popover element on your DOM. In the example below, you can see the two ways of setting up your HTML.

1. The *data-placement*, *data-title*, and *data-content* attributes are used to set the corresponding values for the component. If including anything other than plain text as the content of the popover, set the *data-content* to a string of inner HTML

    ```HTML
    <button class=" dds__btn dds__btn-secondary" data-toggle="dds__popover" data-placement=”top” aria-label="dialog" tabindex=”0” data-title=”Sample popover title” data-content=”<div class='dds__popover-image'><img src='https://via.placeholder.com/80' alt='' height='80' width='80'/></div><br/>Example popover with image.”>
        Example popover on top
    </button>
    ```

2. Alternatively, you can initialize it simply with the *data-toggle* attribute, and pass in the remaining data as an option during JS initialization (not recommended):

    ```HTML
    <button class="dds__btn dds__btn-secondary" data-toggle="dds__popover" aria-haspopup="dialog" tabindex="0">
        Example popover
    </button>
    ```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__popover**" found in the DOM.

If not changing the default options OR all of your dataset attributes are defined in the HTML, you can initialize your object with no options:

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__popover\"]"), function (element) {
        new UIC.Popover(element);
    });
</script>
```

Alternatively, you can pass in these parameter values as an option during JS initialization for a specific instance (not recommended):

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__popover\"]"), function (element) {,
        new UIC.Popover(element, {
            data_title: 'Sample popover title',
            data_content: 'Sample Popover content'
        });
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. All options for this component can be either omitted in place of a data-set attribute, or omitted completely for use of their default value. The table below shows the currently available parameters with their default values, brief description, and data-set attribute.

Name | Default | Release/ Status | Description | Data-set attribute
--- | --- | --- | --- | ---
title | null | Available | `string` The title text for the popover. Required as an option or data-set attribute | *data-title*
content | null | Available | `string` The plain body text of the popover or string of inner HTML, if using more complicated content. Required as an option or data-set attribute | *data-content*
placement | null | Available | `string` Can be "top" or "bottom" or "left or "right". String value for position of popover. Required as an option or data-set attribute | *data-placement*
delay | 10 | Available | `number` Time in milliseconds to wait before showing popover on click and hiding popover on click out | *data-delay*
container | DOC.body | Available | `element` The container to which append the popover | *data-container*

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicPopoverShowEvent | Available | Event dispatched upon triggering a show | `element`
uicPopoverShown | Available | Event dispatched upon completing a show | `element`
uicPopoverHideEvent | Available | Event dispatched upon triggering a hide | `element`
uicPopoverHidden | Available | Event dispatched upon completing a hide | `element`

## Methods

This section lists the available public methods for the component

- **show()**

    Type: Function

    Shows the popover

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    popover.show();
    ```

- **hide()**

    Type: Function

    Hides the popover

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    popover.hide();
    ```

- **toggle()**

    Type: Function

    Shows the popovers if it is hidden or hides the popover if it is shown

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    popover.toggle();
    ```

- **update()**

    Type: Function

    Updates the placement of the popover

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    popover.update();
    ```

## Examples

### Popover on Bottom

<iframe width="100%" height="360px"
     src="https://codesandbox.io/embed/nameless-frog-vcrl3?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Popover"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
