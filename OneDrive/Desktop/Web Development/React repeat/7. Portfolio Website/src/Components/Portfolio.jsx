import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

const Portfolio = () => {

    const portfolios = [        
        
        {
            id: 1,
            src: arrayDestruct 
        },

        // {
        //     id: 2,
        //     src: installNode 
        // },

        // {
        //     id: 3,
        //     src: navbar 
        // },

        // {
        //     id: 4,
        //     src: reactParallax 
        // },

        // {
        //     id: 5,
        //     src: reactSmooth 
        // },

        // {
        //     id: 6,
        //     src: reactWeather 
        // },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black  to-gray-800 w-full text-white h-full pt-20'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-4'>

                <p className='pt-10 text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='pt-5 text-2xl'>Mainframe based Projects</p>
            </div>

            <div>

                <h3 className='pb-2'>Project Name: Enterprise Fund Administration – BAU & TSA Exit</h3>
                <p className='border-1 shadow-md shadow-gray-600 rounded-lg'>
                    Project Summary: - Enterprise Fund administration is the client's pricing and trading solution/software for all the variable investments. This system accepts NAVs from different fund management companies post stock market closure every business day and calculate unit values for various internal and third-party policy admin systems. EFA is also responsible for accepting trade transactions from the policy admin systems, calculates purchase/redemption
                    shares/units and send that to the fund companies for trading those. As part of the TSA exit initiative, the goal is to clone the EFA application into Brighthouse environment by Lift & shift migration approach.
                </p>

                
                <h3 className='pt-10 pb-2'>Project Name : Panorama Migration</h3>
                <p className='border-1 shadow-md shadow-gray-600 rounded-lg'>
                    Project Summary: The Transformation Program Strategy is to convert 18 MetLife admin systems to DXC’s wmA platform and move the remaining 7 in scope systems to the wmA technical environment. Each system conversion has its own plan and timeline. DXC will handle the end to end conversion efforts that will include 24 months at a point in time approach of transactional history. 39 Interfaces have been identified and will have adjustments for all admin platforms in scope. Not all will impact each application, but analysis will be completed to ensure updates made. Applicable admin / supporting systems / feeds & interfaces to those converted platforms will be decommissioned post conversion.
                </p>

                <h3 className='pt-10 pb-2'>Project Name: Taiwan Integrated Receivable Management</h3>
                <p className='border-1 shadow-md shadow-gray-600 rounded-lg'>
                    Project Summary: Taiwan Integrated Receivable Management is one of the primary initiatives of Bank of America's Taiwan operations. Our competitors are able to offer a more comprehensive end-to-end solution to their clients with regards to collection points by making use of their extensive retail branches, domestic partner bank
                    alliances, and their own ATM's and cheque collection boxes. They are also making use of consumer collection points
                    mainly via post offices and convenience stores. To complete the full end-to-end offering, they are also offering consolidated receivables reporting to their clients to simplify and streamline their whole receivables process. BAML collection points are limited to our own over-the-counter branches Our limited collection points offering is a key gap that needs to be addressed to allow BAML to offer a more competitive and convenient collection service to our clients in Taiwan. Additionally, BAML are not currently able to offer clients a consolidated, comprehensive view of their collections from the various collection channels. This initiative will aim to address that product gap.
                </p>

            </div>

            <p className='py-10 text-2xl'>React based Projects</p>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id, src}) => (

                
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg w-3/4'>

                        {/* <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/> */}

                        <h1 className='text-center'>REACTFLIX</h1>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'>
                            <a href="https://jitreactflix.netlify.app/" target='_blank'>Demo</a>
                            </button>
                            {/* <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'>Code</button> */}
                        </div>

                    </div>

                ))}

            </div>

        </div>

    </div>
  )
}

export default Portfolio