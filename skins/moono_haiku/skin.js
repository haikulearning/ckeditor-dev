/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/*
skin.js
=========

In this file we interact with the CKEditor JavaScript API to register the skin
and enable additional skin related features.

The level of complexity of this file depends on the features available in the
skin. There is only one mandatory line of code to be included here, which is
setting CKEDITOR.skin.name. All the rest is optional, but recommended to be
implemented as they make higher quality skins.

For this skin, the following tasks are achieved in this file:

	1. Register the skin.
	2. Register browser specific skin files.
	3. Define the "Chameleon" feature.
	4. Register the skin icons, to have them used on the development version of
	  the skin.
*/

// 1. Register the skin
// ----------------------
// The CKEDITOR.skin.name property must be set to the skin name. This is a
// lower-cased name, which must match the skin folder name as well as the value
// used on config.skin to tell the editor to use the skin.
//
// This is the only mandatory property to be defined in this file.
CKEDITOR.skin.name = 'moono_haiku';

// 2. Register browser specific skin files
// -----------------------------------------
// (http://docs.cksource.com/CKEditor_4.x/Skin_SDK/Browser_Hacks)
//
// To help implementing browser specific "hacks" to the skin files and have it
// easy to maintain, it is possible to have dedicated files for such browsers,
// for both the main skin CSS files: editor.css and dialog.css.
//
// The browser files must be named after the main file names, appended by an
// underscore and the browser name (e.g. editor_ie.css, dialog_ie8.css).
//
// The accepted browser names must match the CKEDITOR.env properties. The most
// common names are: ie, opera, webkit and gecko. Check the documentation for
// the complete list:
// http://docs.ckeditor.com/#!/api/CKEDITOR.env
//
// Internet explorer is an expection and the browser version is also accepted
// (ie7, ie8, ie9, ie10), as well as a special name for IE in Quirks mode (iequirks).
//
// The available browser specific files must be set separately for editor.css
// and dialog.css.
CKEDITOR.skin.ua_editor = 'ie';
CKEDITOR.skin.ua_dialog = 'ie';
