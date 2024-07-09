const Hero = () => {
  return (
    <main className="hero">
      <div className="h-content">
        <h1>YOUR FEET <br /> DESERVE <br /> THE BEST</h1>

        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>

        <div className="h-btn">
            <button className="blue-btn">
                Shop Now
            </button>
            <button>
                Category
            </button>

        </div>
        <footer className="foot">
          <p> Also Available On </p>
          <div className="f-image">
            <div className="i1"><img src="/images/amazon.png" alt="amazon logo" /></div>
            <div className="i1"><img src="/images/flipkart.png" alt="flipkart logo" /></div>
          </div>
        </footer>
      </div>
      <div className="h-image">
        <img src="/images/n-s-i.png" alt="hero shoe" />
      </div>
    </main>
  );
};

export default Hero;
