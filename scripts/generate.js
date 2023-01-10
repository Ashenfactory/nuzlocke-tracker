const fs = require('fs'),
	{ execSync } = require('child_process'),
	pokesprite = require('pokesprite-images'),
	spriteDir = pokesprite.baseDir + '/' + pokesprite.pokemonDirs[1] + '/',
	imageWidth = 68,
	imageHeight = 56,
	pkmnData = JSON.parse(fs.readFileSync(pokesprite.baseDir + '/data/pokemon.json', 'utf-8'));
	pkmnCount = Object.keys(pkmnData).length;
	additionalPkmnData = JSON.parse(fs.readFileSync('scripts/additional-pokemon.json', 'utf-8'));
	spriteSheetSize = Math.ceil(Math.sqrt(pkmnCount + additionalPkmnData.length));

let images = "'" + spriteDir + "unknown.png'\n",
	spriteSheetCSS = '',
	dataJS = [],
	rowCount = 0;
	colCount = 1;

for (let i = 1; i <= pkmnCount; i++) {
	if (colCount === spriteSheetSize) {
		rowCount++;
		colCount = 0;
	}

	let pkmn = pkmnData[String(i).padStart(3, '0')];

	spriteSheetCSS += '.pkmn.' + pkmn.slug.eng + ':before {\n' +
		'	background-position: ' + (colCount ? ('-' + (colCount * imageWidth) + 'px') : '0') + ' ' + (rowCount ? ('-' + (rowCount * imageHeight) + 'px;') : '0') + '\n' +
		'}\n\n';

	dataJS.push({
		name: pkmn.name.eng,
		value: pkmn.slug.eng,
		icon: pkmn.slug.eng
	});

	images += "'" + spriteDir + 'regular/' + pkmn.slug.eng + ".png'\n";

	colCount++;
}

additionalPkmnData.forEach((pkmn, index) => {
	if (colCount === spriteSheetSize) {
		rowCount++;
		colCount = 0;
	}

	images += "'scripts/additional-pokemon/" + index + ".png'\n";

	spriteSheetCSS += '.pkmn.' + pkmn.value + ':before {\n' +
		'	background-position: ' + (colCount ? ('-' + (colCount * imageWidth) + 'px') : '0') + ' -' + (rowCount * imageHeight) + 'px;\n' +
		'}\n\n';

	colCount++;
});

dataJS = dataJS.concat(additionalPkmnData);

excludedPkmn = JSON.parse(fs.readFileSync('scripts/excluded-pokemon.json', 'utf-8'));
for (const [game, ids] of Object.entries(excludedPkmn)) {
	ids.forEach(id => {
		const index = id - 1;

		if (dataJS[index].exclude) {
			dataJS[index].exclude.push(game);
		} else {
			dataJS[index].exclude = [game];
		}
	});
}

fs.writeFileSync('images.txt', images);
execSync('montage @images.txt -tile ' + spriteSheetSize + 'x -geometry 68x56 -background none img/sprites.webp');
fs.unlinkSync('images.txt');

const fomanticAssets = [
	'reset.css',
	'site.css',
	'header.css',
	'text.css',
	'button.css',
	'container.css',
	'input.css',
	'loader.css',
	'segment.css',
	'form.css',
	'grid.css',
	'menu.css',
	'table.css',
	'item.css',
	'checkbox.css',
	'dimmer.css',
	'dropdown.css',
	'modal.css',
	'nag.css',
	'search.css',
	'tab.css',
	'transition.css',
	'site.js',
	'form.js',
	'dimmer.js',
	'dropdown.js',
	'modal.js',
	'nag.js',
	'search.js',
	'tab.js',
	'transition.js',
];

let fomanticJS = '';
let fomanticCSS = '';

fomanticAssets.forEach((asset => {
	const content = fs.readFileSync('node_modules/fomantic-ui/dist/components/' + asset, 'utf-8');

	if(asset.endsWith('.js')) {
		fomanticJS += content;
	} else if (asset.endsWith('css')) {
		fomanticCSS += content.replace(/background: '';/g, 'background: none;').replace(/@font-face {.*?}/gs, '');
	}
}));

fs.writeFileSync('src/css/fomantic.css', fomanticCSS);
fs.writeFileSync('src/js/fomantic.js', fomanticJS);
fs.copyFileSync('node_modules/jquery/dist/jquery.js', 'src/js/jquery.js');

fs.writeFileSync('src/css/sprites.css', spriteSheetCSS);
fs.writeFileSync('src/js/pokemon.js', 'const pkmnData = ' + (JSON.stringify(dataJS, null, '\t')).replace(/"([^"]+)":/g, '$1:') + ';');