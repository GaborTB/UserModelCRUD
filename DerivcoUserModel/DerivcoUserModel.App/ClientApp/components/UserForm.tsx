import * as React from 'react'
import User from '../models/User'
import { UserFormField } from '../models/UserFormFields'
import FlexCell from './FlexCell'
import InputDelayOnChange from './InputDelayOnChange'

type UserFormProps = {
    existingUser: User,
    submit: (user: User) => void
}

type UserFormState = {
    user: User
}

export default class UserForm extends React.Component<UserFormProps, UserFormState> {
    constructor(props: any) {
        super(props)
        this.state = {
            user: { ...this.props.existingUser }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e: any, editedField: UserFormField) {
        const value = e.target.value

        switch (editedField) {
            case UserFormField.firstName:
                this.setState({ user: { ...this.state.user, firstName: value } })
                break
            case UserFormField.lastName:
                this.setState({ user: { ...this.state.user, lastName: value } })
                break
            case UserFormField.age:
                this.setState({ user: { ...this.state.user, age: value } })
                break
            case UserFormField.email:
                this.setState({ user: { ...this.state.user, email: value } })
                break
            case UserFormField.dateOfBirth:
                this.setState({ user: { ...this.state.user, dateOfBirth: value } })
                break
            case UserFormField.identityNumber:
                this.setState({ user: { ...this.state.user, identityNumber: value } })
                break
            case UserFormField.lineOne:
                this.setState({ user: { ...this.state.user, address: { ...this.state.user.address && this.state.user.address, lineOne: value } } })
                break
            case UserFormField.lineTwo:
                this.setState({ user: { ...this.state.user, address: { ...this.state.user.address && this.state.user.address, lineTwo: value } } })
                break
            case UserFormField.city:
                this.setState({ user: { ...this.state.user, address: { ...this.state.user.address && this.state.user.address, city: value } } })
                break
            case UserFormField.country:
                this.setState({ user: { ...this.state.user, address: { ...this.state.user.address && this.state.user.address, country: value } } })
                break
            case UserFormField.postalCode:
                this.setState({ user: { ...this.state.user, address: { ...this.state.user.address && this.state.user.address, postalCode: value } } })
                break
            default:
                break
        }
    }

    handleSubmit(e: any) {
        //alert('A name was submitted: ' + this.state.user.toString())
        this.props.submit(this.state.user)
        e.preventDefault()
    }

    componentWillMount() {
       //this.setState({ shadowComment: this.props.user.comment })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" value={this.state.user.firstName || ''} onChange={(e) => this.handleChange(e, UserFormField.firstName)} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" value={this.state.user.lastName || ''} onChange={(e) => this.handleChange(e, UserFormField.lastName)} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={this.state.user.age || ''} onChange={(e) => this.handleChange(e, UserFormField.age)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" value={this.state.user.email || ''} onChange={(e) => this.handleChange(e, UserFormField.email)} />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="text" className="form-control" value={this.state.user.dateOfBirth || ''} onChange={(e) => this.handleChange(e, UserFormField.dateOfBirth)} />
                </div>
                <div className="form-group">
                    <label>Identity Number</label>
                    <input type="text" className="form-control" value={this.state.user.identityNumber || ''} onChange={(e) => this.handleChange(e, UserFormField.identityNumber)} />
                </div>
                <div className="form-group">
                    <label>Address Line One</label>
                    <input type="text" className="form-control" value={this.state.user.address && this.state.user.address.lineOne || ''} onChange={(e) => this.handleChange(e, UserFormField.lineOne)} />
                </div>
                <div className="form-group">
                    <label>Address Line Two</label>
                    <input type="text" className="form-control" value={this.state.user.address && this.state.user.address.lineTwo || ''} onChange={(e) => this.handleChange(e, UserFormField.lineTwo)} />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" value={this.state.user.address && this.state.user.address.city || ''} onChange={(e) => this.handleChange(e, UserFormField.city)} />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" value={this.state.user.address && this.state.user.address.country || ''} onChange={(e) => this.handleChange(e, UserFormField.country)} />
                </div>
                <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" className="form-control" value={this.state.user.address && this.state.user.address.postalCode || ''} onChange={(e) => this.handleChange(e, UserFormField.postalCode)} />
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}
