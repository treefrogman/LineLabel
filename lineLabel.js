( function main() {
	function lineLabel( path, text, layers, options ) {
		var svgNS = "http://www.w3.org/2000/svg";
		var element = document.createElementNS( svgNS, "svg" );
		var layerElements = [];
		var newLineLabelObject = {
			path: function ( newPath ) {
				if ( newPath == null ) {
					return path;
				} else {
					path = newPath;
				}
			},
			text: function ( newText ) {
				if ( newText == null ) {
					return text;
				} else {
					text = newText;
				}
			},
			layers: function ( newLayers ) {
				if ( newLayers == null ) {
					return layers;
				} else {
					layers = newLayers;
				}
			},
			options: function ( newOptions ) {
				if ( newOptions == null ) {
					return options;
				} else {
					// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
					Object.keys( newOptions ).forEach( function ( key ) {
						options[ key ] = newOptions[ key ];
					} );
					// I think this does exactly what I want, including allowing you to reset an option to default by setting it to null.
				}
			},
			element: function () {
				return element;
			},
			update: function () {
				// This is where the magic will happen.
				console.log( "Wish real hard on those magic beans!" );
				layerElements
				// Okay, so I need to create an element for each item in the layers array, and put those elements in the layerElements array. I have a conundrum: do I blindly rebuild that set of elements each time, or do I intelligently update only what I need to to satisfy changes in the layers array?
				// I think the answer is an internal function updateLayers, triggered in the options method when the newOptions object contains a non-null layers array.
				element.
			}
		};
		var defaults = {
			trim: [ 0, 0 ],
			flip: 0b00,
			margins: [ 0, 0 ],
			yOffset: 0,
			spacing: [ 0, 68 ],
			single: false,
			align: null
		};
		// Retrieve a parameter by first checking the options object, then defaulting to the defaults obect.
		function fallback( propertyName, fallbackTriage ) {
			return ( fallbackTriage[ 0 ].hasOwnProperty( propertyName ) && fallbackTriage[ 0 ][ parameterName ] != null ) ? fallbackTriage[ 0 ][ parameterName ] : fallback( propertyName, fallbackTriage.slice( 1 ) );
		}
		function getParameter( parameterName ) {
			return fallback( parameterName, [ options, defaults ] );
		}

		return newLineLabelObject;
	}

	module.exports = lineLabel;
}() );
