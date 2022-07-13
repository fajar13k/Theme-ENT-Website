const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
    name: 'test',
    formatter: function (dictionary, config) {
      return `${this.selector} {
        ${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}
      }`
    }
  });  

StyleDictionaryPackage.registerTransform({
    name: 'sizes/px',
    type: 'value',
    matcher: function(prop) {
        // You can be more specific here if you only want 'em' units for font sizes    
        return ["fontSize", "spacing", "borderRadius", "borderWidth", "sizing"].includes(prop.attributes.category);
    },
    transformer: function(prop) {
        // You can also modify the value here if you want to convert pixels to ems
        return parseFloat(prop.original.value) + 'px';
    }
    });

StyleDictionaryPackage.registerFormat({
  name: 'typescript/accurate',
  formatter: function(dictionary, config) {
    /*
      allProperties is an array containing all the matched
      tokens based on the filter.
    */
    const { allProperties } = dictionary

    /*
      Set up an empty object to hold the final shape to pass
      to the custom template.

      After the allProperties.map(), props will look like this:
      {
        'component-button': {
          padding: '16px',
          'font-size': '16px',
          'text-align': 'center',
          primary: { 'background-color': '#e63c19', color: '#ffffff' },
          secondary: { 'background-color': '#fad8d1', color: '#0000ff' }
        }
      }
    */
    const props = {}

    // go through properties and structure final props object
    allProperties.map(prop => {
      /*
        Extract the attributes object created by the 'attribute/cti'
        transform and the transformed token value.
      */
      const { attributes, value } = prop

      // extract attributes to build custom class and style rules
      const { category, type, item, subitem } = attributes

      // build main classname for .scss file
      const classname = `${category}_${type}`

      /*
        Add to the props object if it doesn't already exist.
        We run the check to see if the classname exists already as an
        object property because in our case, `classname` will be the
        same for each token object in allProperties because each token
        is under the same category and type.
      */
      if (!props.hasOwnProperty(classname)) {
        props[classname] = {}
      }

      /*
        If the token object has a subitem, use the item as the subclass.
        Run the same check to see if this particular subclass (item) has
        been added yet.
      */
      if (subitem) {
        if (!props[classname].hasOwnProperty(item)) {
          props[classname][item] = {}
        }

        // add the subitem and value as final CSS rule
        props[classname][item][subitem] = value
      }
      else {
        // add the item as a CSS rule, not a subclass
        props[classname][item] = value
      }
    })

    /*
      Pass the final `props` object to our custom template to render
      the contents for the final button.scss file.
    */
    return template({ props })
  }
});

function getStyleDictionaryConfig(theme) {
  return {
    "source": [
      `tokens/${theme}.json`,
    ],
    "platforms": {
      "web": {
        "transformGroup": "css",
        "buildPath": `output/`,
        "files": [{
            "destination": `${theme}.css`,
            "format": "typescript/accurate",
            "selector": `.${theme}-theme`
          }]
      }
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['foundation', 'agree-culture', 'agree-fisheries', 'agree-livestock', 'agree-market'].map(function (theme) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform('web');

    console.log('\nEnd processing');
})

console.log('\n==============================================');
console.log('\nBuild completed!');
