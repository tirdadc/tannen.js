/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	console.info('main.js');
	var Tannen = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var moment = __webpack_require__(3);
	var TannenWeekdays = __webpack_require__(4);
	var TannenMonth = __webpack_require__(5);

	var Tannen = React.createClass({displayName: "Tannen",
	  propTypes: {
	    width:                    React.PropTypes.any,
	    weekdays_alignment:       React.PropTypes.string,
	    day_alignment:            React.PropTypes.string,
	    previous_arrow:           React.PropTypes.string,
	    next_arrow:               React.PropTypes.string,
	    events:                   React.PropTypes.array
	  },

	  getDefaultProps: function() {
	    return {
	      width: '100%',
	      weekdays_alignment: 'center',
	      day_alignment: 'right',
	      previous_label: '&#9664;',
	      next_label: '&#9654;',
	      event_colors: [
	        '#1678c2',
	        '#16ab39',
	        '#fbbd08',
	        '#2185d0',
	        '#6435c9',
	      ]
	    };
	  },

	  getInitialState: function() {
	    return {
	      month: moment()
	    };
	  },

	  resetClick: function(e) {
	    this.setState({
	      month: moment()
	    })
	  },

	  previousClick: function(e) {
	    this.setState({
	      month: this.state.month.clone().subtract(1, 'M')
	    })
	  },

	  nextClick: function(e) {
	    this.setState({
	      month: this.state.month.clone().add(1, 'M')
	    })
	  },

	  render: function() {
	    return (
	      React.createElement("div", {className: "calendar", style: {"width" : this.props.width}},
	        React.createElement("div", {className: "top"},
	          React.createElement("div", {
	            className: "previous",
	            onClick: this.previousClick,
	            dangerouslySetInnerHTML: {__html: this.props.previous_label}}
	            ),
	          React.createElement("div", {className: "reset", onClick: this.resetClick}, "Today"),
	          React.createElement("div", {
	            className: "next",
	            onClick: this.nextClick,
	            dangerouslySetInnerHTML: {__html: this.props.next_label}}),
	          React.createElement("div", {className: "label"},
	            React.createElement("span", {className: "month"},
	              this.state.month.format('MMMM')
	            ),
	            React.createElement("span", {className: "year"},
	              this.state.month.format('YYYY')
	            )
	          )

	        ),
	        React.createElement(TannenWeekdays, {
	          day_alignment: this.props.weekdays_alignment}),
	        React.createElement(TannenMonth, {
	          month: this.state.month,
	          day_alignment: this.props.day_alignment,
	          events: this.props.events,
	          colors: this.props.event_colors})
	      )
	    )
	  }
	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = moment;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var moment = __webpack_require__(3);

	var TannenWeekdays = React.createClass({displayName: "TannenWeekdays",
	  render: function() {
	    var weekdays = [];
	    var first_day = moment().startOf('week');

	    for (i = 0; i < 7; i++) {
	      weekdays.push(
	        React.createElement("div", {
	          key: i,
	          className: "day",
	          style: {'textAlign': this.props.day_alignment}},
	          first_day.clone().add(i, 'd').format('ddd')
	        )
	      )
	    }
	    return (
	      React.createElement("div", {className: "week header"},
	        weekdays
	      )
	    )
	  }
	})


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var moment = __webpack_require__(3);
	var TannenEvents = __webpack_require__(6);

	var TannenMonth = React.createClass({displayName: "TannenMonth",
	  propTypes: {
	    month:                    React.PropTypes.any,
	    day_alignment:            React.PropTypes.string,
	    day_margin_bottom:        React.PropTypes.string,
	    colors:                   React.PropTypes.array,
	    events:                   React.PropTypes.array
	  },

	  setPopups: function () {
	    // use Semantic UI popup if present
	    if (jQuery() && jQuery().popup) {
	      $('.event').popup({position: 'bottom left'});
	    }
	  },

	  componentDidMount: function() {
	    this.setPopups();
	  },

	  componentDidUpdate: function() {
	    this.setPopups();
	  },

	  render: function() {
	    var first_day = this.props.month.clone().startOf('month').startOf('week');
	    var last_day = this.props.month.clone().endOf('month').endOf('week');
	    var current_day = first_day.clone();
	    var current_month = false;
	    var weeks = [];
	    var titles = [];

	    while (current_day.isBefore(last_day)) {
	      var days = [];

	      for (i = 0; i < 7; i++) {
	        if (this.props.events) {
	          var current_day_formatted = current_day.format('YYYY-MM-DD');
	          var events_for_current_day = [];

	          for (j = 0; j < this.props.events.length; j++) {
	            var event = this.props.events[j];
	            if (current_day.isBetween(moment(event.start_date).subtract(1, 'd'), moment(event.end_date).add(1, 'd'), 'day')) {
	              if (titles.indexOf(event.title) == -1) {
	                titles.push(event.title);
	              }
	              events_for_current_day.push({
	                title: event.title,
	                content: event.content,
	                url: event.url
	              })
	            }
	          }
	        }

	        var divStyle = {
	          'textAlign': this.props.day_alignment,
	          'marginBottom': this.props.day_margin_bottom
	        };

	        days.push(
	          React.createElement("div", {
	            key: i,
	            className:
	              (i == 0 ? 'first ' : '') +
	              (current_day.isSame(this.props.month, 'month') ? '' : 'other_month ') +
	              (current_day.isSame(moment(), 'day') ? 'today ' : '') +
	              'day',
	            style: divStyle},
	            current_day.format('D'),
	            this.props.events ?
	              React.createElement(TannenEvents, {
	                colors: this.props.colors,
	                events: events_for_current_day,
	                titles: titles}) : null
	          )
	        )
	        current_day.add(1, 'd');
	      }
	      weeks.push(
	        React.createElement("div", {key: weeks.length, className: "week"},
	          days
	        )
	      );
	    }

	    return (
	      React.createElement("div", {className: "month"},
	        weeks
	      )
	    )
	  }
	})


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);

	var TannenEvents = React.createClass({displayName: "TannenEvents",
	  propTypes: {
	    events:                    React.PropTypes.array,
	    colors:                    React.PropTypes.array
	  },

	  render: function() {
	    if (!this.props.events.length) {
	      return null;
	    }
	    var events = [];
	    for (i = 0; i < this.props.events.length; i++) {
	      var caption = this.props.events[i].url ?
	        React.createElement("a", {href: this.props.events[i].url},
	          this.props.events[i].title
	        ) :
	        this.props.events[i].title;

	      events.push(
	        React.createElement("div", {
	          style: {'backgroundColor': this.props.colors[this.props.titles.indexOf(this.props.events[i].title)%this.props.colors.length]},
	          key: i,
	          className: "event",
	          "data-content": this.props.events[i].content},
	            caption
	        )
	      )
	    }
	    return (
	      React.createElement("div", {className: "events"},
	        events
	      )
	    )
	  }
	})


/***/ }
/******/ ]);