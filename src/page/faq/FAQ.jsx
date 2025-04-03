import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";
import Titel from "../../components/Titel";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack direction={"column"} spacing={2}>
      <Titel titel={"FAQ"} brg={"Frequently Asked Questions"} />
      <Accordion
        defaultExpanded
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Users
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Notifications
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Manage notification settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Security
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Update your security settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        // @ts-ignore
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Privacy
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            Adjust your privacy settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default FAQ;
