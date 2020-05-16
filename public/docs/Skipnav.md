# Skipnav

## Description/Purpose

The Skipnav component is an accessibility-friendly element that visually hides off-screen but is detectable by screen readers and activated by keypress / focus.  Its purpose is to provide shortcuts to important areas of your website so visually-impaired users can access the website more easily.

## Initialization

### HTML initialization

To initialize a skipnav, you need a container with *data-skip*="**skip-nav**" and *class*="**dds__skip-nav**". The *data-skip* will be used by the javascript  to initialize the component.  The contents of this overall div are up to you.

```HTML
<div class="dds__skip-nav" data-skip="skip-nav">
    <div class="dds__container">
        <a href="#banner-carousel-slide"  data-inset="true"  class="dds__btn dds__btn-secondary"  tabindex="0">Skip to main content</a>
        <a href="#productsSection"  class="dds__btn dds__btn-secondary"  tabindex="0">Skip to Products section</a>
        <a href="#support"  class="dds__btn dds__btn-secondary"  tabindex="0">Skip to Support</a>
    </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute  value that  is used to initialize the component on the page. For a skipnav, the *data-skip* attribute and **skip-nav** value are used to find  the component for initialization.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-skip=\"skip-nav\"]"), function(element) {
        new  UIC.SkipNav(element);
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

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dskipnav&module=%2Fsrc%2Fcomponents%2Fskipnav.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
