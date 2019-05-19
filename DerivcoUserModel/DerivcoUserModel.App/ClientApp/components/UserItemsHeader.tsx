import * as React from 'react'
import FlexCell from './FlexCell'

export default class UserItemsHeader extends React.Component<any, any> {
    render() {
        return <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
            <FlexCell colNo={0}>First Name</FlexCell>
            <FlexCell colNo={1}>Last Name</FlexCell>
            <FlexCell colNo={2}>Age</FlexCell>
            <FlexCell colNo={3}>Email</FlexCell>
            <FlexCell colNo={4}>Date of Birth</FlexCell>
            <FlexCell colNo={5}>Identity Number</FlexCell>
            <FlexCell colNo={6}>Address Line One</FlexCell>
            <FlexCell colNo={7}>Address Line Two</FlexCell>
            <FlexCell colNo={8}>City</FlexCell>
            <FlexCell colNo={9}>Country</FlexCell>
            <FlexCell colNo={10}>Postal Code</FlexCell>
            <FlexCell colNo={11}></FlexCell>
            <FlexCell colNo={12}></FlexCell>
        </div>
    }
}