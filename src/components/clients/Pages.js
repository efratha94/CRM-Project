import React from 'react';


const Pages = ({clientsPerPage, totalClients, paginate}) => {
    const pageNumbers = []

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