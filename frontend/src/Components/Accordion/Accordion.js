import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="p-5 md:p-20 lg:p-20" id="faqs">
      <h1 className="font-mudclaw text-center text-6xl pb-10 lg:pb-20">FAQs</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <div className="bg-slate-400 border-2 border-b-0 border-black">
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <p>What is Cook-Off?</p>
            </Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              Cook-Off 7.0 is an annual 8 hour long competitive coding contest
              that will put your problem- solving and programming skills to the
              test. You will be competing against each-other in multiple rounds
              to work through problems of varied complexity in a limited amount
              of time.
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <div className="bg-slate-300 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Is the event online or offline?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              The event will be entirely offline and will be held on campus.
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <div className="bg-slate-400 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Where can I register for Cook-Off?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              Website registrations for Cook-Off has started
              <a
                href="https://events.vit.ac.in/events/gravitas2022/"
                className="text-red-500"
              >
                {" "}
                here
              </a>
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <div className="bg-slate-300 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Is there a registration fee?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              Yes Cook-Off has a registration fee of Rs.250 which is to be paid
              to participate.
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <div className="bg-slate-400 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>When is the last date for registration?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              Registrations will close 24hrs prior to the event
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <div className="bg-slate-300 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Will I require a team to participate?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              The main event is a solo contest and requires individual
              participation. Teams are available only for side events such as
              the hand and brain event.
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <div className="bg-slate-400 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>How much experience do I need?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              The contest will have problems ranging from beginner to
              intermediate and further advanced levels. Anyone interested in
              programming with basic knowledge in any one programming language
              can participate.
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <div className="bg-slate-300 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              {" "}
              What languages will your environment support?
            </Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>C/C++, Python and Java will be supported !!</Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <div className="bg-slate-400 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Do I need to bring my own laptop?</Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>Yes, you must bring your own laptops.</Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "pane20"}
        onChange={handleChange("pane20")}
      >
        <div className="bg-slate-300 border-2 border-y-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              Do I need to install any software in particular for this event?
            </Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-y-0">
          <AccordionDetails>
            <Typography>
              The event will be held on our portal for the advanced rounds but
              have your IDEs ready!
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "pane21"}
        onChange={handleChange("pane21")}
      >
        <div className="bg-slate-400 border-2 border-t-0 border-black">
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              If I still have some doubts, how do I get them resolved?{" "}
            </Typography>
          </AccordionSummary>
        </div>
        <div className="border-2 border-black border-t-0">
          <AccordionDetails>
            <Typography>
              Please contact us on any of our social handles to get your doubts
              resolved
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
    </div>
  );
}
