import React from "react";
import Header from "../../components/Header/Header";
import { Grid } from "@mantine/core";
import AddInfoSection from "../../components/AddInfoSection/AddInfoSection";
import NoticeViewSection from "../../components/NoticeViewSection/NoticeViewSection";

function AppView() {
  return (
    <div>
      <Header />
      <Grid grow justify="space-between" gutter="xl">
        <Grid.Col span={6}>
          <AddInfoSection />
        </Grid.Col>
        <Grid.Col span={6}>
          <NoticeViewSection />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default AppView;
