const lineLabel = require( './lineLabel' );
const svgNS = 'http://www.w3.org/2000/svg';

describe( 'creating a lineLabel object... testing the methods', () => {
    const labelText = "My Label Test";
    const labelTextAlt = "My Other Label Test";
    const pathData = "M3,3 C12,3 3,9 12,9 z";
    const pathDataAlt = "M3,9 C12,9 3,3 12,3 z";
    const svgPathElement = document.createElementNS( svgNS, "path" );
    const svgPathElementAlt = document.createElementNS( svgNS, "path" );
    svgPathElement.setAttribute( 'd', pathData );
    svgPathElementAlt.setAttribute( 'd', pathDataAlt );
    const layerList = [
        { element: 'text', class: 'labelText' },
        { element: 'back', class: 'labelBack' }
    ];
    const layerListAlt = [
        { element: 'text', class: 'labelTextAlt' },
        { element: 'back', class: 'labelBackAlt' },
        { element: 'back', class: 'labelBorderAlt' }
    ];
    const options = {
        flip: 0b10,
        trim: [ 1, 0 ],
        spacing: [ 2, 22 ]
    };
    const optionsAlt = {
        flip: 0b01,
        margins: [ 2, 6 ],
        spacing: null
    };
    const optionsAltCombo = {
        flip: 0b01,
        trim: [ 1, 0 ],
        margins: [ 2, 6 ]
    };
    const myLabel = lineLabel( svgPathElement, labelText, layerList, options );
    ( [
        {
            name: 'path',
            originalValue: svgPathElement,
            alternateValue: svgPathElementAlt
        },
        {
            name: 'text',
            originalValue: labelText,
            alternateValue: labelTextAlt
        },
        {
            name: 'layers',
            originalValue: layerList,
            alternateValue: layerListAlt
        }
    ] ).forEach( ( method ) => {
        test( 'get, set, get the ' + method.name, () => {
            expect( myLabel[ method.name ]() ).toBe( method.originalValue );
            expect( () => {
                myLabel[ method.name ]( method.alternateValue );
            } ).not.toThrow();
            expect( myLabel[ method.name ]() ).toEqual( method.alternateValue );
        } );
    } );
    test( 'get, ammend, get the options', () => {
        expect( myLabel.options() ).toBe( options );
        expect( () => {
            myLabel.options( optionsAlt );
        } ).not.toThrow();
        expect( myLabel.options() ).toEqual( optionsAltCombo );
    } );
    test( 'get the element', () => {
        const element = myLabel.element();
        expect( element ).toBeInstanceOf( SVGElement );
    } );
    test( 'update layers', () => {
        const element = myLabel.element();

        myLabel.layers( layerList );
        myLabel.update();
        expect( element.children.length ).toBe( layerList.length );

        myLabel.layers( layerListAlt );
        expect( element.children.length ).toBe( layerList.length );
        myLabel.update();
        expect( element.children.length ).toBe( layerListAlt.length );
        expect( element.children[ 0 ].className ).toBe( layerListAlt[ 0 ].class );
    } );
    // test( 'update path', () => {
    //     const element = myLabel.element();
    //     myLabel.path( svgPathElement );
    //     myLabel.update();
    //     expect( element.children[ 0 ]. ).toBe( layerList.length );
    //     myLabel.layers( layerListAlt );
    //     expect( element.children.length ).toBe( layerList.length );
    //     myLabel.update();
    //     expect( element.children.length ).toBe( layerListAlt.length );
    //     expect( element.children[ 0 ].className ).toBe( layerListAlt[ 0 ].class );
    // } );
} );
