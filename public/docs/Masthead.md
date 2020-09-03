# Masthead

## Description/Purpose

The masthead is the component at the top of your webpage that helps with navigation and other primary actions. All customization to the masthead can be made in HTML; the JS takes in no options.

## Initialization

### HTML initialization

Most parameters values can be supplied to a component via a corresponding HTML data attribute that is associated to it. For masthead, there are also many subcomponents that use *data-target* attribute to assign a relationship between the triggering element with the ID of the element being manipulated. In the example below, you can see the *data-target* attribute on the sign-in, cart, and off-canvas triggering buttons. Within the off-canvas, the *data-target* attribute is used often for the collapsing tiers, but for simplicity has been omitted from the examples below.

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

<button class="dds__msthd-icon-ctnr" data-target="msthd-signin-ctnr" aria-label="Sign in" aria-haspopup="true" aria-expanded="false">
    <svg focusable="false">
        <use xlink:href="#dds__user"/>
    </svg>
    <span class="dds__badge dds__badge-success" hidden>
        <i class="dds__icons dds__check"></i>
    </span>
    <span class="dds__msthd-label dds__text-truncate">Sign In</span>
</button>

<button class="dds__msthd-icon-ctnr" data-target="msthd-cart-ctnr" aria-label="Cart" aria-haspopup="true" aria-expanded="false">
    <svg focusable="false">
        <use xlink:href="#dds__cart"/>
    </svg>
    <span class="dds__badge dds__badge-dark" hidden>
        <i class="dds__icons dds__badge-dark"></i>
    </span>
    <span class="dds__msthd-label dds__text-truncate">Cart</span>
</button>

<button class="dds__msthd-icon-ctnr" data-toggle="dds__msthd-offcanvas" data-target="msthd-off-canvas-menu" aria-label="Menu" aria-haspopup="true" aria-expanded="false">
    <svg focusable="false">
        <use xlink:href="#dds__menu-closed"/>
    </svg>
    <span class="dds__msthd-label dds__text-truncate">Menu</span>
</button>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the *data-toggle* attribute and **dds__msthd** value are used to find and identify the component for initialization.

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

All components use one or more Events to communicate to external scripts that something has happened. All events will be dispatched from the element used in initialization. Use that element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicMastheadOffCanvasOpen | 1.1.0 | Event dispatched after triggering the opening of the offcanvas menu | `element`
uicMastheadOffCanvasClose | 1.1.0 | Event dispatched after triggering the close of the offcanvas menu | `element`

## Methods

- **login(displayname)**

    Type: Function

    Sign a user into their account and display their name in the masthead.

    Usage:

    ```javascript
    /**
     * @param {string} Name to be displayed in the masthead.
     * @return {void}
     */
    masthead.login(displayname);
    ```

- **logout()**

    Type: Function

    Logout the logged in user

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    masthead.logout();
    ```

- **cartCount()**

    Type: Function

    Adds the specified # of items to the badge on the cart.

    Usage:

    ```javascript
    /**
    * @param {string} Number of items to be displayed in the cart.
    * @return {void}
    */
    masthead.cartCount(count);
    ```

## Examples

### Dell.com Masthead

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dmasthead&module=%2Fsrc%2Fcomponents%2Fmasthead.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Simple/Fluid Masthead

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dmasthead-fluid&module=%2Fsrc%2Fcomponents%2Fmasthead-fluid.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
