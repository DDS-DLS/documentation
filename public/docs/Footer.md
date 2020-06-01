# Footer

## Description/Purpose

The footer component is a Dell-centric, standardized site footer.  The DOM element will appear fixed at the bottom of the screen automatically. Start here and customize it to keep the look and feel for your site matching with other in-house Dell properties.

## Initialization

### HTML initialization

To initialize a footer, you must assign the dataset attribute of a footer element as such: *data-toggle*="**dds__footer**". The data-toggle is used by the javascript to initialize the component.

```HTML
    <footer class="dds__default-footer" data-toggle="dds__footer">
        <nav class="dds__footer-nav">
            <div class="dds__container">
                <ul class="dds__page-nav">
                    <li>
                        <a href="//www.dell.com/learn/us/en/uscorp1/site-terms-of-use-copyright" class="">About Dell</a>
                    </li>
                </ul>
                <div class="dds__country-selector dds__btn-dropdown">
                    <button class="dds__footer-icon-ctnr" data-target="footer-country-selector" aria-label="Country Selector" aria-haspopup="true" aria-expanded="false">
                        <img src="//i.dell.com/images/global/masthead/smlflags/us.gif" alt="USA">
                        <span class="dds__footer-label dds__text-truncate">United States</span>
                        <svg focusable="false" class="dds__svg-icons" name="chevron-right">
                            <use xlink:href="#dds__chevron-right" class="dds__svg-icons-item dds__show"></use>
                        </svg>
                    </button>
                    <ul id="footer-country-selector" class="dds__country-list dds__button-dropdown-container dds__collapse">
                        <li tabindex="-1"><a class="dds__dropdown-item dds__text-truncate" href="//www.dell.com/af/en/gen/df.aspx?refid=df&amp;s=gen&amp;~ck=cr" title="Afghanistan" data-country-code="af">Afghanistan</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="dds__footer-legal-nav">
            <div  class="dds__container">
                <ul>
                    <li>
                        <a href="//www.dell.com/learn/us/en/uscorp1/site-terms-of-use-copyright" class="">© 2019 Dell</a>
                    </li>
                    <!-- other links would go here -->
                </ul>
            </div>
        </nav>
    </footer>
```

### Javascript initialization

All components come with a unique dataset attribute  value that  is used to initialize the component on the page. For dropdowns, the *data-toggle* attribute and **dds__footer** value are used to find  the component for initialization.

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__footer\"]"), function(element) {
        new UIC.Footer(element); //, {"persist":true});
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

### Standard Footer Implementation

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dfooter&module=%2Fsrc%2Fcomponents%2Ffooter.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
