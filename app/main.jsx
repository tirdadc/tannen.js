var React = require('react')
  , Tannen = require('../src/Tannen');

React.render(
  <Tannen
    init_date='2015-07-01'
    events={[
      {
        start_date: '2015-07-22',
        end_date: '2015-07-28',
        title: 'Event A',
        content: 'This will show up in a tooltip if a library like Semantic UI is detected.',
        url: 'http://www.example.com'
      },
      {
        start_date: '2015-07-24',
        end_date: '2015-07-24',
        title: 'Event B'
      },
      {
        start_date: '2015-07-05',
        end_date: '2015-07-10',
        title: 'Event C'
      },
      {
        start_date: '2015-07-24',
        end_date: '2015-07-27',
        title: 'Event D'
      },
      {
        start_date: '2015-07-25',
        end_date: '2015-07-25',
        title: 'Event E'
      }
    ]}/>,
  document.getElementById('tannen-example')
);

React.render(
  <Tannen
    init_date='1998-03-26'
    view_mode='week'
    view_mode_switch={false}
    events={[
      {
        start_date: '1998-03-26',
        end_date: '1998-03-26',
        title: 'Event F'
      }
    ]}/>,
  document.getElementById('tannen-example2')
);