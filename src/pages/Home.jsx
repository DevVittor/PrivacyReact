import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Card from "../components/Card";
import DarkMode from "../components/DarkMode";
export default function Home() {
  return (
    <main>
      <section>
        <div className="darkMode">
          <DarkMode />
        </div>
      </section>
      <section>
        <div className="container-profile">
          <div className="box-profile">
            <div className="profile-photo">
              <img
                src="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile picture"
              />
            </div>
            <div className="profile-info">
              <div className="box-info">
                <div className="profile-name">
                  <h2>
                    Jéssica Gomes<i className="ri-verified-badge-fill" title="Verified"></i>
                  </h2>
                </div>
                <div className="price-share">
                  <div className="profile-follow">
                    <button className="profile">Follow $ 9.90/month</button>
                  </div>
                  <div className="profile-share">
                    <button>
                      <i className="ri-share-forward-fill" title="Share"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="box-descript">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores quasi ipsa sint fugit? Adipisci dolore autem sit amet
                  natus similique, in, omnis aliquam magni repudiandae, laborum
                  cumque cum totam? Sint!
                </p>
              </div>
              <div className="box-social">
                <nav>
                  <ul>
                    <li>
                      <Link to="/#">
                        <i className="ri-facebook-box-fill" title="Facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-instagram-fill" title="Instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-twitter-x-fill" title="Twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-telegram-fill" title="Telegram"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section>
        <div className="container-status">
          <div className="box-status">
            <h2>
              <i className="ri-user-add-fill" title="Followers"></i>389 | Followers
            </h2>
            <h2>
              <i className="ri-gallery-fill" title="Posts"></i>78 | Posts
            </h2>
            <h2>
              <i className="ri-image-2-fill" title="Pictures"></i>53 | Pictures
            </h2>
            <h2>
              <i className="ri-folder-video-fill" title="Videos"></i>25 | Videos
            </h2>
          </div>
        </div>
      </section>*/}
      <section>
        <div className="container-card">
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/3209624/pexels-photo-3209624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </section>
    </main>
  );
}
