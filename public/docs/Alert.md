# Alert

## Description/Purpose

There are a few types of alerts in our library: Catastrophic Alert, User Error, User Error without a Title, Informational Alert, and Success Alert. Of these, only the Informational and Success alert can be dismissed by clicking the “x” button in their top right corner. These dismissible alerts are the only ones that need JS, and therefore only ones covered by this documentation.

## Initialization

### HTML initialization

The data-dismiss attribute should be placed on the dismissible alert in order to in instantiate the JS.  Note also that a “dds__close-x” button and a “dds__dismiss” button is required for this type of alert.

```HTML
<div class="dds__alert dds__alert-dismissible" data-dismiss="dds__alert" aria-expanded="true" role="alert">
    <div class="dds__less">
        <div class="dds__d-flex dds__justify-content-between">
               <div class="dds__alert-heading dds__d-flex dds__align-items-center">
                   <i class="dds__icons dds__alert-info-cir dds__icon-h4" aria-hidden="true"></i>
                   <h4 class="alert-title">Informational alert sample title (optional)</h4>
            </div>
            <button type="button" class="dds__icons dds__close-x" aria-label="Close - Informational alert sample title (optional)"></button>
        </div>
        <p class="dds__alert-body">Lorem ipsum dolor amet kogi vaporware shoreditch chicharrones cold-pressed. Art party chambray activated charcoal 8-bit palo santo, edison bulb paleo vinyl cronut street art. Seitan poutine vice freegan cloud bread, vape whatever keffiyeh ugh asymmetrical semiotics. </p>

        <ul>
            <li>(optional) Lorum Ipsum with <a href="">anchor link.</a></li>
            <li>(optional) Lorum Ipsum with <a href="">anchor link.</a></li>
        </ul>
    </div>

    <div class="dds__more">
        <button type="button" class="dds__dismiss">View Dismissed Alert</button>
    </div>
</div>
```

### Javascript initialization

For alerts, we use the ‘data-dismiss’ attribute and ‘dds__alert’ value to find and identify the component for initialization.

```javascript
<script>
  [].forEach.call(document.querySelectorAll("[data-dismiss=\"dds__alert\"]"), function(element) {
    new UIC.Alert(element);
  });
</script>
```

## Options

 There are no options for this component.

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicAlertDismissEvent | Available | Event dispatched upon dismissing an alert. | `element`
uicAlertOpenEvent | Available | Event dispatched upon re-opening a dismissed alert. | `element`

## Methods

Below is a list of the available public methods for this component.

- **toggle()**
  Type: Function

  Dismisses the alert if it is open and opens the alert if it is closed.

  Usage:

  ```javascript
  /**
    * @param {string} message The message to show
    * @return {void}
    */
  alert.toggle();
  ```

## Examples

### Informational Alert that can be dismissed

<iframe width="100%" height="240px"
     src="https://codesandbox.io/embed/uicore-slider-horizontal-kwfvh?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Alert"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
