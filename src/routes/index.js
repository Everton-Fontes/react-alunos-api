import React from "react";
import { Switch } from 'react-router-dom'
import Login from "../Components/Pages/Login";
import Page404 from '../Components/Pages/Page404'
import MyRoute from "./MyRoute";

export default function Routes(){
  return (
    <Switch>
      <MyRoute path='/' component={Login} isClosed={false} />
      <MyRoute path='*' component={Page404} />
    </Switch>
  )
}
