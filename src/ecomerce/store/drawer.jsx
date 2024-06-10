import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AlignItemsList from './cardDetails';

export default function AnchorTemporaryDrawer({ open, setOpen,cartData }) {

    return (
        <div>
            <React.Fragment >
                <Drawer 
                   anchor='right'
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box role="presentation">
                     <AlignItemsList cartData={cartData}/>
                    </Box>
                </Drawer>
            </React.Fragment>

        </div>
    );
}
