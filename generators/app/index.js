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
        default: 'A project based on the U.S. Web Design System.'
      },
      {
        name: 'github_org',
        type: 'input',
        message: 'GitHub organization',
        default: null
      },
      {
        name: 'github_repo',
        type: 'input',
        message: 'GitHub repository name',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('*'), this.destinationPath(), this.props);

    // Copy hidden files
    ['.gitignore'].forEach(path => {
      this.fs.copy(this.templatePath(path), this.destinationPath(path));
    });
  }

  install() {
    this.spawnCommand('git', ['init']);
    this.spawnCommandSync('npm', ['run', 'setup']);
    this.spawnCommandSync('npm', ['run', 'uswds']);
  }

  end() {
    this.log(yosay(`All set! Try running ${chalk.red('npm start')}.`));
  }
};
