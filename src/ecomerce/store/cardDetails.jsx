import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({ cartData }) {
  console.log(cartData, "cartdata");
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cartData.map((item, i) => ( // Changed v to item
          <div key={i}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar style={{padding: 10}}>
                <Avatar style={{
                width:"70px",height:"70px",objectFit:"contain",
                gap:"10px"
              }} src={item.image} /> 
              </ListItemAvatar>
              <ListItemText
                primary={item.title} 
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                     Rs {item.price}   Quantity {item.qty}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </>
  );
}
