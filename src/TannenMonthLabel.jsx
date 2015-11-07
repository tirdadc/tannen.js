var React = require('react')
  , moment = require('moment');

var TannenMonthLabel = React.createClass({
  render: function() {
    return (
      <div className='label'>
        <span className='small month'>
          {this.props.current_day.format('MMM')}
        </span>
        <span className='medium month'>
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
