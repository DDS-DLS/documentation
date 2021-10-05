# Footer - Simplified

## Description/Purpose

The footer component is a Dell-centric, standardized site footer using semantic HTML tag `<footer>`, which coincides with the `<header>` in our masthead.  The DOM element will appear fixed at the bottom of the screen automatically. Start here and customize it to keep the look and feel for your site matching with other in-house Dell properties.

> Used for when the simplified masthead is also in use

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
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/terms-of-sale" class="">Careers</a>
            </li>
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/site-terms-of-use-copyright" class="">Community</a>
            </li>
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/terms-of-sale" class="">Events</a>
            </li>
            <li>
              <a href="//www.dell.com/content/public/xdbredirect.aspx?link=global:nav:partners&~ck=mn" class=""
                >Partner Program</a
              >
            </li>
            <li>
              <a href="//www.dell.com/learn/us/en/04/premier?~ck=mn" class="">Premier</a>
            </li>
            <li>
              <a href="//www.delltechnologies.com/en-us/index.htm?~ck=mn" class="">Dell Technologies</a>
            </li>
            <li>
              <a href="//dfs.dell.com/Pages/DFSHomePage.aspx?~ck=mn" class="">Make a Payment</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="dds__footer-legal-nav">
        <div class="dds__container">
          <ul>
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/site-terms-of-use-copyright" class="">© 2019 Dell</a>
            </li>
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/terms-of-sale" class="">Terms of Sale</a>
            </li>
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/policies-privacy" class="">Privacy Statement</a>
            </li>
            <li>
              <a href="//www.dell.com/learn/us/en/uscorp1/policies-ads-and-emails" class="">Ads & Emails</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
```

### Javascript initialization

As of version 1.1.0, the Footer component no longer needs javascript initialization.
In case you're using the country selection dropdown, make sure you already have initialized it.

## Options

 There are no options for this component.

## Events

There are no events for this component.

## Methods

There are no public methods for this component.

## Examples

### Simplified Footer Implementation

<iframe
     src="https://codesandbox.io/s/admiring-snowflake-lc1pi?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dfooter-simplified&module=%2Fsrc%2Fcomponents%2Ffooter-simplified.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>