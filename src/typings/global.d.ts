/* eslint-disable  @typescript-eslint/no-explicit-any */
declare module 'cloudinary-react';
declare module 'intersection-observer';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

type Optional<T> = T | undefined;
type Nullable<T> = T | null;
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type SetRef<T> = SetState<Nullable<T>> | ((node: Nullable<T>) => void);
type KeyValObj<T> = { [key: string]: T };

interface Edges<T> {
  edges: {
    node: T & { id?: string; node_locale?: string };
  }[];
}

interface FluidImageProps {
  fluid: {
    sizes?: string;
    src?: string;
    srcSet?: string;
    srcSetWebp?: string;
    srcWebp?: string;
  };
}

type StaticImage = { name: string; childImageSharp: FluidImageProps };
type AllFiles = Edges<StaticImages & { publicURL: string }>;
