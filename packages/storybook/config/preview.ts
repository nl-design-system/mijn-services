import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
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
