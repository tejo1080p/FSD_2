export default function LazyImage({ imageSrc, imageAlt }) {
  return (
    <div className="image-wrap">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="hero-image"
      />
    </div>
  );
}