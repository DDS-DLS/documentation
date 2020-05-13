# Carousel

## Description/Purpose

Carousels, specifically "Banner Carousels" are large, headlining elements used to display eye-catching content.  One of a number of carousel items are shown at a time, often automatically transitioning to the next carousel item, and looping to the beginning after all are shown.

Buttons can optionally be displayed to allow user navigation of the carousel items.

## Initialization

### HTML initialization

The HTML structure of a Banner Carousel requires a div with the *data-ride*="**dds__carousel**" applied; use the *classes* **dds__carousel slide**.  Within this overlying container, you will need a number of child divs with the *class*="**dds__carousel-item**". Set one of these child divs to be active by applying the *class* **dds__active**.

Following the div that contains the carousel items, you can optionally add an arrangement of elements (links, buttons, or whatever you choose) to provide user control over the navigation.  Do this by setting the *data-target* to the ID of your carousel, the *data-slide-to* to the number of slide you desire, and don't forget to add a *class* of **dds__active** to the corresponding element.  An arrangement as described here is posted below:

```HTML
<div id="banner-carousel-no-arrows" class="dds__carousel slide" data-ride="dds__carousel" data-interval="5000" data-pause="hover">
    <div  class="dds__carousel-inner">
        <div  class="dds__carousel-item dds__active">
            <a  href="javascript:;"><img  class="dds__img-fluid"  alt="First slide"  src="//placehold.it/2160x480?text=First+Slide"></a>
        </div>
        <div  class="dds__carousel-item">
            <a  href="javascript:;"><img  class="dds__img-fluid"  alt="Second slide"  src="//placehold.it/2160x480?text=Second+Slide"></a>
        </div>
        <div  class="dds__carousel-item">
            <a  href="javascript:;"><img  class="dds__img-fluid"  alt="Third slide"  src="//placehold.it/2160x480?text=Third+Slide"></a>
        </div>
        <div  class="dds__carousel-item">
            <a  href="javascript:;"><img  class="dds__img-fluid"  alt="Third slide"  src="//placehold.it/2160x480?text=Fourth+Slide"></a>
        </div>
    </div>
    <ol  class="dds__carousel-indicators">
        <li  data-target="#banner-carousel-no-arrows"  data-slide-to="0"  class="dds__active"></li>
        <li  data-target="#banner-carousel-no-arrows"  data-slide-to="1"  class=""></li>
        <li  data-target="#banner-carousel-no-arrows"  data-slide-to="2"  class=""></li>
        <li  data-target="#banner-carousel-no-arrows"  data-slide-to="3"  class=""></li>
    </ol>
</div>
```

### Javascript initialization

For any Banner Carousel, we use the ‘data-ride’ attribute and ‘dds__carousel’ value to find and identify the component for initialization.

```javascript
<script>
[].forEach.call(document.querySelectorAll("[data-ride=\"dds__carousel\"]"), function (element) {
    new  UIC.Carousel(element);
});
</script>
```

## Options

All options for this component can are optional. The table below shows the currently available parameters with their default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
interval | 5000 | Available | `number` The number in milliseconds to pause between automatic transition to the next slide in the sequence. | *data-interval*
keyboard| true | Available | `boolean` Enables keyboard control of the carousel. | *data-keyboard*
pause | false | Available | `boolean` or `string` Set to "true", "false", or "hover". This determines whether the carousel automatically transitions, or whether to pause on mouse hover. | *data-pause*

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicCarouselSlideEvent | Available | Dispatched whenever the carousel iterates to a different item. | `{"direction": "next | prev", "slide-to": integer}`

## Methods

Below is a list of the available public methods for this component.

- **cycle()**

    Type: Function

    This method is used to stop or continue the rotation of the carousel. If a user clicks on a button / chicklet, it will stop the rotation.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    Carousel.cycle();
    ```

- **slideTo()**

    Type: Function

    Moves the carousel to a particular item by index.

    Usage:

    ```javascript
    /**
     * @param {integer} next
     * @return {void}
     */
    Carousel.slideTo(3);
    ```

- **getActiveIndex()**

    Type: Function

    Returns the integer number of the currently-active carousel item.

    Usage:

    ```javascript
    /**
     * @return {integer}
     */
    Carousel.getActiveIndex();
    ```

## Examples

### Banner Carousel

<iframe width="100%" height="450px"
     src="https://codesandbox.io/embed/uicore-filmstrip-carousel-by-page-mwnvw?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Filmstrip Carousel by Page"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

### Banner Carousel with Buttons

<iframe width="100%" height="450px"
     src="https://codesandbox.io/embed/uicore-banner-carousel-with-buttons-eocbx?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Banner Carousel with Buttons"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
