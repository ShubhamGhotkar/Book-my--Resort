import { NumberInput } from "@mantine/core";
const Num_Inp = () => {
  return (
    <div id="num-inpDiv">
      <NumberInput
        id="M-auto"
        defaultValue={1}
        placeholder="Guest"
        label="Guest"
        radius="md"
        min={1}
        max={3}
      />
    </div>
  );
};

export default Num_Inp;
