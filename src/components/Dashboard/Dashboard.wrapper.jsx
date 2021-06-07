import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import {useHistory, withRouter} from "react-router-dom";
import Typography from '@material-ui/core/Typography';


class DashboardWrapper extends PureComponent {

  constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
      }
      
    handleLogout() {
        const {actions,history} = this.props;
        actions.logout();
        history.push('/login');
    }

  render() {
    const {data}=this.props;
    return (
      <div>
        <Typography variant="h5" component="h2">{data.username} Logged in</Typography><br/>
          <Button style={{width:"50vw"}} onClick={this.handleLogout} variant="contained" color="primary">
        LOGOUT
        </Button>
      </div>
    );
  }
}

export default withRouter(DashboardWrapper);