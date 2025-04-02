import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Explore our latest property listings, featuring a range of stunning homes and investment opportunities. Whether you are looking for a cozy starter home or a luxurious estate, we have something for every buyer.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
