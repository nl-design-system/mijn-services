import type { Preview } from '@storybook/react-vite';
import '@utrecht/root-css';
import { Root } from '@utrecht/root-react';
import { useEffect } from 'react';
import { StoryRootDecorator } from './StoryRootDecorator';

interface StoryParameters {
  theme?: string;
}

interface StoryArgs {
  theme?: string;
}

const withTheme = (Story: any, { parameters, args }: { parameters: any; args: any }) => {
  const theme = (parameters as StoryParameters).theme || (args as StoryArgs).theme;

  useEffect(() => {
    // document.documentElement.classList.add('utrecht-root');

    let previousTheme: string | null = null;

    if (theme) {
      previousTheme = document.documentElement.className.split(' ').find((cls) => cls.endsWith('-theme')) || null;

      if (previousTheme && previousTheme !== theme) {
        document.documentElement.classList.remove(previousTheme);
      }
      document.documentElement.classList.add(theme);
    }

    return () => {
      document.documentElement.classList.remove('utrecht-root');
      document.body.classList.remove('utrecht-body');
      if (theme) {
        document.documentElement.classList.remove(theme);
      }
    };
  }, [theme]);

  return <Story />;
};

const preview: Preview = {
  decorators: [
    (Story, options) => {
      return options.parameters['isPage'] ? (
        <Root Component="div">{Story()}</Root>
      ) : (
        <Root Component="div">{Story()}</Root>
      );
    },
    StoryRootDecorator,
    withTheme,
  ],
  parameters: {
    controls: { expanded: false },
    options: {
      panelPosition: 'right',
      storySort: {
        order: [
          'MijnServices',
          'Templates',
          ['Mijn Omgeving', ['Basis', 'Overzichtspagina', 'Zaakdetailpagina'], 'Mijn Profiel'],
        ],
      },
    },
  },
};

export default preview;
