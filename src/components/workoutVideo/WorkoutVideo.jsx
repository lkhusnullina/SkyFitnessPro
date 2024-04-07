const src = 'https://www.youtube.com/embed/v-xTLFDhoD0'

const Video = ({workout}) => {
  return (
    <iframe
      width="1160"
      height="639"
      src={workout.video}
      //title="Youtube Player"
      frameBorder="0"
      allowFullScreen
    />
  )
}

export default Video
