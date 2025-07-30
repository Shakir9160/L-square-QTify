import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import styles from "./Feedback.module.css";
import { useSnackbar } from "notistack";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  description: "",
};

const initialErrors = {
  name: "",
  email: "",
  subject: "",
  description: "",
};

function Feedback({ open, handleClose }) {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90vw" : "45vw",
    maxHeight: "90vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };

  const validate = () => {
    const newErrors = { ...initialErrors };
    const nameRegex = /^[a-zA-Z ]{1,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectRegex = /^[a-zA-Z0-9 ]{1,100}$/;

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (!nameRegex.test(form.name)) {
      newErrors.name = "Only alphabets allowed, max 50 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!subjectRegex.test(form.subject)) {
      newErrors.subject = "Only alphanumeric characters allowed";
    }

    if (form.description.trim().length > 500) {
      newErrors.description = "Maximum 500 characters allowed";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (validate()) {
      enqueueSnackbar("Feedback submitted successfully", {
        variant: "success",
      }); // Show success message
      handleClose(); // Close modal
      setForm(initialFormState); // Reset form
      setErrors(initialErrors); // Clear errors
    }
  };

  return (
    <Modal open={open} onClose={handleClose} className={styles.modal}>
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          style={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Stack spacing={2}>
          <h3>Feedback</h3>

          <TextField
            id="name"
            label="Full Name *"
            variant="outlined"
            size="small"
            value={form.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
          />

          <TextField
            id="email"
            label="Email ID *"
            variant="outlined"
            size="small"
            value={form.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
          />

          <TextField
            id="subject"
            label="Subject *"
            variant="outlined"
            size="small"
            value={form.subject}
            onChange={handleChange}
            error={Boolean(errors.subject)}
            helperText={errors.subject}
            fullWidth
          />

          <TextField
            id="description"
            label="Description"
            variant="outlined"
            size="small"
            multiline
            rows={4}
            value={form.description}
            onChange={handleChange}
            error={Boolean(errors.description)}
            helperText={errors.description}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            className={styles.submitBtn}
            sx={{ fontWeight: "bold" }}
          >
            Submit Feedback
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default Feedback;
