import { presetPalettes } from '@ant-design/colors/es';
import { colors as unoColors } from '@unocss/preset-mini/colors';

/**
 *   To make UnoCss color matched with Ant Design we need to getAntDesign to unocss.config.ts
 *   Do not change antdColorToken direct, when config/defaultSettings-> themeConfig change Antd token the color will be update,
 *  so please copy new update from useToken() or click on dev tools then copy from UI
 *   const { token } = theme.useToken();
     console.log(token);
     !WARN: change it please restart dev server by run: yarn dev
 */
export const antdTheme = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911',
  colorPrimary: '#fed12e',
  colorSuccess: '#019e00',
  colorWarning: '#faad14',
  colorError: '#cb1132',
  colorInfo: '#fed12e',
  colorTextBase: '#000000',
  colorBgBase: '#ffffff',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
  fontSize: 14,
  lineWidth: 1,
  lineType: 'solid',
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  borderRadius: 5,
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  opacityImage: 1,
  wireframe: false,
  colorPrimaryHover: '#D9AA1C',
  colorTextSecondary: '#878787',
  colorBorder: '#F1F1F1',
  colorBgSpotlight: '#505050',
  colorPrimaryActive: '#FED12E',
  colorPrimaryText: '#FED12E',
  colorPrimaryTextActive: '#FED12E',
  fontSizeHeading1: 46,
  'blue-1': '#e6f4ff',
  'blue-2': '#bae0ff',
  'blue-3': '#91caff',
  'blue-4': '#69b1ff',
  'blue-5': '#4096ff',
  'blue-6': '#1677ff',
  'blue-7': '#0958d9',
  'blue-8': '#003eb3',
  'blue-9': '#002c8c',
  'blue-10': '#001d66',
  'purple-1': '#f9f0ff',
  'purple-2': '#efdbff',
  'purple-3': '#d3adf7',
  'purple-4': '#b37feb',
  'purple-5': '#9254de',
  'purple-6': '#722ed1',
  'purple-7': '#531dab',
  'purple-8': '#391085',
  'purple-9': '#22075e',
  'purple-10': '#120338',
  'cyan-1': '#e6fffb',
  'cyan-2': '#b5f5ec',
  'cyan-3': '#87e8de',
  'cyan-4': '#5cdbd3',
  'cyan-5': '#36cfc9',
  'cyan-6': '#13c2c2',
  'cyan-7': '#08979c',
  'cyan-8': '#006d75',
  'cyan-9': '#00474f',
  'cyan-10': '#002329',
  'green-1': '#f6ffed',
  'green-2': '#d9f7be',
  'green-3': '#b7eb8f',
  'green-4': '#95de64',
  'green-5': '#73d13d',
  'green-6': '#52c41a',
  'green-7': '#389e0d',
  'green-8': '#237804',
  'green-9': '#135200',
  'green-10': '#092b00',
  'magenta-1': '#fff0f6',
  'magenta-2': '#ffd6e7',
  'magenta-3': '#ffadd2',
  'magenta-4': '#ff85c0',
  'magenta-5': '#f759ab',
  'magenta-6': '#eb2f96',
  'magenta-7': '#c41d7f',
  'magenta-8': '#9e1068',
  'magenta-9': '#780650',
  'magenta-10': '#520339',
  'pink-1': '#fff0f6',
  'pink-2': '#ffd6e7',
  'pink-3': '#ffadd2',
  'pink-4': '#ff85c0',
  'pink-5': '#f759ab',
  'pink-6': '#eb2f96',
  'pink-7': '#c41d7f',
  'pink-8': '#9e1068',
  'pink-9': '#780650',
  'pink-10': '#520339',
  'red-1': '#fff1f0',
  'red-2': '#ffccc7',
  'red-3': '#ffa39e',
  'red-4': '#ff7875',
  'red-5': '#ff4d4f',
  'red-6': '#f5222d',
  'red-7': '#cf1322',
  'red-8': '#a8071a',
  'red-9': '#820014',
  'red-10': '#5c0011',
  'orange-1': '#fff7e6',
  'orange-2': '#ffe7ba',
  'orange-3': '#ffd591',
  'orange-4': '#ffc069',
  'orange-5': '#ffa940',
  'orange-6': '#fa8c16',
  'orange-7': '#d46b08',
  'orange-8': '#ad4e00',
  'orange-9': '#873800',
  'orange-10': '#612500',
  'yellow-1': '#feffe6',
  'yellow-2': '#ffffb8',
  'yellow-3': '#fffb8f',
  'yellow-4': '#fff566',
  'yellow-5': '#ffec3d',
  'yellow-6': '#fadb14',
  'yellow-7': '#d4b106',
  'yellow-8': '#ad8b00',
  'yellow-9': '#876800',
  'yellow-10': '#614700',
  'volcano-1': '#fff2e8',
  'volcano-2': '#ffd8bf',
  'volcano-3': '#ffbb96',
  'volcano-4': '#ff9c6e',
  'volcano-5': '#ff7a45',
  'volcano-6': '#fa541c',
  'volcano-7': '#d4380d',
  'volcano-8': '#ad2102',
  'volcano-9': '#871400',
  'volcano-10': '#610b00',
  'geekblue-1': '#f0f5ff',
  'geekblue-2': '#d6e4ff',
  'geekblue-3': '#adc6ff',
  'geekblue-4': '#85a5ff',
  'geekblue-5': '#597ef7',
  'geekblue-6': '#2f54eb',
  'geekblue-7': '#1d39c4',
  'geekblue-8': '#10239e',
  'geekblue-9': '#061178',
  'geekblue-10': '#030852',
  'gold-1': '#fffbe6',
  'gold-2': '#fff1b8',
  'gold-3': '#ffe58f',
  'gold-4': '#ffd666',
  'gold-5': '#ffc53d',
  'gold-6': '#faad14',
  'gold-7': '#d48806',
  'gold-8': '#ad6800',
  'gold-9': '#874d00',
  'gold-10': '#613400',
  'lime-1': '#fcffe6',
  'lime-2': '#f4ffb8',
  'lime-3': '#eaff8f',
  'lime-4': '#d3f261',
  'lime-5': '#bae637',
  'lime-6': '#a0d911',
  'lime-7': '#7cb305',
  'lime-8': '#5b8c00',
  'lime-9': '#3f6600',
  'lime-10': '#254000',
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
  colorFill: 'rgba(0, 0, 0, 0.15)',
  colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
  colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
  colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
  colorBgLayout: '#f5f5f5',
  colorBgContainer: '#ffffff',
  colorBgElevated: '#ffffff',
  colorBorderSecondary: '#f0f0f0',
  colorPrimaryBg: '#fffef0',
  colorPrimaryBgHover: '#fffbd1',
  colorPrimaryBorder: '#fff5a8',
  colorPrimaryBorderHover: '#ffec80',
  colorPrimaryTextHover: '#ffe057',
  colorSuccessBg: '#cbdec8',
  colorSuccessBgHover: '#90d186',
  colorSuccessBorder: '#68c45e',
  colorSuccessBorderHover: '#43b83b',
  colorSuccessHover: '#43b83b',
  colorSuccessActive: '#007804',
  colorSuccessTextHover: '#20ab1b',
  colorSuccessText: '#019e00',
  colorSuccessTextActive: '#007804',
  colorErrorBg: '#ffe6e6',
  colorErrorBgHover: '#ffb8bb',
  colorErrorBorder: '#f28891',
  colorErrorBorderHover: '#e65c6c',
  colorErrorHover: '#d9344d',
  colorErrorActive: '#a60528',
  colorErrorTextHover: '#d9344d',
  colorErrorText: '#cb1132',
  colorErrorTextActive: '#a60528',
  colorWarningBg: '#fffbe6',
  colorWarningBgHover: '#fff1b8',
  colorWarningBorder: '#ffe58f',
  colorWarningBorderHover: '#ffd666',
  colorWarningHover: '#ffd666',
  colorWarningActive: '#d48806',
  colorWarningTextHover: '#ffc53d',
  colorWarningText: '#faad14',
  colorWarningTextActive: '#d48806',
  colorInfoBg: '#fffef0',
  colorInfoBgHover: '#fffbd1',
  colorInfoBorder: '#fff5a8',
  colorInfoBorderHover: '#ffec80',
  colorInfoHover: '#ffec80',
  colorInfoActive: '#d9aa1c',
  colorInfoTextHover: '#ffe057',
  colorInfoText: '#fed12e',
  colorInfoTextActive: '#d9aa1c',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',
  colorWhite: '#fff',
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  sizeXXL: 48,
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 4,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  motionDurationFast: '0.1s',
  motionDurationMid: '0.2s',
  motionDurationSlow: '0.3s',
  lineWidthBold: 2,
  borderRadiusXS: 1,
  borderRadiusSM: 4,
  borderRadiusLG: 6,
  borderRadiusOuter: 4,
  Select: { controlItemBgActive: '#FCE59680' },
  Menu: { controlItemBgActive: '#fffef0' },
  Slider: { colorPrimaryBorder: '#fed12e' },
  Tag: { colorSuccessBg: '#ecfbeb' },
  Alert: { colorSuccessBg: '#ebf7e9' },
  Button: {
    colorLink: '#E1A900',
    colorTextDisabled: '#B0B0B0',
    colorTextLightSolid: '#000000',
  },
  Typography: { colorWarning: '#FED12E' },
  colorLink: '#fed12e',
  colorLinkHover: '#ffec80',
  colorLinkActive: '#d9aa1c',
  colorFillContent: 'rgba(0, 0, 0, 0.06)',
  colorFillContentHover: 'rgba(0, 0, 0, 0.15)',
  colorFillAlter: 'rgba(0, 0, 0, 0.02)',
  colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
  colorBorderBg: '#ffffff',
  colorSplit: 'rgba(5, 5, 5, 0.06)',
  colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
  colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
  colorTextHeading: 'rgba(0, 0, 0, 0.88)',
  colorTextLabel: '#878787',
  colorTextDescription: 'rgba(0, 0, 0, 0.45)',
  colorTextLightSolid: '#fff',
  colorHighlight: '#cb1132',
  colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
  colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
  colorIcon: 'rgba(0, 0, 0, 0.45)',
  colorIconHover: 'rgba(0, 0, 0, 0.88)',
  colorErrorOutline: 'rgba(255, 5, 5, 0.1)',
  colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
  fontSizeIcon: 12,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
  controlItemBgActive: '#fffef0',
  controlItemBgActiveHover: '#fffbd1',
  controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.15)',
  controlTmpOutline: 'rgba(0, 0, 0, 0.02)',
  controlOutline: 'rgba(255, 238, 5, 0.06)',
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: 'none',
  linkHoverDecoration: 'none',
  linkFocusDecoration: 'none',
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  padding: 16,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,
  paddingContentHorizontalLG: 24,
  paddingContentVerticalLG: 16,
  paddingContentHorizontal: 16,
  paddingContentVertical: 12,
  paddingContentHorizontalSM: 16,
  paddingContentVerticalSM: 8,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  margin: 16,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow:
    '\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ',
  boxShadowSecondary:
    '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 575,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 767,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 991,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 1199,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1599,
  screenXXL: 1600,
  screenXXLMin: 1600,
  boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
  boxShadowCard:
    '\n      0 1px 2px -2px rgba(0, 0, 0, 0.16),\n      0 3px 6px 0 rgba(0, 0, 0, 0.12),\n      0 5px 12px 4px rgba(0, 0, 0, 0.09)\n    ',
  boxShadowDrawerRight:
    '\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ',
  boxShadowDrawerLeft:
    '\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ',
  boxShadowDrawerUp:
    '\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
  boxShadowDrawerDown:
    '\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ',
  boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
  _tokenKey: 'rk817s',
  _hashId: 'css-dev-only-do-not-override-19iwq9',
};

export const antdColorToken = () => {
  let colors1 = {};
  Object.keys(antdTheme)
    .filter((i) => i.includes('color'))
    .forEach((key) => {
      const draftColor = { [key]: antdTheme?.[key as 'colorPrimary'] || '' };
      colors1 = {
        ...colors1,
        ...draftColor,
      };
    });
  return colors1 as typeof antdTheme;
};

/**
 * Deep merge two objects.
 * @param target
 */
//@ts-ignore
function mergeDeep(target: any, ...sources: any) {
  function isObject(item: any) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const antdColors = () => {
  let antdColor1 = {};
  let colorValue = {};

  Object.keys(presetPalettes).forEach((colorKey) => {
    presetPalettes[colorKey].forEach((newColor, ind) => {
      colorValue = {
        ...colorValue,
        [ind + 1]: newColor,
        primary: presetPalettes[colorKey].primary,
      };
    }),
      (antdColor1 = {
        ...antdColor1,
        [colorKey]: colorValue,
      });
  });

  return antdColor1;
};

/**
 * deep merge antd colors with Uno present
 */
export const antdUnoColor = (): typeof antdTheme => {
  return mergeDeep(antdColors(), unoColors, antdColorToken());
};
