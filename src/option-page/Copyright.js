import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Constants from '../../constants';
export default function Copyright() {
  const extUrl = Constants.appConfig.url;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={extUrl}>
        English Dictionary Offline
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
