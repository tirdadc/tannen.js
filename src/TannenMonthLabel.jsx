var React = require('react')
  , moment = require('moment');

var TannenMonthLabel = React.createClass({
  render: function() {
    return (
      <div className='label'>
        <span className='month'>
          {this.props.current_day.format('MMMM')}
        </span>
        <span className='year'>
          {this.props.current_day.format('YYYY')}
        </span>
      </div>
    )
  }
})

module.exports = TannenMonthLabel;
