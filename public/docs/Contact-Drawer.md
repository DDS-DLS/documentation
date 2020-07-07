# Contact Drawer

## Description/Purpose

The contact drawer is an aside that can be manually and programmatically opened and closed. The speed and frequency the drawer opens and stays open manipulating with options. See the options section for more details.

## Initialization

### HTML initialization

To initialize a contact drawer, you can set the data attribute *data-toggle*="**dds__contact-drawer**", which is how the javascript initializes the component.

```HTML
<aside class="dds__drawer" data-toggle="dds__contact-drawer" aria-label="Contact Us">
  <a href="#" class="dds__drawer-tab">
    <div class="dds__drawer-tab-text">Contact Us</div>
  </a>
  <!-- more -->
  <!-- content -->
  <!-- here -->
</aside>
```

### Javascript initialization

In example below, the component will initialize for all elements with *data-toggle*="**dds__contact-drawer**" found in the DOM.

```javascript
<script>
  [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__contact-drawer\"]"), function(element) {
    new UIC.ContactDrawer(element);
  });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. Contact drawer’s options all have default values, so no options are required to be passed during initialization. The table below shows the currently available parameters with their default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
openTime | 5000 | Available | `number` In milliseconds, amount of time the contact drawer stays open. | n/a
closedTime | 7000 | Available | `number` In milliseconds, amount of time the contact drawer stays closed. | n/a
transitionTime | 500 | Available | `number` In milliseconds, amount of time it takes for the contact drawer to transition from open to closed or vice versa. | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component. Component name here is "ContactDrawer".

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicContactDrawerOpenEvent | Available| Event dispatched upon opening the drawer | `element`
uicContactDrawerCloseEvent | Available | Event dispatched upon closing the drawer | `element`

## Methods

Below is a list of the available public methods for this component.

- **timerAction()**

    Type: Function

    Runs the opening and closing of the contact drawer based on openTime and closedTime options until told to stop.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    ContactDrawer.timerAction();
    ```

## Examples

### Standard Contact Drawer

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dcontact-drawer&module=%2Fsrc%2Fcomponents%2Fcontact-drawer.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
