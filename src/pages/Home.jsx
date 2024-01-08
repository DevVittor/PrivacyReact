import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Card from "../components/Card";
import DarkMode from "../components/DarkMode";
function Home() {

  /*const arrayFotos = [
    "src/assets/img/1.jpg",
    "src/assets/img/2.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/3.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/4.jpg",
    "src/assets/img/5.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/5.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/6.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/6.jpg",
    "src/assets/img/7.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/3.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/4.jpg",
    "src/assets/img/5.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    "src/assets/img/6.jpg",
    "src/assets/img/7.jpg",
    "src/assets/img/8.jpg",
    "src/assets/img/9.jpg",
    "src/assets/img/10.jpg",
    "src/assets/img/11.jpg",
    "src/assets/img/12.jpg",
    "src/assets/img/13.jpg",
    "src/assets/img/14.jpg",
    "src/assets/img/15.jpg",
    "src/assets/img/16.jpg",
    ];*/
  const arrayFotos = [
    "https://i.imgur.com/YYdQR5P.jpg",
    "https://i.imgur.com/LmXofXG.jpg",
    "https://i.imgur.com/F71y9gY.jpg",
    "https://i.imgur.com/aeTx51c.jpg",
    "https://i.imgur.com/gN0gAx0.jpg",
    "https://i.imgur.com/tYwB7Tb.jpg",
    "https://i.imgur.com/Pb1leO4.jpg",
    "https://i.imgur.com/HiIyN0h.jpg",
    "https://i.imgur.com/6lcjMzd.jpg",
    "https://i.imgur.com/aOTyduY.jpg",
    "https://i.imgur.com/F71y9gY.jpg",
    "https://i.imgur.com/aeTx51c.jpg",
    "https://i.imgur.com/gN0gAx0.jpg",
    "https://i.imgur.com/tYwB7Tb.jpg",
    "https://i.imgur.com/n5nR7fV.jpg",
    "https://i.imgur.com/BarDssC.jpg",
    "https://i.imgur.com/oLNQYDK.jpg",
    "https://i.imgur.com/TS0qm99.jpg",
    "https://i.imgur.com/spVvPy7.jpg",
    "https://i.imgur.com/UikKChQ.jpg",
    "https://i.imgur.com/HiIyN0h.jpg",
    "https://i.imgur.com/6lcjMzd.jpg",
    "https://i.imgur.com/aOTyduY.jpg",
    "https://i.imgur.com/LmXofXG.jpg",
    "https://i.imgur.com/F71y9gY.jpg",
    "https://i.imgur.com/LmXofXG.jpg",
    "https://i.imgur.com/F71y9gY.jpg",
    "https://i.imgur.com/LmXofXG.jpg",
    "https://i.imgur.com/F71y9gY.jpg",
    "https://i.imgur.com/aeTx51c.jpg",
    "https://i.imgur.com/gN0gAx0.jpg",
    "https://i.imgur.com/tYwB7Tb.jpg",
    "https://i.imgur.com/aeTx51c.jpg",
    "https://i.imgur.com/gN0gAx0.jpg",
    "https://i.imgur.com/tYwB7Tb.jpg",
    "https://i.imgur.com/n5nR7fV.jpg",
    "https://i.imgur.com/BarDssC.jpg",
    "https://i.imgur.com/oLNQYDK.jpg",
    "https://i.imgur.com/TS0qm99.jpg",
    "https://i.imgur.com/spVvPy7.jpg",
    "https://i.imgur.com/UikKChQ.jpg",
    "https://i.imgur.com/HiIyN0h.jpg",
    "https://i.imgur.com/6lcjMzd.jpg",
    "https://i.imgur.com/aOTyduY.jpg",
    "https://i.imgur.com/LmXofXG.jpg",
    "https://i.imgur.com/F71y9gY.jpg",
    "https://i.imgur.com/aeTx51c.jpg",
  ]

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
          {arrayFotos
            .map((item,index)=>(
            <Card key={index} urlImg={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Home;