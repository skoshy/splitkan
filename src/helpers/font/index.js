import { Platform } from 'react-native';

const fontMap = {
  Default: {
    regular: {
      android: {
        fontFamily: `Manrope Regular`,
      },
      ios: {
        fontFamily: `Manrope Regular`,
      },
    },
    bold: {
      android: {
        fontFamily: `MontserratBold`,
      },
      ios: {
        fontFamily: `Montserrat`,
        fontWeight: `bold`,
      },
    },
    light: {
      android: {
        fontFamily: `MontserratLight`,
      },
      ios: {
        fontFamily: `Montserrat`,
        fontWeight: `300`,
      },
    },
  },
  Secondary: {
    regular: {
      android: {
        fontFamily: `Muli`,
      },
      ios: {
        fontFamily: `Muli`,
      },
    },
    bold: {
      android: {
        fontFamily: `MuliBold`,
      },
      ios: {
        fontFamily: `Muli`,
        fontWeight: `bold`,
      },
    },
    light: {
      android: {
        fontFamily: `MuliLight`,
      },
      ios: {
        fontFamily: `Muli`,
        fontWeight: `300`,
      },
    },
  },
};
const fontMapCss = {}; // will be prepopulated

export function camelCaseToKebabCase(s) {
  let upperChars = s.match(/([A-Z])/g);
  if (!upperChars) {
    return s;
  }

  let str = s.toString();
  for (let i = 0, n = upperChars.length; i < n; i++) {
    str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
  }

  if (str.slice(0, 1) === '-') {
    str = str.slice(1);
  }

  return str;
}

// converts the object-based CSS to css strings for styled-components
(() => {
  const fontMapKeys = Object.keys(fontMap);

  for (let i = 0; i < fontMapKeys.length; i++) {
    let fontType = fontMapKeys[i];
    let fontTypeVal = fontMap[fontType];
    let fontTypeKeys = Object.keys(fontTypeVal);
    fontMapCss[fontType] = fontMapCss[fontType] ? fontMapCss[fontType] : {};

    for (let j = 0; j < fontTypeKeys.length; j++) {
      let fontStyle = fontTypeKeys[j];
      let fontStyleVal = fontTypeVal[fontStyle];
      let fontStyleKeys = Object.keys(fontStyleVal);
      fontMapCss[fontType][fontStyle] = fontMapCss[fontType][fontStyle] ? fontMapCss[fontType][fontStyle] : {};

      for (let k = 0; k < fontStyleKeys.length; k++) {
        let fontPlatform = fontStyleKeys[k];
        let fontPlatformVal = fontStyleVal[fontPlatform];
        let fontPlatformKeys = Object.keys(fontPlatformVal);
        fontMapCss[fontType][fontStyle][fontPlatform] = fontMapCss[fontType][fontStyle][fontPlatform] ? fontMapCss[fontType][fontStyle][fontPlatform] : ``;

        for (let l = 0; l < fontPlatformKeys.length; l++) {
          let fontProperty = fontPlatformKeys[l];
          let fontPropertyVal = fontPlatformVal[fontProperty];
          fontMapCss[fontType][fontStyle][fontPlatform] += `${camelCaseToKebabCase(fontProperty)}: ${fontPropertyVal}; `
        }
      }
    }
  }
})();

function getFontStyleHelper (fontName = ``, weight = `regular`, type = `object`) {
  const toReturn = {};
  const platform = Platform.OS;

  let mapToUse = fontMap;
  if (type === `css`) {
    mapToUse = fontMapCss;
  }

  if (mapToUse) {
    const selectedFont = mapToUse[fontName];
    if (typeof selectedFont !== `undefined`) {
      const selectedFontWithWeight = selectedFont[weight];
      if (typeof selectedFontWithWeight !== `undefined`) {
        const selectedFontWithWeightAndPlatform = selectedFontWithWeight[platform];
        if (typeof selectedFontWithWeightAndPlatform !== `undefined`) {
          return selectedFontWithWeightAndPlatform;
        }
      }
    }
  }

  return toReturn;
}

export function getFontStyle(fontName = ``, weight = `regular`) {
  return getFontStyleHelper(fontName, weight, `object`);
}

export function getFontStyleAsCss(fontName = ``, weight = `regular`) {
  return getFontStyleHelper(fontName, weight, `css`);
};
