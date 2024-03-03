import type { Item } from "../../types/types";
import { FC } from "react";
import s from "./ItemCard.module.css";

export const ItemCard: FC<Item> = (data) => {
  return (
    <div className={s.wrapper}>
      <div className={s.brand}>{data.brand}</div>
      <div className={s.id}>{data.id}</div>
      <div className={s.price}> {data.price}</div>
      <div className={s.product}>{data.product}</div>
    </div>
  );
};
