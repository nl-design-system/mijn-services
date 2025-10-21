import { addons, types } from '@storybook/manager-api';
import { useStorybookState } from '@storybook/manager-api';
import React, { useRef, useState } from 'react';

addons.register('my/panel', () => {
  addons.add('my-panel-addon/panel', {
    title: 'Jouw huisstijl',
    type: types.TAB, //another option is using a panel but its much less visible to non power users
    route: () => `/design-tokens`,
    match: ({ viewMode }) => viewMode === 'design-tokens',
    render: () => <DesignTokenUploaderTab />,
  });
});

const DesignTokenUploaderTab = () => {
  const [themeName, setThemeName] = useState<string>();
  const { storyId } = useStorybookState();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeUrl = `/iframe.html?id=${storyId}&viewMode=story`;
  const themeElementRef = useRef<HTMLElement | null>(null);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result as string;

      if (fileContent) {
        console.log('File content successfully read:', fileContent);

        const themeMatch = fileContent.match(/(\.[\w-]+)/);
        if (themeMatch) {
          const themeSelector = themeMatch[1];
          setThemeName(formatSelectorAsThemeName(themeSelector));

          console.log(`Extracted theme selector: ${themeSelector}`);

          if (iframeRef.current) {
            const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
            if (iframeDoc) {
              applyCustomTheme(iframeDoc, themeSelector, fileContent);
            }
          }
        } else {
          console.error('Failed to extract a valid theme selector from the file.');
        }
      } else {
        console.error('No file content was read.');
      }
    };

    reader.readAsText(file);
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const applyCustomTheme = (iframeDoc: Document, customTheme: string, fileContent: string) => {
    const themeElement = iframeDoc.querySelector("[class$='-theme']");

    if (themeElement) {
      console.log('Found theme element:', themeElement);

      themeElementRef.current = themeElement as HTMLElement;

      const oldThemeClass = Array.from(themeElement.classList).find((c) => c.endsWith('-theme'));
      if (oldThemeClass) {
        themeElement.classList.remove(oldThemeClass);
      }

      themeElement.classList.add(customTheme.replace('.', ''));

      const styleElement = document.createElement('style');
      styleElement.innerHTML = fileContent;
      themeElement.appendChild(styleElement);

      console.log(`Applied new theme: ${customTheme} and dumped all CSS.`);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{ padding: '20px', background: '#444', borderBottom: '1px solid #ccc', marginBlockStart: '8px' }}
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <h2>
          Upload eigen huisstijl: <span>Actief: {themeName || 'Geen eigen thema'}</span>
        </h2>
        <p>Je kan je eigen huisstijl testen met een template door middel van een theme.css bestand.</p>
        <input
          type="file"
          accept=".css"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleFileUpload(e.target.files[0]);
            }
          }}
        />
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
        <iframe
          id="storybook-canvas"
          title="Storybook Canvas"
          src={iframeUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            margin: '0',
            padding: '0',
            background: 'white',
          }}
          ref={iframeRef}
        />
      </div>
    </div>
  );
};

const formatSelectorAsThemeName = (selector: string) => {
  return selector
    .replace('.', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
