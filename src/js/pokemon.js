const pkmnData = [
	{
		name: "Bulbasaur",
		value: "bulbasaur",
		icon: "bulbasaur"
	},
	{
		name: "Ivysaur",
		value: "ivysaur",
		icon: "ivysaur"
	},
	{
		name: "Venusaur",
		value: "venusaur",
		icon: "venusaur"
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
		icon: "squirtle"
	},
	{
		name: "Wartortle",
		value: "wartortle",
		icon: "wartortle"
	},
	{
		name: "Blastoise",
		value: "blastoise",
		icon: "blastoise"
	},
	{
		name: "Caterpie",
		value: "caterpie",
		icon: "caterpie"
	},
	{
		name: "Metapod",
		value: "metapod",
		icon: "metapod"
	},
	{
		name: "Butterfree",
		value: "butterfree",
		icon: "butterfree"
	},
	{
		name: "Weedle",
		value: "weedle",
		icon: "weedle"
	},
	{
		name: "Kakuna",
		value: "kakuna",
		icon: "kakuna"
	},
	{
		name: "Beedrill",
		value: "beedrill",
		icon: "beedrill"
	},
	{
		name: "Pidgey",
		value: "pidgey",
		icon: "pidgey"
	},
	{
		name: "Pidgeotto",
		value: "pidgeotto",
		icon: "pidgeotto"
	},
	{
		name: "Pidgeot",
		value: "pidgeot",
		icon: "pidgeot"
	},
	{
		name: "Rattata",
		value: "rattata",
		icon: "rattata"
	},
	{
		name: "Raticate",
		value: "raticate",
		icon: "raticate"
	},
	{
		name: "Spearow",
		value: "spearow",
		icon: "spearow"
	},
	{
		name: "Fearow",
		value: "fearow",
		icon: "fearow"
	},
	{
		name: "Ekans",
		value: "ekans",
		icon: "ekans"
	},
	{
		name: "Arbok",
		value: "arbok",
		icon: "arbok"
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
		icon: "sandshrew"
	},
	{
		name: "Sandslash",
		value: "sandslash",
		icon: "sandslash"
	},
	{
		name: "Nidoran♀",
		value: "nidoran-f",
		icon: "nidoran-f"
	},
	{
		name: "Nidorina",
		value: "nidorina",
		icon: "nidorina"
	},
	{
		name: "Nidoqueen",
		value: "nidoqueen",
		icon: "nidoqueen"
	},
	{
		name: "Nidoran♂",
		value: "nidoran-m",
		icon: "nidoran-m"
	},
	{
		name: "Nidorino",
		value: "nidorino",
		icon: "nidorino"
	},
	{
		name: "Nidoking",
		value: "nidoking",
		icon: "nidoking"
	},
	{
		name: "Clefairy",
		value: "clefairy",
		icon: "clefairy"
	},
	{
		name: "Clefable",
		value: "clefable",
		icon: "clefable"
	},
	{
		name: "Vulpix",
		value: "vulpix",
		icon: "vulpix"
	},
	{
		name: "Ninetales",
		value: "ninetales",
		icon: "ninetales"
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
		icon: "zubat"
	},
	{
		name: "Golbat",
		value: "golbat",
		icon: "golbat"
	},
	{
		name: "Oddish",
		value: "oddish",
		icon: "oddish"
	},
	{
		name: "Gloom",
		value: "gloom",
		icon: "gloom"
	},
	{
		name: "Vileplume",
		value: "vileplume",
		icon: "vileplume"
	},
	{
		name: "Paras",
		value: "paras",
		icon: "paras"
	},
	{
		name: "Parasect",
		value: "parasect",
		icon: "parasect"
	},
	{
		name: "Venonat",
		value: "venonat",
		icon: "venonat"
	},
	{
		name: "Venomoth",
		value: "venomoth",
		icon: "venomoth"
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
		icon: "mankey"
	},
	{
		name: "Primeape",
		value: "primeape",
		icon: "primeape"
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
		icon: "poliwag"
	},
	{
		name: "Poliwhirl",
		value: "poliwhirl",
		icon: "poliwhirl"
	},
	{
		name: "Poliwrath",
		value: "poliwrath",
		icon: "poliwrath"
	},
	{
		name: "Abra",
		value: "abra",
		icon: "abra"
	},
	{
		name: "Kadabra",
		value: "kadabra",
		icon: "kadabra"
	},
	{
		name: "Alakazam",
		value: "alakazam",
		icon: "alakazam"
	},
	{
		name: "Machop",
		value: "machop",
		icon: "machop"
	},
	{
		name: "Machoke",
		value: "machoke",
		icon: "machoke"
	},
	{
		name: "Machamp",
		value: "machamp",
		icon: "machamp"
	},
	{
		name: "Bellsprout",
		value: "bellsprout",
		icon: "bellsprout"
	},
	{
		name: "Weepinbell",
		value: "weepinbell",
		icon: "weepinbell"
	},
	{
		name: "Victreebel",
		value: "victreebel",
		icon: "victreebel"
	},
	{
		name: "Tentacool",
		value: "tentacool",
		icon: "tentacool"
	},
	{
		name: "Tentacruel",
		value: "tentacruel",
		icon: "tentacruel"
	},
	{
		name: "Geodude",
		value: "geodude",
		icon: "geodude"
	},
	{
		name: "Graveler",
		value: "graveler",
		icon: "graveler"
	},
	{
		name: "Golem",
		value: "golem",
		icon: "golem"
	},
	{
		name: "Ponyta",
		value: "ponyta",
		icon: "ponyta"
	},
	{
		name: "Rapidash",
		value: "rapidash",
		icon: "rapidash"
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
		icon: "farfetchd"
	},
	{
		name: "Doduo",
		value: "doduo",
		icon: "doduo"
	},
	{
		name: "Dodrio",
		value: "dodrio",
		icon: "dodrio"
	},
	{
		name: "Seel",
		value: "seel",
		icon: "seel"
	},
	{
		name: "Dewgong",
		value: "dewgong",
		icon: "dewgong"
	},
	{
		name: "Grimer",
		value: "grimer",
		icon: "grimer"
	},
	{
		name: "Muk",
		value: "muk",
		icon: "muk"
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
		icon: "onix"
	},
	{
		name: "Drowzee",
		value: "drowzee",
		icon: "drowzee"
	},
	{
		name: "Hypno",
		value: "hypno",
		icon: "hypno"
	},
	{
		name: "Krabby",
		value: "krabby",
		icon: "krabby"
	},
	{
		name: "Kingler",
		value: "kingler",
		icon: "kingler"
	},
	{
		name: "Voltorb",
		value: "voltorb",
		icon: "voltorb"
	},
	{
		name: "Electrode",
		value: "electrode",
		icon: "electrode"
	},
	{
		name: "Exeggcute",
		value: "exeggcute",
		icon: "exeggcute"
	},
	{
		name: "Exeggutor",
		value: "exeggutor",
		icon: "exeggutor"
	},
	{
		name: "Cubone",
		value: "cubone",
		icon: "cubone"
	},
	{
		name: "Marowak",
		value: "marowak",
		icon: "marowak"
	},
	{
		name: "Hitmonlee",
		value: "hitmonlee",
		icon: "hitmonlee"
	},
	{
		name: "Hitmonchan",
		value: "hitmonchan",
		icon: "hitmonchan"
	},
	{
		name: "Lickitung",
		value: "lickitung",
		icon: "lickitung"
	},
	{
		name: "Koffing",
		value: "koffing",
		icon: "koffing"
	},
	{
		name: "Weezing",
		value: "weezing",
		icon: "weezing"
	},
	{
		name: "Rhyhorn",
		value: "rhyhorn",
		icon: "rhyhorn"
	},
	{
		name: "Rhydon",
		value: "rhydon",
		icon: "rhydon"
	},
	{
		name: "Chansey",
		value: "chansey",
		icon: "chansey"
	},
	{
		name: "Tangela",
		value: "tangela",
		icon: "tangela"
	},
	{
		name: "Kangaskhan",
		value: "kangaskhan",
		icon: "kangaskhan"
	},
	{
		name: "Horsea",
		value: "horsea",
		icon: "horsea"
	},
	{
		name: "Seadra",
		value: "seadra",
		icon: "seadra"
	},
	{
		name: "Goldeen",
		value: "goldeen",
		icon: "goldeen"
	},
	{
		name: "Seaking",
		value: "seaking",
		icon: "seaking"
	},
	{
		name: "Staryu",
		value: "staryu",
		icon: "staryu"
	},
	{
		name: "Starmie",
		value: "starmie",
		icon: "starmie"
	},
	{
		name: "Mr. Mime",
		value: "mr-mime",
		icon: "mr-mime"
	},
	{
		name: "Scyther",
		value: "scyther",
		icon: "scyther"
	},
	{
		name: "Jynx",
		value: "jynx",
		icon: "jynx"
	},
	{
		name: "Electabuzz",
		value: "electabuzz",
		icon: "electabuzz"
	},
	{
		name: "Magmar",
		value: "magmar",
		icon: "magmar"
	},
	{
		name: "Pinsir",
		value: "pinsir",
		icon: "pinsir"
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
		icon: "lapras"
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
		icon: "porygon"
	},
	{
		name: "Omanyte",
		value: "omanyte",
		icon: "omanyte"
	},
	{
		name: "Omastar",
		value: "omastar",
		icon: "omastar"
	},
	{
		name: "Kabuto",
		value: "kabuto",
		icon: "kabuto"
	},
	{
		name: "Kabutops",
		value: "kabutops",
		icon: "kabutops"
	},
	{
		name: "Aerodactyl",
		value: "aerodactyl",
		icon: "aerodactyl"
	},
	{
		name: "Snorlax",
		value: "snorlax",
		icon: "snorlax"
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
		icon: "chikorita"
	},
	{
		name: "Bayleef",
		value: "bayleef",
		icon: "bayleef"
	},
	{
		name: "Meganium",
		value: "meganium",
		icon: "meganium"
	},
	{
		name: "Cyndaquil",
		value: "cyndaquil",
		icon: "cyndaquil"
	},
	{
		name: "Quilava",
		value: "quilava",
		icon: "quilava"
	},
	{
		name: "Typhlosion",
		value: "typhlosion",
		icon: "typhlosion"
	},
	{
		name: "Totodile",
		value: "totodile",
		icon: "totodile"
	},
	{
		name: "Croconaw",
		value: "croconaw",
		icon: "croconaw"
	},
	{
		name: "Feraligatr",
		value: "feraligatr",
		icon: "feraligatr"
	},
	{
		name: "Sentret",
		value: "sentret",
		icon: "sentret"
	},
	{
		name: "Furret",
		value: "furret",
		icon: "furret"
	},
	{
		name: "Hoothoot",
		value: "hoothoot",
		icon: "hoothoot"
	},
	{
		name: "Noctowl",
		value: "noctowl",
		icon: "noctowl"
	},
	{
		name: "Ledyba",
		value: "ledyba",
		icon: "ledyba"
	},
	{
		name: "Ledian",
		value: "ledian",
		icon: "ledian"
	},
	{
		name: "Spinarak",
		value: "spinarak",
		icon: "spinarak"
	},
	{
		name: "Ariados",
		value: "ariados",
		icon: "ariados"
	},
	{
		name: "Crobat",
		value: "crobat",
		icon: "crobat"
	},
	{
		name: "Chinchou",
		value: "chinchou",
		icon: "chinchou"
	},
	{
		name: "Lanturn",
		value: "lanturn",
		icon: "lanturn"
	},
	{
		name: "Pichu",
		value: "pichu",
		icon: "pichu"
	},
	{
		name: "Cleffa",
		value: "cleffa",
		icon: "cleffa"
	},
	{
		name: "Igglybuff",
		value: "igglybuff",
		icon: "igglybuff"
	},
	{
		name: "Togepi",
		value: "togepi",
		icon: "togepi"
	},
	{
		name: "Togetic",
		value: "togetic",
		icon: "togetic"
	},
	{
		name: "Natu",
		value: "natu",
		icon: "natu"
	},
	{
		name: "Xatu",
		value: "xatu",
		icon: "xatu"
	},
	{
		name: "Mareep",
		value: "mareep",
		icon: "mareep"
	},
	{
		name: "Flaaffy",
		value: "flaaffy",
		icon: "flaaffy"
	},
	{
		name: "Ampharos",
		value: "ampharos",
		icon: "ampharos"
	},
	{
		name: "Bellossom",
		value: "bellossom",
		icon: "bellossom"
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
		icon: "politoed"
	},
	{
		name: "Hoppip",
		value: "hoppip",
		icon: "hoppip"
	},
	{
		name: "Skiploom",
		value: "skiploom",
		icon: "skiploom"
	},
	{
		name: "Jumpluff",
		value: "jumpluff",
		icon: "jumpluff"
	},
	{
		name: "Aipom",
		value: "aipom",
		icon: "aipom"
	},
	{
		name: "Sunkern",
		value: "sunkern",
		icon: "sunkern"
	},
	{
		name: "Sunflora",
		value: "sunflora",
		icon: "sunflora"
	},
	{
		name: "Yanma",
		value: "yanma",
		icon: "yanma"
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
		icon: "murkrow"
	},
	{
		name: "Slowking",
		value: "slowking",
		icon: "slowking"
	},
	{
		name: "Misdreavus",
		value: "misdreavus",
		icon: "misdreavus"
	},
	{
		name: "Unown",
		value: "unown",
		icon: "unown"
	},
	{
		name: "Wobbuffet",
		value: "wobbuffet",
		icon: "wobbuffet"
	},
	{
		name: "Girafarig",
		value: "girafarig",
		icon: "girafarig"
	},
	{
		name: "Pineco",
		value: "pineco",
		icon: "pineco"
	},
	{
		name: "Forretress",
		value: "forretress",
		icon: "forretress"
	},
	{
		name: "Dunsparce",
		value: "dunsparce",
		icon: "dunsparce"
	},
	{
		name: "Gligar",
		value: "gligar",
		icon: "gligar"
	},
	{
		name: "Steelix",
		value: "steelix",
		icon: "steelix"
	},
	{
		name: "Snubbull",
		value: "snubbull",
		icon: "snubbull"
	},
	{
		name: "Granbull",
		value: "granbull",
		icon: "granbull"
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
		icon: "shuckle"
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
		icon: "teddiursa"
	},
	{
		name: "Ursaring",
		value: "ursaring",
		icon: "ursaring"
	},
	{
		name: "Slugma",
		value: "slugma",
		icon: "slugma"
	},
	{
		name: "Magcargo",
		value: "magcargo",
		icon: "magcargo"
	},
	{
		name: "Swinub",
		value: "swinub",
		icon: "swinub"
	},
	{
		name: "Piloswine",
		value: "piloswine",
		icon: "piloswine"
	},
	{
		name: "Corsola",
		value: "corsola",
		icon: "corsola"
	},
	{
		name: "Remoraid",
		value: "remoraid",
		icon: "remoraid"
	},
	{
		name: "Octillery",
		value: "octillery",
		icon: "octillery"
	},
	{
		name: "Delibird",
		value: "delibird",
		icon: "delibird"
	},
	{
		name: "Mantine",
		value: "mantine",
		icon: "mantine"
	},
	{
		name: "Skarmory",
		value: "skarmory",
		icon: "skarmory"
	},
	{
		name: "Houndour",
		value: "houndour",
		icon: "houndour"
	},
	{
		name: "Houndoom",
		value: "houndoom",
		icon: "houndoom"
	},
	{
		name: "Kingdra",
		value: "kingdra",
		icon: "kingdra"
	},
	{
		name: "Phanpy",
		value: "phanpy",
		icon: "phanpy"
	},
	{
		name: "Donphan",
		value: "donphan",
		icon: "donphan"
	},
	{
		name: "Porygon2",
		value: "porygon2",
		icon: "porygon2"
	},
	{
		name: "Stantler",
		value: "stantler",
		icon: "stantler"
	},
	{
		name: "Smeargle",
		value: "smeargle",
		icon: "smeargle"
	},
	{
		name: "Tyrogue",
		value: "tyrogue",
		icon: "tyrogue"
	},
	{
		name: "Hitmontop",
		value: "hitmontop",
		icon: "hitmontop"
	},
	{
		name: "Smoochum",
		value: "smoochum",
		icon: "smoochum"
	},
	{
		name: "Elekid",
		value: "elekid",
		icon: "elekid"
	},
	{
		name: "Magby",
		value: "magby",
		icon: "magby"
	},
	{
		name: "Miltank",
		value: "miltank",
		icon: "miltank"
	},
	{
		name: "Blissey",
		value: "blissey",
		icon: "blissey"
	},
	{
		name: "Raikou",
		value: "raikou",
		icon: "raikou"
	},
	{
		name: "Entei",
		value: "entei",
		icon: "entei"
	},
	{
		name: "Suicune",
		value: "suicune",
		icon: "suicune"
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
		icon: "lugia"
	},
	{
		name: "Ho-Oh",
		value: "ho-oh",
		icon: "ho-oh"
	},
	{
		name: "Celebi",
		value: "celebi",
		icon: "celebi"
	},
	{
		name: "Treecko",
		value: "treecko",
		icon: "treecko"
	},
	{
		name: "Grovyle",
		value: "grovyle",
		icon: "grovyle"
	},
	{
		name: "Sceptile",
		value: "sceptile",
		icon: "sceptile"
	},
	{
		name: "Torchic",
		value: "torchic",
		icon: "torchic"
	},
	{
		name: "Combusken",
		value: "combusken",
		icon: "combusken"
	},
	{
		name: "Blaziken",
		value: "blaziken",
		icon: "blaziken"
	},
	{
		name: "Mudkip",
		value: "mudkip",
		icon: "mudkip"
	},
	{
		name: "Marshtomp",
		value: "marshtomp",
		icon: "marshtomp"
	},
	{
		name: "Swampert",
		value: "swampert",
		icon: "swampert"
	},
	{
		name: "Poochyena",
		value: "poochyena",
		icon: "poochyena"
	},
	{
		name: "Mightyena",
		value: "mightyena",
		icon: "mightyena"
	},
	{
		name: "Zigzagoon",
		value: "zigzagoon",
		icon: "zigzagoon"
	},
	{
		name: "Linoone",
		value: "linoone",
		icon: "linoone"
	},
	{
		name: "Wurmple",
		value: "wurmple",
		icon: "wurmple"
	},
	{
		name: "Silcoon",
		value: "silcoon",
		icon: "silcoon"
	},
	{
		name: "Beautifly",
		value: "beautifly",
		icon: "beautifly"
	},
	{
		name: "Cascoon",
		value: "cascoon",
		icon: "cascoon"
	},
	{
		name: "Dustox",
		value: "dustox",
		icon: "dustox"
	},
	{
		name: "Lotad",
		value: "lotad",
		icon: "lotad"
	},
	{
		name: "Lombre",
		value: "lombre",
		icon: "lombre"
	},
	{
		name: "Ludicolo",
		value: "ludicolo",
		icon: "ludicolo"
	},
	{
		name: "Seedot",
		value: "seedot",
		icon: "seedot"
	},
	{
		name: "Nuzleaf",
		value: "nuzleaf",
		icon: "nuzleaf"
	},
	{
		name: "Shiftry",
		value: "shiftry",
		icon: "shiftry"
	},
	{
		name: "Taillow",
		value: "taillow",
		icon: "taillow"
	},
	{
		name: "Swellow",
		value: "swellow",
		icon: "swellow"
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
		icon: "surskit"
	},
	{
		name: "Masquerain",
		value: "masquerain",
		icon: "masquerain"
	},
	{
		name: "Shroomish",
		value: "shroomish",
		icon: "shroomish"
	},
	{
		name: "Breloom",
		value: "breloom",
		icon: "breloom"
	},
	{
		name: "Slakoth",
		value: "slakoth",
		icon: "slakoth"
	},
	{
		name: "Vigoroth",
		value: "vigoroth",
		icon: "vigoroth"
	},
	{
		name: "Slaking",
		value: "slaking",
		icon: "slaking"
	},
	{
		name: "Nincada",
		value: "nincada",
		icon: "nincada"
	},
	{
		name: "Ninjask",
		value: "ninjask",
		icon: "ninjask"
	},
	{
		name: "Shedinja",
		value: "shedinja",
		icon: "shedinja"
	},
	{
		name: "Whismur",
		value: "whismur",
		icon: "whismur"
	},
	{
		name: "Loudred",
		value: "loudred",
		icon: "loudred"
	},
	{
		name: "Exploud",
		value: "exploud",
		icon: "exploud"
	},
	{
		name: "Makuhita",
		value: "makuhita",
		icon: "makuhita"
	},
	{
		name: "Hariyama",
		value: "hariyama",
		icon: "hariyama"
	},
	{
		name: "Azurill",
		value: "azurill",
		icon: "azurill"
	},
	{
		name: "Nosepass",
		value: "nosepass",
		icon: "nosepass"
	},
	{
		name: "Skitty",
		value: "skitty",
		icon: "skitty"
	},
	{
		name: "Delcatty",
		value: "delcatty",
		icon: "delcatty"
	},
	{
		name: "Sableye",
		value: "sableye",
		icon: "sableye"
	},
	{
		name: "Mawile",
		value: "mawile",
		icon: "mawile"
	},
	{
		name: "Aron",
		value: "aron",
		icon: "aron"
	},
	{
		name: "Lairon",
		value: "lairon",
		icon: "lairon"
	},
	{
		name: "Aggron",
		value: "aggron",
		icon: "aggron"
	},
	{
		name: "Meditite",
		value: "meditite",
		icon: "meditite"
	},
	{
		name: "Medicham",
		value: "medicham",
		icon: "medicham"
	},
	{
		name: "Electrike",
		value: "electrike",
		icon: "electrike"
	},
	{
		name: "Manectric",
		value: "manectric",
		icon: "manectric"
	},
	{
		name: "Plusle",
		value: "plusle",
		icon: "plusle"
	},
	{
		name: "Minun",
		value: "minun",
		icon: "minun"
	},
	{
		name: "Volbeat",
		value: "volbeat",
		icon: "volbeat"
	},
	{
		name: "Illumise",
		value: "illumise",
		icon: "illumise"
	},
	{
		name: "Roselia",
		value: "roselia",
		icon: "roselia"
	},
	{
		name: "Gulpin",
		value: "gulpin",
		icon: "gulpin"
	},
	{
		name: "Swalot",
		value: "swalot",
		icon: "swalot"
	},
	{
		name: "Carvanha",
		value: "carvanha",
		icon: "carvanha"
	},
	{
		name: "Sharpedo",
		value: "sharpedo",
		icon: "sharpedo"
	},
	{
		name: "Wailmer",
		value: "wailmer",
		icon: "wailmer"
	},
	{
		name: "Wailord",
		value: "wailord",
		icon: "wailord"
	},
	{
		name: "Numel",
		value: "numel",
		icon: "numel"
	},
	{
		name: "Camerupt",
		value: "camerupt",
		icon: "camerupt"
	},
	{
		name: "Torkoal",
		value: "torkoal",
		icon: "torkoal"
	},
	{
		name: "Spoink",
		value: "spoink",
		icon: "spoink"
	},
	{
		name: "Grumpig",
		value: "grumpig",
		icon: "grumpig"
	},
	{
		name: "Spinda",
		value: "spinda",
		icon: "spinda"
	},
	{
		name: "Trapinch",
		value: "trapinch",
		icon: "trapinch"
	},
	{
		name: "Vibrava",
		value: "vibrava",
		icon: "vibrava"
	},
	{
		name: "Flygon",
		value: "flygon",
		icon: "flygon"
	},
	{
		name: "Cacnea",
		value: "cacnea",
		icon: "cacnea"
	},
	{
		name: "Cacturne",
		value: "cacturne",
		icon: "cacturne"
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
		icon: "zangoose"
	},
	{
		name: "Seviper",
		value: "seviper",
		icon: "seviper"
	},
	{
		name: "Lunatone",
		value: "lunatone",
		icon: "lunatone"
	},
	{
		name: "Solrock",
		value: "solrock",
		icon: "solrock"
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
		icon: "corphish"
	},
	{
		name: "Crawdaunt",
		value: "crawdaunt",
		icon: "crawdaunt"
	},
	{
		name: "Baltoy",
		value: "baltoy",
		icon: "baltoy"
	},
	{
		name: "Claydol",
		value: "claydol",
		icon: "claydol"
	},
	{
		name: "Lileep",
		value: "lileep",
		icon: "lileep"
	},
	{
		name: "Cradily",
		value: "cradily",
		icon: "cradily"
	},
	{
		name: "Anorith",
		value: "anorith",
		icon: "anorith"
	},
	{
		name: "Armaldo",
		value: "armaldo",
		icon: "armaldo"
	},
	{
		name: "Feebas",
		value: "feebas",
		icon: "feebas"
	},
	{
		name: "Milotic",
		value: "milotic",
		icon: "milotic"
	},
	{
		name: "Castform",
		value: "castform",
		icon: "castform"
	},
	{
		name: "Kecleon",
		value: "kecleon",
		icon: "kecleon"
	},
	{
		name: "Shuppet",
		value: "shuppet",
		icon: "shuppet"
	},
	{
		name: "Banette",
		value: "banette",
		icon: "banette"
	},
	{
		name: "Duskull",
		value: "duskull",
		icon: "duskull"
	},
	{
		name: "Dusclops",
		value: "dusclops",
		icon: "dusclops"
	},
	{
		name: "Tropius",
		value: "tropius",
		icon: "tropius"
	},
	{
		name: "Chimecho",
		value: "chimecho",
		icon: "chimecho"
	},
	{
		name: "Absol",
		value: "absol",
		icon: "absol"
	},
	{
		name: "Wynaut",
		value: "wynaut",
		icon: "wynaut"
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
		icon: "spheal"
	},
	{
		name: "Sealeo",
		value: "sealeo",
		icon: "sealeo"
	},
	{
		name: "Walrein",
		value: "walrein",
		icon: "walrein"
	},
	{
		name: "Clamperl",
		value: "clamperl",
		icon: "clamperl"
	},
	{
		name: "Huntail",
		value: "huntail",
		icon: "huntail"
	},
	{
		name: "Gorebyss",
		value: "gorebyss",
		icon: "gorebyss"
	},
	{
		name: "Relicanth",
		value: "relicanth",
		icon: "relicanth"
	},
	{
		name: "Luvdisc",
		value: "luvdisc",
		icon: "luvdisc"
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
		icon: "beldum"
	},
	{
		name: "Metang",
		value: "metang",
		icon: "metang"
	},
	{
		name: "Metagross",
		value: "metagross",
		icon: "metagross"
	},
	{
		name: "Regirock",
		value: "regirock",
		icon: "regirock"
	},
	{
		name: "Regice",
		value: "regice",
		icon: "regice"
	},
	{
		name: "Registeel",
		value: "registeel",
		icon: "registeel"
	},
	{
		name: "Latias",
		value: "latias",
		icon: "latias"
	},
	{
		name: "Latios",
		value: "latios",
		icon: "latios"
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
		icon: "jirachi"
	},
	{
		name: "Deoxys",
		value: "deoxys",
		icon: "deoxys"
	},
	{
		name: "Turtwig",
		value: "turtwig",
		icon: "turtwig"
	},
	{
		name: "Grotle",
		value: "grotle",
		icon: "grotle"
	},
	{
		name: "Torterra",
		value: "torterra",
		icon: "torterra"
	},
	{
		name: "Chimchar",
		value: "chimchar",
		icon: "chimchar"
	},
	{
		name: "Monferno",
		value: "monferno",
		icon: "monferno"
	},
	{
		name: "Infernape",
		value: "infernape",
		icon: "infernape"
	},
	{
		name: "Piplup",
		value: "piplup",
		icon: "piplup"
	},
	{
		name: "Prinplup",
		value: "prinplup",
		icon: "prinplup"
	},
	{
		name: "Empoleon",
		value: "empoleon",
		icon: "empoleon"
	},
	{
		name: "Starly",
		value: "starly",
		icon: "starly"
	},
	{
		name: "Staravia",
		value: "staravia",
		icon: "staravia"
	},
	{
		name: "Staraptor",
		value: "staraptor",
		icon: "staraptor"
	},
	{
		name: "Bidoof",
		value: "bidoof",
		icon: "bidoof"
	},
	{
		name: "Bibarel",
		value: "bibarel",
		icon: "bibarel"
	},
	{
		name: "Kricketot",
		value: "kricketot",
		icon: "kricketot"
	},
	{
		name: "Kricketune",
		value: "kricketune",
		icon: "kricketune"
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
		icon: "budew"
	},
	{
		name: "Roserade",
		value: "roserade",
		icon: "roserade"
	},
	{
		name: "Cranidos",
		value: "cranidos",
		icon: "cranidos"
	},
	{
		name: "Rampardos",
		value: "rampardos",
		icon: "rampardos"
	},
	{
		name: "Shieldon",
		value: "shieldon",
		icon: "shieldon"
	},
	{
		name: "Bastiodon",
		value: "bastiodon",
		icon: "bastiodon"
	},
	{
		name: "Burmy",
		value: "burmy",
		icon: "burmy"
	},
	{
		name: "Wormadam",
		value: "wormadam",
		icon: "wormadam"
	},
	{
		name: "Mothim",
		value: "mothim",
		icon: "mothim"
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
		icon: "pachirisu"
	},
	{
		name: "Buizel",
		value: "buizel",
		icon: "buizel"
	},
	{
		name: "Floatzel",
		value: "floatzel",
		icon: "floatzel"
	},
	{
		name: "Cherubi",
		value: "cherubi",
		icon: "cherubi"
	},
	{
		name: "Cherrim",
		value: "cherrim",
		icon: "cherrim"
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
		icon: "ambipom"
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
		icon: "buneary"
	},
	{
		name: "Lopunny",
		value: "lopunny",
		icon: "lopunny"
	},
	{
		name: "Mismagius",
		value: "mismagius",
		icon: "mismagius"
	},
	{
		name: "Honchkrow",
		value: "honchkrow",
		icon: "honchkrow"
	},
	{
		name: "Glameow",
		value: "glameow",
		icon: "glameow"
	},
	{
		name: "Purugly",
		value: "purugly",
		icon: "purugly"
	},
	{
		name: "Chingling",
		value: "chingling",
		icon: "chingling"
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
		icon: "mime-jr"
	},
	{
		name: "Happiny",
		value: "happiny",
		icon: "happiny"
	},
	{
		name: "Chatot",
		value: "chatot",
		icon: "chatot"
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
		icon: "munchlax"
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
		icon: "skorupi"
	},
	{
		name: "Drapion",
		value: "drapion",
		icon: "drapion"
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
		icon: "carnivine"
	},
	{
		name: "Finneon",
		value: "finneon",
		icon: "finneon"
	},
	{
		name: "Lumineon",
		value: "lumineon",
		icon: "lumineon"
	},
	{
		name: "Mantyke",
		value: "mantyke",
		icon: "mantyke"
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
		icon: "lickilicky"
	},
	{
		name: "Rhyperior",
		value: "rhyperior",
		icon: "rhyperior"
	},
	{
		name: "Tangrowth",
		value: "tangrowth",
		icon: "tangrowth"
	},
	{
		name: "Electivire",
		value: "electivire",
		icon: "electivire"
	},
	{
		name: "Magmortar",
		value: "magmortar",
		icon: "magmortar"
	},
	{
		name: "Togekiss",
		value: "togekiss",
		icon: "togekiss"
	},
	{
		name: "Yanmega",
		value: "yanmega",
		icon: "yanmega"
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
		icon: "gliscor"
	},
	{
		name: "Mamoswine",
		value: "mamoswine",
		icon: "mamoswine"
	},
	{
		name: "Porygon-Z",
		value: "porygon-z",
		icon: "porygon-z"
	},
	{
		name: "Gallade",
		value: "gallade",
		icon: "gallade"
	},
	{
		name: "Probopass",
		value: "probopass",
		icon: "probopass"
	},
	{
		name: "Dusknoir",
		value: "dusknoir",
		icon: "dusknoir"
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
		icon: "regigigas"
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
		icon: "phione"
	},
	{
		name: "Manaphy",
		value: "manaphy",
		icon: "manaphy"
	},
	{
		name: "Darkrai",
		value: "darkrai",
		icon: "darkrai"
	},
	{
		name: "Shaymin",
		value: "shaymin",
		icon: "shaymin"
	},
	{
		name: "Arceus",
		value: "arceus",
		icon: "arceus"
	},
	{
		name: "Victini",
		value: "victini",
		icon: "victini"
	},
	{
		name: "Snivy",
		value: "snivy",
		icon: "snivy"
	},
	{
		name: "Servine",
		value: "servine",
		icon: "servine"
	},
	{
		name: "Serperior",
		value: "serperior",
		icon: "serperior"
	},
	{
		name: "Tepig",
		value: "tepig",
		icon: "tepig"
	},
	{
		name: "Pignite",
		value: "pignite",
		icon: "pignite"
	},
	{
		name: "Emboar",
		value: "emboar",
		icon: "emboar"
	},
	{
		name: "Oshawott",
		value: "oshawott",
		icon: "oshawott"
	},
	{
		name: "Dewott",
		value: "dewott",
		icon: "dewott"
	},
	{
		name: "Samurott",
		value: "samurott",
		icon: "samurott"
	},
	{
		name: "Patrat",
		value: "patrat",
		icon: "patrat"
	},
	{
		name: "Watchog",
		value: "watchog",
		icon: "watchog"
	},
	{
		name: "Lillipup",
		value: "lillipup",
		icon: "lillipup"
	},
	{
		name: "Herdier",
		value: "herdier",
		icon: "herdier"
	},
	{
		name: "Stoutland",
		value: "stoutland",
		icon: "stoutland"
	},
	{
		name: "Purrloin",
		value: "purrloin",
		icon: "purrloin"
	},
	{
		name: "Liepard",
		value: "liepard",
		icon: "liepard"
	},
	{
		name: "Pansage",
		value: "pansage",
		icon: "pansage"
	},
	{
		name: "Simisage",
		value: "simisage",
		icon: "simisage"
	},
	{
		name: "Pansear",
		value: "pansear",
		icon: "pansear"
	},
	{
		name: "Simisear",
		value: "simisear",
		icon: "simisear"
	},
	{
		name: "Panpour",
		value: "panpour",
		icon: "panpour"
	},
	{
		name: "Simipour",
		value: "simipour",
		icon: "simipour"
	},
	{
		name: "Munna",
		value: "munna",
		icon: "munna"
	},
	{
		name: "Musharna",
		value: "musharna",
		icon: "musharna"
	},
	{
		name: "Pidove",
		value: "pidove",
		icon: "pidove"
	},
	{
		name: "Tranquill",
		value: "tranquill",
		icon: "tranquill"
	},
	{
		name: "Unfezant",
		value: "unfezant",
		icon: "unfezant"
	},
	{
		name: "Blitzle",
		value: "blitzle",
		icon: "blitzle"
	},
	{
		name: "Zebstrika",
		value: "zebstrika",
		icon: "zebstrika"
	},
	{
		name: "Roggenrola",
		value: "roggenrola",
		icon: "roggenrola"
	},
	{
		name: "Boldore",
		value: "boldore",
		icon: "boldore"
	},
	{
		name: "Gigalith",
		value: "gigalith",
		icon: "gigalith"
	},
	{
		name: "Woobat",
		value: "woobat",
		icon: "woobat"
	},
	{
		name: "Swoobat",
		value: "swoobat",
		icon: "swoobat"
	},
	{
		name: "Drilbur",
		value: "drilbur",
		icon: "drilbur"
	},
	{
		name: "Excadrill",
		value: "excadrill",
		icon: "excadrill"
	},
	{
		name: "Audino",
		value: "audino",
		icon: "audino"
	},
	{
		name: "Timburr",
		value: "timburr",
		icon: "timburr"
	},
	{
		name: "Gurdurr",
		value: "gurdurr",
		icon: "gurdurr"
	},
	{
		name: "Conkeldurr",
		value: "conkeldurr",
		icon: "conkeldurr"
	},
	{
		name: "Tympole",
		value: "tympole",
		icon: "tympole"
	},
	{
		name: "Palpitoad",
		value: "palpitoad",
		icon: "palpitoad"
	},
	{
		name: "Seismitoad",
		value: "seismitoad",
		icon: "seismitoad"
	},
	{
		name: "Throh",
		value: "throh",
		icon: "throh"
	},
	{
		name: "Sawk",
		value: "sawk",
		icon: "sawk"
	},
	{
		name: "Sewaddle",
		value: "sewaddle",
		icon: "sewaddle"
	},
	{
		name: "Swadloon",
		value: "swadloon",
		icon: "swadloon"
	},
	{
		name: "Leavanny",
		value: "leavanny",
		icon: "leavanny"
	},
	{
		name: "Venipede",
		value: "venipede",
		icon: "venipede"
	},
	{
		name: "Whirlipede",
		value: "whirlipede",
		icon: "whirlipede"
	},
	{
		name: "Scolipede",
		value: "scolipede",
		icon: "scolipede"
	},
	{
		name: "Cottonee",
		value: "cottonee",
		icon: "cottonee"
	},
	{
		name: "Whimsicott",
		value: "whimsicott",
		icon: "whimsicott"
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
		icon: "darumaka"
	},
	{
		name: "Darmanitan",
		value: "darmanitan",
		icon: "darmanitan"
	},
	{
		name: "Maractus",
		value: "maractus",
		icon: "maractus"
	},
	{
		name: "Dwebble",
		value: "dwebble",
		icon: "dwebble"
	},
	{
		name: "Crustle",
		value: "crustle",
		icon: "crustle"
	},
	{
		name: "Scraggy",
		value: "scraggy",
		icon: "scraggy"
	},
	{
		name: "Scrafty",
		value: "scrafty",
		icon: "scrafty"
	},
	{
		name: "Sigilyph",
		value: "sigilyph",
		icon: "sigilyph"
	},
	{
		name: "Yamask",
		value: "yamask",
		icon: "yamask"
	},
	{
		name: "Cofagrigus",
		value: "cofagrigus",
		icon: "cofagrigus"
	},
	{
		name: "Tirtouga",
		value: "tirtouga",
		icon: "tirtouga"
	},
	{
		name: "Carracosta",
		value: "carracosta",
		icon: "carracosta"
	},
	{
		name: "Archen",
		value: "archen",
		icon: "archen"
	},
	{
		name: "Archeops",
		value: "archeops",
		icon: "archeops"
	},
	{
		name: "Trubbish",
		value: "trubbish",
		icon: "trubbish"
	},
	{
		name: "Garbodor",
		value: "garbodor",
		icon: "garbodor"
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
		icon: "minccino"
	},
	{
		name: "Cinccino",
		value: "cinccino",
		icon: "cinccino"
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
		icon: "solosis"
	},
	{
		name: "Duosion",
		value: "duosion",
		icon: "duosion"
	},
	{
		name: "Reuniclus",
		value: "reuniclus",
		icon: "reuniclus"
	},
	{
		name: "Ducklett",
		value: "ducklett",
		icon: "ducklett"
	},
	{
		name: "Swanna",
		value: "swanna",
		icon: "swanna"
	},
	{
		name: "Vanillite",
		value: "vanillite",
		icon: "vanillite"
	},
	{
		name: "Vanillish",
		value: "vanillish",
		icon: "vanillish"
	},
	{
		name: "Vanilluxe",
		value: "vanilluxe",
		icon: "vanilluxe"
	},
	{
		name: "Deerling",
		value: "deerling",
		icon: "deerling"
	},
	{
		name: "Sawsbuck",
		value: "sawsbuck",
		icon: "sawsbuck"
	},
	{
		name: "Emolga",
		value: "emolga",
		icon: "emolga"
	},
	{
		name: "Karrablast",
		value: "karrablast",
		icon: "karrablast"
	},
	{
		name: "Escavalier",
		value: "escavalier",
		icon: "escavalier"
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
		icon: "frillish"
	},
	{
		name: "Jellicent",
		value: "jellicent",
		icon: "jellicent"
	},
	{
		name: "Alomomola",
		value: "alomomola",
		icon: "alomomola"
	},
	{
		name: "Joltik",
		value: "joltik",
		icon: "joltik"
	},
	{
		name: "Galvantula",
		value: "galvantula",
		icon: "galvantula"
	},
	{
		name: "Ferroseed",
		value: "ferroseed",
		icon: "ferroseed"
	},
	{
		name: "Ferrothorn",
		value: "ferrothorn",
		icon: "ferrothorn"
	},
	{
		name: "Klink",
		value: "klink",
		icon: "klink"
	},
	{
		name: "Klang",
		value: "klang",
		icon: "klang"
	},
	{
		name: "Klinklang",
		value: "klinklang",
		icon: "klinklang"
	},
	{
		name: "Tynamo",
		value: "tynamo",
		icon: "tynamo"
	},
	{
		name: "Eelektrik",
		value: "eelektrik",
		icon: "eelektrik"
	},
	{
		name: "Eelektross",
		value: "eelektross",
		icon: "eelektross"
	},
	{
		name: "Elgyem",
		value: "elgyem",
		icon: "elgyem"
	},
	{
		name: "Beheeyem",
		value: "beheeyem",
		icon: "beheeyem"
	},
	{
		name: "Litwick",
		value: "litwick",
		icon: "litwick"
	},
	{
		name: "Lampent",
		value: "lampent",
		icon: "lampent"
	},
	{
		name: "Chandelure",
		value: "chandelure",
		icon: "chandelure"
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
		icon: "shelmet"
	},
	{
		name: "Accelgor",
		value: "accelgor",
		icon: "accelgor"
	},
	{
		name: "Stunfisk",
		value: "stunfisk",
		icon: "stunfisk"
	},
	{
		name: "Mienfoo",
		value: "mienfoo",
		icon: "mienfoo"
	},
	{
		name: "Mienshao",
		value: "mienshao",
		icon: "mienshao"
	},
	{
		name: "Druddigon",
		value: "druddigon",
		icon: "druddigon"
	},
	{
		name: "Golett",
		value: "golett",
		icon: "golett"
	},
	{
		name: "Golurk",
		value: "golurk",
		icon: "golurk"
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
		icon: "bouffalant"
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
		icon: "vullaby"
	},
	{
		name: "Mandibuzz",
		value: "mandibuzz",
		icon: "mandibuzz"
	},
	{
		name: "Heatmor",
		value: "heatmor",
		icon: "heatmor"
	},
	{
		name: "Durant",
		value: "durant",
		icon: "durant"
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
		icon: "cobalion"
	},
	{
		name: "Terrakion",
		value: "terrakion",
		icon: "terrakion"
	},
	{
		name: "Virizion",
		value: "virizion",
		icon: "virizion"
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
		icon: "reshiram"
	},
	{
		name: "Zekrom",
		value: "zekrom",
		icon: "zekrom"
	},
	{
		name: "Landorus",
		value: "landorus",
		icon: "landorus"
	},
	{
		name: "Kyurem",
		value: "kyurem",
		icon: "kyurem"
	},
	{
		name: "Keldeo",
		value: "keldeo",
		icon: "keldeo"
	},
	{
		name: "Meloetta",
		value: "meloetta",
		icon: "meloetta"
	},
	{
		name: "Genesect",
		value: "genesect",
		icon: "genesect"
	},
	{
		name: "Chespin",
		value: "chespin",
		icon: "chespin"
	},
	{
		name: "Quilladin",
		value: "quilladin",
		icon: "quilladin"
	},
	{
		name: "Chesnaught",
		value: "chesnaught",
		icon: "chesnaught"
	},
	{
		name: "Fennekin",
		value: "fennekin",
		icon: "fennekin"
	},
	{
		name: "Braixen",
		value: "braixen",
		icon: "braixen"
	},
	{
		name: "Delphox",
		value: "delphox",
		icon: "delphox"
	},
	{
		name: "Froakie",
		value: "froakie",
		icon: "froakie"
	},
	{
		name: "Frogadier",
		value: "frogadier",
		icon: "frogadier"
	},
	{
		name: "Greninja",
		value: "greninja",
		icon: "greninja"
	},
	{
		name: "Bunnelby",
		value: "bunnelby",
		icon: "bunnelby"
	},
	{
		name: "Diggersby",
		value: "diggersby",
		icon: "diggersby"
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
		icon: "scatterbug"
	},
	{
		name: "Spewpa",
		value: "spewpa",
		icon: "spewpa"
	},
	{
		name: "Vivillon",
		value: "vivillon",
		icon: "vivillon"
	},
	{
		name: "Litleo",
		value: "litleo",
		icon: "litleo"
	},
	{
		name: "Pyroar",
		value: "pyroar",
		icon: "pyroar"
	},
	{
		name: "Flabébé",
		value: "flabebe",
		icon: "flabebe"
	},
	{
		name: "Floette",
		value: "floette",
		icon: "floette"
	},
	{
		name: "Florges",
		value: "florges",
		icon: "florges"
	},
	{
		name: "Skiddo",
		value: "skiddo",
		icon: "skiddo"
	},
	{
		name: "Gogoat",
		value: "gogoat",
		icon: "gogoat"
	},
	{
		name: "Pancham",
		value: "pancham",
		icon: "pancham"
	},
	{
		name: "Pangoro",
		value: "pangoro",
		icon: "pangoro"
	},
	{
		name: "Furfrou",
		value: "furfrou",
		icon: "furfrou"
	},
	{
		name: "Espurr",
		value: "espurr",
		icon: "espurr"
	},
	{
		name: "Meowstic",
		value: "meowstic",
		icon: "meowstic"
	},
	{
		name: "Honedge",
		value: "honedge",
		icon: "honedge"
	},
	{
		name: "Doublade",
		value: "doublade",
		icon: "doublade"
	},
	{
		name: "Aegislash",
		value: "aegislash",
		icon: "aegislash"
	},
	{
		name: "Spritzee",
		value: "spritzee",
		icon: "spritzee"
	},
	{
		name: "Aromatisse",
		value: "aromatisse",
		icon: "aromatisse"
	},
	{
		name: "Swirlix",
		value: "swirlix",
		icon: "swirlix"
	},
	{
		name: "Slurpuff",
		value: "slurpuff",
		icon: "slurpuff"
	},
	{
		name: "Inkay",
		value: "inkay",
		icon: "inkay"
	},
	{
		name: "Malamar",
		value: "malamar",
		icon: "malamar"
	},
	{
		name: "Binacle",
		value: "binacle",
		icon: "binacle"
	},
	{
		name: "Barbaracle",
		value: "barbaracle",
		icon: "barbaracle"
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
		icon: "helioptile"
	},
	{
		name: "Heliolisk",
		value: "heliolisk",
		icon: "heliolisk"
	},
	{
		name: "Tyrunt",
		value: "tyrunt",
		icon: "tyrunt"
	},
	{
		name: "Tyrantrum",
		value: "tyrantrum",
		icon: "tyrantrum"
	},
	{
		name: "Amaura",
		value: "amaura",
		icon: "amaura"
	},
	{
		name: "Aurorus",
		value: "aurorus",
		icon: "aurorus"
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
		icon: "phantump"
	},
	{
		name: "Trevenant",
		value: "trevenant",
		icon: "trevenant"
	},
	{
		name: "Pumpkaboo",
		value: "pumpkaboo",
		icon: "pumpkaboo"
	},
	{
		name: "Gourgeist",
		value: "gourgeist",
		icon: "gourgeist"
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
		icon: "xerneas"
	},
	{
		name: "Yveltal",
		value: "yveltal",
		icon: "yveltal"
	},
	{
		name: "Zygarde",
		value: "zygarde",
		icon: "zygarde"
	},
	{
		name: "Diancie",
		value: "diancie",
		icon: "diancie"
	},
	{
		name: "Hoopa",
		value: "hoopa",
		icon: "hoopa"
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
		icon: "litten"
	},
	{
		name: "Torracat",
		value: "torracat",
		icon: "torracat"
	},
	{
		name: "Incineroar",
		value: "incineroar",
		icon: "incineroar"
	},
	{
		name: "Popplio",
		value: "popplio",
		icon: "popplio"
	},
	{
		name: "Brionne",
		value: "brionne",
		icon: "brionne"
	},
	{
		name: "Primarina",
		value: "primarina",
		icon: "primarina"
	},
	{
		name: "Pikipek",
		value: "pikipek",
		icon: "pikipek"
	},
	{
		name: "Trumbeak",
		value: "trumbeak",
		icon: "trumbeak"
	},
	{
		name: "Toucannon",
		value: "toucannon",
		icon: "toucannon"
	},
	{
		name: "Yungoos",
		value: "yungoos",
		icon: "yungoos"
	},
	{
		name: "Gumshoos",
		value: "gumshoos",
		icon: "gumshoos"
	},
	{
		name: "Grubbin",
		value: "grubbin",
		icon: "grubbin"
	},
	{
		name: "Charjabug",
		value: "charjabug",
		icon: "charjabug"
	},
	{
		name: "Vikavolt",
		value: "vikavolt",
		icon: "vikavolt"
	},
	{
		name: "Crabrawler",
		value: "crabrawler",
		icon: "crabrawler"
	},
	{
		name: "Crabominable",
		value: "crabominable",
		icon: "crabominable"
	},
	{
		name: "Oricorio",
		value: "oricorio",
		icon: "oricorio"
	},
	{
		name: "Cutiefly",
		value: "cutiefly",
		icon: "cutiefly"
	},
	{
		name: "Ribombee",
		value: "ribombee",
		icon: "ribombee"
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
		icon: "wishiwashi"
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
		icon: "dewpider"
	},
	{
		name: "Araquanid",
		value: "araquanid",
		icon: "araquanid"
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
		icon: "morelull"
	},
	{
		name: "Shiinotic",
		value: "shiinotic",
		icon: "shiinotic"
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
		icon: "stufful"
	},
	{
		name: "Bewear",
		value: "bewear",
		icon: "bewear"
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
		icon: "comfey"
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
		icon: "wimpod"
	},
	{
		name: "Golisopod",
		value: "golisopod",
		icon: "golisopod"
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
		icon: "pyukumuku"
	},
	{
		name: "Type: Null",
		value: "type-null",
		icon: "type-null"
	},
	{
		name: "Silvally",
		value: "silvally",
		icon: "silvally"
	},
	{
		name: "Minior",
		value: "minior",
		icon: "minior"
	},
	{
		name: "Komala",
		value: "komala",
		icon: "komala"
	},
	{
		name: "Turtonator",
		value: "turtonator",
		icon: "turtonator"
	},
	{
		name: "Togedemaru",
		value: "togedemaru",
		icon: "togedemaru"
	},
	{
		name: "Mimikyu",
		value: "mimikyu",
		icon: "mimikyu"
	},
	{
		name: "Bruxish",
		value: "bruxish",
		icon: "bruxish"
	},
	{
		name: "Drampa",
		value: "drampa",
		icon: "drampa"
	},
	{
		name: "Dhelmise",
		value: "dhelmise",
		icon: "dhelmise"
	},
	{
		name: "Jangmo-o",
		value: "jangmo-o",
		icon: "jangmo-o"
	},
	{
		name: "Hakamo-o",
		value: "hakamo-o",
		icon: "hakamo-o"
	},
	{
		name: "Kommo-o",
		value: "kommo-o",
		icon: "kommo-o"
	},
	{
		name: "Tapu Koko",
		value: "tapu-koko",
		icon: "tapu-koko"
	},
	{
		name: "Tapu Lele",
		value: "tapu-lele",
		icon: "tapu-lele"
	},
	{
		name: "Tapu Bulu",
		value: "tapu-bulu",
		icon: "tapu-bulu"
	},
	{
		name: "Tapu Fini",
		value: "tapu-fini",
		icon: "tapu-fini"
	},
	{
		name: "Cosmog",
		value: "cosmog",
		icon: "cosmog"
	},
	{
		name: "Cosmoem",
		value: "cosmoem",
		icon: "cosmoem"
	},
	{
		name: "Solgaleo",
		value: "solgaleo",
		icon: "solgaleo"
	},
	{
		name: "Lunala",
		value: "lunala",
		icon: "lunala"
	},
	{
		name: "Nihilego",
		value: "nihilego",
		icon: "nihilego"
	},
	{
		name: "Buzzwole",
		value: "buzzwole",
		icon: "buzzwole"
	},
	{
		name: "Pheromosa",
		value: "pheromosa",
		icon: "pheromosa"
	},
	{
		name: "Xurkitree",
		value: "xurkitree",
		icon: "xurkitree"
	},
	{
		name: "Celesteela",
		value: "celesteela",
		icon: "celesteela"
	},
	{
		name: "Kartana",
		value: "kartana",
		icon: "kartana"
	},
	{
		name: "Guzzlord",
		value: "guzzlord",
		icon: "guzzlord"
	},
	{
		name: "Necrozma",
		value: "necrozma",
		icon: "necrozma"
	},
	{
		name: "Magearna",
		value: "magearna",
		icon: "magearna"
	},
	{
		name: "Marshadow",
		value: "marshadow",
		icon: "marshadow"
	},
	{
		name: "Poipole",
		value: "poipole",
		icon: "poipole"
	},
	{
		name: "Naganadel",
		value: "naganadel",
		icon: "naganadel"
	},
	{
		name: "Stakataka",
		value: "stakataka",
		icon: "stakataka"
	},
	{
		name: "Blacephalon",
		value: "blacephalon",
		icon: "blacephalon"
	},
	{
		name: "Zeraora",
		value: "zeraora",
		icon: "zeraora"
	},
	{
		name: "Meltan",
		value: "meltan",
		icon: "meltan"
	},
	{
		name: "Melmetal",
		value: "melmetal",
		icon: "melmetal"
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
		icon: "blipbug"
	},
	{
		name: "Dottler",
		value: "dottler",
		icon: "dottler"
	},
	{
		name: "Orbeetle",
		value: "orbeetle",
		icon: "orbeetle"
	},
	{
		name: "Nickit",
		value: "nickit",
		icon: "nickit"
	},
	{
		name: "Thievul",
		value: "thievul",
		icon: "thievul"
	},
	{
		name: "Gossifleur",
		value: "gossifleur",
		icon: "gossifleur"
	},
	{
		name: "Eldegoss",
		value: "eldegoss",
		icon: "eldegoss"
	},
	{
		name: "Wooloo",
		value: "wooloo",
		icon: "wooloo"
	},
	{
		name: "Dubwool",
		value: "dubwool",
		icon: "dubwool"
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
		icon: "yamper"
	},
	{
		name: "Boltund",
		value: "boltund",
		icon: "boltund"
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
		icon: "cramorant"
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
		icon: "sizzlipede"
	},
	{
		name: "Centiskorch",
		value: "centiskorch",
		icon: "centiskorch"
	},
	{
		name: "Clobbopus",
		value: "clobbopus",
		icon: "clobbopus"
	},
	{
		name: "Grapploct",
		value: "grapploct",
		icon: "grapploct"
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
		icon: "obstagoon"
	},
	{
		name: "Perrserker",
		value: "perrserker",
		icon: "perrserker"
	},
	{
		name: "Cursola",
		value: "cursola",
		icon: "cursola"
	},
	{
		name: "Sirfetch'd",
		value: "sirfetchd",
		icon: "sirfetchd"
	},
	{
		name: "Mr. Rime",
		value: "mr-rime",
		icon: "mr-rime"
	},
	{
		name: "Runerigus",
		value: "runerigus",
		icon: "runerigus"
	},
	{
		name: "Milcery",
		value: "milcery",
		icon: "milcery"
	},
	{
		name: "Alcremie",
		value: "alcremie",
		icon: "alcremie"
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
		icon: "morpeko"
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
		icon: "dracozolt"
	},
	{
		name: "Arctozolt",
		value: "arctozolt",
		icon: "arctozolt"
	},
	{
		name: "Dracovish",
		value: "dracovish",
		icon: "dracovish"
	},
	{
		name: "Arctovish",
		value: "arctovish",
		icon: "arctovish"
	},
	{
		name: "Duraludon",
		value: "duraludon",
		icon: "duraludon"
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
		icon: "placeholder"
	},
	{
		name: "Floragato",
		value: "floragato",
		icon: "placeholder"
	},
	{
		name: "Meowscarada",
		value: "meowscarada",
		icon: "placeholder"
	},
	{
		name: "Fuecoco",
		value: "fuecoco",
		icon: "placeholder"
	},
	{
		name: "Crocalor",
		value: "crocalor",
		icon: "placeholder"
	},
	{
		name: "Skeledirge",
		value: "skeledirge",
		icon: "placeholder"
	},
	{
		name: "Quaxly",
		value: "quaxly",
		icon: "placeholder"
	},
	{
		name: "Quaxwell",
		value: "quaxwell",
		icon: "placeholder"
	},
	{
		name: "Quaquaval",
		value: "quaquaval",
		icon: "placeholder"
	},
	{
		name: "Lechonk",
		value: "lechonk",
		icon: "placeholder"
	},
	{
		name: "Oinkologne",
		value: "oinkologne",
		icon: "placeholder"
	},
	{
		name: "Tarountula",
		value: "tarountula",
		icon: "placeholder"
	},
	{
		name: "Spidops",
		value: "spidops",
		icon: "placeholder"
	},
	{
		name: "Nymble",
		value: "nymble",
		icon: "placeholder"
	},
	{
		name: "Lokix",
		value: "lokix",
		icon: "placeholder"
	},
	{
		name: "Pawmi",
		value: "pawmi",
		icon: "placeholder"
	},
	{
		name: "Pawmo",
		value: "pawmo",
		icon: "placeholder"
	},
	{
		name: "Pawmot",
		value: "pawmot",
		icon: "placeholder"
	},
	{
		name: "Tandemaus",
		value: "tandemaus",
		icon: "placeholder"
	},
	{
		name: "Maushold",
		value: "maushold",
		icon: "placeholder"
	},
	{
		name: "Fidough",
		value: "fidough",
		icon: "placeholder"
	},
	{
		name: "Dachsbun",
		value: "dachsbun",
		icon: "placeholder"
	},
	{
		name: "Smoliv",
		value: "smoliv",
		icon: "placeholder"
	},
	{
		name: "Dolliv",
		value: "dolliv",
		icon: "placeholder"
	},
	{
		name: "Arboliva",
		value: "arboliva",
		icon: "placeholder"
	},
	{
		name: "Squawkabilly",
		value: "squawkabilly",
		icon: "placeholder"
	},
	{
		name: "Nacli",
		value: "nacli",
		icon: "placeholder"
	},
	{
		name: "Naclstack",
		value: "naclstack",
		icon: "placeholder"
	},
	{
		name: "Garganacl",
		value: "garganacl",
		icon: "placeholder"
	},
	{
		name: "Charcadet",
		value: "charcadet",
		icon: "placeholder"
	},
	{
		name: "Armarouge",
		value: "armarouge",
		icon: "placeholder"
	},
	{
		name: "Ceruledge",
		value: "ceruledge",
		icon: "placeholder"
	},
	{
		name: "Tadbulb",
		value: "tadbulb",
		icon: "placeholder"
	},
	{
		name: "Bellibolt",
		value: "bellibolt",
		icon: "placeholder"
	},
	{
		name: "Wattrel",
		value: "wattrel",
		icon: "placeholder"
	},
	{
		name: "Kilowattrel",
		value: "kilowattrel",
		icon: "placeholder"
	},
	{
		name: "Maschiff",
		value: "maschiff",
		icon: "placeholder"
	},
	{
		name: "Mabosstiff",
		value: "mabosstiff",
		icon: "placeholder"
	},
	{
		name: "Shroodle",
		value: "shroodle",
		icon: "placeholder"
	},
	{
		name: "Grafaiai",
		value: "grafaiai",
		icon: "placeholder"
	},
	{
		name: "Bramblin",
		value: "bramblin",
		icon: "placeholder"
	},
	{
		name: "Brambleghast",
		value: "brambleghast",
		icon: "placeholder"
	},
	{
		name: "Toedscool",
		value: "toedscool",
		icon: "placeholder"
	},
	{
		name: "Toedscruel",
		value: "toedscruel",
		icon: "placeholder"
	},
	{
		name: "Klawf",
		value: "klawf",
		icon: "placeholder"
	},
	{
		name: "Capsakid",
		value: "capsakid",
		icon: "placeholder"
	},
	{
		name: "Scovillain",
		value: "scovillain",
		icon: "placeholder"
	},
	{
		name: "Rellor",
		value: "rellor",
		icon: "placeholder"
	},
	{
		name: "Rabsca",
		value: "rabsca",
		icon: "placeholder"
	},
	{
		name: "Flittle",
		value: "flittle",
		icon: "placeholder"
	},
	{
		name: "Espathra",
		value: "espathra",
		icon: "placeholder"
	},
	{
		name: "Tinkatink",
		value: "tinkatink",
		icon: "placeholder"
	},
	{
		name: "Tinkatuff",
		value: "tinkatuff",
		icon: "placeholder"
	},
	{
		name: "Tinkaton",
		value: "tinkaton",
		icon: "placeholder"
	},
	{
		name: "Wiglett",
		value: "wiglett",
		icon: "placeholder"
	},
	{
		name: "Wugtrio",
		value: "wugtrio",
		icon: "placeholder"
	},
	{
		name: "Bombirdier",
		value: "bombirdier",
		icon: "placeholder"
	},
	{
		name: "Finizen",
		value: "finizen",
		icon: "placeholder"
	},
	{
		name: "Palafin",
		value: "palafin",
		icon: "placeholder"
	},
	{
		name: "Varoom",
		value: "varoom",
		icon: "placeholder"
	},
	{
		name: "Revavroom",
		value: "revavroom",
		icon: "placeholder"
	},
	{
		name: "Cyclizar",
		value: "cyclizar",
		icon: "placeholder"
	},
	{
		name: "Orthworm",
		value: "orthworm",
		icon: "placeholder"
	},
	{
		name: "Glimmet",
		value: "glimmet",
		icon: "placeholder"
	},
	{
		name: "Glimmora",
		value: "glimmora",
		icon: "placeholder"
	},
	{
		name: "Greavard",
		value: "greavard",
		icon: "placeholder"
	},
	{
		name: "Houndstone",
		value: "houndstone",
		icon: "placeholder"
	},
	{
		name: "Flamigo",
		value: "flamigo",
		icon: "placeholder"
	},
	{
		name: "Cetoddle",
		value: "cetoddle",
		icon: "placeholder"
	},
	{
		name: "Cetitan",
		value: "cetitan",
		icon: "placeholder"
	},
	{
		name: "Veluza",
		value: "veluza",
		icon: "placeholder"
	},
	{
		name: "Dondozo",
		value: "dondozo",
		icon: "placeholder"
	},
	{
		name: "Tatsugiri",
		value: "tatsugiri",
		icon: "placeholder"
	},
	{
		name: "Annihilape",
		value: "annihilape",
		icon: "placeholder"
	},
	{
		name: "Clodsire",
		value: "clodsire",
		icon: "placeholder"
	},
	{
		name: "Farigiraf",
		value: "farigiraf",
		icon: "placeholder"
	},
	{
		name: "Dudunsparce",
		value: "dudunsparce",
		icon: "placeholder"
	},
	{
		name: "Kingambit",
		value: "kingambit",
		icon: "placeholder"
	},
	{
		name: "Great Tusk",
		value: "greattusk",
		icon: "placeholder"
	},
	{
		name: "Scream Tail",
		value: "screamtail",
		icon: "placeholder"
	},
	{
		name: "Brute Bonnet",
		value: "brutebonnet",
		icon: "placeholder"
	},
	{
		name: "Flutter Mane",
		value: "fluttermane",
		icon: "placeholder"
	},
	{
		name: "Slither Wing",
		value: "slitherwing",
		icon: "placeholder"
	},
	{
		name: "Sandy Shocks",
		value: "sandyshocks",
		icon: "placeholder"
	},
	{
		name: "Iron Treads",
		value: "irontreads",
		icon: "placeholder"
	},
	{
		name: "Iron Bundle",
		value: "ironbundle",
		icon: "placeholder"
	},
	{
		name: "Iron Hands",
		value: "ironhands",
		icon: "placeholder"
	},
	{
		name: "Iron Jugulis",
		value: "ironjugulis",
		icon: "placeholder"
	},
	{
		name: "Iron Moth",
		value: "ironmoth",
		icon: "placeholder"
	},
	{
		name: "Iron Thorns",
		value: "ironthorns",
		icon: "placeholder"
	},
	{
		name: "Frigibax",
		value: "frigibax",
		icon: "placeholder"
	},
	{
		name: "Arctibax",
		value: "arctibax",
		icon: "placeholder"
	},
	{
		name: "Baxcalibur",
		value: "baxcalibur",
		icon: "placeholder"
	},
	{
		name: "Gimmighoul",
		value: "gimmighoul",
		icon: "placeholder"
	},
	{
		name: "Gholdengo",
		value: "gholdengo",
		icon: "placeholder"
	},
	{
		name: "Wo-Chien",
		value: "wo-chien",
		icon: "placeholder"
	},
	{
		name: "Chien-Pao",
		value: "chien-pao",
		icon: "placeholder"
	},
	{
		name: "Ting-Lu",
		value: "ting-lu",
		icon: "placeholder"
	},
	{
		name: "Chi-Yu",
		value: "chi-yu",
		icon: "placeholder"
	},
	{
		name: "Roaring Moon",
		value: "roaringmoon",
		icon: "placeholder"
	},
	{
		name: "Iron Valiant",
		value: "ironvaliant",
		icon: "placeholder"
	},
	{
		name: "Koraidon",
		value: "koraidon",
		icon: "placeholder"
	},
	{
		name: "Miraidon",
		value: "miraidon",
		icon: "placeholder"
	}
];