// components/TaskDialog.js
import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import AddTasks from './AddTasks';
import '../styles/TaskTracker.css';

function TaskDialog({ open, onClose }) {
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
        <AddTasks />
      </DialogContent>
    </Dialog>
  );
}

export default TaskDialog;
