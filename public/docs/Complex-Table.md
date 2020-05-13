# Complex Table

## Description/Purpose

A lightweight, extendable, dependency-free JavaScript HTML table. Features include:

- Expandable table rows
- Sortable columns
- Pagination
- Searchable
- Customizable layout
- Customizable labels
- Customize column rendering
- Ability to import and export csv and json data

## Initialization

### HTML initialization

To initialize a table, you can set the attribute *data-table*=”**dds__table**”, which is how the javascript initializes the component. In the example below, you can see the two ways of setting up your HTML.

You can use the dataset attribute *data-table-data* to send in all necessary info to initialize the table. Its value should be set to a JSON string following the pattern in the example below. Alternatively, you can send this data in using the options variable (see more details about these in the Options section). Using the dataset attribute is suggested, especially when initializing more than one table element on your DOM.

1. The *data-table-data* is set to a JSON string with all layout and data details defined.

    ```HTML
    <table data-table="dds__table" class="dds__table dds__table-hover dds__table-cmplx"
    data-table-data='{"showData":false,"search":true,"select":true,"settings":true,"sort":true,"expand":false,"fixedColumns":true,"fixedHeight":false,"header":true,
        "data":{"headings":["Name","Company","Extension","Start Date","Email","Phone","Link"],
        "columns":[{"select":0,"sort":"asc","fixed":true},{"select":[1,2],"hidden":true,"fixed":true},{"select":3,"type":"date","format":"MM/DD/YYYY","sortable":true}],
        "rows":[{"data":["Hedwig F. Nguyen","Arcu Vel Foundation","9875","03/27/2017","nunc.ullamcorper@metusvitae.com","070 8206 9605","<a href=&#39;//www.dell.com&#39;>Dell Home Page</a>"]},
            {"data":["Genevieve U. Watts","Eget Incorporated","9557","07/18/2017","Nullam.vitae@egestas.edu","0800 025698","<a href=&#39;//www.dell.com&#39;>Dell Home Page</a>"],"details":"Genevieve U. Watts details"}
            ]}}'>
    <caption class="dds__sr-only">A Complex Tables
        <span>Table used to display User information</span>
    </caption>
    </table>
    <nav class="dds__pagination dds__pagination-justified-filter" data-toggle="dds__pagination" aria-label="pagination"></nav>
    ```

2. Alternatively, you can initialize it simply with the *data-table* attribute, and pass in the remaining data as an option during JS initialization (not recommended):

    ```HTML
    <table data-table="dds__table" class="dds__table dds__table-hover dds__table-cmplx dds__table-striped">
        <caption class="dds__sr-only">A Complex Tables
            <span>Table used to display User information</span>
        </caption>
    </table>
    <nav class="dds__pagination dds__pagination-justified-filter" data-toggle="dds__pagination" aria-label="pagination"></nav>
    ```

### Javascript initialization

> **NOTE** Initializing a Table component with a fixed height will set the height of the rows container to the vertical size that it has at the time of initialization. Therefore, **do not** set fixedHeight to true if your table is not already added to the DOM.

All components come with a unique dataset attribute and value that are used to initialize the component on the page. These dataset attributes are how the run-time initialization finds and initializes each component on a page. In the example below, the component will initialize for all elements with *data-toggle*="**dds__table**" found in the DOM.

If all of your dataset attributes are defined in the HTML, you can initialize your object with no options:

```javascript
<script>
    [].forEach.call(document.querySelectorAll("[data-table=\"dds__table\"]"), function (element) {
        new UIC.Table(element);
    });
</script>
```

Alternatively, you can pass in these parameter values as an option during JS initialization for a specific instance (not recommended):

```javascript
<script>
var options = {
    search: true,
    actions: true,
    data : {
        headings: [
            "Name",
            "Company"
        ],
        columns: [],
        rows: [
            {data: ["Hedwig Nguyen", "Arcu"]},
            {data: ["Genevive Watts", "Eget"], details: "Genevive details"}
        ]
    }
};
[].forEach.call(document.querySelectorAll("[data-table=\"dds__table\"]"), function (element) {,
    new UIC.Table(element, options);
});
</script>
```

## Options

Options can be used to change the way a component looks and or behaves. All options for this component can be either omitted in place of a data-set attribute, or omitted completely for use of their default value. The table below shows the currently available parameters with their default values, and brief description.

