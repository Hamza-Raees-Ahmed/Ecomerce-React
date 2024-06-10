import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import ActionAreaCard from './card';
import MediaControlCard from '../store/card';
import { height } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid rgb(29, 169, 74)',
    boxShadow: 24,
    // height:200
      borderRadius:10,
};

export default function BasicModal({ handleClose, open,detail }) {

// console.log(detail,"details aiii")
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <MediaControlCard detail={detail} />
                </Box>
            </Modal>
        </div>
    );
}
