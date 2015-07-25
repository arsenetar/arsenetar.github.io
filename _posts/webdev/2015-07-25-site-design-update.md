---
layout: post
title: Site Design Update
description: Update of the site design to be faster to load and use less js /css.
tags: [webdev]
---

I finally got around to finishing up the redesign of this site / blog.  The new design focuses on reducing the network data transfer while cleaning up the UI of the site and overall simplifying the layout.  During the design I changed css frameworks, removed the majority of the javascript and opted for a simpler layout which still maintains a responsive design.

## CSS framework
In the previous layout, I had opted to use the [Foundation](http://foundation.zurb.com/) css framework.  This provided a very versatile and complete base of styles and UI elements.  When deciding on the redesign, I noticed most of the features of Foundation were not being used for this site, and I set out to trim the stylesheet down.  The site stylsheet started out at about 23KB gzipped (165 kB uncompresed).  I had left the majority of the Foundation components in the stylesheet and had not removed the unused ones.  This was a waste of information, so I removed the unused parts of the framework and rebuilt the stylesheet.  The result was still larger than I thought it needed to be and depended on javascript to function correctly (Foundation Topbar).  At this point, I decided to re-evaluate my choice of CSS framework.

### Contenders
After spending some time browsing the web I compiled a list of possible frameworks.  These frameworks were all actively developed and being used in the wild.  The alternative of not using a framework and just using an HTML5 reset was also considered.  The resulting list is below:

- [Foundation](http://foundation.zurb.com/)
- [Bootstrap](http://getbootstrap.com/)
- [PureCSS]([http://purecss.io/)
- [HTML5 Reset](https://github.com/murtaugh/HTML5-Reset)

Foundation remained on the list primarily as a baseline to compare the other options to as at this point I found it a bit too "heavyweight" for what I was trying to accomplish.  To evaluate the different frameworks I made a mental list of features which I would like to be able to have / accomplish.  This list was similar to the one below:

- Look the same (or close to the same) in mainstream browsers
- Responsive
- Clean styling
- Easy to customize and work with
- Ability to remove (or not include) the parts I was not using

This list helped me drive the comparison to pick out the framework to use.  The first contender was Bootstrap as it is very similar to Foundation and I have had experience using it in the past.  However like foundation, I found it to be more of a "heavyweight" or all parts included framework.  Although both had the ability to slim down the framework by not including all the extra components, I still felt they were more than I needed.  The second option was to go with PureCSS.  PureCSS was an interesting option since it was not a preprocessor framework utilizing `scss` or `less`.  This I thought might cause some issues during development, however I was considering trying it out as the codebase was much simpiler in my opinion.  The last option was to just use HTML5 Rest and code my own way, which on principal I prefer not reinventing the wheel, however it would provide a backup placn to PureCSS.  So PureCSS won the initial pick and I moved forward to development.

### New Development Flow
Since PureCSS is just plain css, I did not need some of the build tools from the old design any more.  I started cleaning up the build system for the new framework and after some research I made a few changes.  Up until this point, I was using Bower and Grunt to manage the project assets and build process respectively.  After reading some articles about managing assets purely through npm, I decided to give it a try.  Ultimately this meant the package.json and bower.json became the same file.  As I converted my build script (Gruntfile.js) over to the new setup, I heard about another build system [Gulp](http://gulpjs.com/).  For me the layout and structure of Gulp as compared to Grunt made more sense to me and I figured I would give it a try.  Primarily I liked the way tasks could be chained together to produce the final output.  So I switched everything over to Gulp and built the site as it was just to familiarize myself with the new tool.  

Now back to the major change, again PureCSS was just css so to allow for similar editing as I had been used to I would need a post processor.  This would allow me to use variables, indented styles, and a few other non-standard css items in my stylesheet development to make it easier and cleaner.  I ended up using [postcss](https://github.com/postcss/postcss) along with [cssnext](http://cssnext.io/) to process the css files of the project.  These allowed for indented css rules, imports of other stylesheets similar to scss, variables, and mixins.  Additionally I added a css compressor [csswring](https://github.com/hail2u/node-csswring) to further minify the resulting css.  The configuration I ended up using for the processors in the gulpfile is:

``` javascript
var processors = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-nested'),
  function(css) { /* Function to change some .pure classes to base elements */
    css.eachRule(function (rule){
        rule.selector = rule.selector.replace(/\.pure-table(\s+|-striped|$)/g,'table ');
        rule.selector = rule.selector.replace(/\.pure-img/,'img');
      });
  },
  require('cssnext')({
    browsers: ['last 1 version', '> 5%'],
    import: false,
    compress: true
  }),
  require('csswring')({
    removeAllComments: true
  })
];
```

A quick explanation of this file.  The `processors` variable is later passed to the postcss command in the gulpfile as the list of processors to use.  The order of the processors does matter as they are executed in the order they are present here.  For this reason the first processor is the `postcss-import` processor which includes files from `@import` directives.  If this was not first I ended up getting errors even when enabled in the cssnext configuration.  The next two options enable the nested css and mixin support.  The following function was specific to the PureCSS framework and jekyll setup.  This converted the `.pure-table` and `.pure-img` classes to apply to the base elements `table` and `img` respectively.  The next item was the configuration for the cssnext set of processors which was set up for supporting the latest browsers and for compression.  The import feature is disabled here as it was already run.  The compression by cssnext was not quite to were I wanted it so I added csswring as a final processor to give a better minified result.

### Result of the CSS Change
Although there are a few additional tools I am considering to use in the future to help remove unused css from the generated styles based on the html of the site, I believe the difference they will make will be minor.  When I finished with the new design the minified stylesheet was now 11.3 KB uncompressed and 3.3 KB gziped this was a 86% decrease in size.  I am mostly satisfied with the result and was able to make UI improvements as well.

## Javascript
The previous design on the site relied on the Foundation framework javascript for the Topbar menu and a few other features.  In turn the Foundation library relied on JQuery and Modernizr to provide the full experience.  The new design of the site only relies on javascript for hidding and showing the side menu when on a smaller screen.  This code is just vanilla javascript and has no additional requirements.  The javascript and layout were based on the [responsive side menu]( http://purecss.io/layouts/side-menu/) example on the PureCSS site.  

The previous design had a javascript payload of 56 KB gzipped across the application file and the modernizr file.  The new setup has only one file which is 300 B gzipped.  Again this is a great reduction in payload size, this time a 99% reduction.

## Layout
As mentioned in the previous section, the layout was based on the [responsive side menu]( http://purecss.io/layouts/side-menu/) example on the PureCSS site.  I found the style visually appealing and simpler than the design I had been using for responsiveness.  THe main changes I made were just in the color department and a few of my site specific items which I added in the styles for.  This example made it really quick to get the site redesigned and looking great.

## Conclusion
I have now got my site in a better state than it had previously been and have successfully removed alot of the unneeded code.  One thing I am still looking on adding to my site is a better way to do in post images where the images link to the full resolution.  I had previously just embeded the full resolution images and now I have switched to embedding scaled images to reduce load time. This feature along with adding icons to the various tags are the two changes I would like to include in my next site update.  I have a few real articles in the works as well...
