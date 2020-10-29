# Progress Bar

## Description/Purpose

We have two types of progress bars currently: standard and animated. Their functionality is identical, but the animated progress bar has stripes that are animated by css.  Progress bars can have text inside them to denote the % completed. The time it takes for a progress bar to go from 0% to 100% can also be modified. Our progress bar implementation is [similar to Bootstraps](https://getbootstrap.com/docs/4.4/components/progress/).

## Initialization

### HTML initialization

To initialize a progress bar, you can set the data attribute *data-toggle*="**dds__progress**", which is how the javascript initializes the component. Components can have optional parameters; for information on the available parameters see the “Options” section. All parameter values can be supplied to a component via a corresponding HTML data attribute that is associated to it. In the example below, both the *data-showtext* and *data-timetocomplete* attributes are used to set the corresponding container and placement values for the component.

```HTML
<div class="dds__progress-bar">
    <div class="dds__progress-bar-standard dds__progress-bar-striped dds__progress-bar-animated" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-toggle="dds__progress" data-showtext=”true” data-timetocomplete=”1000”></div>
</div>
```

Alternatively, you can initialize it simply with the *data-toggle* attribute, and pass in the remaining data as an option during JS initialization.

```HTML
<div class="dds__progress-bar">
    <div class="dds__progress-bar-standard dds__progress-bar-striped dds__progress-bar-animated" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-toggle="dds__progress"></div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__progress**" found in the DOM.

If not changing the default options OR all of your dataset attributes are defined in the HTML, you can initialize your object with no options:

```javascript
<script>
    UIC.loadURLSVGs(["svgs/dds__check.svg", "svgs/dds__arrow-tri-solid-right.svg"]);
    [].forEach.call(document.querySelectorAll('[data-toggle="dds__progress"]'), function(element) {
        new UIC.Progress(element);
    });
</script>
```

Alternatively, you can pass in these parameter values as an option during JS initialization for a specific instance:

```javascript
<script>
    UIC.loadURLSVGs(["svgs/dds__check.svg", "svgs/dds__arrow-tri-solid-right.svg"]);
    [].forEach.call(document.querySelectorAll('[data-toggle="dds__progress"]'), function(element) {
        new UIC.Progress(element, {
            showText: true,
            timetoComplete: 5000
        });
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. All options for this component can be either omitted in place of a data-set attribute, or omitted completely for use of their default value. The table below shows the currently available parameters with their default values, brief description, and data-set attribute.

Name | Default | Release/ Status | Description | Data-set attribute
--- | --- | --- | --- | ---
showText | false | Available | `boolean` shows the percentage completed within the progress bar | *data-showtext*
timetoComplete | 10000 | Available | `number` The time, in milliseconds, it takes for the progress bar to go from 0 to 100% | *data-timetocomplete*

## Events

There are no events for this component.

## Methods

There are no methods for this component.

## Examples

### Dropdown Progress Status

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dprogress-dropdown&module=%2Fsrc%2Fcomponents%2Fprogress-dropdown.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Standard Progress Status

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dprogress-status&module=%2Fsrc%2Fcomponents%2Fprogress-status.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Disabled Progress Status

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dprogress-status-disabled&module=%2Fsrc%2Fcomponents%2Fprogress-disabled.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Standard Progress Bar

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dprogress-bar&module=%2Fsrc%2Fcomponents%2Fprogress-bar.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Animated Progress Bar

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dprogress-bar-animated&module=%2Fsrc%2Fcomponents%2Fprogress-bar-animated.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Thin Progress Bar

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dprogress-bar-thin&module=%2Fsrc%2Fcomponents%2Fprogress-bar-thin.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
