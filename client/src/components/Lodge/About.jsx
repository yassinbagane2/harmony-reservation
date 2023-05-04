import { AiFillStar } from "react-icons/ai";
import Logo from "../../assets/Logo2.png";
const About = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-4 flex gap-4">
      <div className="text-gray-500 flex-1 mt-4">
        <h1 className="text-3xl font-medium">Booking Hotels Since 2023</h1>
        <div>We provide accommodation services since 2023</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero
          suscipit nemo voluptates cupiditate, ipsum provident facere modi
          tempora ducimus enim dicta laborum esse aliquam rem assumenda dolores.
        </p>
        <p className="mt-4">
          Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga.
          Excepturi facilis libero dicta soluta officiis, sint sit voluptatem,
          vero doloribus nesciunt suscipit dolores veritatis minus quam atque
          non autem quasi consequatur quae sequi ex, ipsa facere qui ut
          recusandae. Quod earum cupiditate quaerat assumenda.Excepturi facilis
          libero dicta soluta officiis, sint sit voluptatem, vero doloribus
          nesciunt suscipit dolores veritatis minus quam atque non autem quasi
          consequatur quae sequi ex, ipsa facere qui ut recusandae.Quod earum
          cupiditate quaerat assumenda
        </p>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="flex flex-col items-center px-3 border-4 border-[#edcb9a] rounded-md w-[420px] h-[280px]">
          <img className="w-14 h-14 mt-4" src={Logo} alt="logo" />
          <h2 className="uppercase text-[#edcb9a] font-medium py-2">Harmony</h2>
          <p className="text-custom-gray text-lg font-medium py-2">
            LUXURY HOTELS
          </p>
          <p className="text-center text-sm text-custom-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem
            iste suscipit.Ad dolorem iste suscipit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit, architecto?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
