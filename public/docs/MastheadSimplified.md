# Masthead - Simplified

## Description/Purpose

The masthead is the component at the top of your webpage that helps with navigation and other primary actions. All customization to the masthead can be made in HTML; the JS takes in no options.

> Use simplified Masthead when you don't need some features from the original Masthead model.

## Initialization

### HTML initialization

Basic HTML initialization

```HTML
<div class="dds__msthd dds__msthd-offcanvas-wrapper" data-toggle="dds__msthd">
    <nav class="dds__navbar dds__msthd-navbar-top dds__navbar-expand-md">
        <div class="dds__msthd-top dds__container dds__no-gutters">
            <!-- more -->
            <!-- content -->
            <!-- here -->
        </div>
    </nav>
</div>

```

As content of the block above add the following:

```HTML
        <div class="dds__row dds__no-gutter">
	        <!-- the branding logo -->
		    <div class="dds__msthd-top-ctnr">
		        <div class="dds__msthd-icon-ctnr dds__msthd-logo">
		            <a class="dds__icons dds__msthd-dell-icon" href="//www.dell.com" tabindex="0" aria-label="Dell"></a>
		        </div>
		    </div>
		    <!-- the branding name -->
		    <div class="dds__msthd-brand-ctnr dds__d-none dds__d-lg-block">
		        <span>Design System</span>
		    </div>
	    </div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the _data-toggle_ attribute and **dds\_\_msthd** value are used to find and identify the component for initialization.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__msthd\"]"), function(element) {
        window.Masthead = new UIC.Masthead(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

There are no events for this component.

## Example

<iframe
     src="https://codesandbox.io/s/admiring-snowflake-lc1pi?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dmasthead-simplified&module=%2Fsrc%2Fcomponents%2Fmasthead-simplified.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


