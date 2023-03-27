import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../Layout/DashoboardLayout/Index";
import Dashboard from "../view/Dashboard/Index";
import Profession from "../view/Profession";
// import Modules from "../view/Modules/index"
import Modules from "../view/Modules/index";
import Welcome from "../../src/view/Welcome/index";
import Logo from "../view/UploadLogo/index";
import Appearnce from "../view/EstoreAppearnce/Appearnce";
import OTTAppearnce from "../view/OttAppearnce/Appearnce";
import PodcastAppearence from "../view/PodcastAppearnce/Appearence";
import EventAppearnce from "../view/EventAppearnce/Appearnce";
import NewsAppearnce from "../view/NewsAppearnce/Appearnce";
import { useSelector } from "react-redux";
import ColorScheme from "../view/ColorScheme/index";
import { EcomSiderbarContext } from "../Providers/EcomRightSidebar";
import { OttSiderbarContext } from "../Providers/OttRightSidebar";
import { PodcastSidebarContext } from "../Providers/PodcastRightSidebar";
import { EventSiderbarContext } from "../Providers/EventRightSidebar";
import { NewsSiderbarContext } from "../Providers/NewsRightSidebar";

function PrivateRoutes() {
  const { userData } = useSelector((state) => state.User);
  return (
    <Routes>
      <Route index element={<Navigate to={userData.nextURL} />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="logo" element={<Logo />} />

        <Route
          path="E-Store/appearnce/:id/:moduleID"
          element={
            <EcomSiderbarContext>
              <Appearnce />
            </EcomSiderbarContext>
          }
        />

        <Route
          path="OTT/appearnce/:id/:moduleID"
          element={
            <OttSiderbarContext>
              <OTTAppearnce />
            </OttSiderbarContext>
          }
        />
        <Route
          path="Podcast/appearnce/:id/:moduleID"
          element={
            <PodcastSidebarContext>
              <PodcastAppearence />
            </PodcastSidebarContext>
          }
        />
        <Route
          path="Events/appearnce/:id/:moduleID"
          element={
            <EventSiderbarContext>
              <EventAppearnce />
            </EventSiderbarContext>
          }
        />
        <Route
          path="News/appearnce/:id/:moduleID"
          element={
            <NewsSiderbarContext>
              <NewsAppearnce />
            </NewsSiderbarContext>
          }
        />

        <Route path="color-scheme" element={<ColorScheme />} />
      </Route>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/profession" element={<Profession />} />
      <Route path="/modules" element={<Modules />} />
    </Routes>
  );
}

export default PrivateRoutes;
