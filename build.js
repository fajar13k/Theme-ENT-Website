const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
    name: 'css/variables',
    formatter: function (dictionary, config) {
      return `${this.selector} {
        ${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}
      }`
    }
  });  

const _ = require('lodash');
const fs = require('fs');

const typingsES6Template = _.template(
  fs.readFileSync(`${__dirname}/template/es6.template`)
);

StyleDictionaryPackage.registerFormat({
  name: 'typings/es6',
  formatter: typingsES6Template,
});


StyleDictionaryPackage.registerTransform({
    name: 'sizes/px',
    type: 'value',
    matcher: function(prop) {
        // You can be more specific here if you only want 'em' units for font sizes    
        return typeof prop.value !== "string";
    },
    transformer: function(prop) {
        // You can also modify the value here if you want to convert pixels to ems
        return parseFloat(prop.original.value) + 'px';
    }
    });

function getStyleDictionaryConfig(theme) {
  return {
    "source": [
      `src/resources/${theme}.json`,
    ],
    "platforms": {
      "web": {
        "transforms": ["attribute/cti", "name/cti/camel", "sizes/px"],
        "buildPath": `src/tokens/`,
        "files": [{
            "destination": `${theme}.ts`,
            "format": "typings/es6",
            "selector": `.${theme}-theme`
          }]
      },
      "ios": {
        "transforms": ["attribute/cti", "name/cti/camel", "color/rgb", "size/remToPt"],
        "buildPath": `src/ios/`,
        "files": [{
            "destination": `${theme}.json`,
            "format": "json/asset",
            "selector": `.${theme}-theme`
          }]
      }
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['foundation', 'squad-oss', 'squad-pertamina'].map(function (theme) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform('web');
    StyleDictionary.buildPlatform('ios');

    console.log('\nEnd processing');
})

console.log('\n==============================================');
console.log('\nBuild completed!');
