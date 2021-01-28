# Date Picker

## Description/Purpose

A date picker is an interactive form input that allows you to choose the date from a calendar instead of typing it manually. This datepicker is also fully keyboard accessible and dates can be navigated easily using arrow keys.

## Initialization

### HTML initialization

Most parameter values can be supplied to a component via a corresponding HTML data attribute that is associated to it. To initialize the date picker, you can set the data attribute of the div of the relevant form group to use *data-toggle*="**dds__datepicker**", which is how the javascript initializes the component. In the example below, there is a data attribute used to set a parameter value(s) for the component.

The *data-target* attribute is also required to be placed on the form input element to set the relationship between it and the calendar element by ID.

In addition, the date picker component will also use form validation, please see forms for more details on how to set up form validation.

```HTML
<form data-toggle="dds__form-validation" novalidate>
    <div class="dds__datepicker" data-toggle="dds__datepicker" data-target="#myCalendar">
        <label for="datepicker-input">Date Picker Label</label>
        <div class="dds__form-group dds__datepicker-form">
            <input type="text" class="dds__form-control dds__input-masked" pattern="(0[1-9]|1[0-2])\/[0-3]{1}[0-9]{1}\/[0-9]{4}" data-charset="XX/XX/XXXX" maxlength="10" name="date" id="datepicker-input" required aria-invalid="false" aria-describedby="">
            <button class="dds__datepicker-btn" aria-label="select date" type="button">
                <svg class="dds__calendar" aria-hidden="true" focusable="false"><use xlink:href="#dds__calendar"></use></svg>
            </button>
        </div>
        <small class="dds__form-text dds__text-muted">
            Date format mm/dd/yyyy.
        </small>
        <div class="dds__invalid-feedback" id="datepicker-inputFeedback">
            Please enter a valid date.
        </div>
        <div id="myCalendar" class="dds__datepicker-calendar dds__d-none" tabindex="0"></div>
    </div>
</form>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__datepicker**" found in the DOM.

```javascript
<script>
    UIC.loadURLSVGs([
        "//uicore.dellcdn.com/1.1.0/svgs/dds__plus-add.svg",
        "//uicore.dellcdn.com/1.1.0/svgs/dds__minus-minimize.svg",
        "//uicore.dellcdn.com/1.1.0/svgs/dds__calendar.svg",
        "//uicore.dellcdn.com/1.1.0/svgs/dds__chevron-right.svg",
        "//uicore.dellcdn.com/1.1.0/svgs/dds__chevron-left.svg"
    ]); // use ,false for frameworks to load SVGs after view is initialized

    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__datepicker\"]"), function(element) {
    new UIC.DatePicker(element, {selector: "#myCalendar", datesFilter: true, pastDates: false, notAfterDate: new Date("01/02/2021")});
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. Date picker has one option, shown in the table below with its default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
datesFilter | false | Available | `boolean` Used to specify if the user would like to add additional date requirements. Must be set to true of any of the date filter options are being used. | n/a
pastDates | false | Available | `boolean` Setting this option to true will allow dates before the current day to be allowed/active | n/a
defaultDate | "" | Available | `Date` or `string` This option sets a default starting date when the calendar is first loaded. If no date is entered, then there will be no date in the input field and no date will be active/selected when the calendar is first loaded. | n/a
availableWeekDays | [{day: "monday"},{day: "tuesday"},{day: "wednesday"},{day: "thursday"},{day: "friday"},{day: "saturday"},{day: "sunday"}]| Available | `Array[{day:'string'}]` This option defines which weekdays will be active on the calendar. All weekdays by default are active, unless stated otherwise. | n/a
notBeforeDate | null | Available | `Date` or `string` Disables any date that are before the date passed in| n/a
notAfterDate | null | Available | `Date` or `string` Disables any date that are after the date passed in | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicDatePickerSelectedDate | Available| Event dispatched upon selecting a date. | `element`

## Methods

Below is a list of the available public methods for this component.

- **init()**

    Type: Function

    Initializes the date picker calendar.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    DatePicker.init();
    ```

- **destroy()**

    Type: Function

    Destroys the date picker calendar. This clears all the calendar's HTML and events.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    DatePicker.destroy();
    ```

- **reset()**

    Type: Function

    Destroys and reinitializes the date picker.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
     DatePicker.reset();
    ```

## Examples

### Standard DatePicker

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Ddatepicker&module=%2Fsrc%2Fcomponents%2Fdatepicker.txt&theme=dark&view=preview"
     style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
