# Filter Collection

## Description/Purpose

There are two types of filter collections: horizontal and vertical. Horizontal filter collection is comprised of multi-select dropdowns buttons and an optional keyword filter (search). The vertical filter collection is comprised of checkbox groups within accordions and does not support keyword filter. On small breakpoints, both turn into an off-canvas modal. When users click the checkboxes within the dropdowns or search for a keyword, the filter collection displays these filters along with the number of results the filter yielded.

## Initialization

### HTML initialization

To initialize a filter collection, you need two dataset attributes *data-toggle* and *data-target*. The data-toggle used by the javascript  to initialize the component. The  *data-target* attribute’s value points to the id of the div where all individual filter buttons will be displayed.

The id's for the checboxes on the off-canvas need to be different than those on desktop (our implementation adds "OffCanvas" to the end). The inner text and name attribute need to match in both locations, however, as that is how the data is linked. 

#### Horizontal Example
```HTML
<div data-toggle="dds__filter-collection" data-target="#horizontalcollection" class="dds__filter-collection-wrapper">
    <div class="dds__filter-input-container">
        <div class="dds__btn-dropdown dds__multi-select dds__col-md-4 dds__col-lg-3" tabindex="-1">
            <button class="dds__btn dds__btn-secondary dds__d-flex" data-filter="dds__multi-select"
                data-target="#buttonMultiSelectDropdown0" tabindex="0" aria-expanded="false" aria-controls="buttonMultiSelectDropdown0">
                <p class="dds__d-flex dds__text-truncate dds__mb-0">
                    <span class="dds__text-truncate dds__mb-0">Sample Multi-Select 1</span>
                </p>
                <svg class="dds__arrow-tri-solid-right dds__align-self-center dds__ml-1" viewBox="0 0 32 32" focusable="false" aria-hidden="true">
                    <title>dds__arrow-tri-solid-right</title>
                    <path d="M21.997 16.002l-11.994-12.356v24.708z"></path>
                </svg>
            </button>
            <ul id="buttonMultiSelectDropdown0" class="dds__button-dropdown-container dds__collapse" role="menu">
                <li class="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabindex="0" aria-checked="false">
                    <label class="dds__form-check-label" for="multiSelectCheckbox1">
                        <input type="checkbox" id="multiSelectCheckbox1" name="Value 1" tabindex="-1" class="dds__form-check-input">
                        <span>Value 1</span>
                    </label>
                </li>
            </ul>
        </div>

        <div class="dds__filter-keyword dds__col-md-4 dds__col-lg-3" data-filter="dds__keyword-filter">
            <label id="filtering-keyword-label-horizontal" for="filtering-keyword-input-horizontal-1" aria-label="Keyword Filtering">Keyword:</label>
            <div class="dds__filter-container">
                <input id="filtering-keyword-input-horizontal-1" aria-labelledby="filtering-keyword-label-horizontal" type="text" class="dds__form-control dds__filter-input" aria-label="keyword-filter">
                <button type="submit" class="dds__btn dds__btn-secondary dds__filter-btn" aria-label="filter-add">
                    <svg class="dds__icon-svg" tabindex="-1" focusable="false">
                        <use xlink:href="#dds__search"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <button role="button" class="dds__btn dds__btn-secondary dds__col-sm-12 dds__filter-btn-mobile" data-toggle="dds__modal" data-target="#exampleFilterOffcanvas">Filter and Search</button>

    <div class="dds__filter-collection-wrapper">
        <div class="dds__filter-collection dds__justify-content-start" id="horizontalcollection">
            <div class="dds__filter-results">
                <label class="dds__filter-label-results dds__d-none"><span id="resultCount">99</span> results:</label>
                <button class="dds__btn dds__btn-secondary dds__btn-sm dds__filter-btn-clear dds__d-none" id="ClearAllDesktop">
                    <label class="dds__filter-clear-all">Clear All</label>
                </button>
            </div>
        </div>

        <div class="dds__filter-sort dds__form-group dds__justify-content-end">
            <label for="exampleFormControlSelect3">Sort by:</label>
            <select class="dds__form-control" id="exampleFormControlSelect3">
                <option>Lowest Price</option>
                <option>Highest Price</option>
                <option>Relevance</option>
                <option>Highest Rated</option>
                <option>Most Rated</option>
            </select>
        </div>
    </div>

    <div id="exampleFilterOffcanvas" tabindex="-1" class="dds__modal dds__modal-offcanvas" role="dialog" aria-labelledby="dds__modal-title3">
        <div class="dds__modal-content">
            <div class="dds__container-fluid dds__p-1">
                <div class="dds__offcanvas-modal-topbar">  
                    <button class="dds__btn dds__btn-link" data-dismiss="dds__modal" aria-label="Back">
                        <i class="dds__icons dds__chevron-left" aria-hidden="true"></i>
                        <span>Cancel</span>
                    </button>
                    <div class="dds__text-right">
                        <button class="dds__btn dds__btn-primary"> Apply </button>
                        <button class="dds__btn dds__btn-secondary dds__d-none">Clear All</button>
                    </div>
                </div>
            </div>
            <div class="dds__modal-body">
                <div id="independent-accordion" class="dds__accordion dds__mb-3">
                    <div class="dds__accordion-card">
                        <div class="dds__accordion-card-header">
                            <h5 class="dds__mb-0">
                                <button class="dds__accordion-btn dds__collapsed dds__d-flex" type="button" data-toggle="dds__collapse" data-target="#collapseOneNested"
                                aria-expanded="false" aria-controls="collapseOneNested">
                                <i class="dds__icons dds__chevron-right" aria-hidden="true"></i>
                                <span id="headline1" class="dds__ml-2">Sample Multi-Select 1 </span>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOneNested" role="region" class="dds__collapse" aria-labelledby="headline1" aria-expanded="false">
                            <div class="dds__accordion-card-body">
                                <ul id="buttonMultiSelectDropdown00" role="menu">
                                    <li class="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabindex="0" aria-checked="false">
                                        <label class="dds__form-check-label" for="multiSelectCheckbox1OffCanvas">
                                            <input type="checkbox" id="multiSelectCheckbox1OffCanvas" name="Value 1" tabindex="-1" class="dds__form-check-input">
                                            <span>Value 1</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dds__filter-collection dds__justify-content-start" id="horizontalcollectionOffcanvas">
                    <div class="dds__filter-results"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Vertical Example
```HTML
<div data-toggle="dds__filter-collection" data-target="#verticalcollection" class="dds__filter-collection-wrapper dds__filter-collection-vertical dds__row">
  <div class="dds__col-3">
    <div class="dds__filter-collector-accordion">
      <div class="dds__d-flex dds__justify-content-between">
        <span>Refine your search:</span>
        <button class="dds__btn dds__btn-secondary dds__btn-sm dds__filter-btn-clear dds__d-none" id="ClearAllDesktop">
          <label class="dds__filter-clear-all">Clear All</label>
        </button>      
      </div>
      <div class="dds__filter-collection-wrapper"> 
        <div class="dds__filter-collection dds__filter-collection-vertical dds__filter-collector-vertical" id="verticalcollection">
          <div class="dds__filter-results">
          </label>
          </div>
      </div>
    </div>
    </div>
    <ul role="list" class="dds__filter-input-container">
      <li class="dds__accordion-filter-container">
        <div class="dds__secondary-accordion">
          <button class="dds__secondary-accordion-btn dds__d-flex dds__justify-content-between" data-filter="dds__secondary-accordion" type="button" data-toggle="dds__collapse" data-target="#screenSize" aria-expanded="false" aria-controls="screenSize">
            <span class="dds__font-weight-bold"> Screen Size </span>
            <i class="dds__icons dds__arrow-tri-solid-right" aria-hidden="true"></i>
          </button>
          <div class="dds__collapse dds__show" id="screenSize" aria-expanded="true" role="region">
            <div class="dds__secondary-accordion-body">
              <div class="div-accordion-filters">
                  <form>
                    <div class="dds__form-check">
                      <label class="dds__form-check-label dds__text-truncate" for="inches11">
                        <input type="checkbox" id="inches11" name="11 Inches" class="dds__form-check-input">
                        <span class="dds__text-truncate">11 Inches</span>
                      </label>
                    </div>
                    <div class="dds__form-check">
                      <label class="dds__form-check-label dds__text-truncate" for="inches13">
                        <input type="checkbox" id="inches13" name="13 Inches" class="dds__form-check-input">
                        <span class="dds__text-truncate">13 Inches</span>
                      </label>
                    </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  
  <button role="button" class="dds__btn dds__btn-secondary dds__col-sm-12 dds__filter-btn-mobile" data-toggle="dds__modal" data-target="#verticalFilterOffcanvas">Filter and Search</button>
  <label class="dds__filter-label-results">
      <span id="resultCount">6 Results:</span>
  </label>
  <div class="dds__filter-collection-wrapper">
      <div class="dds__filter-sort dds__form-group dds__justify-content-end">
          <label for="exampleFormControlSelect3">Sort by:</label>
          <select class="dds__form-control" id="exampleFormControlSelect3">
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Relevance</option>
              <option>Highest Rated</option>
              <option>Most Rated</option>
          </select>
      </div>
  </div>
  
  <div id="verticalFilterOffcanvas" tabindex="-1" class="dds__modal dds__modal-offcanvas" role="dialog" aria-labelledby="dds__modal-title3">
      <div class="dds__modal-content">
          <div class="dds__container-fluid dds__p-1">
              <div class="dds__offcanvas-modal-topbar">  
                  <button class="dds__btn dds__btn-link" data-dismiss="dds__modal" aria-label="Back">
                      <i class="dds__icons dds__chevron-left" aria-hidden="true"></i>
                      <span>Cancel</span>
                  </button>
                  <div class="dds__text-right">
                      <button class="dds__btn dds__btn-primary"> Apply </button>
                      <button class="dds__btn dds__btn-secondary dds__d-none">Clear All</button>
                  </div>
              </div>
          </div>
          <div class="dds__modal-body">
              <div id="independent-accordion" class="dds__accordion dds__mb-3">
                  <div class="dds__accordion-card">
                      <div class="dds__accordion-card-header">
                          <h5 class="dds__mb-0">
                              <button class="dds__accordion-btn dds__collapsed dds__d-flex" type="button" data-toggle="dds__collapse" data-target="#screenSizeCollapse"
                              aria-expanded="false" aria-controls="screenSizeCollapse">
                              <i class="dds__icons dds__chevron-right" aria-hidden="true"></i>
                              <span id="headline1" class="dds__ml-2">Screen Size </span>
                              </button>
                          </h5>
                      </div>
                      <div id="screenSizeCollapse" role="region" class="dds__collapse" aria-labelledby="headline1" aria-expanded="false">
                          <div class="dds__accordion-card-body">
                              <ul id="buttonMultiSelectDropdown00" role="menu">
                                  <li class="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabindex="0" aria-checked="false">
                                      <label class="dds__form-check-label" for="inches11OffCanvas">
                                          <input type="checkbox" id="inches11OffCanvas" name="11 Inches" tabindex="-1" class="dds__form-check-input">
                                          <span>11 Inches</span>
                                      </label>
                                  </li>
                                  <li class="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabindex="0" aria-checked="false">
                                      <label class="dds__form-check-label" for="inches13OffCanvas">
                                          <input type="checkbox" id="inches13OffCanvas" name="13 Inches" tabindex="-1" class="dds__form-check-input">
                                          <span>13 Inches</span>
                                      </label>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="dds__filter-collection dds__justify-content-start" id="verticalcollectionOffcanvas">
                <div class="dds__filter-results"></div>
              </div>
          </div>
      </div>
  </div>
