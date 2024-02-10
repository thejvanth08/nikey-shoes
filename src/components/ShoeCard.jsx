function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImage }) {
  const handleClick = () => {
    // whether displaying shoe the selected shoe
    // if not displaying change the bigShoe with selected shoe
    if(bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  }
  
  
  // apply border for currently selected shoe
  return (
    <div className={`border-2 rounded-xl
    ${ bigShoeImage === imgURL.bigShoe
    ? 'border-coral-red' 
    : 'border-transparent' }
    cursor-pointer max-sm:flex-1`}
      onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
          <img 
            src={imgURL.thumbnail} 
            alt="shoe collection"
            width={127}
            height={103}
            className="object-contain" />
        </div>
      </div>
  )
}
export default ShoeCard;