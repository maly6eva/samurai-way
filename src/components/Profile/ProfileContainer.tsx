import { connect } from "react-redux";
import { Profile } from "./Profile";
import { RootState } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { ActionType } from "../../redux/store";

const mapStateToProps = (state: RootState) => ({
    profilePage: state.profilePage,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);