
# Pagination

## Description/Purpose

Pagination allows users toggle between pages and set the amount of items per page. By default, the amount of items per page will be 12, 24, 48, or 96, but that can be modified as described in the Options, below.

## Initialization

Each component has 2 types of initialization. There are 2 different modular Javascript files that can be used to initialize this component. For more information on the usage of these files see the [Getting Started](https://www.delldesignsystem.com/getting-started) page.

### HTML initialization

Components can have optional parameters, for information on the available parameters see the “Options” section. Most parameters values can be supplied to a component via a corresponding HTML data attribute that is associated to it. In the example below, there is a data attribute used to set a parameter value(s) for the component. Both the *data-container* and *data-placement* attributes are used to set the corresponding container and placement values for the component.

1. The total number of items and the number of items displayed per page can be customized by setting the *data-page* to a JSON object:

    ```HTML
    <nav class="dds__pagination dds__pagination-centered" data-toggle="dds__pagination" data-page='{"items":1000, "perPage":12}' aria-label="pagination"></nav>
    ```

2. Alternatively, you can initialize it simply with the *data-toggle* attribute, and pass in the remaining data as an option during JS initialization (not recommended):

    ```HTML
    <nav class="dds__pagination dds__pagination-centered" data-toggle="dds__pagination" aria-label="pagination"></nav>
    ```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__pagination**" found in the DOM.

> svgs are required for this component, which are loaded uses UIC.loadURLSVGs function. This example is pointing to a specific CDN-hosted version.

1. If all of your dataset attributes are defined in the HTML, you can initialize your component with no options:  

    ```javascript
    <script>
        UIC.loadURLSVGs(["//uicore.dellcdn.com/0.2.10/svgs/dds__chevron-left.svg","//uicore.dellcdn.com/0.2.10/svgs/dds__chevron-right.svg"]);
        [].forEach.call(document.querySelectorAll("[data-toggle='dds__pagination']"), function(element) {
            new UIC.Pagination(element);
        });
    </script>
    ```

2. Alternatively, you can pass in parameter values as an option during JS initialization for a specific instance (not recommended):

    ```javascript
    <script>
        UIC.loadURLSVGs(["//uicore.dellcdn.com/0.2.10/svgs/dds__chevron-left.svg","//uicore.dellcdn.com/0.2.10/svgs/dds__chevron-right.svg"]);

        [].forEach.call(document.querySelectorAll('[data-toggle="dds__pagination"]'), function(element) {
            new UIC.Pagination(element, {items:1500,perPage:12});
        });
    </script>
    ```

## Options

All options for this component can be omitted in place of a JSON-formatted *data-page* attribute. The table below shows the currently available parameters with their default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
buttonLabelLeft | "Previous" | Available | `string` The text to be shown on the backwards-navigation button | n/a
buttonLabelRight | "Next" | Available | `string` The text to be shown on the forwards-navigation button | n/a
disablePaginationInput | false | Available | `boolean` If true, allows the page number input field to be manually edited by the end-user  | n/a
external | false | Available | `boolean` Indicates whether data being paginated is hosted externally | n/a
items | 1 | Available | `number` Total number of items | n/a
perPage | 12 | Available | `number` The number of items to be displayed per page. | n/a
perPageSelect | [12, 24, 48, 96 ] | Available | `array` Selection choices to be listed in the per-page selection | n/a

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicorePaginationPageChangeEvent | Available | Fired when the page is changed | `{ "page": currentPage, "perPage" : options.perPage, "pages" : totalPages }`
uicorePaginationPageUpdateEvent | Available | Fired when the page is finished rendering | `{ "page": currentPage, "perPage" : options.perPage, "pages" : totalPages }`
uicorePaginationPerPageChangeEvent | Available | Event fired when the number of items to be viewed per page changes | `{ "page": currentPage, "perPage" : options.perPage, "pages" : totalPages }`
uicorePaginationPerPageUpdateEvent | Available | Fired when the perPage pager is finished rendering | `{ "page": currentPage, "perPage" : options.perPage, "pages" : totalPages }`

## Methods

This section lists the available public methods for the component

- **page()**

    Type: Function

    Changes the page to the number passed in

    Usage:

    ```javascript
    /**
    * @param {int} num
    * @return {void}
    */
    pagination.page(int);
    ```

- **perPage()**

    Type:  Function

    Changes the value chosen in the per-page selection input

    Usage:

    ```javascript
    /**
    * @param {int} num
    * @return {void}
    */
    pagination.perPage(int);
    ```

- **addItems()**

    Type: Function

    Adds the amount of items passed in

    Usage:

    ```javascript
    /**
    * @param {int} num
    * @return {void}
    */
    pagination.addItems(int);
    ```

- **removeItems()**

    Type: Function

    Removes the amount of items passed in.

    Usage:

    ```javascript
    /**
    * @param {int} num
    * @return {void}
    */
    pagination.removeItems(int);
    ```

- **setItems()**

    Type: Function

    Sets the total number of items to the number passed in.

    Usage:

    ```javascript
    /**
    * @param {int} num
    * @return {void}
    */
    pagination.setItems(int);
    ```

- **totalPages()**

    Type: Function

    Return the calculated pages.

    Usage:

    ```javascript
    /**
    * @return  {int} totalPages
    */
    pagination.totalPages();
    ```

## Examples

### Pagination, justified with filter

<iframe width="100%" height="240"
     src="https://codesandbox.io/embed/uicore-pagination-g9r4n?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Pagination"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
