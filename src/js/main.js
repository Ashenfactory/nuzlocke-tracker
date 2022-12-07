if (location.protocol === 'https:' && 'serviceWorker' in navigator) {
	try {
		navigator.serviceWorker.register('js/serviceworker.min.js');
	} catch (e) {
		console.error(e);
	}
}

if (!localStorage.getItem('selectedGame')) {
	localStorage.setItem('selectedGame', 'rby');
}

let selectedGame = games[localStorage.getItem('selectedGame')] ? localStorage.getItem('selectedGame') : 'rby';

function escapeHTML(str, jsContext) {
	const string = new Option(str).innerHTML;

	if (jsContext) {
		string.replace(/"/g, '"').replace(/'/g, "'").replace(/\n/g, '\\n').replace(/\/r/g, '\\r');
	} else {
		string.replace(/"/g, '&quot;');
	}

	return string;
}

function renderMain() {
	let linksString = '';
	let segmentsString = '';

	for (const game in games) {
		linksString += '<a class="item" data-tab="' + games[game].id + '">' + games[game].title + '</a>';

		segmentsString += '<div class="ui bottom attached segment tab" data-tab="' + games[game].id + '">' +
			'<div class="ui secondary stackable menu">' +
				'<div class="horizontally fitted item">' +
					'<h2 class="ui header">' + games[game].title + '</h2>' +
				'</div>' +
				'<div class="right horizontally fitted item">' +
					'<button class="ui basic fluid button addLocation"><i class="plus icon"></i>Add location</button>' +
					'<button class="ui basic button gameSettings" title="Game settings"><i class="settings icon"></i></button>' +
				'</div>' +
			'</div>' +
			'<table class="ui table sortable selectable">' +
				'<thead>' +
					'<tr>' +
						'<th class="center aligned four wide">Location</th>' +
						'<th class="center aligned four wide">Encounter</th>' +
						'<th class="center aligned four wide">Nickname</th>' +
						'<th class="center aligned three wide">Status</th>' +
						'<th class="center aligned no-sort one wide disabled"></th>' +
					'</tr>' +
				'</thead>' +
				'<tbody id="' + games[game].id + '-locations">' +
				'</tbody>' +
			'</table>' +
		'</div>';
	};


	return '<div class="ui stackable top attached borderless menu">' +
		'<div id="gameMenu" class="ui dropdown item">' +
			'<i class="sidebar icon"></i>' +
			'Games' +
			'<i class="dropdown icon"></i>' +
			'<div class="menu">' +
				linksString +
			'</div>' +
		'</div>' +
		'<div class="right horizontally fitted item dataControls">' +
			'<button id="saveData" class="ui green button"><i class="download icon"></i>Export</button>' +
			'<input id="fileLoader" accept=".json, application/json" type="file">' +
			'<label id="loadData" class="ui blue button fileInput" for="fileLoader"><i class="upload icon"></i>Import</label>' +
			'<button id="resetData" class="ui red button"><i class="remove icon"></i>Reset</button>' +
		'</div>' +
	'</div>' +
	segmentsString;
}

function renderLocations(game, darkTheme) {
	string = '';

	game.locations.forEach((location, index) => {
		const locationValue = escapeHTML(location.value);
		const locationName = localStorage.getItem(game.id + location.value + '-name');
		const locationEncounter = localStorage.getItem(game.id + location.value + '-encounter');
		const locationNickname = localStorage.getItem(game.id + location.value + '-nickname');
		const locationStatus = localStorage.getItem(game.id + location.value + '-status');

		string += '<tr' + (location.order !== undefined ? ' class="customLocation"' : '' ) + '>' +
			'<td data-sort-value="' + index + '">' + escapeHTML(location.name) + '</td>' +
			'<td data-sort-value="' + (locationEncounter ? escapeHTML(locationEncounter) : '') + '">' +
				'<div data-name="' + (locationName ? escapeHTML(locationName) : '') + '" data-value="' + (locationEncounter ? escapeHTML(locationEncounter) : '') + '" id="' + game.id + locationValue + '-encounter" class="ui' + (darkTheme ? ' inverted' : '') + ' fluid search selection long dropdown encounter-picker" aria-label="' + location.name + ' encounter">' +
					'<input value="' + (locationEncounter ? escapeHTML(locationEncounter) : '') + '" aria-label="' + location.name + ' encounter" name="pokemon" type="hidden">' +
					'<i class="dropdown icon"></i>' +
					'<div class="default text">Encounter</div>' +
					'<div class="menu"></div>' +
				'</div>' +
			'</td>' +
			'<td data-sort-value="' + (locationNickname ? escapeHTML(locationNickname) : '') + '">' +
				'<div class="ui' + (darkTheme ? ' inverted' : '') + ' fluid input">' +
					'<input autocomplete="off" maxlength="' + game.nameLimit + '" class="nickname-input" value="' + (locationNickname ? escapeHTML(locationNickname) : '') + '" id="' + game.id + locationValue + '-nickname" name="nickname" placeholder="Nickname" type="text" aria-label="' + location.name + ' nickname">' +
				'</div>' +
			'</td>' +
			'<td data-sort-value="' + (locationStatus ? escapeHTML(locationStatus) : '') + '">' +
				'<div id="' + game.id + locationValue + '-status" class="ui' + (darkTheme ? ' inverted' : '') + ' fluid selection long dropdown" aria-label="' + location.name + ' status">' +
					'<input value="' + (locationStatus ? escapeHTML(locationStatus) : '') + '" name="status" type="hidden">' +
					'<i class="dropdown icon"></i>' +
					'<div class="default text">Status</div>' +
					'<div class="menu">' +
						'<div class="item" data-value="captured"><i class="checkmark icon"></i>Captured</div>' +
						'<div class="item" data-value="received"><i class="gift icon"></i>Received</div>' +
						'<div class="item" data-value="traded"><i class="exchange icon"></i>Traded</div>' +
						'<div class="item" data-value="missed"><i class="ban icon"></i>Missed</div>' +
						'<div class="item" data-value="stored"><i class="hdd outline icon"></i>Stored</div>' +
						'<div class="item" data-value="deceased"><i class="remove user icon"></i>Deceased</div>' +
					'</div>' +
				'</div>' +
			'</td>' +
			'<td><div title="Delete" class="ui' + (darkTheme ? ' inverted' : '') + ' basic singleReset fluid icon button" data-location-id="' + locationValue + '"><i class="remove icon"></i></div></td>' +
		'</tr>';
	});

	return string;
}

function resetGame(game, removeLocations) {
	games[selectedGame].locations.forEach(location => {
		clearLocation(selectedGame + location.value);
	});

	if (removeLocations) {
		localStorage.removeItem(selectedGame + '-custom-locations');

		games[selectedGame].locations = games[selectedGame].locations.filter(location => location.value[0] !== 'c');
	}
}

function filterByProperty(array, property) {
	const values = {};

	return array.filter(entry => {
		const value = entry[property];

		if (values[value] !== undefined) {
			return false;
		} else {
			values[value] = true;
			return true;
		}
	});
}

function uploadFile(input) {
	if (input.files && input.files[0]) {
		file = input.files[0];
		fr = new FileReader();

		fr.onload = () => {
			try {
				const data = JSON.parse(fr.result);

				if (data && data.hasOwnProperty('locations')) {
					const locations = filterByProperty(data.locations, 'id');

					resetGame(data.id, true);

					$('#disableDexLimit').prop('checked', data.settings && data.settings.disableDexLimit);
					toggleDexLimit(data.id);

					//$('#allowCustomPokemon').prop('checked', data.settings && data.settings.allowCustomPokemon);
					//togglePokemonAddition(data.id);

					if (data.customLocations.length) {
						const customLocations = filterByProperty(data.customLocations, 'value');

						localStorage.setItem(data.id + '-custom-locations', JSON.stringify(customLocations));
					} else {
						localStorage.removeItem(data.id + '-custom-locations');
					}

					locations.forEach(location => {
						populateLocation(data.id, location);
					});

					updateTab(data.id, true);

					if (localStorage.getItem('selectedGame') !== data.id) {
						$('#gameMenu .menu').find('.item[data-tab="' + data.id + '"]').click();
					}
				} else {
					$('#errorMessage').removeClass('hidden');
					$('#messageHeader').text('Incorrect format');
					$('#messageContent').text('The uploaded file contains invalid data');
				}
			} catch (e) {
				console.error(e);

				$('#errorMessage').removeClass('hidden');
				$('#messageHeader').text('Could not read file');
				$('#messageContent').text('The uploaded file was not recognized as valid JSON');
			}
		};

		fr.readAsText(file);
	}
}

function populateLocation(game, data) {
	const id = game + data.id;
	const encounterElm = $('#' + id + '-encounter');
	const nicknameElm = $('#' + id + '-nickname');
	const statusElm = $('#' + id + '-status');

	if (data.encounter !== null && data.encounter !== '') {
		encounterElm.dropdown('set value', data.encounter);
		encounterElm.dropdown('set text', '<i class="pkmn ' + data.encounter + '"></i>' + data.name);
		encounterElm.data('name', data.name);
		localStorage.setItem(id + '-encounter', data.encounter);
		localStorage.setItem(id + '-name', data.name);
	} else {
		encounterElm.closest('td').data('sortValue', '');
		encounterElm.dropdown('clear');
		localStorage.removeItem(id + '-encounter');
		localStorage.removeItem(id + '-name');
	}

	if (data.nickname !== null && data.nickname !== '') {
		nicknameElm.val(data.nickname);
		localStorage.setItem(id + '-nickname', data.nickname);
	} else {
		nicknameElm.val('').closest('td').data('sortValue', '');
		localStorage.removeItem(id + '-nickname');
	}

	if (data.status !== null && data.status !== '') {
		statusElm.dropdown('set selected', data.status);
		localStorage.setItem(id + '-status', data.status);
	} else {
		statusElm.closest('td').data('sortValue', '');
		statusElm.dropdown('clear');
		localStorage.removeItem(id + '-status');
	}
}

function clearLocation(id) {
	const encounter = id + '-encounter';
	const nickname = id + '-nickname';
	const status = id + '-status';
	const name = id + '-name';

	$('#' + encounter).dropdown('clear');
	$('#' + encounter).closest('td').data('sortValue', '');
	$('#' + nickname).val('').closest('td').data('sortValue', '');
	$('#' + status).dropdown('clear');
	$('#' + status).closest('td').data('sortValue', '');

	localStorage.removeItem(encounter);
	localStorage.removeItem(nickname);
	localStorage.removeItem(status);
	localStorage.removeItem(name);
}

function sortLocations(game) {
	const locations = games[game].locations.filter(location => location.value[0] !== 'c');

	let customLocations = JSON.parse(localStorage.getItem(game + '-custom-locations') || '[]');
	let initialLength = customLocations.length;

	if (initialLength) {
		//Sort by order property, ensuring that all locations ordered directly after hardcoded locations get sorted first
		//which potentially reduces the number of iterations to complete
		customLocations.sort((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0);

		//The order property of locations essentially make up one-to-one "chains" that each originate from a hardcoded location.
		//The actual order of the locations as is doesn't necessarily relate to the aformentioned property, since it's subject to change
		//which is why we're simply iterating over the array until it's empty.
		//This is almost certainly unoptimal, but it works.
		while (customLocations.length !== 0) {
			const locationRemoval = [];
			initialLength = customLocations.length;

			customLocations.forEach((customLocation, index) => {
				const insertIndex = locations.findIndex(e => e.value == customLocation.order);

				if (insertIndex !== -1) {
					//Insert location into the main location array
					locations.splice(insertIndex + 1, 0, customLocations[index]);

					//Mark inserted location for deletion in the original array
					locationRemoval.push(customLocation.value);
				}
			});

			//Once all locations have been iterated, delete all the ones that were able to be placed to prevent duplicates and satisfy the while-loop.
			customLocations = customLocations.filter(location => !locationRemoval.includes(location.value));

			//If the initialLength is unchanged by the end of the iteration, something's gone wrong and the loop will never end unless we break out
			if (initialLength === customLocations.length) {
				break;
			}
		}
	}

	games[game].locations = locations;
}

function toggleDexLimit(tab) {
	const value = $('#disableDexLimit').prop('checked');

	if (value) {
		localStorage.setItem(tab + '-disable-dex-limit', true);
	} else {
		localStorage.removeItem(tab + '-disable-dex-limit');
	}
}

/* function togglePokemonAddition(tab) {
	const value = $('#allowCustomPokemon').prop('checked');

	if (value) {
		localStorage.setItem(tab + '-allow-custom-pokemon', true);
	} else {
		localStorage.removeItem(tab + '-allow-custom-pokemon');
	}

	$('#' + tab + '-locations .encounter-picker').dropdown('setting', 'allowAdditions', value);
} */

function initTab(tab) {
	$('#' + tab + '-locations .ui.dropdown').dropdown({
		onChange: function(value, name) {
			$(this).closest('td').data('sortValue', value);
			localStorage.setItem($(this).prop('id'), value);
		},
	});

	$('#' + tab + '-locations .encounter-picker').dropdown({
		onChange: function(value, name) {
			const regex = new RegExp(/[^>]*$/, 'i');
			const elm = $(this);

			elm.closest('td').data('sortValue', value);
			elm.data('name', name);
			localStorage.setItem(elm.prop('id').slice(0, -9) + 'name', regex.exec(name));
			localStorage.setItem(elm.prop('id'), value);
			elm.find('.search').blur();
		},
		onShow: function() {
			const value = $(this).dropdown('get value');
			$(this).dropdown('change values', localStorage.getItem(tab + '-disable-dex-limit') ? pkmnData : pkmnData.slice(0, games[tab].dexLimit).filter(pokemon => pokemon.exclude === undefined || !pokemon.exclude.includes(tab)));

			if (value) {
				$(this).dropdown('set selected', value);

				setTimeout(() => {
					this.querySelector('[data-value="' + value + '"]').scrollIntoView({block: 'center'});
				}, 10);
			}

			$(this).find('.search').focus();
		},
		onHide: function() {
			const elm = $(this);
			const value = elm.dropdown('get value');

			elm.find('.search').val('');

			if (value !== '') {
				elm.dropdown('set selected', value);
			} else {
				elm.dropdown('restore placeholder text');
			}
		},
		className: {
			icon: 'pkmn'
		},
		forceSelection: false,
		ignoreCase: true,
		ignoreDiacritics: true,
		selectOnKeydown: false
	});

	$('#' + tab + '-locations .encounter-picker[data-name!=""]').each(function() {
		const value = escapeHTML($(this).data('value'));
		$(this).attr('aria-label', value + ' ');
		$(this).dropdown('set value', value);
		$(this).dropdown('set text', '<i class="pkmn ' + value + '"></i>' + $(this).data('name'));
	});

	$('#' + tab + '-locations').closest('table').tablesort();
	$('#' + tab + '-locations').closest('table').find('th').first().trigger('click');
}

function saveData(game) {
	const blobData = {
		id: game,
		locations: [],
		customLocations: JSON.parse(localStorage.getItem(game + '-custom-locations') || '[]'),
		settings: {}
	};

	if (localStorage.getItem(game + '-disable-dex-limit')) {
		blobData.settings.disableDexLimit = true;
	}

/*	if (localStorage.getItem(game + '-allow-custom-pokemon')) {
		blobData.settings.allowCustomPokemon = true;
	} */

	games[game].locations.forEach(location => {
		const encounter = localStorage.getItem(game + location.value + '-encounter');
		const name = localStorage.getItem(game + location.value + '-name');
		const nickname = localStorage.getItem(game + location.value + '-nickname');
		const status = localStorage.getItem(game + location.value + '-status');

		if (encounter !== null || name !== null || nickname !== null || status !== null) {
			blobData.locations.push({
				id: location.value,
				encounter: encounter,
				name: name,
				nickname: nickname,
				status: status
			});
		}
	});

	const blob = new Blob([JSON.stringify(blobData)], {type: 'application/json;charset=utf-8'});

	saveAs(blob, game + '.' + new Date().toISOString().slice(0, 10) + '.json');
}

function addLocation(location, game) {
	const customLocations = JSON.parse(localStorage.getItem(game + '-custom-locations') || '[]');

	if (customLocations.length) {
		location.value = 'c' + (parseInt((customLocations[customLocations.length - 1]).value.slice(1)) + 1);
	} else {
		location.value = 'c0';
	}

	const duplicateLocationOrder = customLocations.findIndex(e => e.order == location.order);

	if (duplicateLocationOrder !== -1) {
		customLocations[duplicateLocationOrder].order = location.value;
	}

	customLocations.push(location);

	localStorage.setItem(game + '-custom-locations', JSON.stringify(customLocations));

	updateTab(game, true);
}

function removeLocation(value, game) {
	const customLocations = JSON.parse(localStorage.getItem(game + '-custom-locations') || '[]');
	const location = customLocations.find(location => location.value == value);
	const dependantLocation = customLocations.findIndex(e => e.order == location.value);

	if (dependantLocation !== -1) {
		customLocations[dependantLocation].order = location.order;
	}

	customLocations.splice(customLocations.findIndex(e => e.value == location.value), 1);

	localStorage.setItem(game + '-custom-locations', JSON.stringify(customLocations));

	updateTab(game, true);
}

function updateTab(game, updateDropdown) {
	sortLocations(game);

	$('#' + game + '-locations').html(renderLocations(games[game], localStorage.getItem('darkTheme') === 'true'));
	initTab(game);

	if (updateDropdown) {
		updateLocationDropdown();
	}

	games[game].loaded = true;
}

function updateLocationDropdown() {
	const locations = [];

	games[selectedGame].locations.forEach(location => {
		locations.push({
			name: 'After ' + escapeHTML(location.name),
			value: location.value
		});
	});

	$('#locationOrder').dropdown('change values', locations);
	$('#locationOrder').dropdown('set selected', '0');
}

sortLocations(selectedGame);

const darkTheme = localStorage.getItem('darkTheme') === 'true';

$('#dark-theme').prop('checked', darkTheme)
.on('change', function() {
	localStorage.setItem('darkTheme', this.checked);

	document.body.classList.toggle('dark-theme', this.checked);

	if (this.checked) {
		$('.ui:not(.footer)').addClass('inverted');
	} else {
		$('.ui:not(.footer)').removeClass('inverted');
	}
});

$('#disableDexLimit').on('change', () => {
	toggleDexLimit(selectedGame);
});

/* $('#allowCustomPokemon').on('change', () => {
	togglePokemonAddition(selectedGame);
}); */

document.body.classList.toggle('dark-theme', darkTheme);

if (darkTheme) {
	$('.ui.loading.segment').addClass('inverted');
}

$(() => {
	$(document).on('click', '#saveData', () => {
		saveData(selectedGame);
	}).on('click', '.singleReset.button', function() {
		const id = selectedGame + $(this).data('locationId');

		if ($(this).closest('tr').hasClass('customLocation')) {
			$('#clearModal').data('target', $(this).data('locationId'));
			$('#clearModal').modal('show');
		} else {
			clearLocation(id);
		}
	}).on('change', '.nickname-input', function() {
		const elm = $(this);

		if (elm.val() !== '' && elm.val() !== null) {
			elm.closest('td').data('sortValue', elm.val());
			localStorage.setItem(elm.prop('id'), elm.val());
		} else {
			elm.closest('td').data('sortValue', '');
			localStorage.removeItem(elm.prop('id'));
		}
	});

	$('#resetModal').modal({
		onApprove: e => {
			resetGame(selectedGame, e.data('action') === 'remove');
			updateTab(selectedGame, true);
		}
	});

	$('#clearModal').modal({
		onApprove: function(e) {
			if (e.data('action') === 'clear') {
				clearLocation(selectedGame + $(this).data('target'));
			} else if (e.data('action') === 'remove') {
				clearLocation(selectedGame + $(this).data('target'));
				removeLocation($(this).data('target'), selectedGame);
			}

			$(this).removeData('target');
		}
	});

	$('#importModal').modal({
		onApprove: () => {
			uploadFile($('#fileLoader')[0]);
		}
	});

	$('#customLocationName').on('input', function() {
		$(this).parent('.field').toggleClass('error', false);
	});

	$('#locationModal').modal({
		onApprove: () => {
			const locationName = $('#customLocationName').val().trim();

			$('#customLocationName').parent().toggleClass('error', locationName == false);

			if (locationName == false) {
				return false;
			}

			addLocation({name: locationName, order: $('#locationOrder').dropdown('get value') || '0'}, selectedGame);

			$('#customLocationName').val('');
			$('#locationOrder').dropdown('set selected', '0');
		}
	});

	$('.message .close').on('click', function() {
		$(this).closest('.message').transition('fade');
	});

	$('#mainContent').html(renderMain());

	$('#' + selectedGame + '-locations').html(renderLocations(games[selectedGame], darkTheme));

	$('[data-tab="' + selectedGame + '"]').addClass('active');

	$('#gameMenu .menu .item').tab({
		onFirstLoad: tabPath => {
			if (!games[tabPath].loaded) {
				updateTab(tabPath, false);
			}
		},
		onLoad: tabPath => {
			selectedGame = tabPath;
			localStorage.setItem('selectedGame', tabPath);
			updateLocationDropdown();
			$('#disableDexLimit').prop('checked', localStorage.getItem(tabPath + '-disable-dex-limit'));
			//$('#allowCustomPokemon').prop('checked', localStorage.getItem(tabPath + '-allow-custom-pokemon'));
		}
	});

	$('.cookie.nag').nag({
		storageMethod: 'localstorage',
		key: 'accepts-cookies',
		value: true
	});

	$('#resetModal').modal('attach events', '#resetData', 'show');

	$('#locationModal').modal('attach events', '.addLocation', 'show');

	$('#settingsModal').modal('attach events', '.gameSettings', 'show');

	$('#fileLoader').on('change', () => {
		$('#importModal').modal('show');
	});

	$('.copyright-year').text((new Date()).getUTCFullYear());

	$('#gameMenu').dropdown();

	$('#locationOrder').dropdown({
		onChange: value => {
			$('#locationOrder').val(value);
		}
	});

	if (darkTheme) {
		$('.ui:not(.footer)').addClass('inverted');
	}

	initTab(selectedGame);

	updateLocationDropdown();

	$('#disableDexLimit').prop('checked', localStorage.getItem(selectedGame + '-disable-dex-limit'));
	//$('#allowCustomPokemon').prop('checked', localStorage.getItem(selectedGame + '-allow-custom-pokemon'));
});