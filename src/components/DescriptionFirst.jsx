import { Fragment } from "react";
import { Typography } from "@material-tailwind/react";

export default function DescriptionFirst() {
  return (
    <Fragment>
      <Typography variant="h1" color="blue" textGradient>
        ครูดิว ติวสอบ TOEICⓇ
      </Typography>
      <Typography variant="h1" color="blue-gray">
        พร้อมเทคนิค อัพคะแนน
      </Typography>
      <Typography variant="paragraph">
        <div class="flex justify-center">
          <ul class="list-outside">
            <li class="text-center">
              จัดหนัก TOEIC Grammar ออกสอบบ่อยที่ซู๊ดดดด
              พร้อมเทคนิคทำโจทย์ไวเวอร์!
            </li>
            <li class="text-center">
              Part of Speech ประเภทคำในภาษาอังกฤษ แต่ละแบบมีวิธีดูยังไง
              ให้ทำโจทย์ได้เร็ว!
            </li>
            <li class="text-center">
              Part of Speech ประเภทคำในภาษาอังกฤษ แต่ละแบบมีวิธีดูยังไง
              ให้ทำโจทย์ได้เร็ว!
            </li>
            <li class="text-center">
              Part of Speech ประเภทคำในภาษาอังกฤษ แต่ละแบบมีวิธีดูยังไง
              ให้ทำโจทย์ได้เร็ว!
            </li>
            <li class="text-center">
              Part of Speech ประเภทคำในภาษาอังกฤษ แต่ละแบบมีวิธีดูยังไง
              ให้ทำโจทย์ได้เร็ว!
            </li>
          </ul>
        </div>
      </Typography>
      <Typography variant="small"></Typography>
    </Fragment>
  );
}
