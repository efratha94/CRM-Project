import React, { Component, useState, useEffect } from 'react';
import { observer, inject } from "mobx-react"
import ClientPagination from "./ClientPagination"
import Pages from "./Pages"
import Client from "./Client"
import axios from "axios"

const Pagination = inject("person", "clients")(observer((props) => {
    const [clientsList, setClients] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [clientsPerPage] = useState(20)

    useEffect(() => {
        const fetchClients = async () => {
            setLoading(true)
            const clientsToShow = await props.clients.clients
            setClients(clientsToShow)
            setLoading(false)
        }
        fetchClients()
    }, [])

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastClient = currentPage * clientsPerPage
    const indexOfFirstClient = indexOfLastClient - clientsPerPage
    const currentClients = clientsList.slice(indexOfFirstClient, indexOfLastClient)

    return (
        <>
            <Pages clientsPerPage={clientsPerPage} totalClients={clientsList.length} paginate={paginate} />
            {props.clients.clientsFiltered.length !== 0 ? 
            <ClientPagination clientsList={props.clients.clientsFiltered} loading={loading} />
            : <ClientPagination clientsList={currentClients} loading={loading} />}
        </>
    )
}));


export default Pagination