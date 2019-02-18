
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


export function getFontStyle(fontName = ``, weight = `regular`) {
  const toReturn = {};
  const platform = Platform.OS;

  if (fontMap) {
    const selectedFont = fontMap[fontName];
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


export const devLog = (...toLog) => {
  if (__DEV__) {           // eslint-disable-line no-undef
    console.log(...toLog); // eslint-disable-line no-console
  }
};

export const isObject = (item) => {
  return (
    typeof item === `object`
    && !Array.isArray(item)
  );
};
