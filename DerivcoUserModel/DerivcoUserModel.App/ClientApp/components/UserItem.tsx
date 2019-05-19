import * as React from 'react';
import User from '../models/User'
import FlexCell from './FlexCell';
import InputDelayOnChange from './InputDelayOnChange';
import UserForm from './UserForm'

type UserItemProps = {
    user: User,
    updateComment: (comment: string) => void
    requestUpdateUser: (user: User) => void
    requestDeleteUser: (user: User) => void
}

type UserItemState = {
    isEditing: boolean
}

export default class UserItem extends React.Component<UserItemProps, UserItemState> {
    constructor(props: any) {
        super(props)

        this.state = {
            isEditing: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(user: User) {
        this.props.requestUpdateUser(user)
        this.setState({ isEditing: false })
    }

    render() {
        return <div>
                <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                
                <FlexCell colNo={0}>{this.props.user.firstName}</FlexCell>
                <FlexCell colNo={1}>{this.props.user.lastName}</FlexCell>
                <FlexCell colNo={2}>{this.props.user.age}</FlexCell>
                <FlexCell colNo={3}>{this.props.user.email}</FlexCell>
                <FlexCell colNo={4}>{this.props.user.dateOfBirth}</FlexCell>
                <FlexCell colNo={5}>{this.props.user.identityNumber}</FlexCell>
                <FlexCell colNo={6}>{this.props.user.address && this.props.user.address.lineOne}</FlexCell>
                <FlexCell colNo={7}>{this.props.user.address && this.props.user.address.lineTwo}</FlexCell>
                <FlexCell colNo={8}>{this.props.user.address && this.props.user.address.city}</FlexCell>
                <FlexCell colNo={9}>{this.props.user.address && this.props.user.address.country}</FlexCell>
                <FlexCell colNo={10}>{this.props.user.address && this.props.user.address.postalCode}</FlexCell>
                <FlexCell colNo={11}><button onClick={() => this.setState({ isEditing: !this.state.isEditing })}>Edit</button></FlexCell>
                <FlexCell colNo={12}><button onClick={() => this.props.requestDeleteUser(this.props.user)}> Delete</button></FlexCell>
            </div>
            {this.state.isEditing && <UserForm existingUser={this.props.user} submit={this.handleSubmit} />}
        </div>
     }
}
