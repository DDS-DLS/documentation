# Dropdown

## Description/Purpose

Dropdowns and split buttons are both used to let users choose from a collection of actions. The dropdown’s primary action is opening up the  menu, which is a list comprised of links and/or buttons. Split button has two actions, one is clicking on the  arrow button which will open  the  menu  exactly like a dropdown. The second action is  an independent button with its own `<a title="Call to Action">CTA</a>` aside  the  arrow button.

## Initialization

### HTML initialization

To initialize a dropdown, you need two dataset attributes *data-toggle* and *data-target*. The data-toggle used by the javascript  to initialize the component. The  *data-target* attribute’s value points to the id of the unordered list to appear as the “dropdown”.

```HTML
<div class="dds__mb-0 dds__btn-dropdown" tabindex="-1">
    <button class="dds__btn dds__btn-primary dds__text-truncate" data-toggle="dds__dropdown" data-target="#buttonDropdownPrimary" tabindex="0" aria-expanded="false" aria-controls="buttonDropdownPrimary"> Primary Dropdown Button
        <svg class="dds__arrow-tri-solid-right" viewBox="0 0 32 32" focusable="false" aria-hidden="true">
            <title>dds__arrow-tri-solid-right</title>
            <path d="M21.997 16.002l-11.994-12.356v24.708z"></path>
        </svg>
    </button>
    <ul id="buttonDropdownPrimary" class="dds__button-dropdown-container dds__collapse" role="menu">
        <li class="dds__dropdown-list-item" role="none" tabindex="0">
            <a class="dds__dropdown-item dds__text-truncate" role="menuitem" href="#" tabindex="-1" >Secondary Link</a>
        </li>
        <li class="dds__dropdown-list-item" role="none" tabindex="0">
            <button class="dds__dropdown-item dds__text-truncate" role="menuitem" onclick="javascript: void(0);" tabindex="-1" >Tertiary Button</button>
        </li>
    </ul>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute  value that  is used to initialize the component on the page. For dropdowns, the *data-toggle* attribute and **dds__dropdown** value are used to find  the component for initialization.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__dropdown\"]"), function(element) {
        new UIC.Dropdown(element);
    });
</script>
```

## Options

 There are no options for this component.

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicDropDownShowEvent | Available | Event dispatched when the User clicks/activates the dropdown arrow function | `element`
uicDropDownShown | Available | Event dispatched upon completion of the dropdown being displayed | `element`
uicDropDownHideEvent | Available | Event dispatched when the User clicks/activates an open dropdown using the arrow function | `element`
uicDropDownHidden | Available | Event dispatched upon the completion of the dropdown list closing | `element`
uicMultiSelectAddEvent | Available | Dispatched when a checkbox within a multiselect is marked checked | `{"filters": The entire array of selections, "addedFilter": The newly-added selection}`
uicMultiSelectRemoveEvent | Available | Dispatched upon removal of a checkbox from a multiselect's array | `{"filters": The entire array of selections, "removedFilter": The just-removed selection}`

## Methods

Available public methods of the component.

- **toggle()**
    Type: Function

    Toggles the dropdown to either show or hide, whichever state it is not currently in.

    Usage:

    ```javascript
    <script>
        var dropDown;
        [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__dropdown\"]"), function(element) {
           dropDown = new UIC.Dropdown(element);
        });
        dropDown.toggle();
    </script>
    ```

## Examples

### Primary Purchase Split Button

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Ddropdown-primary&module=%2Fsrc%2Fcomponents%2Fdropdown-primary.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Multiselect Dropdown Button

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Ddropdown-multiselect&module=%2Fsrc%2Fcomponents%2Fdropdown-multiselect.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
