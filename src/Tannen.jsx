var React = require('react');
var moment = require('moment');
var TannenWeekdays = require('./TannenWeekdays');
var TannenMonth = require('./TannenMonth');

var Tannen = React.createClass({
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
      <div className='calendar' style={{"width" : this.props.width}}>
        <div className='top'>
          <div
            className='previous'
            onClick={this.previousClick}
            dangerouslySetInnerHTML={{__html: this.props.previous_label}}>
            </div>
          <div className='reset' onClick={this.resetClick}>Today</div>
          <div
            className='next'
            onClick={this.nextClick}
            dangerouslySetInnerHTML={{__html: this.props.next_label}} />
          <div className='label'>
            <span className='month'>
              {this.state.month.format('MMMM')}
            </span>
            <span className='year'>
              {this.state.month.format('YYYY')}
            </span>
          </div>

        </div>
        <TannenWeekdays
          day_alignment={this.props.weekdays_alignment} />
        <TannenMonth
          month={this.state.month}
          day_alignment={this.props.day_alignment}
          events={this.props.events}
          colors={this.props.event_colors} />
      </div>
    )
  }
})

module.exports = Tannen;
