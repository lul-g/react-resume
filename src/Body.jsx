import { useState } from "react";
import "./body.css";
import hand from "./assets/Backhand Index Pointing Right.png";

export default function Hedaer() {
  return (
    <div className='body'>
      <div className='education border flex'>
        <p className='title'>Education</p>
        <div className='content'>
          <p>
            Northern Kentucky University <span>- Computer Science - 3.78</span>
          </p>
        </div>
        <span className='date'>2020 - 2023</span>
      </div>
      <div className='experience border flex-s'>
        <p className='title'>Experience</p>
        <div className='content'>
          <div className='stuff'>
            <p>
              One Logistics Network <span>- Software Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>HTML</li>
              <li className='label'>CSS</li>
              <li className='label'>JS</li>
            </ul>
            <ul className='work'>
              <li>
                Built the website, by myself, using HTML/CSS/JS. No templates
                were used.
              </li>
              <li>
                The website is fully responsive. It works perfectly fine for any
                screen size above 350px.
              </li>
              <li>The website is compatible with any browser.</li>
            </ul>
          </div>
          <div className='stuff'>
            <p>
              SGE <span>- Front End Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>HTML</li>
              <li className='label'>CSS</li>
              <li className='label'>JS</li>
            </ul>
            <ul className='work'>
              <li>No templates used.</li>
              <li>Responsive website (340px -1500px).</li>
              <li>Has page loading animation.</li>
            </ul>
          </div>
          <div className='stuff'>
            <p>
              Meme Generator App <span>- Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>ReactJs</li>
              <li className='label'>CSS</li>
            </ul>
            <ul className='work'>
              <li>
                Made use of <span>React.useEffect()</span> to make the API call.
                Fetch data as .json then set the ‘setMeme’ state’s imgURL to a
                random image in the array.{" "}
              </li>
              <li>
                Made use of <span>React.useState</span> to update the image with
                a button click and to update the text over the image on key
                stroke.
              </li>
              <li>
                Used Vite to install necessary packages and deployed the web-app
                on Netlify.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='projects border flex-s'>
        <p className='title'>Featured Projects</p>
        <p className='content'>
          <div className='stuff'>
            <p>
              Rick &#38; Morty <span>- Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>ReactJS</li>
              <li className='label'>CSS</li>
            </ul>
            <div className='work'>
              Check it out
              <img src={hand} alt='' />
              <a target='_blank' href='https://rick-morty1.netlify.app/'>
                https://rick-morty1.netlify.app/
              </a>
            </div>
          </div>
          <div className='stuff'>
            <p>
              Glass-Clock <span>- Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>ReactJS</li>
              <li className='label'>CSS</li>
            </ul>
            <div className='work'>
              Check it out
              <img src={hand} alt='' />
              <a target='_blank' href='https://glass-clock.netlify.app/'>
                https://glass-clock.netlify.app/
              </a>
            </div>
          </div>
          <div className='stuff'>
            <p>
              Password Generator <span>- Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>ReactJS</li>
              <li className='label'>CSS</li>
            </ul>
            <div className='work'>
              Check it out
              <img src={hand} alt='' />
              <a target='_blank' href='https://react-pass.netlify.app/'>
                https://react-pass.netlify.app/
              </a>
            </div>
          </div>
          <div className='stuff'>
            <p>
              React-Facts <span>- Developer</span>
            </p>
            <ul className='lang flex-center'>
              <li className='label'>ReactJS</li>
              <li className='label'>CSS</li>
            </ul>
            <div className='work'>
              Check it out
              <img src={hand} alt='' />
              <a target='_blank' href='https://dark-light-lul.netlify.app/'>
                https://dark-light-lul.netlify.app/
              </a>
            </div>
          </div>
        </p>
      </div>
      <div className='skills border flex-s'>
        <p className='title'>Skills &#38; Tools</p>
        <p className='content'>
          <div className='languages skill'>
            <div className='title'>Languages</div>
            <ul className='grid'>
              <li className='label'>HTML</li>
              <li className='label'>CSS/SCSS</li>
              <li className='label'>JS</li>
              <li className='label'>ReactJS</li>
              <li className='label'>Java</li>
              <li className='label'>Python</li>
              <li className='label'>C++</li>
            </ul>
          </div>
          <div className='tech skill'>
            <div className='title'>Technologies</div>
            <ul className='grid'>
              <li className='label'>VScode</li>

              <li className='label'>WordPress</li>
              <li className='label'>ChatGPT</li>
              <li className='label'>MidJourney</li>

              <li className='label'>Gtihub</li>

              <li className='label'>Intellij</li>
              <li className='label'>Figma</li>
              <li className='label'>Netlify</li>
              <li className='label'>Vite</li>
              <li className='label'>Git</li>
            </ul>
          </div>
          <div className='extra skill'>
            <div className='title'>Resources</div>
            <ul className='grid'>
              <li className='label'>FontAwesome</li>
              <li className='label'>Bootstrap</li>
              <li className='label'>google fonts</li>

              <li className='label'>blobmaker.app</li>
              <li className='label'>css-peeper</li>
              <li className='label'>haikei</li>

              <li className='label'>fontshare</li>
              <li className='label'>undraw</li>
              <li className='label'>unsplash</li>
              <li className='label'>pexels</li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
}
