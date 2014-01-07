---
layout: post
title: Mirgration to Jekyll
description: Details of migrating from using the pelican static site generator to using Jekyll + github pages.
tags: [pelican, jekyll]
---
After having used [pelican](http://docs.getpelican.com/en/3.3.0/) initially for my blog and creating a style for it.  I have found the process of updating the blog on github pages to be a bit more clunky than I would like it to be.  I have now gone through the process of converting the blog to use (http://jekyllrb.com/)[Jekyll].  Converting the actual content was fairly easy, a few quirks were encountered when trying to setup the new templates but overall the process was very easy.

## Reasons for Change
The main reason for moving from pelican to Jekyll was by switching the process of editing and uploading changes to the blog became much more streamlined.  With pelican the blog was built locally and then the built blog was pushed up to the `master` branch on github.  This was alright, but I also wanted to keep the source and configuration backed up so enter the `sources` branch.  The `sources` branch contained the raw posts and pages along with the pelican configuration files.  While this was not that bad it was a bit clunky. 

Additionally to copy static resources, the files had to be listed within the configuration file (this is for things link CNAME, robots.txt etc).  Eventually I started to feel that the configuration file was getting bloated after adding in all the settings and configurations.

## Jekyll
Github pages natively supports Jekyll integration which made it a good candidate to replace pelican.  Now everything could be done with a simple push to the pages repository.  TODO...

