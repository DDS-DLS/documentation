# Product Stack

## Description/Purpose

A product stack is a vertical stack of individual elements that provides details about a product or offering based on its location within the purchase path. A product stack is rules-based and has a specific order in which elements should appear, with some sections being required.

## Initialization

### HTML initialization

The data-toggle attribute (*data-toggle*="**dds__product-stack**") should be added on the product stack container to instantiate the JS. For additional components that are included in the product stack sections, such as the tooltip or modal, those must be instantiated separately as well. Please refer to those component specific pages for more details.

The product stacks must be wrapped in a ul with the class **dds__product-stack-wrapper**, and each product stack should be a ul with the class **dds__product-stack**. In addition, each section inside a product stack should be a li, and to match section heights accordingly, each unique section should contain the same class name across all product stacks. For the button controls, the buttons should contain *data-toggle*="**dds__product-stack-control-left**" and *data-toggle*="**dds__overflow-control-right**" accordingly.

```HTML
<div data-toggle="dds__product-stack">
    <div class="dds__ps-overflow-controls">
        <div class="dds__items-view"></div>
        <button role="button" type="button" class="dds__btn dds__btn-primary dds__text-truncate dds__overflow-control-left" data-toggle="dds__product-stack-control-left">
            <svg class="dds__chevron-left" aria-hidden="true" focusable="false"><use xlink:href="#dds__chevron-left"></use></svg>
            Previous
        </button>
        <button role="button" type="button" class="dds__btn dds__btn-primary dds__text-truncate dds__overflow-control-right" data-toggle="dds__product-stack-control-right">
            Next
            <svg class="dds__chevron-right" aria-hidden="true" focusable="false"><use xlink:href="#dds__chevron-right"></use></svg>
        </button>
    </div>
    <ul class="dds__product-stack-wrapper">
        <li class="dds__col-12 dds__col-sm-6 dds__col-md-4 dds__col-lg-3">
            <ul class="dds__product-stack">
                <li class="dds__ps-image">
                    <a type="img" href="#" title="Product title">
                        <img src="https://assets.website-files.com/5c76c529d2ffcf0165d4365b/5e95ba50c9fce1d0fd34e320_PS-xps-13.png" alt="product title">
                    </a>
                </li>
                <li class="dds__ps-title">
                    <h4>
                        <a href="#">Product Title Product Title</a>
                    </h4>
                </li>
                <li class="dds__ps-base-price">
                    <div>
                        <s class="dds__ps-price-original">$0,000.00</s>
                        <strong class="dds__ps-price-adjusted">$0,000.00</strong>
                    </div>
                </li>
                <hr class="dds__ps-hr">
                <li class="dds__ps-details">
                    <ul class="dds__list-group">
                        <li class="dds__list-group-item-unordered">Organic lyft forage poke farm-to-table, selfies listicle cred truffaut.</li>
                        <li class="dds__list-group-item-unordered">Venmo biodiesel tote bag locavore williamsburg adaptogen.</li>
                        <li class="dds__list-group-item-unordered"><a hr class="dds__ps-hr"ef="#">Cronut kickstarter next level</a></li>
                        <li class="dds__list-group-item-unordered">Sartorial aesthetic vice paleo cloud bread.</li>
                        <li class="dds__list-group-item-unordered">Biodiesel artisan messenger bag asymmetrical organic bitters.</li>
                    </ul>
                </li>
                <hr class="dds__ps-hr">
                <li class="dds__ps-description">
                    <p> Product description in paragraph format product description in paragraph format. </p>
                </li>
                <hr class="dds__ps-hr">
                <li class="dds__ps-price-attributes">
                    <div class="dds__ps-price-attribute">
                        <span class="dds__ps-tooltip" data-toggle="dds__tooltip" data-options='{"data_placement":"right", "data_title":"Est. Value is Dell’s estimate of product value based on industry data, including the prices at which third-party retailers have offered or valued the same or comparable products, in its most recent survey of major online and/or off-line retailers. Third-party retailer data may not be based on actual sales."}'><small>Est. value</small></span>
                        <small><s>$0,000.00</s></small>
                    </div>
                    <div class="dds__ps-price-attribute">
                        <button role="button" class="dds__btn dds__btn-link" data-toggle="dds__modal" data-target="#examplePSModal"><small>Total Savings</small></button>
                        <small>$000.00</small>
                    </div>
                    <div class="dds__ps-price-attribute">
                        <span><small><strong>Standard Delivery</strong></small></span>
                        <small class="dds__ps-tooltip" data-toggle="dds__tooltip" data-options='{"data_placement":"right", "data_title":"Exceptions to included shipping prices may apply for remote locations."}'><strong>FREE</strong></small>
                    </div>
                    <div class="dds__ps-price-attribute">
                        <span><strong>Dell Price</strong></span>
                        <strong>$0,000.00</strong>
                    </div>
                </li>
                <hr class="dds__ps-hr">
                <li class="dds__ps-button">
                    <button role="button" type="button" class="dds__btn dds__btn-purchase dds__text-truncate">Customize & Buy</button>
                </li>
            </ul>
        </li>
    </ul>
```

### Javascript initialization

For product stacks, we use the ‘*data-toggle*’ attribute to find and identify the component for initialization. For additional components that are included in the product stack sections, such as the tooltip or modal, those must be instantiated separately as well. Please refer to those component specific pages for more details.

```javascript
[].forEach.call(document.querySelectorAll("[data-toggle=\"dds__product-stack\"]"), function(element) {
    new UIC.ProductStack(element, {"type": "page"});
});
```

## Options

 All options for this component can are optional. The table below shows the currently available parameters with their default values and a brief description.

Name | Default | Release | Description | Data-set Attribute
--- | --- | --- | --- | ---
lazyload | false | 0.3.0 | `boolean` Allows the Product Stack to be loaded only when needed. Some applications' lifecycles will require this to be **true**. | n/a
type | "single" | 0.3.0 | `string` Determines whether the pagination buttons will scroll a **single** product stack width or the entire **page** width. | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicProductStackChangeEvent | Available | Dispatched whenever the product stack carousel iterates to a different item. | `{"left": integer, "right": integer, "totalItems": integer}`

## Methods

Below is a list of the available public methods for this component.

- **lazyLoad()**

    Type: Function

    Release: 0.2.11

    Triggers the lazy load of the component, which must also have been initialized with the option for lazload set to true.

    Usage:

    ```javascript
    ProductStack.lazyLoad();
    ```

## Examples (WIP)

### Product Stack Carousel with single item advance

### Product Stack Carousel with page advance
