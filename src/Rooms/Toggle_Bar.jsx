import { Select } from "@mantine/core";
const Toggle_Bar = () => {
  return (
    <div id="select_bar">
      <Select
        id="M-auto"
        label="Room Type"
        placeholder="Select Room"
        data={[
          { value: "All Rooms", label: "All Rooms" },
          { value: "Single Room", label: "Single Room" },
          { value: "Double Room", label: "Double Room" },
          { value: "Delux Room", label: "Delux Room" },
        ]}
      />
    </div>
  );
};
export default Toggle_Bar;
