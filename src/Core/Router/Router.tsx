import { EVENTS } from './constanst';
import { match } from 'path-to-regexp';
import { useEffect, useState } from 'react';
import { Children } from 'react';
import { getCurrentPath } from '../Utils';

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>} : any) {
  const [currentPath, setCurrentpath] = useState(getCurrentPath());
  
  useEffect(() =>{
    const onLocationChange = () => {
      setCurrentpath(getCurrentPath());
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {  
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }
  }, []);

  let routeParams = {}

  // add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === 'Route';
    return isRoute ? props : null;
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);
  
  const Page = routesToUse.find(({ path }: any) => {
    if (path === currentPath) return true;

    // Se usa path-to-regexp
    // poder detectar rutas dinamicas 
    //? EJ: /search/:query <- es una ruta dinamica
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    // Guardar los parámetros de la url que eran dinámicos
    // Que hemos extraído con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params;
    return true;
  })?.Component;

  return Page 
    ? <Page routerParams={routeParams}/> 
    : <DefaultComponent routerParams={routeParams}/>;
};