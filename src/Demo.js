import React from "react";
import "./Form.css";
import { Field, Form, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TextField = (props) => {
    const { meta = {} } = props;
    const inputProps = {
        type: props.type || "text",
        className: props.className,
        name: props.input.name,
        id: props.input.id,
        readOnly: props.readOnly,
        autoFocus: props.autoFocus,
        autoComplete: props.autoComplete,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        value: meta.unconrolled ? undefined : props.input.value,
        onChange: props.input.onChange,
        onKeyUp: props.onKeyUp,
        onBlur: props.onBlur,
        step: props.step || "",
        min: props.min || "",
    };

    return (
        <>
            <input {...props} {...inputProps} />
            {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
            ) : null}
        </>
    );
};

const renderTextArea = ({ input, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <textarea {...input} placeholder="Content" rows="3" cols="77" />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const required = (value) =>
    value || typeof value === "number" ? undefined : "This field is required";

const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;

const DataForm = ({ handleSubmit, form }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/table')
    }

    const submit = (values) => {
        console.log({ values });
    };

    const domain = ['React', 'Java Full Stack', 'Dot NET Full Stack', 'Testing',]

    return (
        <div style={{ width: "1100px", margin: "40px auto" }}>
            <Form onSubmit={handleSubmit(submit)}>
                <Box
                    display={'flex'}
                    flexDirection='column'
                    maxWidth={1000}
                    justifyContent={'center'}
                    alignItems='center'
                    margin={'auto'}
                    marginTop={10}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc'
                        }
                    }}
                >
                    <Typography
                        variant="h2"
                        padding={3}
                        textAlign='center'>
                        Data Form
                    </Typography>

                    <div className="form-field">
                        <label className="form-label "> Name</label>
                        <Field
                            className="form-control"
                            name="firstName"
                            type="text"
                            component={TextField}
                            validate={[required]}
                        />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Age</label>
                        <Field className="form-control" name="age" component="input" type="number" />
                    </div>
                    <div className="form-field">
                        <label className="form-label "> Email</label>
                        <Field
                            className="form-control"
                            name="email"
                            type="email"
                            component={TextField}
                            validate={[required, email]}
                        />
                    </div>
                    <div className="form-field">
                        <label className="form-label">Domain</label>
                        <div>
                            <Field className="form-control" name="domain" component="select">
                                <option value="">Select Your Domain</option>
                                {domain.map(colorOption =>
                                    <option value={colorOption} key={colorOption}>{colorOption}</option>)}
                            </Field>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">Bio</label>
                        <Field component={renderTextArea} />
                    </div>
                    <Button
                        onClick={handleClick}
                        type="button"
                        sx={{
                            marginTop: 3,
                            borderRadius: 3
                        }}
                        variant="contained"
                        color="warning"
                    >
                        Submit
                    </Button>
                </Box>
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        form: state.form,
    };
};

export default reduxForm({
    form: "DataForm",
    enableReinitialize: true,
})(connect(mapStateToProps)(DataForm));