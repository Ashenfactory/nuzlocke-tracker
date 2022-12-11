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
fs.copyFileSync('node_modules/file-saver/dist/FileSaver.js', 'src/js/FileSaver.js');

fs.writeFileSync('src/css/sprites.css', spriteSheetCSS);
fs.writeFileSync('src/js/pokemon.js', 'const pkmnData = ' + (JSON.stringify(dataJS, null, '\t')).replace(/"([^"]+)":/g, '$1:') + ';');