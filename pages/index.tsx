import React, { useState } from "react";

import { Htag }   from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { Ptag } from "../components";
import { Tag } from "../components";
import { Rating } from "../components";

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary">Отправить</Button>
      <Button appearance="ghost" arrow="right">Читать отзывы</Button>
      <Ptag type="small">
        Adobe InDesign - 1
      </Ptag>
      <Ptag type="medium">
        Adobe Illustrator - 2
      </Ptag>
      <Ptag type="large">
        Corel Draw - 3
      </Ptag>
      <Tag type="medium" color="primary">
        hh.ru
      </Tag>

      <Rating isEdit rating={rating} setRating={setRating} />
    </div>
  );
}
