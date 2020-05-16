# Slider

## Description/Purpose

The Slider component is used as an input field for users to specify a constrained value or range of values as part of a form.

## Initialization

### HTML initialization

To initialize a slider, create an overall surrounding div with **dds__slider** property set for the *class* and *data-toggle* attributes. The main body of your slider is the div to which you applied the class **dds__slider-wrapper** and a div with the *class* of **dds__slider-target** where your actual slider input will be rendered.

```HTML
<div  class="dds__slider" data-toggle="dds__slider">
    <div  class="dds__slider-container">
        <div  class="dds__slider-wrapper">
            <div  class="dds__slider-target"></div>
        </div>
    </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__slider**" found in the DOM.  A slider component needs more supporting code that can be customized by the developer; as an example a formater can defined used to change the values of the slider such as using country and currency. The minimum and maximum ranges can be supplied to support the number handles the slider will have.  A single example is as follows:

```javascript
<script>
    var  lang  =  "en-US",
    currency  =  "USD";

    function  intFormatter(value)  {
        return  new  Number(value).toLocaleString(lang,  {
            maximumSignificantDigits:  9,
            style:  'currency',
            currency:  currency
        });
    };

    function  unformatString(string)  {  return  string.replace(/\D/g,  "");  };

    var sharedFormat = {
        to: function(value) {
          return intFormatter(value);
        },
        from: function (value) {
          return unformatString(value);
        }
    }

    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__slider\"]"),  function  (element)  {
        var  options  =  {
            start:  [700,  1100],
            step:  1,
            margin:  1,
            range:  {
                "min":  700,
                "max":  1100
            },
            format:  sharedFormat
        };
        new  UIC.Slider(element, options);
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. The options available to this component are shown in the table below with its default values and a brief description.

Name | Default | Release/ Status | Description | Data-set Attribute
--- | --- | --- | --- | ---
format | default formatter | Available | `{ "to": function, "from": function }` An object containing methods for formatting the input and output of the range values. | n/a
margin | none | Available | `number` When using two handles, the minimum distance between the handles can be set using the margin option. The margin value is relative to the value set in 'range'. | n/a
limit | none | Available | `number` The limit option is the oposite of the margin option, limiting the maximum distance between two handles. As with the margin option, the limit option can only be used on linear sliders. | n/a
range | required | Available | `{ "min": number, "max": number }` An object with the minimum and maximum properties, as numbers, of the slider. For two handles the min and max must be defined, for one handle only the max needs to be defined. | n/a
start | min/max values | Available | `[number]`  An array of numbers indicating the starting position of each handle within the slider. The numbers if supplied must match the 'range' supplied. | n/a
step | none | Available | `number` By default, the slider slides fluently. In order to make the handles jump between intervals, you can use the step option. | n/a
padding | 0 | Available | `number` Padding limits how close to the slider edges handles can be. | n/a
orientation | horizontal | Available | `string` The orientation setting can be used to set the slider to "vertical" or "horizontal". Set dimensions! Vertical sliders don't assume a default height, so you'll need to set one. | n/a
direction | ltr | Available | `string` By default the sliders are top-to-bottom and left-to-right, but you can change this using the direction option, which decides where the upper side of the slider is.  Use "ltr" or "rtl". | n/a
animate | true | Available | `boolean` Set the animate option to false to prevent the slider from animating to a new value with when calling .set(). | n/a
animationDuration | 300 | Available | `number` The animationDuration option can be used to set the animation speed assumed by the slider. | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

 Name | Release/ Status | Description | Details |
---|---|---|---
UicSliderSlideEnd | Available | Event dispatched when the user completes a change to any slider value, whether  by mouse or keyboard | `{ "min": integer, "max": integer }` |

## Methods

There are no public methods for this component.

## Examples

### Standard Horizontal Slider

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dslider-horizontal&module=%2Fsrc%2Fcomponents%2Fslider-horizontal.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
