import { useColorMode } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";

const HomeGraph = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const graphTheme = {
    textColor: colorMode == "dark" ? "#FFF" : "#000",
  };
  return (
    <ResponsiveBar
      data={[
        { Company: "YOUnion", YOUnion: 90 },
        { Company: "Grubhub", Grubhub: 82 },
        { Company: "Doordash", Doordash: 80 },
      ]}
      keys={["YOUnion", "Grubhub", "Doordash"]}
      indexBy="Company"
      margin={{ top: 50, right: 40, bottom: 50, left: 80 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#3D8D51", "#262626", "#262626"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Companies",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Profit From Selling $100 Item",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="#FFF"
      enableGridY={false}
      role="application"
      theme={graphTheme}
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default HomeGraph;
