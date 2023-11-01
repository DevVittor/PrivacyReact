import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Card from "../components/Card";
export default function Home() {
  return (
    <main>
      <section>
        <div className="container-profile">
          <div className="box-profile">
            <div className="profile-photo">
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="profile-info">
              <div className="box-info">
                <div className="profile-name">
                  <h2>
                    Jéssica Gomes<i className="ri-verified-badge-fill"></i>
                  </h2>
                </div>
                <div className="price-share">
                  <div className="profile-follow">
                    <button className="profile">Seguir R$ 250/mês</button>
                  </div>
                  <div className="profile-share">
                    <button>
                      <i className="ri-share-forward-fill"></i>
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
                        <i className="ri-facebook-box-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-instagram-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-twitter-x-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-telegram-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-status">
          <div className="box-status">
            <h2>
              <i className="ri-user-add-fill"></i>389 | Seguidores
            </h2>
            <h2>
              <i className="ri-gallery-fill"></i>78 | Posts
            </h2>
            <h2>
              <i className="ri-image-2-fill"></i>53 | Fotos
            </h2>
            <h2>
              <i className="ri-folder-video-fill"></i>25 | Vídeos
            </h2>
          </div>
        </div>
      </section>
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
