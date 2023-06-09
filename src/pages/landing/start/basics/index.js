import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { Box, Button as MuiButton, Grid, Typography } from "@mui/material";
import { spacing } from "@mui/system";

import RadioButton from "../../../../components/common/radioButton";

import Architecture from "./architecture";
import Database from "./database";
import LogoDesign from "./logoDesign";
import MobileApp from "./mobileApp";
import Overview from "./overview";
import WebApp from "./webApp";
import Website from "./website";

import { projectTypes } from "./mock";
import { convertDateToYYYYMMDD } from "../../../../utils/functions";

const Button = styled(MuiButton)`
  ${spacing};
  font-size: 18px;
  line-height: 21px;
`;

function Basics({ handleSubmit }) {
  const defaultJobDetails = {
    appCategory: "",
    attachment: "",
    budget: "",
    buildingSize: "",
    completionStatus: "",
    constructionType: "",
    databaseURL: "",
    deliveryDate: convertDateToYYYYMMDD(new Date()),
    description: "",
    designSource: "",
    features: [],
    isEngineerApprovalRequired: true,
    platform: "",
    quantity: "",
    service: "",
    specialRequests: "",
    technology: "",
    useLicensing: "",
  };
  const [isOverview, setIsOverview] = useState(false);
  const [jobDetails, setJobDetails] = useState(defaultJobDetails);
  const [selectedProjectType, setSelectedProjectType] = useState("website");

  useEffect(() => {
    setJobDetails(defaultJobDetails);
  }, [selectedProjectType]);

  const handleClearClicked = () => {
    setJobDetails(defaultJobDetails);
  };
  const handleEditClicked = () => {
    setIsOverview(false);
  };
  const handleNextClicked = () => {
    setIsOverview(true);
  };
  const handleSubmitClicked = () => {
    handleSubmit({ ...jobDetails, projectType: selectedProjectType });
  };

  const renderEditableProjectDetail = () => {
    return selectedProjectType === "website" ? (
      <Website jobDetails={jobDetails} update={setJobDetails} />
    ) : selectedProjectType === "mobileApp" ? (
      <MobileApp jobDetails={jobDetails} update={setJobDetails} />
    ) : selectedProjectType === "logoDesign" ? (
      <LogoDesign jobDetails={jobDetails} update={setJobDetails} />
    ) : selectedProjectType === "webApp" ? (
      <WebApp jobDetails={jobDetails} update={setJobDetails} />
    ) : selectedProjectType === "database" ? (
      <Database jobDetails={jobDetails} update={setJobDetails} />
    ) : selectedProjectType === "architecture" ? (
      <Architecture jobDetails={jobDetails} update={setJobDetails} />
    ) : (
      <></>
    );
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        {!isOverview ? (
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box pl={4}>
                    <Typography variant="h3" color="primary">
                      Project Type
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <RadioButton
                    data={projectTypes}
                    selected={selectedProjectType}
                    setSelected={setSelectedProjectType}
                    variant="contained"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {renderEditableProjectDetail()}
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={2}
              >
                <Grid item>
                  <Button
                    onClick={handleClearClicked}
                    color="secondary"
                    variant="outlined"
                  >
                    Clear
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleNextClicked}
                    color="primary"
                    variant="contained"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Overview
            projectType={selectedProjectType}
            jobDetails={jobDetails}
            handleEdit={handleEditClicked}
            handleSubmit={handleSubmitClicked}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Basics;
