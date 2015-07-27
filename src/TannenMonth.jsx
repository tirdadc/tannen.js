var React = require('react');
var moment = require('moment');
var TannenEvents = require('./TannenEvents');

var TannenMonth = React.createClass({
  propTypes: {
    month:                    React.PropTypes.any,
    day_alignment:            React.PropTypes.string,
    day_margin_bottom:        React.PropTypes.string,
    colors:                   React.PropTypes.array,
    events:                   React.PropTypes.array
  },

  setPopups: function () {
    // use Semantic UI popup if present
    if (typeof jQuery !== 'undefined'  && jQuery().popup) {
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
          <div
            key={i}
            className={
              (i == 0 ? 'first ' : '') +
              (current_day.isSame(this.props.month, 'month') ? '' : 'other_month ') +
              (current_day.isSame(moment(), 'day') ? 'today ' : '') +
              'day'}
            style={divStyle}>
            {current_day.format('D')}
            {this.props.events ?
              <TannenEvents
                colors={this.props.colors}
                events={events_for_current_day}
                titles={titles} /> : null}
          </div>
        )
        current_day.add(1, 'd');
      }
      weeks.push(
        <div key={weeks.length} className='week'>
          {days}
        </div>
      );
    }

    return (
      <div className='month'>
        {weeks}
      </div>
    )
  }
})

module.exports = TannenMonth;
