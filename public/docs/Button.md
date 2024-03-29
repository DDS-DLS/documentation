# Button

## Description/Purpose

Buttons are a common interactive element for the users of your site. Defined here as HTML, and javascript when needed, these buttons are customized for Dell-standard styles and actions.

## Initialization

### HTML initialization

Most buttons are simple HTML elements with preferential styling applied - you can use many of the HTML examples with your adjusted content and need no supporting javascript.

```HTML
<button class="dds__btn-toggle-container dds__btn-toggle" type="button" data-toggle="dds__button" role="switch" aria-checked="false" aria-label="button toggle example 1">
    <span class="dds__toggle-txt-off" aria-hidden="false">izklopljeno</span>
    <span class="dds__toggle-txt-on" aria-hidden="true">naprej</span>
    <span class="dds__toggle-circle"></span>
</button>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page.

For some buttons the javascript is necessary to initialize the buttons and send events for the altering of their states.  For these buttons, you need to set the attribute *data-toggle*="**dds__button**", and in the example below, this will initialize for all such elements found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__button\"]"), function(element) {
        new UIC.Button(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

Components use one or more Events to communicate to external scripts that something has happened. All events will be dispatched from the element used in initialization. Use that element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicButtonToggleOff | Available | Dispatched when the state of a button has finished turning to "off". | The `element` which is triggered.
uicButtonToggleOn | Available | Dispatched when the state of a button has finished turning to "on". | The `element` which is triggered.

## Methods

This section lists the available public methods for the component

- **toggleOff()**

    Type: Function

    Turns the toggle button to its off-state

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    tooltip.toggleOff()
    ```
- **toggleOn()**

    Type: Function

    Turns the toggle button to its on-state

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    tooltip.toggleOn()
    ```


## Examples

### Buttons of various states

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dbutton&module=%2Fsrc%2Fcomponents%2Fbutton.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
