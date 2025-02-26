interface ImageContainerPropTypes {
  src: string | undefined;
  width?: string;
  height?: string;
  isThumbnail?: boolean;
}

const ImageContainer = (props: ImageContainerPropTypes) => {
  const { src, width, height, isThumbnail } = props;
  if (!src) return null;
  return (
    <div
      className={`${
        isThumbnail ? "image-thumbnail-container" : "image-container"
      }`}
    >
      <img
        src={src}
        width={width ? width : "50px"}
        height={height ? height : "50px"}
      />
    </div>
  );
};

export default ImageContainer;
