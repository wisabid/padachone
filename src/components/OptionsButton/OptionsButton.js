import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


// const options = ['Times Onboard', 'Near by Mosques', 'Maps'];

export default function SplitButton({options, setPage, menuOptIcon}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleClick(index) {
    // alert(`You clicked ${options[selectedIndex].opt}`);
    setPage(options[index].page)
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
    setPage(options[index].page)
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="Split button">
          <Button style={{color:'#fff', fontWeight: 'bold'}} onClick={() => handleClick(selectedIndex)}>{options[selectedIndex].opt}</Button>
          <Button
            style={{color:'#fff', fontWeight: 'bold'}}
            color="primary"
            variant="contained"
            size="small"
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          > {menuOptIcon}
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={`${index}-${option}`}
                        disabled={index === 2 || index === 1}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option.opt}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}