Name | Default | Release/ Status | Description | Dataset Attribute
--- | --- | --- | --- | ---
additionalActions | null | Available | `[object]` An array of objects that allows for customizable actions in the batch actions dropdown menu. In the format of `[{html: 'insert innerHTML txt here', js: 'yourFunction()'}]`
buttonLabelLeft | "Previous" | Available | `string` The text used to label the pagination button on the left, which allows for internationalization of the button text.
buttonLabelRight | "Next" | Available | `string` The text used to label the pagination button on the right, which allows for internationalization of the button text.
column | true | Available | `boolean` Enables a columns button that can be used to reorder and turn columns on/off
condensed | false | Available | `boolean` Changes to a more compact table.
data | null | Available | `object` Pass an object of data to populate the table. See Examples section for sample data.
disablePaginationInput | false | Available | `boolean` Enables/disables the Pagination input box to allow or prevent Users from entering in page values.
expand | false | Available | `boolean` Enables rows to have expandable details
fixedColumns | false | Available | `boolean` Fixes the width of the columns. This stops the columns changing width when loading a new page.
fixedHeight | false | Available | `boolean` Fixes the height of the table. This is useful if your last page contains less rows than set in the perPage options and simply stops the table from changing size and affecting the layout of the page. NOTE: when using display: none on the table with this option the table's height will be 0px;
header | true | Available | `boolean` Enables the table header
import | true | Available | `boolean` Enables an import button that allows the user to import new data to the table. The file must be a .csv or .json file, and must contain the same headers as the current table.
items | 0 | Available | `number` Allows the user to override the item count that was passed in. This is useful so that the user can pass in data only when necessary, but the table can still display how many items there are total even if the data has not yet been loaded.
layout | `{actions:1:start}{search:1:end}{settings:1:end}` | Available | `object` Allows for custom arranging of the DOM elements in the top and bottom containers. There are several variables you can utilize: `{actions}, {search}, {settings}, and {placeholder}`. There are 3 columns in each row, and the number given for a certain element will be the columns it spans. The position of the element can be given with ‘start’, ‘center’, or ‘end. An example: `{ row1: "{placeholder:2:start}{settings:1:end}",row2: "{actions:1:start}{placeholder:1}{search:1:center}" }`
perPage | 12 | Available | `number` Sets the maximum number of rows to display on each page
perPageSelect | 12,24,48,96 | Available | `[number]` Used to change the values used for per page selection. Use an array of values, `[5,10,20]` etc. to change the selections.
print | true | Available | `boolean` Enables a print button that allows the user to print the table’s current active data.
search | true | Available | `boolean` Enables a search bar that will search visible/active rows in the table and update results dynamically.
select | true | Available | `boolean` Allows the user to select rows. This will enable a batch actions dropdown menu that provides several actions that will apply to selected rows. The default actions include export as csv, export as json, and delete. The user can pass in additional actions as well.
settings | true | Available | `boolean` Enables a settings options that allows the user to activate and organize table columns. Enabling this feature allows the user to add in a print, import, and column option.
showData | true | Available | `boolean` Setting this option to false allows the table to delete the json table data once the table has loaded. This is so that if there the table data passed in is extensive, once that data is loaded into the table, the json can be deleted.
sort | false | Available | `boolean` Enables the columns with the 'data-sortable' attribute to be sorted.

### Data Table

Name | Description | Example
--- | --- | ---
headings | Array of strings with names of all the headers | headings: `["Name, "Company", "Extension", "Start Date", "Email", "Phone", "Link"]`
columns | Array of objects that allows for column specific properties. First property should be "select" whose value should be the index of the column to modify from the headings array. Properties available to modify: <ul><li>sort - enables column to be sortable and defines sort setting on load "asc" or "desc"</li><li>fixed - enables column to be fixed in place in the table</li><li>sortable - enables column to be sortable but does not pre-sort the column on load</li><li>hidden - enables column to be hidden on load</li><li>format-</li><li>type- type of data</li></ul> | columns: `[{ select: 0, sort: "asc", fixed: true },{ select: [1,2], hidden: true, fixed: true }, { select: 3, type: "date", format: "MM/DD/YYYY", sortable: true }]`
rows | An array of objects including all the data for the rows for the table. The order of each column within the row must match the 'headings' order | rows: `[{data: ["Hedwig F. Nguyen","Arcu Vel Foundation","9875", "03-27-2017","nunc.ullamcorper@metusvitae.com","070 8206 9605","<a href='//www.dell.com'>Dell Home Page</a>"]}]`

You can set both the headings and rows with headings and data properties, respectively. The headings property is optional. You can also pass in specific options for columns as well; you can specify a data type, a format, if the column is in a fixed position on the table, and if the column is sortable.

## Events

All components use one or more Events to communicate to external scripts that something has happened. All Events will be dispatched from the element used in initialization. Use the element to add listeners to the custom event needed to react to the component’s behavior. All Events use a standard naming convention which is comprised of "uic" + component name + event name. Use the table below to find Events dispatched by this component.

