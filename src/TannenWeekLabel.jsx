var React = require('react')
  , moment = require('moment');

var TannenWeekLabel = React.createClass({
  render: function() {
    var start_date = this.props.current_day.clone().startOf('week');
    var end_date = this.props.current_day.clone().endOf('week');

    return (
      <div className='label'>
        <span className='start_week'>
          <span className='month'>
            {start_date.format('MMM')}
          </span>
          {start_date.format('D')}
          {start_date.isSame(end_date, 'year') ? null : start_date.format(', YYYY')}
        </span>
        <span> - </span>
        <span className='end_week'>
          <span className='month'>
            {end_date.format('MMM')}
          </span>
          {end_date.format('D, YYYY')}
        </span>
      </div>
    )
  }
})

module.exports = TannenWeekLabel;
