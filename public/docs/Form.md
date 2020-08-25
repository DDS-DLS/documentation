# Form

## Description/Purpose

The Form component consists of a number of child elements, just as an HTML form is made of the same elements.  However validation and coordinated classes are applied when the component is initialized.

## Initialization

### HTML initialization

Most parameter values can be supplied to a component via a corresponding HTML data attribute that is associated to it. To initialize a form and all of its various inputs, you can set the data attribute *data-toggle*="**dds__form-validation**", which is how the javascript initializes the component. The `novalidate` attribute needs to be present in order to overwrite browser default form validation. 

> In this sample below, there is only one form element, the phone field. 

```HTML
<form data-toggle="dds__form-validation" data-validate="true" novalidate>
    <div class="dds__form-row">
        <label for="input-error-phoneInput-validation">Phone</label>
        <input id="input-error-phoneInput-validation" type="text" placeholder="(___) ___-____" set-cursor="1" pattern="\([1-9]{1}[0-9]{2}\) [0-9]{3}-[0-9]{4}" class="dds__form-control dds__input-masked" 
            data-charset="(XXX) XXX-XXXX" required/>
        <div class="dds__invalid-feedback" id="input-error-phoneInput-validationFeedback">
            Please provide a valid phone.
        </div>
    </div>
    <button class="dds__btn dds__btn-primary" type="submit">Submit form</button>
</form>

```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__form-validation**" found in the DOM.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__form-validation\"]"), function(element) {
      new UIC.Form(element, {validate: "true"});
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. Forms has one option, shown in the table below with its default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
validate | true | Available | `boolean` Used to specify if the form should be validated (`true`) or not (`false`) | data-validate

If a form element is to be validated, the javascript will look for the element with an `id` in the format: `id` of form element + the `string` "Feedback". 
Ex: In the HTML snippit above, the id for the input's id is "input-error-phoneInput-validation" and the validation's id is "input-error-phoneInput-validationFeedback".

The attribute `novalidate` is required in order to overwrite default browser form validation, but don't worry - if you forget, we will put it on the form for you.

## Events

There are no events for this component.

## Methods

There are no public methods for this component.

## Examples

### Input Fields of a Form

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dform&module=%2Fsrc%2Fcomponents%2Fform.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
