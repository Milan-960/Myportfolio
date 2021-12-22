import cx from "classnames";
import ms from "./LinerProgress.module.scss";

const LinerProgress = () => {
  return (
    <div className={ms.linearProgress}>
      <div className={cx(ms.bar, ms.bar1)} />
      <div className={cx(ms.bar, ms.bar2)} />
    </div>
  );
};

export default LinerProgress;
