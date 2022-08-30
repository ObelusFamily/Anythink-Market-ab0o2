import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import Empty from "./Empty";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TITLE_FILTER,
  APPLY_TAG_FILTER,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  search: state.itemList.search,
  itemsCount: state.itemList.itemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchInput: (search, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, search, payload }),
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  handleSearchInputChange(e) {
    const title = e.target.value;
    this.props.onSearchInput(
      title,
      title.length > 2 ? agent.Items.byTitle(title) : agent.Items.all()
    );
  }

  render() {
    return (
      <div className="home-page">
        <Banner
          inputValue={this.props.search || ""}
          onInputChange={this.handleSearchInputChange}
        />

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          {!this.props.itemsCount && this.props.search && (
            <Empty title={this.props.search} />
          )}
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
