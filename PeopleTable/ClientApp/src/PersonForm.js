import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop:45}}>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="First Name" onChange={this.props.onFirstNameChange} value={this.props.firstNameValue} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={this.props.onLastNameChange} value={this.props.lastNameValue} />
                    </div>
                    <div className="col-md-2">
                        <input type="text" className="form-control" placeholder="Age" onChange={this.props.onAgeChange} value={this.props.ageValue} />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.props.AddPerson}>Add Person</button>
                    </div>
                    <div className="col-md-2">   
                        <button className="btn btn-primary" onClick={this.props.ClearTable}>Clear Table</button>
                   </div>
                </div>
            </div>
        );
    }
}

export default PersonForm;