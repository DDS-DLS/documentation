# Spinbox

## Description/Purpose

A spin box is a type of select that allows users to increment or decrement number values within a specified and customizable range. The default value upon page load is also customizable, as well as the increment in which users can increase/decrease values. There is a horizontal and vertical option for spin box.

## Initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the [Getting Started](https://www.delldesignsystem.com/getting-started) page.

### HTML initialization

All parameter values can be supplied to the component via a corresponding HTML data attribute that is associated to it. In the example below, the *data-spinmin*, *data-spinmax* ,*data-spinstep*, and *data-spindefault* attributes are used to set the corresponding conditions for the spinbox. These dataset attributes can be substituted by passing in an options object, however it is not recommended.

```HTML
<div class="dds__spinbox-vertical" data-toggle="dds__spinbox" data-spinmin="0" data-spinmax="50" data-spinstep="1" data-spindefault="5">
  <!-- more -->
  <!-- content -->
  <!-- here -->
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the *data-toggle* attribute and **dds__spinbox** value are used to find and identify the component for initialization.
> svgs are required for this component, which are loaded uses UIC.loadURLSVGs function. This example is pointing to a specific CDN-hosted version.

```javascript
<script>
    UIC.loadURLSVGs(["//uicore.dellcdn.com/0.2.10/svgs/dds__plus-add.svg","//uicore.dellcdn.com/0.2.10/svgs/dds__minus-minimize.svg"],  false);

    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__spinbox\"]"),  function  (element)  {
        new  UIC.Spinbox(element,  {spinmin:  0, spinmax:  100, spinstep:  2, spindefault:  0});
    });
</script>
```

## Options

All options for the spinbox can be replaced by a corresponding dataset attribute, which is the recommended way. All options and dataset attributes are checked to make sure their value passes validation. If not, a Javascript error will be thrown which will result in a component initialization failure. If you would like to pass in an options object, below is a table of the currently available parameters with their default values and a brief description.
Name | Default | Release/ Status | Description | Data-set Attribute
--- | --- | --- | --- | ---
spinmin | 0 | Available | Use this parameter to set the minimum value of the spin box | `data-spinmin`
spinmax | 100 | Available | Use this parameter to set the maximum value of the spin box | `data-spinmax`
spindefault | 0 | Available | Use this parameter to set the default value of the spin box that will appear on page load | `data-spindefault`
spinstep | 1 | Available | Use this parameter to set the increment for increasing or decreasing | `data-spinstep`

## Events

There are no events for this component.

## Methods

There are no public methods for this component.

## Examples

### Horizontal and Vertical Spinboxes

<iframe width="100%" height="240px"
     src="https://codesandbox.io/embed/uicore-spinbox-v0i6y?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Spinbox"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
