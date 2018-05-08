# Twitter clone

#### A locally functional version of Twitter - 5/2/2018

#### By **Ami**

## Description
A local rebuild of Twitter (https://twitter.com/) built in Angular 6.0 that contains the following UI features:
  * A top-anchored navigation bar.
  * User module containing avatar, name, and username
  * Trending topic module
  * New tweet input
  * A timeline populated with tweets from other "users"



### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Program will take user's name and chosen username | "Ami", "AmisTwitter" | name: Ami, username: @AmisTwitter|
| Program will allow user to "tweet" and have it appear in their newsfeed | "I am writing a tweet" | "I am writing a tweet" |
| Program will allow search through the timeline | "#dogs" | [all posts containing #dogs] |
| Program has a list of trending topics and when clicked, tweets related to those topics will populate the timeline | *user clicks "dogs"* | [all posts containing dogs] |


## Setup/Installation Requirements

1. Clone from GitHub repository [https://github.com/amiraine/twitter-clone.git]
2. Run `install -g @angular/cli@1.6.5`
3. Run `brew upgrade node`
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * Angular 6.0
  * Bootstrap 4.0

## Support and contact details

_Email the authors with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Ami}_**
