import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Card1 from './Card1'

const InternshipDetail = () => {

  const {internships} = useSelector(state => state.internshipSlice)
  const [internship, setinternship] = useState(null)

  const {id} = useParams()

  // console.log(internships)
  const getInternship=()=>{
    setinternship(internships.find(internship => internship._id == id))
    
  }

  useEffect(()=>{
    getInternship();
  },[internships])

  console.log(internship)

  return internship &&  (
    <div className='min-h-screen w-full pt-20 pb-10 flex items-center justify-center'>

      <Card1
              key={internship._id}
              // isActivelyHiring={internship.isActivelyHiring}
              title={internship.profile}
              // company={internship.company}
              // location={internship.location}
              stipend={internship.stipend}
              type={internship.type}
              from={internship.from}
              to={internship.to}
              duration={internship.duration}
              logo={internship.image.url}
              applicants={internship.students}
              responsibility={internship.responsibility}
              skills={internship.skills}
              perks={internship.perks}
              assessment={internship.assessment}
              openings={internship.openings}
            />
    



    </div>
  )
}

export default InternshipDetail