import React, { useState } from "react";
import styled from "styled-components";
import Column from "./Column";

const DEFAULT_CARDS = [
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  { title: "Research DB options for new microservice", id: "5", column: "todo" },


  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  { title: "Refactor context providers to use Zustand", id: "8", column: "doing" },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },



  { title: "Set up DD dashboards for Lambda listener", id: "10", column: "done" },
];

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 3rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  overflow-x: auto;
`;

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <BoardContainer>
      <Column title="Backlog" column="backlog" bgColor="#4F46E5" cards={cards} setCards={setCards} />
      <Column title="TODO" column="todo" bgColor="#F59E0B" cards={cards} setCards={setCards} />
      <Column title="In Progress" column="doing" bgColor="#22C55E" cards={cards} setCards={setCards} />
    </BoardContainer>
  );
};

export default Board;
