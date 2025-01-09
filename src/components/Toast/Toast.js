import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ status = "notice", content, onDismiss }) {
  const IconTag = ICONS_BY_VARIANT[status];

  if (!IconTag) {
    throw new Error(
      `${status} isn't a correct status. Valid status: ${Object.keys(
        ICONS_BY_VARIANT
      )}`
    );
  }

  return (
    <div className={`${styles.toast} ${styles[status]}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>{content}</p>
      <button className={styles.closeButton} onClick={onDismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
