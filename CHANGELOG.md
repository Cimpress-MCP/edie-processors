# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2020.09.25
### Added
- Added support for mjml block"

## [1.1.1] - 2020.03.12
### Added
- Added support for mj-raw

## [1.0.13] - 2019.09.10
### Updated
- Updated dependencies for security reasons

## [1.0.12] - 2019.06.06
### Updated
- Updated dependencies for security reasons

## [1.0.11] - 2019.03.29
### Fixed
- Fixed incorrect handling of condition on images

## [1.0.10] - 2019.03.27
### Added
- Added condition & conditionalAlt properties for image blocks

## [1.0.9] - 2019.03.19
### Changed
- Set email background color to mj-body.

## [1.0.8] - 2019.03.18
### Changed
- Restrict additional mj-wrapper to only mail elements with px-based width

## [1.0.7] - 2019.03.18
### Changed
- Add additional mj-wrapper as only child of mj-body to handle email background color
- Add default 5px for buttons (at block creation time)
- Add default 0px padding for body wrapper
- Add support for 'main' padding

## [1.0.6] - 2019.03.18
### Changed
- Remove new lines from MJML

## [1.0.5] - 2019.03.01
### Changed
- Better handle handlebars blocks in loop element

## [1.0.4] - 2019.03.01
### Changed
- Remove automatically added top and bottom sections

## [1.0.3] - 2019.03.01
### Changed
- Added default line-height of 18px for text elements
- Added support for defaultTextLineHeight, defaultRowPadding, defaultColumnPadding, defaultTextPadding at main level

## [1.0.2] - 2019.02.28
### Fixed
- Added button text color
- Added treatParagraphsAsDiv property for text elements

## [1.0.1] - 2019.02.27
### Fixed
- Added button background

## [1.0.0] - 2019.02.27
### Changed
- Refactor edie2mjml generation
- Add format definition with allowed attributes per block 

## [0.0.15] - 2019.02.26
### Changed
- Better handle top level elements
- Set 0px padding for auto-added containers

## [0.0.13] - 2019.02.25
### Changed
- Changed default values for image empty block

## [0.0.13] - 2019.02.25
### Added
- Support for dynamic images (span type='dynamicImage')
### Fixed/Changed
- Remove &nbsp; from text version 

## [0.0.12] - 2019.02.22
### Added
- Support for standalone image blocks that generates mj-image tags

## [0.0.11] - 2019.02.21
### Fixed/Changed
- Put back 'email background color' property at main element
- Use mj-attributes for default mj-section color (same as main background color)
- Use mj-attributes for default mj-section padding of 5px
- Use mj-attributes for default mj-text padding of 5px
- Removed hardcoded padding of 0px from row, column, vspacer and text
- Do not put properties with falsy value as attributes of mj elements
- In case mj-text is enclosed with mj-section, apply the mj-text's background color to the section
- Automatically add an empty top section with 2px padding and 'email background color'
- Automatically add an empty bottom section with 2px padding and 'email background color'
- Removed hardcoded padding of 0px when creating empty element

## [0.0.10] - 2019.02.21
### Added
- Inline classes for text colors (fore- and back-) matching edie-color-p-XXXXXX and edie-color-m-XXXXXX 

## [0.0.9] - 2019.02.19
### Added
- Remove image figure margins

## [0.0.8] - 2019.02.19
### Added
- Support image classes

## [0.0.x] - 2019.02.13
### Fix
- Fix import of uuidv1
- Add edie2hbstext converter
- Added VSPACER element
- Add enclosing section/column with 0 padding for TEXT and VSPACER elements when presented in mj-body.
- Add default properties for VSPACER
- Added styles corresponding to different font sizes (text-{tiny/small/big/large})
- Added more default properties when using the createEmptyBlock() helper

## [0.0.1] - 2019.02.06
### Added
- Initial
