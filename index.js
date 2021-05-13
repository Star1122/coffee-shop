var fetchUrl = require("fetch").fetchUrl;
var parse = require("csv-parse");

var x = +process.argv[2];
var y = +process.argv[3];
var dataUrl = process.argv[4];

if (!dataUrl || isNaN(y) || isNaN(x)) {
	console.log('Error: Invalid input data.');
	return;
}

fetchUrl(dataUrl, function (error, meta, body) {
	if (error) {
		console.log('Fetch Error: ', error);
		return;
	}

	parse(body.toString(), {
		trim: true,
      	delimiter: ',',
      	skip_empty_lines: true
	}, function (err, output) {
  		if (err) {
  			console.log('Parse Error: ', err);
  			return;
  		}

  		var shops = output.map((shop) => {
  			var shopX = +shop[1];
  			var shopY = +shop[2];
  			var distance = Math.sqrt(Math.pow(x - shopX, 2) + Math.pow(y - shopY, 2));
  			return [shop[0], shopX, shopY, distance];
  		});
  		shops.sort((a, b) => a[3] - b[3]);
  		
  		shops.slice(0, 3).forEach((shop) => {
  			console.log(shop[0] + ',' + shop[3].toFixed(4));
  		})
	});
});