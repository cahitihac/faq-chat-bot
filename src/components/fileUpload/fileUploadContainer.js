import React, { Component }   from 'react';

import FileUploadView         from './fileUploadView';
import api                    from '../../api/api';

class FileUploadContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isUploading: false,
            percentage: 0
        }
    }

    componentDidUpdate(prevProps) {
        const { isUploading } = this.props;

        if (!prevProps.isUploading && isUploading) {
            this.setState({ isUploading: true });
        } else if (prevProps.isUploading && !isUploading) {
            this.setState({
                isUploading: false,
                percentage: 0
            });
        }
    }

    render() {
        const { isUploading, percentage } = this.state;

        return (
            <FileUploadView
                showProgress={ isUploading }
                value={ percentage || 0 }
                handleUploadStart= { this._handleUploadStart.bind(this) }
            />
        );
    }

    _handleUploadStart(file) {
        const { accessKey } = this.props;

        const onUploadProgress = (progressEvent) => {
          this.setState({ percentage: Math.round( (progressEvent.loaded * 100) / progressEvent.total ) })
        };

        this.setState({ isUploading: true });

        const  data = new FormData();
        data.append('file', file);
        data.append('accessKey', accessKey);

        api.uploadFile(data, onUploadProgress).then(response => {
            console.log(response);
        }).catch(response => {
            console.log(response);
        }).finally(() => this.setState({ isUploading: false }));
    }
}

export default FileUploadContainer;