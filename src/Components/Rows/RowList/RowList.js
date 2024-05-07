import React from 'react'
import Row from '../../../Components/Rows/Row/Row'
import requests from '../../../../src/utils/requests'
const RowList = () => {
  return (
    <>
       
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 


    </>
  )
}

export default RowList;
