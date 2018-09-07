'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the ${chalk.red('generator-jekyll-uswds')} generator!`));

    const prompts = [
      {
        name: 'name',
        type: 'input',
        message: 'Name of your project',
        default: this.appname
      },
      {
        name: 'description',
        type: 'input',
        message: 'Description',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('*'), this.destinationPath(), this.props);
  }

  install() {
    this.npmInstall();
    this.spawnCommand('git', ['init']);
  }
};
