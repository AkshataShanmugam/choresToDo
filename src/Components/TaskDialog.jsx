// components/TaskDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import AddTask from './AddTask';
import '../styles/App.css';

function TaskDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ padding: "5px" }} className="dialog-heading">
        {/* Add New Task */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="dialog-content">
        <AddTask />
      </DialogContent>
    </Dialog>
  );
}

export default TaskDialog;
