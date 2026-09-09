import { Meta, StoryObj } from '@storybook/react-vite';
import './style.css';

import { ProgressList } from './tsx-fragments/ProgressList';
import { Scenario1Fragment } from './tsx-fragments/Scenario1';
import { Scenario2Fragment } from './tsx-fragments/Scenario2';
import { Scenario3Fragment } from './tsx-fragments/Scenario3';
import { Scenario4Fragment } from './tsx-fragments/Scenario4';
import { LosseStatesFragment } from './tsx-fragments/States';

const meta: Meta = {
  title: 'Concepts/Progress List',
  parameters: {
    docs: {
      description: {
        component: 'Concept-opzet voor het Progress List-component.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const VoorbeeldVolledigeLijstStory: Story = {
  name: 'Voorbeeld: volledige lijst',
  render: () => <ProgressList />,
};

export const Scenario1: Story = {
  name: 'Scenario 1: substep met achtergrond + link',
  render: () => <Scenario1Fragment />,
};

export const Scenario2: Story = {
  name: 'Scenario 2: substep met platte paragraaf',
  render: () => <Scenario2Fragment />,
};

export const Scenario3: Story = {
  name: 'Scenario 3: substeps zonder body',
  render: () => <Scenario3Fragment />,
};

export const Scenario4: Story = {
  name: 'Scenario 4: extra items voor/na',
  render: () => <Scenario4Fragment />,
};

export const LosseStates: Story = {
  name: 'Losse states',
  render: () => <LosseStatesFragment />,
};
