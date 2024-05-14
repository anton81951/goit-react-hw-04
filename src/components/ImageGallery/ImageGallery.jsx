import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard imageUrl={picture.urls.small} altText={picture.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;