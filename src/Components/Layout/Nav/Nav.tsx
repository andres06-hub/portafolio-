import './Nav.scss';

export const Nav = () => {
  return (
    <>
    <nav>
      <section>
        <div className='logo'>
          <img src="src/Assets/img/logo.svg" alt="logo" />
        </div>
        <div>
          <ul className='links'>
            <li>
              <a href="www.linkedin.com/in/andressierrarojas/">
                <img src="" alt="" />
              </a>
            </li>
            <li>Products</li>
            <li>Lorem</li>
          </ul>
        </div>
      </section>
    </nav>
    </>
  )
}
