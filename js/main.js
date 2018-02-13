$('html').removeClass('no-js').addClass('js');

var games = {
	'rby': {
		'id': 'rby',
		'name': 'RBY',
		'title': 'Red, Blue and Yellow',
		'nameLimit': 10,
		'locations': ["Pallet Town", "Route 1", "Viridian City", "Route 22", "Route 2", "Viridian Forest", "Route 3", "Route 4", "Mt. Moon", "Cerulean City", "Route 24", "Route 25", "Route 5", "Route 6", "Vermillion City", "Route 11", "Diglett's Cave", "Route 9", "Route 10", "Rock Tunnel", "Pokémon Tower", "Route 12", "Route 8", "Route 7", "Celadon City", "Route 16", "Route 17", "Route 18", "Fuschia City", "Safari Zone", "Route 15", "Route 14", "Route 13", "Power Plant", "Route 19", "Route 20", "Seafoam Islands", "Cinnabar Island", "Pokémon Mansion", "Route 21", "Route 23", "Victory Road", "Cerulean Cave"]
	},
	'gsc': {
		'id': 'gsc',
		'name': 'GSC',
		'title': 'Gold, Silver and Crystal',
		'nameLimit': 10,
		'locations': ["New Bark Town", "Route 29", "Cherrygrove City", "Route 30", "Route 31", "Dark Cave", "Violet City", "Sprout Tower", "Route 32", "Ruins of Alph", "Union Cave", "Route 33", "Azalea Town", "Slowpoke Well", "Ilex Forest", "Route 34", "Goldenrod City", "Route 35", "National Park", "Route 36", "Route 37", "Ecruteak City", "Burned Tower", "Tin Tower", "Route 38", "Route 39", "Olivine City", "Route 40", "Route 41", "Whirl Islands", "Cianwood City", "Route 42", "Mt. Mortar", "Mahogany Town", "Rocket Hideout", "Route 43", "Lake of Rage", "Route 44", "Ice Path", "Blackthorn City", "Dragon's Den", "Route 45", "Dark Cave 2", "Route 46", "Route 27", "Tohjo Falls", "Route 26", "Victory Road", "Indigo Plateau", "Vermillion City", "Route 6", "Saffron City", "Route 5", "Route 7", "Route 8", "Route 10", "Power Plant (Crystal, Trade)", "Rock Tunnel", "Route 9", "Cerulean City", "Route 24", "Route 25", "Route 4", "Route 16", "Route 17", "Route 18", "Fuschia City", "Route 15", "Route 14", "Route 13", "Route 12", "Route 11", "Diglett's Cave", "Route 2", "Pewter City", "Route 3", "Mt. Moon", "Viridian City", "Route 1", "Pallet Town", "Route 21", "Cinnabar Island", "Route 20", "Route 19", "Route 22", "Route 28", "Mt. Silver"]
	},
	'rse': {
		'id': 'rse',
		'name': 'RSE',
		'title': 'Ruby, Sapphire and Emerald',
		'nameLimit': 10,
		'locations': ["Littleroot Town", "Route 101", "Route 102", "Route 103", "Petalburg City", "Route 104", "Petalburg Woods", "Rustboro City", "Route 115", "Route 116", "Rusturf Tunnel", "Dewford Town", "Route 106", "Granite Cave", "Route 107", "Slateport City", "Route 110", "Altering Cave", "New Mauville", "Route 117", "Route 111", "Mirage Tower (Emerald)", "Route 112", "Fiery Path", "Route 113", "Route 114", "Desert Underpass (Emerald)", "Meteor Falls", "Jagged Pass", "Lavaridge Town", "Route 118", "Route 119", "Fortree City", "Route 120", "Route 121", "Safari Zone", "Lilycove City", "Route 122", "Mt. Pyre", "Route 123", "Team Magma Hideout (Emerald)", "Route 124", "Mossdeep City", "Route 125", "Shoal Cave", "Route 127", "Route 128", "Seafloor Cavern", "Route 126", "Sootopolis City", "Cave of Origin", "Route 129", "Route 130", "Route 131", "Sky Pillar", "Pacifidlog Town", "Mirage Island", "Route 105", "Route 108", "Abandoned Ship", "Route 109", "Route 132", "Route 133", "Route 134", "Ever Grande City", "Victory Road", "S.S. Tidal", "Battle Frontier", "Artisan Cave"]
	},
	'frlg': {
		'id': 'frlg',
		'name': 'FRLG',
		'title': 'FireRed and LeafGreen',
		'nameLimit': 10,
		'locations': ["Pallet Town", "Route 1", "Viridian City", "Route 22", "Route 2", "Viridian Forest", "Route 3", "Route 4", "Mt. Moon", "Cerulean City", "Route 24", "Route 25", "Route 5", "Route 6", "Vermillion City", "Route 11", "Diglett's Cave", "Route 9", "Route 10", "Rock Tunnel", "Pokémon Tower", "Route 12", "Route 8", "Route 7", "Celadon City", "Route 16", "Route 17", "Route 18", "Fuschia City", "Safari Zone", "Route 15", "Route 14", "Route 13", "Power Plant", "Route 19", "Route 20", "Seafoam Islands", "Cinnabar Island", "Pokémon Mansion", "Route 21", "One Island", "Treasure Beach", "Kindle Road", "Mt. Ember", "Cape Brink", "Three Isle Port", "Bond Bridge", "Berry Forest", "Route 23", "Victory Road", "Four Island", "Icefall Cave", "Five Island", "Five Isle Meadow", "Memorial Pillar", "Water Labyrinth", "Resort Gorgeous", "Lost Cave", "Water Path", "Green Path", "Pattern Bush", "Outcast Island", "Altering Cave", "Ruin Valley", "Trainer Tower", "Canyon Entrance", "Seavault Canyon", "Tanoby Ruins", "Cerulean Cave"]
	},
	'dpp': {
		'id': 'dpp',
		'name': 'DPP',
		'title': 'Diamond, Pearl and Platinum',
		'nameLimit': 10,
		'locations': ["Twinleaf Town", "Route 201", "Lake Verity", "Route 202", "Route 203", "Oreburgh Gate", "Oreburgh City", "Oreburgh Mine", "Route 207", "Route 204", "Ravaged Path", "Floaroma Meadow", "Route 205", "Valley Windworks", "Eterna Forest", "The Old Chateau", "Eterna City", "Route 206", "Wayward Cave", "Mt. Coronet", "Route 208", "Hearthome City", "Route 209", "The Lost Tower", "Solaceon Ruins", "Route 210", "Route 215", "Veilstone City", "Route 212", "Trophy Garden", "Pastoria City", "Great Marsh", "Route 213", "Valor Lakefront", "Lake Valor", "Route 214", "Ruin Maniac's Cave", "Ruin Maniac's Tunnel", "Celestic Town", "Fuego Ironworks", "Routes 219", "Route 220", "Route 221", "Route 218", "Canalave City", "Iron Island", "Route 211", "Route 216", "Route 217", "Acuity Lakefront", "Lake Acuity", "Snowpoint Temple", "Route 222", "Sunyshore City", "Route 223", "Pokémon League", "Victory Road", "Route 224", "Route 230", "Route 229", "Resort Area", "Route 228", "Route 226", "Route 227", "Stark Mountain", "Route 225", "Sendoff Spring", "Turnback Cave", "Distortion World", "Spear Pillar", "Newmoon Island", "Flower Paradise", "Hall of Origin"]
	},
	'hgss': {
		'id': 'hgss',
		'name': 'HGSS',
		'title': 'HeartGold and SoulSilver',
		'nameLimit': 10,
		'locations': ["New Bark Town", "Route 29", "Cherrygrove City", "Route 30", "Route 31", "Dark Cave", "Violet City", "Sprout Tower", "Route 32", "Ruins of Alph", "Union Cave", "Route 33", "Azalea Town", "Slowpoke Well", "Ilex Forest", "Route 34", "Goldenrod City", "Route 35", "National Park", "Route 36", "Route 37", "Ecruteak City", "Burned Tower", "Bell Tower", "Route 38", "Route 39", "Olivine City", "Route 40", "Route 41", "Whirl Islands", "Cianwood City", "Cliff Edge Gate", "Route 47", "Cliff Cave", "Route 48", "Safari Zone Gate", "Safari Zone", "Route 42", "Mt. Mortar", "Mahogany Town", "Rocket Hideout", "Route 43", "Lake of Rage", "Route 44", "Ice Path", "Blackthorn City", "Dragon's Den", "Route 45", "Dark Cave 2", "Route 46", "Route 27", "Tohjo Falls", "Route 26", "Victory Road", "Indigo Plateau", "Vermillion City", "Route 6", "Saffron City", "Route 5", "Route 7", "Route 8", "Route 10", "Power Plant", "Rock Tunnel", "Route 9", "Cerulean City", "Route 24", "Route 25", "Route 4", "Route 16", "Route 17", "Route 18", "Fuschia City", "Route 15", "Route 14", "Route 13", "Route 12", "Route 11", "Diglett's Cave", "Route 2", "Pewter City", "Route 3", "Mt. Moon", "Viridian City", "Route 1", "Pallet Town", "Route 21", "Cinnabar Island", "Route 20", "Route 19", "Route 22", "Route 28", "Mt. Silver", "Cerulean Cave"]
	},
	'bw': {
		'id': 'bw',
		'name': 'BW',
		'title': 'Black and White',
		'nameLimit': 10,
		'locations': ["Nuvema Town", "Route 1", "Accumula Town", "Route 2", "Striaton City", "Dreamyard", "Route 3", "Wellspring Cave", "Nacrene City", "Pinwheel Forest", "Castelia City", "Route 4", "Desert Resort", "Relic Castle", "Route 16", "Route 5", "Driftveil Drawbridge", "Driftveil City", "Cold Storage", "Route 6", "Mistralton Cave", "Chargestone Cave", "Route 7", "Celestial Tower", "Twist Mountain", "Iccirus City", "Dragonspiral Tower", "Route 8", "Moor of Icirrus", "Route 9", "Route 10", "Victory Road", "Route 11", "Village Bridge", "Route 12", "Route 13", "Undella Town", "Undella Bay", "Route 14", "Abundant Shrine", "White Forest", "Route 15", "Marvelous Bridge", "Lostlorn Forest", "Route 17", "Route 18", "P2 Laboratory", "Liberty Garden"]
	},
	'bw2': {
		'id': 'bw2',
		'name': 'BW2',
		'title': 'Black 2 and White 2',
		'nameLimit': 10,
		'locations': ["Aspertia City", "Route 19", "Floccesy Town", "Route 20", "Floccesy Ranch", "Aspertia Gym", "Virbank City", "Virbank Complex", "Castelia City", "Castelia Sewers", "Relic Passage", "Route 4", "Desert Resort", "Relic Castle", "Route 16", "Lostlorn Forest", "Route 5", "Driftveil Drawbridge", "Driftveil City", "Route 6", "Mistralton Cave", "Chargestone Cave", "Route 7", "Celestial Tower", "Reversal Mountain", "Strange House", "Undella Town", "Undella Bay", "Route 13", "Route 12", "Village Bridge", "Route 11", "Route 9", "Seaside Cave", "Route 21", "Humilau City", "Route 22", "Giant Chasm", "Route 23", "Victory Road", "Old Victory Road", "Marvelous Bridge", "Route 15", "Route 14", "Abundant Shrine", "Moor of Icirrus", "Icirrus City", "Dragonspiral Tower", "Twist Mountain", "Clay Tunnel", "Underground Ruins", "Pinwheel Forest", "Nacrene City", "Route 3", "Wellspring Cave", "Striaton City", "Dreamyard", "Route 2", "Accumula Town", "Route 1", "Route 17", "Route 18", "P2 Laboratory", "Nature Preserve"]
	},
	'xy': {
		'id': 'xy',
		'name': 'XY',
		'title': 'X and Y',
		'nameLimit': 12,
		'locations': ["Aquacorde Town", "Route 2", "Santalune Forest", "Route 3", "Route 22", "Route 4", "Lumiose City", "Route 5", "Route 6", "Parfum Palace", "Route 7", "Battle Chateau", "Connecting Cave", "Route 8", "Ambrette Town", "Route 9", "Glittering Cave", "Cyllage City", "Route 10", "Route 11", "Reflection Cave", "Shalour City", "Tower of Mystery", "Route 12", "Azure Bay", "Route 13", "Route 14", "Laverre City", "Route 15", "Lost Hotel", "Route 16", "Frost Cavern", "Route 17", "Team Flare Secret HQ", "Route 18", "Couriway Town", "Route 19", "Route 20", "Pokémon Village", "Route 21", "Victory Road", "Terminus Cave", "Sea Spirit's Den", "Friend Safari"]
	},
	'oras': {
		'id': 'oras',
		'name': 'ORAS',
		'title': 'Omega Ruby and Alpha Sapphire',
		'nameLimit': 12,
		'locations': ["Littleroot Town", "Route 101", "Route 102", "Route 103", "Petalburg City", "Route 104", "Petalburg Woods", "Rustboro City", "Route 115", "Route 116", "Rusturf Tunnel", "Dewford Town", "Route 106", "Granite Cave", "Route 107", "Slateport City", "Route 110", "Altering Cave", "New Mauville", "Route 117", "Route 111", "Route 112", "Fiery Path", "Route 113", "Route 114", "Meteor Falls", "Jagged Pass", "Lavaridge Town", "Route 118", "Southern Island", "Route 119", "Fortree City", "Route 120", "Route 121", "Safari Zone", "Lilycove City", "Route 122", "Mt. Pyre", "Route 123", "Team Aqua/Magma Hideout Entrance", "Route 124", "Mossdeep City", "Route 125", "Shoal Cave", "Route 127", "Route 128", "Seafloor Cavern", "Route 126", "Sootopolis City", "Cave of Origin", "Soaring", "Route 129", "Route 130", "Route 131", "Sky Pillar", "Pacifidlog Town", "Mirage Island", "Route 105", "Route 108", "Abandoned Ship", "Route 109", "Route 132", "Route 133", "Route 134", "Ever Grande City", "Victory Road", "S.S. Tidal", "Pathless Plain", "Nameless Cavern", "Fabled Cave", "Gnarled Den", "Trackless Forest", "Crescent Isle", "Battle Resort", "Mirage Cave", "Mirage Forest", "Mirage Island", "Mirage Mountain"]
	},
	'sm': {
		'id': 'sm',
		'name': 'SM',
		'title': 'Sun and Moon',
		'nameLimit': 12,
		'locations': ["Hau'oli Outskirts", "Iki Town", "Route 1", "Melemele Sea", "Hau'oli City", "Route 2", "Berry Fields", "Verdant Cavern", "Hau'oli Cemetery", "Route 3", "Melemele Meadow", "Seaward Cave", "Kala'e Bay", "Ten Carat Hill", "Hano Beach", "Route 4", "Paniola Town", "Paniola Ranch", "Route 5", "Brooklet Hill", "Route 6", "Route 7", "Wela Volcano Park", "Route 8", "Fossil Restoration Center", "Lush Jungle", "Diglett's Tunnel", "Route 9", "Konikoni City", "Memorial Hill", "Akala Outskirts", "Malie City", "Malie Garden", "Route 10", "Mount Hokulani", "Route 11", "Route 12", "Secluded Shore", "Blush Mountain", "Route 13", "Haina Desert", "Tapu Village", "Route 15", "Aether House", "Route 14", "Thrifty Megamart", "Route 16", "Ula'ula Meadow", "Lake of the Moone/Sunne", "Route 17", "Shady House","Seafolk Village", "Poni Wilds", "Ancient Poni Path", "Poni Breaker Coast", "Exeggutor Island", "Vast Poni Canyon", "Altar of the Moone/Sunne", "Mount Lanakila", "Poni Grove", "Poni Plains", "Poni Meadow", "Resolution Cave", "Poni Coast", "Poni Gauntlet", "Ruins of Conflict", "Ruins of Life", "Ruins of Abundance", "Ruins of Hope"]
	},
	'usum': {
		'id': 'usum',
		'name': 'USUM',
		'title': 'Ultra Sun and Ultra Moon',
		'nameLimit': 12,
		'locations': ["Hau'oli Outskirts", "Iki Town", "Route 1", "Melemele Sea", "Hau'oli City", "Route 2", "Berry Fields", "Verdant Cavern", "Hau'oli Cemetery", "Route 3", "Melemele Meadow", "Seaward Cave", "Kala'e Bay", "Ten Carat Hill", "Hano Beach", "Route 4", "Paniola Town", "Paniola Ranch", "Route 5", "Brooklet Hill", "Route 6", "Route 7", "Wela Volcano Park", "Route 8", "Fossil Restoration Center", "Lush Jungle", "Diglett's Tunnel", "Route 9", "Konikoni City", "Memorial Hill", "Akala Outskirts", "Malie City", "Malie Garden", "Route 10", "Mount Hokulani", "Route 11", "Route 12", "Secluded Shore", "Blush Mountain", "Route 13", "Haina Desert", "Tapu Village", "Route 15", "Aether House", "Route 14", "Thrifty Megamart", "Route 16", "Ula'ula Meadow", "Lake of the Moone/Sunne", "Route 17", "Shady House","Seafolk Village", "Poni Wilds", "Ancient Poni Path", "Poni Breaker Coast", "Exeggutor Island", "Vast Poni Canyon", "Altar of the Moone/Sunne", "Mount Lanakila", "Poni Grove", "Poni Plains", "Poni Meadow", "Resolution Cave", "Poni Coast", "Poni Gauntlet", "Ruins of Conflict", "Ruins of Life", "Ruins of Abundance", "Ruins of Hope"]
	}
};

