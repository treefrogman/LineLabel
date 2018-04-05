![LineLabel logo](line-label-logo.jpg)
# LineLabel
JavaScript library for adding inline labels to any SVG path

# Constructor

```js
new LineLabel( path, text, [ opts = {
	...
} ] );
```
## Parameters
- `path`  
	The SVG element to which the label shall be shaped.
	
- `text`  
	The text content of the label.
	
- `opts`  
	The optional options.
## Options
- `trim: [ 0, 0 ]`  
	For the purpose of calculating lengths and positions, pretend the path is longer or shorter on each end. Lengths are in pixels; positive numbers shorten the path.
	
- `flip: 0b00`  
	Flip the text before shaping it to the path. A pair of bits representing horizontal and vertical flip respectively. Margins and baseline shift are flipped as well.
	
- `margins: [ 0, 0 ]`  
	Increase (or decrease) margins on left and right ends of text. Lengths are in pixels; positive numbers lengthen the background.
	
- `yOffset: 0`  
	Adjust the baseline shift / y offset. Positive numbers raise text.

- `spacing: [ min = 0, max = 68 ]`  
	Minimum and maximum spacing for multiple labels along the path. For short paths only a single centered label is drawn, or nothing if the space is too small. If there's room with `min` between, the one label is replaced with a label at each end of the path. When those labels are more than `max` apart, another label is added in between. This patterns goes on, distributing labels along the path so they are never more than `max` apart.

- `single: false`  
	Disable the aforementioned label distribution method, and create a single label instead.

- `align: left | center | right` (only applicable in `single` mode)  
	Align the label on the path. `trim`, `flip`, and `margins` are taken into account in calculating the final placement.



# Methods
#### `path( [ path ] )`
Get or set the SVG element to which the label shall be shaped. If set, update all graphical components.

#### `text( [ text ] )`
Get or set the text content of the label. If set, update all graphical components.

#### `opts( [ opts ] )`
- With argument
	- Get or set the options. If set, update all graphical components.
- With argument
	- Set options. To reset an option to default, assign a value of `null` to it in the options object. To reset all, call `opts( null )`.

#### `element()`
Return an SVG group element containing all graphical components.

#### `update()`
Update all graphical components. Should be called manually after making any changes to the label or the path's `d` attribute.


# Roadmap
A good bit of the functionality has [already been implemented inside Nøde](https://github.com/treefrogman/NodeOpDevEnvironment/blob/master/js/connector.js), but needs to be refactored and made more customizable.

The API has been specified, but needs review and possible refinement before moving into development.

After finalizing the API, I would like to write a test suite before diving into the thick of it. I need to research options for graphical testing.
