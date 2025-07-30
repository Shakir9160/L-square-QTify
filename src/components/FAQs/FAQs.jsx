import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./FAQs.module.css";

export default function FAQs({ faqs }) {
  return (
    <Container maxWidth="md" className={styles.faqWrapper}>
      <Typography variant="h5" component="h2" className={styles.heading}>
        FAQs
      </Typography>

      <Stack spacing={1.5} className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <Accordion key={index} className={styles.faqAccordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className={styles.faqAccordionSummary}
              sx={{
                minHeight: "40px !important",
                "&.Mui-expanded": {
                  minHeight: "40px",
                },
                "& .MuiAccordionSummary-content": {
                  margin: "8px 0",
                },
              }}
            >
              <Typography className={styles.questionText}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={styles.faqAccordionDetails}>
              <Typography className={styles.answerText}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}
