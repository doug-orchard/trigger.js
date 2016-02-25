(function(document){

	var items;

	function _toggleClass(elem, className) {
		var classes = elem.className.match(/\S+/g) || [],
			index = classes.indexOf(className);

		if(index >= 0) {
          classes.splice(index, 1);
        } else {
          classes.push(className);
	    }
		elem.className = classes.join(' ');
    }

	function _getElementArray( selector ){
		return Array.prototype.slice.call( document.querySelectorAll( selector ) );
	}

	function _getTargetElemsFromString( targets ){

		var arr = [],
			targetsArray = targets.split(',');

		if( targetsArray.length <= 0 ){
			console.error('There is nothing to toggle');
			return;
		}

		targetsArray.forEach( function( selector ){

			var arrayItems = _getElementArray( selector );

			if( arrayItems.length <= 0 ){
				console.error('Cannot find target');
				return;
			}

			arrayItems.forEach( function( elem ){

				arr.push( elem );

			});

		} );

		return arr;
	}

	function _toggleElemClassOnEvent( evt ){

		var targetsElems,
			elem = evt.target,
			data = elem.dataset,
			action = data.action,
			trigger = data.trigger,
			targets = data.target;

		targetsElems = _getTargetElemsFromString( targets );

		targetsElems.forEach( function( elem ){

			var className = elem.classList[0];

			_toggleClass( elem, className + '--' + trigger );

		} );
	}

	function init(){

		items = _getElementArray( '.trigger' );

		if( items.length <= 0 ){
			return;
		}

		items.forEach(function(elem){

			var data = elem.dataset,
				action = data.action,
				trigger = data.trigger,
				target = data.target;

			if( !data || !action || !trigger || !target ) {
				console.log('missing data properties');
				return;
			}

			elem.addEventListener( action, _toggleElemClassOnEvent, false);

		});
	}

	init();

})(document);
