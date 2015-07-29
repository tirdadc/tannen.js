var React = require('react')
  , moment = require('moment')
  , TannenWeekdays = require('./TannenWeekdays')
  , TannenMonth = require('./TannenMonth')
  , TannenMonthLabel = require('./TannenMonthLabel')
  , TannenWeekLabel = require('./TannenWeekLabel');

require("../stylesheets/tannen.css.scss");

var Tannen = React.createClass({
  propTypes: {
    width:                    React.PropTypes.any,
    weekdays_alignment:       React.PropTypes.string,
    day_alignment:            React.PropTypes.string,
    previous_arrow:           React.PropTypes.string,
    next_arrow:               React.PropTypes.string,
    events:                   React.PropTypes.array,
    init_date:                React.PropTypes.string,
    view_mode:                React.PropTypes.string,
    view_mode_switch:         React.PropTypes.bool
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
      ],
      view_mode: 'month',
      view_mode_switch: true
    };
  },

  getInitialState: function() {
    return {
      month: this.props.init_date ? moment(this.props.init_date) : moment(),
      increment: this.props.view_mode == 'month' ? 'M' : 'w',
      view_mode: this.props.view_mode
    };
  },

  resetClick: function(e) {
    this.setState({
      month: moment()
    })
  },

  changeViewMode: function(e) {
    e.preventDefault();
    this.setState({
      increment: this.state.view_mode == 'month' ? 'w' : 'M',
      view_mode: this.state.view_mode == 'month' ? 'week' : 'month'
    })
  },

  previousClick: function(e) {
    this.setState({
      month: this.state.month.clone().subtract(1, this.state.increment)
    })
  },

  nextClick: function(e) {
    this.setState({
      month: this.state.month.clone().add(1, this.state.increment)
    })
  },

  render: function() {
    var main_label = this.state.view_mode == 'month' ?
      <TannenMonthLabel current_day={this.state.month} /> :
      <TannenWeekLabel current_day={this.state.month} />;

    var view_mode_switch = this.props.view_mode_switch ?
      <div className='switch_view_mode' onClick={this.changeViewMode}>{this.state.view_mode} view</div> :
      null;

    return (
      <div className={'calendar ' + this.state.view_mode} style={{"width" : this.props.width}}>
        <div className='top'>
          <div
            className='previous'
            onClick={this.previousClick}
            dangerouslySetInnerHTML={{__html: this.props.previous_label}}>
            </div>
          <div className='reset' onClick={this.resetClick}>Today</div>
          {view_mode_switch}
          <div
            className='next'
            onClick={this.nextClick}
            dangerouslySetInnerHTML={{__html: this.props.next_label}} />

          {main_label}
        </div>
        <TannenWeekdays
          day_alignment={this.props.weekdays_alignment} />
        <TannenMonth
          view_mode={this.state.view_mode}
          month={this.state.month}
          day_alignment={this.props.day_alignment}
          events={this.props.events}
          colors={this.props.event_colors} />
      </div>
    )
  }
})

module.exports = Tannen;
