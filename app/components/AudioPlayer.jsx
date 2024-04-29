export default function AudioPlayer(){
  return (
    <audio autoPlay preload="true" id="audio-player" className="m-auto fixed bottom-6 right-8" controls loop controlsList="nodownload">
      <source autoPlay src="/audio/abec_7.wav" type="audio/wav"></source>
    </audio>
  )
}