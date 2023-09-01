// import 
import './App.css';

const Head = ()=> {
    return(
  <header>
    <nav id="navbar">
      <div id="hamburgerdiv">
        <img
          id="hamburger"
          src="https://w7.pngwing.com/pngs/436/707/png-transparent-hamburger-button-computer-icons-menu-menu-food-text-rectangle.png"
          alt="hamburgerimage"
        ></img>
      </div>
      <div id="listdiv">
        <ul id="list">
          <a href="#about" class="alist">
            <li class="listItems" id="item1">
              {" "}
              About{" "}
            </li>
          </a>
          <a href="#experience" class="alist">
            <li class="listItems" id="item2">
              Experience{" "}
            </li>
          </a>
          <a href="#certifications" class="alist">
            <li class="listItems" id="item3">
              Cerifications
            </li>
          </a>
          <a href="#contact" class="alist">
            <li class="listItems" id="item4">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </nav>
  </header>
  )
}
export default Head;