var pkmn = [
	{
		"name": '<i class="bulbasaur pkmn"></i>Bulbasaur',
		"value": "bulbasaur"
	},
	{
		"name": '<i class="ivysaur pkmn"></i>Ivysaur',
		"value": "ivysaur"
	},
	{
		"name": '<i class="venusaur pkmn"></i>Venusaur',
		"value": "venusaur"
	},
	{
		"name": '<i class="charmander pkmn"></i>Charmander',
		"value": "charmander"
	},
	{
		"name": '<i class="charmeleon pkmn"></i>Charmeleon',
		"value": "charmeleon"
	},
	{
		"name": '<i class="charizard pkmn"></i>Charizard',
		"value": "charizard"
	},
	{
		"name": '<i class="squirtle pkmn"></i>Squirtle',
		"value": "squirtle"
	},
	{
		"name": '<i class="wartortle pkmn"></i>Wartortle',
		"value": "wartortle"
	},
	{
		"name": '<i class="blastoise pkmn"></i>Blastoise',
		"value": "blastoise"
	},
	{
		"name": '<i class="caterpie pkmn"></i>Caterpie',
		"value": "caterpie"
	},
	{
		"name": '<i class="metapod pkmn"></i>Metapod',
		"value": "metapod"
	},
	{
		"name": '<i class="butterfree pkmn"></i>Butterfree',
		"value": "butterfree"
	},
	{
		"name": '<i class="weedle pkmn"></i>Weedle',
		"value": "weedle"
	},
	{
		"name": '<i class="kakuna pkmn"></i>Kakuna',
		"value": "kakuna"
	},
	{
		"name": '<i class="beedrill pkmn"></i>Beedrill',
		"value": "beedrill"
	},
	{
		"name": '<i class="pidgey pkmn"></i>Pidgey',
		"value": "pidgey"
	},
	{
		"name": '<i class="pidgeotto pkmn"></i>Pidgeotto',
		"value": "pidgeotto"
	},
	{
		"name": '<i class="pidgeot pkmn"></i>Pidgeot',
		"value": "pidgeot"
	},
	{
		"name": '<i class="rattata pkmn"></i>Rattata',
		"value": "rattata"
	},
	{
		"name": '<i class="raticate pkmn"></i>Raticate',
		"value": "raticate"
	},
	{
		"name": '<i class="spearow pkmn"></i>Spearow',
		"value": "spearow"
	},
	{
		"name": '<i class="fearow pkmn"></i>Fearow',
		"value": "fearow"
	},
	{
		"name": '<i class="ekans pkmn"></i>Ekans',
		"value": "ekans"
	},
	{
		"name": '<i class="arbok pkmn"></i>Arbok',
		"value": "arbok"
	},
	{
		"name": '<i class="pikachu pkmn"></i>Pikachu',
		"value": "pikachu"
	},
	{
		"name": '<i class="raichu pkmn"></i>Raichu',
		"value": "raichu"
	},
	{
		"name": '<i class="sandshrew pkmn"></i>Sandshrew',
		"value": "sandshrew"
	},
	{
		"name": '<i class="sandslash pkmn"></i>Sandslash',
		"value": "sandslash"
	},
	{
		"name": '<i class="nidoran-female pkmn"></i>Nidoran♀',
		"value": "nidoran-female"
	},
	{
		"name": '<i class="nidorina pkmn"></i>Nidorina',
		"value": "nidorina"
	},
	{
		"name": '<i class="nidoqueen pkmn"></i>Nidoqueen',
		"value": "nidoqueen"
	},
	{
		"name": '<i class="nidoran-male pkmn"></i>Nidoran♂',
		"value": "nidoran-male"
	},
	{
		"name": '<i class="nidorino pkmn"></i>Nidorino',
		"value": "nidorino"
	},
	{
		"name": '<i class="nidoking pkmn"></i>Nidoking',
		"value": "nidoking"
	},
	{
		"name": '<i class="clefairy pkmn"></i>Clefairy',
		"value": "clefairy"
	},
	{
		"name": '<i class="clefable pkmn"></i>Clefable',
		"value": "clefable"
	},
	{
		"name": '<i class="vulpix pkmn"></i>Vulpix',
		"value": "vulpix"
	},
	{
		"name": '<i class="ninetales pkmn"></i>Ninetales',
		"value": "ninetales"
	},
	{
		"name": '<i class="jigglypuff pkmn"></i>Jigglypuff',
		"value": "jigglypuff"
	},
	{
		"name": '<i class="wigglytuff pkmn"></i>Wigglytuff',
		"value": "wigglytuff"
	},
	{
		"name": '<i class="zubat pkmn"></i>Zubat',
		"value": "zubat"
	},
	{
		"name": '<i class="golbat pkmn"></i>Golbat',
		"value": "golbat"
	},
	{
		"name": '<i class="oddish pkmn"></i>Oddish',
		"value": "oddish"
	},
	{
		"name": '<i class="gloom pkmn"></i>Gloom',
		"value": "gloom"
	},
	{
		"name": '<i class="vileplume pkmn"></i>Vileplume',
		"value": "vileplume"
	},
	{
		"name": '<i class="paras pkmn"></i>Paras',
		"value": "paras"
	},
	{
		"name": '<i class="parasect pkmn"></i>Parasect',
		"value": "parasect"
	},
	{
		"name": '<i class="venonat pkmn"></i>Venonat',
		"value": "venonat"
	},
	{
		"name": '<i class="venomoth pkmn"></i>Venomoth',
		"value": "venomoth"
	},
	{
		"name": '<i class="diglett pkmn"></i>Diglett',
		"value": "diglett"
	},
	{
		"name": '<i class="dugtrio pkmn"></i>Dugtrio',
		"value": "dugtrio"
	},
	{
		"name": '<i class="meowth pkmn"></i>Meowth',
		"value": "meowth"
	},
	{
		"name": '<i class="persian pkmn"></i>Persian',
		"value": "persian"
	},
	{
		"name": '<i class="psyduck pkmn"></i>Psyduck',
		"value": "psyduck"
	},
	{
		"name": '<i class="golduck pkmn"></i>Golduck',
		"value": "golduck"
	},
	{
		"name": '<i class="mankey pkmn"></i>Mankey',
		"value": "mankey"
	},
	{
		"name": '<i class="primeape pkmn"></i>Primeape',
		"value": "primeape"
	},
	{
		"name": '<i class="growlithe pkmn"></i>Growlithe',
		"value": "growlithe"
	},
	{
		"name": '<i class="arcanine pkmn"></i>Arcanine',
		"value": "arcanine"
	},
	{
		"name": '<i class="poliwag pkmn"></i>Poliwag',
		"value": "poliwag"
	},
	{
		"name": '<i class="poliwhirl pkmn"></i>Poliwhirl',
		"value": "poliwhirl"
	},
	{
		"name": '<i class="poliwrath pkmn"></i>Poliwrath',
		"value": "poliwrath"
	},
	{
		"name": '<i class="abra pkmn"></i>Abra',
		"value": "abra"
	},
	{
		"name": '<i class="kadabra pkmn"></i>Kadabra',
		"value": "kadabra"
	},
	{
		"name": '<i class="alakazam pkmn"></i>Alakazam',
		"value": "alakazam"
	},
	{
		"name": '<i class="machop pkmn"></i>Machop',
		"value": "machop"
	},
	{
		"name": '<i class="machoke pkmn"></i>Machoke',
		"value": "machoke"
	},
	{
		"name": '<i class="machamp pkmn"></i>Machamp',
		"value": "machamp"
	},
	{
		"name": '<i class="bellsprout pkmn"></i>Bellsprout',
		"value": "bellsprout"
	},
	{
		"name": '<i class="weepinbell pkmn"></i>Weepinbell',
		"value": "weepinbell"
	},
	{
		"name": '<i class="victreebel pkmn"></i>Victreebel',
		"value": "victreebel"
	},
	{
		"name": '<i class="tentacool pkmn"></i>Tentacool',
		"value": "tentacool"
	},
	{
		"name": '<i class="tentacruel pkmn"></i>Tentacruel',
		"value": "tentacruel"
	},
	{
		"name": '<i class="geodude pkmn"></i>Geodude',
		"value": "geodude"
	},
	{
		"name": '<i class="graveler pkmn"></i>Graveler',
		"value": "graveler"
	},
	{
		"name": '<i class="golem pkmn"></i>Golem',
		"value": "golem"
	},
	{
		"name": '<i class="ponyta pkmn"></i>Ponyta',
		"value": "ponyta"
	},
	{
		"name": '<i class="rapidash pkmn"></i>Rapidash',
		"value": "rapidash"
	},
	{
		"name": '<i class="slowpoke pkmn"></i>Slowpoke',
		"value": "slowpoke"
	},
	{
		"name": '<i class="slowbro pkmn"></i>Slowbro',
		"value": "slowbro"
	},
	{
		"name": '<i class="magnemite pkmn"></i>Magnemite',
		"value": "magnemite"
	},
	{
		"name": '<i class="magneton pkmn"></i>Magneton',
		"value": "magneton"
	},
	{
		"name": '<i class="farfetchd pkmn"></i>Farfetch\'d',
		"value": "farfetchd"
	},
	{
		"name": '<i class="doduo pkmn"></i>Doduo',
		"value": "doduo"
	},
	{
		"name": '<i class="dodrio pkmn"></i>Dodrio',
		"value": "dodrio"
	},
	{
		"name": '<i class="seel pkmn"></i>Seel',
		"value": "seel"
	},
	{
		"name": '<i class="dewgong pkmn"></i>Dewgong',
		"value": "dewgong"
	},
	{
		"name": '<i class="grimer pkmn"></i>Grimer',
		"value": "grimer"
	},
	{
		"name": '<i class="muk pkmn"></i>Muk',
		"value": "muk"
	},
	{
		"name": '<i class="shellder pkmn"></i>Shellder',
		"value": "shellder"
	},
	{
		"name": '<i class="cloyster pkmn"></i>Cloyster',
		"value": "cloyster"
	},
	{
		"name": '<i class="gastly pkmn"></i>Gastly',
		"value": "gastly"
	},
	{
		"name": '<i class="haunter pkmn"></i>Haunter',
		"value": "haunter"
	},
	{
		"name": '<i class="gengar pkmn"></i>Gengar',
		"value": "gengar"
	},
	{
		"name": '<i class="onix pkmn"></i>Onix',
		"value": "onix"
	},
	{
		"name": '<i class="drowzee pkmn"></i>Drowzee',
		"value": "drowzee"
	},
	{
		"name": '<i class="hypno pkmn"></i>Hypno',
		"value": "hypno"
	},
	{
		"name": '<i class="krabby pkmn"></i>Krabby',
		"value": "krabby"
	},
	{
		"name": '<i class="kingler pkmn"></i>Kingler',
		"value": "kingler"
	},
	{
		"name": '<i class="voltorb pkmn"></i>Voltorb',
		"value": "voltorb"
	},
	{
		"name": '<i class="electrode pkmn"></i>Electrode',
		"value": "electrode"
	},
	{
		"name": '<i class="exeggcute pkmn"></i>Exeggcute',
		"value": "exeggcute"
	},
	{
		"name": '<i class="exeggutor pkmn"></i>Exeggutor',
		"value": "exeggutor"
	},
	{
		"name": '<i class="cubone pkmn"></i>Cubone',
		"value": "cubone"
	},
	{
		"name": '<i class="marowak pkmn"></i>Marowak',
		"value": "marowak"
	},
	{
		"name": '<i class="hitmonlee pkmn"></i>Hitmonlee',
		"value": "hitmonlee"
	},
	{
		"name": '<i class="hitmonchan pkmn"></i>Hitmonchan',
		"value": "hitmonchan"
	},
	{
		"name": '<i class="lickitung pkmn"></i>Lickitung',
		"value": "lickitung"
	},
	{
		"name": '<i class="koffing pkmn"></i>Koffing',
		"value": "koffing"
	},
	{
		"name": '<i class="weezing pkmn"></i>Weezing',
		"value": "weezing"
	},
	{
		"name": '<i class="rhyhorn pkmn"></i>Rhyhorn',
		"value": "rhyhorn"
	},
	{
		"name": '<i class="rhydon pkmn"></i>Rhydon',
		"value": "rhydon"
	},
	{
		"name": '<i class="chansey pkmn"></i>Chansey',
		"value": "chansey"
	},
	{
		"name": '<i class="tangela pkmn"></i>Tangela',
		"value": "tangela"
	},
	{
		"name": '<i class="kangaskhan pkmn"></i>Kangaskhan',
		"value": "kangaskhan"
	},
	{
		"name": '<i class="horsea pkmn"></i>Horsea',
		"value": "horsea"
	},
	{
		"name": '<i class="seadra pkmn"></i>Seadra',
		"value": "seadra"
	},
	{
		"name": '<i class="goldeen pkmn"></i>Goldeen',
		"value": "goldeen"
	},
	{
		"name": '<i class="seaking pkmn"></i>Seaking',
		"value": "seaking"
	},
	{
		"name": '<i class="staryu pkmn"></i>Staryu',
		"value": "staryu"
	},
	{
		"name": '<i class="starmie pkmn"></i>Starmie',
		"value": "starmie"
	},
	{
		"name": '<i class="mr-mime pkmn"></i>Mr. Mime',
		"value": "mr-mime"
	},
	{
		"name": '<i class="scyther pkmn"></i>Scyther',
		"value": "scyther"
	},
	{
		"name": '<i class="jynx pkmn"></i>Jynx',
		"value": "jynx"
	},
	{
		"name": '<i class="electabuzz pkmn"></i>Electabuzz',
		"value": "electabuzz"
	},
	{
		"name": '<i class="magmar pkmn"></i>Magmar',
		"value": "magmar"
	},
	{
		"name": '<i class="pinsir pkmn"></i>Pinsir',
		"value": "pinsir"
	},
	{
		"name": '<i class="tauros pkmn"></i>Tauros',
		"value": "tauros"
	},
	{
		"name": '<i class="magikarp pkmn"></i>Magikarp',
		"value": "magikarp"
	},
	{
		"name": '<i class="gyarados pkmn"></i>Gyarados',
		"value": "gyarados"
	},
	{
		"name": '<i class="lapras pkmn"></i>Lapras',
		"value": "lapras"
	},
	{
		"name": '<i class="ditto pkmn"></i>Ditto',
		"value": "ditto"
	},
	{
		"name": '<i class="eevee pkmn"></i>Eevee',
		"value": "eevee"
	},
	{
		"name": '<i class="vaporeon pkmn"></i>Vaporeon',
		"value": "vaporeon"
	},
	{
		"name": '<i class="jolteon pkmn"></i>Jolteon',
		"value": "jolteon"
	},
	{
		"name": '<i class="flareon pkmn"></i>Flareon',
		"value": "flareon"
	},
	{
		"name": '<i class="porygon pkmn"></i>Porygon',
		"value": "porygon"
	},
	{
		"name": '<i class="omanyte pkmn"></i>Omanyte',
		"value": "omanyte"
	},
	{
		"name": '<i class="omastar pkmn"></i>Omastar',
		"value": "omastar"
	},
	{
		"name": '<i class="kabuto pkmn"></i>Kabuto',
		"value": "kabuto"
	},
	{
		"name": '<i class="kabutops pkmn"></i>Kabutops',
		"value": "kabutops"
	},
	{
		"name": '<i class="aerodactyl pkmn"></i>Aerodactyl',
		"value": "aerodactyl"
	},
	{
		"name": '<i class="snorlax pkmn"></i>Snorlax',
		"value": "snorlax"
	},
	{
		"name": '<i class="articuno pkmn"></i>Articuno',
		"value": "articuno"
	},
	{
		"name": '<i class="zapdos pkmn"></i>Zapdos',
		"value": "zapdos"
	},
	{
		"name": '<i class="moltres pkmn"></i>Moltres',
		"value": "moltres"
	},
	{
		"name": '<i class="dratini pkmn"></i>Dratini',
		"value": "dratini"
	},
	{
		"name": '<i class="dragonair pkmn"></i>Dragonair',
		"value": "dragonair"
	},
	{
		"name": '<i class="dragonite pkmn"></i>Dragonite',
		"value": "dragonite"
	},
	{
		"name": '<i class="mewtwo pkmn"></i>Mewtwo',
		"value": "mewtwo"
	},
	{
		"name": '<i class="mew pkmn"></i>Mew',
		"value": "mew"
	},
	{
		"name": '<i class="chikorita pkmn"></i>Chikorita',
		"value": "chikorita"
	},
	{
		"name": '<i class="bayleef pkmn"></i>Bayleef',
		"value": "bayleef"
	},
	{
		"name": '<i class="meganium pkmn"></i>Meganium',
		"value": "meganium"
	},
	{
		"name": '<i class="cyndaquil pkmn"></i>Cyndaquil',
		"value": "cyndaquil"
	},
	{
		"name": '<i class="quilava pkmn"></i>Quilava',
		"value": "quilava"
	},
	{
		"name": '<i class="typhlosion pkmn"></i>Typhlosion',
		"value": "typhlosion"
	},
	{
		"name": '<i class="totodile pkmn"></i>Totodile',
		"value": "totodile"
	},
	{
		"name": '<i class="croconaw pkmn"></i>Croconaw',
		"value": "croconaw"
	},
	{
		"name": '<i class="feraligatr pkmn"></i>Feraligatr',
		"value": "feraligatr"
	},
	{
		"name": '<i class="sentret pkmn"></i>Sentret',
		"value": "sentret"
	},
	{
		"name": '<i class="furret pkmn"></i>Furret',
		"value": "furret"
	},
	{
		"name": '<i class="hoothoot pkmn"></i>Hoothoot',
		"value": "hoothoot"
	},
	{
		"name": '<i class="noctowl pkmn"></i>Noctowl',
		"value": "noctowl"
	},
	{
		"name": '<i class="ledyba pkmn"></i>Ledyba',
		"value": "ledyba"
	},
	{
		"name": '<i class="ledian pkmn"></i>Ledian',
		"value": "ledian"
	},
	{
		"name": '<i class="spinarak pkmn"></i>Spinarak',
		"value": "spinarak"
	},
	{
		"name": '<i class="ariados pkmn"></i>Ariados',
		"value": "ariados"
	},
	{
		"name": '<i class="crobat pkmn"></i>Crobat',
		"value": "crobat"
	},
	{
		"name": '<i class="chinchou pkmn"></i>Chinchou',
		"value": "chinchou"
	},
	{
		"name": '<i class="lanturn pkmn"></i>Lanturn',
		"value": "lanturn"
	},
	{
		"name": '<i class="pichu pkmn"></i>Pichu',
		"value": "pichu"
	},
	{
		"name": '<i class="cleffa pkmn"></i>Cleffa',
		"value": "cleffa"
	},
	{
		"name": '<i class="igglybuff pkmn"></i>Igglybuff',
		"value": "igglybuff"
	},
	{
		"name": '<i class="togepi pkmn"></i>Togepi',
		"value": "togepi"
	},
	{
		"name": '<i class="togetic pkmn"></i>Togetic',
		"value": "togetic"
	},
	{
		"name": '<i class="natu pkmn"></i>Natu',
		"value": "natu"
	},
	{
		"name": '<i class="xatu pkmn"></i>Xatu',
		"value": "xatu"
	},
	{
		"name": '<i class="mareep pkmn"></i>Mareep',
		"value": "mareep"
	},
	{
		"name": '<i class="flaaffy pkmn"></i>Flaaffy',
		"value": "flaaffy"
	},
	{
		"name": '<i class="ampharos pkmn"></i>Ampharos',
		"value": "ampharos"
	},
	{
		"name": '<i class="bellossom pkmn"></i>Bellossom',
		"value": "bellossom"
	},
	{
		"name": '<i class="marill pkmn"></i>Marill',
		"value": "marill"
	},
	{
		"name": '<i class="azumarill pkmn"></i>Azumarill',
		"value": "azumarill"
	},
	{
		"name": '<i class="sudowoodo pkmn"></i>Sudowoodo',
		"value": "sudowoodo"
	},
	{
		"name": '<i class="politoed pkmn"></i>Politoed',
		"value": "politoed"
	},
	{
		"name": '<i class="hoppip pkmn"></i>Hoppip',
		"value": "hoppip"
	},
	{
		"name": '<i class="skiploom pkmn"></i>Skiploom',
		"value": "skiploom"
	},
	{
		"name": '<i class="jumpluff pkmn"></i>Jumpluff',
		"value": "jumpluff"
	},
	{
		"name": '<i class="aipom pkmn"></i>Aipom',
		"value": "aipom"
	},
	{
		"name": '<i class="sunkern pkmn"></i>Sunkern',
		"value": "sunkern"
	},
	{
		"name": '<i class="sunflora pkmn"></i>Sunflora',
		"value": "sunflora"
	},
	{
		"name": '<i class="yanma pkmn"></i>Yanma',
		"value": "yanma"
	},
	{
		"name": '<i class="wooper pkmn"></i>Wooper',
		"value": "wooper"
	},
	{
		"name": '<i class="quagsire pkmn"></i>Quagsire',
		"value": "quagsire"
	},
	{
		"name": '<i class="espeon pkmn"></i>Espeon',
		"value": "espeon"
	},
	{
		"name": '<i class="umbreon pkmn"></i>Umbreon',
		"value": "umbreon"
	},
	{
		"name": '<i class="murkrow pkmn"></i>Murkrow',
		"value": "murkrow"
	},
	{
		"name": '<i class="slowking pkmn"></i>Slowking',
		"value": "slowking"
	},
	{
		"name": '<i class="misdreavus pkmn"></i>Misdreavus',
		"value": "misdreavus"
	},
	{
		"name": '<i class="unown-a pkmn"></i>Unown',
		"value": "unown-a"
	},
	{
		"name": '<i class="wobbuffet pkmn"></i>Wobbuffet',
		"value": "wobbuffet"
	},
	{
		"name": '<i class="girafarig pkmn"></i>Girafarig',
		"value": "girafarig"
	},
	{
		"name": '<i class="pineco pkmn"></i>Pineco',
		"value": "pineco"
	},
	{
		"name": '<i class="forretress pkmn"></i>Forretress',
		"value": "forretress"
	},
	{
		"name": '<i class="dunsparce pkmn"></i>Dunsparce',
		"value": "dunsparce"
	},
	{
		"name": '<i class="gligar pkmn"></i>Gligar',
		"value": "gligar"
	},
	{
		"name": '<i class="steelix pkmn"></i>Steelix',
		"value": "steelix"
	},
	{
		"name": '<i class="snubbull pkmn"></i>Snubbull',
		"value": "snubbull"
	},
	{
		"name": '<i class="granbull pkmn"></i>Granbull',
		"value": "granbull"
	},
	{
		"name": '<i class="qwilfish pkmn"></i>Qwilfish',
		"value": "qwilfish"
	},
	{
		"name": '<i class="scizor pkmn"></i>Scizor',
		"value": "scizor"
	},
	{
		"name": '<i class="shuckle pkmn"></i>Shuckle',
		"value": "shuckle"
	},
	{
		"name": '<i class="heracross pkmn"></i>Heracross',
		"value": "heracross"
	},
	{
		"name": '<i class="sneasel pkmn"></i>Sneasel',
		"value": "sneasel"
	},
	{
		"name": '<i class="teddiursa pkmn"></i>Teddiursa',
		"value": "teddiursa"
	},
	{
		"name": '<i class="ursaring pkmn"></i>Ursaring',
		"value": "ursaring"
	},
	{
		"name": '<i class="slugma pkmn"></i>Slugma',
		"value": "slugma"
	},
	{
		"name": '<i class="magcargo pkmn"></i>Magcargo',
		"value": "magcargo"
	},
	{
		"name": '<i class="swinub pkmn"></i>Swinub',
		"value": "swinub"
	},
	{
		"name": '<i class="piloswine pkmn"></i>Piloswine',
		"value": "piloswine"
	},
	{
		"name": '<i class="corsola pkmn"></i>Corsola',
		"value": "corsola"
	},
	{
		"name": '<i class="remoraid pkmn"></i>Remoraid',
		"value": "remoraid"
	},
	{
		"name": '<i class="octillery pkmn"></i>Octillery',
		"value": "octillery"
	},
	{
		"name": '<i class="delibird pkmn"></i>Delibird',
		"value": "delibird"
	},
	{
		"name": '<i class="mantine pkmn"></i>Mantine',
		"value": "mantine"
	},
	{
		"name": '<i class="skarmory pkmn"></i>Skarmory',
		"value": "skarmory"
	},
	{
		"name": '<i class="houndour pkmn"></i>Houndour',
		"value": "houndour"
	},
	{
		"name": '<i class="houndoom pkmn"></i>Houndoom',
		"value": "houndoom"
	},
	{
		"name": '<i class="kingdra pkmn"></i>Kingdra',
		"value": "kingdra"
	},
	{
		"name": '<i class="phanpy pkmn"></i>Phanpy',
		"value": "phanpy"
	},
	{
		"name": '<i class="donphan pkmn"></i>Donphan',
		"value": "donphan"
	},
	{
		"name": '<i class="porygon2 pkmn"></i>Porygon2',
		"value": "porygon2"
	},
	{
		"name": '<i class="stantler pkmn"></i>Stantler',
		"value": "stantler"
	},
	{
		"name": '<i class="smeargle pkmn"></i>Smeargle',
		"value": "smeargle"
	},
	{
		"name": '<i class="tyrogue pkmn"></i>Tyrogue',
		"value": "tyrogue"
	},
	{
		"name": '<i class="hitmontop pkmn"></i>Hitmontop',
		"value": "hitmontop"
	},
	{
		"name": '<i class="smoochum pkmn"></i>Smoochum',
		"value": "smoochum"
	},
	{
		"name": '<i class="elekid pkmn"></i>Elekid',
		"value": "elekid"
	},
	{
		"name": '<i class="magby pkmn"></i>Magby',
		"value": "magby"
	},
	{
		"name": '<i class="miltank pkmn"></i>Miltank',
		"value": "miltank"
	},
	{
		"name": '<i class="blissey pkmn"></i>Blissey',
		"value": "blissey"
	},
	{
		"name": '<i class="raikou pkmn"></i>Raikou',
		"value": "raikou"
	},
	{
		"name": '<i class="entei pkmn"></i>Entei',
		"value": "entei"
	},
	{
		"name": '<i class="suicune pkmn"></i>Suicune',
		"value": "suicune"
	},
	{
		"name": '<i class="larvitar pkmn"></i>Larvitar',
		"value": "larvitar"
	},
	{
		"name": '<i class="pupitar pkmn"></i>Pupitar',
		"value": "pupitar"
	},
	{
		"name": '<i class="tyranitar pkmn"></i>Tyranitar',
		"value": "tyranitar"
	},
	{
		"name": '<i class="lugia pkmn"></i>Lugia',
		"value": "lugia"
	},
	{
		"name": '<i class="ho-oh pkmn"></i>Ho-Oh',
		"value": "ho-oh"
	},
	{
		"name": '<i class="celebi pkmn"></i>Celebi',
		"value": "celebi"
	},
	{
		"name": '<i class="treecko pkmn"></i>Treecko',
		"value": "treecko"
	},
	{
		"name": '<i class="grovyle pkmn"></i>Grovyle',
		"value": "grovyle"
	},
	{
		"name": '<i class="sceptile pkmn"></i>Sceptile',
		"value": "sceptile"
	},
	{
		"name": '<i class="torchic pkmn"></i>Torchic',
		"value": "torchic"
	},
	{
		"name": '<i class="combusken pkmn"></i>Combusken',
		"value": "combusken"
	},
	{
		"name": '<i class="blaziken pkmn"></i>Blaziken',
		"value": "blaziken"
	},
	{
		"name": '<i class="mudkip pkmn"></i>Mudkip',
		"value": "mudkip"
	},
	{
		"name": '<i class="marshtomp pkmn"></i>Marshtomp',
		"value": "marshtomp"
	},
	{
		"name": '<i class="swampert pkmn"></i>Swampert',
		"value": "swampert"
	},
	{
		"name": '<i class="poochyena pkmn"></i>Poochyena',
		"value": "poochyena"
	},
	{
		"name": '<i class="mightyena pkmn"></i>Mightyena',
		"value": "mightyena"
	},
	{
		"name": '<i class="zigzagoon pkmn"></i>Zigzagoon',
		"value": "zigzagoon"
	},
	{
		"name": '<i class="linoone pkmn"></i>Linoone',
		"value": "linoone"
	},
	{
		"name": '<i class="wurmple pkmn"></i>Wurmple',
		"value": "wurmple"
	},
	{
		"name": '<i class="silcoon pkmn"></i>Silcoon',
		"value": "silcoon"
	},
	{
		"name": '<i class="beautifly pkmn"></i>Beautifly',
		"value": "beautifly"
	},
	{
		"name": '<i class="cascoon pkmn"></i>Cascoon',
		"value": "cascoon"
	},
	{
		"name": '<i class="dustox pkmn"></i>Dustox',
		"value": "dustox"
	},
	{
		"name": '<i class="lotad pkmn"></i>Lotad',
		"value": "lotad"
	},
	{
		"name": '<i class="lombre pkmn"></i>Lombre',
		"value": "lombre"
	},
	{
		"name": '<i class="ludicolo pkmn"></i>Ludicolo',
		"value": "ludicolo"
	},
	{
		"name": '<i class="seedot pkmn"></i>Seedot',
		"value": "seedot"
	},
	{
		"name": '<i class="nuzleaf pkmn"></i>Nuzleaf',
		"value": "nuzleaf"
	},
	{
		"name": '<i class="shiftry pkmn"></i>Shiftry',
		"value": "shiftry"
	},
	{
		"name": '<i class="taillow pkmn"></i>Taillow',
		"value": "taillow"
	},
	{
		"name": '<i class="swellow pkmn"></i>Swellow',
		"value": "swellow"
	},
	{
		"name": '<i class="wingull pkmn"></i>Wingull',
		"value": "wingull"
	},
	{
		"name": '<i class="pelipper pkmn"></i>Pelipper',
		"value": "pelipper"
	},
	{
		"name": '<i class="ralts pkmn"></i>Ralts',
		"value": "ralts"
	},
	{
		"name": '<i class="kirlia pkmn"></i>Kirlia',
		"value": "kirlia"
	},
	{
		"name": '<i class="gardevoir pkmn"></i>Gardevoir',
		"value": "gardevoir"
	},
	{
		"name": '<i class="surskit pkmn"></i>Surskit',
		"value": "surskit"
	},
	{
		"name": '<i class="masquerain pkmn"></i>Masquerain',
		"value": "masquerain"
	},
	{
		"name": '<i class="shroomish pkmn"></i>Shroomish',
		"value": "shroomish"
	},
	{
		"name": '<i class="breloom pkmn"></i>Breloom',
		"value": "breloom"
	},
	{
		"name": '<i class="slakoth pkmn"></i>Slakoth',
		"value": "slakoth"
	},
	{
		"name": '<i class="vigoroth pkmn"></i>Vigoroth',
		"value": "vigoroth"
	},
	{
		"name": '<i class="slaking pkmn"></i>Slaking',
		"value": "slaking"
	},
	{
		"name": '<i class="nincada pkmn"></i>Nincada',
		"value": "nincada"
	},
	{
		"name": '<i class="ninjask pkmn"></i>Ninjask',
		"value": "ninjask"
	},
	{
		"name": '<i class="shedinja pkmn"></i>Shedinja',
		"value": "shedinja"
	},
	{
		"name": '<i class="whismur pkmn"></i>Whismur',
		"value": "whismur"
	},
	{
		"name": '<i class="loudred pkmn"></i>Loudred',
		"value": "loudred"
	},
	{
		"name": '<i class="exploud pkmn"></i>Exploud',
		"value": "exploud"
	},
	{
		"name": '<i class="makuhita pkmn"></i>Makuhita',
		"value": "makuhita"
	},
	{
		"name": '<i class="hariyama pkmn"></i>Hariyama',
		"value": "hariyama"
	},
	{
		"name": '<i class="azurill pkmn"></i>Azurill',
		"value": "azurill"
	},
	{
		"name": '<i class="nosepass pkmn"></i>Nosepass',
		"value": "nosepass"
	},
	{
		"name": '<i class="skitty pkmn"></i>Skitty',
		"value": "skitty"
	},
	{
		"name": '<i class="delcatty pkmn"></i>Delcatty',
		"value": "delcatty"
	},
	{
		"name": '<i class="sableye pkmn"></i>Sableye',
		"value": "sableye"
	},
	{
		"name": '<i class="mawile pkmn"></i>Mawile',
		"value": "mawile"
	},
	{
		"name": '<i class="aron pkmn"></i>Aron',
		"value": "aron"
	},
	{
		"name": '<i class="lairon pkmn"></i>Lairon',
		"value": "lairon"
	},
	{
		"name": '<i class="aggron pkmn"></i>Aggron',
		"value": "aggron"
	},
	{
		"name": '<i class="meditite pkmn"></i>Meditite',
		"value": "meditite"
	},
	{
		"name": '<i class="medicham pkmn"></i>Medicham',
		"value": "medicham"
	},
	{
		"name": '<i class="electrike pkmn"></i>Electrike',
		"value": "electrike"
	},
	{
		"name": '<i class="manectric pkmn"></i>Manectric',
		"value": "manectric"
	},
	{
		"name": '<i class="plusle pkmn"></i>Plusle',
		"value": "plusle"
	},
	{
		"name": '<i class="minun pkmn"></i>Minun',
		"value": "minun"
	},
	{
		"name": '<i class="volbeat pkmn"></i>Volbeat',
		"value": "volbeat"
	},
	{
		"name": '<i class="illumise pkmn"></i>Illumise',
		"value": "illumise"
	},
	{
		"name": '<i class="roselia pkmn"></i>Roselia',
		"value": "roselia"
	},
	{
		"name": '<i class="gulpin pkmn"></i>Gulpin',
		"value": "gulpin"
	},
	{
		"name": '<i class="swalot pkmn"></i>Swalot',
		"value": "swalot"
	},
	{
		"name": '<i class="carvanha pkmn"></i>Carvanha',
		"value": "carvanha"
	},
	{
		"name": '<i class="sharpedo pkmn"></i>Sharpedo',
		"value": "sharpedo"
	},
	{
		"name": '<i class="wailmer pkmn"></i>Wailmer',
		"value": "wailmer"
	},
	{
		"name": '<i class="wailord pkmn"></i>Wailord',
		"value": "wailord"
	},
	{
		"name": '<i class="numel pkmn"></i>Numel',
		"value": "numel"
	},
	{
		"name": '<i class="camerupt pkmn"></i>Camerupt',
		"value": "camerupt"
	},
	{
		"name": '<i class="torkoal pkmn"></i>Torkoal',
		"value": "torkoal"
	},
	{
		"name": '<i class="spoink pkmn"></i>Spoink',
		"value": "spoink"
	},
	{
		"name": '<i class="grumpig pkmn"></i>Grumpig',
		"value": "grumpig"
	},
	{
		"name": '<i class="spinda pkmn"></i>Spinda',
		"value": "spinda"
	},
	{
		"name": '<i class="trapinch pkmn"></i>Trapinch',
		"value": "trapinch"
	},
	{
		"name": '<i class="vibrava pkmn"></i>Vibrava',
		"value": "vibrava"
	},
	{
		"name": '<i class="flygon pkmn"></i>Flygon',
		"value": "flygon"
	},
	{
		"name": '<i class="cacnea pkmn"></i>Cacnea',
		"value": "cacnea"
	},
	{
		"name": '<i class="cacturne pkmn"></i>Cacturne',
		"value": "cacturne"
	},
	{
		"name": '<i class="swablu pkmn"></i>Swablu',
		"value": "swablu"
	},
	{
		"name": '<i class="altaria pkmn"></i>Altaria',
		"value": "altaria"
	},
	{
		"name": '<i class="zangoose pkmn"></i>Zangoose',
		"value": "zangoose"
	},
	{
		"name": '<i class="seviper pkmn"></i>Seviper',
		"value": "seviper"
	},
	{
		"name": '<i class="lunatone pkmn"></i>Lunatone',
		"value": "lunatone"
	},
	{
		"name": '<i class="solrock pkmn"></i>Solrock',
		"value": "solrock"
	},
	{
		"name": '<i class="barboach pkmn"></i>Barboach',
		"value": "barboach"
	},
	{
		"name": '<i class="whiscash pkmn"></i>Whiscash',
		"value": "whiscash"
	},
	{
		"name": '<i class="corphish pkmn"></i>Corphish',
		"value": "corphish"
	},
	{
		"name": '<i class="crawdaunt pkmn"></i>Crawdaunt',
		"value": "crawdaunt"
	},
	{
		"name": '<i class="baltoy pkmn"></i>Baltoy',
		"value": "baltoy"
	},
	{
		"name": '<i class="claydol pkmn"></i>Claydol',
		"value": "claydol"
	},
	{
		"name": '<i class="lileep pkmn"></i>Lileep',
		"value": "lileep"
	},
	{
		"name": '<i class="cradily pkmn"></i>Cradily',
		"value": "cradily"
	},
	{
		"name": '<i class="anorith pkmn"></i>Anorith',
		"value": "anorith"
	},
	{
		"name": '<i class="armaldo pkmn"></i>Armaldo',
		"value": "armaldo"
	},
	{
		"name": '<i class="feebas pkmn"></i>Feebas',
		"value": "feebas"
	},
	{
		"name": '<i class="milotic pkmn"></i>Milotic',
		"value": "milotic"
	},
	{
		"name": '<i class="castform pkmn"></i>Castform',
		"value": "castform"
	},
	{
		"name": '<i class="kecleon pkmn"></i>Kecleon',
		"value": "kecleon"
	},
	{
		"name": '<i class="shuppet pkmn"></i>Shuppet',
		"value": "shuppet"
	},
	{
		"name": '<i class="banette pkmn"></i>Banette',
		"value": "banette"
	},
	{
		"name": '<i class="duskull pkmn"></i>Duskull',
		"value": "duskull"
	},
	{
		"name": '<i class="dusclops pkmn"></i>Dusclops',
		"value": "dusclops"
	},
	{
		"name": '<i class="tropius pkmn"></i>Tropius',
		"value": "tropius"
	},
	{
		"name": '<i class="chimecho pkmn"></i>Chimecho',
		"value": "chimecho"
	},
	{
		"name": '<i class="absol pkmn"></i>Absol',
		"value": "absol"
	},
	{
		"name": '<i class="wynaut pkmn"></i>Wynaut',
		"value": "wynaut"
	},
	{
		"name": '<i class="snorunt pkmn"></i>Snorunt',
		"value": "snorunt"
	},
	{
		"name": '<i class="glalie pkmn"></i>Glalie',
		"value": "glalie"
	},
	{
		"name": '<i class="spheal pkmn"></i>Spheal',
		"value": "spheal"
	},
	{
		"name": '<i class="sealeo pkmn"></i>Sealeo',
		"value": "sealeo"
	},
	{
		"name": '<i class="walrein pkmn"></i>Walrein',
		"value": "walrein"
	},
	{
		"name": '<i class="clamperl pkmn"></i>Clamperl',
		"value": "clamperl"
	},
	{
		"name": '<i class="huntail pkmn"></i>Huntail',
		"value": "huntail"
	},
	{
		"name": '<i class="gorebyss pkmn"></i>Gorebyss',
		"value": "gorebyss"
	},
	{
		"name": '<i class="relicanth pkmn"></i>Relicanth',
		"value": "relicanth"
	},
	{
		"name": '<i class="luvdisc pkmn"></i>Luvdisc',
		"value": "luvdisc"
	},
	{
		"name": '<i class="bagon pkmn"></i>Bagon',
		"value": "bagon"
	},
	{
		"name": '<i class="shelgon pkmn"></i>Shelgon',
		"value": "shelgon"
	},
	{
		"name": '<i class="salamence pkmn"></i>Salamence',
		"value": "salamence"
	},
	{
		"name": '<i class="beldum pkmn"></i>Beldum',
		"value": "beldum"
	},
	{
		"name": '<i class="metang pkmn"></i>Metang',
		"value": "metang"
	},
	{
		"name": '<i class="metagross pkmn"></i>Metagross',
		"value": "metagross"
	},
	{
		"name": '<i class="regirock pkmn"></i>Regirock',
		"value": "regirock"
	},
	{
		"name": '<i class="regice pkmn"></i>Regice',
		"value": "regice"
	},
	{
		"name": '<i class="registeel pkmn"></i>Registeel',
		"value": "registeel"
	},
	{
		"name": '<i class="latias pkmn"></i>Latias',
		"value": "latias"
	},
	{
		"name": '<i class="latios pkmn"></i>Latios',
		"value": "latios"
	},
	{
		"name": '<i class="kyogre pkmn"></i>Kyogre',
		"value": "kyogre"
	},
	{
		"name": '<i class="groudon pkmn"></i>Groudon',
		"value": "groudon"
	},
	{
		"name": '<i class="rayquaza pkmn"></i>Rayquaza',
		"value": "rayquaza"
	},
	{
		"name": '<i class="jirachi pkmn"></i>Jirachi',
		"value": "jirachi"
	},
	{
		"name": '<i class="deoxys pkmn"></i>Deoxys',
		"value": "deoxys"
	},
	{
		"name": '<i class="turtwig pkmn"></i>Turtwig',
		"value": "turtwig"
	},
	{
		"name": '<i class="grotle pkmn"></i>Grotle',
		"value": "grotle"
	},
	{
		"name": '<i class="torterra pkmn"></i>Torterra',
		"value": "torterra"
	},
	{
		"name": '<i class="chimchar pkmn"></i>Chimchar',
		"value": "chimchar"
	},
	{
		"name": '<i class="monferno pkmn"></i>Monferno',
		"value": "monferno"
	},
	{
		"name": '<i class="infernape pkmn"></i>Infernape',
		"value": "infernape"
	},
	{
		"name": '<i class="piplup pkmn"></i>Piplup',
		"value": "piplup"
	},
	{
		"name": '<i class="prinplup pkmn"></i>Prinplup',
		"value": "prinplup"
	},
	{
		"name": '<i class="empoleon pkmn"></i>Empoleon',
		"value": "empoleon"
	},
	{
		"name": '<i class="starly pkmn"></i>Starly',
		"value": "starly"
	},
	{
		"name": '<i class="staravia pkmn"></i>Staravia',
		"value": "staravia"
	},
	{
		"name": '<i class="staraptor pkmn"></i>Staraptor',
		"value": "staraptor"
	},
	{
		"name": '<i class="bidoof pkmn"></i>Bidoof',
		"value": "bidoof"
	},
	{
		"name": '<i class="bibarel pkmn"></i>Bibarel',
		"value": "bibarel"
	},
	{
		"name": '<i class="kricketot pkmn"></i>Kricketot',
		"value": "kricketot"
	},
	{
		"name": '<i class="kricketune pkmn"></i>Kricketune',
		"value": "kricketune"
	},
	{
		"name": '<i class="shinx pkmn"></i>Shinx',
		"value": "shinx"
	},
	{
		"name": '<i class="luxio pkmn"></i>Luxio',
		"value": "luxio"
	},
	{
		"name": '<i class="luxray pkmn"></i>Luxray',
		"value": "luxray"
	},
	{
		"name": '<i class="budew pkmn"></i>Budew',
		"value": "budew"
	},
	{
		"name": '<i class="roserade pkmn"></i>Roserade',
		"value": "roserade"
	},
	{
		"name": '<i class="cranidos pkmn"></i>Cranidos',
		"value": "cranidos"
	},
	{
		"name": '<i class="rampardos pkmn"></i>Rampardos',
		"value": "rampardos"
	},
	{
		"name": '<i class="shieldon pkmn"></i>Shieldon',
		"value": "shieldon"
	},
	{
		"name": '<i class="bastiodon pkmn"></i>Bastiodon',
		"value": "bastiodon"
	},
	{
		"name": '<i class="burmy-plant pkmn"></i>Burmy',
		"value": "burmy-plant"
	},
	{
		"name": '<i class="wormadam-plant pkmn"></i>Wormadam',
		"value": "wormadam-plant"
	},
	{
		"name": '<i class="mothim pkmn"></i>Mothim',
		"value": "mothim"
	},
	{
		"name": '<i class="combee pkmn"></i>Combee',
		"value": "combee"
	},
	{
		"name": '<i class="vespiquen pkmn"></i>Vespiquen',
		"value": "vespiquen"
	},
	{
		"name": '<i class="pachirisu pkmn"></i>Pachirisu',
		"value": "pachirisu"
	},
	{
		"name": '<i class="buizel pkmn"></i>Buizel',
		"value": "buizel"
	},
	{
		"name": '<i class="floatzel pkmn"></i>Floatzel',
		"value": "floatzel"
	},
	{
		"name": '<i class="cherubi pkmn"></i>Cherubi',
		"value": "cherubi"
	},
	{
		"name": '<i class="cherrim pkmn"></i>Cherrim',
		"value": "cherrim"
	},
	{
		"name": '<i class="shellos-east pkmn"></i>Shellos',
		"value": "shellos-east"
	},
	{
		"name": '<i class="gastrodon-east pkmn"></i>Gastrodon',
		"value": "gastrodon-east"
	},
	{
		"name": '<i class="ambipom pkmn"></i>Ambipom',
		"value": "ambipom"
	},
	{
		"name": '<i class="drifloon pkmn"></i>Drifloon',
		"value": "drifloon"
	},
	{
		"name": '<i class="drifblim pkmn"></i>Drifblim',
		"value": "drifblim"
	},
	{
		"name": '<i class="buneary pkmn"></i>Buneary',
		"value": "buneary"
	},
	{
		"name": '<i class="lopunny pkmn"></i>Lopunny',
		"value": "lopunny"
	},
	{
		"name": '<i class="mismagius pkmn"></i>Mismagius',
		"value": "mismagius"
	},
	{
		"name": '<i class="honchkrow pkmn"></i>Honchkrow',
		"value": "honchkrow"
	},
	{
		"name": '<i class="glameow pkmn"></i>Glameow',
		"value": "glameow"
	},
	{
		"name": '<i class="purugly pkmn"></i>Purugly',
		"value": "purugly"
	},
	{
		"name": '<i class="chingling pkmn"></i>Chingling',
		"value": "chingling"
	},
	{
		"name": '<i class="stunky pkmn"></i>Stunky',
		"value": "stunky"
	},
	{
		"name": '<i class="skuntank pkmn"></i>Skuntank',
		"value": "skuntank"
	},
	{
		"name": '<i class="bronzor pkmn"></i>Bronzor',
		"value": "bronzor"
	},
	{
		"name": '<i class="bronzong pkmn"></i>Bronzong',
		"value": "bronzong"
	},
	{
		"name": '<i class="bonsly pkmn"></i>Bonsly',
		"value": "bonsly"
	},
	{
		"name": '<i class="mime-jr pkmn"></i>Mime Jr.',
		"value": "mime-jr"
	},
	{
		"name": '<i class="happiny pkmn"></i>Happiny',
		"value": "happiny"
	},
	{
		"name": '<i class="chatot pkmn"></i>Chatot',
		"value": "chatot"
	},
	{
		"name": '<i class="spiritomb pkmn"></i>Spiritomb',
		"value": "spiritomb"
	},
	{
		"name": '<i class="gible pkmn"></i>Gible',
		"value": "gible"
	},
	{
		"name": '<i class="gabite pkmn"></i>Gabite',
		"value": "gabite"
	},
	{
		"name": '<i class="garchomp pkmn"></i>Garchomp',
		"value": "garchomp"
	},
	{
		"name": '<i class="munchlax pkmn"></i>Munchlax',
		"value": "munchlax"
	},
	{
		"name": '<i class="riolu pkmn"></i>Riolu',
		"value": "riolu"
	},
	{
		"name": '<i class="lucario pkmn"></i>Lucario',
		"value": "lucario"
	},
	{
		"name": '<i class="hippopotas pkmn"></i>Hippopotas',
		"value": "hippopotas"
	},
	{
		"name": '<i class="hippowdon pkmn"></i>Hippowdon',
		"value": "hippowdon"
	},
	{
		"name": '<i class="skorupi pkmn"></i>Skorupi',
		"value": "skorupi"
	},
	{
		"name": '<i class="drapion pkmn"></i>Drapion',
		"value": "drapion"
	},
	{
		"name": '<i class="croagunk pkmn"></i>Croagunk',
		"value": "croagunk"
	},
	{
		"name": '<i class="toxicroak pkmn"></i>Toxicroak',
		"value": "toxicroak"
	},
	{
		"name": '<i class="carnivine pkmn"></i>Carnivine',
		"value": "carnivine"
	},
	{
		"name": '<i class="finneon pkmn"></i>Finneon',
		"value": "finneon"
	},
	{
		"name": '<i class="lumineon pkmn"></i>Lumineon',
		"value": "lumineon"
	},
	{
		"name": '<i class="mantyke pkmn"></i>Mantyke',
		"value": "mantyke"
	},
	{
		"name": '<i class="snover pkmn"></i>Snover',
		"value": "snover"
	},
	{
		"name": '<i class="abomasnow pkmn"></i>Abomasnow',
		"value": "abomasnow"
	},
	{
		"name": '<i class="weavile pkmn"></i>Weavile',
		"value": "weavile"
	},
	{
		"name": '<i class="magnezone pkmn"></i>Magnezone',
		"value": "magnezone"
	},
	{
		"name": '<i class="lickilicky pkmn"></i>Lickilicky',
		"value": "lickilicky"
	},
	{
		"name": '<i class="rhyperior pkmn"></i>Rhyperior',
		"value": "rhyperior"
	},
	{
		"name": '<i class="tangrowth pkmn"></i>Tangrowth',
		"value": "tangrowth"
	},
	{
		"name": '<i class="electivire pkmn"></i>Electivire',
		"value": "electivire"
	},
	{
		"name": '<i class="magmortar pkmn"></i>Magmortar',
		"value": "magmortar"
	},
	{
		"name": '<i class="togekiss pkmn"></i>Togekiss',
		"value": "togekiss"
	},
	{
		"name": '<i class="yanmega pkmn"></i>Yanmega',
		"value": "yanmega"
	},
	{
		"name": '<i class="leafeon pkmn"></i>Leafeon',
		"value": "leafeon"
	},
	{
		"name": '<i class="glaceon pkmn"></i>Glaceon',
		"value": "glaceon"
	},
	{
		"name": '<i class="gliscor pkmn"></i>Gliscor',
		"value": "gliscor"
	},
	{
		"name": '<i class="mamoswine pkmn"></i>Mamoswine',
		"value": "mamoswine"
	},
	{
		"name": '<i class="porygon-z pkmn"></i>Porygon-Z',
		"value": "porygon-z"
	},
	{
		"name": '<i class="gallade pkmn"></i>Gallade',
		"value": "gallade"
	},
	{
		"name": '<i class="probopass pkmn"></i>Probopass',
		"value": "probopass"
	},
	{
		"name": '<i class="dusknoir pkmn"></i>Dusknoir',
		"value": "dusknoir"
	},
	{
		"name": '<i class="froslass pkmn"></i>Froslass',
		"value": "froslass"
	},
	{
		"name": '<i class="rotom pkmn"></i>Rotom',
		"value": "rotom"
	},
	{
		"name": '<i class="uxie pkmn"></i>Uxie',
		"value": "uxie"
	},
	{
		"name": '<i class="mesprit pkmn"></i>Mesprit',
		"value": "mesprit"
	},
	{
		"name": '<i class="azelf pkmn"></i>Azelf',
		"value": "azelf"
	},
	{
		"name": '<i class="dialga pkmn"></i>Dialga',
		"value": "dialga"
	},
	{
		"name": '<i class="palkia pkmn"></i>Palkia',
		"value": "palkia"
	},
	{
		"name": '<i class="heatran pkmn"></i>Heatran',
		"value": "heatran"
	},
	{
		"name": '<i class="regigigas pkmn"></i>Regigigas',
		"value": "regigigas"
	},
	{
		"name": '<i class="giratina pkmn"></i>Giratina',
		"value": "giratina"
	},
	{
		"name": '<i class="cresselia pkmn"></i>Cresselia',
		"value": "cresselia"
	},
	{
		"name": '<i class="phione pkmn"></i>Phione',
		"value": "phione"
	},
	{
		"name": '<i class="manaphy pkmn"></i>Manaphy',
		"value": "manaphy"
	},
	{
		"name": '<i class="darkrai pkmn"></i>Darkrai',
		"value": "darkrai"
	},
	{
		"name": '<i class="shaymin pkmn"></i>Shaymin',
		"value": "shaymin"
	},
	{
		"name": '<i class="arceus pkmn"></i>Arceus',
		"value": "arceus"
	},
	{
		"name": '<i class="victini pkmn"></i>Victini',
		"value": "victini"
	},
	{
		"name": '<i class="snivy pkmn"></i>Snivy',
		"value": "snivy"
	},
	{
		"name": '<i class="servine pkmn"></i>Servine',
		"value": "servine"
	},
	{
		"name": '<i class="serperior pkmn"></i>Serperior',
		"value": "serperior"
	},
	{
		"name": '<i class="tepig pkmn"></i>Tepig',
		"value": "tepig"
	},
	{
		"name": '<i class="pignite pkmn"></i>Pignite',
		"value": "pignite"
	},
	{
		"name": '<i class="emboar pkmn"></i>Emboar',
		"value": "emboar"
	},
	{
		"name": '<i class="oshawott pkmn"></i>Oshawott',
		"value": "oshawott"
	},
	{
		"name": '<i class="dewott pkmn"></i>Dewott',
		"value": "dewott"
	},
	{
		"name": '<i class="samurott pkmn"></i>Samurott',
		"value": "samurott"
	},
	{
		"name": '<i class="patrat pkmn"></i>Patrat',
		"value": "patrat"
	},
	{
		"name": '<i class="watchog pkmn"></i>Watchog',
		"value": "watchog"
	},
	{
		"name": '<i class="lillipup pkmn"></i>Lillipup',
		"value": "lillipup"
	},
	{
		"name": '<i class="herdier pkmn"></i>Herdier',
		"value": "herdier"
	},
	{
		"name": '<i class="stoutland pkmn"></i>Stoutland',
		"value": "stoutland"
	},
	{
		"name": '<i class="purrloin pkmn"></i>Purrloin',
		"value": "purrloin"
	},
	{
		"name": '<i class="liepard pkmn"></i>Liepard',
		"value": "liepard"
	},
	{
		"name": '<i class="pansage pkmn"></i>Pansage',
		"value": "pansage"
	},
	{
		"name": '<i class="simisage pkmn"></i>Simisage',
		"value": "simisage"
	},
	{
		"name": '<i class="pansear pkmn"></i>Pansear',
		"value": "pansear"
	},
	{
		"name": '<i class="simisear pkmn"></i>Simisear',
		"value": "simisear"
	},
	{
		"name": '<i class="panpour pkmn"></i>Panpour',
		"value": "panpour"
	},
	{
		"name": '<i class="simipour pkmn"></i>Simipour',
		"value": "simipour"
	},
	{
		"name": '<i class="munna pkmn"></i>Munna',
		"value": "munna"
	},
	{
		"name": '<i class="musharna pkmn"></i>Musharna',
		"value": "musharna"
	},
	{
		"name": '<i class="pidove pkmn"></i>Pidove',
		"value": "pidove"
	},
	{
		"name": '<i class="tranquill pkmn"></i>Tranquill',
		"value": "tranquill"
	},
	{
		"name": '<i class="unfezant-male pkmn"></i>Unfezant',
		"value": "unfezant-male"
	},
	{
		"name": '<i class="blitzle pkmn"></i>Blitzle',
		"value": "blitzle"
	},
	{
		"name": '<i class="zebstrika pkmn"></i>Zebstrika',
		"value": "zebstrika"
	},
	{
		"name": '<i class="roggenrola pkmn"></i>Roggenrola',
		"value": "roggenrola"
	},
	{
		"name": '<i class="boldore pkmn"></i>Boldore',
		"value": "boldore"
	},
	{
		"name": '<i class="gigalith pkmn"></i>Gigalith',
		"value": "gigalith"
	},
	{
		"name": '<i class="woobat pkmn"></i>Woobat',
		"value": "woobat"
	},
	{
		"name": '<i class="swoobat pkmn"></i>Swoobat',
		"value": "swoobat"
	},
	{
		"name": '<i class="drilbur pkmn"></i>Drilbur',
		"value": "drilbur"
	},
	{
		"name": '<i class="excadrill pkmn"></i>Excadrill',
		"value": "excadrill"
	},
	{
		"name": '<i class="audino pkmn"></i>Audino',
		"value": "audino"
	},
	{
		"name": '<i class="timburr pkmn"></i>Timburr',
		"value": "timburr"
	},
	{
		"name": '<i class="gurdurr pkmn"></i>Gurdurr',
		"value": "gurdurr"
	},
	{
		"name": '<i class="conkeldurr pkmn"></i>Conkeldurr',
		"value": "conkeldurr"
	},
	{
		"name": '<i class="tympole pkmn"></i>Tympole',
		"value": "tympole"
	},
	{
		"name": '<i class="palpitoad pkmn"></i>Palpitoad',
		"value": "palpitoad"
	},
	{
		"name": '<i class="seismitoad pkmn"></i>Seismitoad',
		"value": "seismitoad"
	},
	{
		"name": '<i class="throh pkmn"></i>Throh',
		"value": "throh"
	},
	{
		"name": '<i class="sawk pkmn"></i>Sawk',
		"value": "sawk"
	},
	{
		"name": '<i class="sewaddle pkmn"></i>Sewaddle',
		"value": "sewaddle"
	},
	{
		"name": '<i class="swadloon pkmn"></i>Swadloon',
		"value": "swadloon"
	},
	{
		"name": '<i class="leavanny pkmn"></i>Leavanny',
		"value": "leavanny"
	},
	{
		"name": '<i class="venipede pkmn"></i>Venipede',
		"value": "venipede"
	},
	{
		"name": '<i class="whirlipede pkmn"></i>Whirlipede',
		"value": "whirlipede"
	},
	{
		"name": '<i class="scolipede pkmn"></i>Scolipede',
		"value": "scolipede"
	},
	{
		"name": '<i class="cottonee pkmn"></i>Cottonee',
		"value": "cottonee"
	},
	{
		"name": '<i class="whimsicott pkmn"></i>Whimsicott',
		"value": "whimsicott"
	},
	{
		"name": '<i class="petilil pkmn"></i>Petilil',
		"value": "petilil"
	},
	{
		"name": '<i class="lilligant pkmn"></i>Lilligant',
		"value": "lilligant"
	},
	{
		"name": '<i class="basculin-red-striped pkmn"></i>Basculin',
		"value": "basculin-red-striped"
	},
	{
		"name": '<i class="sandile pkmn"></i>Sandile',
		"value": "sandile"
	},
	{
		"name": '<i class="krokorok pkmn"></i>Krokorok',
		"value": "krokorok"
	},
	{
		"name": '<i class="krookodile pkmn"></i>Krookodile',
		"value": "krookodile"
	},
	{
		"name": '<i class="darumaka pkmn"></i>Darumaka',
		"value": "darumaka"
	},
	{
		"name": '<i class="darmanitan pkmn"></i>Darmanitan',
		"value": "darmanitan"
	},
	{
		"name": '<i class="maractus pkmn"></i>Maractus',
		"value": "maractus"
	},
	{
		"name": '<i class="dwebble pkmn"></i>Dwebble',
		"value": "dwebble"
	},
	{
		"name": '<i class="crustle pkmn"></i>Crustle',
		"value": "crustle"
	},
	{
		"name": '<i class="scraggy pkmn"></i>Scraggy',
		"value": "scraggy"
	},
	{
		"name": '<i class="scrafty pkmn"></i>Scrafty',
		"value": "scrafty"
	},
	{
		"name": '<i class="sigilyph pkmn"></i>Sigilyph',
		"value": "sigilyph"
	},
	{
		"name": '<i class="yamask pkmn"></i>Yamask',
		"value": "yamask"
	},
	{
		"name": '<i class="cofagrigus pkmn"></i>Cofagrigus',
		"value": "cofagrigus"
	},
	{
		"name": '<i class="tirtouga pkmn"></i>Tirtouga',
		"value": "tirtouga"
	},
	{
		"name": '<i class="carracosta pkmn"></i>Carracosta',
		"value": "carracosta"
	},
	{
		"name": '<i class="archen pkmn"></i>Archen',
		"value": "archen"
	},
	{
		"name": '<i class="archeops pkmn"></i>Archeops',
		"value": "archeops"
	},
	{
		"name": '<i class="trubbish pkmn"></i>Trubbish',
		"value": "trubbish"
	},
	{
		"name": '<i class="garbodor pkmn"></i>Garbodor',
		"value": "garbodor"
	},
	{
		"name": '<i class="zorua pkmn"></i>Zorua',
		"value": "zorua"
	},
	{
		"name": '<i class="zoroark pkmn"></i>Zoroark',
		"value": "zoroark"
	},
	{
		"name": '<i class="minccino pkmn"></i>Minccino',
		"value": "minccino"
	},
	{
		"name": '<i class="cinccino pkmn"></i>Cinccino',
		"value": "cinccino"
	},
	{
		"name": '<i class="gothita pkmn"></i>Gothita',
		"value": "gothita"
	},
	{
		"name": '<i class="gothorita pkmn"></i>Gothorita',
		"value": "gothorita"
	},
	{
		"name": '<i class="gothitelle pkmn"></i>Gothitelle',
		"value": "gothitelle"
	},
	{
		"name": '<i class="solosis pkmn"></i>Solosis',
		"value": "solosis"
	},
	{
		"name": '<i class="duosion pkmn"></i>Duosion',
		"value": "duosion"
	},
	{
		"name": '<i class="reuniclus pkmn"></i>Reuniclus',
		"value": "reuniclus"
	},
	{
		"name": '<i class="ducklett pkmn"></i>Ducklett',
		"value": "ducklett"
	},
	{
		"name": '<i class="swanna pkmn"></i>Swanna',
		"value": "swanna"
	},
	{
		"name": '<i class="vanillite pkmn"></i>Vanillite',
		"value": "vanillite"
	},
	{
		"name": '<i class="vanillish pkmn"></i>Vanillish',
		"value": "vanillish"
	},
	{
		"name": '<i class="vanilluxe pkmn"></i>Vanilluxe',
		"value": "vanilluxe"
	},
	{
		"name": '<i class="deerling-spring pkmn"></i>Deerling',
		"value": "deerling-spring"
	},
	{
		"name": '<i class="sawsbuck-spring pkmn"></i>Sawsbuck',
		"value": "sawsbuck-spring"
	},
	{
		"name": '<i class="emolga pkmn"></i>Emolga',
		"value": "emolga"
	},
	{
		"name": '<i class="karrablast pkmn"></i>Karrablast',
		"value": "karrablast"
	},
	{
		"name": '<i class="escavalier pkmn"></i>Escavalier',
		"value": "escavalier"
	},
	{
		"name": '<i class="foongus pkmn"></i>Foongus',
		"value": "foongus"
	},
	{
		"name": '<i class="amoonguss pkmn"></i>Amoonguss',
		"value": "amoonguss"
	},
	{
		"name": '<i class="frillish-male pkmn"></i>Frillish',
		"value": "frillish-male"
	},
	{
		"name": '<i class="jellicent-male pkmn"></i>Jellicent',
		"value": "jellicent-male"
	},
	{
		"name": '<i class="alomomola pkmn"></i>Alomomola',
		"value": "alomomola"
	},
	{
		"name": '<i class="joltik pkmn"></i>Joltik',
		"value": "joltik"
	},
	{
		"name": '<i class="galvantula pkmn"></i>Galvantula',
		"value": "galvantula"
	},
	{
		"name": '<i class="ferroseed pkmn"></i>Ferroseed',
		"value": "ferroseed"
	},
	{
		"name": '<i class="ferrothorn pkmn"></i>Ferrothorn',
		"value": "ferrothorn"
	},
	{
		"name": '<i class="klink pkmn"></i>Klink',
		"value": "klink"
	},
	{
		"name": '<i class="klang pkmn"></i>Klang',
		"value": "klang"
	},
	{
		"name": '<i class="klinklang pkmn"></i>Klinklang',
		"value": "klinklang"
	},
	{
		"name": '<i class="tynamo pkmn"></i>Tynamo',
		"value": "tynamo"
	},
	{
		"name": '<i class="eelektrik pkmn"></i>Eelektrik',
		"value": "eelektrik"
	},
	{
		"name": '<i class="eelektross pkmn"></i>Eelektross',
		"value": "eelektross"
	},
	{
		"name": '<i class="elgyem pkmn"></i>Elgyem',
		"value": "elgyem"
	},
	{
		"name": '<i class="beheeyem pkmn"></i>Beheeyem',
		"value": "beheeyem"
	},
	{
		"name": '<i class="litwick pkmn"></i>Litwick',
		"value": "litwick"
	},
	{
		"name": '<i class="lampent pkmn"></i>Lampent',
		"value": "lampent"
	},
	{
		"name": '<i class="chandelure pkmn"></i>Chandelure',
		"value": "chandelure"
	},
	{
		"name": '<i class="axew pkmn"></i>Axew',
		"value": "axew"
	},
	{
		"name": '<i class="fraxure pkmn"></i>Fraxure',
		"value": "fraxure"
	},
	{
		"name": '<i class="haxorus pkmn"></i>Haxorus',
		"value": "haxorus"
	},
	{
		"name": '<i class="cubchoo pkmn"></i>Cubchoo',
		"value": "cubchoo"
	},
	{
		"name": '<i class="beartic pkmn"></i>Beartic',
		"value": "beartic"
	},
	{
		"name": '<i class="cryogonal pkmn"></i>Cryogonal',
		"value": "cryogonal"
	},
	{
		"name": '<i class="shelmet pkmn"></i>Shelmet',
		"value": "shelmet"
	},
	{
		"name": '<i class="accelgor pkmn"></i>Accelgor',
		"value": "accelgor"
	},
	{
		"name": '<i class="stunfisk pkmn"></i>Stunfisk',
		"value": "stunfisk"
	},
	{
		"name": '<i class="mienfoo pkmn"></i>Mienfoo',
		"value": "mienfoo"
	},
	{
		"name": '<i class="mienshao pkmn"></i>Mienshao',
		"value": "mienshao"
	},
	{
		"name": '<i class="druddigon pkmn"></i>Druddigon',
		"value": "druddigon"
	},
	{
		"name": '<i class="golett pkmn"></i>Golett',
		"value": "golett"
	},
	{
		"name": '<i class="golurk pkmn"></i>Golurk',
		"value": "golurk"
	},
	{
		"name": '<i class="pawniard pkmn"></i>Pawniard',
		"value": "pawniard"
	},
	{
		"name": '<i class="bisharp pkmn"></i>Bisharp',
		"value": "bisharp"
	},
	{
		"name": '<i class="bouffalant pkmn"></i>Bouffalant',
		"value": "bouffalant"
	},
	{
		"name": '<i class="rufflet pkmn"></i>Rufflet',
		"value": "rufflet"
	},
	{
		"name": '<i class="braviary pkmn"></i>Braviary',
		"value": "braviary"
	},
	{
		"name": '<i class="vullaby pkmn"></i>Vullaby',
		"value": "vullaby"
	},
	{
		"name": '<i class="mandibuzz pkmn"></i>Mandibuzz',
		"value": "mandibuzz"
	},
	{
		"name": '<i class="heatmor pkmn"></i>Heatmor',
		"value": "heatmor"
	},
	{
		"name": '<i class="durant pkmn"></i>Durant',
		"value": "durant"
	},
	{
		"name": '<i class="deino pkmn"></i>Deino',
		"value": "deino"
	},
	{
		"name": '<i class="zweilous pkmn"></i>Zweilous',
		"value": "zweilous"
	},
	{
		"name": '<i class="hydreigon pkmn"></i>Hydreigon',
		"value": "hydreigon"
	},
	{
		"name": '<i class="larvesta pkmn"></i>Larvesta',
		"value": "larvesta"
	},
	{
		"name": '<i class="volcarona pkmn"></i>Volcarona',
		"value": "volcarona"
	},
	{
		"name": '<i class="cobalion pkmn"></i>Cobalion',
		"value": "cobalion"
	},
	{
		"name": '<i class="terrakion pkmn"></i>Terrakion',
		"value": "terrakion"
	},
	{
		"name": '<i class="virizion pkmn"></i>Virizion',
		"value": "virizion"
	},
	{
		"name": '<i class="tornadus pkmn"></i>Tornadus',
		"value": "tornadus"
	},
	{
		"name": '<i class="thundurus pkmn"></i>Thundurus',
		"value": "thundurus"
	},
	{
		"name": '<i class="reshiram pkmn"></i>Reshiram',
		"value": "reshiram"
	},
	{
		"name": '<i class="zekrom  pkmn"></i>Zekrom ',
		"value": ""
	},
	{
		"name": '<i class="landorus pkmn"></i>Landorus',
		"value": "landorus"
	},
	{
		"name": '<i class="kyurem pkmn"></i>Kyurem',
		"value": "kyurem"
	},
	{
		"name": '<i class="keldeo pkmn"></i>Keldeo',
		"value": "keldeo"
	},
	{
		"name": '<i class="meloetta pkmn"></i>Meloetta',
		"value": "meloetta"
	},
	{
		"name": '<i class="genesect pkmn"></i>Genesect',
		"value": "genesect"
	},
	{
		"name": '<i class="chespin pkmn"></i>Chespin',
		"value": "chespin"
	},
	{
		"name": '<i class="quilladin pkmn"></i>Quilladin',
		"value": "quilladin"
	},
	{
		"name": '<i class="chesnaught pkmn"></i>Chesnaught',
		"value": "chesnaught"
	},
	{
		"name": '<i class="fennekin pkmn"></i>Fennekin',
		"value": "fennekin"
	},
	{
		"name": '<i class="braixen pkmn"></i>Braixen',
		"value": "braixen"
	},
	{
		"name": '<i class="delphox pkmn"></i>Delphox',
		"value": "delphox"
	},
	{
		"name": '<i class="froakie pkmn"></i>Froakie',
		"value": "froakie"
	},
	{
		"name": '<i class="frogadier pkmn"></i>Frogadier',
		"value": "frogadier"
	},
	{
		"name": '<i class="greninja pkmn"></i>Greninja',
		"value": "greninja"
	},
	{
		"name": '<i class="bunnelby pkmn"></i>Bunnelby',
		"value": "bunnelby"
	},
	{
		"name": '<i class="diggersby pkmn"></i>Diggersby',
		"value": "diggersby"
	},
	{
		"name": '<i class="fletchling pkmn"></i>Fletchling',
		"value": "fletchling"
	},
	{
		"name": '<i class="fletchinder pkmn"></i>Fletchinder',
		"value": "fletchinder"
	},
	{
		"name": '<i class="talonflame pkmn"></i>Talonflame',
		"value": "talonflame"
	},
	{
		"name": '<i class="scatterbug pkmn"></i>Scatterbug',
		"value": "scatterbug"
	},
	{
		"name": '<i class="spewpa pkmn"></i>Spewpa',
		"value": "spewpa"
	},
	{
		"name": '<i class="vivillon-meadow pkmn"></i>Vivillon',
		"value": "vivillon-meadow"
	},
	{
		"name": '<i class="litleo pkmn"></i>Litleo',
		"value": "litleo"
	},
	{
		"name": '<i class="pyroar-male pkmn"></i>Pyroar',
		"value": "pyroar-male"
	},
	{
		"name": '<i class="flabebe-red pkmn"></i>Flabébé',
		"value": "flabebe-red"
	},
	{
		"name": '<i class="floette-red pkmn"></i>Floette',
		"value": "floette-red"
	},
	{
		"name": '<i class="florges-red pkmn"></i>Florges',
		"value": "florges-red"
	},
	{
		"name": '<i class="skiddo pkmn"></i>Skiddo',
		"value": "skiddo"
	},
	{
		"name": '<i class="gogoat pkmn"></i>Gogoat',
		"value": "gogoat"
	},
	{
		"name": '<i class="pancham pkmn"></i>Pancham',
		"value": "pancham"
	},
	{
		"name": '<i class="pangoro pkmn"></i>Pangoro',
		"value": "pangoro"
	},
	{
		"name": '<i class="furfrou-natural pkmn"></i>Furfrou',
		"value": "furfrou-natural"
	},
	{
		"name": '<i class="espurr pkmn"></i>Espurr',
		"value": "espurr"
	},
	{
		"name": '<i class="meowstic-male pkmn"></i>Meowstic',
		"value": "meowstic-male"
	},
	{
		"name": '<i class="honedge pkmn"></i>Honedge',
		"value": "honedge"
	},
	{
		"name": '<i class="doublade pkmn"></i>Doublade',
		"value": "doublade"
	},
	{
		"name": '<i class="aegislash-shield pkmn"></i>Aegislash',
		"value": "aegislash-shield"
	},
	{
		"name": '<i class="spritzee pkmn"></i>Spritzee',
		"value": "spritzee"
	},
	{
		"name": '<i class="aromatisse pkmn"></i>Aromatisse',
		"value": "aromatisse"
	},
	{
		"name": '<i class="swirlix pkmn"></i>Swirlix',
		"value": "swirlix"
	},
	{
		"name": '<i class="slurpuff pkmn"></i>Slurpuff',
		"value": "slurpuff"
	},
	{
		"name": '<i class="inkay pkmn"></i>Inkay',
		"value": "inkay"
	},
	{
		"name": '<i class="malamar pkmn"></i>Malamar',
		"value": "malamar"
	},
	{
		"name": '<i class="binacle pkmn"></i>Binacle',
		"value": "binacle"
	},
	{
		"name": '<i class="barbaracle pkmn"></i>Barbaracle',
		"value": "barbaracle"
	},
	{
		"name": '<i class="skrelp pkmn"></i>Skrelp',
		"value": "skrelp"
	},
	{
		"name": '<i class="dragalge pkmn"></i>Dragalge',
		"value": "dragalge"
	},
	{
		"name": '<i class="clauncher pkmn"></i>Clauncher',
		"value": "clauncher"
	},
	{
		"name": '<i class="clawitzer pkmn"></i>Clawitzer',
		"value": "clawitzer"
	},
	{
		"name": '<i class="helioptile pkmn"></i>Helioptile',
		"value": "helioptile"
	},
	{
		"name": '<i class="heliolisk pkmn"></i>Heliolisk',
		"value": "heliolisk"
	},
	{
		"name": '<i class="tyrunt pkmn"></i>Tyrunt',
		"value": "tyrunt"
	},
	{
		"name": '<i class="tyrantrum pkmn"></i>Tyrantrum',
		"value": "tyrantrum"
	},
	{
		"name": '<i class="amaura pkmn"></i>Amaura',
		"value": "amaura"
	},
	{
		"name": '<i class="aurorus pkmn"></i>Aurorus',
		"value": "aurorus"
	},
	{
		"name": '<i class="sylveon pkmn"></i>Sylveon',
		"value": "sylveon"
	},
	{
		"name": '<i class="hawlucha pkmn"></i>Hawlucha',
		"value": "hawlucha"
	},
	{
		"name": '<i class="dedenne pkmn"></i>Dedenne',
		"value": "dedenne"
	},
	{
		"name": '<i class="carbink pkmn"></i>Carbink',
		"value": "carbink"
	},
	{
		"name": '<i class="goomy pkmn"></i>Goomy',
		"value": "goomy"
	},
	{
		"name": '<i class="sliggoo pkmn"></i>Sliggoo',
		"value": "sliggoo"
	},
	{
		"name": '<i class="goodra pkmn"></i>Goodra',
		"value": "goodra"
	},
	{
		"name": '<i class="klefki pkmn"></i>Klefki',
		"value": "klefki"
	},
	{
		"name": '<i class="phantump pkmn"></i>Phantump',
		"value": "phantump"
	},
	{
		"name": '<i class="trevenant pkmn"></i>Trevenant',
		"value": "trevenant"
	},
	{
		"name": '<i class="pumpkaboo-average pkmn"></i>Pumpkaboo',
		"value": "pumpkaboo-average"
	},
	{
		"name": '<i class="gourgeist-average pkmn"></i>Gourgeist',
		"value": "gourgeist-average"
	},
	{
		"name": '<i class="bergmite pkmn"></i>Bergmite',
		"value": "bergmite"
	},
	{
		"name": '<i class="avalugg pkmn"></i>Avalugg',
		"value": "avalugg"
	},
	{
		"name": '<i class="noibat pkmn"></i>Noibat',
		"value": "noibat"
	},
	{
		"name": '<i class="noivern pkmn"></i>Noivern',
		"value": "noivern"
	},
	{
		"name": '<i class="xerneas-active pkmn"></i>Xerneas',
		"value": "xerneas-active"
	},
	{
		"name": '<i class="yveltal pkmn"></i>Yveltal',
		"value": "yveltal"
	},
	{
		"name": '<i class="zygarde-50 pkmn"></i>Zygarde',
		"value": "zygarde-50"
	},
	{
		"name": '<i class="diancie pkmn"></i>Diancie',
		"value": "diancie"
	},
	{
		"name": '<i class="hoopa pkmn"></i>Hoopa',
		"value": "hoopa"
	},
	{
		"name": '<i class="volcanion pkmn"></i>Volcanion',
		"value": "volcanion"
	},
	{
		"name": '<i class="rowlet pkmn"></i>Rowlet',
		"value": "rowlet"
	},
	{
		"name": '<i class="dartrix pkmn"></i>Dartrix',
		"value": "dartrix"
	},
	{
		"name": '<i class="decidueye pkmn"></i>Decidueye',
		"value": "decidueye"
	},
	{
		"name": '<i class="litten pkmn"></i>Litten',
		"value": "litten"
	},
	{
		"name": '<i class="torracat pkmn"></i>Torracat',
		"value": "torracat"
	},
	{
		"name": '<i class="incineroar pkmn"></i>Incineroar',
		"value": "incineroar"
	},
	{
		"name": '<i class="popplio pkmn"></i>Popplio',
		"value": "popplio"
	},
	{
		"name": '<i class="brionne pkmn"></i>Brionne',
		"value": "brionne"
	},
	{
		"name": '<i class="primarina pkmn"></i>Primarina',
		"value": "primarina"
	},
	{
		"name": '<i class="pikipek pkmn"></i>Pikipek',
		"value": "pikipek"
	},
	{
		"name": '<i class="trumbeak pkmn"></i>Trumbeak',
		"value": "trumbeak"
	},
	{
		"name": '<i class="toucannon pkmn"></i>Toucannon',
		"value": "toucannon"
	},
	{
		"name": '<i class="yungoos pkmn"></i>Yungoos',
		"value": "yungoos"
	},
	{
		"name": '<i class="gumshoos pkmn"></i>Gumshoos',
		"value": "gumshoos"
	},
	{
		"name": '<i class="grubbin pkmn"></i>Grubbin',
		"value": "grubbin"
	},
	{
		"name": '<i class="charjabug pkmn"></i>Charjabug',
		"value": "charjabug"
	},
	{
		"name": '<i class="vikavolt pkmn"></i>Vikavolt',
		"value": "vikavolt"
	},
	{
		"name": '<i class="crabrawler pkmn"></i>Crabrawler',
		"value": "crabrawler"
	},
	{
		"name": '<i class="crabominable pkmn"></i>Crabominable',
		"value": "crabominable"
	},
	{
		"name": '<i class="oricorio-baile pkmn"></i>Oricorio',
		"value": "oricorio-baile"
	},
	{
		"name": '<i class="cutiefly pkmn"></i>Cutiefly',
		"value": "cutiefly"
	},
	{
		"name": '<i class="ribombee pkmn"></i>Ribombee',
		"value": "ribombee"
	},
	{
		"name": '<i class="rockruff pkmn"></i>Rockruff',
		"value": "rockruff"
	},
	{
		"name": '<i class="lycanroc-midday pkmn"></i>Lycanroc',
		"value": "lycanroc-midday"
	},
	{
		"name": '<i class="wishiwashi pkmn"></i>Wishiwashi',
		"value": "wishiwashi"
	},
	{
		"name": '<i class="mareanie pkmn"></i>Mareanie',
		"value": "mareanie"
	},
	{
		"name": '<i class="toxapex pkmn"></i>Toxapex',
		"value": "toxapex"
	},
	{
		"name": '<i class="mudbray pkmn"></i>Mudbray',
		"value": "mudbray"
	},
	{
		"name": '<i class="mudsdale pkmn"></i>Mudsdale',
		"value": "mudsdale"
	},
	{
		"name": '<i class="dewpider pkmn"></i>Dewpider',
		"value": "dewpider"
	},
	{
		"name": '<i class="araquanid pkmn"></i>Araquanid',
		"value": "araquanid"
	},
	{
		"name": '<i class="fomantis pkmn"></i>Fomantis',
		"value": "fomantis"
	},
	{
		"name": '<i class="lurantis pkmn"></i>Lurantis',
		"value": "lurantis"
	},
	{
		"name": '<i class="morelull pkmn"></i>Morelull',
		"value": "morelull"
	},
	{
		"name": '<i class="shiinotic pkmn"></i>Shiinotic',
		"value": "shiinotic"
	},
	{
		"name": '<i class="salandit pkmn"></i>Salandit',
		"value": "salandit"
	},
	{
		"name": '<i class="salazzle pkmn"></i>Salazzle',
		"value": "salazzle"
	},
	{
		"name": '<i class="stufful pkmn"></i>Stufful',
		"value": "stufful"
	},
	{
		"name": '<i class="bewear pkmn"></i>Bewear',
		"value": "bewear"
	},
	{
		"name": '<i class="bounsweet pkmn"></i>Bounsweet',
		"value": "bounsweet"
	},
	{
		"name": '<i class="steenee pkmn"></i>Steenee',
		"value": "steenee"
	},
	{
		"name": '<i class="tsareena pkmn"></i>Tsareena',
		"value": "tsareena"
	},
	{
		"name": '<i class="comfey pkmn"></i>Comfey',
		"value": "comfey"
	},
	{
		"name": '<i class="oranguru pkmn"></i>Oranguru',
		"value": "oranguru"
	},
	{
		"name": '<i class="passimian pkmn"></i>Passimian',
		"value": "passimian"
	},
	{
		"name": '<i class="wimpod pkmn"></i>Wimpod',
		"value": "wimpod"
	},
	{
		"name": '<i class="golisopod pkmn"></i>Golisopod',
		"value": "golisopod"
	},
	{
		"name": '<i class="sandygast pkmn"></i>Sandygast',
		"value": "sandygast"
	},
	{
		"name": '<i class="palossand pkmn"></i>Palossand',
		"value": "palossand"
	},
	{
		"name": '<i class="pyukumuku pkmn"></i>Pyukumuku',
		"value": "pyukumuku"
	},
	{
		"name": '<i class="type-null pkmn"></i>Type: Null',
		"value": "type-null"
	},
	{
		"name": '<i class="silvally pkmn"></i>Silvally',
		"value": "silvally"
	},
	{
		"name": '<i class="minior pkmn"></i>Minior',
		"value": "minior"
	},
	{
		"name": '<i class="komala pkmn"></i>Komala',
		"value": "komala"
	},
	{
		"name": '<i class="turtonator pkmn"></i>Turtonator',
		"value": "turtonator"
	},
	{
		"name": '<i class="togedemaru pkmn"></i>Togedemaru',
		"value": "togedemaru"
	},
	{
		"name": '<i class="mimikyu pkmn"></i>Mimikyu',
		"value": "mimikyu"
	},
	{
		"name": '<i class="bruxish pkmn"></i>Bruxish',
		"value": "bruxish"
	},
	{
		"name": '<i class="drampa pkmn"></i>Drampa',
		"value": "drampa"
	},
	{
		"name": '<i class="dhelmise pkmn"></i>Dhelmise',
		"value": "dhelmise"
	},
	{
		"name": '<i class="jangmo-o pkmn"></i>Jangmo-o',
		"value": "jangmo-o"
	},
	{
		"name": '<i class="hakamo-o pkmn"></i>Hakamo-o',
		"value": "hakamo-o"
	},
	{
		"name": '<i class="kommo-o pkmn"></i>Kommo-o',
		"value": "kommo-o"
	},
	{
		"name": '<i class="tapu-koko pkmn"></i>Tapu Koko',
		"value": "tapu-koko"
	},
	{
		"name": '<i class="tapu-lele pkmn"></i>Tapu Lele',
		"value": "tapu-lele"
	},
	{
		"name": '<i class="tapu-bulu pkmn"></i>Tapu Bulu',
		"value": "tapu-bulu"
	},
	{
		"name": '<i class="tapu-fini pkmn"></i>Tapu Fini',
		"value": "tapu-fini"
	},
	{
		"name": '<i class="cosmog pkmn"></i>Cosmog',
		"value": "cosmog"
	},
	{
		"name": '<i class="cosmoem pkmn"></i>Cosmoem',
		"value": "cosmoem"
	},
	{
		"name": '<i class="solgaleo pkmn"></i>Solgaleo',
		"value": "solgaleo"
	},
	{
		"name": '<i class="lunala pkmn"></i>Lunala',
		"value": "lunala"
	},
	{
		"name": '<i class="nihilego pkmn"></i>Nihilego',
		"value": "nihilego"
	},
	{
		"name": '<i class="buzzwole pkmn"></i>Buzzwole',
		"value": "buzzwole"
	},
	{
		"name": '<i class="pheromosa pkmn"></i>Pheromosa',
		"value": "pheromosa"
	},
	{
		"name": '<i class="xurkitree pkmn"></i>Xurkitree',
		"value": "xurkitree"
	},
	{
		"name": '<i class="celesteela pkmn"></i>Celesteela',
		"value": "celesteela"
	},
	{
		"name": '<i class="kartana pkmn"></i>Kartana',
		"value": "kartana"
	},
	{
		"name": '<i class="guzzlord pkmn"></i>Guzzlord',
		"value": "guzzlord"
	},
	{
		"name": '<i class="necrozma pkmn"></i>Necrozma',
		"value": "necrozma"
	},
	{
		"name": '<i class="magearna pkmn"></i>Magearna',
		"value": "magearna"
	},
	{
		"name": '<i class="marshadow pkmn"></i>Marshadow',
		"value": "marshadow"
	}
];

