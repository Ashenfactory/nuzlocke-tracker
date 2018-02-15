// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*
    A simple, lightweight jQuery plugin for creating sortable tables.
    https://github.com/kylefox/jquery-tablesort
    Version 0.0.11
*/

(function($) {
    $.tablesort = function ($table, settings) {
        var self = this;
        this.$table = $table;
        this.$thead = this.$table.find('thead');
        this.settings = $.extend({}, $.tablesort.defaults, settings);
        this.$sortCells = this.$thead.length > 0 ? this.$thead.find('th:not(.no-sort)') : this.$table.find('th:not(.no-sort)');
        this.$sortCells.on('click.tablesort', function() {
            self.sort($(this));
        });
        this.index = null;
        this.$th = null;
        this.direction = null;
    };

    $.tablesort.prototype = {

        sort: function(th, direction) {
            var start = new Date(),
                self = this,
                table = this.$table,
                rowsContainer = table.find('tbody').length > 0 ? table.find('tbody') : table,
                rows = rowsContainer.find('tr').has('td, th'),
                cells = rows.find(':nth-child(' + (th.index() + 1) + ')').filter('td, th'),
                sortBy = th.data().sortBy,
                sortedMap = [];

            var unsortedValues = cells.map(function(idx, cell) {
                return $(this).data().sortValue;
            });
            if (unsortedValues.length === 0) return;

            //click on a different column
            if (this.index !== th.index()) {
                this.direction = 'asc';
                this.index = th.index();
            }
            else if (direction !== 'asc' && direction !== 'desc')
                this.direction = this.direction === 'asc' ? 'desc' : 'asc';
            else
                this.direction = direction;

            direction = this.direction == 'asc' ? 1 : -1;

            self.$table.trigger('tablesort:start', [self]);
            self.log("Sorting by " + this.index + ' ' + this.direction);

            // Try to force a browser redraw
            self.$table.css("display");
            // Run sorting asynchronously on a timeout to force browser redraw after
            // `tablesort:start` callback. Also avoids locking up the browser too much.
            setTimeout(function() {
                self.$sortCells.removeClass(self.settings.asc + ' ' + self.settings.desc);
                for (var i = 0, length = unsortedValues.length; i < length; i++)
                {
                    sortedMap.push({
                        index: i,
                        cell: cells[i],
                        row: rows[i],
                        value: unsortedValues[i]
                    });
                }

                sortedMap.sort(function(a, b) {
                    return self.settings.compare(a.value, b.value, direction) * direction;
                });

                $.each(sortedMap, function(i, entry) {
                    rowsContainer.append(entry.row);
                });

                th.addClass(self.settings[self.direction]);

                self.log('Sort finished in ' + ((new Date()).getTime() - start.getTime()) + 'ms');
                self.$table.trigger('tablesort:complete', [self]);
                //Try to force a browser redraw
                self.$table.css("display");
            }, unsortedValues.length > 2000 ? 200 : 10);
        },

        log: function(msg) {
            if(($.tablesort.DEBUG || this.settings.debug) && console && console.log) {
                console.log('[tablesort] ' + msg);
            }
        },

        destroy: function() {
            this.$sortCells.off('click.tablesort');
            this.$table.data('tablesort', null);
            return null;
        }

    };

    $.tablesort.DEBUG = false;

    $.tablesort.defaults = {
        debug: $.tablesort.DEBUG,
        asc: 'sorted ascending',
        desc: 'sorted descending',
        compare: function(a, b, direction) {
            if (a === "" || a === null) return direction === 1 ? 1 : -1;
            if (b === "" || b === null) return direction === 1 ? -1 : 1;
            if (a === b) return 0;
            return a < b ? -1 : 1;
        }
    };

    $.fn.tablesort = function(settings) {
        var table, sortable, previous;
        return this.each(function() {
            table = $(this);
            previous = table.data('tablesort');
            if(previous) {
                previous.destroy();
            }
            table.data('tablesort', new $.tablesort(table, settings));
        });
    };

})(window.Zepto || window.jQuery);
