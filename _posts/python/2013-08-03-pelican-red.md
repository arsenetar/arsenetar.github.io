---
layout: post
title: pelican-red
date: 2013-08-03 21:23
tags: pelican-red, pelican, python
---

## History

After having tried using wordpress to create a blog on a couple occasions and attempting to create a skin, I gave up due to the clunkiness of the process and began to look for easier alternatives.  After some searching I decided that [pelican](http://getpelican.com) combined with github-pages would provided an adequate and easy to manage solution.

## Desired Features
In preparing to create the pelican theme, I made a list of features I wanted.

* support all pelican defaults
* responsive layout
* social icons
* Disqus comment support
* code highlighting
* Google Custom Search
* Google Analytics
* use CDN javascript when possible
* author vcards
* modified time on articles
* license per article / page with global option
* optional header image for articles and pages

After reviewing the list, I decided to start developing a simple two column blog layout using the [Foundation 4](http://foundation.zurb.com/) framework.  I chose Foundation 4 mainly due to my previous use of it and my individual preference over bootstrap.

## The design ( pelican-red )
The result became pelican-red ( readable on every device ).  Pelican-red supports all of the features desired and was able to provide a clean layout for this blog.  I continued working on the theme to change almost all of the features to be configured via the pelican configuration file to allow the theme to be generic and usable beyond this blog.

### Unique Features ( cool stuff )
I am going to quickly discuss some of the cool features of the pelican-red theme in this section.  

#### Social Links
The social links are used for both the site social links and the author social links.  The social links are basically icon links to different social networking profiles using icon fonts instead of images.  Over 20 different social networks are supported by the theme.

#### Copyright
The copyright settings allow for a site wide copyright with options to show the copyright by default on pages and articles separately. In addition individual articles may set a different copyright value.  The copyright details are listed in the pelican settings file and are referenced with a simple alias for the copyright.  Additionally if a Creative Commons copyright is used a iconified copyright link will be generated.

#### Author Details
The author details is what empowers the vcard functionality. In the pelican configuration file a listing of authors can be provided which included additional information about each author including things like: email, title, organization, and image.  These will then be displayed as a vcard at the end of an article ( just certain fields ) and on the authors page.

#### Extra Meta
The articles and pages support extra meta including:

* modified
* comments
* copyright
* image

Of these the coolest is the image meta tag which allows for the article to have a header image which also doubles as the articles icon in the listings.

### The Future
pelican-red currently uses some theme "hacks" to achieve the final design, some of which can be converted into pelican plugins.  The modified time, image, and author information will be converted into plugins to modularize the code a bit better in the future.  Additionally the site menu will have support for nested menu-items instead of just a single drop-down. Finally, the print layout will be improved a bit to look less cluttered in some spots. 

## Additional Information
The current documentation is in the [README.md](https://github.com/arsenetar/pelican-red/blob/master/README.md) in the github repository. The README covers all the settings and features in more detail. The theme itself is at [github](https://github.com/arsenetar/pelican-red). Pelican-red is licensed under the MIT-License. 