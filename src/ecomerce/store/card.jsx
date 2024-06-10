import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactStars from "react-rating-stars-component";
import Chip from '@mui/material/Chip';


import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard({ detail }) {
    //   const theme = useTheme();
    console.log(detail.id,"dis")

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151, objectFit: "contain" }}
                image={detail.image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {detail.title
                        }          </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {detail.description
                        }        </Typography>
                    <div>
                    <ReactStars
                            count={5}
                            onChange={detail.ratingChanged}
                            size={24}
                            activeColor="#ffd700"

                        /></div> 
                        <div>
                        <Chip label={detail.category} style={{
                            marginTop: "5px",
                            marginBottom:"5px"
                        }}/>
                        </div>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Rs {detail.price
                        }/-          </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <button className="addtocard" >Add to Card</button>
                    </Typography>
                </CardContent>


            </Box>

        </Card>
    );
}
