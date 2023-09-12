import React, { ReactHTMLElement, useState } from "react";
import { styled } from "styled-components";
import Flex from "../../atoms/Layouts/Flex";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

type Props = {
  target: string[];
  submit: (tgt: string, query: string) => void;
};

const Search = ({ target, submit }: Props) => {
  const [selectedTarget, setSelectedTarget] = useState(target[0]);
  const [query, setQuery] = useState("");

  return (
    <Flex gap="10px">
      <Select
        onChange={(e) => setSelectedTarget(e.target.value)}
        value={selectedTarget}>
        {target.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </Select>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <Input
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
          border={false}
          height="50px"
        />
        <Button
          onClick={() => {
            submit(selectedTarget, query);
          }}
          color="grey"
          height="50px">
          검색
        </Button>
      </Form>
    </Flex>
  );
};

const Select = styled.select`
  padding: 10px;
  width: 150px;
  height: 50px;
  border-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export default React.memo(Search);
