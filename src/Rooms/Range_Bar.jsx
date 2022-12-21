import { Slider } from "@mantine/core";
const Range_Bar = () => {
  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];
  return (
    <div id="slider-div">
      <Slider
        id="sl"
        color="teal"
        marks={[
          {
            value: 20,
            // label: "20%"
          },
          {
            value: 50,
            //  label: "50%"
          },
          {
            value: 80,
            //  label: "80%"
          },
        ]}
      />
    </div>
  );
};

export default Range_Bar;
