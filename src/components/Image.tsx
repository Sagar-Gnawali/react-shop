interface ImageContainerPropTypes {
  src: string | undefined;
  width?: string;
  height?: string;
  isThumbnail?: boolean;
  alt?: string;
  className?: string;
}

const ImageContainer = (props: ImageContainerPropTypes) => {
  const { src, width, height, isThumbnail, alt, ...rest } = props;
  if (!src) return null;
  return (
    <div
      className={`${
        isThumbnail ? "image-thumbnail-container" : "image-container"
      }`}
    >
      <img
        src={src}
        alt={alt ?? "img-contaner"}
        width={width ? width : "50px"}
        height={height ? height : "50px"}
        {...rest}
      />
    </div>
  );
};

export default ImageContainer;
