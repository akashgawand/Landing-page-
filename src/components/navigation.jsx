const Navigation=() => {
    return(
        <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="nike logo"  />
        </div>

        <ul className='m-nav'>
          <li href='#'>Menu</li>
          <li href='#'>Location</li>
          <li href='#'>Contact</li>
          <li href='#'>Contact</li>
        </ul>

        <button className='login-btn'>Login</button>
      </nav>
    );
  
}

export default Navigation;