Name | Release/ Status | Description | Details
--- | --- | --- | ---
Error | Available | Event dispatched upon receiving an error. Errors can be received from: Providing incomplete data when loading the table, importing data using an unsupported file type, inserting table data that does not match the current headers, and importing invalid formatted data. | `{"msg": msg}` - An object with the message of the given error
uicTableExpandCancelEvent | Available | Event dispatched when the user is opening a detail row and cancels the request while details row is loading. | An object of “rowId” which is the index of the row that is cancelled.
uicTableExpandStartEvent | Available | Event dispatched when the user is opening a detail row and has to make a request to retrieve the data. | An object of “rowId” which is the index of the row that is loading.
uicTableExpandEndEvent | Available | Event dispatched when the expanded row is finished loading. | An object of “rowId” which is the index of the row that was canceled.
uicTableUpdateEvent | Available | Event dispatched when the user changes something about the Table. Example: changed items per page, deletes a row, hides a column.
uicTableSearchEvent | Available | Event dispatched when the user searches in the search bar. | An object with “query”, the string the user types into the search, and “searchData”, the data the matches the search query.
uicTablePageChangedEvent | Available | Event dispatched when the user changes pages by using the “next” or “previous” buttons.  | `{ "currentPage": currentPage}` - An object with “currentPage”, the new page the user has changed to.
uicTableRefreshEvent | Available | Event dispatched when the public refresh() method is called on the table.
uicTableDeleteEvent | Available | Event dispatched when the batch action, delete is called.  | `{ "rowIds": table.selectedRows}` - An object with “rowIds”, the indexes of the rows that are being deleted.
uicTableNewPageEvent | Available | Event dispatched when user changes the page and that data has not been loaded yet.| `{ "page": e.detail.page, "rows" : rowsNeeded }` - <span style="color:red;">an object with "page" the ...</span> and "rows" the number of additional rows needed
uicTableMoreRowsEvent | Available | Event dispatched when user changes the page and the data needed for the page has not been loaded yet | `{ "page": e.detail.page, "perPage": e.detail.perPage, "rows" : rowsNeeded }`  - <span style="color:red;">an object with "page"</span>

## Methods

This section lists the available public methods for the component

- **update()**

    Type: Function

    Used to redraw the table after changes have occurred. When using other api methods note this method is already called when necessary.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    table.update();
    ```

- **search(query)**

    Type: Function

    Used with the search functionality of the table. The query is a string used against all columns in the table to filter the rows to be shown.

    Usage:

    ```javascript
    /**
     * @param {string} query
     * @return {void}
     */
    table.search(query);
    ```

- **page(int)**

    Type: Function

    Used to set the page of the table

    Usage:

    ```javascript
    /**
     * @param {int} page
     * @return {void}
     */
    table.page(int);
    ```

- **perPage(obj)**

    Type: Function

    Used to set the per page value of the table.
       obj.perPage - the new per page value.
       obj.page - the new page value.
       obj.pages - the new total pages value.

    Usage:

    ```javascript
    /**
     * @param {object} obj
     * @return {void}
     */
    table.perPage(obj);
    ```

- **refresh()**

    Type: Function

    Used to set the table back to it's initialized state.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    table.refresh();
    ```

- **clear()**

    Type: Function

    Used to remove the data rows being displayed. If passed the html will replace the rows in the table

    Usage:

    ```javascript
    /**
     * @param {mixes} html - HTML string or HTMLElement
     * @return {void}
     */
    table.clear();
    ```

- **export(options)**

    Type: Function

    Used to export table to various formats (csv, txt or sql)

    Usage:

    ```javascript
    /**
     * @param  {Object} options User options
     * @return {Boolean}
     */
    table.export(options)
    ```

- **import(newData)**

    Type: Function

    Used to import data into the table, accepts (csv, json and javascript object)

    Usage:

    ```javascript
    /**
     * @param  {Object} newData
     * @return {Boolean}
     */
    table.import(newData)
    ```

- **insertDetails(rowId, details)**

    Type: Function

    Used in conjunction with the expand option.
       rowId - the row id to insert the details
       details - the data to be inserted

    Usage:

    ```javascript
    /**
     * @param  {int} rowId
     * @param  {mixes} details - HTML or HTMLElement
     * @return {Boolean}
     */
    table.insertDetails(rowId, details)
    ```

- **deleteAll()**

    Type: Function

    Used to remove all rows of data in the table.

    Usage:

    ```javascript
    /**
     * @return {void}
     */
    table.deleteAll()
    ```

- **setItems(items)**

    Type: Function

    Used in conjunction with table lazy loading. The possible number of rows that table could load.

    Usage:

    ```javascript
    /**
     * @param  {int} items
     * @return {Boolean}
     */
    table.setItems(items)
    ```

## Examples

### Standard Complex Table

<iframe
     src="https://codesandbox.io/embed/uicore-table-complex-z4ewk?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:800px; border:0; border-radius: 4px; overflow:hidden;"
     title="UICore Table Complex"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
