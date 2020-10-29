# Helper Classes DLS 1.0

Listed here are the available helper classes sorted into categories and listed alphabetically. Since DLS is based on  [Bootstrap](https://getbootstrap.com/docs/4.5/layout/utilities-for-layout/), lots of documentation listed here is similar to that on their site.

## Align

Change the alignment of elements with the `vertical-alignment` utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.
```CSS
.dds__align-baseline { vertical-align:baseline !important; }
.dds__align-top { vertical-align:top !important; }
.dds__align-middle { vertical-align:middle !important; }
.dds__align-bottom { vertical-align:bottom !important; }
.dds__align-text-bottom { vertical-align:text-bottom !important; }
.dds__align-text-top { vertical-align:text-top !important; }
```

## Borders
```CSS
.dds__border{ border:0.0625rem solid #cccccc !important; }
.dds__border-top{ border-top:0.0625rem solid #cccccc !important; }
.dds__border-right{ border-right:0.0625rem solid #cccccc !important; }
.dds__border-bottom{ border-bottom:0.0625rem solid #cccccc !important; }
.dds__border-left{ border-left:0.0625rem solid #cccccc !important; }

.dds__border-0{ border:0 !important; }
.dds__border-top-0{ border-top:0 !important; }
.dds__border-right-0{ border-right:0 !important; }
.dds__border-bottom-0{ border-bottom:0 !important; }
.dds__border-left-0{ border-left:0 !important; }

.dds__border-white {border-color:#fff !important;}

.dds__rounded {border-radius:0.0625rem !important;}
.dds__rounded-top{
  border-top-left-radius:0.0625rem !important;
  border-top-right-radius:0.0625rem !important;
}
.dds__rounded-right{
  border-top-right-radius:0.0625rem !important;
  border-bottom-right-radius:0.0625rem !important;
}
.dds__rounded-bottom{
  border-bottom-right-radius:0.0625rem !important;
  border-bottom-left-radius:0.0625rem !important;
}
.dds__rounded-left{
  border-top-left-radius:0.0625rem !important;
  border-bottom-left-radius:0.0625rem !important;
}

.dds__rounded-circle {border-radius:50% !important;}

.dds__rounded-0 {border-radius:0 !important;}

```

## Display

Display utility classes that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0; `and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
As such, the classes are named using the format:
- `.dds__d-{value}` for `xs`
- `.dds__d-{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.

Where *value* is one of:
- `none`
- `inline`
- `inline-block`
- `block`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`


```CSS
    .dds__d-none {display:none !important; }
    .dds__d-inline {display:inline !important; }
    .dds__d-inline-block {display:inline-block !important; }
    .dds__d-block {display:block !important; }
    .dds__d-table {display:table !important; }
    .dds__d-table-cell {display:table-cell !important; }
    .dds__d-table-row {display:table-row !important; }
    .dds__d-flex {display:flex !important; }
    .dds__d-inline-flex {display:inline-flex !important; }
```
So, if you would like to your element to be hidden only on xs, you can apply the classes:
`.dds__d-none .dds__d-sm-block`

####Print Display
Below shows classes that can change the display of elements when printing.

```CSS
  .dds__d-print-none { display:none !important; }
  .dds__d-print-inline { display:inline !important; }
  .dds__d-print-inline-block { display:inline-block !important; }
  .dds__d-print-block { display:block !important; }
  .dds__d-print-table { display:table !important; }
  .dds__d-print-table-row { display:table-row !important; }
  .dds__d-print-table-cell { display:table-cell !important; }
  .dds__d-print-flex { display:flex !important; }
  .dds__d-print-inline-flex { display:inline-flex !important; }
```

##Flex
Flex utility classes that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
As such, the classes are named using the format:
- `.dds__flex-{value}` for `xs`
- `.dds__flex-{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.

Where *value* is one of:
- `row`
- `column`
- `row-reverse`
- `columns-reverse`
- `wrap`
- `nowrap`
- `wrap-reverse`
- `fill`
- `grow-0`
- `grow-1`

Replace `sm` below with 
md (min-width: 768px)
lg (min-width: 992px)
xl (min-width: 1200px)

```CSS
.dds__flex-sm-row{ flex-direction:row !important; }
.dds__flex-sm-column{ flex-direction:column !important; }
.dds__flex-sm-row-reverse{ flex-direction:row-reverse !important; }
.dds__flex-sm-column-reverse{ flex-direction:column-reverse !important; }
.dds__flex-sm-wrap{ flex-wrap:wrap !important; }
.dds__flex-sm-nowrap{ flex-wrap:nowrap !important; }
.dds__flex-sm-wrap-reverse{ flex-wrap:wrap-reverse !important; }
.dds__flex-sm-fill{ flex:1 1 auto !important; }
.dds__flex-sm-grow-0{ flex-grow:0 !important; }
.dds__flex-sm-grow-1{ flex-grow:1 !important; }
.dds__flex-sm-shrink-0{ flex-shrink:0 !important; }
.dds__flex-sm-shrink-1{ flex-shrink:1 !important; }
```

#####Justify Content
Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `end`, `center`, `between`, or `around`.

```CSS
.dds__justify-content-start{ justify-content:flex-start !important; }
.dds__justify-content-end{ justify-content:flex-end !important; }
.dds__justify-content-center{ justify-content:center !important; }
.dds__justify-content-between{ justify-content:space-between !important; }
.dds__justify-content-around{ justify-content:space-around !important; }
```


Responsive variations also exist for justify content:
- `.dds__justify-content-sm-start`
- `.dds__justify-content-sm-end`
- `.dds__justify-content-sm-center`
- `.dds__justify-content-sm-between`
- `.dds__justify-content-sm-around`

- `.dds__justify-content-md-start`
- `.dds__justify-content-md-end`
- `.dds__justify-content-md-center`
- `.dds__justify-content-md-between`
- `.dds__justify-content-md-around`

- `.dds__justify-content-lg-start`
- `.dds__justify-content-lg-end`
- `.dds__justify-content-lg-center`
- `.dds__justify-content-lg-between`
- `.dds__justify-content-lg-around`



- `.dds__justify-content-xl-start`
- `.dds__justify-content-xl-end`
- `.dds__justify-content-xl-center`
- `.dds__justify-content-xl-between`
- `.dds__justify-content-xl-around`

#####Align Items
Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

```CSS
.dds__align-items-start{ align-items:flex-start !important; }
.dds__align-items-end{ align-items:flex-end !important; }
.dds__align-items-center{ align-items:center !important; }
.dds__align-items-baseline{ align-items:baseline !important; }
.dds__align-items-stretch{ align-items:stretch !important; }
```

Responsive variations exist for align-items as well.

- `.dds__align-items-sm-start`
- `.dds__align-items-sm-end`
- `.dds__align-items-sm-center`
- `.dds__align-items-sm-baseline`
- `.dds__align-items-sm-stretch`

- `.dds__align-items-md-start`
- `.dds__align-items-md-end`
- `.dds__align-items-md-center`
- `.dds__align-items-md-baseline`
- `.dds__align-items-md-stretch`

- `.dds__align-items-lg-start`
- `.dds__align-items-lg-end`
- `.dds__align-items-lg-center`
- `.dds__align-items-lg-baseline`
- `.dds__align-items-lg-stretch`

- `.dds__align-items-xl-start`
- `.dds__align-items-xl-end`
- `.dds__align-items-xl-center`
- `.dds__align-items-xl-baseline`
- `.dds__align-items-xl-stretch`

#####Align Content
Use `align-content` utilities on flexbox containers to align flex items together on the cross axis. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. 
Heads up! This property has no effect on single rows of flex items.


```CSS
.dds__align-content-start {align-content:flex-start !important; }
.dds__align-content-end {align-content:flex-end !important; }
.dds__align-content-center {align-content:center !important; }
.dds__align-content-between {align-content:space-between !important; }
.dds__align-content-around {align-content:space-around !important; }
.dds__align-content-stretch {align-content:stretch !important; }
```

Responsive variations exist for align-content as well.
- `.dds__align-content-sm-start`
- `.dds__align-content-sm-end`
- `.dds__align-content-sm-center`
- `.dds__align-content-sm-between`
- `.dds__align-content-sm-around`
- `.dds__align-content-sm-stretch`

- `.dds__align-content-md-start`
- `.dds__align-content-md-end`
- `.dds__align-content-md-center`
- `.dds__align-content-md-between`
- `.dds__align-content-md-baseline`
- `.dds__align-content-md-stretch`

- `.dds__align-content-lg-start`
- `.dds__align-content-lg-end`
- `.dds__align-content-lg-center`
- `.dds__align-content-lg-between`
- `.dds__align-content-lg-baseline`
- `.dds__align-content-lg-stretch`

- `.dds__align-content-xl-start`
- `.dds__align-content-xl-end`
- `.dds__align-content-xl-center`
- `.dds__align-content-xl-between`
- `.dds__align-content-xl-baseline`
- `.dds__align-content-xl-stretch`

#####Align Self
Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `auto`, `start`, `end`, `center`, `baseline`, or `stretch` (browser default).
```CSS
.dds__align-self-auto {align-self:auto !important; }
.dds__align-self-start {align-self:flex-start !important; }
.dds__align-self-end {align-self:flex-end !important; }
.dds__align-self-center {align-self:center !important; }
.dds__align-self-baseline {align-self:baseline !important; }
.dds__align-self-stretch {align-self:stretch !important; }
```

Responsive variations exist for align-self as well.
- `.dds__align-self-sm-auto`
- `.dds__align-self-sm-start`
- `.dds__align-self-sm-end`
- `.dds__align-self-sm-center`
- `.dds__align-self-sm-baseline`
- `.dds__align-self-sm-stretch`

- `.dds__align-self-md-auto`
- `.dds__align-self-md-start`
- `.dds__align-self-md-end`
- `.dds__align-self-md-center`
- `.dds__align-self-md-baseline`
- `.dds__align-self-md-stretch`

- `.dds__align-self-lg-auto`
- `.dds__align-self-lg-start`
- `.dds__align-self-lg-end`
- `.dds__align-self-lg-center`
- `.dds__align-self-lg-baseline`
- `.dds__align-self-lg-stretch`

- `.dds__align-self-xl-auto`
- `.dds__align-self-xl-start`
- `.dds__align-self-xl-end`
- `.dds__align-self-xl-center`
- `.dds__align-self-xl-baseline`
- `.dds__align-self-xl-stretch`

##Float
These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the CSS float property. `!important` is included to avoid specificity issues. These use the same viewport breakpoints as our grid system.

```CSS
  .dds__float-left{ float: left !important; }
  .dds__float-right{ float: right !important; }
  .dds__float-none{ float: none !important; }
```
Responsive variations exist for float as well.
- `.dds__float-sm-left`
- `.dds__float-sm-right`
- `.dds__float-sm-none`

- `.dds__float-md-left`
- `.dds__float-md-right`
- `.dds__float-md-none`

- `.dds__float-lg-left`
- `.dds__float-lg-right`
- `.dds__float-lg-none`

- `.dds__float-xl-left`
- `.dds__float-xl-right`
- `.dds__float-xl-none`

##Headers
Apply the below list of header classes to an element for it to appear like a natural `h1`, `h2`, etc. These styles scale based on the size of the screen, so for simplicity the class names will just be listed.
- `.dds__h1`
- `.dds__h2`
- `.dds__h3`
- `.dds__h4`
- `.dds__h5`
- `.dds__h6`

##Images
Apply the class `dds__img-fluid` in order to make images responsive to their parent container.

```CSS
.dds__img-fluid {
  max-width:100%;
  height:auto;
}
```
##Position
Quick positioning classes are available, though they are not responsive.
```CSS
.dds__position-static { position: static !important}
.dds__position-relative { position: relative !important}
.dds__position-absolute { position: absolute !important}
.dds__position-fixed { position: fixed !important}
.dds__position-sticky { position: sticky !important}
```

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```CSS
.dds__fixed-top{
  position:fixed;
  top:0;
  right:0;
  left:0;
  z-index:1030;
}
```
Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.
```CSS
.dds__fixed-bottom{
  position:fixed;
  right:0;
  bottom:0;
  left:0;
  z-index:1030;
}
```
Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The `.sticky-top` utility uses CSS’s `position: sticky`, which isn’t fully supported in all browsers.

IE11 and IE10 will render `position: sticky` as `position: relative`. As such, we wrap the styles in a `@supports` query, limiting the stickiness to only browsers that can render it properly.

```CSS
.dds__sticky-top{
  @supports (position: sticky){
    position:sticky;
    top:0;
    z-index:1020;
  }
}
```

##Rotate
Rotation classes are useful for rotating icons or SVGs, though they will rotate any element.
```CSS
.dds__rotate-45 { transform: rotate(45deg) !important}
.dds__rotate-90 { transform: rotate(90deg) !important}
.dds__rotate-135 { transform: rotate(135deg) !important}
.dds__rotate-180 { transform: rotate(180deg) !important}
.dds__rotate-225 { transform: rotate(225deg) !important}
.dds__rotate-270 { transform: rotate(270deg) !important}
.dds__rotate-315 { transform: rotate(315deg) !important}
```

##Screen Readers
Use sr-only class to hide something from the user visually, but allow screen readers to read out its content.
```CSS
.dds__sr-only {
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  overflow:hidden;
  clip:rect(0, 0, 0, 0);
  white-space:nowrap;
  border:0;
}
```

##Shadows
```CSS
.dds__shadow {0 0.5rem 1rem rgba(#000, 0.15) !important; }
.dds__shadow-sm { 0 0.125rem 0.25rem rgba(#000, 0.075)!important; }
.dds__shadow-lg {0 1rem 3rem rgba(#000, 0.175) !important; }
.dds__shadow-none {box-shadow: none !important; }
```

##Sizes
Set width and height of elements relative to their container with width and height utilities.

```CSS
.dds__w-25 {width: 25% !important; }
.dds__w-50 {width: 50% !important; }
.dds__w-75{width: 75% !important; }
.dds__w-100 {width: 100% !important; }

.dds__h-25 {height: 25% !important; }
.dds__h-50 {height: 50% !important; }
.dds__h-75 {height: 75% !important; }
.dds__h-100 {height: 100% !important; }
```

There are also utilities for max-width and max-height.
```CSS
.dds__mw-100{ max-width:100% !important; }
.dds__mh-100{ max-height:100% !important; }
```

##Spacing
Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `3rem`.

Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation. For the sake of simplicity, the responsive versions will not be listed for spacing.
The classes are named using the format `dds__{property}{sides}-{size}` for `xs` and `dds__{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

Where *property* is one of:
- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where `sides` is one of:
- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `l` - for classes that set `margin-left` or `padding-left`
- `r` - for classes that set `margin-right` or `padding-right`
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- `blank` - for classes that set a `margin` or `padding` on all 4 sides of the element
Where size is one of:
- `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
- `1` - (by default) for classes that set the `margin` or `padding` to `0.25rem`
- `2` - (by default) for classes that set the `margin` or `padding` to `.5rem`
- `3` - (by default) for classes that set the `margin` or `padding` to `1rem`
- `4` - (by default) for classes that set the `margin` or `padding` to `1.5rem`
- `5` - (by default) for classes that set the `margin` or `padding` to `3rem`
- `auto` - for classes that set the `margin` to `auto`

#####Padding
```CSS
.dds__p-0 {padding: 0rem !important; }
.dds__p-1 {padding: 0.25rem !important; }
.dds__p-2 {padding: 0.5rem !important; }
.dds__p-3 {padding: 1rem !important; }
.dds__p-4 {padding: 1.5rem !important; }
.dds__p-5 {padding: 3rem !important; }
.dds__p-auto {padding: auto !important; }
```
#####Top Padding

```CSS
.dds__pt-0 { padding-top: 0rem !important;}
.dds__pt-1 {padding-top: 0.25rem !important;}
.dds__pt-2 {padding-top: 0.5rem !important;}
.dds__pt-3 {padding-top: 1rem !important;}
.dds__pt-4 {padding-top: 1.5rem !important;}
.dds__pt-5 {padding-top: 3rem !important;}
.dds__pt-auto {padding-top: auto !important; }
```

#####Bottom Padding

```CSS
.dds__pb-0 { padding-bottom: 0rem !important;}
.dds__pb-1 {padding-bottom: 0.25rem !important;}
.dds__pb-2 {padding-bottom: 0.5rem !important;}
.dds__pb-3 {padding-bottom: 1rem !important;}
.dds__pb-4 {padding-bottom: 1.5rem !important;}
.dds__pb-5 {padding-bottom: 3rem !important;}
.dds__pb-auto {padding-bottom: auto !important; }

```

#####Right Padding

```CSS
.dds__pr-0 { padding-right: 0rem !important;}
.dds__pr-1 {padding-right: 0.25rem !important;}
.dds__pr-2 {padding-right: 0.5rem !important;}
.dds__pr-3 {padding-right: 1rem !important;}
.dds__pr-4 {padding-right: 1.5rem !important;}
.dds__pr-5 {padding-right: 3rem !important;}
.dds__pr-auto {padding-right: auto !important; }

```

#####Left Padding

```CSS
.dds__pl-0 { padding-left: 0rem !important;}
.dds__pl-1 {padding-left: 0.25rem !important;}
.dds__pl-2 {padding-left: 0.5rem !important;}
.dds__pl-3 {padding-left: 1rem !important;}
.dds__pl-4 {padding-left: 1.5rem !important;}
.dds__pl-5 {padding-left: 3rem !important;}
.dds__pl-auto {padding-left: auto !important;}

```

#####Vertical Padding (top + bottom)
```CSS
.dds__py-0  {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.dds__py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
.dds__py-2 {
	padding-top: 0.5rem !important;
	padding-bottom: 0.5rem !important
}
.dds__py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.dds__py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.dds__py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
```

#####Horizontal Padding (left + right)
```CSS
.dds__px-0  { 
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
.dds__px-1 {
  padding-right: 0.25rem !important;
	padding-left: 0.25rem !important;
}
.dds__px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}
.dds__px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.dds__px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}
.dds__px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}
```

#####Margins
```CSS
.dds__m-0 {margin: 0rem !important; }
.dds__m-1 {margin: 0.25rem !important; }
.dds__m-2 {margin: 0.5rem !important; }
.dds__m-3 {margin: 1rem !important; }
.dds__m-4 {margin: 1.5rem !important; }
.dds__m-5 {margin: 3rem !important; }
.dds__m-auto {margin: auto !important; }
```

#####Top Margins
```CSS
.dds__mt-0 { margin-top: 0rem !important;}
.dds__mt-1 {margin-top: 0.25rem !important;}
.dds__mt-2 {margin-top: 0.5rem !important;}
.dds__mt-3 {margin-top: 1rem !important;}
.dds__mt-4 {margin-top: 1.5rem !important;}
.dds__mt-5 {margin-top: 3rem !important;}
.dds__mt-auto {margin-top: auto !important; }
```

#####Bottom Margins
```CSS
.dds__mb-0 { margin-bottom: 0rem !important;}
.dds__mb-1 {margin-bottom: 0.25rem !important;}
.dds__mb-2 {margin-bottom: 0.5rem !important;}
.dds__mb-3 {margin-bottom: 1rem !important;}
.dds__mb-4 {margin-bottom: 1.5rem !important;}
.dds__mb-5 {margin-bottom: 3rem !important;}
.dds__mb-auto {margin-bottom: auto !important; }

```

#####Right Margins
```CSS
.dds__mr-0 { margin-right: 0rem !important;}
.dds__mr-1 {margin-right: 0.25rem !important;}
.dds__mr-2 {margin-right: 0.5rem !important;}
.dds__mr-3 {margin-right: 1rem !important;}
.dds__mr-4 {margin-right: 1.5rem !important;}
.dds__mr-5 {margin-right: 3rem !important;}
.dds__mr-auto {margin-right: auto !important; }
```

#####Left Margins
```CSS
.dds__ml-0 { margin-left: 0rem !important;}
.dds__ml-1 {margin-left: 0.25rem !important;}
.dds__ml-2 {margin-left: 0.5rem !important;}
.dds__ml-3 {margin-left: 1rem !important;}
.dds__ml-4 {margin-left: 1.5rem !important;}
.dds__ml-5 {margin-left: 3rem !important;}
.dds__ml-auto {margin-left: auto !important;}
```

#####Vertical Margins (top + bottom)
```CSS
.dds__my-0  {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
.dds__my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}
.dds__my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important
}
.dds__my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.dds__my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
.dds__my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}
```

#####Horizontal Margins (left + right)
```CSS
.dds__mx-0  {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.dds__mx-1 {
  margin-right: 0.25rem !important;
	margin-left: 0.25rem !important;
}
.dds__mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
.dds__mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}
.dds__mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
.dds__mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}
```


#####Margin Auto
Setting the horizontal and/or vertical margins to auto will center a fixed-width block level element - that is, content that has `display: block` and a `width` set—by setting the horizontal and/or vertical margins to `auto`.

The classes are named using the format `dds__m{sides}-auto` for `xs` and `dds__m{sides}-{breakpoint}-auto` for `sm`, `md`, `lg`, and `xl`.

Where *m* stands for margin and 
Where *sides* is one of:
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`

```CSS
.dds__my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.dds__mx-auto{ 
  margin-right:auto !important;
  margin-left: auto !important;
}
```

##Text

#####Text Align
```CSS
.dds__text-left{ text-align:left !important; }
.dds__text-right{ text-align:right !important; }
.dds__text-center{ text-align:center !important; }
.dds__text-justify{ text-align:justify !important; }
```

Responsive variations exist for all text-align classes, except  `dds__text-justify`.

- `.dds__text-sm-left{ text-align:left !important; }`
- `.dds__text-sm-right{ text-align:right !important; }`
- `.dds__text-sm-center{ text-align:center !important; }`

- `.dds__text-md-left{ text-align:left !important; }`
- `.dds__text-md-right{ text-align:right !important; }`
- `.dds__text-md-center{ text-align:center !important; }`

- `.dds__text-lg-left{ text-align:left !important; }`
- `.dds__text-lg-right{ text-align:right !important; }`
- `.dds__text-lg-center{ text-align:center !important; }`

- `.dds__text-xl-left{ text-align:left !important; }`
- `.dds__text-xl-right{ text-align:right !important; }`
- `.dds__text-xl-center{ text-align:center !important; }`

#####Capitalization
```CSS
.dds__text-lowercase{ text-transform:lowercase !important; }
.dds__text-uppercase{ text-transform:uppercase !important; }
.dds__text-capitalize{ text-transform:capitalize !important; }

```

#####Font Weight
```CSS
.dds__font-weight-light{ font-weight:300 !important; }
.dds__font-weight-normal{ font-weight:400 !important; }
.dds__font-weight-bold{ font-weight:700 !important; }
.dds__font-italic{ font-style:italic !important; }
```

#####Font Size
```CSS
.dds__small{
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25;
}
.dds__display-1{
  font-size: 4.375rem;
  font-weight: 300;
  line-height: 1.2;
}
.dds__display-2{
  font-size: 4.0625rem;
  font-weight: 300;
  line-height: 1.2;
}
.dds__display-3{
  font-size: 3.4375rem;
  font-weight: 300;
  line-height: 1.2;
}
.dds__display-4{
  font-size: 2.8125rem;
  font-weight: 300;
  line-height: 1.2;
}
```

#####Font Type
```CSS
.dds__text-monospace{ font-family:sfmono-regular,
  menlo,
  monaco,
  consolas,
  "Liberation Mono",
  "Courier New",
  monospace !default;
 }
```

#####Text Color
Change text color using `dds__text-{color}` 

Where *color* is one of:
- `primary` - for #0076ce
- `secondary`- for #eeeeee
- `success` - for #408001
- `purchase` - for #408001
- `danger`- for #ce1126
- `pink` - for #b7295a
- `white` - for #ffffff
- `granite` - for #c8c9c7
- `muted` - for #767676
- `body`- for #000000
`!important` is included to avoid specificity issues.
#####Text Background Color
```CSS
.dds__mark {
  background-color: #eeeee;
  padding: 0.2em;
}
```

#####Text Wrapping
```CSS
.dds__break-word {
  word-break: break-word;
  word-wrap: break-word;
}
.dds__text-wrap {white-space: normal;}
.dds__text-nowrap{ white-space:nowrap !important; }
.dds__text-truncate {max-width: 100%;}
```

##Visibility
Set the `visibility` of elements with our visibility utilities. These do not modify the `display` value at all and are helpful for hiding content from most users, but still keeping them for screen readers.

```CSS
.dds__visible {visibility: visible !important; }
.dds__invisible {	visibility: hidden !important; }
```