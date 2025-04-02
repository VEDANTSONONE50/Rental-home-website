import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Choose the perfect package to suit your real estate needs. Whether you are buying, selling, or investing, we offer flexible options to help you achieve your goals.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
