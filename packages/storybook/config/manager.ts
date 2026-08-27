// This hackey (hopefully temporary) workaround makes sure the "MijnOmgeving" folder in sidebar is expanded by default.
// Storybook does not have a built-in option for this.
// If "MijnOmgeving" ever changes (prob not) this file also needs to be updated.

import { addons } from 'storybook/manager-api';

addons.register('auto-expand-mijnomgeving', () => {
  const MAX_ATTEMPTS = 20; // 20 * 100ms = 2 seconds

  let attempts = 0;

  const expandFolder = () => {
    const folderButton = Array.from(document.querySelectorAll('button')).find(
      (el) => el.textContent?.trim() === 'MijnOmgeving',
    );

    if (folderButton) {
      if (folderButton.getAttribute('aria-expanded') === 'false') {
        folderButton.click();
      }
      return;
    }

    attempts += 1;
    if (attempts < MAX_ATTEMPTS) {
      setTimeout(expandFolder, 100);
    }
  };

  expandFolder();
});
