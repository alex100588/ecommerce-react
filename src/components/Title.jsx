const Title = () => {

  return (
    <div className="container">
      <h1 className="text-center mb-4">
        <p className="text-title text-white"> Alex PetShop </p>
      </h1>
      <img className="w-100 mb-3 title"  src={`${process.env.PUBLIC_URL}/img/shop5.jpg`} alt="" />
    </div>
  );
};

export default Title;
