import "./Footer.css";
import logo from "./Img/Footer-Logo.png";

const Footer = () => {
  const List_1 = [
    "AboutUs",
    "How It Works",
    "Create an NFT With Us",
    "What is an NFT?",
  ];
  const List_2 = [
    "Displaying NFTs",
    "Report Security Issue",
    "API Documentation",
    "Term of Use",
  ];
  const List1_head = "Company";
  const List2_head = "Mars";

  return (
    <footer className="footer-style">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 text-start">
            <div>
              <img src={logo} className="App-logo img-fluid mb-4" alt="logo" />
            </div>

            <h3 className="footer-bold-head-style">Ready to get started?</h3>

            <div className="footer-txt-style">
              Create, sell and collect truly rare digital artworks.
              <br />
              Powered by blockchain technology.
            </div>

            <div>
              <button className="btn footer-btn-style">
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-2 pt-5 p-md-0 ">
            <ul className="text-start" id="List-1">
              
                <h1 className="Head-List">{List1_head}</h1>
              
              {List_1.map((expense, index) => (
                <li key={index}>
                  <a href="/">{expense}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-2 pt-5 p-md-0 ">
            <ul className="text-start" id="List-1">
             
                <h1 className="Head-List">{List2_head}</h1>
             
              {List_2.map((expense, index) => (
                <li key={index}>
                  <a href="/">{expense}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column">
              <h2>Follow Us</h2>
              <div className="d-flex flex-row justify-content-center">
                <div className="m-l-10">
                  <a href="/">
                    <div className="icon-back">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </a>
                </div>
                <div className="m-l-10">
                  <a href="/">
                    <div className="icon-back">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </a>
                </div>
                <div className="m-l-10">
                  <a href="/">
                    <div className="icon-back">
                      <i className="fab fa-facebook"></i>
                    </div>
                  </a>
                </div>

                <div className="m-l-10">
                  <a href="/">
                    <div className="icon-back">
                      <i className="fab fa-discord"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
