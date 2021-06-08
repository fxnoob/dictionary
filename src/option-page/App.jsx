import { useEffect } from 'react';
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
import useStorage from "../hooks/useStorage";
import LanguageOptions from "../components/LanguageOptions";
import { t } from "../services/helper";

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
  const [color, setColor] = useStorage("popupSkinColor");
  const [showPopup, setShowPopup] = useStorage("popup");
  const [wikipediaLookup, setWikipediaLookup] = useStorage("wikitionaryAllowed");
  const [language, setLanguage] = useStorage("langId");
  const labelMyLanguage = t("labelMyLanguage"); // My language
  const labelDictPopup = t("labelDictPopup"); // Dictionary pop-up
  const labelFallbackToWiki = t("labelFallbackToWiki"); // Fallback to wikipedia definitions
  const labelPopupSkin = t("labelPopupSkin"); // Pop-up Skin

  const init = async () => {
    const { popupSkinColor, popup } = await db.get("popupSkinColor", "popup");
    setColor(popupSkinColor);
    setShowPopup(popup);
  };

  useEffect(() => {
    init().catch(() => {});
  }, []);

  const toggle = (handler, value) => () => {
    const invert = !value;
    handler(invert);
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
            <ListItemText id="switch-list-label-commands"
              primary={labelMyLanguage} />
            <ListItemSecondaryAction>
              <LanguageOptions
                style={{ height: '2rem', border: '2px solid gray', borderRadius: '.3rem' }}
                value={language}
                onChange={evt => setLanguage(evt.target.value)}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LaptopWindowsIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-commands" primary={labelDictPopup} />
            <ListItemSecondaryAction>
              <Switch
                checked={showPopup}
                onChange={toggle(setShowPopup, showPopup)}
                inputProps={{ 'aria-label': 'Set Dictionary popup visibility on webpage.' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LaptopWindowsIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-commands"
              primary={labelFallbackToWiki} />
            <ListItemSecondaryAction>
              <Switch
                checked={wikipediaLookup}
                onChange={toggle(setWikipediaLookup, wikipediaLookup)}
                inputProps={{ 'aria-label': 'Set Dictionary popup visibility on webpage.' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-commands" primary={labelPopupSkin} />
            <ListItemSecondaryAction
              styles={{ flexDirection: 'row-reverse', marginRight: '-2rem' }}>
              <div style={{ marginRight: '-2rem' }}>
                <CirclePicker
                  styles={{ flexDirection: 'row-reverse' }}
                  color={ color }
                  onChangeComplete={ (color) => setColor(color.hex) }
                  colors={Constants.contentScript.popupSkinColors}/>
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
