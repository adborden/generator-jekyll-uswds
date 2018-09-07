'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-jekyll-uswds:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'));
  });

  it('creates files', () => {
    assert.file([
      'assets/uswds/fonts/merriweather-bold-webfont.eot',
      'assets/uswds/img/us_flag_small.png',
      'assets/uswds/js/uswds.js',
      'CONTRIBUTING.md',
      'Gemfile',
      'LICENSE.md',
      'package.json',
      'README.md',
      '_sass/uswds/uswds.scss'
    ]);
  });
});
