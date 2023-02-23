import React from 'react'
import { RouterLink } from '../../Core/Router/Link'
import Nf404 from '../../Assets/img/404.svg';

export const NotFound = () => {
  return (
    <>
      <img src={Nf404} alt="Not Found" />
      <div>NotFound</div>
      <RouterLink to='/'>Volver</RouterLink>
    </>
  )
}
