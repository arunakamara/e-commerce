import React from "react";
import withNavigateHook from './hoc/withNavigateHook';
import "./homePage.css";

function HomePage(props) {
  const handleToLogin = () => {
    props.navigation("/e-commerce/login");
  };

  const handleToRegister = () => {
    props.navigation("/e-commerce/register");
  }
  return (
    <div className="home-page">
      <header>
        <h2>Welcome to Aruna's Shopping Point</h2>
      </header>
      <main className="about-us">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          beatae enim recusandae atque exercitationem consectetur perferendis
          minus? Odio voluptas magnam inventore voluptatibus dolor, error,
          veritatis numquam nesciunt, sequi adipisci explicabo? Accusantium quis
          repellendus voluptate cumque tempore laboriosam, tempora magni ea,
          delectus eius, quia ab neque et voluptatum enim iste sed! Iste hic
          dolorum non ea error illo eius, distinctio ratione? Voluptates fugit
          non itaque adipisci voluptatibus fugiat voluptate, pariatur illo
          facilis ex quaerat natus totam sequi dolorem, sit eaque dolores
          possimus minus vero explicabo enim repudiandae. Veniam, dolorum
          repellat? Distinctio? Repudiandae eius sit qui aut ullam commodi quod
          ex, voluptates, sed molestias vero unde at enim? Quibusdam cum
          repudiandae aliquid! Blanditiis reprehenderit veniam optio tenetur
          illo officia vel eaque exercitationem! Harum vitae vel, saepe facilis
          exercitationem dolores quis, quae doloribus fugit distinctio quas,
          voluptate esse quod optio? Distinctio ullam, perspiciatis sapiente
          blanditiis, error sequi enim accusamus earum quo fugit voluptas!
          Aliquid maxime perferendis quam hic alias eos quasi reiciendis, quas
          cupiditate quaerat inventore deleniti voluptatum? Eveniet quidem vero
          mollitia eius sapiente sed reiciendis vitae, tempora ut aperiam
          placeat dignissimos laudantium. Vel libero, architecto nemo, dicta
          fugiat sequi eveniet repudiandae unde ducimus aspernatur facere
          perferendis rem autem provident, nulla asperiores. Optio nostrum
          mollitia eius molestias eum laboriosam. Est minus consequuntur ipsum!
          Incidunt tenetur laboriosam ad accusamus distinctio quam a
          consequuntur ab illo explicabo natus iste earum, eius voluptatibus
          odit corporis eaque nemo esse sed assumenda rem praesentium!
        </p>

        <button className="btn btn-primary" onClick={handleToLogin}>
          Start Shopping
        </button>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quisquam accusantium maxime expedita veritatis, aliquam eum nisi
          voluptate nam ex at repellat magnam, facilis debitis dicta unde.
          Distinctio, officiis eum. Iusto enim nisi consequuntur ratione rerum
          repellat quaerat assumenda cupiditate accusamus quis ipsum,
          reprehenderit porro numquam amet cumque deserunt esse a hic, provident
          debitis eum fuga ad. Adipisci, molestias laboriosam! Id repudiandae
          quibusdam fugiat quia commodi doloremque inventore saepe sapiente
          voluptatum impedit, tenetur possimus? Quae praesentium dolorum ducimus
          quaerat perspiciatis eos quasi, similique voluptatum magni quia
          tempora animi cumque labore. Corporis tempore fuga in beatae eum,
          earum ullam ad sed. Beatae accusamus perspiciatis molestiae ad ex
          dignissimos mollitia porro repellendus quia atque distinctio, cumque
          sint iure ullam earum velit blanditiis! Dolorem eveniet labore
          corrupti distinctio libero, ducimus voluptatibus expedita culpa
          mollitia quasi aspernatur dolorum cum. Tempora veniam deserunt,
          accusamus quia rem cupiditate velit illo alias a expedita, nulla,
          soluta nihil.
        </p>

        <button className="btn btn-primary" onClick={handleToRegister}>Create Account</button>
      </main>
      <hr />
      <footer>
        <address>
          Contact Us:
          <br />
          abcde@gmail.com
          <br />
          NH-16 Chaitanya Knowledge City
        </address>
      </footer>
    </div>
  );
}

export default withNavigateHook(HomePage);
