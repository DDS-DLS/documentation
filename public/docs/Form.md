# Form

## Description/Purpose

The Form component consists of a number of child elements, just as an HTML form is made of the same elements.  However validation and coordinated classes are applied when the component is initialized.

## Initialization

### HTML initialization

Most parameter values can be supplied to a component via a corresponding HTML data attribute that is associated to it. To initialize a form and all of its various inputs, you can set the data attribute *data-toggle*="**dds__form-validation**", which is how the javascript initializes the component.

> In this sample below, there is only one form element, the phone field.

```HTML
  <div class="dds__form-group">
    <label for="phoneInput">Phone</label>
    <input id="phoneInput" type="text" placeholder="(___) ___-____" set-cursor="1" data-toggle="dds__input-mask"
      class="dds__form-control dds__input-masked" data-charset="(XXX) XXX-XXXX" required />
  </div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__form-validation**" found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__form-validation\"]"), function(element) {
      new UIC.Form(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

There are no events for this component.

## Methods

There are no public methods for this component.

## Examples

### Input Fields of a Form

<iframe width="100%"
     src="https://codesandbox.io/embed/uicore-form-g53gd?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Form"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
