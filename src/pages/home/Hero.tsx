import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="my-32">
      <div className="w-10/12 flex flex-col-reverse md:flex-row justify-between items-center gap-8 mx-auto">
        <img src={heroImg} className="md:w-1/2" />
        <div className="text-center md:text-right">
          <h1 className="text-3xl font-bold mb-5">يا أهلا بالهاكرز</h1>
          <p>
            دة هيبقى الموقع اللي هيبقى عليه كل حاجة تخص المسابقة (فيديوهات الشرح
            , نذاكر ايه , والترتيب بتاعكو في المسابقة ان شاء الله)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
