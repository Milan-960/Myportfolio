import cx from "classnames";

const LinerProgress = () => {
  return (
    <div className="linearProgress">
      <div className={cx("bar", "bar1")} />
      <div className={cx("bar", "bar2")} />
    </div>
  );
};

export default LinerProgress;
