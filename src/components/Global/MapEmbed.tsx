export default function MapEmbed() {
  return (
    <div className="rounded-[5px] h-full w-full">
      <iframe
        width="600"
        height="450"
        className="h-full w-full"
        src={`https://www.google.com/maps?q=株式会社NextStairs&output=embed&hl=ja`}
        allowFullScreen
      ></iframe>
    </div>
  );
}
