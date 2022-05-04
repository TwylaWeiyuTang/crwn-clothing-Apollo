import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomepageComponent from './pages/homepage/HomepageComponent';
import ShopComponent from './pages/shoppage/ShopComponent';
import HeaderComponent from './components/header/HeaderComponent';
import SignInandSignUp from './pages/sign-in-and-sign-up/SignInandSignUp';
import CheckoutComponent from './pages/checkout/CheckoutComponent';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from "firebase/firestore";
import {setCurrentUser} from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors';
import React from 'react';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async(userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        onSnapshot(userRef, (doc) => { //onSnapshot method is for us to listen to the update of
          // the user
          setCurrentUser({
              id: doc.id, // change the user state to include the id we get from the firebase
              ...doc.data() // change the user state to include any other user information we get from the doc.data()
          })
        })
      }
      setCurrentUser(userAuth) // if the userAuth does not exist (false), then set
      // our user state to null

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // close the subscription to the Firebase user management
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Routes>
          <Route exact path='/' element = {<HomepageComponent />} />
          <Route path='/shop/*' element = {<ShopComponent />} />
          {/* By appending a /* to the end of our /shop path, we're essentially telling 
          React Router that Shop has a nested Routes component and our parent path should match 
          for /shop as well as any other location that matches the /shop/* pattern */}
          <Route exact path='/checkout' element = {<CheckoutComponent />} />
          <Route path='/signin' element= {this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInandSignUp />)} />
          {/* if there is a signed in user, then redirect them to Homepage,
          otherwise go to sign in and sign up page */}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
// we use createStructuredSelector, so we don't need to pass in (state) to different selectors each
// every time when we have a new selector being mapped here

const mapDispatchToProps = dispatch  => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // set the user payload by using dispatch function
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
// we pass in mapStateToProps, mapDispatchToProps so we can have access to this.state.currentUser
// and this.props.setCurrentUser
