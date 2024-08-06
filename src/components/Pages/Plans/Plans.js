import React from 'react'
import "./Plans.css"

function Plans() {
  const pricingData=[
    {
      title: 'Reqular Member',
      price: '$0',
      duration: '/Month',
      color: '#fff',
      feature:[
        'Unlimited access to the Courses',
        'Customer Support',
        
      ]
    },
    {
      title: 'Premium Member',
      price: '$100',
      duration: '/Month',
      color: '#6f55f2',
      feature:[
        'Unlimited access to the Courses',
        'Customer Support',
        'Personal Mentor',
        'Standard Options',
        '5 Classes per week',
      ]
    },
    {
      title: 'Standard Member',
      price: '$10',
      duration: '/Month',
      color: '#fff',
      feature:[
        'Unlimited access to the Courses',
        'Customer Support',
        
        
        '1 Classes per week',
      ]
    },

  ]
    
  return (
    <div className='containar'>
        <div className='pricing_top'>
            <h2 className='section_title'>
                Premium Pricing Plan
            </h2>
            <p>Unlock elite tech services with our premium pricing plan and soar head of the competition</p>

    </div>
    
    <div className='pricing_wrapper'>
      {pricingData.map((pricingItem,index)=>(
        <div className='pricing_item' key={index}>
          <div className='pricing_card-top'style={{background:pricingItem.color}}>
            <h2 className='section_title'>{pricingItem.title}</h2>
            <h2 className='pricing_section_title'>
              {pricingItem.price}<span>{pricingItem.duration}</span>
            </h2>
          </div>
        <div className='services'>
          <ul>
            {pricingItem.feature.map((feature,index)=>(
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <button className='register-btn'>Join</button>
          
         
         
          </div>
          </div>

))}
    
    

</div>
</div>
  )
}

export default Plans
