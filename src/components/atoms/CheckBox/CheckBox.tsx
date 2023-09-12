import { styled } from "styled-components";
import Flex from "../Layouts/Flex";

type Props = {
  height?: string;
  gap?: string;
  list: string[];
  value: any;
  chkedValue: any;
  nonChkedValue: any;
  onChange: any;
};

const CheckBox = ({
  height = "30px",
  list,
  value,
  chkedValue = true,
  nonChkedValue = false,
  onChange,
}: Props) => {
  const select = (idx: number) => {
    let temp = value;
    temp[idx] = temp[idx] === chkedValue ? nonChkedValue : chkedValue;
    onChange(temp);
  };
  return (
    <Flex height={height} gap="10px">
      {list.map((val: string, idx: number) => {
        return (
          <Label key={`CheckBoxItem_${val}`}>
            <input
              type="checkbox"
              name={list[0]}
              value={val}
              checked={value[idx] === chkedValue}
              onChange={() => {
                select(idx);
              }}
            />
            {val}
          </Label>
        );
      })}
    </Flex>
  );
};

const Label = styled.label`
  font-size: 1rem;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default CheckBox;
