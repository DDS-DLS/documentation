# Radio Button

Radio Buttons styled as cards are custom radio buttons that need custom classes to configure. 

## Disabling

Make stroked radio buttons disabled by applying `dds__disabled` class to the div with `dds__card-stroked`. 
```HTML
<fieldset>
    <div class="dds__radio-btn-wrapper-stroked" data-toggle="dds__button-filter">
        <div class="dds__card-stroked dds__filter-item dds__active" tabindex="-1">
            <input type="radio" id="RadioButtonStroked1" name="ExampleRadioButtonFilter" value="RadioButtonStroked1"
                    class="dds__btn-input dds__sr-only" checked>
            <label class="dds__card-label-stroked dds__btn-filter" for="RadioButtonStroked1"  data-filter-value="Option A">
                <div class="dds__card-label-container">
                    <p class="dds__card-title-stroked">Option A</p>
                </div>
            </label>
        </div>
        <div class="dds__card-stroked dds__filter-item dds__disabled" tabindex="-1">
            <input type="radio" id="RadioButtonStroked2" name="ExampleRadioButtonFilter" value="RadioButtonStroked2"
                    class="dds__btn-input dds__sr-only">
            <label class="dds__card-label-stroked dds__btn-filter" for="RadioButtonStroked2" data-filter-value="Option B">
                <div class="dds__card-label-container">
                    <p class="dds__card-title-stroked">Option B</p>
                    <p class="dds__card-txt-stroked-supporting">Supporting text</p>
                </div>
            </label>
        </div>
    </div>
</fieldset>

```
<img src="../images/Disabled_Card_Radio_Button_Docs.png" alt="Disabled Radio BUtton"/>

To make the entire fieldset of radio buttons disabled, apply the `disabled` attribute to the fieldset element. 
```HTML
<fieldset disabled>
    <div class="dds__radio-btn-wrapper-stroked" data-toggle="dds__button-filter">
        <div class="dds__card-stroked dds__filter-item dds__active" tabindex="-1">
            <input type="radio" id="RadioButtonStroked1" name="ExampleRadioButtonFilter" value="RadioButtonStroked1"
                    class="dds__btn-input dds__sr-only" checked>
            <label class="dds__card-label-stroked dds__btn-filter" for="RadioButtonStroked1"  data-filter-value="Option A">
                <div class="dds__card-label-container">
                    <p class="dds__card-title-stroked">Option A</p>
                </div>
            </label>
        </div>
        <div class="dds__card-stroked dds__filter-item" tabindex="-1">
            <input type="radio" id="RadioButtonStroked2" name="ExampleRadioButtonFilter" value="RadioButtonStroked2"
                    class="dds__btn-input dds__sr-only">
            <label class="dds__card-label-stroked dds__btn-filter" for="RadioButtonStroked2" data-filter-value="Option B">
                <div class="dds__card-label-container">
                    <p class="dds__card-title-stroked">Option B</p>
                    <p class="dds__card-txt-stroked-supporting">Supporting text</p>
                </div>
            </label>
        </div>
    </div>
<fieldset>
```
<img src="../images/RadioButtonFieldsetDisabled.png" alt="Disabled Radio BUtton"/>

### Stroked Radio Button Example **Coming Soon

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dradio-button-css&module=%2Fsrc%2Fcomponents%2Fradio-button-css.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

