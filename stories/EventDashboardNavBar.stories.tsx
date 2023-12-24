import type { ComponentStory, Meta, StoryObj } from "@storybook/react";

import Event_Dashboard_Nav_bar from "../components/Event_Dashboard_Nav_bar";
import Event_Dashboard_Btn from "@/components/Event_Dashboard_Btn";

const meta: Meta<typeof Event_Dashboard_Nav_bar> = {
  title: "Components/Event_Dashboard_Nav_bar",
  component: Event_Dashboard_Nav_bar,
};

function handleOvervier() {}
function handleMyteam() {}
function handleReports() {}
function handleCampaign() {}
function handleSetting() {}
function handleTickets() {}

export default meta;
type Story = StoryObj<typeof Event_Dashboard_Nav_bar>;

export const Primary: Story = {
  render: () => (
    <Event_Dashboard_Nav_bar>
      <Event_Dashboard_Btn onClick={handleOvervier} text="OVERVIEW" />
      <Event_Dashboard_Btn onClick={handleMyteam} text="MY TEAM" />
      <Event_Dashboard_Btn onClick={handleReports} text="REPORTS" />
      <Event_Dashboard_Btn onClick={handleCampaign} text="CAMPAIGN" />
      <Event_Dashboard_Btn onClick={handleSetting} text="SETTINGS" />
      <Event_Dashboard_Btn onClick={handleTickets} text="TICKETS" />
    </Event_Dashboard_Nav_bar>
  ),
};
