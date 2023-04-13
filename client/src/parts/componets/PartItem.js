import React, { useState } from "react";
//import { Link } from "react-router-dom";

import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import Modal from '../../shared/UIElements/Modal';

import "./PartItem.css";

const PartItem = (props) => {
    const [showConfirmModal, setShowConfirmModal ] = useState(false);

    const showDeleteWarningHandler = () => {
       setShowConfirmModal(true); 
    };
    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };
    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log('...deleting');
    };


  return (
      <React.Fragment>
      <Modal
        show= {showConfirmModal}
        onCancel= {cancelDeleteHandler}
        header= 'are you sure' footerClass='part-item__modal-actions' footer={
            <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>CANCLE</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </React.Fragment>
        }>
      <p>do you wnat to proceed and delete this part? please note that this cannot be undone</p>
      </Modal>

    <li className="part-item">
      <Card className="part-item__content">
          <div>
            <div className="part-item__info">
              <h2>{props.name}</h2>
              <h3>PART SIZE: {props.size}</h3>
              <h3>QUANTITY: {props.quantity}</h3>
              <h3>PARTNUMBER: {props.partNumber}</h3>
            </div>
          </div>
      <div>
        <Button to={`/parts/${props.id}`}>EDIT</Button>
        <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
      </div>
      </Card>
    </li>
      </React.Fragment>
  );
};
export default PartItem;
