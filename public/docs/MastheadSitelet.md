# Masthead - Sitelet

## Description/Purpose

The masthead is the component at the top of your webpage that helps with navigation and other primary actions. All customization to the masthead can be made in HTML; the JS takes in no options.

> Used for Dell-branded pages or sitelets that are not within Dell.com’s navigation structure.

## Initialization

### HTML initialization

Start with basic HTML initialization

```HTML
    <div class="dds__msthd dds__msthd-offcanvas-wrapper" data-toggle="dds__msthd">
      <nav class="dds__navbar dds__msthd-navbar-top dds__navbar-expand-md">
        <div class="dds__msthd-top dds__container dds__no-gutters">
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
            <!-- the search bar -->
            <div class="dds__msthd-search" role="search">
              <button
                class="dds__msthd-icon-ctnr dds__d-sm-flex dds__d-md-none"
                data-target="msthd-search-ctnr"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg focusable="false">
                  <use xlink:href="#dds__search"></use>
                </svg>
                <span class="dds__msthd-label dds__text-truncate">Search</span>
              </button>
              <div id="msthd-search-ctnr" class="dds__msthd-search-ctnr dds__d-md-block dds__d-none">
                <form action="/masthead">
                  <input
                    type="search"
                    class="dds__msthd-search-input"
                    tabindex="0"
                    placeholder="What can we help you find?"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    class="dds__msthd-search-btn dds__d-md-block dds__d-none"
                    aria-label="search"
                    tabindex="0"
                  >
                    <i class="dds__icons dds__search"></i>Search
                  </button>
                  <button type="submit" class="dds__msthd-search-btn dds__d-md-none" aria-label="search" tabindex="0">
                    <i class="dds__icons dds__search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
```
### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the *data-toggle* attribute and **dds\_\_msthd** value are used to find and identify the component for initialization.

```javascript
<script>
    // load svgs
    UIC.loadURLSVGs(["https://uicore.dellcdn.com/1.6.1/svgs/dds__search.svg"]);

    // initialize the Masthead component
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__msthd\"]"), function(element) {
        new UIC.Masthead(element);
    });
</script>
```

## Options

There are no options for this component.

## Events

There are no events for this component.

## Example

<iframe
     src="https://codesandbox.io/s/admiring-snowflake-lc1pi?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dmasthead-sitelet&module=%2Fsrc%2Fcomponents%2Fmasthead-sitelet.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>