import React, { Profiler } from 'react';
import { Link } from "react-router-dom";
// import './Filter.css';

import {Avatar, Box, Button, Card, CardContent, styled, Typography, List, ListItem,} from "@mui/material";


function Filter() {
  return (
    <Box sx={{boxSizing:"border-box", width: "180px", height: "350px", border: "1px solid #EAEAEA", borderRadius: "10px", background: "#FFFFFF" }}>
      {/* <nav aria-label="filter ideas">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav> */}
		</Box>
  )
}
export default Filter;