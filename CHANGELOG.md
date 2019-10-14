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
- newsletters in lab
- to do : flash of all importatn users
- to do : custom trace and metrics on app using firebase performance monitoring
- to do : schedule emails using Bull
- to do : use nice font
- to do  : change git email
- to do : avoid security leak by hiding credentials
- to do : optimize bundle, cdn
- to do : admin dashboard
- to do :log rocket
- to do : testing & end to end testing using puppeteer
- to do : skeletons using material ui
- to do : make text and bg color dynamic with prismic
- to do : JWT for api & protect routes
### CHECKLIST
- REMOVE DEV while going PROD
- Add date for changelog release
### NOTES
- Always look at handleexit when a new ls or ss is added
- loggin mechanism with prefixes

## [3.0.1] - 2019-10-14
### Added
- username display on click of u in Know Your

### Changed
- username & token would now persist even if you start over from set me up screen
- Apod is updated when American time changes

## [3.0.0] - 2019-10-12
### Added
- FCM
- Handled firebase push api check for browser (meant for safari)
- FCM token to firebase
- Reminder : Hook up notification & easy cron
- Dev Banner
- Hook up with timezone
- Disable reminder on safari
- Test Alert modal window
- In App Notification Display Implementation
- Metadata expansion panel for prayers for showing hijri details
- Accordion component
- hid alarm off for ios
- api for sending FCM notification and hooked it up with test reminder
- api call for setting scheduling
- Color block for hijri meta data
- Twilio Integration for logging
- Whatsapp logger custom hook & implemented in all important events
- A unique username generated for all users in addition to hooking up with logger and firebase
- EMojis in whatsapp logger
- Hijri to Travel screen
- Apod for Landing page
- Conditional fetching of apod based on dynamic source - prismic or application
- Apod details screen with redirection
- Moving bg for apod
- Hooked whatsapp logging to apod and learn more
- Dynamically (prismic) overridden text and bg color for landing bg for apod sake

### Changed
- gitignore
- Appended GCM id in manifest.json
- Hotfix implementation for hiding blank timer display 
- Newsletter component uses shared Accordion component
- Prayer time display rendering style for home screen
- Hot fix to rectify blank timer display
- display either timezone or reminder
- restrict reminder for just prayers
- changed 1 min test reminder to 2 min reminder
- Max stackbar is limited to 1 in infomessage of travel
- Got rid of redundant hijri month display from travel 
- Made infomessage in travel top center
- Autohide duration of infomessage to 3s
- Customized hijri for the travel
- Also deleted testreminder & apod ls while logging out
- Example address of Set me up process

## [2.1.3] - 2019-09-04
### Changed
- Landing bg image, bg color & font color are prismic bound now
- Site description is dynamic
- Site footer is prismic bound

## [2.1.2] - 2019-08-27
### Changed
- Country is now pre populated even after hard reset
- Bg image of grid menus has been made prismic bound
- Title bg image is also prismic bound now
- Prayertime boy is prismic bound
- emojis are also prismic tied
- logo is dynamic but with a fallback option
- resolved e2e bug by deleting unused webapp.test file

## [2.1.1] - 2019-08-..
### Added
- puppeteer as a dev dependency for end to end testing
- code coverage using page-coverage dev dependency
### Changed
- Modified const to let in Travel times Asis/Calcutta hot fix

## [2.1.0] - 2019-08-12
### Added
- Apollo client & graphql for prismic
- Materialui LAB for skeleton
- Newsletters list in Lab
- added graphql document names as constants
- Bgm sets in when prayer time boy appears
- Made timeout display dynamic with Prismic
### Changed
- Message display to accomodate image as well
- Removed prismic helper at hooks side

## [2.0.4] - 2019-08-06
### Added
- Set Display timer to false after the last prayer of the day as part of fixing the same defect

## [2.0.3] - 2019-08-06
### Changed
- Put the hot fix (Asia/Calcutta timezone) in traveller onboard pages

## [2.0.2] - 2019-07-27
### Changed
- Null check for location data in Traveller onboard

## [2.0.1] - 2019-07-21
### Changed
- Put a hot fix for Asia/Calcutta timezone

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


## [1.2.1] - 2019-06-27
### Added
- Fast forward login action
### Changed
- New icon for starting over

## [1.2.0] - 2019-06-26
### Added
- Side menu options for homepage with Travel Onboard feature
- New icon for starting over Set up 
### Changed
- Start over action logic by hoisting it to the context level
- Subscribe modal action by hoisting it to the context level

## [1.1.1] - 2019-06-18
### Added
- Prayer times with lat lon (integrated Timer,header, current loc and modified styles on alpha release) 
- Music and toggle volume button

## [1.1.0] - 2019-06-15
### Added
- Context API for timezone and page
### Changed
- Fixed the bug for showing up Isha kid before it ticks 00:00

## [1.0.8] - 2019-06-14
### Changed
- Timer logic to rectify the defect of prayer times falling within 1 hour gap difference.

## [1.0.7] - 2019-06-12
### Added
- Email Subscription option
### Changed
- Disabled copyright text

## [1.0.6] - 2019-05-30
### Added
- Failed to fetch error message.
### Changed
- Disabled bgm from layout
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aecb4cb43d2a5b551d4b2bccf84654e106602156

## [1.0.5] - 2019-05-28
### Added
- Bgm

<<<<<<< HEAD
=======

## [1.0.5] - 2019-05-28
### Added
- Bgm

>>>>>>> aecb4cb43d2a5b551d4b2bccf84654e106602156
=======
>>>>>>> aecb4cb43d2a5b551d4b2bccf84654e106602156
## [1.0.4] - 2019-05-27
### Added
- Better timezone using moment and design change for timer
### Changed
- API based on Gulf region & Shafi madhab

## [1.0.3] - 2019-05-26
### Added
- Time left for Prayer with design and dismiss;restricted to own time zone users

## [1.0.2] - 2019-05-21
### Added
- Snackbars for info messages to the users

## [1.0.1] - 2019-05-20
### Changed
- Removed errors and aligned time to the right

## [1.0.0] - 2019-05-19
### Added
- Landing page with Ads and set up phase
- Homepage with Prayer times listing
- Settings button for altering the set up configurations


























<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> aecb4cb43d2a5b551d4b2bccf84654e106602156
=======
>>>>>>> aecb4cb43d2a5b551d4b2bccf84654e106602156





