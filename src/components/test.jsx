import * as React from "react";
export default class ScrollTest extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  render() {
    return (
      <div id="wrapper">
        <header id="js-header">
          <div className="container clearfix">
            <h1 id="logo">Apples</h1>
            <nav>
              <a href="#bacon">Bacon</a>
              <a href="#sausage">Sausage</a>
              <a href="#biltong">Biltong</a>
            </nav>
          </div>
        </header>
        <div id="main">
          <div id="content">
            <section>
              <div className="container">
                <h1>I Second That Emotion</h1>
                <p>Bacon atball corned beef strip steak andouille.</p>
              </div>
            </section>
            <section className="color">
              <div className="container">
                <h1>The Duh-Vinci Code</h1>
                <p>
                  Bender, you risked your life to save me! Good news, everyone!
                </p>
              </div>
            </section>
            <section>
              <div className="container">
                <p>Bacon </p>
              </div>
            </section>
          </div>
        </div>
        <footer>
          <div className="container clearfix">
            <div className="col" id="col-1">
              <ul>
                <li>APPLES</li>
                <li>
                  <a href="#0">Home</a>
                </li>
              </ul>
            </div>
            <div className="col" id="col-2">
              <ul>
                <li>SOCIAL</li>
                <li>
                  <a href="#0">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="col" id="col-3">
              <ul>
                <li>SERVICES</li>
                <li>
                  <a href="#0">Bacon</a>
                </li>
                <li>
                  <a href="#0">Sausage Services</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
