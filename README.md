# trigger.js
A simple event based toggle classes script for markup based actions.

Version 1.0.0

What does this all mean Bazil?

Simply put, use HTML to create fast and easy toggle events on the UI. Say you want to toggle a sidemenu for instance. In the past you had to create a script tag and use either jQuery's toolset or vanillia JS way. Either way ended up having too many of these events littered through your scripts. With trigger.js, all you have to do is add the script, add an trigger element and then target what you want to modify. trigger.js does the rest. It will take the first class of the target and adds a modifier class in the vain of BEM. All you need to do is make the CSS. SIMPLES!

Now you can create events that trigger UI based actions with just changes to your markup and CSS only.

Is it that simple?

Pretty much. Have look at the example below and or try the link to the JSbin.com example to see it in action.

Now, the rest is up to you.

## How it works
trigger.js will search for all elements on the page with the class of "trigger" and attached an event that is based on the attributes ( see below 'Attributes required' ) on said element.

## Attributes required

place these on the element that will trigger the event.

"data-event" - the event type, eg. 'click', 'mouseover' - https://developer.mozilla.org/en-US/docs/Web/Events
"data-target" - an array string of the elements to target eg. data-target=".sidemenu, .header, footer"
"data-action" - the class you wish to add to the target element

## Example.

```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>trigger.js</title>
		<style>
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
		</style>
	</head>
	<body>

		<h1>trigger.js example</h1>

		<button class="trigger" data-action="click" data-target=".sidemenu" data-trigger="open">Click me</button>

		<div class="sidemenu">
			<ul>
				...
			</ul>
		</div>

		<script src="link/to/trigger.js"></script>

	</body>
	</html>
```

js-bin.com example link http://jsbin.com/punixe

## Browser support
 - IE 9 to 11 ( i'm sure edge is okay )
 - Chrome 4 to 41
 - Safari 3.1 to 8
 - Firefox 3.5 to 36
 - iOS Safari 3.2 to 8

## License

The MIT License (MIT)

Copyright (c) 2015 Doug Orchard
https://github.com/doug-orchard/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
