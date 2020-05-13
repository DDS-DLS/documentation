# ButtonFilter

## Description/Purpose

A ButtonFilter component is a grouping of radio inputs that appear as buttons. These are more user-friendly both in appearance and in use than regular radio elements, but they do not replace the need for them entirely. It is a matter of style to choose to use a ButtonFilter for the sake of your end user.

## Initialization

### HTML initialization

A container with the attribute *data-toggle*="**dds__button-filter**" is needed as a parent of some number of child containers which have *class*="**dds__filter-item**". These filter item elements then have child radio elements with the *class*="**dds__btn-input**". See the example:

```HTML
<div class="dds__row dds__no-gutters dds__btn-filter-container" data-toggle="dds__button-filter">
    <div class="dds__filter-item dds__active" tabindex="-1">
        <input type="radio" id="RadioButtonFilter1" name="ExampleRadioButtonFilter" value="RadioButtonFilter1" class="dds__btn-input dds__sr-only" checked>
        <label for="RadioButtonFilter1" class="dds__btn-filter dds__active" data-filter-value="Option 1">Option 1</label>
    </div>
    <div class="dds__filter-item" tabindex="-1">
        <input type="radio" id="RadioButtonFilter2" name="ExampleRadioButtonFilter" value="RadioButtonFilter2" class="dds__btn-input dds__sr-only">
        <label for="RadioButtonFilter2" class="dds__btn-filter" data-filter-value="Option 2">Option 2</label>
    </div>
    <div class="dds__filter-item" tabindex="-1">
        <input type="radio" id="RadioButtonFilter3" name="ExampleRadioButtonFilter" value="RadioButtonFilter3" class="dds__btn-input dds__sr-only">
        <label for="RadioButtonFilter3" class="dds__btn-filter" data-filter-value="Option 3">Option 3</label>
    </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page.  A ButtonFilter is indentified by the javascript by processing elements with the *data-toggle* of **dds__button-filter**.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__button-filter\"]"), function(element) {
        new UIC.ButtonFilter(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

Components use one or more Events to communicate to external scripts that something has happened. All events will be dispatched from the element used in initialization. Use that element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicButtonFilterClick | Available | Dispatched when the element has finished being clicked. | `{"target": the actively-clicked element}`

## Methods

There are no public methods for this component.

## Examples

### Standard Button Filter

<iframe
     src="https://codesandbox.io/embed/uicore-button-0rtmc?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore ButtonFilter"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
