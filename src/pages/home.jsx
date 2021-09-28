import React, {useEffect, useState} from 'react';
import { f7ready, Page, Navbar, Block, BlockTitle,Button, useStore, LoginScreen, LoginScreenTitle, List, ListInput, BlockFooter, ListButton,f7} from 'framework7-react';

import store from '../js/store';
import * as Realm from "realm-web";

export default function HomePage({f7router}){

  const app = new Realm.App({ id: "animationstudioapp-hxbnj" });
  function logout() {
    store.dispatch('logout', app)
  }

  useEffect(() => {
    console.log("route: ", f7router.router)
    if(!app.currentUser) {f7router.navigate('/login/')}
  },[store.state.user])


  return (
    <Page>
      <Navbar title="Home"/>
      <BlockTitle>Animation Studio Portal</BlockTitle>
      {useStore('user') && <Block>
        <p>User: {JSON.stringify(store.state.user)}</p>
        <Button onClick={logout}>Log out</Button>
      </Block>}
    </Page>
  )
};
