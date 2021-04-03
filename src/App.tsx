import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");
interface TransactionsModal {
  newTransactionModal: boolean;
}

export function App() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionMondal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={newTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
  // protocolos da reclamação da multa de auto-religação na energia!
  // 75945386 -> atendimento enel da maquina dia 30/03/2021
  // 75946470 -> financeiro enel 30/03/2021
}
