'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const globby = require('globby');
const yoHelper = require('@jswork/yeoman-generator-helper');
const genp = require('@jswork/generator-prompts');
const prompts = genp(['project_name', 'description', 'filetype']);

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stunning "generator-gitlab" generator!`));
    this.props = await this.prompt(prompts);
  }

  install() {
    this.fs.copyTpl(
      globby.sync(this.templatePath('js/**'), { dot: true }),
      this.destinationPath(),
      {
        ...this.props,
        ctx: yoHelper.ctx,
      }
    );
  }

  end() {
    this.extendPackageJson({
      scripts: {
        start: 'env-cmd -e envs react-scripts start',
        build: 'env-cmd -e envs react-scripts build',
      },
      dependencies: {
        '@jswork/env-select': '^1.0.5',
      },
      devDependencies: {
        'env-cmd': '^10.1.0',
      },
    });
  }
};
