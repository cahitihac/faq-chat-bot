// REACT
import React                  from 'react';

// MATERIAL-UI COMPONENTS
import ListItem               from '@material-ui/core/ListItem';
import ListItemIcon           from '@material-ui/core/ListItemIcon';
import ListItemText           from '@material-ui/core/ListItemText';

// MATERIAL-UI ICONS
import LinkIcon               from '@material-ui/icons/Link';
// import ImageIcon              from '@material-ui/icons/Image';
// import MoodBadIcon            from '@material-ui/icons/MoodBad';

export const getDrawerMenuListItems = (selectedIndex, handleOnItemClick) => (
    <div>
      <ListItem button selected={ selectedIndex === 0 } onClick={ handleOnItemClick.bind(this, 0) }>
        <ListItemIcon>
          <LinkIcon />
        </ListItemIcon>
        <ListItemText primary='Quick Links' />
      </ListItem>
      {/* <ListItem button selected={ selectedIndex === 1 } onClick={ handleOnItemClick.bind(this, 1) }>
        <ListItemIcon>
          <MoodBadIcon />
        </ListItemIcon>
        <ListItemText primary='Doodles' />
      </ListItem>
      <ListItem button selected={ selectedIndex === 2 } onClick={ handleOnItemClick.bind(this, 2) }>
        <ListItemIcon>
          <ImageIcon />
        </ListItemIcon>
        <ListItemText primary='CDN' />
      </ListItem> */}
    </div>
);