import React, { Component }     from 'react';
import { withStyles }           from '@material-ui/core/styles';
import Button                   from '@material-ui/core/Button';
import LinearProgress           from '@material-ui/core/LinearProgress';
import CloudUploadIcon          from '@material-ui/icons/CloudUpload';

class FileUploadView extends Component {
  render() {
    const {
      classes,
      handleUploadStart,
      showProgress,
      value
    } = this.props;

    return (
        <React.Fragment>
            <input
                accept='*'
                className={ classes.input }
                id='contained-button-file'
                type='file'
                onChange={ (e) => {
                    handleUploadStart(e.target.files[0]);
                } }
            />
            <label htmlFor='contained-button-file'>
                <Button color='secondary' variant='contained' component='span' disabled={showProgress}>
                    Select File to Upload
                    <CloudUploadIcon className={ classes.rightIcon } />
                </Button>
            </label>
            {showProgress && <LinearProgress
                color='secondary'
                variant='determinate'
                value={ value }
                className={ classes.progress }
            />}
        </React.Fragment>
    );
  }
}

const fileUploadStyles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  rightIcon: {
      marginLeft: theme.spacing(1)
  },
  progress: {
      marginTop: theme.spacing(3)
  }
});

export default withStyles(fileUploadStyles)(FileUploadView);