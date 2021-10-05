# File Upload Input

## Description/Purpose

The File Upload Input component is based in the input type file.  You can define the input options for your file selection and restrict options like max file size and call validation or interaction hooks.

## Initialization

### HTML initialization

Most parameter values can be supplied to a component via a corresponding HTML data attribute that is associated to it. 

> In this sample below, there is only one upload element, with default options.

```HTML
<div class="dds__form-group dds__form-group-upload">
  <label for="uploadInput">File Upload Label</label>
  <div class="dds__form-upload-wrapper">
    <input
      type="file"
      class="dds__form-upload"
      data-toggle="dds__form-upload"
      name="upload"
      id="uploadInput"
      data-max-size="1mb"
      data-placeholder="Only pdf 1MB maximum"
      tabindex="-1"
      required
    />
    <Button type="button" for="uploadInput" class="dds__form-upload-btn">
      <i class="dds__icons dds__upload dds__icon-grid-item"></i> 
      Upload File
    </Button>
  </div>
  <div class="dds__invalid-feedback" id="uploadInputFeedback">
    Please upload file.
  </div>
</div>
```

### Javascript initialization

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__form-upload**" found in the DOM.

#### Basic usage

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__form-upload\"]"), function(element) {
      new UIC.FileUpload(element, {});
    });
</script>
```
#### Full usage

```javascript
<script>
    /*
        Called  before to use FileReader
        return false to abort file reading
    */
    function beforeUpload(param) {
        return true;
    }

    /*
        Called  after load file using FileReader
        Can be used to async upload, image preview, etc
    */
    function uploadAction(param) {}

    /*
        Called  before clean the file field value and file list
        Can be used to async remove from server, etc
    */
    function beforeDelete(fileName) {}

    /*
        Called after clean the file field and file list
    */
    function afterDelete(fileName) {}

    /*
        Called when the loaded percent changes (if have brower's support)
    */
    function progressAction(info) {}

    /*
        Called  whe some error occours
    */
    function errorAction(info) {}

    // Format to read the file in memory before send
    var loadFormat = "text"; // text || binary  || buffer || dataUrl (default: text)

    // Extensions allowed (must be an array)
    var allowedExensions = ["pdf", "jpg", "png"];

    // Disallowed extension file message
    // Keep the string {extensions} to replace it in the output message
    var extensionErrorMessage = "File must be of type {extensions}";

    // File maximum size message
    // Keep the string {max-size} to replace it in the output message
    var sizeErrorMessage = "File must be smaller than {max-size}";

    /* All this configuration parameters are optional */
    var config = {
        loadFormat,
        beforeUpload,
        uploadAction,
        beforeDelete,
        afterDelete,
        progressAction,
        errorAction,
        allowedExensions,
        extensionErrorMessage,
        sizeErrorMessage,
    };
    
    [].forEach.call(document.querySelectorAll("[data-toggle=\"dds__form-upload\"]"), function(element) {
      new UIC.FileUpload(element, config);
    });
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. The table below shows the currently available parameters with their default values and a brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
placeholder | unset | Available | Text to be showed as placeholder to the file | data-placeholder
maximum size | unset | Available | Text to indicate the maximum file size acceptable, can accepts numbers and size unit (Ex. 1MB, 2Kb, etc) | data-max-size
loadFormat | text | Available | Format to be used by FileReader API when load the file (text, binary , buffer or dataUrl) | n/a
allowedExensions | null | Available | Array of string with the allowed file extensions Ex: ["pdf", "jpg", "png"] | n/a
extensionErrorMessage | File must be of type {extensions} | Available | Error message for not allowed file extension (could have the {extensions} string to be replaced) | n/a
sizeErrorMessage | File must be smaller than {max-size} | Available | Error message for too big file size (could have the {max-size} string to be replaced) | n/a
beforeUpload    | unset  | Available | Callback function dispatched before the component to load the file. Params: `{}:File`  | n/a
uploadAction    | unset  | Available | Callback function dispatched after load the file in memory. Could be used to send the file using AJAX, for example. Params: `fileString: string` | n/a
beforeDelete    | unset  | Available | Callback function dispatched before remove the file from memory, interface and field value. Params: `fileName: string` | n/a
afterDelete     | unset  | Available | Callback function dispatched after remove the file from memory, interface and field value. Params: `fileName: string`  | n/a
progressAction  | unset  | Available | Callback function dispatched (whe supported by the browser) when the file is loaded in memory. Params: `{ loaded: int, total: int }` | n/a
errorAction     | unset  | Available | Callback function dispatched when an error was triggered. Params: `{}:Error` | n/a


## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
uicFileUploadBeforeUploadEvent    | Available  | Event dispatched before the component to load the file | `{}:File`
uicFileUploadUploadActionEvent    | Available  | Event dispatched after load the file in memory. Could be used to send the file using AJAX, for example | `fileString: string`
uicFileUploadBeforeDeleteEvent    | Available  | Event dispatched before remove the file from memory, interface and field value | `fileName: string`
uicFileUploadAfterDeleteEvent     | Available  | Event dispatched after remove the file from memory, interface and field value | `fileName: string`
uicFileUploadProgressActionEvent  | Available  | Event dispatched (whe supported by the browser) when the file is loaded in memory | `{ loaded: int, total: int }`
uicFileUploadErrorActionEvent     | Available  | Event dispatched when an error was triggered | `{}:Error`

## Methods

There are no public methods for this component.

## Examples

### Input Upload Field

<iframe
     src="https://codesandbox.io/embed/github/DDS-DLS/sandboxes/tree/master/?codemirror=1&expanddevtools=0&runonclick=1&hidenavigation=1&hidedevtools=1&fontsize=14&hidenavigation=1&initialpath=%3Fdoc%3Dform&module=%2Fsrc%2Fcomponents%2Ffile-upload.txt&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="CodeSandbox instance of DLS components"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
