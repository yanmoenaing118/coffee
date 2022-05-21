import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  margin-bottom: 3rem;
`;

const InputGroup = styled.div`
  flex: ${({ flex }) => flex};
  display: flex;
  flex-direction: column;

  label {
    font-size: var(--text-2);
    font-weight: bold;
    opacity: 0.7;
    margin-bottom:.4rem;
  }

  input {
    border: 0.5px solid #000000;
    padding: 8px;
  }
`;

export default function AddressInfoForm() {
  return (
    <div
    style={{
      width:"90%"
    }}
    >
      <Row gap="6rem">
        <InputGroup flex="1">
          <label htmlFor="fname">First Name *</label>
          <input type="text" id="fname" name="fname" />
        </InputGroup>
        <InputGroup flex="1">
          <label htmlFor="lname">Last Name *</label>
          <input type="text" id="lname" name="lname" />
        </InputGroup>
      </Row>

      <Row gap="2rem">
        <InputGroup flex="1.8">
          <label htmlFor="fname">Address *</label>
          <input type="text" id="fname" name="fname" />
        </InputGroup>
        <InputGroup flex="1">
          <label htmlFor="lname">Apart*</label>
          <input type="text" id="lname" name="lname" />
        </InputGroup>
      </Row>

      <Row gap="6rem">
        <InputGroup flex="1">
          <label htmlFor="fname">Township *</label>
          <input type="text" id="fname" name="fname" />
        </InputGroup>
        <InputGroup flex="1">
          <label for="city">City *</label>
          <input list="cities" id="city" name="city"  />

          <datalist id="cities">
            <option value="Yangon" selected />
            <option value="Mandalay" />
            <option value="Naypyitaw" />
            <option value="Pyin Oo Lwin" />
            <option value="Yesagyo" />
          </datalist>
        </InputGroup>
      </Row>
    </div>
  );
}
