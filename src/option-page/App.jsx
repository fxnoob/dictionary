import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import ListSubheader from '@material-ui/core/ListSubheader';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { CirclePicker } from 'react-color';
import db from "../services/dbService";
import Copyright from "./Copyright";
import Constants from "../../constants";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '450px',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Settings() {
  const classes = useStyles();
  const [color, setColor] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  const init = async () => {
    const { popupSkinColor, popup } = await db.get("popupSkinColor", "popup");
    setColor(popupSkinColor);
    setShowPopup(popup);
  };

  useEffect(() => {
    init().catch(() => {});
  }, []);

  const handlePopupVisibilityChange = async () => {
    const visibility = !showPopup;
    await db.set({ popup: visibility });
    setShowPopup(visibility);
  };
  const handleColorChange = (color) => {
    setColor(color.hex);
    db.set({ popupSkinColor: color.hex });
  };
  return (
    <>
      <Navbar/>
      <div className={classes.root}>
        <CssBaseline/>
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <LaptopWindowsIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-commands" primary="Dictionary popup" />
            <ListItemSecondaryAction>
              <Switch
                checked={showPopup}
                onChange={handlePopupVisibilityChange}
                inputProps={{ 'aria-label': 'Set Dictionary popup visibility on webpage.' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-commands" primary="Popup Skin" />
            <ListItemSecondaryAction
              styles={{ flexDirection: 'row-reverse', marginRight: '-2rem' }}>
              <div style={{ marginRight: '-2rem' }}>
                <CirclePicker
                  styles={{ flexDirection: 'row-reverse' }}
                  color={ color }
                  onChangeComplete={ handleColorChange }
                  colors={["#8ED1FC", "#C4DEF6", "#C1E1C5", "#FAD0C3", "#FEF3BD",]}/>
              </div>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ButtonGroup variant="text" color="primary" aria-label="Support and Donate">
            <Button href={Constants.support.uninstallFeedbackForm}>Website</Button>
            <Button target="_blank" href={Constants.support.donate}>Donate</Button>
            <Button href={Constants.support.howToVideoLink}>Youtube</Button>
          </ButtonGroup>
        </div>
        <Copyright/>
      </div>
    </>
  );
}
