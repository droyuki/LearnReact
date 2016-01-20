import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['appName', 'dataType', 'framework','notes'];

class SimpleForm extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    };


    render() {
        const {
            fields: {appName, dataType, framework, notes},
            handleSubmit,
            resetForm,
            submitting
            } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>App Name</label>
                    <div>
                        <input type="text" placeholder="App Name" {...appName}/>
                    </div>
                </div>
                <div>
                    <label>Data Type</label>
                    <div>
                        <label>
                            <input type="radio" {...dataType} value="stream" checked={dataType.value === 'stream'}/> Stream
                        </label>
                        <label>
                            <input type="radio" {...dataType} value="nonStream" checked={dataType.value === 'nonStream'}/> Non-Stream
                        </label>
                    </div>
                </div>
                <div>
                    <label>Service Framework</label>
                    <div>
                        <select {...framework} defaultValue="none">
                            <option></option>
                            <option value="spark">Spark</option>
                            <option value="storm">Storm</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <textarea
                            {...notes}
                            value={notes.value || ''} // required for reset form to work (only on textarea's)
                            // see: https://github.com/facebook/react/issues/2533
                        />
                    </div>
                </div>
                <div>
                    <button disabled={submitting} onClick={handleSubmit}>
                        {submitting ? <i/> : <i/>} Submit
                    </button>
                    <button disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'simple',
    fields
})(SimpleForm);