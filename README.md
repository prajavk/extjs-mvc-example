### Ext JS MVC Example

A simple Ext JS 4.2.1 MVC application example.  Adapted from one of Sencha's older, non-MVC examples which shows a simple CRUD interface for employee management.  BYOEXTJS.  Not tested on versions lower than 4.2.1.
Below are some notes on Ext JS for those new to the technology.

### What is Ext JS?
 * Commercial JavaScript-based app framework for rich internet applications
 * For more on the history, see [Wikipedia](http://en.wikipedia.org/wiki/Ext_JS)
 * Originally built as an add-on library extension of YUI by Jack Slocum
 * Now owned and developed by [Sencha Inc.](http://www.sencha.com), along with other products like Sencha Touch (for mobile)
 * Most famous for the grid UI widget
 * As of version 4.0, Ext JS moved to a strict MVC structure for apps (by foldering/naming convention)

### What's Included?
 * Class system
 * MVC framework
 * UI Widgets
 * Build tools (Sencha Cmd / Sencha Architect / Eclipse Plugin)
 * Good documentation
 * Sencha Touch

### Pros/Cons
 * __Pros__
    + Comprehensive front-end development solution
    + Class system, MVC framework, UI widgets, charts and graphs, cross browser support, build tools (Sencha Cmd / Sencha Architect / Eclipse Plugin)
    + Virtualized grids - only virtualized on the rows though
 * __Cons__
    + High learning curve - with commercial vendor lock in!
    + Best if you (or your team) are quite comfortable with JavaScript first
    + Theming is a labor intensive process - themes were not easily portable until recently (4.2)
    + Comprehensive front-end development solution
    + Once you're in, you're all in
    + Difficult to integrate into existing applications - documentation centers on new implementations
        + Running "sencha generate app" from the command line
        + Tries to be a "single page app"; though the newer "workspace" concept seems to acknowledge multi-page sites
    + Bloat - "ext-all.js" is around 2 MB (!) minified
    + Requires discipline to configure builds properly to construct a minimal, single source file for an application
    + Performance - While improving, still renders a LOT of DOM elements for simple widgets
