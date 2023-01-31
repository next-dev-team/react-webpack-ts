import './src/@types/global.d';
import { antdUnoColor } from './src/theme/colors';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import { defineConfig, presetIcons, presetUno } from 'unocss';

const customColor = antdUnoColor();

const selectTheme = (
  theme: any,
  color: LiteralUnion<keyof typeof customColor, string>,
  type?: 'bg-' | 'text-',
) => {
  const themeColor = theme?.colors?.[color as any];
  return type ? type + themeColor : themeColor;
};

export function createConfig({ dev = true } = {}) {
  return defineConfig({

    // watch file change

    envMode: dev ? 'dev' : 'build',
    presets: [
      presetUno(),
      presetIcons({
        prefix: '',
        collections: {
          // a helper to load icons from the file system
          // files under `./assets/icons` with `.svg` extension will be loaded as it's file name
          // you can also provide a transform callback to change each icon (optional)
          i: FileSystemIconLoader('tools/svg'),
          // key as the collection name
          //  i: {
          //   // load your custom icon lazily
          //   book: () => fs.readFile('tools/svg/book.svg', 'utf-8'),
          // },
        },
        customizations: {
          transform(svg, collection, icon) {
            // reset fill color
            if (collection === 'i' && icon === 'logo')
              return svg.replace(/white/, 'currentColor');

            return svg;
          },
        },
      }),
    ],
    // transformers: [transformerDirectives()],
    theme: {
      colors: {
        // veryCool: '#0000ff', // class="text-very-cool bg-very-cool",
        ...(customColor || {}),
      },
    },
    rules: [
      [
        /bg-linear-colorPrimary/,
        (_, { }) => {
          return {
            background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(254, 209, 46, 0.2) 0%, rgba(255, 225, 115, 0.2) 77.08%, rgba(255, 255, 255, 0.2) 100%)`,
            'background-blend-mode': `overlay, normal`,
            'backdrop-filter': `blur(50px)`,
          };
        },
      ],
      [
        /bg-linear-t-colorPrimary/,
        (_, { theme }) => {
          return {
            background: `linear-gradient(180deg,  ${selectTheme(
              theme,
              'colorPrimary',
            )} 6.1%, rgba(254, 209, 46, 0) 186.23%)`,
          };
        },
      ],
      [
        /bg-linear-b-colorPrimary/,
        (_, { theme }) => {
          return {
            background: `linear-gradient(2.05deg, ${selectTheme(
              theme,
              'colorPrimary',
            )} 2.14%, ${selectTheme(theme, 'colorBgBase')} 176.48%)`,
          };
        },
      ],
      [
        /bg-linear-colorSuccess/,
        (_, { theme }) => {
          return {
            background: `linear-gradient(153.95deg,  ${selectTheme(
              theme,
              'colorSuccess',
            )} 37.79%, rgba(255, 255, 255, 0) 122.9%)`,
          };
        },
      ],
      [
        /bg-linear-filter-colorSuccess/,
        (_, { theme }) => {
          return {
            background: `linear-gradient(153.95deg, ${selectTheme(
              theme,
              'colorSuccess',
            )} 37.79%, rgba(255, 255, 255, 0) 122.9%)`,
            filter: `drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25))`,
          };
        },
      ],
    ],
  });
}

export default createConfig();
