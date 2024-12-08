import React from 'react'



function Home({search}) {
  return (
    <>
    <home>
      <img src='./P2IMAGES/dollarx2.png' className='feature_image'/>
      <h1 className='feature_title'>The Bright Future of Web</h1>
      <p className='feature_text'>Here we dive into the evolution of the web that claims to put the power of the platforms hack into the hands of the people. But is it really fufilling its promise?</p>
      <button className='feature_button'>READ MORE</button>
      <br></br>
      <img src='/P2IMAGES/crypto01.png' className='image_1' />
      <h2 className='new'>New</h2>
      <h3 className='main_title'>Hydrogen VS Electric Cars</h3>
      <p className='main_text'>Will hydrogen fueled cars ever catch up to EVs?</p>
      <br></br>
      <img src='P2IMAGES/dogcoin.png'className='image_2'/>
      <h3 className='main_title'>The Downsides of AI Artistry</h3>
      <p className='main_text'>What are the possible adverse effects of on-demand AI image generation?</p>
      <br></br>
      <img src='/P2IMAGES/crypto.png' className='image_3' />
      <h3 className='main_title'>Is VC Funding Drying Up?</h3>
      <p className='main_text'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      <br></br>
      <h1>01</h1>
      <h3>Reviving Retro PCs</h3>
      <p>What happens when old PCs are given modern upgrades?</p>
      <h1>02</h1>
      <h3>Top 10 Laptops of 2024</h3>
      <p>Our best picks for various needs and budgets.</p>
      <h1>03</h1>
      <h3>The Growth of Gaming</h3>
      <p>How the pandemic sparked fresh opportunities for gamers and gaming platforms.</p>
    </home>


    </>
  )
}

export default Home;