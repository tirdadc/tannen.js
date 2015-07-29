var React = require('react')
  , Tannen = require('../src/Tannen');

React.render(
  <Tannen
    init_date='2015-07-01'
    events={[
      {
        start_date: '2015-07-22',
        end_date: '2015-07-28',
        title: 'Bully George McFly',
        description: 'This will show up in a tooltip if a library like Semantic UI is detected.',
        url: 'http://www.example.com'
      },
      {
        start_date: '2015-07-24',
        end_date: '2015-07-24',
        title: 'Hang out at Cafe 80\'s'
      },
      {
        start_date: '2015-07-05',
        end_date: '2015-07-10',
        title: 'Recover almanac'
      },
      {
        start_date: '2015-07-24',
        end_date: '2015-07-27',
        title: 'Borrow DeLorean'
      },
      {
        start_date: '2015-07-25',
        end_date: '2015-07-25',
        title: 'Bully Marty McFly'
      }
    ]}/>,
  document.getElementById('tannen-example')
);

React.render(
  <Tannen
    init_date='1958-03-26'
    view_mode='week'
    view_mode_switch={false}
    events={[
      {
        start_date: '1958-03-26',
        end_date: '1958-03-26',
        title: 'Get Grays Sports Almanac'
      }
    ]}/>,
  document.getElementById('tannen-example2')
);