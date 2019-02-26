# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