if (!localStorage.getItem('selectedGame')) {
	localStorage.setItem('selectedGame', 'rby');
}

var selectedGame = localStorage.getItem('selectedGame') ? localStorage.getItem('selectedGame') : 'rby';

var mainTpl = _.template($('#main-template').html(), {variable: 'games'});
var locTpl = _.template($('#loc-template').html(), {variable: 'game'});

$.tablesort.defaults.compare = function(a, b, direction) {
    if (a === "" || a === null) return direction === 1 ? 1 : -1;
    if (b === "" || b === null) return direction === 1 ? -1 : 1;
    if (a === b) return 0;
    return a < b ? -1 : 1;
};

$('.message .close').on('click', function() {
	$(this).closest('.message').transition('fade');
});

$('#mainContent').html(mainTpl(games));
$('#' + localStorage.getItem('selectedGame') + '-locations').html(locTpl(games[localStorage.getItem('selectedGame')]));

$('[data-tab="' + selectedGame + '"]').addClass('active');

$('.menu .item').tab({
	onFirstLoad: function(tabPath) {
		$('#' + tabPath + '-locations').html(locTpl(games[tabPath]));
		initTab(tabPath);
	},
	onLoad: function(tabPath) {
		localStorage.setItem('selectedGame', tabPath);
		$('a.item[data-tab!="' + tabPath + '"]').removeClass('active');
	}
});

