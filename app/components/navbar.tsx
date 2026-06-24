import React from 'react';

export default function Navbar()
{
    return(
        <nav className ="nav">

            <a href="/" className="school">Insert HighSchool Name Here</a>

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href ="/">About</a>
                </li>


                <li>
                    <a href ="/">Students</a>
                </li>

                <li>
                    <a href="/">Learning</a>
                </li>

                <li>
                    <a href="/">Contact</a>
                </li>

            </ul>
        </nav>
    )
}