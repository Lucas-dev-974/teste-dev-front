import React from "react";
import { Title5 } from "../texts/Title5";
import { Button } from "../buttons/Button";
import { ArrowIcon } from "@/icons/ArrowIcon";
import "./ModalClosePopup.css";

interface ModalClosePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalClosePopup(props: ModalClosePopupProps) {
  if (!props.isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={props.onClose} />

      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-icon">
            <span className="modal-icon-text"> 🤝</span>
          </div>
          <Title5 text="Become an affiliate" />
        </div>

        <div className="modal-body">
          <div className="modal-text">
            <p className="modal-text-line">Join Landify affiliate</p>
            <p className="modal-text-line">program and earn</p>
            <p className="modal-text-line">of every purchase</p>
          </div>
          <div className="modal-percentage">
            <span className="modal-percentage-text">25%</span>
          </div>
        </div>

        <div className="modal-footer">
          <Button
            text="Register and start to earn"
            onClick={props.onClose}
            sideIcon={{ icon: <ArrowIcon />, side: "right" }}
            fullWidth
            style="dark"
          />
        </div>
      </div>
    </div>
  );
}
