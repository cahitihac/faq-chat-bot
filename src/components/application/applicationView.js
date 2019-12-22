import React, { Component }       from 'react';
import clsx                       from 'clsx';
import { withStyles }             from '@material-ui/core/styles';
import CssBaseline                from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { getDrawerMenuListItems } from './menuListItems';
import FileUploadContainer from '../fileUpload/fileUploadContainer';
import applicationStyles from './styles';

class ApplicationView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      selectedMenuItemIndex: 0
    }
  }

  render () {
    const {
      classes,
      accessKey
    } = this.props;
    const {
      isDrawerOpen,
      selectedMenuItemIndex
    } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, isDrawerOpen && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this._handleDrawerOpenCLose.bind(this, true)}
              className={clsx(classes.menuButton, isDrawerOpen && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !isDrawerOpen && classes.drawerPaperClose),
          }}
          open={isDrawerOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this._handleDrawerOpenCLose.bind(this, false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{getDrawerMenuListItems(selectedMenuItemIndex, this._handleClickOnMenuListItem.bind(this))}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container justify='center' maxWidth="lg" className={classes.container}>
            <Grid justify='center' container>
              <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
                <FileUploadContainer accessKey={ accessKey } />
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }

  _handleDrawerOpenCLose(value) {
    this.setState({ isDrawerOpen: value });
  }

  _handleClickOnMenuListItem(itemIndex) {
    this.setState({
      selectedMenuItemIndex: itemIndex
    });
  }
}

export default withStyles(applicationStyles)(ApplicationView);