$('.cookie.nag').nag({
	'storageMethod': 'localstorage',
	'key': 'accepts-cookies',
	'value': true
});

$('#fileLoader').on('change', function() {
	var input = this;

	if (input.files && input.files[0]) {
		file = input.files[0];
		fr = new FileReader();
		fr.onload = function () {
			try {
				var data = JSON.parse(fr.result);

				if (data && data.hasOwnProperty('locations')) {
					_.each(data.locations, function(location) {
						populateLocation(data.id, location);
					});

					$('a.item[data-tab="' + data.id + '"]').trigger('click');
				} else {
					$('#errorMessage').removeClass('hidden');
					$('#messageHeader').text('Incorrect format');
					$('#messageContent').text('The uploaded file contains invalid data');
				}
			} catch (e) {
				$('#errorMessage').removeClass('hidden');
				$('#messageHeader').text('Could not read file');
				$('#messageContent').text('The uploaded file was not recognized as valid JSON');
			}
		};

		fr.readAsText(file);
	}
});

function populateLocation(game, data) {
	var id = game + data.id;

	if (data.encounter !== null && data.encounter !== '') {
		$('#' + id + '-encounter').dropdown('set value', data.encounter);
		$('#' + id + '-encounter').dropdown('set text', '<i class="' + data.encounter + ' pkmn"></i>' + data.name);
		$('#' + id + '-encounter').data('name', data.name);
		localStorage.setItem(id + '-encounter', data.encounter);
		localStorage.setItem(id + '-name', data.name);
	} else {
		$('#' + id + '-encounter').dropdown('clear');
		$('#' + id + '-encounter').removeAttr('name').removeData('name');
		localStorage.removeItem(id + '-encounter');
		localStorage.removeItem(id + '-name');
	}

	if (data.nickname !== null && data.nickname !== '') {
		$('#' + id + '-nickname').val(data.nickname);
		localStorage.setItem(id + '-nickname', data.nickname);
	} else {
		$('#' + id + '-nickname').val('');
		localStorage.removeItem(id + '-nickname');
	}

	if (data.status !== null && data.status !== '') {
		$('#' + id + '-status').dropdown('set selected', data.status);
		localStorage.setItem(id + '-status', data.status);
	} else {
		$('#' + id + '-status').dropdown('clear');
		localStorage.removeItem(id + '-status');
	}
}

