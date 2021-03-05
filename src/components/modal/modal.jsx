import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { close, filterByName } from "../../store/state";
import RowSpaceBetween from "../../templates/row-space-between/row-space-between";
import Search from "../header/search/search";
import ModalTable from "./modal-table/modal-table";
import styles from "./modal.module.scss";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-25%",
        transform: "translate(-50%, -50%)",
        width: "50%",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.7",
    },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function ModalApp({ isOpen = false }) {
    const dispatch = useDispatch();
    let [isOpenModal, setOpen] = useState(isOpen);

    function closeModal() {
        dispatch(close());
        setOpen(false);
    }
    console.log("modal", isOpenModal);
    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <RowSpaceBetween
                left={<h1 className={styles.h1}>Работяги</h1>}
                right={<button onClick={closeModal}>close</button>}
            />
            <Search filterHandler={filterByName} />
            <ModalTable />
        </Modal>
    );
}
