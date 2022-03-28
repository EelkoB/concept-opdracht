import React from "react";
import './Home.css';
import redditlogo from '../assets/logo.png';
import Navlist from "../components/Navlist";

// Maak een component Home
// Verwerk hier de css en de html-opbouw voor de homepage
// Maak van eventueel terugkerende elementen een nieuw component
// Zorg voor een Header een main en een footer

function Home() {
    return (
        <div>
          <header className="box-container">
             <Navlist />
          </header>
            <img className="bizar" src={redditlogo} alt="redditlogo"/>
            <main>
                <ul>
                    <li>dsklfjsd</li>
                    <li>dsklfjsd</li>
                    <li>dsklfjsd</li>
                    <li>dsklfjsd</li>

                </ul>
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default Home;