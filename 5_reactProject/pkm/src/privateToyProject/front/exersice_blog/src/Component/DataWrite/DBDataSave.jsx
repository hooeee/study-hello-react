import React, { useState } from "react";
import "./DBDataSave.css";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import { styled } from "@mui/joy/styles";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from '@mui/material/Button';

function DBDataSave() {
  return (
    <>
      <div className="grafana-tab-main">
        <ul>
          <li className="on-li-style">헬스 운동 기록 저장</li>
          <li className="off-li-style">홈트레이닝 운동 기록 저장</li>
        </ul>
      </div>
      <div className="grafana-style">
        <div className="grafana-content-main">
          <div className="on-li-style">헬스 운동 기록 저장</div>
          <SelectIndicator />
        </div>
      </div>
    </>
  );
}

export default DBDataSave;

function SelectIndicator() {
  const [variant, setVariant] = React.useState('solid');
  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.vars.palette.text.tertiary,
  }));
  return (
    <>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" />}
        spacing={0.05}
        justifyContent="start"
        sx={{ width: "100%" }}
      >
        <Item>
          <FormControl>
            <FormLabel>Year</FormLabel>
            <Input placeholder="년도를 입력해주세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="운동이름 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Minute</FormLabel>
            <Input placeholder="운동한 시간 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Distance</FormLabel>
            <Input placeholder="운동한 거리 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Calories</FormLabel>
            <Input placeholder="소비한 칼로리 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Count</FormLabel>
            <Input placeholder="운동한 횟수 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Weight</FormLabel>
            <Input placeholder="중량 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Item>
        <FormControl>
            <FormLabel>Floor</FormLabel>
            <Input placeholder="층수 입력하세요." />
            <FormHelperText>This is a helper text.</FormHelperText>
          </FormControl>
        </Item>
        <Button variant="outlined">Save</Button>

      </Stack>
   </>
  );
}
