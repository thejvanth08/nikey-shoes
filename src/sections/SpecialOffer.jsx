import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-container max-xl:flex-col-reverse">
      <div className="flex-1 max-xl:mt-8">
        <img
          src={offer}
          alt="offer image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lgL:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Id, debitis.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero nostrum suscipit. Nihil eum debitis sunt! Fugit quod fuga nulla?
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
}
export default SpecialOffer;