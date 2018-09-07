[![CircleCI](https://circleci.com/gh/adborden/jekyll-theme-uswds.svg?style=svg)](https://circleci.com/gh/adborden/jekyll-theme-uswds)

# <%= name %>

> <%= description %>


## Prerequisites

- [Node.js](https://nodejs.org/)
- [Ruby](https://ruby-lang.org/)
- [Bundler gem](https://bundler.io/)

## Development

Install project dependencies.

    $ npm run setup

Start the development server.

    $ npm run start


### Bumping USWDS vesion

Update the `uswds` version in `package.json`. Then pull the latest assets into
the project.

    $ npm install
    $ npm run uswds:clean
    $ npm run uswds


### npm commands


#### `npm run uswds`

Runs `uswds:sass` and `uswds:assets`. This copies the latest assets and SASS files from the USWDS npm package.


#### `npm run uswds:sass`

Copies USWDS SASS files from the npm package.


#### `npm run uswds:assets`

Copies USWDS assets (images, fonts, JavaScript, etc) from the npm package.


#### `npm run uswds:clean`

Removes the generated USWDS files.


## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.


## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.


---

_This project was scaffolded by [generator-jekyll-uswds](https://github.com/adborden/generator-jekyll-uswds)._
