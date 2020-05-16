# Tooltip

## Description/Purpose

The tooltip  component is a very simple way of adding a visual and accessible-enabled notification upon the focus of an element, whether by mouseover or screen reader.  Tooltips can be positioned to the right, left, top, or bottom of their triggering element. They can fade in and out or pop up abruptly. They can be placed on a short delay so that they appear shortly after the user triggers it.

## Initialization

### HTML initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the [Getting Started](https://www.delldesignsystem.com/getting-started) page.

To initialize a tooltip, you can use multiple combinations of dataset attributes. The first one is *data-toggle*=”**dds__tooltip**”, which is how the javascript initializes the component. Two attributes are required either as dataset attributes or options during JS initialization: *data-toggle* and *data-placement*. Optional attributes include *data-delay*, *data-animation*, and *data-container* (see more details about these in the Options section below). Using HTML data attributes is suggested, especially when initializing more than one tooltip element on your DOM. In the example below, you can see the two ways of setting up your HTML.

1. Both the data-placement and data-title attributes are used to set to corresponding placement and title values for the component:

    ```HTML
    <button class="dds__icons dds__alert-info-cir dds__tooltip-icon" data-toggle="dds__tooltip" data-placement="top" aria-label="information" data-title="Tooltip on top. Used to display very short, helpful information."></button>
    ```

2. Alternatively, you can initialize it simply with the *data-toggle* attribute, and pass in the remaining data as an option during JS initialization (not recommended):

    ```HTML
    <button class="dds__icons dds__alert-info-cir dds__tooltip-icon" data-toggle="dds__tooltip" aria-label="information"button>
    ```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__tooltip**" found in the DOM.

1. If all of your dataset attributes are defined in the HTML, you can initialize your component with no options:

    ```javascript
    <script>
        [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__tooltip\"]"), function(element) {
            new UIC.Tooltip(element);
        });
    </script>
    ```

2. Alternatively, you can pass in these parameter values as an option during JS initialization for a specific instance (not recommended):

    ```javascript
    <script>
        [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__tooltip\"]"), function(element) {
            new UIC.Tooltip(element, {
                title: "Tooltip on top. Used to display very short, helpful information.",
                placement: "top" }
            );
        });
    </script>
    ```

## Options

All options for this component can be omitted in place of a data-set attribute. Below, either a *data-title* attribute needs to be present in the HTML, or a *title* option needs to be passed in during initialization. This type of option is denoted with **, meaning it is required in one of the two formats. If a required attribute is not passed in, an error will be thrown which will result in a component initialization failure. The table below shows the currently available parameters with their default values and a brief description.

Name | Default| Release/ Status | Description | Data-set Attribute
--- | --- | --- | --- | ---
title** | n/a | Available | `string` The text to show for the tooltip. | `data-title`
animation | false | Available | `boolean` or the string "dds__fade". Indicates whether or not to animate the tooltip, or to fade in. | n/a
placement** | n/a | Available | `string` denotes the position of tooltip, set to `top | right | left | bottom`. | `data-placement`
delay | 60 | Available | `number` Time to wait before showing tooltip on mousein, and hiding tooltip on mouseout, in milliseconds. | `data-delay`
container | DOC.body | Available | `element` The container to which append the tooltip | `data-container`

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicTooltipShowEvent |Available| Event dispatched upon triggering a show | n/a
uicTooltipShown |Available| Event dispatched upon completing a show | n/a
uicTooltipHideEvent |Available| Event dispatched upon triggering a hide | n/a
uicTooltipHidden |Available| Event dispatched upon completing a hide | n/a

## Methods

This section lists the available public methods for the component

- **show()**

    Type: Function

    Shows the tooltip.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    tooltip.show()
    ```

- **hide()**

    Type: Function

    Hides the tooltip.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    tooltip.hide()
    ```

- **toggle()**

    Type: Function

    Either hides or shows the tooltip, whichever state it is not currently.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    tooltip.toggle()
    ```

## Examples

### Tooltips Shown in Multiple Directions

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dtooltip&module=%2Fsrc%2Fcomponents%2Ftooltip.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
