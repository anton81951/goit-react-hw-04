import styles from "./ImageCard.module.css"

const ImageCard = ({ imageUrl, altText, likes, autohor }) => {
  return (
    <div>
      <img  className={styles.cardFrame} src={imageUrl} alt={altText} />
      <div  className={styles.cardInfo}>
        <p>Likes: {likes}</p>
        <p>Author: {autohor}</p>
      </div>
    </div>
  );
};

export default ImageCard;


