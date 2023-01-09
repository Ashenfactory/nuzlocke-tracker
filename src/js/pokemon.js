const pkmnData = [
	{
		name: "Bulbasaur",
		value: "bulbasaur",
		icon: "bulbasaur",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ivysaur",
		value: "ivysaur",
		icon: "ivysaur",
		exclude: [
			"sv"
		]
	},
	{
		name: "Venusaur",
		value: "venusaur",
		icon: "venusaur",
		exclude: [
			"sv"
		]
	},
	{
		name: "Charmander",
		value: "charmander",
		icon: "charmander"
	},
	{
		name: "Charmeleon",
		value: "charmeleon",
		icon: "charmeleon"
	},
	{
		name: "Charizard",
		value: "charizard",
		icon: "charizard"
	},
	{
		name: "Squirtle",
		value: "squirtle",
		icon: "squirtle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wartortle",
		value: "wartortle",
		icon: "wartortle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blastoise",
		value: "blastoise",
		icon: "blastoise",
		exclude: [
			"sv"
		]
	},
	{
		name: "Caterpie",
		value: "caterpie",
		icon: "caterpie",
		exclude: [
			"sv"
		]
	},
	{
		name: "Metapod",
		value: "metapod",
		icon: "metapod",
		exclude: [
			"sv"
		]
	},
	{
		name: "Butterfree",
		value: "butterfree",
		icon: "butterfree",
		exclude: [
			"sv"
		]
	},
	{
		name: "Weedle",
		value: "weedle",
		icon: "weedle",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Kakuna",
		value: "kakuna",
		icon: "kakuna",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Beedrill",
		value: "beedrill",
		icon: "beedrill",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pidgey",
		value: "pidgey",
		icon: "pidgey",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pidgeotto",
		value: "pidgeotto",
		icon: "pidgeotto",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pidgeot",
		value: "pidgeot",
		icon: "pidgeot",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Rattata",
		value: "rattata",
		icon: "rattata",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Raticate",
		value: "raticate",
		icon: "raticate",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Spearow",
		value: "spearow",
		icon: "spearow",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Fearow",
		value: "fearow",
		icon: "fearow",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ekans",
		value: "ekans",
		icon: "ekans",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Arbok",
		value: "arbok",
		icon: "arbok",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pikachu",
		value: "pikachu",
		icon: "pikachu"
	},
	{
		name: "Raichu",
		value: "raichu",
		icon: "raichu"
	},
	{
		name: "Sandshrew",
		value: "sandshrew",
		icon: "sandshrew",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sandslash",
		value: "sandslash",
		icon: "sandslash",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoran♀",
		value: "nidoran-f",
		icon: "nidoran-f",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidorina",
		value: "nidorina",
		icon: "nidorina",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoqueen",
		value: "nidoqueen",
		icon: "nidoqueen",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoran♂",
		value: "nidoran-m",
		icon: "nidoran-m",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidorino",
		value: "nidorino",
		icon: "nidorino",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoking",
		value: "nidoking",
		icon: "nidoking",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clefairy",
		value: "clefairy",
		icon: "clefairy",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clefable",
		value: "clefable",
		icon: "clefable",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vulpix",
		value: "vulpix",
		icon: "vulpix",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ninetales",
		value: "ninetales",
		icon: "ninetales",
		exclude: [
			"sv"
		]
	},
	{
		name: "Jigglypuff",
		value: "jigglypuff",
		icon: "jigglypuff"
	},
	{
		name: "Wigglytuff",
		value: "wigglytuff",
		icon: "wigglytuff"
	},
	{
		name: "Zubat",
		value: "zubat",
		icon: "zubat",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golbat",
		value: "golbat",
		icon: "golbat",
		exclude: [
			"sv"
		]
	},
	{
		name: "Oddish",
		value: "oddish",
		icon: "oddish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gloom",
		value: "gloom",
		icon: "gloom",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vileplume",
		value: "vileplume",
		icon: "vileplume",
		exclude: [
			"sv"
		]
	},
	{
		name: "Paras",
		value: "paras",
		icon: "paras",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Parasect",
		value: "parasect",
		icon: "parasect",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Venonat",
		value: "venonat",
		icon: "venonat",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Venomoth",
		value: "venomoth",
		icon: "venomoth",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Diglett",
		value: "diglett",
		icon: "diglett"
	},
	{
		name: "Dugtrio",
		value: "dugtrio",
		icon: "dugtrio"
	},
	{
		name: "Meowth",
		value: "meowth",
		icon: "meowth"
	},
	{
		name: "Persian",
		value: "persian",
		icon: "persian"
	},
	{
		name: "Psyduck",
		value: "psyduck",
		icon: "psyduck"
	},
	{
		name: "Golduck",
		value: "golduck",
		icon: "golduck"
	},
	{
		name: "Mankey",
		value: "mankey",
		icon: "mankey",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Primeape",
		value: "primeape",
		icon: "primeape",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Growlithe",
		value: "growlithe",
		icon: "growlithe"
	},
	{
		name: "Arcanine",
		value: "arcanine",
		icon: "arcanine"
	},
	{
		name: "Poliwag",
		value: "poliwag",
		icon: "poliwag",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poliwhirl",
		value: "poliwhirl",
		icon: "poliwhirl",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poliwrath",
		value: "poliwrath",
		icon: "poliwrath",
		exclude: [
			"sv"
		]
	},
	{
		name: "Abra",
		value: "abra",
		icon: "abra",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kadabra",
		value: "kadabra",
		icon: "kadabra",
		exclude: [
			"sv"
		]
	},
	{
		name: "Alakazam",
		value: "alakazam",
		icon: "alakazam",
		exclude: [
			"sv"
		]
	},
	{
		name: "Machop",
		value: "machop",
		icon: "machop",
		exclude: [
			"sv"
		]
	},
	{
		name: "Machoke",
		value: "machoke",
		icon: "machoke",
		exclude: [
			"sv"
		]
	},
	{
		name: "Machamp",
		value: "machamp",
		icon: "machamp",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bellsprout",
		value: "bellsprout",
		icon: "bellsprout",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Weepinbell",
		value: "weepinbell",
		icon: "weepinbell",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Victreebel",
		value: "victreebel",
		icon: "victreebel",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Tentacool",
		value: "tentacool",
		icon: "tentacool",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tentacruel",
		value: "tentacruel",
		icon: "tentacruel",
		exclude: [
			"sv"
		]
	},
	{
		name: "Geodude",
		value: "geodude",
		icon: "geodude",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Graveler",
		value: "graveler",
		icon: "graveler",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Golem",
		value: "golem",
		icon: "golem",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ponyta",
		value: "ponyta",
		icon: "ponyta",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rapidash",
		value: "rapidash",
		icon: "rapidash",
		exclude: [
			"sv"
		]
	},
	{
		name: "Slowpoke",
		value: "slowpoke",
		icon: "slowpoke"
	},
	{
		name: "Slowbro",
		value: "slowbro",
		icon: "slowbro"
	},
	{
		name: "Magnemite",
		value: "magnemite",
		icon: "magnemite"
	},
	{
		name: "Magneton",
		value: "magneton",
		icon: "magneton"
	},
	{
		name: "Farfetch'd",
		value: "farfetchd",
		icon: "farfetchd",
		exclude: [
			"sv"
		]
	},
	{
		name: "Doduo",
		value: "doduo",
		icon: "doduo",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dodrio",
		value: "dodrio",
		icon: "dodrio",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Seel",
		value: "seel",
		icon: "seel",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dewgong",
		value: "dewgong",
		icon: "dewgong",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Grimer",
		value: "grimer",
		icon: "grimer",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Muk",
		value: "muk",
		icon: "muk",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Shellder",
		value: "shellder",
		icon: "shellder"
	},
	{
		name: "Cloyster",
		value: "cloyster",
		icon: "cloyster"
	},
	{
		name: "Gastly",
		value: "gastly",
		icon: "gastly"
	},
	{
		name: "Haunter",
		value: "haunter",
		icon: "haunter"
	},
	{
		name: "Gengar",
		value: "gengar",
		icon: "gengar"
	},
	{
		name: "Onix",
		value: "onix",
		icon: "onix",
		exclude: [
			"sv"
		]
	},
	{
		name: "Drowzee",
		value: "drowzee",
		icon: "drowzee",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Hypno",
		value: "hypno",
		icon: "hypno",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Krabby",
		value: "krabby",
		icon: "krabby",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kingler",
		value: "kingler",
		icon: "kingler",
		exclude: [
			"sv"
		]
	},
	{
		name: "Voltorb",
		value: "voltorb",
		icon: "voltorb",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Electrode",
		value: "electrode",
		icon: "electrode",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Exeggcute",
		value: "exeggcute",
		icon: "exeggcute",
		exclude: [
			"sv"
		]
	},
	{
		name: "Exeggutor",
		value: "exeggutor",
		icon: "exeggutor",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cubone",
		value: "cubone",
		icon: "cubone",
		exclude: [
			"sv"
		]
	},
	{
		name: "Marowak",
		value: "marowak",
		icon: "marowak",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hitmonlee",
		value: "hitmonlee",
		icon: "hitmonlee",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hitmonchan",
		value: "hitmonchan",
		icon: "hitmonchan",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lickitung",
		value: "lickitung",
		icon: "lickitung",
		exclude: [
			"sv"
		]
	},
	{
		name: "Koffing",
		value: "koffing",
		icon: "koffing",
		exclude: [
			"sv"
		]
	},
	{
		name: "Weezing",
		value: "weezing",
		icon: "weezing",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rhyhorn",
		value: "rhyhorn",
		icon: "rhyhorn",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rhydon",
		value: "rhydon",
		icon: "rhydon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chansey",
		value: "chansey",
		icon: "chansey"
	},
	{
		name: "Tangela",
		value: "tangela",
		icon: "tangela",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kangaskhan",
		value: "kangaskhan",
		icon: "kangaskhan",
		exclude: [
			"sv"
		]
	},
	{
		name: "Horsea",
		value: "horsea",
		icon: "horsea",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seadra",
		value: "seadra",
		icon: "seadra",
		exclude: [
			"sv"
		]
	},
	{
		name: "Goldeen",
		value: "goldeen",
		icon: "goldeen",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seaking",
		value: "seaking",
		icon: "seaking",
		exclude: [
			"sv"
		]
	},
	{
		name: "Staryu",
		value: "staryu",
		icon: "staryu",
		exclude: [
			"sv"
		]
	},
	{
		name: "Starmie",
		value: "starmie",
		icon: "starmie",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mr. Mime",
		value: "mr-mime",
		icon: "mr-mime",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scyther",
		value: "scyther",
		icon: "scyther"
	},
	{
		name: "Jynx",
		value: "jynx",
		icon: "jynx",
		exclude: [
			"sv"
		]
	},
	{
		name: "Electabuzz",
		value: "electabuzz",
		icon: "electabuzz",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magmar",
		value: "magmar",
		icon: "magmar",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pinsir",
		value: "pinsir",
		icon: "pinsir",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tauros",
		value: "tauros",
		icon: "tauros"
	},
	{
		name: "Magikarp",
		value: "magikarp",
		icon: "magikarp"
	},
	{
		name: "Gyarados",
		value: "gyarados",
		icon: "gyarados"
	},
	{
		name: "Lapras",
		value: "lapras",
		icon: "lapras",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ditto",
		value: "ditto",
		icon: "ditto"
	},
	{
		name: "Eevee",
		value: "eevee",
		icon: "eevee"
	},
	{
		name: "Vaporeon",
		value: "vaporeon",
		icon: "vaporeon"
	},
	{
		name: "Jolteon",
		value: "jolteon",
		icon: "jolteon"
	},
	{
		name: "Flareon",
		value: "flareon",
		icon: "flareon"
	},
	{
		name: "Porygon",
		value: "porygon",
		icon: "porygon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Omanyte",
		value: "omanyte",
		icon: "omanyte",
		exclude: [
			"sv"
		]
	},
	{
		name: "Omastar",
		value: "omastar",
		icon: "omastar",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kabuto",
		value: "kabuto",
		icon: "kabuto",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kabutops",
		value: "kabutops",
		icon: "kabutops",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aerodactyl",
		value: "aerodactyl",
		icon: "aerodactyl",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snorlax",
		value: "snorlax",
		icon: "snorlax",
		exclude: [
			"sv"
		]
	},
	{
		name: "Articuno",
		value: "articuno",
		icon: "articuno"
	},
	{
		name: "Zapdos",
		value: "zapdos",
		icon: "zapdos"
	},
	{
		name: "Moltres",
		value: "moltres",
		icon: "moltres"
	},
	{
		name: "Dratini",
		value: "dratini",
		icon: "dratini"
	},
	{
		name: "Dragonair",
		value: "dragonair",
		icon: "dragonair"
	},
	{
		name: "Dragonite",
		value: "dragonite",
		icon: "dragonite"
	},
	{
		name: "Mewtwo",
		value: "mewtwo",
		icon: "mewtwo"
	},
	{
		name: "Mew",
		value: "mew",
		icon: "mew"
	},
	{
		name: "Chikorita",
		value: "chikorita",
		icon: "chikorita",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Bayleef",
		value: "bayleef",
		icon: "bayleef",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Meganium",
		value: "meganium",
		icon: "meganium",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Cyndaquil",
		value: "cyndaquil",
		icon: "cyndaquil",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Quilava",
		value: "quilava",
		icon: "quilava",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Typhlosion",
		value: "typhlosion",
		icon: "typhlosion",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Totodile",
		value: "totodile",
		icon: "totodile",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Croconaw",
		value: "croconaw",
		icon: "croconaw",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Feraligatr",
		value: "feraligatr",
		icon: "feraligatr",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Sentret",
		value: "sentret",
		icon: "sentret",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Furret",
		value: "furret",
		icon: "furret",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Hoothoot",
		value: "hoothoot",
		icon: "hoothoot",
		exclude: [
			"sv"
		]
	},
	{
		name: "Noctowl",
		value: "noctowl",
		icon: "noctowl",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ledyba",
		value: "ledyba",
		icon: "ledyba",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ledian",
		value: "ledian",
		icon: "ledian",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Spinarak",
		value: "spinarak",
		icon: "spinarak",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ariados",
		value: "ariados",
		icon: "ariados",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Crobat",
		value: "crobat",
		icon: "crobat",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chinchou",
		value: "chinchou",
		icon: "chinchou",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lanturn",
		value: "lanturn",
		icon: "lanturn",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pichu",
		value: "pichu",
		icon: "pichu"
	},
	{
		name: "Cleffa",
		value: "cleffa",
		icon: "cleffa",
		exclude: [
			"sv"
		]
	},
	{
		name: "Igglybuff",
		value: "igglybuff",
		icon: "igglybuff"
	},
	{
		name: "Togepi",
		value: "togepi",
		icon: "togepi",
		exclude: [
			"sv"
		]
	},
	{
		name: "Togetic",
		value: "togetic",
		icon: "togetic",
		exclude: [
			"sv"
		]
	},
	{
		name: "Natu",
		value: "natu",
		icon: "natu",
		exclude: [
			"sv"
		]
	},
	{
		name: "Xatu",
		value: "xatu",
		icon: "xatu",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mareep",
		value: "mareep",
		icon: "mareep",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Flaaffy",
		value: "flaaffy",
		icon: "flaaffy",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Ampharos",
		value: "ampharos",
		icon: "ampharos",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bellossom",
		value: "bellossom",
		icon: "bellossom",
		exclude: [
			"sv"
		]
	},
	{
		name: "Marill",
		value: "marill",
		icon: "marill"
	},
	{
		name: "Azumarill",
		value: "azumarill",
		icon: "azumarill"
	},
	{
		name: "Sudowoodo",
		value: "sudowoodo",
		icon: "sudowoodo"
	},
	{
		name: "Politoed",
		value: "politoed",
		icon: "politoed",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hoppip",
		value: "hoppip",
		icon: "hoppip",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Skiploom",
		value: "skiploom",
		icon: "skiploom",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Jumpluff",
		value: "jumpluff",
		icon: "jumpluff",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Aipom",
		value: "aipom",
		icon: "aipom",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Sunkern",
		value: "sunkern",
		icon: "sunkern",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Sunflora",
		value: "sunflora",
		icon: "sunflora",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Yanma",
		value: "yanma",
		icon: "yanma",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wooper",
		value: "wooper",
		icon: "wooper"
	},
	{
		name: "Quagsire",
		value: "quagsire",
		icon: "quagsire"
	},
	{
		name: "Espeon",
		value: "espeon",
		icon: "espeon"
	},
	{
		name: "Umbreon",
		value: "umbreon",
		icon: "umbreon"
	},
	{
		name: "Murkrow",
		value: "murkrow",
		icon: "murkrow",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slowking",
		value: "slowking",
		icon: "slowking"
	},
	{
		name: "Misdreavus",
		value: "misdreavus",
		icon: "misdreavus",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Unown",
		value: "unown",
		icon: "unown",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wobbuffet",
		value: "wobbuffet",
		icon: "wobbuffet",
		exclude: [
			"sv"
		]
	},
	{
		name: "Girafarig",
		value: "girafarig",
		icon: "girafarig",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Pineco",
		value: "pineco",
		icon: "pineco",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Forretress",
		value: "forretress",
		icon: "forretress",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Dunsparce",
		value: "dunsparce",
		icon: "dunsparce"
	},
	{
		name: "Gligar",
		value: "gligar",
		icon: "gligar",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Steelix",
		value: "steelix",
		icon: "steelix",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snubbull",
		value: "snubbull",
		icon: "snubbull",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Granbull",
		value: "granbull",
		icon: "granbull",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Qwilfish",
		value: "qwilfish",
		icon: "qwilfish"
	},
	{
		name: "Scizor",
		value: "scizor",
		icon: "scizor"
	},
	{
		name: "Shuckle",
		value: "shuckle",
		icon: "shuckle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Heracross",
		value: "heracross",
		icon: "heracross"
	},
	{
		name: "Sneasel",
		value: "sneasel",
		icon: "sneasel"
	},
	{
		name: "Teddiursa",
		value: "teddiursa",
		icon: "teddiursa",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Ursaring",
		value: "ursaring",
		icon: "ursaring",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slugma",
		value: "slugma",
		icon: "slugma",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Magcargo",
		value: "magcargo",
		icon: "magcargo",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swinub",
		value: "swinub",
		icon: "swinub",
		exclude: [
			"sv"
		]
	},
	{
		name: "Piloswine",
		value: "piloswine",
		icon: "piloswine",
		exclude: [
			"sv"
		]
	},
	{
		name: "Corsola",
		value: "corsola",
		icon: "corsola",
		exclude: [
			"sv"
		]
	},
	{
		name: "Remoraid",
		value: "remoraid",
		icon: "remoraid",
		exclude: [
			"sv"
		]
	},
	{
		name: "Octillery",
		value: "octillery",
		icon: "octillery",
		exclude: [
			"sv"
		]
	},
	{
		name: "Delibird",
		value: "delibird",
		icon: "delibird"
	},
	{
		name: "Mantine",
		value: "mantine",
		icon: "mantine",
		exclude: [
			"sv"
		]
	},
	{
		name: "Skarmory",
		value: "skarmory",
		icon: "skarmory",
		exclude: [
			"sv"
		]
	},
	{
		name: "Houndour",
		value: "houndour",
		icon: "houndour",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Houndoom",
		value: "houndoom",
		icon: "houndoom",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Kingdra",
		value: "kingdra",
		icon: "kingdra",
		exclude: [
			"sv"
		]
	},
	{
		name: "Phanpy",
		value: "phanpy",
		icon: "phanpy",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Donphan",
		value: "donphan",
		icon: "donphan",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Porygon2",
		value: "porygon2",
		icon: "porygon2",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stantler",
		value: "stantler",
		icon: "stantler",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Smeargle",
		value: "smeargle",
		icon: "smeargle",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Tyrogue",
		value: "tyrogue",
		icon: "tyrogue",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hitmontop",
		value: "hitmontop",
		icon: "hitmontop",
		exclude: [
			"sv"
		]
	},
	{
		name: "Smoochum",
		value: "smoochum",
		icon: "smoochum",
		exclude: [
			"sv"
		]
	},
	{
		name: "Elekid",
		value: "elekid",
		icon: "elekid",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magby",
		value: "magby",
		icon: "magby",
		exclude: [
			"sv"
		]
	},
	{
		name: "Miltank",
		value: "miltank",
		icon: "miltank",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blissey",
		value: "blissey",
		icon: "blissey"
	},
	{
		name: "Raikou",
		value: "raikou",
		icon: "raikou",
		exclude: [
			"sv"
		]
	},
	{
		name: "Entei",
		value: "entei",
		icon: "entei",
		exclude: [
			"sv"
		]
	},
	{
		name: "Suicune",
		value: "suicune",
		icon: "suicune",
		exclude: [
			"sv"
		]
	},
	{
		name: "Larvitar",
		value: "larvitar",
		icon: "larvitar"
	},
	{
		name: "Pupitar",
		value: "pupitar",
		icon: "pupitar"
	},
	{
		name: "Tyranitar",
		value: "tyranitar",
		icon: "tyranitar"
	},
	{
		name: "Lugia",
		value: "lugia",
		icon: "lugia",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ho-Oh",
		value: "ho-oh",
		icon: "ho-oh",
		exclude: [
			"sv"
		]
	},
	{
		name: "Celebi",
		value: "celebi",
		icon: "celebi",
		exclude: [
			"sv"
		]
	},
	{
		name: "Treecko",
		value: "treecko",
		icon: "treecko",
		exclude: [
			"sv"
		]
	},
	{
		name: "Grovyle",
		value: "grovyle",
		icon: "grovyle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sceptile",
		value: "sceptile",
		icon: "sceptile",
		exclude: [
			"sv"
		]
	},
	{
		name: "Torchic",
		value: "torchic",
		icon: "torchic",
		exclude: [
			"sv"
		]
	},
	{
		name: "Combusken",
		value: "combusken",
		icon: "combusken",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blaziken",
		value: "blaziken",
		icon: "blaziken",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mudkip",
		value: "mudkip",
		icon: "mudkip",
		exclude: [
			"sv"
		]
	},
	{
		name: "Marshtomp",
		value: "marshtomp",
		icon: "marshtomp",
		exclude: [
			"sv"
		]
	},
	{
		name: "Swampert",
		value: "swampert",
		icon: "swampert",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poochyena",
		value: "poochyena",
		icon: "poochyena",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Mightyena",
		value: "mightyena",
		icon: "mightyena",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Zigzagoon",
		value: "zigzagoon",
		icon: "zigzagoon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Linoone",
		value: "linoone",
		icon: "linoone",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wurmple",
		value: "wurmple",
		icon: "wurmple",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Silcoon",
		value: "silcoon",
		icon: "silcoon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Beautifly",
		value: "beautifly",
		icon: "beautifly",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Cascoon",
		value: "cascoon",
		icon: "cascoon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dustox",
		value: "dustox",
		icon: "dustox",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Lotad",
		value: "lotad",
		icon: "lotad",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lombre",
		value: "lombre",
		icon: "lombre",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ludicolo",
		value: "ludicolo",
		icon: "ludicolo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seedot",
		value: "seedot",
		icon: "seedot",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nuzleaf",
		value: "nuzleaf",
		icon: "nuzleaf",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shiftry",
		value: "shiftry",
		icon: "shiftry",
		exclude: [
			"sv"
		]
	},
	{
		name: "Taillow",
		value: "taillow",
		icon: "taillow",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swellow",
		value: "swellow",
		icon: "swellow",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wingull",
		value: "wingull",
		icon: "wingull"
	},
	{
		name: "Pelipper",
		value: "pelipper",
		icon: "pelipper"
	},
	{
		name: "Ralts",
		value: "ralts",
		icon: "ralts"
	},
	{
		name: "Kirlia",
		value: "kirlia",
		icon: "kirlia"
	},
	{
		name: "Gardevoir",
		value: "gardevoir",
		icon: "gardevoir"
	},
	{
		name: "Surskit",
		value: "surskit",
		icon: "surskit",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Masquerain",
		value: "masquerain",
		icon: "masquerain",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Shroomish",
		value: "shroomish",
		icon: "shroomish",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Breloom",
		value: "breloom",
		icon: "breloom",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slakoth",
		value: "slakoth",
		icon: "slakoth",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Vigoroth",
		value: "vigoroth",
		icon: "vigoroth",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slaking",
		value: "slaking",
		icon: "slaking",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Nincada",
		value: "nincada",
		icon: "nincada",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ninjask",
		value: "ninjask",
		icon: "ninjask",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shedinja",
		value: "shedinja",
		icon: "shedinja",
		exclude: [
			"sv"
		]
	},
	{
		name: "Whismur",
		value: "whismur",
		icon: "whismur",
		exclude: [
			"sv"
		]
	},
	{
		name: "Loudred",
		value: "loudred",
		icon: "loudred",
		exclude: [
			"sv"
		]
	},
	{
		name: "Exploud",
		value: "exploud",
		icon: "exploud",
		exclude: [
			"sv"
		]
	},
	{
		name: "Makuhita",
		value: "makuhita",
		icon: "makuhita",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Hariyama",
		value: "hariyama",
		icon: "hariyama",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Azurill",
		value: "azurill",
		icon: "azurill"
	},
	{
		name: "Nosepass",
		value: "nosepass",
		icon: "nosepass",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Skitty",
		value: "skitty",
		icon: "skitty",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Delcatty",
		value: "delcatty",
		icon: "delcatty",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Sableye",
		value: "sableye",
		icon: "sableye"
	},
	{
		name: "Mawile",
		value: "mawile",
		icon: "mawile",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aron",
		value: "aron",
		icon: "aron",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lairon",
		value: "lairon",
		icon: "lairon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aggron",
		value: "aggron",
		icon: "aggron",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meditite",
		value: "meditite",
		icon: "meditite",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Medicham",
		value: "medicham",
		icon: "medicham",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Electrike",
		value: "electrike",
		icon: "electrike",
		exclude: [
			"sv"
		]
	},
	{
		name: "Manectric",
		value: "manectric",
		icon: "manectric",
		exclude: [
			"sv"
		]
	},
	{
		name: "Plusle",
		value: "plusle",
		icon: "plusle",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Minun",
		value: "minun",
		icon: "minun",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Volbeat",
		value: "volbeat",
		icon: "volbeat",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Illumise",
		value: "illumise",
		icon: "illumise",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Roselia",
		value: "roselia",
		icon: "roselia",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gulpin",
		value: "gulpin",
		icon: "gulpin",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Swalot",
		value: "swalot",
		icon: "swalot",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Carvanha",
		value: "carvanha",
		icon: "carvanha",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sharpedo",
		value: "sharpedo",
		icon: "sharpedo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wailmer",
		value: "wailmer",
		icon: "wailmer",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wailord",
		value: "wailord",
		icon: "wailord",
		exclude: [
			"sv"
		]
	},
	{
		name: "Numel",
		value: "numel",
		icon: "numel",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Camerupt",
		value: "camerupt",
		icon: "camerupt",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Torkoal",
		value: "torkoal",
		icon: "torkoal"
	},
	{
		name: "Spoink",
		value: "spoink",
		icon: "spoink",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Grumpig",
		value: "grumpig",
		icon: "grumpig",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Spinda",
		value: "spinda",
		icon: "spinda",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Trapinch",
		value: "trapinch",
		icon: "trapinch",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vibrava",
		value: "vibrava",
		icon: "vibrava",
		exclude: [
			"sv"
		]
	},
	{
		name: "Flygon",
		value: "flygon",
		icon: "flygon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cacnea",
		value: "cacnea",
		icon: "cacnea",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Cacturne",
		value: "cacturne",
		icon: "cacturne",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Swablu",
		value: "swablu",
		icon: "swablu"
	},
	{
		name: "Altaria",
		value: "altaria",
		icon: "altaria"
	},
	{
		name: "Zangoose",
		value: "zangoose",
		icon: "zangoose",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Seviper",
		value: "seviper",
		icon: "seviper",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Lunatone",
		value: "lunatone",
		icon: "lunatone",
		exclude: [
			"sv"
		]
	},
	{
		name: "Solrock",
		value: "solrock",
		icon: "solrock",
		exclude: [
			"sv"
		]
	},
	{
		name: "Barboach",
		value: "barboach",
		icon: "barboach"
	},
	{
		name: "Whiscash",
		value: "whiscash",
		icon: "whiscash"
	},
	{
		name: "Corphish",
		value: "corphish",
		icon: "corphish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Crawdaunt",
		value: "crawdaunt",
		icon: "crawdaunt",
		exclude: [
			"sv"
		]
	},
	{
		name: "Baltoy",
		value: "baltoy",
		icon: "baltoy",
		exclude: [
			"sv"
		]
	},
	{
		name: "Claydol",
		value: "claydol",
		icon: "claydol",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lileep",
		value: "lileep",
		icon: "lileep",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cradily",
		value: "cradily",
		icon: "cradily",
		exclude: [
			"sv"
		]
	},
	{
		name: "Anorith",
		value: "anorith",
		icon: "anorith",
		exclude: [
			"sv"
		]
	},
	{
		name: "Armaldo",
		value: "armaldo",
		icon: "armaldo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Feebas",
		value: "feebas",
		icon: "feebas",
		exclude: [
			"sv"
		]
	},
	{
		name: "Milotic",
		value: "milotic",
		icon: "milotic",
		exclude: [
			"sv"
		]
	},
	{
		name: "Castform",
		value: "castform",
		icon: "castform",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Kecleon",
		value: "kecleon",
		icon: "kecleon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Shuppet",
		value: "shuppet",
		icon: "shuppet",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Banette",
		value: "banette",
		icon: "banette",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Duskull",
		value: "duskull",
		icon: "duskull",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dusclops",
		value: "dusclops",
		icon: "dusclops",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tropius",
		value: "tropius",
		icon: "tropius",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Chimecho",
		value: "chimecho",
		icon: "chimecho",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Absol",
		value: "absol",
		icon: "absol",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wynaut",
		value: "wynaut",
		icon: "wynaut",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snorunt",
		value: "snorunt",
		icon: "snorunt"
	},
	{
		name: "Glalie",
		value: "glalie",
		icon: "glalie"
	},
	{
		name: "Spheal",
		value: "spheal",
		icon: "spheal",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sealeo",
		value: "sealeo",
		icon: "sealeo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Walrein",
		value: "walrein",
		icon: "walrein",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clamperl",
		value: "clamperl",
		icon: "clamperl",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Huntail",
		value: "huntail",
		icon: "huntail",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Gorebyss",
		value: "gorebyss",
		icon: "gorebyss",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Relicanth",
		value: "relicanth",
		icon: "relicanth",
		exclude: [
			"sv"
		]
	},
	{
		name: "Luvdisc",
		value: "luvdisc",
		icon: "luvdisc",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bagon",
		value: "bagon",
		icon: "bagon"
	},
	{
		name: "Shelgon",
		value: "shelgon",
		icon: "shelgon"
	},
	{
		name: "Salamence",
		value: "salamence",
		icon: "salamence"
	},
	{
		name: "Beldum",
		value: "beldum",
		icon: "beldum",
		exclude: [
			"sv"
		]
	},
	{
		name: "Metang",
		value: "metang",
		icon: "metang",
		exclude: [
			"sv"
		]
	},
	{
		name: "Metagross",
		value: "metagross",
		icon: "metagross",
		exclude: [
			"sv"
		]
	},
	{
		name: "Regirock",
		value: "regirock",
		icon: "regirock",
		exclude: [
			"sv"
		]
	},
	{
		name: "Regice",
		value: "regice",
		icon: "regice",
		exclude: [
			"sv"
		]
	},
	{
		name: "Registeel",
		value: "registeel",
		icon: "registeel",
		exclude: [
			"sv"
		]
	},
	{
		name: "Latias",
		value: "latias",
		icon: "latias",
		exclude: [
			"sv"
		]
	},
	{
		name: "Latios",
		value: "latios",
		icon: "latios",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kyogre",
		value: "kyogre",
		icon: "kyogre"
	},
	{
		name: "Groudon",
		value: "groudon",
		icon: "groudon"
	},
	{
		name: "Rayquaza",
		value: "rayquaza",
		icon: "rayquaza"
	},
	{
		name: "Jirachi",
		value: "jirachi",
		icon: "jirachi",
		exclude: [
			"sv"
		]
	},
	{
		name: "Deoxys",
		value: "deoxys",
		icon: "deoxys",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Turtwig",
		value: "turtwig",
		icon: "turtwig",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Grotle",
		value: "grotle",
		icon: "grotle",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Torterra",
		value: "torterra",
		icon: "torterra",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Chimchar",
		value: "chimchar",
		icon: "chimchar",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Monferno",
		value: "monferno",
		icon: "monferno",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Infernape",
		value: "infernape",
		icon: "infernape",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Piplup",
		value: "piplup",
		icon: "piplup",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Prinplup",
		value: "prinplup",
		icon: "prinplup",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Empoleon",
		value: "empoleon",
		icon: "empoleon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Starly",
		value: "starly",
		icon: "starly",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Staravia",
		value: "staravia",
		icon: "staravia",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Staraptor",
		value: "staraptor",
		icon: "staraptor",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bidoof",
		value: "bidoof",
		icon: "bidoof",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Bibarel",
		value: "bibarel",
		icon: "bibarel",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Kricketot",
		value: "kricketot",
		icon: "kricketot",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Kricketune",
		value: "kricketune",
		icon: "kricketune",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Shinx",
		value: "shinx",
		icon: "shinx"
	},
	{
		name: "Luxio",
		value: "luxio",
		icon: "luxio"
	},
	{
		name: "Luxray",
		value: "luxray",
		icon: "luxray"
	},
	{
		name: "Budew",
		value: "budew",
		icon: "budew",
		exclude: [
			"sv"
		]
	},
	{
		name: "Roserade",
		value: "roserade",
		icon: "roserade",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cranidos",
		value: "cranidos",
		icon: "cranidos",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Rampardos",
		value: "rampardos",
		icon: "rampardos",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Shieldon",
		value: "shieldon",
		icon: "shieldon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Bastiodon",
		value: "bastiodon",
		icon: "bastiodon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Burmy",
		value: "burmy",
		icon: "burmy",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wormadam",
		value: "wormadam",
		icon: "wormadam",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Mothim",
		value: "mothim",
		icon: "mothim",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Combee",
		value: "combee",
		icon: "combee"
	},
	{
		name: "Vespiquen",
		value: "vespiquen",
		icon: "vespiquen"
	},
	{
		name: "Pachirisu",
		value: "pachirisu",
		icon: "pachirisu",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Buizel",
		value: "buizel",
		icon: "buizel",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Floatzel",
		value: "floatzel",
		icon: "floatzel",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Cherubi",
		value: "cherubi",
		icon: "cherubi",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cherrim",
		value: "cherrim",
		icon: "cherrim",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shellos",
		value: "shellos",
		icon: "shellos"
	},
	{
		name: "Gastrodon",
		value: "gastrodon",
		icon: "gastrodon"
	},
	{
		name: "Ambipom",
		value: "ambipom",
		icon: "ambipom",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Drifloon",
		value: "drifloon",
		icon: "drifloon"
	},
	{
		name: "Drifblim",
		value: "drifblim",
		icon: "drifblim"
	},
	{
		name: "Buneary",
		value: "buneary",
		icon: "buneary",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lopunny",
		value: "lopunny",
		icon: "lopunny",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mismagius",
		value: "mismagius",
		icon: "mismagius",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Honchkrow",
		value: "honchkrow",
		icon: "honchkrow",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Glameow",
		value: "glameow",
		icon: "glameow",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Purugly",
		value: "purugly",
		icon: "purugly",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Chingling",
		value: "chingling",
		icon: "chingling",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Stunky",
		value: "stunky",
		icon: "stunky"
	},
	{
		name: "Skuntank",
		value: "skuntank",
		icon: "skuntank"
	},
	{
		name: "Bronzor",
		value: "bronzor",
		icon: "bronzor"
	},
	{
		name: "Bronzong",
		value: "bronzong",
		icon: "bronzong"
	},
	{
		name: "Bonsly",
		value: "bonsly",
		icon: "bonsly"
	},
	{
		name: "Mime Jr.",
		value: "mime-jr",
		icon: "mime-jr",
		exclude: [
			"sv"
		]
	},
	{
		name: "Happiny",
		value: "happiny",
		icon: "happiny"
	},
	{
		name: "Chatot",
		value: "chatot",
		icon: "chatot",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Spiritomb",
		value: "spiritomb",
		icon: "spiritomb"
	},
	{
		name: "Gible",
		value: "gible",
		icon: "gible"
	},
	{
		name: "Gabite",
		value: "gabite",
		icon: "gabite"
	},
	{
		name: "Garchomp",
		value: "garchomp",
		icon: "garchomp"
	},
	{
		name: "Munchlax",
		value: "munchlax",
		icon: "munchlax",
		exclude: [
			"sv"
		]
	},
	{
		name: "Riolu",
		value: "riolu",
		icon: "riolu"
	},
	{
		name: "Lucario",
		value: "lucario",
		icon: "lucario"
	},
	{
		name: "Hippopotas",
		value: "hippopotas",
		icon: "hippopotas"
	},
	{
		name: "Hippowdon",
		value: "hippowdon",
		icon: "hippowdon"
	},
	{
		name: "Skorupi",
		value: "skorupi",
		icon: "skorupi",
		exclude: [
			"sv"
		]
	},
	{
		name: "Drapion",
		value: "drapion",
		icon: "drapion",
		exclude: [
			"sv"
		]
	},
	{
		name: "Croagunk",
		value: "croagunk",
		icon: "croagunk"
	},
	{
		name: "Toxicroak",
		value: "toxicroak",
		icon: "toxicroak"
	},
	{
		name: "Carnivine",
		value: "carnivine",
		icon: "carnivine",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Finneon",
		value: "finneon",
		icon: "finneon",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Lumineon",
		value: "lumineon",
		icon: "lumineon",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Mantyke",
		value: "mantyke",
		icon: "mantyke",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snover",
		value: "snover",
		icon: "snover"
	},
	{
		name: "Abomasnow",
		value: "abomasnow",
		icon: "abomasnow"
	},
	{
		name: "Weavile",
		value: "weavile",
		icon: "weavile"
	},
	{
		name: "Magnezone",
		value: "magnezone",
		icon: "magnezone"
	},
	{
		name: "Lickilicky",
		value: "lickilicky",
		icon: "lickilicky",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rhyperior",
		value: "rhyperior",
		icon: "rhyperior",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tangrowth",
		value: "tangrowth",
		icon: "tangrowth",
		exclude: [
			"sv"
		]
	},
	{
		name: "Electivire",
		value: "electivire",
		icon: "electivire",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magmortar",
		value: "magmortar",
		icon: "magmortar",
		exclude: [
			"sv"
		]
	},
	{
		name: "Togekiss",
		value: "togekiss",
		icon: "togekiss",
		exclude: [
			"sv"
		]
	},
	{
		name: "Yanmega",
		value: "yanmega",
		icon: "yanmega",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Leafeon",
		value: "leafeon",
		icon: "leafeon"
	},
	{
		name: "Glaceon",
		value: "glaceon",
		icon: "glaceon"
	},
	{
		name: "Gliscor",
		value: "gliscor",
		icon: "gliscor",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Mamoswine",
		value: "mamoswine",
		icon: "mamoswine",
		exclude: [
			"sv"
		]
	},
	{
		name: "Porygon-Z",
		value: "porygon-z",
		icon: "porygon-z",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gallade",
		value: "gallade",
		icon: "gallade"
	},
	{
		name: "Probopass",
		value: "probopass",
		icon: "probopass",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dusknoir",
		value: "dusknoir",
		icon: "dusknoir",
		exclude: [
			"sv"
		]
	},
	{
		name: "Froslass",
		value: "froslass",
		icon: "froslass"
	},
	{
		name: "Rotom",
		value: "rotom",
		icon: "rotom"
	},
	{
		name: "Uxie",
		value: "uxie",
		icon: "uxie"
	},
	{
		name: "Mesprit",
		value: "mesprit",
		icon: "mesprit"
	},
	{
		name: "Azelf",
		value: "azelf",
		icon: "azelf"
	},
	{
		name: "Dialga",
		value: "dialga",
		icon: "dialga"
	},
	{
		name: "Palkia",
		value: "palkia",
		icon: "palkia"
	},
	{
		name: "Heatran",
		value: "heatran",
		icon: "heatran"
	},
	{
		name: "Regigigas",
		value: "regigigas",
		icon: "regigigas",
		exclude: [
			"sv"
		]
	},
	{
		name: "Giratina",
		value: "giratina",
		icon: "giratina"
	},
	{
		name: "Cresselia",
		value: "cresselia",
		icon: "cresselia"
	},
	{
		name: "Phione",
		value: "phione",
		icon: "phione",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Manaphy",
		value: "manaphy",
		icon: "manaphy",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Darkrai",
		value: "darkrai",
		icon: "darkrai",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Shaymin",
		value: "shaymin",
		icon: "shaymin",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Arceus",
		value: "arceus",
		icon: "arceus",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Victini",
		value: "victini",
		icon: "victini",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snivy",
		value: "snivy",
		icon: "snivy",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Servine",
		value: "servine",
		icon: "servine",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Serperior",
		value: "serperior",
		icon: "serperior",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Tepig",
		value: "tepig",
		icon: "tepig",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pignite",
		value: "pignite",
		icon: "pignite",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Emboar",
		value: "emboar",
		icon: "emboar",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Oshawott",
		value: "oshawott",
		icon: "oshawott",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Dewott",
		value: "dewott",
		icon: "dewott",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Samurott",
		value: "samurott",
		icon: "samurott",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Patrat",
		value: "patrat",
		icon: "patrat",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Watchog",
		value: "watchog",
		icon: "watchog",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Lillipup",
		value: "lillipup",
		icon: "lillipup",
		exclude: [
			"sv"
		]
	},
	{
		name: "Herdier",
		value: "herdier",
		icon: "herdier",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stoutland",
		value: "stoutland",
		icon: "stoutland",
		exclude: [
			"sv"
		]
	},
	{
		name: "Purrloin",
		value: "purrloin",
		icon: "purrloin",
		exclude: [
			"sv"
		]
	},
	{
		name: "Liepard",
		value: "liepard",
		icon: "liepard",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pansage",
		value: "pansage",
		icon: "pansage",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Simisage",
		value: "simisage",
		icon: "simisage",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pansear",
		value: "pansear",
		icon: "pansear",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Simisear",
		value: "simisear",
		icon: "simisear",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Panpour",
		value: "panpour",
		icon: "panpour",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Simipour",
		value: "simipour",
		icon: "simipour",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Munna",
		value: "munna",
		icon: "munna",
		exclude: [
			"sv"
		]
	},
	{
		name: "Musharna",
		value: "musharna",
		icon: "musharna",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pidove",
		value: "pidove",
		icon: "pidove",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tranquill",
		value: "tranquill",
		icon: "tranquill",
		exclude: [
			"sv"
		]
	},
	{
		name: "Unfezant",
		value: "unfezant",
		icon: "unfezant",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blitzle",
		value: "blitzle",
		icon: "blitzle",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Zebstrika",
		value: "zebstrika",
		icon: "zebstrika",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Roggenrola",
		value: "roggenrola",
		icon: "roggenrola",
		exclude: [
			"sv"
		]
	},
	{
		name: "Boldore",
		value: "boldore",
		icon: "boldore",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gigalith",
		value: "gigalith",
		icon: "gigalith",
		exclude: [
			"sv"
		]
	},
	{
		name: "Woobat",
		value: "woobat",
		icon: "woobat",
		exclude: [
			"sv"
		]
	},
	{
		name: "Swoobat",
		value: "swoobat",
		icon: "swoobat",
		exclude: [
			"sv"
		]
	},
	{
		name: "Drilbur",
		value: "drilbur",
		icon: "drilbur",
		exclude: [
			"sv"
		]
	},
	{
		name: "Excadrill",
		value: "excadrill",
		icon: "excadrill",
		exclude: [
			"sv"
		]
	},
	{
		name: "Audino",
		value: "audino",
		icon: "audino",
		exclude: [
			"sv"
		]
	},
	{
		name: "Timburr",
		value: "timburr",
		icon: "timburr",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gurdurr",
		value: "gurdurr",
		icon: "gurdurr",
		exclude: [
			"sv"
		]
	},
	{
		name: "Conkeldurr",
		value: "conkeldurr",
		icon: "conkeldurr",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tympole",
		value: "tympole",
		icon: "tympole",
		exclude: [
			"sv"
		]
	},
	{
		name: "Palpitoad",
		value: "palpitoad",
		icon: "palpitoad",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seismitoad",
		value: "seismitoad",
		icon: "seismitoad",
		exclude: [
			"sv"
		]
	},
	{
		name: "Throh",
		value: "throh",
		icon: "throh",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sawk",
		value: "sawk",
		icon: "sawk",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sewaddle",
		value: "sewaddle",
		icon: "sewaddle",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swadloon",
		value: "swadloon",
		icon: "swadloon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Leavanny",
		value: "leavanny",
		icon: "leavanny",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Venipede",
		value: "venipede",
		icon: "venipede",
		exclude: [
			"sv"
		]
	},
	{
		name: "Whirlipede",
		value: "whirlipede",
		icon: "whirlipede",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scolipede",
		value: "scolipede",
		icon: "scolipede",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cottonee",
		value: "cottonee",
		icon: "cottonee",
		exclude: [
			"sv"
		]
	},
	{
		name: "Whimsicott",
		value: "whimsicott",
		icon: "whimsicott",
		exclude: [
			"sv"
		]
	},
	{
		name: "Petilil",
		value: "petilil",
		icon: "petilil"
	},
	{
		name: "Lilligant",
		value: "lilligant",
		icon: "lilligant"
	},
	{
		name: "Basculin",
		value: "basculin",
		icon: "basculin"
	},
	{
		name: "Sandile",
		value: "sandile",
		icon: "sandile"
	},
	{
		name: "Krokorok",
		value: "krokorok",
		icon: "krokorok"
	},
	{
		name: "Krookodile",
		value: "krookodile",
		icon: "krookodile"
	},
	{
		name: "Darumaka",
		value: "darumaka",
		icon: "darumaka",
		exclude: [
			"sv"
		]
	},
	{
		name: "Darmanitan",
		value: "darmanitan",
		icon: "darmanitan",
		exclude: [
			"sv"
		]
	},
	{
		name: "Maractus",
		value: "maractus",
		icon: "maractus",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dwebble",
		value: "dwebble",
		icon: "dwebble",
		exclude: [
			"sv"
		]
	},
	{
		name: "Crustle",
		value: "crustle",
		icon: "crustle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scraggy",
		value: "scraggy",
		icon: "scraggy",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scrafty",
		value: "scrafty",
		icon: "scrafty",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sigilyph",
		value: "sigilyph",
		icon: "sigilyph",
		exclude: [
			"sv"
		]
	},
	{
		name: "Yamask",
		value: "yamask",
		icon: "yamask",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cofagrigus",
		value: "cofagrigus",
		icon: "cofagrigus",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tirtouga",
		value: "tirtouga",
		icon: "tirtouga",
		exclude: [
			"sv"
		]
	},
	{
		name: "Carracosta",
		value: "carracosta",
		icon: "carracosta",
		exclude: [
			"sv"
		]
	},
	{
		name: "Archen",
		value: "archen",
		icon: "archen",
		exclude: [
			"sv"
		]
	},
	{
		name: "Archeops",
		value: "archeops",
		icon: "archeops",
		exclude: [
			"sv"
		]
	},
	{
		name: "Trubbish",
		value: "trubbish",
		icon: "trubbish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Garbodor",
		value: "garbodor",
		icon: "garbodor",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zorua",
		value: "zorua",
		icon: "zorua"
	},
	{
		name: "Zoroark",
		value: "zoroark",
		icon: "zoroark"
	},
	{
		name: "Minccino",
		value: "minccino",
		icon: "minccino",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cinccino",
		value: "cinccino",
		icon: "cinccino",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gothita",
		value: "gothita",
		icon: "gothita"
	},
	{
		name: "Gothorita",
		value: "gothorita",
		icon: "gothorita"
	},
	{
		name: "Gothitelle",
		value: "gothitelle",
		icon: "gothitelle"
	},
	{
		name: "Solosis",
		value: "solosis",
		icon: "solosis",
		exclude: [
			"sv"
		]
	},
	{
		name: "Duosion",
		value: "duosion",
		icon: "duosion",
		exclude: [
			"sv"
		]
	},
	{
		name: "Reuniclus",
		value: "reuniclus",
		icon: "reuniclus",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ducklett",
		value: "ducklett",
		icon: "ducklett",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swanna",
		value: "swanna",
		icon: "swanna",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Vanillite",
		value: "vanillite",
		icon: "vanillite",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vanillish",
		value: "vanillish",
		icon: "vanillish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vanilluxe",
		value: "vanilluxe",
		icon: "vanilluxe",
		exclude: [
			"sv"
		]
	},
	{
		name: "Deerling",
		value: "deerling",
		icon: "deerling",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Sawsbuck",
		value: "sawsbuck",
		icon: "sawsbuck",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Emolga",
		value: "emolga",
		icon: "emolga",
		exclude: [
			"sv"
		]
	},
	{
		name: "Karrablast",
		value: "karrablast",
		icon: "karrablast",
		exclude: [
			"sv"
		]
	},
	{
		name: "Escavalier",
		value: "escavalier",
		icon: "escavalier",
		exclude: [
			"sv"
		]
	},
	{
		name: "Foongus",
		value: "foongus",
		icon: "foongus"
	},
	{
		name: "Amoonguss",
		value: "amoonguss",
		icon: "amoonguss"
	},
	{
		name: "Frillish",
		value: "frillish",
		icon: "frillish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Jellicent",
		value: "jellicent",
		icon: "jellicent",
		exclude: [
			"sv"
		]
	},
	{
		name: "Alomomola",
		value: "alomomola",
		icon: "alomomola",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Joltik",
		value: "joltik",
		icon: "joltik",
		exclude: [
			"sv"
		]
	},
	{
		name: "Galvantula",
		value: "galvantula",
		icon: "galvantula",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ferroseed",
		value: "ferroseed",
		icon: "ferroseed",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ferrothorn",
		value: "ferrothorn",
		icon: "ferrothorn",
		exclude: [
			"sv"
		]
	},
	{
		name: "Klink",
		value: "klink",
		icon: "klink",
		exclude: [
			"sv"
		]
	},
	{
		name: "Klang",
		value: "klang",
		icon: "klang",
		exclude: [
			"sv"
		]
	},
	{
		name: "Klinklang",
		value: "klinklang",
		icon: "klinklang",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tynamo",
		value: "tynamo",
		icon: "tynamo",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Eelektrik",
		value: "eelektrik",
		icon: "eelektrik",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Eelektross",
		value: "eelektross",
		icon: "eelektross",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Elgyem",
		value: "elgyem",
		icon: "elgyem",
		exclude: [
			"sv"
		]
	},
	{
		name: "Beheeyem",
		value: "beheeyem",
		icon: "beheeyem",
		exclude: [
			"sv"
		]
	},
	{
		name: "Litwick",
		value: "litwick",
		icon: "litwick",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lampent",
		value: "lampent",
		icon: "lampent",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chandelure",
		value: "chandelure",
		icon: "chandelure",
		exclude: [
			"sv"
		]
	},
	{
		name: "Axew",
		value: "axew",
		icon: "axew"
	},
	{
		name: "Fraxure",
		value: "fraxure",
		icon: "fraxure"
	},
	{
		name: "Haxorus",
		value: "haxorus",
		icon: "haxorus"
	},
	{
		name: "Cubchoo",
		value: "cubchoo",
		icon: "cubchoo"
	},
	{
		name: "Beartic",
		value: "beartic",
		icon: "beartic"
	},
	{
		name: "Cryogonal",
		value: "cryogonal",
		icon: "cryogonal"
	},
	{
		name: "Shelmet",
		value: "shelmet",
		icon: "shelmet",
		exclude: [
			"sv"
		]
	},
	{
		name: "Accelgor",
		value: "accelgor",
		icon: "accelgor",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stunfisk",
		value: "stunfisk",
		icon: "stunfisk",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mienfoo",
		value: "mienfoo",
		icon: "mienfoo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mienshao",
		value: "mienshao",
		icon: "mienshao",
		exclude: [
			"sv"
		]
	},
	{
		name: "Druddigon",
		value: "druddigon",
		icon: "druddigon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golett",
		value: "golett",
		icon: "golett",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golurk",
		value: "golurk",
		icon: "golurk",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pawniard",
		value: "pawniard",
		icon: "pawniard"
	},
	{
		name: "Bisharp",
		value: "bisharp",
		icon: "bisharp"
	},
	{
		name: "Bouffalant",
		value: "bouffalant",
		icon: "bouffalant",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rufflet",
		value: "rufflet",
		icon: "rufflet"
	},
	{
		name: "Braviary",
		value: "braviary",
		icon: "braviary"
	},
	{
		name: "Vullaby",
		value: "vullaby",
		icon: "vullaby",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mandibuzz",
		value: "mandibuzz",
		icon: "mandibuzz",
		exclude: [
			"sv"
		]
	},
	{
		name: "Heatmor",
		value: "heatmor",
		icon: "heatmor",
		exclude: [
			"sv"
		]
	},
	{
		name: "Durant",
		value: "durant",
		icon: "durant",
		exclude: [
			"sv"
		]
	},
	{
		name: "Deino",
		value: "deino",
		icon: "deino"
	},
	{
		name: "Zweilous",
		value: "zweilous",
		icon: "zweilous"
	},
	{
		name: "Hydreigon",
		value: "hydreigon",
		icon: "hydreigon"
	},
	{
		name: "Larvesta",
		value: "larvesta",
		icon: "larvesta"
	},
	{
		name: "Volcarona",
		value: "volcarona",
		icon: "volcarona"
	},
	{
		name: "Cobalion",
		value: "cobalion",
		icon: "cobalion",
		exclude: [
			"sv"
		]
	},
	{
		name: "Terrakion",
		value: "terrakion",
		icon: "terrakion",
		exclude: [
			"sv"
		]
	},
	{
		name: "Virizion",
		value: "virizion",
		icon: "virizion",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tornadus",
		value: "tornadus",
		icon: "tornadus"
	},
	{
		name: "Thundurus",
		value: "thundurus",
		icon: "thundurus"
	},
	{
		name: "Reshiram",
		value: "reshiram",
		icon: "reshiram",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zekrom",
		value: "zekrom",
		icon: "zekrom",
		exclude: [
			"sv"
		]
	},
	{
		name: "Landorus",
		value: "landorus",
		icon: "landorus"
	},
	{
		name: "Kyurem",
		value: "kyurem",
		icon: "kyurem",
		exclude: [
			"sv"
		]
	},
	{
		name: "Keldeo",
		value: "keldeo",
		icon: "keldeo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meloetta",
		value: "meloetta",
		icon: "meloetta",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Genesect",
		value: "genesect",
		icon: "genesect",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chespin",
		value: "chespin",
		icon: "chespin",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Quilladin",
		value: "quilladin",
		icon: "quilladin",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Chesnaught",
		value: "chesnaught",
		icon: "chesnaught",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Fennekin",
		value: "fennekin",
		icon: "fennekin",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Braixen",
		value: "braixen",
		icon: "braixen",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Delphox",
		value: "delphox",
		icon: "delphox",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Froakie",
		value: "froakie",
		icon: "froakie",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Frogadier",
		value: "frogadier",
		icon: "frogadier",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Greninja",
		value: "greninja",
		icon: "greninja",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bunnelby",
		value: "bunnelby",
		icon: "bunnelby",
		exclude: [
			"sv"
		]
	},
	{
		name: "Diggersby",
		value: "diggersby",
		icon: "diggersby",
		exclude: [
			"sv"
		]
	},
	{
		name: "Fletchling",
		value: "fletchling",
		icon: "fletchling"
	},
	{
		name: "Fletchinder",
		value: "fletchinder",
		icon: "fletchinder"
	},
	{
		name: "Talonflame",
		value: "talonflame",
		icon: "talonflame"
	},
	{
		name: "Scatterbug",
		value: "scatterbug",
		icon: "scatterbug",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Spewpa",
		value: "spewpa",
		icon: "spewpa",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Vivillon",
		value: "vivillon",
		icon: "vivillon",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Litleo",
		value: "litleo",
		icon: "litleo",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Pyroar",
		value: "pyroar",
		icon: "pyroar",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Flabébé",
		value: "flabebe",
		icon: "flabebe",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Floette",
		value: "floette",
		icon: "floette",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Florges",
		value: "florges",
		icon: "florges",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Skiddo",
		value: "skiddo",
		icon: "skiddo",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Gogoat",
		value: "gogoat",
		icon: "gogoat",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Pancham",
		value: "pancham",
		icon: "pancham",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pangoro",
		value: "pangoro",
		icon: "pangoro",
		exclude: [
			"sv"
		]
	},
	{
		name: "Furfrou",
		value: "furfrou",
		icon: "furfrou",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Espurr",
		value: "espurr",
		icon: "espurr",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meowstic",
		value: "meowstic",
		icon: "meowstic",
		exclude: [
			"sv"
		]
	},
	{
		name: "Honedge",
		value: "honedge",
		icon: "honedge",
		exclude: [
			"sv"
		]
	},
	{
		name: "Doublade",
		value: "doublade",
		icon: "doublade",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aegislash",
		value: "aegislash",
		icon: "aegislash",
		exclude: [
			"sv"
		]
	},
	{
		name: "Spritzee",
		value: "spritzee",
		icon: "spritzee",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aromatisse",
		value: "aromatisse",
		icon: "aromatisse",
		exclude: [
			"sv"
		]
	},
	{
		name: "Swirlix",
		value: "swirlix",
		icon: "swirlix",
		exclude: [
			"sv"
		]
	},
	{
		name: "Slurpuff",
		value: "slurpuff",
		icon: "slurpuff",
		exclude: [
			"sv"
		]
	},
	{
		name: "Inkay",
		value: "inkay",
		icon: "inkay",
		exclude: [
			"sv"
		]
	},
	{
		name: "Malamar",
		value: "malamar",
		icon: "malamar",
		exclude: [
			"sv"
		]
	},
	{
		name: "Binacle",
		value: "binacle",
		icon: "binacle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Barbaracle",
		value: "barbaracle",
		icon: "barbaracle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Skrelp",
		value: "skrelp",
		icon: "skrelp"
	},
	{
		name: "Dragalge",
		value: "dragalge",
		icon: "dragalge"
	},
	{
		name: "Clauncher",
		value: "clauncher",
		icon: "clauncher"
	},
	{
		name: "Clawitzer",
		value: "clawitzer",
		icon: "clawitzer"
	},
	{
		name: "Helioptile",
		value: "helioptile",
		icon: "helioptile",
		exclude: [
			"sv"
		]
	},
	{
		name: "Heliolisk",
		value: "heliolisk",
		icon: "heliolisk",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tyrunt",
		value: "tyrunt",
		icon: "tyrunt",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tyrantrum",
		value: "tyrantrum",
		icon: "tyrantrum",
		exclude: [
			"sv"
		]
	},
	{
		name: "Amaura",
		value: "amaura",
		icon: "amaura",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aurorus",
		value: "aurorus",
		icon: "aurorus",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sylveon",
		value: "sylveon",
		icon: "sylveon"
	},
	{
		name: "Hawlucha",
		value: "hawlucha",
		icon: "hawlucha"
	},
	{
		name: "Dedenne",
		value: "dedenne",
		icon: "dedenne"
	},
	{
		name: "Carbink",
		value: "carbink",
		icon: "carbink"
	},
	{
		name: "Goomy",
		value: "goomy",
		icon: "goomy"
	},
	{
		name: "Sliggoo",
		value: "sliggoo",
		icon: "sliggoo"
	},
	{
		name: "Goodra",
		value: "goodra",
		icon: "goodra"
	},
	{
		name: "Klefki",
		value: "klefki",
		icon: "klefki"
	},
	{
		name: "Phantump",
		value: "phantump",
		icon: "phantump",
		exclude: [
			"sv"
		]
	},
	{
		name: "Trevenant",
		value: "trevenant",
		icon: "trevenant",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pumpkaboo",
		value: "pumpkaboo",
		icon: "pumpkaboo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gourgeist",
		value: "gourgeist",
		icon: "gourgeist",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bergmite",
		value: "bergmite",
		icon: "bergmite"
	},
	{
		name: "Avalugg",
		value: "avalugg",
		icon: "avalugg"
	},
	{
		name: "Noibat",
		value: "noibat",
		icon: "noibat"
	},
	{
		name: "Noivern",
		value: "noivern",
		icon: "noivern"
	},
	{
		name: "Xerneas",
		value: "xerneas",
		icon: "xerneas",
		exclude: [
			"sv"
		]
	},
	{
		name: "Yveltal",
		value: "yveltal",
		icon: "yveltal",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zygarde",
		value: "zygarde",
		icon: "zygarde",
		exclude: [
			"sv"
		]
	},
	{
		name: "Diancie",
		value: "diancie",
		icon: "diancie"
	},
	{
		name: "Hoopa",
		value: "hoopa",
		icon: "hoopa",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Volcanion",
		value: "volcanion",
		icon: "volcanion"
	},
	{
		name: "Rowlet",
		value: "rowlet",
		icon: "rowlet"
	},
	{
		name: "Dartrix",
		value: "dartrix",
		icon: "dartrix"
	},
	{
		name: "Decidueye",
		value: "decidueye",
		icon: "decidueye"
	},
	{
		name: "Litten",
		value: "litten",
		icon: "litten",
		exclude: [
			"sv"
		]
	},
	{
		name: "Torracat",
		value: "torracat",
		icon: "torracat",
		exclude: [
			"sv"
		]
	},
	{
		name: "Incineroar",
		value: "incineroar",
		icon: "incineroar",
		exclude: [
			"sv"
		]
	},
	{
		name: "Popplio",
		value: "popplio",
		icon: "popplio",
		exclude: [
			"sv"
		]
	},
	{
		name: "Brionne",
		value: "brionne",
		icon: "brionne",
		exclude: [
			"sv"
		]
	},
	{
		name: "Primarina",
		value: "primarina",
		icon: "primarina",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pikipek",
		value: "pikipek",
		icon: "pikipek",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Trumbeak",
		value: "trumbeak",
		icon: "trumbeak",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Toucannon",
		value: "toucannon",
		icon: "toucannon",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Yungoos",
		value: "yungoos",
		icon: "yungoos",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Gumshoos",
		value: "gumshoos",
		icon: "gumshoos",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Grubbin",
		value: "grubbin",
		icon: "grubbin",
		exclude: [
			"sv"
		]
	},
	{
		name: "Charjabug",
		value: "charjabug",
		icon: "charjabug",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vikavolt",
		value: "vikavolt",
		icon: "vikavolt",
		exclude: [
			"sv"
		]
	},
	{
		name: "Crabrawler",
		value: "crabrawler",
		icon: "crabrawler",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Crabominable",
		value: "crabominable",
		icon: "crabominable",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Oricorio",
		value: "oricorio",
		icon: "oricorio",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Cutiefly",
		value: "cutiefly",
		icon: "cutiefly",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ribombee",
		value: "ribombee",
		icon: "ribombee",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rockruff",
		value: "rockruff",
		icon: "rockruff"
	},
	{
		name: "Lycanroc",
		value: "lycanroc",
		icon: "lycanroc"
	},
	{
		name: "Wishiwashi",
		value: "wishiwashi",
		icon: "wishiwashi",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mareanie",
		value: "mareanie",
		icon: "mareanie"
	},
	{
		name: "Toxapex",
		value: "toxapex",
		icon: "toxapex"
	},
	{
		name: "Mudbray",
		value: "mudbray",
		icon: "mudbray"
	},
	{
		name: "Mudsdale",
		value: "mudsdale",
		icon: "mudsdale"
	},
	{
		name: "Dewpider",
		value: "dewpider",
		icon: "dewpider",
		exclude: [
			"sv"
		]
	},
	{
		name: "Araquanid",
		value: "araquanid",
		icon: "araquanid",
		exclude: [
			"sv"
		]
	},
	{
		name: "Fomantis",
		value: "fomantis",
		icon: "fomantis"
	},
	{
		name: "Lurantis",
		value: "lurantis",
		icon: "lurantis"
	},
	{
		name: "Morelull",
		value: "morelull",
		icon: "morelull",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shiinotic",
		value: "shiinotic",
		icon: "shiinotic",
		exclude: [
			"sv"
		]
	},
	{
		name: "Salandit",
		value: "salandit",
		icon: "salandit"
	},
	{
		name: "Salazzle",
		value: "salazzle",
		icon: "salazzle"
	},
	{
		name: "Stufful",
		value: "stufful",
		icon: "stufful",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bewear",
		value: "bewear",
		icon: "bewear",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bounsweet",
		value: "bounsweet",
		icon: "bounsweet"
	},
	{
		name: "Steenee",
		value: "steenee",
		icon: "steenee"
	},
	{
		name: "Tsareena",
		value: "tsareena",
		icon: "tsareena"
	},
	{
		name: "Comfey",
		value: "comfey",
		icon: "comfey",
		exclude: [
			"sv"
		]
	},
	{
		name: "Oranguru",
		value: "oranguru",
		icon: "oranguru"
	},
	{
		name: "Passimian",
		value: "passimian",
		icon: "passimian"
	},
	{
		name: "Wimpod",
		value: "wimpod",
		icon: "wimpod",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golisopod",
		value: "golisopod",
		icon: "golisopod",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sandygast",
		value: "sandygast",
		icon: "sandygast"
	},
	{
		name: "Palossand",
		value: "palossand",
		icon: "palossand"
	},
	{
		name: "Pyukumuku",
		value: "pyukumuku",
		icon: "pyukumuku",
		exclude: [
			"sv"
		]
	},
	{
		name: "Type: Null",
		value: "type-null",
		icon: "type-null",
		exclude: [
			"sv"
		]
	},
	{
		name: "Silvally",
		value: "silvally",
		icon: "silvally",
		exclude: [
			"sv"
		]
	},
	{
		name: "Minior",
		value: "minior",
		icon: "minior",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Komala",
		value: "komala",
		icon: "komala",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Turtonator",
		value: "turtonator",
		icon: "turtonator",
		exclude: [
			"sv"
		]
	},
	{
		name: "Togedemaru",
		value: "togedemaru",
		icon: "togedemaru",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mimikyu",
		value: "mimikyu",
		icon: "mimikyu"
	},
	{
		name: "Bruxish",
		value: "bruxish",
		icon: "bruxish",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Drampa",
		value: "drampa",
		icon: "drampa",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dhelmise",
		value: "dhelmise",
		icon: "dhelmise",
		exclude: [
			"sv"
		]
	},
	{
		name: "Jangmo-o",
		value: "jangmo-o",
		icon: "jangmo-o",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hakamo-o",
		value: "hakamo-o",
		icon: "hakamo-o",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kommo-o",
		value: "kommo-o",
		icon: "kommo-o",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Koko",
		value: "tapu-koko",
		icon: "tapu-koko",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Lele",
		value: "tapu-lele",
		icon: "tapu-lele",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Bulu",
		value: "tapu-bulu",
		icon: "tapu-bulu",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Fini",
		value: "tapu-fini",
		icon: "tapu-fini",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cosmog",
		value: "cosmog",
		icon: "cosmog",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cosmoem",
		value: "cosmoem",
		icon: "cosmoem",
		exclude: [
			"sv"
		]
	},
	{
		name: "Solgaleo",
		value: "solgaleo",
		icon: "solgaleo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lunala",
		value: "lunala",
		icon: "lunala",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nihilego",
		value: "nihilego",
		icon: "nihilego",
		exclude: [
			"sv"
		]
	},
	{
		name: "Buzzwole",
		value: "buzzwole",
		icon: "buzzwole",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pheromosa",
		value: "pheromosa",
		icon: "pheromosa",
		exclude: [
			"sv"
		]
	},
	{
		name: "Xurkitree",
		value: "xurkitree",
		icon: "xurkitree",
		exclude: [
			"sv"
		]
	},
	{
		name: "Celesteela",
		value: "celesteela",
		icon: "celesteela",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kartana",
		value: "kartana",
		icon: "kartana",
		exclude: [
			"sv"
		]
	},
	{
		name: "Guzzlord",
		value: "guzzlord",
		icon: "guzzlord",
		exclude: [
			"sv"
		]
	},
	{
		name: "Necrozma",
		value: "necrozma",
		icon: "necrozma",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magearna",
		value: "magearna",
		icon: "magearna"
	},
	{
		name: "Marshadow",
		value: "marshadow",
		icon: "marshadow",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poipole",
		value: "poipole",
		icon: "poipole",
		exclude: [
			"sv"
		]
	},
	{
		name: "Naganadel",
		value: "naganadel",
		icon: "naganadel",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stakataka",
		value: "stakataka",
		icon: "stakataka",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blacephalon",
		value: "blacephalon",
		icon: "blacephalon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zeraora",
		value: "zeraora",
		icon: "zeraora",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meltan",
		value: "meltan",
		icon: "meltan",
		exclude: [
			"sv"
		]
	},
	{
		name: "Melmetal",
		value: "melmetal",
		icon: "melmetal",
		exclude: [
			"sv"
		]
	},
	{
		name: "Grookey",
		value: "grookey",
		icon: "grookey"
	},
	{
		name: "Thwackey",
		value: "thwackey",
		icon: "thwackey"
	},
	{
		name: "Rillaboom",
		value: "rillaboom",
		icon: "rillaboom"
	},
	{
		name: "Scorbunny",
		value: "scorbunny",
		icon: "scorbunny"
	},
	{
		name: "Raboot",
		value: "raboot",
		icon: "raboot"
	},
	{
		name: "Cinderace",
		value: "cinderace",
		icon: "cinderace"
	},
	{
		name: "Sobble",
		value: "sobble",
		icon: "sobble"
	},
	{
		name: "Drizzile",
		value: "drizzile",
		icon: "drizzile"
	},
	{
		name: "Inteleon",
		value: "inteleon",
		icon: "inteleon"
	},
	{
		name: "Skwovet",
		value: "skwovet",
		icon: "skwovet"
	},
	{
		name: "Greedent",
		value: "greedent",
		icon: "greedent"
	},
	{
		name: "Rookidee",
		value: "rookidee",
		icon: "rookidee"
	},
	{
		name: "Corvisquire",
		value: "corvisquire",
		icon: "corvisquire"
	},
	{
		name: "Corviknight",
		value: "corviknight",
		icon: "corviknight"
	},
	{
		name: "Blipbug",
		value: "blipbug",
		icon: "blipbug",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dottler",
		value: "dottler",
		icon: "dottler",
		exclude: [
			"sv"
		]
	},
	{
		name: "Orbeetle",
		value: "orbeetle",
		icon: "orbeetle",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nickit",
		value: "nickit",
		icon: "nickit",
		exclude: [
			"sv"
		]
	},
	{
		name: "Thievul",
		value: "thievul",
		icon: "thievul",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gossifleur",
		value: "gossifleur",
		icon: "gossifleur",
		exclude: [
			"sv"
		]
	},
	{
		name: "Eldegoss",
		value: "eldegoss",
		icon: "eldegoss",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wooloo",
		value: "wooloo",
		icon: "wooloo",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dubwool",
		value: "dubwool",
		icon: "dubwool",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chewtle",
		value: "chewtle",
		icon: "chewtle"
	},
	{
		name: "Drednaw",
		value: "drednaw",
		icon: "drednaw"
	},
	{
		name: "Yamper",
		value: "yamper",
		icon: "yamper",
		exclude: [
			"sv"
		]
	},
	{
		name: "Boltund",
		value: "boltund",
		icon: "boltund",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rolycoly",
		value: "rolycoly",
		icon: "rolycoly"
	},
	{
		name: "Carkol",
		value: "carkol",
		icon: "carkol"
	},
	{
		name: "Coalossal",
		value: "coalossal",
		icon: "coalossal"
	},
	{
		name: "Applin",
		value: "applin",
		icon: "applin"
	},
	{
		name: "Flapple",
		value: "flapple",
		icon: "flapple"
	},
	{
		name: "Appletun",
		value: "appletun",
		icon: "appletun"
	},
	{
		name: "Silicobra",
		value: "silicobra",
		icon: "silicobra"
	},
	{
		name: "Sandaconda",
		value: "sandaconda",
		icon: "sandaconda"
	},
	{
		name: "Cramorant",
		value: "cramorant",
		icon: "cramorant",
		exclude: [
			"sv"
		]
	},
	{
		name: "Arrokuda",
		value: "arrokuda",
		icon: "arrokuda"
	},
	{
		name: "Barraskewda",
		value: "barraskewda",
		icon: "barraskewda"
	},
	{
		name: "Toxel",
		value: "toxel",
		icon: "toxel"
	},
	{
		name: "Toxtricity",
		value: "toxtricity",
		icon: "toxtricity"
	},
	{
		name: "Sizzlipede",
		value: "sizzlipede",
		icon: "sizzlipede",
		exclude: [
			"sv"
		]
	},
	{
		name: "Centiskorch",
		value: "centiskorch",
		icon: "centiskorch",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clobbopus",
		value: "clobbopus",
		icon: "clobbopus",
		exclude: [
			"sv"
		]
	},
	{
		name: "Grapploct",
		value: "grapploct",
		icon: "grapploct",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sinistea",
		value: "sinistea",
		icon: "sinistea"
	},
	{
		name: "Polteageist",
		value: "polteageist",
		icon: "polteageist"
	},
	{
		name: "Hatenna",
		value: "hatenna",
		icon: "hatenna"
	},
	{
		name: "Hattrem",
		value: "hattrem",
		icon: "hattrem"
	},
	{
		name: "Hatterene",
		value: "hatterene",
		icon: "hatterene"
	},
	{
		name: "Impidimp",
		value: "impidimp",
		icon: "impidimp"
	},
	{
		name: "Morgrem",
		value: "morgrem",
		icon: "morgrem"
	},
	{
		name: "Grimmsnarl",
		value: "grimmsnarl",
		icon: "grimmsnarl"
	},
	{
		name: "Obstagoon",
		value: "obstagoon",
		icon: "obstagoon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Perrserker",
		value: "perrserker",
		icon: "perrserker"
	},
	{
		name: "Cursola",
		value: "cursola",
		icon: "cursola",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sirfetch'd",
		value: "sirfetchd",
		icon: "sirfetchd",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mr. Rime",
		value: "mr-rime",
		icon: "mr-rime",
		exclude: [
			"sv"
		]
	},
	{
		name: "Runerigus",
		value: "runerigus",
		icon: "runerigus",
		exclude: [
			"sv"
		]
	},
	{
		name: "Milcery",
		value: "milcery",
		icon: "milcery",
		exclude: [
			"sv"
		]
	},
	{
		name: "Alcremie",
		value: "alcremie",
		icon: "alcremie",
		exclude: [
			"sv"
		]
	},
	{
		name: "Falinks",
		value: "falinks",
		icon: "falinks"
	},
	{
		name: "Pincurchin",
		value: "pincurchin",
		icon: "pincurchin"
	},
	{
		name: "Snom",
		value: "snom",
		icon: "snom"
	},
	{
		name: "Frosmoth",
		value: "frosmoth",
		icon: "frosmoth"
	},
	{
		name: "Stonjourner",
		value: "stonjourner",
		icon: "stonjourner"
	},
	{
		name: "Eiscue",
		value: "eiscue",
		icon: "eiscue"
	},
	{
		name: "Indeedee",
		value: "indeedee",
		icon: "indeedee"
	},
	{
		name: "Morpeko",
		value: "morpeko",
		icon: "morpeko",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cufant",
		value: "cufant",
		icon: "cufant"
	},
	{
		name: "Copperajah",
		value: "copperajah",
		icon: "copperajah"
	},
	{
		name: "Dracozolt",
		value: "dracozolt",
		icon: "dracozolt",
		exclude: [
			"sv"
		]
	},
	{
		name: "Arctozolt",
		value: "arctozolt",
		icon: "arctozolt",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dracovish",
		value: "dracovish",
		icon: "dracovish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Arctovish",
		value: "arctovish",
		icon: "arctovish",
		exclude: [
			"sv"
		]
	},
	{
		name: "Duraludon",
		value: "duraludon",
		icon: "duraludon",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dreepy",
		value: "dreepy",
		icon: "dreepy"
	},
	{
		name: "Drakloak",
		value: "drakloak",
		icon: "drakloak"
	},
	{
		name: "Dragapult",
		value: "dragapult",
		icon: "dragapult"
	},
	{
		name: "Zacian",
		value: "zacian",
		icon: "zacian"
	},
	{
		name: "Zamazenta",
		value: "zamazenta",
		icon: "zamazenta"
	},
	{
		name: "Eternatus",
		value: "eternatus",
		icon: "eternatus"
	},
	{
		name: "Kubfu",
		value: "kubfu",
		icon: "kubfu"
	},
	{
		name: "Urshifu",
		value: "urshifu",
		icon: "urshifu"
	},
	{
		name: "Zarude",
		value: "zarude",
		icon: "zarude"
	},
	{
		name: "Regieleki",
		value: "regieleki",
		icon: "regieleki"
	},
	{
		name: "Regidrago",
		value: "regidrago",
		icon: "regidrago"
	},
	{
		name: "Glastrier",
		value: "glastrier",
		icon: "glastrier"
	},
	{
		name: "Spectrier",
		value: "spectrier",
		icon: "spectrier"
	},
	{
		name: "Calyrex",
		value: "calyrex",
		icon: "calyrex"
	},
	{
		name: "Wyrdeer",
		value: "wyrdeer",
		icon: "wyrdeer"
	},
	{
		name: "Kleavor",
		value: "kleavor",
		icon: "kleavor"
	},
	{
		name: "Ursaluna",
		value: "ursaluna",
		icon: "ursaluna"
	},
	{
		name: "Basculegion",
		value: "basculegion",
		icon: "basculegion"
	},
	{
		name: "Sneasler",
		value: "sneasler",
		icon: "sneasler"
	},
	{
		name: "Overqwil",
		value: "overqwil",
		icon: "overqwil"
	},
	{
		name: "Enamorus",
		value: "enamorus",
		icon: "enamorus"
	},
	{
		name: "Sprigatito",
		value: "sprigatito",
		icon: "sprigatito"
	},
	{
		name: "Floragato",
		value: "floragato",
		icon: "floragato"
	},
	{
		name: "Meowscarada",
		value: "meowscarada",
		icon: "meowscarada"
	},
	{
		name: "Fuecoco",
		value: "fuecoco",
		icon: "fuecoco"
	},
	{
		name: "Crocalor",
		value: "crocalor",
		icon: "crocalor"
	},
	{
		name: "Skeledirge",
		value: "skeledirge",
		icon: "skeledirge"
	},
	{
		name: "Quaxly",
		value: "quaxly",
		icon: "quaxly"
	},
	{
		name: "Quaxwell",
		value: "quaxwell",
		icon: "quaxwell"
	},
	{
		name: "Quaquaval",
		value: "quaquaval",
		icon: "quaquaval"
	},
	{
		name: "Lechonk",
		value: "lechonk",
		icon: "lechonk"
	},
	{
		name: "Oinkologne",
		value: "oinkologne",
		icon: "oinkologne"
	},
	{
		name: "Tarountula",
		value: "tarountula",
		icon: "tarountula"
	},
	{
		name: "Spidops",
		value: "spidops",
		icon: "spidops"
	},
	{
		name: "Nymble",
		value: "nymble",
		icon: "nymble"
	},
	{
		name: "Lokix",
		value: "lokix",
		icon: "lokix"
	},
	{
		name: "Pawmi",
		value: "pawmi",
		icon: "pawmi"
	},
	{
		name: "Pawmo",
		value: "pawmo",
		icon: "pawmo"
	},
	{
		name: "Pawmot",
		value: "pawmot",
		icon: "pawmot"
	},
	{
		name: "Tandemaus",
		value: "tandemaus",
		icon: "tandemaus"
	},
	{
		name: "Maushold",
		value: "maushold",
		icon: "maushold"
	},
	{
		name: "Fidough",
		value: "fidough",
		icon: "fidough"
	},
	{
		name: "Dachsbun",
		value: "dachsbun",
		icon: "dachsbun"
	},
	{
		name: "Smoliv",
		value: "smoliv",
		icon: "smoliv"
	},
	{
		name: "Dolliv",
		value: "dolliv",
		icon: "dolliv"
	},
	{
		name: "Arboliva",
		value: "arboliva",
		icon: "arboliva"
	},
	{
		name: "Squawkabilly",
		value: "squawkabilly",
		icon: "squawkabilly"
	},
	{
		name: "Nacli",
		value: "nacli",
		icon: "nacli"
	},
	{
		name: "Naclstack",
		value: "naclstack",
		icon: "naclstack"
	},
	{
		name: "Garganacl",
		value: "garganacl",
		icon: "garganacl"
	},
	{
		name: "Charcadet",
		value: "charcadet",
		icon: "charcadet"
	},
	{
		name: "Armarouge",
		value: "armarouge",
		icon: "armarouge"
	},
	{
		name: "Ceruledge",
		value: "ceruledge",
		icon: "ceruledge"
	},
	{
		name: "Tadbulb",
		value: "tadbulb",
		icon: "tadbulb"
	},
	{
		name: "Bellibolt",
		value: "bellibolt",
		icon: "bellibolt"
	},
	{
		name: "Wattrel",
		value: "wattrel",
		icon: "wattrel"
	},
	{
		name: "Kilowattrel",
		value: "kilowattrel",
		icon: "kilowattrel"
	},
	{
		name: "Maschiff",
		value: "maschiff",
		icon: "maschiff"
	},
	{
		name: "Mabosstiff",
		value: "mabosstiff",
		icon: "mabosstiff"
	},
	{
		name: "Shroodle",
		value: "shroodle",
		icon: "shroodle"
	},
	{
		name: "Grafaiai",
		value: "grafaiai",
		icon: "grafaiai"
	},
	{
		name: "Bramblin",
		value: "bramblin",
		icon: "bramblin"
	},
	{
		name: "Brambleghast",
		value: "brambleghast",
		icon: "brambleghast"
	},
	{
		name: "Toedscool",
		value: "toedscool",
		icon: "toedscool"
	},
	{
		name: "Toedscruel",
		value: "toedscruel",
		icon: "toedscruel"
	},
	{
		name: "Klawf",
		value: "klawf",
		icon: "klawf"
	},
	{
		name: "Capsakid",
		value: "capsakid",
		icon: "capsakid"
	},
	{
		name: "Scovillain",
		value: "scovillain",
		icon: "scovillain"
	},
	{
		name: "Rellor",
		value: "rellor",
		icon: "rellor"
	},
	{
		name: "Rabsca",
		value: "rabsca",
		icon: "rabsca"
	},
	{
		name: "Flittle",
		value: "flittle",
		icon: "flittle"
	},
	{
		name: "Espathra",
		value: "espathra",
		icon: "espathra"
	},
	{
		name: "Tinkatink",
		value: "tinkatink",
		icon: "tinkatink"
	},
	{
		name: "Tinkatuff",
		value: "tinkatuff",
		icon: "tinkatuff"
	},
	{
		name: "Tinkaton",
		value: "tinkaton",
		icon: "tinkaton"
	},
	{
		name: "Wiglett",
		value: "wiglett",
		icon: "wiglett"
	},
	{
		name: "Wugtrio",
		value: "wugtrio",
		icon: "wugtrio"
	},
	{
		name: "Bombirdier",
		value: "bombirdier",
		icon: "bombirdier"
	},
	{
		name: "Finizen",
		value: "finizen",
		icon: "finizen"
	},
	{
		name: "Palafin",
		value: "palafin",
		icon: "palafin"
	},
	{
		name: "Varoom",
		value: "varoom",
		icon: "varoom"
	},
	{
		name: "Revavroom",
		value: "revavroom",
		icon: "revavroom"
	},
	{
		name: "Cyclizar",
		value: "cyclizar",
		icon: "cyclizar"
	},
	{
		name: "Orthworm",
		value: "orthworm",
		icon: "orthworm"
	},
	{
		name: "Glimmet",
		value: "glimmet",
		icon: "glimmet"
	},
	{
		name: "Glimmora",
		value: "glimmora",
		icon: "glimmora"
	},
	{
		name: "Greavard",
		value: "greavard",
		icon: "greavard"
	},
	{
		name: "Houndstone",
		value: "houndstone",
		icon: "houndstone"
	},
	{
		name: "Flamigo",
		value: "flamigo",
		icon: "flamigo"
	},
	{
		name: "Cetoddle",
		value: "cetoddle",
		icon: "cetoddle"
	},
	{
		name: "Cetitan",
		value: "cetitan",
		icon: "cetitan"
	},
	{
		name: "Veluza",
		value: "veluza",
		icon: "veluza"
	},
	{
		name: "Dondozo",
		value: "dondozo",
		icon: "dondozo"
	},
	{
		name: "Tatsugiri",
		value: "tatsugiri",
		icon: "tatsugiri"
	},
	{
		name: "Annihilape",
		value: "annihilape",
		icon: "annihilape"
	},
	{
		name: "Clodsire",
		value: "clodsire",
		icon: "clodsire"
	},
	{
		name: "Farigiraf",
		value: "farigiraf",
		icon: "farigiraf"
	},
	{
		name: "Dudunsparce",
		value: "dudunsparce",
		icon: "dudunsparce"
	},
	{
		name: "Kingambit",
		value: "kingambit",
		icon: "kingambit"
	},
	{
		name: "Great Tusk",
		value: "greattusk",
		icon: "greattusk"
	},
	{
		name: "Scream Tail",
		value: "screamtail",
		icon: "screamtail"
	},
	{
		name: "Brute Bonnet",
		value: "brutebonnet",
		icon: "brutebonnet"
	},
	{
		name: "Flutter Mane",
		value: "fluttermane",
		icon: "fluttermane"
	},
	{
		name: "Slither Wing",
		value: "slitherwing",
		icon: "slitherwing"
	},
	{
		name: "Sandy Shocks",
		value: "sandyshocks",
		icon: "sandyshocks"
	},
	{
		name: "Iron Treads",
		value: "irontreads",
		icon: "irontreads"
	},
	{
		name: "Iron Bundle",
		value: "ironbundle",
		icon: "ironbundle"
	},
	{
		name: "Iron Hands",
		value: "ironhands",
		icon: "ironhands"
	},
	{
		name: "Iron Jugulis",
		value: "ironjugulis",
		icon: "ironjugulis"
	},
	{
		name: "Iron Moth",
		value: "ironmoth",
		icon: "ironmoth"
	},
	{
		name: "Iron Thorns",
		value: "ironthorns",
		icon: "ironthorns"
	},
	{
		name: "Frigibax",
		value: "frigibax",
		icon: "frigibax"
	},
	{
		name: "Arctibax",
		value: "arctibax",
		icon: "arctibax"
	},
	{
		name: "Baxcalibur",
		value: "baxcalibur",
		icon: "baxcalibur"
	},
	{
		name: "Gimmighoul",
		value: "gimmighoul",
		icon: "gimmighoul"
	},
	{
		name: "Gholdengo",
		value: "gholdengo",
		icon: "gholdengo"
	},
	{
		name: "Wo-Chien",
		value: "wo-chien",
		icon: "wo-chien"
	},
	{
		name: "Chien-Pao",
		value: "chien-pao",
		icon: "chien-pao"
	},
	{
		name: "Ting-Lu",
		value: "ting-lu",
		icon: "ting-lu"
	},
	{
		name: "Chi-Yu",
		value: "chi-yu",
		icon: "chi-yu"
	},
	{
		name: "Roaring Moon",
		value: "roaringmoon",
		icon: "roaringmoon"
	},
	{
		name: "Iron Valiant",
		value: "ironvaliant",
		icon: "ironvaliant"
	},
	{
		name: "Koraidon",
		value: "koraidon",
		icon: "koraidon"
	},
	{
		name: "Miraidon",
		value: "miraidon",
		icon: "miraidon"
	}
];