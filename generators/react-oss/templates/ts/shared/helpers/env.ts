import { AbstractEnvSelect } from '@jswork/env-select';

export class Env extends AbstractEnvSelect {
  static ENV_SELECTORS = {
    beta: 'www-beta.demo.com',
    staging: 'www-staging.demo.com',
    production: 'www.demo.com',
  };

  /**
   * Auto select env by current url.
   * @returns {string} The target env string.
   */
  static select(): string {
    const url = window.location.href;
    let env = 'beta';

    for (const key in Env.ENV_SELECTORS) {
      if (url.indexOf(Env.ENV_SELECTORS[key]) > -1) {
        env = key;
        break;
      }
    }
    return env;
  }
}
