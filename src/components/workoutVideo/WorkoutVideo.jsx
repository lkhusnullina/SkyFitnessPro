
const src = "https://www.youtube.com/embed/v-xTLFDhoD0";

const Video = () => {
  return (
    <iframe 
      width="1160"
      height="639"
      src={src}
    //   title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;