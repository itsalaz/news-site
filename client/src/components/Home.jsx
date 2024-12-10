import React from 'react';

function Home({ search }) {
  return (
    <>
      <div className="home">
        <img src="./P2IMAGES/dollarx2.png" className="feature_image" alt="Feature Image" />
        <h1 className="feature_title">The Bright Future of Web</h1>
        <p className="feature_text">
          Here we dive into the evolution of the web that claims to put the power of the platforms
          back into the hands of the people. But is it really fulfilling its promise?
        </p>
        <button className="feature_button">READ MORE</button>

        <main className="main_container">
          <section className="new_section_container">
            <h2 className="new">New</h2>
            <h3 className="new_title">Hydrogen VS Electric Cars</h3>
            <p className="new_text">Will hydrogen fueled cars ever catch up to EVs?</p>
            <h3 className="new_title">The Downsides of AI Artistry</h3>
            <p className="new_text">What are the possible adverse effects of on-demand AI image generation?</p>
            <h3 className="new_title">Is VC Funding Drying Up?</h3>
            <p className="new_text">
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
          </section>

          <section className="blog">
            <div className="blog_item">
              <img src="/P2IMAGES/crypto01.png" className="image" alt="Crypto Image 01" />
              <h1 className="number_headline">01</h1>
              <h3 className="blog_title">Reviving Retro PCs</h3>
              <p className="blog_text">What happens when old PCs are given modern upgrades?</p>
            </div>
            <div className="blog_item">
              <img src="P2IMAGES/dogcoin.png" className="image" alt="Dogcoin" />
              <h1 className="number_headline">02</h1>
              <h3 className="blog_title">Top 10 Laptops of 2024</h3>
              <p className="blog_text">Our best picks for various needs and budgets.</p>
            </div>
            <div className="blog_item">
              <img src="/P2IMAGES/crypto.png" className="image" alt="Crypto Image" />
              <h1 className="number_headline">03</h1>
              <h3 className="blog_title">The Growth of Gaming</h3>
              <p className="blog_text">
                How the pandemic sparked fresh opportunities for gamers and gaming platforms.
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div className="join-us">
          <div className="join__description">
            <h1>Join with Us</h1>
            <p className="footer__par__1">
              Once you have created your account, you can purchase coins from the website.
            </p>
          </div>
          <button className="btn primaryBtn">JOIN NOW</button>
        </div>

        <div className="footer__links__container">

          <div className="footer__link">
            <h1 className="link__title">Explore</h1>
            <a href="#" className="footer__link">About Us</a>
            <a href="#" className="footer__link">Blog</a>
            <a href="#" className="footer__link">Contact</a>
            <a href="#" className="footer__link">FAQ</a>
          </div>

          <div className="footer__link">
            <h1 className="link__title">Services</h1>
            <a href="#" className="footer__link">Mining</a>
            <a href="#" className="footer__link">Design</a>
            <a href="#" className="footer__link">Control Data</a>
            <a href="#" className="footer__link">Security</a>
          </div>

          <div className="footer__link">
            <h1 className="link__title">Resources</h1>
            <a href="#" className="footer__link">Data</a>
            <a href="#" className="footer__link">Logging</a>
            <a href="#" className="footer__link">License</a>
          </div>

          <div className="footer__copyright">
            <p>&copy; 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;