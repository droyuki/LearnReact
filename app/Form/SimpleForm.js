import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['appName', 'dataType', 'framework'];

import { Button, ButtonGroup,Input,Label } from 'react-bootstrap';
class SimpleForm extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    };


    render() {
        const {
            fields: {appName, dataType, framework},
            handleSubmit,
            resetForm,
            submitting
            } = this.props;
        return (
            <div>

                <div className="container">
                    <h2 className="cs">Create Service <span className="badge alert-info" pullRight="true">Beta</span></h2>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>App Name</label>
                            <div>
                                <Input type="text" placeholder="App Name" {...appName}/>
                            </div>
                        </div>
                        <div>
                            <label>Data Type</label>
                            <div>
                                <label>
                                    <Input type="radio" {...dataType} value="stream"
                                           checked={dataType.value === 'stream'}
                                           label="Stream"/>

                                </label>&nbsp;&nbsp;&nbsp;
                                <label>
                                    <Input type="radio" {...dataType} value="nonStream"
                                           checked={dataType.value === 'nonStream'} label=" Non-Stream"/>

                                </label>
                            </div>
                        </div>
                        <div>
                            <label>Service Framework</label>
                            <div>
                                <Input type="select" {...framework} defaultValue="none">
                                    <option value="spark">Spark</option>
                                    <option value="storm">Storm</option>
                                    <option value="none">None</option>
                                </Input>
                            </div>
                        </div>
                        <ButtonGroup className="btn" vertical block>
                                <Button disabled={submitting} onClick={handleSubmit} bsStyle="info" className="btn">
                                    {submitting ? <i/> : <i/>} Submit
                                </Button>
                                <Button disabled={submitting} onClick={resetForm} bsStyle="default" className="btn">
                                    Clear Values
                                </Button>
                        </ButtonGroup>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'simple',
    fields
})(SimpleForm);