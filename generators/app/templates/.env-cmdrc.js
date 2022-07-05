const { CraEnvs } = require('@jswork/env-select');

module.exports = CraEnvs.set({
  beta: {
    base_url: 'https://api-beta.demo.com/v1',
  },
  staging: {
    base_url: 'https://api.demo.com/v1',
  },
});