</div>
```
### Javascript initialization

All components come with a unique dataset attribute  value that  is used to initialize the component on the page. For filter collection, the *data-toggle* attribute and **dds__filter-collection** value are used to find  the component for initialization.

```javascript
<script>
  UIC.loadURLSVGs(["svgs/dds__close-x.svg"]);

  [].forEach.call(document.querySelectorAll("[data-toggle='dds__filter-collection']"), function (element) {
    var filter = new UIC.FilterCollection(element);
  });
</script>
```

## Options

 There are no options for this component.

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicFilterCollectionCreateEvent | Available | Event dispatched upon creating a new filter | `{ "filters": filtersAsStrings(), "addedFilter": filterItem.innerText }`
uicFilterCollectionUpdateEvent| Available | Event dispatched upon user hitting "Apply" button in off-canvas on mobile | `{"filters": filtersAsStrings()}`
uicFilterCollectionRemoveEvent| Available | Event dispatched when user clicks on a filter to remove it | `{ "filters": filtersAsStrings(), "removedFilter": target.innerText }`
uicFilterCollectionRemoveAllEvent| Available | Event dispatched when the user clicks on the "Clear All" button |  `{filters": filtersAsStrings()}`

## Methods

Available public methods of the component.

- **updateResultsLabel(resultCount)**
    Type: Function

    Shows the user the number of results the filter returned

    Usage:

    ```javascript
    /**
     * @param {int} the number of results the filter returned
     * @return {void}
     */
    FilterCollection.updateResultsLabel(15);
    ```

## Examples

### Standard Filter Collection

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dfilter-collection&module=%2Fsrc%2Fcomponents%2Ffilter-collection.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
