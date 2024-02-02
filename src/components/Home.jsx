import React from 'react'
import vg from '../assets/2.webp'
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
     <div className='home' id="home">
        <main>
            <h1>ProbSol</h1>
            <p>Solve's all your Problem</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg}  alt='Graphics'/>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Voluptates, maiores totam nam hic ullam asperiores cupiditate maxime quos.
           Adipisci ipsam doloremque provident voluptate veniam officia! Quae inventore nostrum autem ipsa.
        </p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
      <h1>What are we Doing ?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, saepe voluptate, hic perferendis quos cum quisquam veniam quam at quod non assumenda, laboriosam vero numquam eaque adipisci culpa accusantium fugit?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum numquam id sit nulla, dolor soluta ad laboriosam ex quibusdam asperiores facere at 
        rem quae vitae ea exercitationem vero. Nesciunt, incidunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem dolorum doloribus doloremque incidunt facilis odio necessitatibus natus, architecto, assumenda magni voluptatum officia non ut, earum atque nam exercitationem praesentium?
      </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>

        <article>
          <div
          style={{animationDelay:"0.1s",}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div
          style={{animationDelay:"0.3s",}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div
          style={{animationDelay:"0.6s",}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div
          style={{animationDelay:"0.9s",}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    
    </>
   
  )
}

export default Home