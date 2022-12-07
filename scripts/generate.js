const fs = require('fs'),
	{ execSync } = require('child_process'),
	pokesprite = require('pokesprite-images'),
	spriteDir = pokesprite.baseDir + '/' + pokesprite.pokemonDirs[1] + '/',
	imageHeight = 56,
	pkmnData = JSON.parse(fs.readFileSync(pokesprite.baseDir + '/data/pokemon.json', 'utf-8'));
	pkmnCount = Object.keys(pkmnData).length;

let images = "'" + spriteDir + "unknown.png'\n",
	spriteSheetCSS = '',
	dataJS = [];

for (let i = 1; i <= pkmnCount; i++) {
	let pkmn = pkmnData[String(i).padStart(3, '0')];

	spriteSheetCSS += '.pkmn.' + pkmn.slug.eng + ':before {\n' +
		'	background-position: 0 -' + Number(pkmn.idx) * imageHeight + 'px;\n' +
		'}\n\n';

	dataJS.push({
		name: pkmn.name.eng,
		value: pkmn.slug.eng,
		icon: pkmn.slug.eng
	});

	images += "'" + spriteDir + 'regular/' + pkmn.slug.eng + ".png'\n";
}

additionalPkmnData = JSON.parse(fs.readFileSync('scripts/additional-pokemon.json', 'utf-8'));
dataJS = dataJS.concat(additionalPkmnData);

fs.writeFileSync('images.txt', images);
execSync('convert @images.txt -append img/sprites.png');
fs.unlinkSync('images.txt');

execSync('~/Efficient-Compression-Tool/build/ect img/sprites.png -9');

fs.writeFileSync('src/css/sprites.css', spriteSheetCSS);
fs.writeFileSync('src/js/pokemon.js', 'const pkmnData = ' + (JSON.stringify(dataJS, null, '\t')).replace(/"([^"]+)":/g, '$1:') + ';');