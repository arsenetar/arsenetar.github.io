---
layout: post
title: Migration to Jekyll
description: Details of migrating from using the pelican static site generator to using Jekyll + github pages.
tags: [pelican, jekyll]
---
After having used [pelican](http://docs.getpelican.com/en/3.3.0/) initially for my blog and creating a style for it.  I have found the process of updating the blog on github pages to be a bit more clunky than I would like it to be.  I have now gone through the process of converting the blog to use [Jekyll](http://jekyllrb.com/).  Converting the actual content was fairly easy, a few quirks were encountered when trying to setup the new templates but overall the process was very easy.

## Reasons for Change
The main reason for moving from pelican to Jekyll was by switching the process of editing and uploading changes to the blog became much more streamlined.  With pelican the blog was built locally and then the built blog was pushed up to the `master` branch on github.  This was alright, but I also wanted to keep the source and configuration backed up so enter the `sources` branch.  The `sources` branch contained the raw posts and pages along with the pelican configuration files.  While this was not that bad it was a bit clunky. 

Additionally to copy static resources, the files had to be listed within the configuration file (this is for things link CNAME, robots.txt etc).  Also all variables for the template were set in the configuration file, while nothing is wrong with this, I started to feel that the configuration file was getting bloated after adding in all the settings and configurations.

My favorite markdown editor also happens to be a windows only program MarkdownPad.  However I have always found it much easier and stable to run development scripts on a linux machine (in this case a virtual machine).  Now this is just a personal preference, however it also contributed to wanting a new solution.

## Jekyll
Github pages natively supports Jekyll integration which made it a good candidate to replace pelican.  Now everything could be done with a simple push to the pages repository.  I really liked this flow as now I could edit just markdown files and push the files straight to github.  This meant using my favorite editor was now very easy to do.  

As with all conversions there is a bit of work to do to change from one system to another.  Starting with the posts and pages a few things had to change.  The posts needed to be renamed to have the publish date in the file-name so:

~~~
pelican-red.md
~~~

Became:

~~~
2013-08-03-pelican-red.md
~~~

This was very straightforward and easy to do.  Then the meta-data in the file had to be changed to the new format.  With Jekyll an additional layout option was required. The change looks like:

~~~
Title: pelican-red
Date: 2013-08-03
Tags: pelican, python
~~~

To:

~~~
---
layout: post
title: pelican-red
tags: ['pelican', 'python']
---
~~~

Again this was really straightforward.  After making these changes on all the posts and pages all of the content was ready to go.  The next thing was to adapt the theme or create a new theme for the blog.  I chose to create a new theme.

### Theme
Creating a theme for Jekyll is very similar to creating a theme for pelican as the style of the markup is very similar.  Jekyll uses liquid templates and pelican uses jinja templates.  With the liquid templates there is not an `extend` clause. So instead of extending one base template with the header and footer in it, the header and footer are included in each layout template.  Other than that and some differences in filters, methods, etc... they are both close enough such that familiarity with one makes using the other quite easy.

While creating a the new theme I noticed a few differences between the two solutions which were not obvious from the start.  When using pelican, I was able to include additional functionality via plugins, to make things like multi-part articles and such.  Since I was using the Jekyll build process from github pages custom extensions are not allowed.  This was a setback of sorts but not that big of an issue for me as most of these additional functions were not required.  Another thing which was a bit irritating was the lack of the ability to pass options to pygments.  As far as I could tell with Jekyll there was no way to pass options to pygments from the markdown files to do things such as turn on line numbering.  I would have liked the ability to turn on line numbering just for specific code segments.  Again a "minor" issue which I was willing to live with.

## Conclusion
Overall the migration process was very smooth and I was able to quickly change the blog over to Jekyll very easily.  The few features from pelican, which I gave up to have a smoother experience, were not that important.  Also it should be noted that these features were only given up due to using the github pages builder instead of a local build.  Using Jekyll with github pages enables a much easier and frustration free updating of the blog.