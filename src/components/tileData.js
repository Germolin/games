import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router';

export const mailFolderListItems = (
  <div>
      <Link to={'/'}>
        <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="slash" />
        </ListItem>
      </Link>

       <Link to={'/profile'}>
        <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
      </Link>
   

  </div>
);

export const otherMailFolderListItems = (
  <div>
      <Link>
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
        </ListItem>
      </Link>

  </div>
);