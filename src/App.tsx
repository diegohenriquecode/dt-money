import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

import Modal from "react-modal";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionMondal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={newTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
