import type {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the quetz-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'quetz-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'quetz-theme/index.css';

    manager.register({
      name: 'Quetz',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined),
    });
  },
};

export default extension;
