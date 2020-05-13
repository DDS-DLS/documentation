
# Linkpicker

## Description/Purpose

The Linkpicker component is a set of correlated input selection fields.  You can define the input options for your selections and restrict the options of subsequent selections based on previously-selected choices by the user.

## Initialization

### HTML initialization

A Linkpicker component is initialized by placing the property *data-toggle* on a div and assigning the **dds__linkpicker** value.   Child divs of this need either *class*="**dds__form-select**" or *class*="**dds__display-text-ctnr**", designating them either as containing a selection or the submit button for this component, as in the example, below.  Your select fields require a *data-select*="**JSON**" in order to populate the choices.  Components can have optional parameters; for information on the available parameters see the “Options” section.

```HTML
<div  class="dds__picker-btn-ctnr"  data-toggle="dds__linkpicker">
    <div  class="dds__form-select">
        <select  name="LinkPicker_Interest"  aria-label="I'm interested in"  class="dds__form-control"  id="exampleFormControlSelect1"  data-select='{"text":["I\u0027m interested in","Laptops","Dell Support","Printers, Ink, \u0026 Toner","Electronics and Accessories","Replacement Parts \u0026 Upgrades","Servers, Storage \u0026 Networking","Workstations","Desktop","Gaming"],"value":["interest","laptops","support","printers","electronics","parts","servers","workstations","desktops","gaming"]}'>
        </select>
    </div>
    <div  class="dds__form-select">
        <select  name="LinkPicker_ToUse"  aria-label="To use"  class="dds__form-control"  id="exampleFormControlSelect2"  data-select='{ "ToUse": { "interest": {"text": ["To use"],"value": [""]}, "laptops": {"text": ["To use","for Home","for Work","for School"],"value": ["","//www.dell.com/en-us/shop/scc/sc/laptops","//www.dell.com/en-us/work/shop/scc/sc/laptops","//www.dell.com/en-us/member/shop/scc/sc/laptops"]}, "support": {"text": ["To use","for Dell Products"],"value": ["","//www.dell.com/support/home/us/en/04?c=us\u0026l=en\u0026~ck=mn"]}, "printers": {"text": ["To use","for Home","for Work","for School"], "value": ["","//www.dell.com/en-us/shop/printers-and-ink/ac/4014","//www.dell.com/en-us/work/shop/printers-ink-toner/ac/4014","//www.dell.com/en-us/member/shop/printers-and-ink/ac/4014"]}, "electronics": {"text": ["To use","for Home","for Work","for School"], "value": ["","//www.dell.com/en-us/shop/accessories","//www.dell.com/en-us/work/shop/accessories","//www.dell.com/en-us/member/shop/accessories"]}, "parts": {"text": ["To use","for Home","for Work"], "value": ["","//www.dell.com/en-us/shop/partsforyourdell/index","//www.dell.com/en-us/work/shop/partsforyourdell/index"]}, "servers": {"text": ["To use","for Work"], "value": ["","//www.dell.com/en-us/work/shop/ecat/enterprise-products"]}, "workstations": {"text": ["To use","for Work"], "value": ["","//www.dell.com/en-us/work/shop/category/workstations"]}, "desktops": {"text": ["To use","for Home","for Work","for School"], "value": ["","//www.dell.com/en-us/shop/scc/sc/desktops","//www.dell.com/en-us/work/shop/category/desktops-n-workstations","//www.dell.com/en-us/member/shop/scc/sc/desktops"]}, "gaming": {"text": ["To use","for Home"], "value": ["","//www.dell.com/en-us/gaming/alienware"]}}}'  disabled>
        </select>
    </div>
    <div  class="dds__display-text-ctnr">
        <button  name="LinkPicker_Find"  href=""  class="dds__btn dds__btn-primary dds__disabled"  disabled>Find</button>
    </div>
</div>
```

### Javascript initialization

The javascript of this component is initialized by call the UICore LinkPicker method on each DOM element that has *data-toggle*="**dds__linkpicker**"

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__linkpicker\"]"),  function(element)  {
        new  UIC.LinkPicker(element);
    });
</script>
```

## Options

 There are no options for this component.

## Events

There are no events for this component.

## Methods

Below is a list of the available public methods for this component.

## Examples

### Standard Linkpicker

<iframe width="100%" height="480px"
     src="https://codesandbox.io/embed/uicore-spinbox-xiehx?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Linkpicker"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
