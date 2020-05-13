# Modal

## Description/Purpose

Modals are large component, interrupting a user's experience on the normal flow of the page. When opened, a grey backdrop appears on the screen, behind the modal.

Modals can be static, meaning that modal will not close if clicking anywhere other than the close button. Our modals are very similar to Bootstrap's, except for the close ‘x’ button placed in the top right corner of our modals. For further reading, you can check out [Bootstrap's modal implementation](https://getbootstrap.com/docs/4.0/components/modal/).

## Initialization

### HTML initialization

Most parameter values can be supplied to a component via a corresponding HTML data attribute that is associated to it. To initialize a modal, you can set the data attribute *data-toggle*="**dds__modal**", which is how the javascript initializes the component. In the example below, there is a data attribute used to set a parameter value(s) for the component.

> Once per application, place a div to stand as the grey background which this, and other UICore components use: `<div  id="dds__full-screen-overlay"  class="dds__overlay"></div>`

The *data-target* attribute is placed on the triggering element and sets the relationship between it and the modal element by ID.

```HTML
<button role="button" class="dds__btn dds__btn-primary" data-toggle="dds__modal" data-target="#exampleModal">Launch demo modal</button>
```

The *data-dismiss* attribute is placed within the modal element on a close button to dismiss the modal.

```HTML
<div id="exampleModal" tabindex="-1" class="dds__modal dds__fade" role="dialog" aria-labelledby="dds__modal-title1">
    <!-- more -->
    <!-- content -->
    <!-- here -->
    <div class="dds__modal-footer">
        <button class="dds__btn dds__btn-secondary" data-dismiss="dds__modal">Close</button>
    </div>
</div>

```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__modal**" found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__modal\"]"), function(element) {
    new UIC.Modal(element, {
        backdrop: ‘static’
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. Modals has one option, shown in the table below with its default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
backdrop | false | Available | `string` Option is 'static'. Used to specify if clicking on the backdrop will close the modal. Set backdrop: 'static' to disable closing the modal on backdrop click. | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicModalShowEvent | Available| Event dispatched upon calling modal to be shown | `element`
uicModalShown | Available | Event dispatched when modal is finished being shown | `element`
uicModalHideEvent | Available | Event dispatched upon calling modal to be hidden | `element`
uicModalHidden | Available | Event dispatched when modal is finished being hidden | `element`

## Methods

Below is a list of the available public methods for this component.

- **toggle()**

    Type: Function

    Opens the model if it is closed or closes the modal if it is open

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    modal.toggle();
    ```

- **show()**

    Type: Function

    Shows the modal

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    modal.show();
    ```

- **hide()**

    Type: Function

    Hides the modal

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    modal.hide();
    ```

## Examples

### Standard Modal

<iframe width="100%" height="360px"
     src="https://codesandbox.io/embed/uicore-button-multiselect-ocvk0?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Modal"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
