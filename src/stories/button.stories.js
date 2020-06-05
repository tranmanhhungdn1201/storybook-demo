import React from 'react';
import ButtonCricle from '../components/ButtonCricle';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

export const defaultPlus = () => <ButtonCricle/>;

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);