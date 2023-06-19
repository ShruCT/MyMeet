import { DatePicker } from "@mui/lab";

export const FieldDatePicker = ({ input, placeholder, minDate, maxDate }) => (
    <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={input.value || null}
        onChange={input.onChange}
        minDate={minDate}
        maxDate={maxDate}
        disabledKeyboardNavigation
        placeholderText={placeholder}
    />
);


{/* <div className="form-field">
                        <div className="form-field">
                            <label>Start Time</label>
                            <div style={{ margin: "5% 40%" }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <TimePicker
                                            label="Time"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="form-field">
                            <label>Start Time</label>
                            <div style={{ margin: "5% 40%" }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <TimePicker
                                            label="Time"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div> */}