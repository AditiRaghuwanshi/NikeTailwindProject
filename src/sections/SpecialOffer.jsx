import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container">
      <div className="flex-1"> 
        <img src={offer} 
        width={773}
        height={678}
        className="object-contain w-full" />
        </div>

        <div>

<h2 className='font-palanquin 
   text-4xl capitalize font-bold lg:max-w-lg'> 

    <span className="text-coral-red">Special</span>
    <span className="text-coral-red"></span>Offer
    
   
</h2>
<p className="mt-4 lg:max-w-lg info-text mb-8">
  Premimum comfort and style our meticulously crafted footwear is designed for your comfort and standard.</p>

  <p className="mt-6 lg:max-w-lg info-text">Our dedication to details and excellence ensures your satisfaction</p>
  
  
  <div className="mt-11 flex flex-wrap gap-4 ">
  <Button label="Shop now"
    iconURL={arrowRight} />

    <Button label ="Learn more"
    backgroundColor="bg-white"
    borderColor="border-coral-red"
    textColor="text-slate-gray"


   />
  
    </div> 

    </div>

          
    

    </section>
  )
}

export default SpecialOffer