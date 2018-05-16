function revertFilter() {
	Caman('#my-image', function () {
	    this.revert()
	  });
}

function applyFilter() {
	Caman('#my-image', function () {
	    this.brightness(10);
	    this.contrast(30);
	    this.sepia(60);
	    this.saturation(-30);
	    this.render();
	  });
}

// function applyFilter() {
// 	Caman('#my-image', function () {
// 	    this['vintage']();
// 	    this.render();
// 	  });
// }
