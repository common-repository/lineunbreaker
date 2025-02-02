=== Lineunbreaker ===
Contributors: dc5ala
Tags: tinymce, editor, newlines, linebreaks
Requires at least: 3.2
Tested up to: 4.9.4
Stable tag: 1.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin adds a button both to visual and html editor to remove newlines, carriage returns and HTML BR tags from selected text.

== Description ==

When you copy and paste text from another source, e.g. a PDF document or the web you end up having lots of line breaks that
will mess up formatting. With this plugin you can remove those unwanted line breaks by selecting the paragraph you want to
clean in the text and click the new button "!br" in the editors toolbar. Continue doing this for each paragraph you want to
clean.

== Installation ==

1. Extract the content of the archive to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= What kind of line breaks are getting removed? =

Newslines (backslash n), carriage returns (backslash r) and HTML `<br>` tags. Paragraphs remain untouched.

== Changelog ==

= 1.3 =
* Adds simple whitespace and hyphen detection to avoid words being glued together or unnecessary characters being added

= 1.2 =
* Compatibility test

= 1.1.1 =
* Updated compatible version information

= 1.1 =
* Removed whitespace as replacement. Let me know when you have troubles with joined sentences missing a space.

= 1.0 =
* Initial release.

