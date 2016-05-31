window.onload = function() {

		var momentumElem = document.getElementById( 'momentum' );
		var trigger = document.getElementById( 'trigger' );

		var momentum = function(){
			if ( momentumElem.classList.contains( "active" ) ) {
				momentumElem.classList.remove( "active" );
			} else {
				momentumElem.classList.add( "active" );
			}
		};

		trigger.onclick = function( event ) {
			event.preventDefault();
			momentum();
		}

};
