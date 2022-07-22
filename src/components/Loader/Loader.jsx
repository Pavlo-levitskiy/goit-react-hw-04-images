import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    </LoaderContainer>
  );
}
