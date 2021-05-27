import moment from 'moment';

export const checkOpenNow = (openTime: string, closeTime: string) => {
  const open = openTime.split(':');
  const close = closeTime.split(':');
  const now = moment(new Date()).format('HH:mm:ss').split(':');
  const [openH] = open;
  const [closeH, closeM] = close;
  const [nowH, nowM] = now;

  if (nowH >= openH && nowH < closeH) {
    return true;
  } else if (nowH === closeH && nowM < closeM) {
    return true;
  } else {
    return false;
  }
};
