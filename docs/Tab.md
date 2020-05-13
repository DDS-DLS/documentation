
# Tab

## Description/Purpose

The Tab component is used as a content separation device, or an alternative style of navigation within a page.  Our implementation of tabs is similar to that of [Bootstrap's](https://getbootstrap.com/docs/4.0/components/navs/#tabs).

## Initialization

### HTML initialization

To initialize tab collection, add a div with the **dds\_\_tabs-container** class, and within that, add an unordered list with the **dds__tabs** class.  Each line item of the list will contain a button with a class of **dds__tab-link** and *data-target* of the ID where your various content blocks will be displayed, and then the unordered list itself will be rendered as the interactive tabs.  The overall dds__tabs-container div must *also* contain another div with the class **dds__tab-content**.  This content div then has the same number of child divs as there are tab buttons, each of which have the classes **dds__tab-pane** and **dds__fade**.

```HTML
<div class="dds__tabs-container">
    <ul class="dds__tabs dds__mb-4" role="tablist" aria-label="Example description of tabs">
        <li role="none"> <button id="home-tab" class="dds__tab-link dds__active" data-toggle="dds__tab" data-target="#exampleResponsiveTab" role="tab" aria-controls="home" aria-selected="true"> Home <i class="dds__icons dds__chevron-right dds__tab-icon" aria-hidden="true"></i> </button> </li>
        <li role="none"> <button id="profile-tab" class="dds__tab-link" tabindex="-1" data-toggle="dds__tab" data-target="#exampleResponsiveTab" role="tab" aria-controls="profile" aria-selected="false"> Profile <i class="dds__icons dds__chevron-right dds__tab-icon" aria-hidden="true"></i> </button> </li>
        <li role="none"> <button id="contact-tab" class="dds__tab-link" tabindex="-1" data-toggle="dds__tab" data-target="#exampleResponsiveTab" role="tab" aria-controls="contact" aria-selected="false"> Contact <i class="dds__icons dds__chevron-right dds__tab-icon" aria-hidden="true"></i> </button> </li>
    </ul>
    <div class="dds__tab-content">
        <div id="home" class="dds__tab-pane dds__fade dds__active dds__show" role="tabpanel" tabindex="0" aria-labelledby="home-tab"> <p>Home content</p> </div>
        <div id="profile" class="dds__tab-pane dds__fade" role="tabpanel" tabindex="0" aria-labelledby="profile-tab"> <p>Profile content</p> </div>
        <div id="contact" class="dds__tab-pane dds__fade" role="tabpanel" tabindex="0" aria-labelledby="contact-tab"> <p>Contact content</p> </div>
    </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__tab**" found in the DOM:

```javascript
<script>
    [].forEach.call(document.querySelectorAll('[data-toggle="dds__tab"]'), function(element) {
        new UIC.Tab(element);
    });
</script>
```

## Options

The options which are used to change the way this component looks and/or behaves are shown in the table below with its default values and a brief description.

Name | Default | Release/ Status | Description | Data-set Attribute
--- | --- | --- | --- | ---
lazyload | false | 0.2.11 | `boolean` Used to instruct the tab component to initialize as needed instead of immediately. | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Details | Description
--- | --- | --- | ---
uicTabLazyLoadEvent | 0.2.11 | Dispatched upon success or failure of a lazyload request | `{"success": true}` or `{"success": false, "msg": "Tab cannot be lazy loaded. Check usage or avoid mulitple lazy loads."}`

## Methods

There are no methods for this component.

## Examples

### Tabs with Overflow Containers

When too many tabs are shown in one row, the overflow class can be applied to the tab-container, which will make left- and right- scroll buttons appear on demand.  To do this, apply the **dds__container-overflow** class to the div that already has the class **dds__tabs-container**.

<iframe
     src="https://codesandbox.io/embed/stupefied-lake-lgftb?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Tab Overflow"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

### Justified Tabs

To make all tabs expand horizontally to fill up the parent container's width, change the class of the line items to **dds__flex-tab**.

<iframe
     src="https://codesandbox.io/embed/uicore-tab-overflow-ob3kv?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Tab Overflow"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
</iframe>

### Centered Tabs

Tabs can be instructed to appear always-centered in the middle of a page.  To do so, your main container with a class of **dds__tabs-container** should have a first-descendant child container with a class of **dds__tabs-centered-container**.  The unordered list which previously only had the class **dds__tabs** now needs both classes: **dds__flex-nowrap** and **dds__tab-centered**.

<iframe
     src="https://codesandbox.io/embed/uicore-tab-justified-b618m?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Tab Centered"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
