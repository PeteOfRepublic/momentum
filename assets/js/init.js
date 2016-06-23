window.onload = function() {

		var momentumElem = document.getElementById( 'momentum' );

		function checkState() {
			if ( momentumElem.classList.contains( "active" ) ) {
				momentumElem.classList.remove( "active" );
			} else {
				momentumElem.classList.add( "active" );
			}
		}
		var style = document.createElement( 'style' );
    document.head.appendChild( style );
		checkState();

		var i = 0;
		var tick = 100;
		var wait = 1500;

		var loop = setInterval( function(){
			doLoop();
		}, tick);

		function doLoop(){
			if ( i <= 101 ) {
				style.sheet.addRule( "#momentum.active::after", "width: " + i + "vw" );
				i = i + 1;
			} else {
				i = 0;
				pauseLoop();
			}
		};

		function pauseLoop(){
			clearInterval( loop );
			checkState();
			style.sheet.addRule( "#momentum.active::after", "width: " + 0 + "vw" );
			setTimeout( function() {
				checkState();
				loop = setInterval( function(){
					doLoop();
				}, tick);
			}, wait);
		};

};
