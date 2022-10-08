import React from "react";
import Header from "@components/Header";
import TableHeader from "@components/ScoreScreen/TableHeader";
import TableElement from "./TableElement";

type UserLvl = {
  username: string;
  firstname: string;
  lastname: string;
  lvl: number;
  exp: number;
};

type Props = {
  lvlList: Array<UserLvl>;
};

const ScoreScreen: React.FC<Props> = ({ lvlList }) => (
  <div className="score-table">
    <Header />

    <div className="score-table__header flex justify-around mt-10 mb-4">
      <TableHeader value="Никнейм" />

      <TableHeader value="Имя пользователя" />

      <TableHeader value="Фамилия пользователя" />

      <TableHeader value="Уровень пользователя" />

      <TableHeader value="Опыт пользователя" />
    </div>

    {lvlList.map(user => (
      <ul className="score-table__list flex justify-around mt-2">
        <TableElement value={user.username} />

        <TableElement value={user.firstname} />

        <TableElement value={user.lastname} />

        <TableElement value={`Уровень пользователя - ${user.lvl}`} />

        <TableElement value={`Опыт пользователя - ${user.exp}`} />
      </ul>
    ))}
  </div>
);

export default ScoreScreen;
