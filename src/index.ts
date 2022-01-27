import type { IPlugin } from '@lumino/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the quetz-theme extension.
 */
const extension: IPlugin<any, void> = {
  id: 'quetz-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: any, manager: IThemeManager) => {
    const style = 'quetz-theme/index.css';

    manager.register({
      name: 'Quetz',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(),
    });
  },
};

export default extension;
