import React from 'react'
import { Header } from '../../Components/Layout/Header/Header'
import { Content } from '../../Components/Layout/Content/Content'
import { RouterLink } from '../../Core/Router/Link';

export const Home = () => {
  return (
    <>
      <Header/>
      {/* <RouterLink to='/no'>ir notfound</RouterLink> */}
      <Content/>
    </>
  )
}
