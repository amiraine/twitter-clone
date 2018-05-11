# Twitter clone

#### A locally functional version of Twitter - 5/2/2018

#### By **Ami**

## Description
A local rebuild of Twitter (https://twitter.com/) built in Angular 6.0 that contains the following UI features:
  * A top-anchored navigation bar using angular routing.
  * User module containing avatar, name, and username where name and username are editable via two-way binding
  * Trending topic module (purely decorative, has no functionality)
  * A timeline populated with tweets from other "users"
    * The timeline can be added to by the user.
    * All tweets are stored on a remote server

# Reach goals for this project (these bullet points will be moved up into the Description section as/if they are completed)
  * user can increase the 'like' count by one using an on-click toggle, similar to the real Twitter
  * user can update their user avatar (you can do this manually by replacing /src/assets/usericon.png with 72x72px image of your choice. For best results, circularly trim your image so the edges are transparent)
  * the trending topic 'links' link to separate pages populated by 'tweets' containing those keywords or hashtags
  * search bar at the top can be used to dynamically filter timeline tweets using pipes.
  * add dynamic routing for tweets on click (possibly as a modal or a div with higher z-index)

## Setup/Installation Requirements (for users)
1. Clone from GitHub repository [https://github.com/amiraine/twitter-clone.git]
2. Run `install -g @angular/cli@1.6.5`
3. Run `brew upgrade node`
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

-- OR --

Access the site hosted on firebase [https://epicodus-twitter.firebaseapp.com]

## Setup/Installation Requirements (for developers)

1. Clone from GitHub repository [https://github.com/amiraine/twitter-clone.git]
2. Run `install -g @angular/cli@1.6.5`
3. Run `brew upgrade node`
4. Create Firebase real-time database for this project and set 'read' and 'write' to `true`.
5. Create file /src/app/api-key.ts and add
`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };` where all of the xxxx's are the credentials from the Firebase project.
6. On Firebase, so that the timeline is not blank, you may import `timeline.json` from the root directory for sample tweets.
7. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
* the "Reverse Pipe" specified in src/app/reverse.pipe.ts sometimes stops working and un-inverts the timeline (only on Firebase)
* when you're typing a new tweet, the timeline will start randomly flickering/swapping tweets around.


## Technologies Used
  * Angular 6.0
  * Bootstrap 4.0

## Support and contact details

_Email the authors with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Ami}_**
