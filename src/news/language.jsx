import {Field, reduxForm} from 'redux-form'
import React from "react";
import Select from "@material-ui/core/Select/Select";
import Input from "@material-ui/core/Input/Input";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const initialValue = 'EN';

const Language = () => (
    <form>
        <Field component={AdaptedSelect} name="lang" label="Language"/>
    </form>
);

const AdaptedSelect = ({input: {value, onChange}, ...custom}) => (
    <Select
        value={value}
        onChange={onChange}
        input={<Input name="name" id="name-disabled" />}
        {...custom}
    >
        <MenuItem value={'EN'}>English</MenuItem>
        <MenuItem value={'PT'}>Portuguese</MenuItem>
    </Select>
);

export default reduxForm({form: 'lang', initialValue})(Language);