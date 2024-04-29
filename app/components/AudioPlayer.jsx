export default function AudioPlayer(){
  return (
    <audio autoPlay  id="audio" className="m-auto fixed bottom-6 right-8" controls loop controlsList="nodownload">
      <source src="/audio/abec_7.wav" type="audio/wav"></source>
    </audio>
  )
}