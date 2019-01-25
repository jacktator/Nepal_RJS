// eslint-disable-next-line import/prefer-default-export
export const styles = theme => ({
  root: {
    width: '100%',
    padding: '0 5px 0 5px',
  },
  listItemPaper: {
    height: '30vmin',
    width: '100%',
    backgroundColor: theme.ListItem.backgroundColor,
  },
  itemleft: {
    width: '60%',
    minWidth: '50px',
    height: '100%',
  },
  itemRight: {
    width: '40%',
    height: '100%',
  },
  picturePlaceholder: {
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
  },
  infoListItem: {
    margin: '10px 0 10px 0',
    backgroundColor: theme.ListItem.backgroundColor,
  },
  midPaper: {
    width: '100%',
  },
});
