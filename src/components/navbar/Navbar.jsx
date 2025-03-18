import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* sidebar */}
        <div className="wrapper">
            <span>Easy Dev</span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="facebook logo" /></a>
                <a href="#"><img src="/instagram.png" alt="instagram logo" /></a>
                <a href="#"><img src="/youtube.png" alt="youtube logo" /></a>
                <a href="#"><img src="/x-logo.png" alt="x logo" style={{width: '70px'}} /></a>
                <a href="#"><img src="/linkedin-logo.png" alt="linkedin logo" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar