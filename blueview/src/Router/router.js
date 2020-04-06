import React from "react";
import { Route } from "react-router-dom";
import DepartmentPage from "../Components/DepartmentPage";
import Post from "../Components/Post";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn";
import ZipSearch from "../Components/ZipSearch";


class ReactRouter extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route  path="/post" component={Post} />
          <Route  path="/register" component={Register} />
          <Route  path="/departmentpage" component={DepartmentPage} />
          <Route  path="/zipsearch" component={ZipSearch} />
        </React.Fragment>
      );
    }
  }
  
  export default ReactRouter;