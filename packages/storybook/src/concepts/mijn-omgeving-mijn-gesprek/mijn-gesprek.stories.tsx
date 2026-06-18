import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { Meta, StoryObj } from '@storybook/react-vite';
import { IconInfoCircle } from '@tabler/icons-react';
import { Alert } from '@utrecht/component-library-react/dist/css-module';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/theme.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import { Layout } from '../../components/Layout';
import { PageHeaderLogo, VoorbeeldFooterLogo } from '../../components/Logo';

const meta = {
  title: 'Concepts/MijnGesprek',
  globals: {
    dir: 'ltr',
    lang: 'nl',
  },
  id: 'concepts-mijngesprek',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  parameters: {
    theme: 'voorbeeld-theme',
  },
  render: () => (
    <Layout logo={<PageHeaderLogo />} footerLogo={<VoorbeeldFooterLogo />}>
      <main id="main">
        <Alert type="warning" icon={<IconInfoCircle className="utrecht-icon" />}>
          <Heading level={1} appearance="level-3">
            Concept
          </Heading>
          <Paragraph>
            MijnGesprek template is nog in ontwikkeling. Het design is vastgesteld, maar de implementatie loopt nog.
            Gebruik dit nog niet als startpunt voor een gemeente-implementatie.
          </Paragraph>
        </Alert>
        {/* TODO: MijnGesprek content */}
      </main>
    </Layout>
  ),
};
