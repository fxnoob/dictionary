/* eslint-disable react/prop-types */
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { t } from "../services/helper";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    textAlign: "center",
    color: "#081f43",
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ButtonAppBar = props => {
  const { classes } = props;
  const appName = t("appName"); 
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "#ffffff", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            {appName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(ButtonAppBar);
