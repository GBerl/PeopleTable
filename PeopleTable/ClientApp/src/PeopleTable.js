import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        firstName: '',
        lastName: '',
        age: '',
        olderThan65: ''
    }
    setFirstName = e => {
        this.setState({ firstName: e.target.value })
    }
    setLastName = e => {
        this.setState({ lastName: e.target.value })
    }
    setAge = e => {
        if (e.target.value > 65) {
            this.setState({ olderThan65: 'danger' })
        }
        this.setState({ age: e.target.value })
    }
    AddPerson = () => {
        const person = {
            firstName: (this.state.firstName),
            lastName: (this.state.lastName),
            age: (this.state.age),
            olderThan65: (this.state.olderThan65),
        }
        const peopleCopy = [...this.state.people, person];
        this.setState({ people: peopleCopy, firstName: '', lastName: '', age: '', olderThan65:'' });

    }
    ClearTable = () => {
        const peopleCopy = [];
        this.setState({ people: peopleCopy });

    }

    render() {

        return (
            <div className="container">
                <PersonForm
                    AddPerson={this.AddPerson}
                    onFirstNameChange={this.setFirstName}
                    onLastNameChange={this.setLastName}
                    onAgeChange={this.setAge}
                    ClearTable={this.ClearTable}
                    firstNameValue={this.state.firstName}
                    lastNameValue={this.state.lastName}
                    ageValue={this.state.age}

                />
                <table className="table table-bordered table-striped table-hover" style={{ marginTop: 45 }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person, i) => <PersonRow person={person} />)}
                    </tbody>
                </table>

            </div>
        )
    }

}

export default PeopleTable;
