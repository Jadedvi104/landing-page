import React from "react";

function VideosFrame() {
  return (
    <div>
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/ANFuxv5IR1A"
        title="เพลงใหม่ครูดิว Preposition ออกสอบ TOEIC บ่อยที่สุด‼ [Update]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div class="mt-6">
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/VIV9k6Eetbw"
        title="ติว TOEIC ครูดิว:  Gerund น่ารู้ ดูไว้เพิ่มความมั้นใจก่อนสอบ TOEIC"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
      
    </div>
  );
}

export default VideosFrame;
