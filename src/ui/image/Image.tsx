import { getImageURL } from "../../helpers/getImageURL";
interface IProps {
  src: string;
}

const Image = ({ src }: IProps) => {
  return <img src={getImageURL(src)} alt={src} />;
};

export default Image;
