export const getLaunchCardViewData = ({
  launch_date_local,
  mission_name,
  rocket = {},
  launch_site = {},
}) => {
  let formattedDate = launch_date_local;
  try {
    const date = new Date(launch_date_local);
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    formattedDate = formatter.format(date);
  } catch (error) {
    console.log("error in date format ", error);
  }
  const details = [
    {
      title: "Mission:",
      value: mission_name,
    },
    {
      title: "Rocket:",
      value: rocket?.rocket_name,
    },
    {
      title: "Location:",
      value: launch_site?.site_name,
    },
    {
      title: "Date:",
      value: formattedDate,
    },
  ];
  return details;
};
