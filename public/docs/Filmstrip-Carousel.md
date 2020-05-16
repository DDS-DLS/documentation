# Filmstrip Carousel

## Description/Purpose

The Filmstrip Carousels are used to display a collection of content with varying dimensions, such as multiple product stacks or cards. Several items are shown at once on  larger breakpoints.

UX best practices still recommend a  **maximum of 8 items**  in the collection because users generally don't consider options sets larger than this.  If there *are* more than 8 items  in the carousel, display text above the carousel (right-aligned) that indicates the visible set in relation to the total number in the collection (e.g. "Viewing 5-8 of 12").

## Initialization

### HTML initialization

The HTML structure of a Filmstrip Carousel requires a div with the *classes* **dds__filmstrip-carousel** and **dds__container-overflow** applied, as well as the *data-toggle* of **dds__filmstrip-carousel**.  Within the overlying container, you will need an unordered list with the *class* **dds__filmstrip-slides**, plus whatever other spacing classes you desire.  The items of the list will need only whatever spacing classes you also wish to apply.

```HTML
<div class="dds__filmstrip-carousel dds__container-overflow"  data-toggle="dds__filmstrip-carousel">
    <ul class="dds__filmstrip-slides dds__mb-5 dds__col-12">
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3 dds__col-xl-3 dds__col-xxl-2">  <div>  <div  class="dds__d-flex dds__justify-content-center dds__mb-2">  <a  type="img"  target="_self"  href="#yourHref"  data-pid="yourPid"  title="yourTitle">  <img  src="https://placehold.it/165x119?text=Image"  alt="YourAlt"  data-pid="yourPid" />  </a>  </div>  <h5>  <a  target="_self"  href="#yourHref"  data-pid="yourPid"  type="ttl">Your Link Text</a>  </h5>  <p>Your card's content would go here in HTML format.</p>  </div>  </li>
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3 dds__col-xl-3 dds__col-xxl-2">  <div>  <div  class="dds__d-flex dds__justify-content-center dds__mb-2">  <a  type="img"  target="_self"  href="#yourHref"  data-pid="yourPid"  title="yourTitle">  <img  src="https://placehold.it/165x119?text=Image"  alt="YourAlt"  data-pid="yourPid" />  </a>  </div>  <h5>  <a  target="_self"  href="#yourHref"  data-pid="yourPid"  type="ttl">Your Link Text</a>  </h5>  <p>Your card's content would go here in HTML format.</p>  </div>  </li>
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3 dds__col-xl-3 dds__col-xxl-2">  <div>  <div  class="dds__d-flex dds__justify-content-center dds__mb-2">  <a  type="img"  target="_self"  href="#yourHref"  data-pid="yourPid"  title="yourTitle">  <img  src="https://placehold.it/165x119?text=Image"  alt="YourAlt"  data-pid="yourPid" />  </a>  </div>  <h5>  <a  target="_self"  href="#yourHref"  data-pid="yourPid"  type="ttl">Your Link Text</a>  </h5>  <p>Your card's content would go here in HTML format.</p>  </div>  </li>
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3 dds__col-xl-3 dds__col-xxl-2">  <div>  <div  class="dds__d-flex dds__justify-content-center dds__mb-2">  <a  type="img"  target="_self"  href="#yourHref"  data-pid="yourPid"  title="yourTitle">  <img  src="https://placehold.it/165x119?text=Image"  alt="YourAlt"  data-pid="yourPid" />  </a>  </div>  <h5>  <a  target="_self"  href="#yourHref"  data-pid="yourPid"  type="ttl">Your Link Text</a>  </h5>  <p>Your card's content would go here in HTML format.</p>  </div>  </li>
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3 dds__col-xl-3 dds__col-xxl-2">  <div>  <div  class="dds__d-flex dds__justify-content-center dds__mb-2">  <a  type="img"  target="_self"  href="#yourHref"  data-pid="yourPid"  title="yourTitle">  <img  src="https://placehold.it/165x119?text=Image"  alt="YourAlt"  data-pid="yourPid" />  </a>  </div>  <h5>  <a  target="_self"  href="#yourHref"  data-pid="yourPid"  type="ttl">Your Link Text</a>  </h5>  <p>Your card's content would go here in HTML format.</p>  </div>  </li>
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3 dds__col-xl-3 dds__col-xxl-2">  <div>  <div  class="dds__d-flex dds__justify-content-center dds__mb-2">  <a  type="img"  target="_self"  href="#yourHref"  data-pid="yourPid"  title="yourTitle">  <img  src="https://placehold.it/165x119?text=Image"  alt="YourAlt"  data-pid="yourPid" />  </a>  </div>  <h5>  <a  target="_self"  href="#yourHref"  data-pid="yourPid"  type="ttl">Your Link Text</a>  </h5>  <p>Your card's content would go here in HTML format.</p>  </div>  </li>
        </ul>
    <div class="dds__items-view"></div>
</div>
```

### Javascript initialization

For any Filmstrip Carousel, we use the ‘data-toggle’ attribute and ‘dds__filmstrip-carousel’ value to find and identify the component for initialization.

```javascript
<script>
  [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__filmstrip-carousel\"]"), function(element) {
    new UIC.FilmstripCarousel(element);
  });
</script>
```

## Options

All options for this component can are optional. The table below shows the currently available parameters with their default values and a brief description.

Name | Default | Release | Description | Data-set Attribute
--- | --- | --- | --- | ---
lazyload | false | 0.2.11 | `boolean` Allows the FilmstripCarousel to be loaded only when needed. Some applications' lifecycles will require this to be **true**. | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicCarouselSlideEvent | Available | Dispatched whenever the carousel iterates to a different item. | `{"direction": "next\|prev", "slide-to": integer}`

## Methods

Below is a list of the available public methods for this component.

- **lazyLoad()**

    Type: Function

    Release: 0.2.11

    Triggers the lazy load of the component, which must also have been initialized with the option for lazload set to true.

    Usage:

    ```javascript
    /**
     * @return {integer}
     */
    FilmstripCarousel.lazyLoad();
    ```

## Examples

### Filmstrip Carousel with single item advance

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dcarousel-filmstrip&module=%2Fsrc%2Fcomponents%2Fcarousel-filmstrip.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Filmstrip Carousel with page advance

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dcarousel-filmstrip-page&module=%2Fsrc%2Fcomponents%2Fcarousel-filmstrip-page.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
