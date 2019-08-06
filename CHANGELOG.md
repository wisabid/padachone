# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Map showing mosque locations
- Custom Search Results
- Current location data
- Clean Lab

- firebase : https://sebhastian.com/react-firestore
- read on https://opensource.guide/
- to do : flash of all importatn users
- to do : custom trace and metrics on app using firebase performance monitoring
- to do : schedule emails using Bull
- to do : use nice font
- to do  : change git email
- to do : avoid security leak by hiding credentials
- to do : optimize bundle, cdn
- to do : headless cms


## [1.0.0] - 2019-05-19
### Added
- Landing page with Ads and set up phase
- Homepage with Prayer times listing
- Settings button for altering the set up configurations

## [1.0.1] - 2019-05-20
### Changed
- Removed errors and aligned time to the right

## [1.0.2] - 2019-05-21
### Added
- Snackbars for info messages to the users

## [1.0.3] - 2019-05-26
### Added
- Time left for Prayer with design and dismiss;restricted to own time zone users

## [1.0.4] - 2019-05-27
### Added
- Better timezone using moment and design change for timer

### Changed
- API based on Gulf region & Shafi madhab

## [1.0.5] - 2019-05-28
### Added
- Bgm

## [1.0.6] - 2019-05-30
### Added
- Failed to fetch error message.

### Changed
- Disabled bgm from layout

## [1.0.7] - 2019-06-12
### Added
- Email Subscription option

### Changed
- Disabled copyright text

## [1.0.8] - 2019-06-14
### Changed
- Timer logic to rectify the defect of prayer times falling within 1 hour gap difference.

## [1.1.0] - 2019-06-15
### Added
- Context API for timezone and page

### Changed
- Fixed the bug for showing up Isha kid before it ticks 00:00

## [1.1.1] - 2019-06-18
### Added
- Prayer times with lat lon (integrated Timer,header, current loc and modified styles on alpha release) 
- Music and toggle volume button

## [1.2.0] - 2019-06-26
### Added
- Side menu options for homepage with Travel Onboard feature
- New icon for starting over Set up 

### Changed
- Start over action logic by hoisting it to the context level
- Subscribe modal action by hoisting it to the context level


## [1.2.1] - 2019-06-27
### Added
- Fast forward login action

### Changed
- New icon for starting over

## [2.0.0] - 2019-07-14
### Added
- Fine tuning option for setting calculation methods and school preferences
- Integration of Fine tune with side menus, Travel & homepage
- Caching of calculation methods
- Address input acceptance
- Facebook business chat plugin integration
- New landing page with grid menus
- Hard Reset Option integration
- Confirmation dialog for hard reset
- Home button in Travel page for navigation
- Contribution guide for the application
- Visitor tracking & integration of Firebase firestore
- Integration of firebase for subscribers data
- Validation of existing subscribers to avoid duplicates
- Performance monitoring with firebase
- Fall back on visitor data for geoposition disabled travel page
- Integrated headless CMS by automating message broadcasting via Prismic

### Changed
- Removed subscribe option from homepage footer
- Slide animation on landingpage navigations and other pages
- API change to accept address as an input parameter
- Location container width of prayer time boy image in Travel page
- Optimization of API call in usePrayer custom hook
- Fixed travel page header for disabling movement on scoll
- Decreased message display time 
- Disabled music in travel page

## [2.0.1] - 2019-07-21
### Changed
- Put a hot fix for Asia/Calcutta timezone

## [2.0.2] - 2019-07-27
### Changed
- Null check for location data in Traveller onboard

## [2.0.3] - 2019-08-06
### Changed
- Put the hot fix (Asia/Calcutta timezone) in traveller onboard pages

## [2.0.4] - 2019-08-06
### Added
- Set Display timer to false after the last prayer of the day as part of fixing the same defect

## [2.1.0] - 2019-07-..
### Added
- Apollo client & graphql for prismic


