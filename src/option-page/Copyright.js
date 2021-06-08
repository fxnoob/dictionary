import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Constants from '../../constants';
import { t } from "../services/helper";
export default function Copyright() {
  const extUrl = Constants.appConfig.url;
  const appName = t("appName");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={extUrl}>
        {appName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
