const fs = require('fs');
const color = require('color');

const jsonReader = (filePath, cb) => {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }

    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
};

const colorParser = colorInput => {
  const rgbColor = color.rgb(colorInput).object();
  const red = (rgbColor.r / 255).toFixed(3);
  const green = (rgbColor.g / 255).toFixed(3);
  const blue = (rgbColor.b / 255).toFixed(3);

  const componentObject = {
    'color-space': 'srgb',
    components: {
      alpha: '1.000',
      blue,
      green,
      red,
    },
  };

  return componentObject;
};

const magicParser = (customer, squadName = 'UNK') => {
  const destinationDirectory = `./build/ios/${squadName}`;
  const rootContentJson = 'Contents.json';

  if (!fs.existsSync(destinationDirectory)) {
    fs.mkdirSync(destinationDirectory, { recursive: true });
  }

  if (!fs.existsSync(`${destinationDirectory}/${rootContentJson}`)) {
    const contentJsonData = {
      info: {
        author: 'xcode',
        version: 1,
      },
      properties: {
        'provides-namespace': true,
      },
    };

    fs.writeFileSync(
      `${destinationDirectory}/${rootContentJson}`,
      JSON.stringify(contentJsonData, null, 2),
      err => {
        if (err) console.log('Error writing file: ', err);
      }
    );
  }

  for (let a in customer) {
    if (a == 'Buttons') break;
    const token = customer[a];

    for (let b in token) {
      let colorsArray = [];
      const child = customer[a][b];
      const parsedColor = colorParser(child.value);

      let colorObject = {
        idiom: 'universal',
      };

      let appearanceObject = {
        appearances: [
          {
            appearance: 'luminosity',
            value: 'dark',
          },
        ],
        idiom: 'universal',
      };

      colorObject = { ...colorObject, color: parsedColor };
      appearanceObject = { ...appearanceObject, color: parsedColor };
      colorsArray.push(colorObject);
      colorsArray.push(appearanceObject);

      let mergedObject = {
        colors: colorsArray,
        info: {
          author: 'xcode',
          version: 1,
        },
      };

      fs.mkdir(`${destinationDirectory}/${a}${b}.colorset`, err => {
        if (err) {
          return console.error(err);
        }

        fs.writeFileSync(
          `${destinationDirectory}/${a}${b}.colorset/${rootContentJson}`,
          JSON.stringify(mergedObject, null, 2),
          err => {
            if (err) console.log('Error writing file: ', err);
          }
        );
      });
    }
  }
};

jsonReader('./src/resources/squad-oss.json', (err, customer) => {
  if (err) {
    console.log(err);
    return;
  }

  magicParser(customer, 'OSS');
});

jsonReader('./src/resources/squad-pertamina.json', (err, customer) => {
  if (err) {
    console.log(err);
    return;
  }

  magicParser(customer, 'PTM');
});
