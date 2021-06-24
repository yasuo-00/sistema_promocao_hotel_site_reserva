import React, { useState } from 'react'
import { Redirect, Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import api from './services/api'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import UserHome from './pages/commonPages/userHome'
import Profile from './pages/commonPages/profile'
import AddBookingSite from './pages/users/admin/addBookingSite'
import AddHotel from './pages/users/admin/addHotel'
import HotelList from './pages/commonPages/listHotel'
import AddSales from './pages/addSales'


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path='/login' >
                    <Login></Login>
                </Route>
                <Route path='/register' >
                    <Register></Register>
                </Route>
                <Route path='/userHome' >
                    <UserHome></UserHome>
                </Route>
                <Route path='/profile' >
                    <Profile></Profile>
                </Route>
                <Route path='/addBookingSite' >
                    <AddBookingSite></AddBookingSite>
                </Route>
                <Route path='/addHotel' >
                    <AddHotel></AddHotel>
                </Route>
                <Route path='/hotelList' >
                    <HotelList></HotelList>
                </Route>
                <Route path='/addSales' >
                    <AddSales></AddSales>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App