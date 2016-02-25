# trigger.js
A simple event based toggle classes script for markup based actions.

Version 1.0.0

Sometimes all you need is a simple way to handle events on your site that apply a state class on a HTML element.

The jQuery way makes you add javascript or each event manually, trigger.js does away with this premise and jQuery and allows you to attach events without any javascript added ( other then trigger.js ).

trigger.js purpose is only to allow you to create simple UI effects with little effort. Define attributes on the element in the HTML what type of action ( 'click' ), the target element that you want to toggle a className action and voilà! EVENTS!

The rest is up to you.

## How it works
Trigger.js will search for all elements on the page with the class of "trigger" and attached an event that is based on the attributes ( see below 'Attributes required' ) on said element.

## Attributes required

place these on the element that will trigger the event.

"data-event" - the event type, eg. 'click', 'mouseover' -- see more events on the page on MDN https://developer.mozilla.org/en-US/docs/Web/Events
"data-target" - an array string of the elements to target eg. data-target=".sidemenu, .header, footer"
"data-action" - the class you wish to add to the target element

## Example.

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>trigger.js</title>
	</head>
	<body>

		<h1>trigger.js example</h1>

		<button class="trigger" data-action="click" data-target=".sidemenu" data-trigger="open">Click me</button>

		<div class="sidemenu">
			<ul>
				...
			</ul>
		</div>

	</body>
	</html>

	.sidemenu{
		width: 300px;
		position:fixed;
		background-color: #333;
		color: #fff;
		right: 0;
		top: 0;
		height: 100%;
		-webkit-transform: translateX( 100% );
		    -ms-transform: translateX( 100% );
		        transform: translateX( 100% );
		-webkit-transition: all 200ms ease;
		        transition: all 200ms ease;
	}

	.sidemenu--open{
		-webkit-transform: translateX( 0% );
		    -ms-transform: translateX( 0% );
		        transform: translateX( 0% );
	}

js-bin.com example link http://jsbin.com/punixe

## Browser support
Currently it only supports the evergreen browsers.

## License

The MIT License (MIT)

Copyright (c) 2015 Doug Orchard
https://github.com/doug-orchard/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
