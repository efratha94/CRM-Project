import React, {useState, useEffect} from 'react';


const Pages = ({clientsPerPage, totalClients, paginate}) => {
    const [step] = useState(1)
    const pageNumbers = []
    const pageNeighbours = 2
    const currentPageNumber = null

    for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
        pageNumbers.push(i)
    }


    return(
        <>  
       
            <div>
               {pageNumbers.map(number => (
                   <span key={number}>
                       <a onClick={() => paginate(number)}>
                       {number}
                       </a>
                   </span>
               ))}

            </div>

        </>
    )
};

export default Pages