function clearLocation (game, index) {
	var encounter = game + index + '-encounter';
	var nickname = game + index + '-nickname';
	var status = game + index + '-status';
	var name = game + index + '-name';

	localStorage.removeItem(encounter);
	localStorage.removeItem(nickname);
	localStorage.removeItem(status);
	localStorage.removeItem(name);

	$('#' + encounter).dropdown('clear');
	$('#' + nickname).val('');
	$('#' + status).dropdown('clear');
}

$('.modal.mini').modal({
	onApprove: function() {
		var selectedGame = localStorage.getItem('selectedGame');

		_.each(games[selectedGame].locations, function(location, index) {
			clearLocation(selectedGame, index);
		});
	}
});

function dateString() {
	var d = new Date();
	return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2);
}

function initTab(tab) {
	$('.modal.mini').modal('attach events', '.reset.button', 'show');

	$('.saveData.button').on('click', function() {
		var selectedGame = localStorage.getItem('selectedGame');
		var blobData = {id: selectedGame, locations: []};

		_.each(games[selectedGame].locations, function(location, index) {
			var encounter = localStorage.getItem(selectedGame + index + '-encounter');
			var name = localStorage.getItem(selectedGame + index + '-name');
			var nickname = localStorage.getItem(selectedGame + index + '-nickname');
			var status = localStorage.getItem(selectedGame + index + '-status');

			blobData.locations.push({'id': index, 'encounter': encounter, 'name': name, 'nickname': nickname, 'status': status});
		});

		blobData = JSON.stringify(blobData);

		var blob = new Blob([blobData], {type: 'application/json;charset=utf-8'});
		saveAs(blob, selectedGame + '.' + dateString() + '.json');
	});

	$('.loadData.button').on('click', function() {
		$('#fileLoader').trigger('click');
	});

	$('.singleReset.button').on('click', function() {
		var selectedGame = localStorage.getItem('selectedGame');
		clearLocation(selectedGame, $(this).data('index'));
	});

	$('#' + tab + '-locations input').on('change', function() {
		localStorage.setItem($(this).prop('id'), $(this).val());
		$(this).closest('td').data('sortValue', $(this).val());
	});

	$('#' + tab + '-locations .ui.dropdown').dropdown({
		onChange: function(value, name) {
			localStorage.setItem($(this).prop('id'), value);
			$(this).closest('td').data('sortValue', name);
		}
	});
	$('#' + tab + '-locations .encounter-picker').dropdown({
		onChange: function(value, name) {
			var regex = new RegExp(/[^>]*$/, 'i');
			localStorage.setItem($(this).prop('id').slice(0, -9) + 'name', regex.exec(name));

			localStorage.setItem($(this).prop('id'), value);
			$(this).closest('td').data('sortValue', name);
			$(this).data('name', name);
		},
		onShow: function() {
			$(this).find('input.search').first().focus();
		},
		'forceSelection': false,
		'filterRemoteData': true,
		'apiSettings': {
			'response': {
				'success': true,
				'results': pkmn
			}
		}
	});

	$('#' + tab + '-locations .encounter-picker[data-name!=""]').each(function() {
		$(this).dropdown('set text', '<i class="' + $(this).children('input').first().val() + ' pkmn"></i>' + $(this).data('name'));
	});

	$('#' + tab + '-locations').closest('table').tablesort();
}

initTab(selectedGame);
