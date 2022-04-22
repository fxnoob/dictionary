import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Constants from "../../constants";
import i18n from "../services/i18nService";

const queryString = require("query-string");
const parsed = queryString.parse(location.search);
const utm = decodeURIComponent(parsed.utm ? parsed.utm : "");

export default function PremiumModel() {
  const [showDonation, setShowDonation] = React.useState(utm === "premium");
  const labelPayoneTimeFee = i18n.getMessage('labelPayoneTimeFee'); // Pay one time fee!
  // eslint-disable-next-line max-len
  const labelPriceIncludingTexes = i18n.getMessage('labelPriceIncludingTexes'); // Price including all taxes
  // eslint-disable-next-line max-len
  const trialEndDesc = i18n.getMessage('trialEndDesc'); // your first 50 definition searches are used, please pay one time fee to continue using this tool for a lifetime.
  const labelPay = i18n.getMessage('labelPay'); // Pay
  const labelCancel = i18n.getMessage('labelCancel'); // cancel
  const handleDonation = (state) => () => {
    if (state == "pay") {
      window.location.href = Constants.support.premium;
    }
    setShowDonation(false);
  };
  return (
    <div>
      <Dialog
        fullScreen={false}
        open={showDonation}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <span style={{ fontWeight: '700' }}>{labelPayoneTimeFee}</span>
          <br/>
          {labelPriceIncludingTexes}: {Constants.pricing.label}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {trialEndDesc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* eslint-disable-next-line max-len */}
          <Button onClick={handleDonation('pay')} color="primary" style={{ background: 'grey', color: 'white', fontWeight: 500 }}>
            {labelPay}
          </Button>
          <Button onClick={handleDonation('cancel')} color="secondary">
            {labelCancel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
