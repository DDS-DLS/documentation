# Bar Select

## Description/Purpose

Bar selects are a interactive element for the users of your site. Defined here as HTML, and javascript, these bar selects are customized for Dell-standard styles and actions.

## Initialization

### HTML initialization

```HTML
<form class="dds__d-flex" data-toggle="dds__bar-select">
    <div class="dds__bar-select" tabindex="-1">
        <input id="bar1" class="dds__sr-only" value="1" type="radio" name="bar-select">
        <label aria-label="Bar Select" for="bar1"></label>
    </div>
    <div class="dds__bar-select" tabindex="-1">
        <input id="bar2" class="dds__sr-only" value="2" type="radio" name="bar-select">
        <label aria-label="Bar Select" for="bar2"></label>
    </div>
    <div class="dds__bar-select" tabindex="-1">
        <input id="bar3" class="dds__sr-only" value="3" type="radio" name="bar-select">
        <label aria-label="Bar Select" for="bar3"></label>
    </div>
    <div class="dds__bar-select" tabindex="-1">
      <input id="bar4" class="dds__sr-only" value="4" type="radio" name="bar-select">
      <label aria-label="Bar Select" for="bar4"></label>
    </div>
    <div class="dds__bar-select" tabindex="-1">
        <input id="bar5" class="dds__sr-only" value="5" type="radio" name="bar-select">
        <label aria-label="Bar Select" for="bar5"></label>
    </div>
</form>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page.

Javascript is necessary to initialize the bar selects and send events for the altering of their states.  You need to set the attribute *data-toggle*="**dds__bar-select**", and in the example below, this will initialize for all such elements found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__bar-select\"]"), function(element) {
      new UIC.BarSelect(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

Components use one or more Events to communicate to external scripts that something has happened. All events will be dispatched from the element used in initialization. Use that element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
BarSelectSelectedValue | Available | Dispatched when the value of a bar select changes. | The `element` which is triggered and the new `value` that the bar select now has.

## Methods

There are no public methods for this component.

## Examples

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dselect-bar&module=%2Fsrc%2Fcomponents%2Fselect-bar.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
