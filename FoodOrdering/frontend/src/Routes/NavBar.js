import React from 'react'
import Home from '../../src/components/Home';
import {Link} from 'react-router-dom';
import {FilterPage} from '../components/Filter/FilterPage'
export default function NavBar() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="../components/Filter/FilterPage" ></Link>
        </nav>
      
    </>
  )
}
