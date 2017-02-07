require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import MuiThemeProvider, {getMuiTheme} from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Bar from './templates/Bar';
import Content from './templates/Content';
import Drawer from './templates/Drawer';

//import Drawer from 'material-ui/Drawer';
//import MenuItem from 'material-ui/MenuItem';

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider >
        <div>
          <Bar />
          <Drawer/>
          <Content />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default AppComponent;