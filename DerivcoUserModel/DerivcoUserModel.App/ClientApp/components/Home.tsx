import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ReduxStore from '../store/ReduxStore';
import UserItem from './UserItem'
import UserItemsHeader from './UserItemsHeader';
import User from '../models/User'
import UserForm from './UserForm';

type HomeProps =
    ReduxStore.ReduxState
    & typeof ReduxStore.actionCreators
    & RouteComponentProps<{}>;

interface HomeState {
    isNewUserFormOpen: boolean
}

export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props)

        this.state = {
            isNewUserFormOpen: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.props.requestGetUsers()
    }

    handleSubmit(user: User) {
        this.props.requestUpdateUser(user)
        this.setState({isNewUserFormOpen: false})
    }

    public render() {
        var newUser: User = new User();

        return <div>
            <div className="main-container">
                <h2 className="title">Gabor Szekeres - Derivco Assessment</h2>
                {!this.state.isNewUserFormOpen &&
                    <div className="section-container">
                        <div className="section-header">
                            <UserItemsHeader />
                        </div>
                        <div className="section-body">
                            <div className="content-container">
                                {this.props.users && this.props.users.map(p =>
                                    <UserItem
                                        user={p}
                                        key={"UserItem_" + p.id}
                                        requestDeleteUser={this.props.requestDeleteUser}
                                        requestUpdateUser={this.props.requestUpdateUser}
                                        updateComment={(comment: string) => console.log("this.props.requestUpdatePropertyComment(p.propertyNo, comment)")}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                }
                <br />
                {this.state.isNewUserFormOpen && <h3>Add new user</h3> }
                {this.state.isNewUserFormOpen && <br />}
                {this.state.isNewUserFormOpen && <UserForm existingUser={new User()} submit={this.handleSubmit} /> }
                {!this.state.isNewUserFormOpen &&
                    <button onClick={() => this.setState({ isNewUserFormOpen: !this.state.isNewUserFormOpen })}>Add new user</button>
                }
            </div>
        </div>
    }
}

export default connect(
    (state: ApplicationState) => state.reduxState,
    ReduxStore.actionCreators
)(Home) as typeof Home;