import { getImage } from "../../helpers/getImage";
interface IProps {
  src: string;
}

const Image = ({ src }: IProps) => {
  return <img src={getImage(src)} alt={src} />;
};

export default Image;
