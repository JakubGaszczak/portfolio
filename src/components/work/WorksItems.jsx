import React from 'react'

function WorksItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt={item.title} className='work__img'/>
        <h4 className="work__title">{item.title}</h4>
        <a href="#" className="work__button">
            Demo <i className="fa-solid fa-arrow-right work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems