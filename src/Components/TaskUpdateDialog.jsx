// components/TaskDialog.js
import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import UpdateTask from './UpdateTask';
import '../styles/TaskTracker.css';

export default function TaskUpdateDialog({ open, onClose, taskDetails}) {
    return (
        <Dialog open={open} onClose={onClose}>
        <DialogContent className="dialog-content">
            <IconButton
            aria-label="close"
            onClick={onClose}
            style={{ position: 'absolute', top: 0, right: 0, color: "white" }}
            >
            <CloseIcon />
            </IconButton>
            <UpdateTask props={taskDetails}/>
        </DialogContent>
        </Dialog>
    );
}

