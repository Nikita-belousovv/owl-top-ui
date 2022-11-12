import React, { useState } from "react";

import { Htag }   from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { Ptag } from "../components";
import { Tag } from "../components";
import { Rating } from "../components";
import { withLayout } from "../Layout";
import { GetStaticProps } from "next";
import axios from 'axios';

import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {

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
      <ul>
        {menu.map(itemMenu => <li key={itemMenu._id.secondCategory}>{itemMenu._id.secondCategory}</li>)}
      </ul>
      <Rating isEdit rating={rating} setRating={setRating} />
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}