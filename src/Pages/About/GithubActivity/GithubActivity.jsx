import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  const colorTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <div className="gitHubCalendar_container">
      <GitHubCalendar
        username="milan-960"
        year={new Date().getFullYear()}
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
