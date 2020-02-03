import React, { Component, useState, useEffect } from 'react';
import Client from "./Client"


const ClientPagination = ({clientsList, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
        <>
            {clientsList.map((client, index) => (
                <div key={index}>
                    <Client client={client} index={index} />
                </div>
            ))}

        </>
    )
};

export default ClientPagination