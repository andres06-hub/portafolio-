export interface IRoutes {
  path: string;
  _Component?: (n:any) => JSX.Element;
  Component?: React.LazyExoticComponent<({ n }: any) => JSX.Element>;
}